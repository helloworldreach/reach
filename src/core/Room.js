import {NONE, OPENED, CLOSED, CONNECTED, NOT_CONNECTED, WAS_CONNECTED, OWNER} from './util/constants';
import * as DataSync from './util/DataSync';
import cache from './util/cache';
import Participant from './Participant';
import Message from './Message';
import Local from './stream/Local';
import Invite from './Invite';
import * as Events from '../definitions/Events';
import * as Log from './util/Log';
import {REJECTED, CANCELED} from './util/constants';

const _joinRoom = (room, role) => {
	const participant = {
		status: CONNECTED,
		_joined: DataSync.ts()
	};
	if(role) {
		participant.role = role;
	}
	Log.w('Room#join', [participant, `_/rooms/${room.uid}/participants/${cache.user.uid}`]);
	return DataSync
		.update(`_/rooms/${room.uid}/participants/${cache.user.uid}`, participant)
		.then(() => {
			DataSync
				.onDisconnect(`_/rooms/${room.uid}/participants/${cache.user.uid}/status`)
				.set(WAS_CONNECTED);
			return room;
		});
};

/**
 * Room information
 * @access public
 */
export default class Room {
	/**
	 * Create a room
	 * @param {Webcom/api.DataSnapshot|Object} snapData The data snapshot
	 * @access protected
	 */
	constructor(snapData) {
		let values = snapData;
		if(snapData && snapData.val && typeof snapData.val === 'function'){
			values = Object.assign({}, snapData.val(), {uid: snapData.name()});
		}
		/**
		 * The room unique id
		 * @type {string}
		 */
		this.uid = values.uid;
		/**
		 * The room name
		 * @type {string}
		 */
		this.name = values.name;
		/**
		 * The room owner uid
		 * @type {string}
		 */
		this.owner = values.owner;
		/**
		 * The room status:
		 * - OPENED
		 * - CLOSED
		 * @type {string}
		 */
		this.status = values.status;

		/**
		 * Indicates that the room is public so all users can join
		 * @type {boolean}
		 */
		this._public = !!values._public;

		/**
		 * Additional room informations
		 * @type {Object}
		 */
		this.extra = values.extra;

		/**
		 * List of declared callbacks
		 * @type {Object}
		 */
		this._callbacks = {};
	}

	/**
	 * Get the list of participants.
	 * This will only work if the user is either a participant or the owner of the room.
	 * @returns {Promise<Participant[], Error>}
	 */
	participants() {
		return DataSync.list(`_/rooms/${this.uid}/participants`, Participant, this.uid);
	}

	/**
	 * Get the list of messages.
	 * This will only work if the user is either a participant or the owner of the room.
	 * @return {Promise<Message[], Error>}
	 */
	messages() {
		return DataSync.list(`_/rooms/${this.uid}/messages`, Message, this.uid);
	}

	/**
	 * Get the list of streams
	 * @returns {Promise}
	 * @access private
	 */
	_streams(localStreams) {
		if(!cache.user) {
			return Promise.reject(new Error('Only an authenticated user can list a Room\'s streams.'));
		}
		return DataSync.get(`_/rooms/${this.uid}/streams`)
			.then(snapData => {
				const values = snapData.val();
				Log.d('Rooms~_streams', values);
				if(values) {
					return Object.keys(values).map(key => Object.assign({uid: key, roomId: this.uid}, values[key]));
				}
				return [];
			})
			.then(streams => streams.filter(stream => {
				return localStreams === (stream.device === cache.device && stream.from === cache.user.uid);
			}))
			.then(streams => streams.map(cache.streams[`get${localStreams ? 'Shared' : 'Remote'}`].bind(cache.streams)))
			.then(streams => streams.filter(stream => stream !== null));
	}

	/**
	 * Get the list of locally published streams. The streams published with another device won't be visible here
	 * This will only work if the user is either a participant or the owner of the room.
	 * @return {Promise<Local[], Error>}
	 */
	localStreams() {
		return this._streams(true)
			.catch(Log.r('Room~localStreams'));
	}

	/**
	 * Get the list of remotely published streams.
	 * This will only work if the user is either a participant or the owner of the room.
	 * @return {Promise<Remote[], Error>}
	 */
	remoteStreams() {
		return this._streams(false)
			.catch(Log.r('Room~remoteStreams'));
	}

	/**
	 * Invite users to the room. this will only work if the current User is the owner or a moderator of this Room.
	 * This will create the invitation and add the user to the participants list.
	 * @param {User[]} users the users to invite
	 * @param {string} [role='NONE'] the role of the invitee
	 * @param {string} [message] a message to add to the invite
	 * @return {Promise<{room: Room, invites: Invite[]}, Error>}
	 */
	invite(users, role = NONE, message) {
		const
			_path = user => `_/rooms/${this.uid}/participants/${user.uid}`,
			_data = {
				status: NOT_CONNECTED,
				role: role || NONE
			};
		// Add users as participant so they can join the room
		return Promise.all(users.map(user => DataSync.set(_path(user), _data)))
			// Send invites
			.then(() => Promise.all(users.map(user => Invite.send(user, this, message))))
			.then(invites => {
				const removeParticipant = invite => DataSync.remove(`_/rooms/${invite.room}/participants/${invite.to}`);
				invites.forEach(invite => {
					invite.on(REJECTED, removeParticipant);
					invite.on(CANCELED, removeParticipant);
				});
				return {room: this, invites};
			})
			.catch(e => {
				Log.e('Room~invite', e);
				users.forEach(user => DataSync.remove(`_/rooms/${this.uid}/participants/${user.uid}`));
				return Promise.reject(e);
			});
	}

