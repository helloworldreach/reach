/*global RTCPeerConnection*/
/*global RTCRtpSender*/
import cache from '../util/cache';
import * as Log from '../util/Log';
import Media from '../util/Media';
import * as DataSync from '../util/DataSync';
import {OPENED, CLOSING, CLOSED} from '../util/constants';
import 'core-js/fn/array/find';

const DtlsSrtpKeyAgreement = {DtlsSrtpKeyAgreement: true};
const sdpConstraints = receive => ({OfferToReceiveAudio: receive, OfferToReceiveVideo: receive});
/**
 * ICE connection status : disconnected
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_DISCONNECTED = 'disconnected';
/**
 * ICE connection status : connected
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_CONNECTED= 'connected';
/**
 * ICE connection status : completed
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_COMPLETED = 'completed';
/**
 * ICE connection status : checking
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_CHECKING = 'checking';
/**
 * ICE connection status : closed
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_CLOSED = 'closed';
/**
 * ICE connection status : failed
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_FAILED = 'failed';
/**
 * ICE connection status : another status
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_OTHER= 'other';
/**
 * @ignore
 */
const _toJSON = o => o.toJSON && typeof o.toJSON === 'function' ? o.toJSON() : o;
/**
 * The PeerConnection. A PeerConnection will only concern one MediaStream.
 * @class PeerConnection
 */
export default class PeerConnection {
	/**
	 * @access protected
	 * @param {string} stackId The WebRTC stack ID
	 * @param {string} streamId The Stream UID
	 * @param {string} remoteDevice The remote device's UID
	 * @param {boolean} publish Publish or Subscribe ?
	 * @param {PeerConnection#mapStats} map of Stats
	 */
	constructor(stackId, streamId, remoteDevice, publish, mapStats) {
		/**
		 * The stack identifier. Used to identify exchanges between 2 devices
		 * @type {string}
		 */
		this.stackId = stackId;
		/**
		 * The stream id. (One stream per RTCPeerConnection)
		 * @type {string}
		 */
		this.streamId = streamId;
		/**
		 * The remote device Id
		 * @type {string}
		 */
		this.remoteDevice = remoteDevice;
		/**
		 * Path for local signalization
		 * @access private
		 * @type {string}
		 */
		this._localPath = `_/webrtc/${this.stackId}/${this.streamId}/${cache.device}`;
		/**
		 * Path for local signalization
		 * @access private
		 * @type {string}
		 */
		this._remotePath = `_/webrtc/${this.stackId}/${this.streamId}/${this.remoteDevice}`;
		/**
		 * Indicates if the PeerConnection has been established. (Useful for renegotiation).
		 * @type {boolean}
		 */
		this.negotiated = false;
		/**
		 * The DOM element where the remote MediaStream will be displayed
		 * @type {Element}
		 * @protected
		 */
		this.node = null;
		/**
		 * The DOM element containg the media element
		 * @type {Element}
		 * @protected
		 */
		this.container = null;
		/**
		 * The actual RTCPeerConnection
		 * @type {RTCPeerConnection}
		 */
		this.pc = new RTCPeerConnection(
			{
				iceServers: cache.config.iceServers
			},
			{
				optional: [DtlsSrtpKeyAgreement],
				mandatory: sdpConstraints(!publish)
			}
		);
		// Handle ICE candidates
		this.pc.onicecandidate = e => {
			if (!this.negotiated && e.candidate) {
				Log.d('PeerConnection~onicecandidate', e.candidate);
				DataSync.push(`${this._localPath}/ice`, _toJSON(e.candidate));
			}
		};
		this.pc.oniceconnectionstatechange = () => {
			Log.d('PeerConnection~oniceconnectionstatechange', this.pc);
			const iceConnectionState = this.pc.iceConnectionState;
			switch (iceConnectionState) {
				case ICE_CONNECTION_STATE_CHECKING:
					// Nothing to do yet
					break;
				case ICE_CONNECTION_STATE_CONNECTED:
					this._attachStream();
					this._remoteICECandidates(false);
					break;
				case ICE_CONNECTION_STATE_COMPLETED:
					this._remoteICECandidates(false);
					break;
				case ICE_CONNECTION_STATE_DISCONNECTED:
				case ICE_CONNECTION_STATE_FAILED:
					Log.e('PeerConnection~stateDisconnected', 'Disconnect PeerConnection');
					break;
				case ICE_CONNECTION_STATE_CLOSED:
					Log.d('PeerConnection~stateclosed', 'Close PeerConnection');
					this.close();
					break;
			}
			this.negotiated = this.negotiated || this.isConnected;
		};

		this.pc.onicegatheringstatechange = () => {
			Log.d('PeerConnection~onicegatheringstatechange', this.pc.iceGatheringState);
		};

		/**
		 * PeerConnection status
		 * @type {string}
		 * @private
		 */
		this._status = OPENED;

		/**
		 * Timer/TimeInterval for stats collecting
		 * @type {intervalID}
		 * @private
		 */
		this._statsInterval = null;

		/**
		 * The map of Stats to configure stats gathering
		 * @type {{interval: string|number, selector: string, successCallback: function, errorCallback: function}}
		 * @private
		*/
		this._mapStats = null;
		this.stats = mapStats;
	}

