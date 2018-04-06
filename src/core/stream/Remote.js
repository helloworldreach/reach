import cache from '../util/cache';
import * as DataSync from '../util/DataSync';
import * as Log from '../util/Log';
import * as Events from '../../definitions/Events';

/**
 * A published Stream
 * @public
 */
export default class Remote {
	/**
	 * @access protected
	 * @param {object} values
	 */
	constructor(values) {
		Log.d('Remote~new', values);
		/**
		 * The uid of the room the stream is published in
		 * @type {string}
		 */
		this.roomId = values.roomId;
		/**
		 * The uid of this stream
		 * @type {string}
		 */
		this.uid = values.uid;
		/**
		 * The uid of the publisher of the stream
		 * @type {string}
		 */
		this.from = values.from;
		/**
		 * The type of the stream
		 * @type {string}
		 */
		this.type = values.type;
		/**
		 * @type {string}
		 */
		this.device = values.device;
		/**
		 * @type {string}
		 */
		this.height = values.height;
		/**
		 * @type {string}
		 */
		this.width = values.width;
		/**
		 * The local DOM container element where the {@link Local~media} is displayed
		 * @type {Element}
		 */
		this.container = cache.config.remoteStreamContainer;
		/**
		 * @type {{audio: boolean, video: boolean}}
		 */
		this.muted = Object.assign({audio: false, video: false}, values.muted);
		/**
		 * List of callbacks for mute status change
		 * @type {{MUTE: function[]}}
		 * @private
		 */
		this._callbacks = {};
		/**
		 * PeerConnections associated to this remote stream
		 * @type {PeerConnection}
		 */
		this.peerConnection = null;

		/**
		 * The map of Stats to configure stats gathering
		 * @type {{interval: string|number, selector: string, successCallback: function, errorCallback: function}}
		 * @private
		*/
		this._mapStats = null;
		this.stats = values.mapStats;
	}

	/**
	 * DOM element where the MediaStream is displayed
	 * @returns {Element}
	 */
	get node() {
		return this.peerConnection ? this.peerConnection.node : null;
	}

	/**
	 * Subscribe to the stream
	 * @param {Element} [remoteStreamContainer] The element the stream is attached to. Can be null if already specified in ReachConfig.
	 * @param {{interval: string|number, successCallback: function, errorCallback: function, filter: string}} [stats]
	 * The object definition to monitor stats delivering.
	 * Description :
	 * - interval : timer interval when calling stats.
	 * - successCallback(statsResult) : callback when getting map stats with success. statsResult = {stackId: string, streamId: string, mapStatResult: Map}.
	 * - errorCallback(error) : callback when getting map stats without success.
	 * - filter : a regExp to filter the map stat's keys in mapStatResult.
	 * @example stream.subscribe($streamElement[0], {'interval': 1000
	 , 'successCallback': obj => {console.log("stackId:" + obj.stackId + " streamId:" + obj.streamId); 
	 obj.mapStatResult.forEach((value, key) => console.log("mapStatResult[" + key + "]=" + Object.entries(value)));}
	 , 'errorCallback': e => {console.log(e);}, 'filter': 'inbound'})
	 
	 * - Example of return with Firefox 59 & 52 :
	 stackId:-L8hDWI7i9KZ2UJGxyr---L8hDuGjLMxp6BkPEXIF streamId:-L8hG7W3sJ5jGLTNtI28
	 mapStatResult[inbound_rtp_audio_0]=id,inbound_rtp_audio_0,timestamp,1522251675558,type,inboundrtp,isRemote,false,mediaType,audio
	 ,nackCount,0,remoteId,inbound_rtcp_audio_0,ssrc,1116906917,bytesReceived,18946,jitter,0,packetsLost,0,packetsReceived,177
	 mapStatResult[inbound_rtp_video_1]=id,inbound_rtp_video_1,timestamp,1522251675558,type,inboundrtp,bitrateMean,237328.33333333334
	 ,bitrateStdDev,207164.73487702163,firCount,0,framerateMean,20.666666666666668,framerateStdDev,3.6147844564602556,isRemote,false
	 ,mediaType,video,nackCount,0,pliCount,0,remoteId,inbound_rtcp_video_1,ssrc,2095970140,bytesReceived,235405,discardedPackets,0
         ,framesDecoded,101,jitter,0.011,packetsLost,0,packetsReceived,249
	 mapStatResult[inbound_rtcp_audio_0]=id,inbound_rtcp_audio_0,timestamp,1522251644479.28,type,outboundrtp,isRemote,true,mediaType,audio
	 ,remoteId,inbound_rtp_audio_0,ssrc,1116906917,bytesSent,7545,packetsSent,87
	 mapStatResult[inbound_rtcp_video_1]=id,inbound_rtcp_video_1,timestamp,313010534,type,outboundrtp,isRemote,true,mediaType,video
	 ,remoteId,inbound_rtp_video_1,ssrc,2095970140,bytesSent,206062,packetsSent,221
        
	 * - Example of return with Chrome 65 : see https://w3c.github.io/webrtc-stats/ where stats variables are explained.
        
	 * @returns {Promise}
	 */
	subscribe(remoteStreamContainer, stats = null) {
		if(!cache.user) {
			return Promise.reject(new Error('Only an authenticated user can subscribe to a Room\'s stream.'));
		}
		// TODO: Test if not already subscribed ?
		this.container = remoteStreamContainer || cache.config.remoteStreamContainer;
		this.stats = stats;
		Log.d('Remote~subscribe', this.container, this.stats);
		return cache.peerConnections.answer(this, this.container)
			.then(pc => {this.peerConnection = pc;})
			.then(() => DataSync.update(`_/rooms/${this.roomId}/subscribers/${this.uid}/${cache.device}`, {
				to: cache.user.uid,
				_created: DataSync.ts()
			}))
			.then(() => {
				DataSync.onDisconnect(`_/rooms/${this.roomId}/subscribers/${this.uid}/${cache.device}`).remove();
				let subscribed = false;
				DataSync.on(`_/rooms/${this.roomId}/streams/${this.uid}`, 'value', snapData => {
					const values = snapData.val();
					Log.d('Remote~updated', values);
					if(values) {
						// Update type
						this.type = values.type;
						//update stream size
						const height = values.height;
						const width = values.width;
						if((height || width) && (height !== this.height || width !== this.height)) {
							this.height = values.height;
							this.width = values.width;
							Log.w(this._callbacks[Events.stream.SIZE]);
							(this._callbacks[Events.stream.SIZE] || []).forEach(cb => cb(this.height, this.width));
						}
						// Update mute status
						const muted = values.muted;
						if(muted && (muted.audio !== this.muted.audio || muted.video !== this.muted.video)) {
							this.muted = muted;
							Log.w(this._callbacks[Events.stream.MUTE]);
							(this._callbacks[Events.stream.MUTE] || []).forEach(cb => cb(this.muted));
						}
						subscribed = true;
					} else if(subscribed) {
						Log.i('Remote#removed', this);
						this._close(true);
					}
				});
			})
			.catch(Log.r('Remote~subscribe'));
	}