	/**
	 * Register a callback for a specific event
	 * @param {string} event The event name ({@link Events/Room}):
	 * - PARTICIPANT_ADDED: a participant is added to the room
	 * - PARTICIPANT_CHANGED: a participant changes his status (join)
	 * - PARTICIPANT_REMOVED: a participant leave the room
	 * - MESSAGE_ADDED: new instant message
	 * - MESSAGE_CHANGED: an existing message has been modified (moderation)
	 * - MESSAGE_REMOVED: a message has been removed (moderation)
	 * - STREAM_PUBLISHED: a participant published a new Stream
	 * - STREAM_CHANGED: a participant changes his published Stream (moderation, type, mute...)
	 * - STREAM_UNPUBLISHED: a participant stops the publication of his Stream
	 * @param {function} callback The callback for the event, the arguments depends on the type of event:
	 * - PARTICIPANT_* : callback({@link Participant} p [, Error e])
	 * - MESSAGE_* : callback({@link Message} m [, Error e])
	 * - STREAM_* : callback({@link Remote} s [, Error e])
	 * @param {Webcom/api.Query~cancelCallback} cancelCallback The error callback for the event, takes an Error as only argument
	 */
	on(event, callback, cancelCallback) {
		const
			path = Events.room.toPath(event)(this),
			obj = Events.room.toClass(event);
		if(path && obj) {
			const typedCallback = snapData => {
				if(!/^STREAM_/i.test(event) || !snapData) {
					Log.i(`Room~on(${event})`, snapData ? new obj(snapData) : null);
					callback(snapData ? new obj(snapData) : null);
				} else if(cache.user) {
					const streamData = Object.assign({uid: snapData.name(), roomId: this.uid}, snapData.val());
					if(streamData.from !== cache.user.uid || streamData.device !== cache.device) {
						const remoteStream = cache.streams.getRemote(streamData);
						Log.i(`Room~on(${event})`, remoteStream);
						callback(remoteStream);
					}
				}
			};
			DataSync.on(path, event, typedCallback, cancelCallback);
			if(!this._callbacks[event]) {
				this._callbacks[event] = [];
			}
			this._callbacks[event].push(typedCallback);
		}
	}

	/**
	 * Send an instant message
	 * @param {string} message The message to send
	 * @return {Promise<Message>}
	 */
	sendMessage(message) {
		return Message.send(this, message);
	}

	/**
	 * Publish a local stream
	 * @param {string} type The stream type, see {@link StreamTypes} for possible values
	 * @param {Element} [localStreamContainer] The element the stream is attached to. Can be null if already specified in {@link Config}.
	 * @param {MediaStreamConstraints} [constraints] The stream constraints. If not defined, the constraints defined in {@link Config} will be used.
	 * @param {{interval: string|number, successCallback: function, errorCallback: function, filter: string}} [stats]
	 * The object definition to monitor stats delivering.
	 * Description :
	 * - interval : timer interval when calling stats.
	 * - successCallback(statsResult) : callback when getting map stats with success. statsResult = {stackId: string, streamId: string, mapStatResult: Map}.
	 * - errorCallback(error) : callback when getting map stats without success.
	 * - filter : a regExp to filter the map stat's keys in mapStatResult.
	 * @example myRoom.share(Reach.types[share],$streamElement[0],constraints, {'interval': 1000
            , 'successCallback': statsResult => {console.log("stackId:" + statsResult.stackId + " streamId:" + statsResult.streamId); 
                statsResult.mapStatResult.forEach((value, key) => console.log("mapStatResult[" + key + "]=" + Object.entries(value)));}
                    , 'errorCallback': e => {console.log(e);}, 'filter': 'outbound'})
	 
	 * - Example of return with Firefox 59 & 52 :
	 stackId:-L8hDWI7i9KZ2UJGxyr---L8hDuGjLMxp6BkPEXIF streamId:-L8hEegAq4OFzlrde7fm
	 mapStatResult[outbound_rtcp_audio_0]=id,outbound_rtcp_audio_0,timestamp,312670521,type,inboundrtp,isRemote,true,mediaType,audio,remoteId,outbound_rtp_audio_0
	 ,ssrc,1498959816,bytesReceived,272996,jitter,0.001,packetsLost,0,packetsReceived,2702,roundTripTime,1
	 mapStatResult[outbound_rtcp_video_1]=id,outbound_rtcp_video_1,timestamp,312670905,type,inboundrtp,isRemote,true,mediaType,video,remoteId,outbound_rtp_video_1
	 ,ssrc,890776510,bytesReceived,6477261,jitter,0.004,packetsLost,0,packetsReceived,6271,roundTripTime,1
	 mapStatResult[outbound_rtp_audio_0]=id,outbound_rtp_audio_0,timestamp,1522251335930,type,outboundrtp,isRemote,false,mediaType,audio,nackCount,0,remoteId
	 ,outbound_rtcp_audio_0,ssrc,1498959816,bytesSent,372926,packetsSent,2846
	 mapStatResult[outbound_rtp_video_1]=id,outbound_rtp_video_1,timestamp,1522251335930,type,outboundrtp
	 ,bitrateMean,897687.4210526317,bitrateStdDev,471628.828860303,firCount,0,framerateMean,29.087719298245613,
	 framerateStdDev,4.437183396167898,isRemote,false,mediaType,video,nackCount,0,pliCount,0,remoteId,outbound_rtcp_video_1
	 ,ssrc,890776510,bytesSent,6615223,droppedFrames,21,framesEncoded,1682,packetsSent,6271
        
	 * - Example of return with Chrome 65 : see https://w3c.github.io/webrtc-stats/ where stats variables are explained.
        
	 * @returns {Promise<Local, Error>}
	 */
	share(type, localStreamContainer, constraints, stats = null) {
		Log.i('Room~share', {type, localStreamContainer, constraints, stats});
		return Local.share(this.uid, type, localStreamContainer, constraints, stats);
	}