	/**
	 * Toggle ICE Candidates discovery
	 * @access private
	 * @param {boolean} listen Indicates if we should listen to new ICE candidates
	 */
	_remoteICECandidates(listen) {
		const
			path = `${this._remotePath}/ice`,
			event = 'child_added';
		if(listen) {
			// don't listen to ice candidates if pc is already up (renegotiation)
			DataSync.on(path, event, snap => {
				const candidate = snap.val();
				Log.d('PeerConnection~addIceCandidate', candidate);
				this.pc.addIceCandidate(new RTCIceCandidate(candidate));
			});
		} else {
			DataSync.off(path, event);
		}
	}

	/**
	 * Attach the remote MediaStream to a node
	 * @access private
	 */
	_attachStream () {
		if(this.remoteStream && this.isConnected) {
			this.node = Media.attachStream(this.remoteStream, this.container, this.node);
			this.node.muted = false;
		}
	}

	/**
	 * The remote MediaStream
	 * @access protected
	 * @type {MediaStream}
	 */
	set remoteStream (stream) {
		/**
		 * @ignore
		 */
		this._remoteStream = stream;
		this._attachStream();
	}

	/**
	 * The remote MediaStream
	 * @type {MediaStream}
	 */
	get remoteStream () {
		return this._remoteStream;
	}

	/**
	 * Indicates if the PeerConnection is established based on ICE connection state
	 * @returns {boolean}
	 */
	get isConnected () {
		return this.pc &&
			!!~[
				ICE_CONNECTION_STATE_CONNECTED,
				ICE_CONNECTION_STATE_COMPLETED,
				ICE_CONNECTION_STATE_OTHER
			].indexOf(this.pc.iceConnectionState);
	}

	/**
	 * Init RTCPeerConnection for subscribers
	 * @access protected
	 * @param htmlElement
	 * @returns {Promise.<PeerConnection>}
	 */
	answer(htmlElement) {
		Log.i('PeerConnection~answer', {htmlElement, peerConnection: this});
		this.container = htmlElement;
		if(Object.getOwnPropertyDescriptor(RTCPeerConnection.prototype, 'ontrack')) {
			this.pc.ontrack = e => {
				Log.d('PeerConnection~ontrack', e.streams[0]);
				this.remoteStream = e.streams[0];
			};
		} else {
			this.pc.onaddstream = e => {
				Log.d('PeerConnection~onaddstream', e.stream);
				this.remoteStream = e.stream;
			};
		}

		// Listen to SDP offer
		DataSync.on(`${this._remotePath}/sdp`, 'value', snap => {
			const sdpOffer = snap.val();
			Log.d('Offer', sdpOffer);
			if(sdpOffer != null) {
				Log.d('PeerConnection~offered', sdpOffer);
				this.pc.setRemoteDescription(sdpOffer)
					.then(() => Log.d('PeerConnection~remoteDescription', this.pc.remoteDescription))
					.then(() => {
						if (/^offer$/.test(this.pc.remoteDescription.type)) {
							return this.pc.createAnswer();
						}
						return Promise.reject(new Error('SDP is not an offer'));
					})
					.then(description => this._setPreferredCodecs(description))
					.then(description => this.pc.setLocalDescription(description))
					.then(() => {
						Log.d('PeerConnection~localDescription', this.pc.localDescription);
						this._remoteICECandidates(true);
						// good time to launch stats collecting
						if (this._mapStats) {
							if (!(this._statsInterval = this._launchStats())) {
								this._statsInterval = null;
								Log.w('PeerConnection~stateDisconnected', 'Stats not launched');
							}
						}
					})
					.then(() => DataSync.update(`${this._localPath}/sdp`, _toJSON(this.pc.localDescription)))
					.catch(Log.r('PeerConnection~localDescription'));
			}
		});

		return Promise.resolve(this);
	}

