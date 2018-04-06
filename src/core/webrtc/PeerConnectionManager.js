import PeerConnection from './PeerConnection';
import cache from '../util/cache';
import * as Log from '../util/Log';
import * as DataSync from '../util/DataSync';

const getStackId = (id1, id2) => id1.localeCompare(id2, 'en-us') > 0 ? `${id1}-${id2}` :`${id2}-${id1}`;

/**
 * @access protected
 */
export default class PeerConnectionManager {
	/**
	 * Constructor
	 * @access protected
	 */
	constructor() {
		/**
		 * WebRTC stacks
		 * @type {{*: {*: PeerConnection}}}
		 */
		this.stacks = {};
	}


	/**
	 * Get a PeerConnection object for a specific stream
	 * @param {Local|Remote} stream
	 * @param {Remote|{to: string, device:string}} remote
	 * @param {boolean} publish
	 * @return {*}
	 */
	getPeerConnection(stream, remote, publish) {
		if(!cache.user) {
			return Promise.reject(new Error('Only an authenticated user can get a PeerConnection\'s object.'));
		}
		const stackId = getStackId(remote.device, cache.device);

		if(this.stacks[stackId] && this.stacks[stackId][stream.uid]) {
			return Promise.resolve(this.stacks[stackId][stream.uid]);
		}

		if(!this.stacks[stackId]) {
			this.stacks[stackId] = {};
		}

		const users = {};
		users[cache.user.uid] = true;
		users[remote.from || remote.to] = true;

		return DataSync.update(`_/webrtc/${stackId}`, users)
			.then(() => new PeerConnection(stackId, stream.uid, remote.device, publish, stream.stats))
			.then(pc => {
				Log.d('PeerConnectionManager~getPeerConnection', {stackId, streamId: stream.uid, pc});
				this.stacks[stackId][stream.uid] = pc;
				return pc;
			})
			.catch(Log.r('PeerConnectionManager~getPeerConnection'));
	}

	/**
	 * Create offer for a stream to a subscriber
	 * @param {Local} localStream
	 * @param {object} subscriber
	 * @return {Promise.<PeerConnection>}
	 */
	offer(localStream, subscriber) {
		Log.d('PeerConnectionManager~offer', {localStream, subscriber});
		return this.getPeerConnection(localStream, subscriber, true)
			.then(pc => pc.offer(localStream.media));
	}

	/**
	 * Answer to the offer from the publisher
	 * @param {Remote} remoteStream
	 * @param {Element} htmlElement
	 * @return {*|Promise.<PeerConnection>}
	 */
	answer(remoteStream, htmlElement) {
		Log.d('PeerConnectionManager~answer', {remoteStream, htmlElement});
		return this.getPeerConnection(remoteStream, remoteStream, false)
			.then(pc => pc.answer(htmlElement));
	}

	/**
	 * Close a PeerConnection
	 * @param streamId
	 * @param remoteDevice
	 * @return {*}
	 */
	close(streamId, remoteDevice) {
		const stackId = getStackId(remoteDevice, cache.device),
			pc = this.stacks[stackId] ? this.stacks[stackId][streamId] : null;
		if(pc){
			pc.close();
			this.stacks[stackId][streamId] = null;
			delete this.stacks[stackId][streamId];
			return pc;
		}
		return false;
	}
}