	/**
	 * Join the room. Sets the connected status of the current participant to CONNECTED.
	 * @return {Promise}
	 */
	join() {
		Log.i('Room~join', this);
		if(!cache.user) {
			return Promise.reject(new Error('Only an authenticated user can join a Room.'));
		}
		return _joinRoom(this).catch(Log.r('Room~join'));
	}

	/**
	 * Leave the room. Sets the connected status of the current participant to WAS_CONNECTED, deletes medias and callbacks, closes WebRTC stacks in use.
	 * @return {Promise}
	 */
	leave() {
		if(!cache.user) {
			return Promise.reject(new Error('Only an authenticated user can leave a Room.'));
		}
		Log.i('Room~leave', this);
		// Cancel onDisconnect
		DataSync.onDisconnect(`_/rooms/${this.uid}/participants/${cache.user.uid}/status`).cancel();

		// Disconnect user's callbacks
		Object.keys(this._callbacks).forEach(event => {
			DataSync.off(Events.room.toPath(event)(this), event);
		});
		// Unpublish all local streams
		this.localStreams().then(localStreams => localStreams.forEach(localStream => localStream.close()));
		// Unsubscribe all remote streams
		this.remoteStreams().then(remoteStreams => remoteStreams.forEach(remoteStream => remoteStream.unSubscribe()));
		// Update status
		return DataSync.set(`_/rooms/${this.uid}/participants/${cache.user.uid}/status`, WAS_CONNECTED)
			.catch(Log.r('Room~leave'));
	}

	/**
	 * Leaves & close the Room. Only the owner/moderator can close a room.
	 * @return {Promise}
	 */
	close() {
		Log.i('Room~close', this);
		return this.leave()
			.then(() => DataSync.update(`rooms/${this.uid}`, {
				status: CLOSED,
				_closed: DataSync.ts()
			}))
			.then(() => DataSync.remove(`_/rooms/${this.uid}`))
			.catch(Log.r('Room~close'));
	}

	/**
	 * Create a room
	 * @access protected
	 * @param {String} [name] The room name
	 * @param {object} [extra=null] Extra informations
	 * @param {boolean} [publicRoom=false] Indicates public room
	 * @returns {Promise<Room, Error>}
	 */
	static create (name, extra = null, publicRoom = false) {
		if(!cache.user) {
			return Promise.reject(new Error('Only an authenticated user can create a Room.'));
		}

		const
			roomMetaData = {
				owner: cache.user.uid,
				_public: publicRoom,
				name: name || `${cache.user.name}-${Date.now()}`
			},
			roomFullMetaData = Object.assign({
				status: OPENED,
				_created: DataSync.ts(),
				extra
			}, roomMetaData);

		let room = null;
		// Create public room infos
		return DataSync.push('rooms', roomFullMetaData)
			// Create private room infos
			.then(roomRef => {
				room = new Room(Object.assign({uid: roomRef.name()}, roomFullMetaData));
				return DataSync.update(`_/rooms/${room.uid}/meta`, roomMetaData);
			})
			// Join the room
			.then(() => _joinRoom(room, OWNER))
			.catch(Log.r('Room#create'));
	}

	/**
	 * Get a {@link Room} from its `uid`
	 * @access protected
	 * @param uid
	 * @returns {Promise.<Room>}
	 */
	static get (uid) {
		return DataSync.get(`rooms/${uid}`)
			.then(snapData => {
				if(snapData.val()) {
					return new Room(snapData);
				}
			});
	}
}