	/**
	 * Init RTCPeerConnection for publishers
	 * @access protected
	 * @param stream
	 * @returns {Promise.<PeerConnection>}
	 */
	offer(stream) {
		Log.i('PeerConnection~offer', {stream, peerConnection: this});
		let sendTimeout;
		return new Promise((resolve, reject) => {
			this.pc.onnegotiationneeded = () => {
				Log.d('PeerConnection~onnegotiationneeded');
				// Debounce send (renegotiation triggers multiple negotiationneeded events)
				if(sendTimeout) {
					clearTimeout(sendTimeout);
					sendTimeout = null;
				}
				sendTimeout = setTimeout(() => {
					sendTimeout = null;
					this._sendOffer()
						.then(() => {
							resolve(this);
						})
						.catch(e => {
							Log.d('PeerConnection~offer', e);
							reject(e);
						});
				}, 20);
			};
			DataSync.on(`${this._remotePath}/sdp`, 'value', snap => {
				const sdpAnswer = snap.val();
				if(sdpAnswer != null) {
					Log.d('PeerConnection~offer#answered', sdpAnswer);
					this.pc.setRemoteDescription(sdpAnswer)
						.then(() => {
							Log.d('PeerConnection~offer#remoteDescription', this.pc.remoteDescription);
							this._remoteICECandidates(true);
							// good time to launch stats collecting
							if (this._mapStats) {
								if (!(this._statsInterval = this._launchStats())) {
									this._statsInterval = null;
									Log.w('PeerConnection~stateDisconnected', 'Stats not launched');
								}
							}
						})
						.catch(Log.e.bind(Log, 'PeerConnection~remoteDescription'));
				}
			});
			this._alterStream(stream, 'add');
		});
	}

	/**
	 * Create SDP offer and push it
	 * @returns {Promise}
	 * @private
	 */
	_sendOffer() {
		Log.d('PeerConnection~_sendOffer');
		return this.pc.createOffer()
			.then(description => this._setPreferredCodecs(description))
			.then(description => this.pc.setLocalDescription(description))
			.then(() => Log.d('PeerConnection~renegotiate#localDescription', this.pc.localDescription))
			.then(() => DataSync.update(`${this._localPath}/sdp`, _toJSON(this.pc.localDescription)));
	}

	/**
	 * Add/Remove tracks to the PeerConnection stream
	 * @param {MediaStream} stream
	 * @param {string} method
	 * @private
	 */
	_alterStream(stream, method) {
		if(Object.getOwnPropertyDescriptor(RTCPeerConnection.prototype, `${method}Track`)) {
			if (method === 'add') {
				stream.getTracks().forEach(track => this.pc[`${method}Track`](track, stream), this);
			} else {
				this.pc.getSenders().forEach(sender => this.pc[`${method}Track`](sender), this);
			}
		} else {
			this.pc[`${method}Stream`](stream);
		}
	}

	/**
	 * Restart SDP negotiation following a MediaStream change
	 * @access protected
	 * @param {MediaStream} oldStream
	 * @param {MediaStream} newStream
	 */
	renegotiate(oldStream, newStream) {
		Log.d('PeerConnection~renegotiate');
		if((Object.getOwnPropertyDescriptor(RTCPeerConnection.prototype, 'getSenders'))
			&& ('RTCRtpSender' in window)
			&& Object.getOwnPropertyDescriptor(RTCRtpSender.prototype, 'replaceTrack')){

			// mozRTCPeerConnection implementation
			this.pc.getSenders().forEach(sender => {
				let newTracks;
				switch (sender.track.kind) {
					case 'audio':
						newTracks = newStream.getAudioTracks();
						break;
					case 'video':
						newTracks = newStream.getVideoTracks();
						break;
					default:
						newTracks = [];
				}
				if(newTracks.length) {
					sender.replaceTrack(newTracks[0]);
				}
			});
			this._sendOffer()
				.catch(e => {Log.d('PeerConnection~renegotiate', e);});
		} else {
			this._alterStream(oldStream, 'remove');
			this._alterStream(newStream, 'add');
		}
	}

	/**
	 * Close the PeerConnection and stop listening to SDP messages
	 * @access protected
	 */
	close() {
		if(this._status === OPENED) {
			this._status = CLOSING;
			// Stop display
			if (this.node) {
				this.node.stop && this.node.stop();
				this.node.srcObject = null;
				this.container.removeChild(this.node);
				this.node = null;
			}
			// Stop listening to remote ICE candidates
			this._remoteICECandidates(false);
			// Stop listening to SDP messages
			DataSync.off(`${this._remotePath}/sdp`, 'value');
			// Clear interval doing stats collecting
			if (this._statsInterval) {
				clearInterval(this._statsInterval);
			}
			// Remove data
			DataSync.remove(this._localPath);
			// Close PeerConnection
			if (this.pc && this.pc.signalingState !== 'closed') {
				this.pc.onsignalingstatechange = () => {
					if(this.pc.signalingState !== 'closed') {
						this._status = CLOSED;
					}
				};
				this.pc.close();
			} else {
				this._status = CLOSED;
			}
		}
	}