	/**
	 * Unsubscribe from the stream
	 * @returns {Promise}
	 */
	unSubscribe() {
		return this._close(false);
	}

	/**
	 * Close the remote Stream
	 * @param {boolean} remote Close is initiated by publisher
	 * @returns {*}
	 * @private
	 */
	_close(remote) {
		// Cancel onDisconnect
		DataSync.onDisconnect(`_/rooms/${this.roomId}/subscribers/${this.uid}/${cache.device}`).cancel();
		// Stop listening to stream modifications
		DataSync.off(`_/rooms/${this.roomId}/streams/${this.uid}`, 'value');
		// Un-subscribe
		!remote && DataSync.remove(`_/rooms/${this.roomId}/subscribers/${this.uid}/${cache.device}`);
		// Close PeerConnection
		return Promise.resolve(cache.peerConnections.close(this.uid, this.device));
	}

	/**
	 * Register a callback for a specific event
	 * @param {string} event The event name ({@link Events/Stream})
	 * @param {function} callback The callback for the event
	 */
	on(event, callback) {
		if(Events.stream.supports(event)) {
			if(!this._callbacks[event]) {
				this._callbacks[event] = [];
			}
			this._callbacks[event].push(callback);
		}
	}

	/**
	 * Register a callback for a specific event
	 * @param {string} [event] The event name ({@link Events/Stream})
	 * @param {function} [callback] The callback for the event
	 */
	off(event, callback) {
		if(!event) {
			this._callbacks = {};
		} else if(Events.stream.supports(event)) {
			if(!callback) {
				this._callbacks[event] = [];
			} else {
				this._callbacks[event] = this._callbacks[event].filter(cb => cb !== callback);
			}
		}
	}

	/**
	 * @access protected
	 * @param {object} values
	 */
	update(values) {
		Object.keys(values).forEach(key => {this[key] = values[key];});
	}

	/**
	 * To set webrtc stats configuration.
	 * @type {{interval: string|number, successCallback: function, errorCallback: function}}
	*/
	set stats(mapStats) {
		this._mapStats = mapStats;
	}

	/**
	 * To get webrtc stats configuration.
	 * @returns {{interval: string|number, successCallback: function, errorCallback: function}}
	*/
	get stats() {
		return this._mapStats;
	}
}