	/**
	 * Edits the SDP to set the preferred audio/video codec
	 * @access private
	 * @param {RTCSessionDescription} description The description retrieved by createOffer/createAnswer
	 * @returns {RTCSessionDescription|{sdp: string, type: string}}
	 */
	_setPreferredCodecs(description) {
		if(cache.config.preferredVideoCodec || cache.config.preferredAudioCodec) {
			Log.d('PeerConnection~_setPreferredCodecs', {description, config: cache.config});
			const sdpLines = description.sdp.split(/\r?\n/);
			const medias = {audio: [], video: []};
			let current = null;
			// Parse SDP
			sdpLines.forEach((sdpLine, i) => {
				if(/^m=/.test(sdpLine)) {
					const d = /^m=(\w+)\s[0-9\/]+\s[A-Za-z0-9\/]+\s([0-9\s]+)/.exec(sdpLine);
					current = {
						fmt: d[2].split(/\s/),
						index: i,
						codecs: []
					};
					medias[d[1]].push(current);
				} else if(current && /^a=rtpmap:/.test(sdpLine)) {
					const c = /^a=rtpmap:(\d+)\s([a-zA-Z0-9\-\/]+)/.exec(sdpLine);
					if(c) {
						current.codecs.push({
							id: c[1],
							name: c[2],
							index: i
						});
					}
				}
			});
			Log.d('PeerConnection~_setPreferredCodecs', medias);
			let update = false;
			const prefer = (mediaList, preferedCodec) => {
				mediaList.forEach(media => {
					const selected = media.codecs.find(codec => preferedCodec.test(codec.name));
					if(selected) {
						const fmt = [selected.id].concat(media.fmt.filter(ids => ids !== selected.id));
						sdpLines[media.index] = sdpLines[media.index].replace(media.fmt.join(' '), fmt.join(' '));
						update = true;
					}
				});
			};
			if(cache.config.preferredVideoCodec) {
				prefer(medias.video, cache.config.preferredVideoCodec);
			}
			if(cache.config.preferredAudioCodec) {
				prefer(medias.audio, cache.config.preferredAudioCodec);
			}
			if(update) {
				Log.d('PeerConnection~_setPreferredCodecs', sdpLines.join('\r\n'));
				return {
					sdp: sdpLines.join('\r\n'),
					type: description.type
				};
			}
		}
		return description;
	}
        
	/**
	 * launch stats with a setInterval with parameters defined in map stats
	 * @access private
	 * @returns {intervalID}
	 */
	_launchStats() {
		// if statsMap null no stats collecting
		if (this._mapStats) {
			// clear interval to collect stats and relaunch in case of already existing
			if (this._statsInterval) {
				clearInterval(this._statsInterval);
			}
			if (this._mapStats.interval > 0) {
				return setInterval(() => this.pc.getStats().then(
					mapStatResult => {this._mapStats.successCallback({'stackId':this.stackId, 'streamId':this.streamId,
						'mapStatResult': this._mapStats.filter ? this._filterStats(mapStatResult) : mapStatResult});
					}).catch(e => this._mapStats.errorCallback(e)), this._mapStats.interval);
			} /* Chrome sends back an Array and FireFox a Map ! */
		}
		return null;
	}

	/**
	 * filter keys in stats object depending on _mapStats.filter as RegExp
	 * @param {RTCStats} Stats got from RTCPeerConnection
	 * @access private
	 * @returns {Object}
	 */
	_filterStats(objIn) {
		const mapOut = new Map();
		const regex = new RegExp(this._mapStats.filter, 'im');
		const valueIt = objIn.values();
		for (const key of objIn.keys()) {
			const v = valueIt.next();
			if(regex.test(key)) {
				mapOut.set(key, v.value);
			}
		}
		return mapOut;
	}

	/**
	 * To set webrtc stats configuration.
	 * @type {{interval: string|number, successCallback: function, errorCallback: function}}
	*/
	set stats(mapStats) {
		this._mapStats = mapStats;
		if (this._statsInterval) { /* if already exists then just need to re launch */
			if (!this._launchStats()) {
				this._mapStats = null;
			}
		}
	}
}