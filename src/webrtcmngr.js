/**
 * @file webrtcmngr.js - JS file for a WebRTC manager
 * @author Webcom
 */

import utils from './utils';
import webrtc from './webrtc';

/**
 * @constructor
 * @description WebRTC manager handling the WebRTC stacks in use
 */
var webrtcmngr = function(datarefs) {

	/**
	 * @description An array containg the WebRTC stacks in use
	 */
	var webrtcStacks = [];
	/**
	 * @description An array containt the virtual WebRTC stacks
	 */
	var virtualWebrtcStacks = [];

	/**
	 * Creates a WebRTC object
	 * @param p_Vid - the video container linked to the peerconnection
	 * @param p_remoteAppInstId - the remote application instance identifier
	 * @param p_onCloseCb - A callback to trigger when the connection is closed
	 * @param p_isPublish - true if it's a peerconnection related to a publishStream, false if it's relatated to a subscribe
	 * @param p_actionType - The action type (audio, video, audio-video)
	 * @param p_peercoId - The PeerConnection Id
	 * @param p_peercoRef - The PeerConnection Ref in the webrtc node
	 * @param p_peercoRef - The PeerConnection Id in the webrtc node
	 * @param p_mutedAudio - optional - if true peerconnection will be created muted
	 * @param p_muteVideo - optional - if true peerconnection will be created with video muted
	 * @param p_getStreamCb - a callback function to retrieve the mediastream object
	 */
	function _createWebrtc(p_Vid, p_remoteAppInstId, p_onCloseCb,p_isPublish,p_actionType,p_peercoId,p_peercoRef,p_mutedAudio,p_muteVideo,p_getStreamCb) {
		var webrtcStackId=p_peercoId ;
//    	 if (p_isPublish) {
//    		 webrtcStackId=utils.appInstanceId+"_"+p_remoteAppInstId;
//         } else {
//        	 webrtcStackId=p_remoteAppInstId+"_"+utils.appInstanceId;
//         }
		var localDataRef = datarefs.getWebrtc().child(p_peercoRef).child(utils.appInstanceId);
		var remoteDataRef = datarefs.getWebrtc().child(p_peercoRef).child(p_remoteAppInstId);
		var virtualWebrtcStack ;
		// create the virtual webrtcstack
		if (p_isPublish) {
			virtualWebrtcStack = {
				webRtcStackId: webrtcStackId,
				localVid: p_Vid
			};
		} else {
			virtualWebrtcStack = {
				webRtcStackId: webrtcStackId,
				remoteVid: p_Vid
			};
		}
		var id = virtualWebrtcStacks.push(virtualWebrtcStack) - 1;

		// create the real webrtcstack if it does not already exist
		if (!webrtcStacks[webrtcStackId]) {
			console.debug('webcomSDK::webrtcmngr::createWebrtc->create a new real webrtcStack');
			// create the real webrtcstack
			var webRtcStack;
			webRtcStack = webrtc(this, p_isPublish, localDataRef, remoteDataRef,webrtcStackId,p_actionType,p_mutedAudio,p_muteVideo);
			webRtcStack.setOnClose(p_onCloseCb);
			if (p_isPublish) {
				webrtcStacks[webrtcStackId] = {
					stack:webRtcStack,
					isPublished:1,
					isSubscribed:0
				};
				webRtcStack.connectLocalStream(p_Vid,p_getStreamCb);
			} else {
				webrtcStacks[webrtcStackId] = {
					stack:webRtcStack,
					isPublished:0,
					isSubscribed:1
				};
				webRtcStack.connectRemoteStream(p_Vid,p_getStreamCb);
			}



		} else {
			console.debug('webcomSDK::webrtcmngr::createWebrtc->use existing real webrtcStack');
			// increment ref counter
			if (p_isPublish) {
				webrtcStacks[webrtcStackId].isPublished++;
				webrtcStacks[webrtcStackId].stack.connectLocalStream(p_Vid,p_getStreamCb);
			} else {
				webrtcStacks[webrtcStackId].isSubscribed++;
				webrtcStacks[webrtcStackId].stack.connectRemoteStream(p_Vid,p_getStreamCb);
			}


		}
		console.debug('webcomSDK::webrtcmngr::createWebrtc->webrtcStack:'+webrtcStackId+ ' new isPublished count ='+webrtcStacks[webrtcStackId].isPublished+' new isSubscribed count ='+webrtcStacks[webrtcStackId].isSubscribed);
		return id;
	}

	/**
	 * Close WebRTC features : detach media streams and unpublish stacks.
	 * @param id -
	 * @param p_isUnPublish
	 * @param callback -
	 */
	function _closeWebrtc(id,p_isUnPublish,callback) {
		console.debug('webcomSDK::webrtcmngr::closeWebrtc->id='+id);
		if (!virtualWebrtcStacks[id]) {
			console.warn('webcomSDK::webrtcmngr::closeWebrtc: virtualstack '+id+' not found');
			if (callback && typeof callback == 'function') {
				callback();
			}
			return false;
		}
		// disconnect the video streams
		if (virtualWebrtcStacks[id].localVid) { detachMediaStream(virtualWebrtcStacks[id].localVid); }
		if (virtualWebrtcStacks[id].remoteVid) { detachMediaStream(virtualWebrtcStacks[id].remoteVid);}


		var webrtcStackId = virtualWebrtcStacks[id].webRtcStackId;
		if (webrtcStackId && webrtcStacks[webrtcStackId]  ) {
			if (p_isUnPublish && webrtcStacks[webrtcStackId].isPublished>0) {
				webrtcStacks[webrtcStackId].isPublished--;
			} else if (!p_isUnPublish && webrtcStacks[webrtcStackId].isSubscribed>0) {
				webrtcStacks[webrtcStackId].isSubscribed--;
			}
			if (webrtcStacks[webrtcStackId].isPublished<1 && webrtcStacks[webrtcStackId].isSubscribed<1) {
				console.debug('webcomSDK::webrtcmngr::closeWebrtc->destroy  real webrtcStack:'+webrtcStackId);
				// destroy the stack
				webrtcStacks[webrtcStackId].stack.close(callback);
				webrtcStacks[webrtcStackId] = null;
			} else {
				console.debug('webcomSDK::webrtcmngr::closeWebrtc->decrement  real webrtcStack:'+webrtcStackId+ ' new isPublished count ='+webrtcStacks[webrtcStackId].isPublished+' new isSubscribed count ='+webrtcStacks[webrtcStackId].isSubscribed);
				if (callback && typeof callback == 'function') {
					callback();
				}
			}
		} else {
			if (callback && typeof callback == 'function') {
				callback();
			}
			console.warn('webcomSDK::webrtcmngr::closeWebrtc cannot found real stack');
		}
		return true;
	}

	/**
	 * Clears a specifical WebRTC stack by setting it to null.
	 * @param webrtcStackId - The WebRTC stack ID to clear
	 */
	function _clearWebrtcStacks(webrtcStackId) {
		console.debug('webcomSDK::webrtcmngr::clearWebrtcStacks id='+webrtcStackId);
		if (webrtcStackId && webrtcStacks && webrtcStacks[webrtcStackId]) {
			webrtcStacks[webrtcStackId] = null;
		}
		return true;
	}

	/**
	 * Audio mute the webrtc peerconnection
	 * @param virtualWebrtcStackId - The WebRTC stack ID to mute
	 */
	function _muteAudioWebrtcStack(virtualWebrtcStackId) {
		console.log('(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId='+virtualWebrtcStackId);

		if (virtualWebrtcStacks && virtualWebrtcStacks[virtualWebrtcStackId] && virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId) {
			var webRtcStackId=virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId;
			console.log('(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId='+virtualWebrtcStackId+ 'webRtcStackId='+webRtcStackId);
			if (webrtcStacks && webrtcStacks[webRtcStackId] && webrtcStacks[webRtcStackId].stack) {
				webrtcStacks[webRtcStackId].stack.muteAudio();
			}  else {
				console.warn('(webcomSDK::webrtcmngr::muteAudioWebrtcStack) webrtcStack='+webRtcStackId+ 'not found');
			}
		} else {
			console.warn('(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId='+virtualWebrtcStackId+ 'not found');
		}


	}

	/**
	 * Audio unmute the webrtc peerconnection
	 * @param webrtcStackId - The WebRTC stack ID to unmute
	 */
	function  _unmuteAudioWebrtcStack (virtualWebrtcStackId) {
		console.log('(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId='+virtualWebrtcStackId);

		if (virtualWebrtcStacks && virtualWebrtcStacks[virtualWebrtcStackId] && virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId) {
			var webRtcStackId=virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId;
			console.log('(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId='+virtualWebrtcStackId+ ',webRtcStackId='+webRtcStackId);
			if (webrtcStacks && webrtcStacks[webRtcStackId] && webrtcStacks[webRtcStackId].stack) {
				webrtcStacks[webRtcStackId].stack.unmuteAudio();
			}  else {
				console.warn('(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) webrtcStack='+webRtcStackId+ 'not found');
			}
		} else {
			console.warn('(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId='+virtualWebrtcStackId+ 'not found');
		}

	}


	/**
	 * Video mute the webrtc peerconnection
	 * @param virtualWebrtcStackId - The WebRTC stack ID to mute
	 */
	function _muteVideoWebrtcStack(virtualWebrtcStackId) {
		console.log('(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId='+virtualWebrtcStackId);

		if (virtualWebrtcStacks && virtualWebrtcStacks[virtualWebrtcStackId] && virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId) {
			var webRtcStackId=virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId;
			console.log('(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId='+virtualWebrtcStackId+ 'webRtcStackId='+webRtcStackId);
			if (webrtcStacks && webrtcStacks[webRtcStackId] && webrtcStacks[webRtcStackId].stack) {
				webrtcStacks[webRtcStackId].stack.muteVideo();
			}  else {
				console.warn('(webcomSDK::webrtcmngr::muteAudioWebrtcStack) webrtcStack='+webRtcStackId+ 'not found');
			}
		} else {
			console.warn('(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId='+virtualWebrtcStackId+ 'not found');
		}


	}

	/**
	 * Video unmute the webrtc peerconnection
	 * @param webrtcStackId - The WebRTC stack ID to unmute
	 */
	function  _unmuteVideoWebrtcStack (virtualWebrtcStackId) {
		console.log('(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId='+virtualWebrtcStackId);

		if (virtualWebrtcStacks && virtualWebrtcStacks[virtualWebrtcStackId] && virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId) {
			var webRtcStackId=virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId;
			console.log('(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId='+virtualWebrtcStackId+ ',webRtcStackId='+webRtcStackId);
			if (webrtcStacks && webrtcStacks[webRtcStackId] && webrtcStacks[webRtcStackId].stack) {
				webrtcStacks[webRtcStackId].stack.unmuteVideo();
			}  else {
				console.warn('(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) webrtcStack='+webRtcStackId+ 'not found');
			}
		} else {
			console.warn('(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId='+virtualWebrtcStackId+ 'not found');
		}

	}


	return {

		/**
		 * Creates a WebRTC object
		 * @param p_Vid - the video container linked to the peerconnection
		 * @param p_remoteAppInstId - the remote application instance identifier
		 * @param p_onCloseCb - A callback to trigger when the connection is closed
		 * @param p_isPublish - true if it's a peerconnection related to a publishStream, false if it's relatated to a subscribe
		 * @param p_actionType - The action type (audio, video, audio-video)
		 * @param p_peercoId - The PeerConnection Id in the webrtc node
		 */
		createWebrtc: function(p_Vid, p_remoteAppInstId, p_onCloseCb,p_isPublish,p_actionType,p_peercoId,p_mutedAudio,p_muteVideo,p_getStreamCb) {
			return  _createWebrtc(p_Vid, p_remoteAppInstId, p_onCloseCb,p_isPublish,p_actionType,p_peercoId,p_mutedAudio,p_muteVideo,p_getStreamCb);
		},

		/**
		 * Close WebRTC features : detach media streams and unpublish stacks.
		 * @param id -
		 * @param p_isUnPublish
		 * @param callback -
		 */
		closeWebrtc: function(id,p_isUnPublish,callback) {
			return  _closeWebrtc(id,p_isUnPublish,callback);
		},

		/**
		 * Clears a specifical WebRTC stack by setting it to null.
		 * @param webrtcStackId - The WebRTC stack ID to clear
		 */
		clearWebrtcStacks: function(webrtcStackId) {
			return _clearWebrtcStacks(webrtcStackId);
		},
		/**
		 * audio mute the webrtc peerconnection
		 * @param virtualWebrtcStackId - The WebRTC stack ID to mute
		 */
		muteAudioWebrtcStack: function(virtualWebrtcStackId) {
			return _muteAudioWebrtcStack(virtualWebrtcStackId);

		},
		/**
		 *  audio unmute the webrtc peerconnection
		 * @param virtualWebrtcStackId - The WebRTC stack ID to unmute
		 */
		unmuteAudioWebrtcStack: function(virtualWebrtcStackId) {
			return _unmuteAudioWebrtcStack(virtualWebrtcStackId);
		},
		/**
		 * video mute the webrtc peerconnection
		 * @param virtualWebrtcStackId - The WebRTC stack ID to mute
		 */
		muteVideoWebrtcStack: function(virtualWebrtcStackId) {
			return _muteVideoWebrtcStack(virtualWebrtcStackId);

		},
		/**
		 * video unmute the webrtc peerconnection
		 * @param virtualWebrtcStackId - The WebRTC stack ID to unmute
		 */
		unmuteVideoWebrtcStack: function(virtualWebrtcStackId) {
			return _unmuteVideoWebrtcStack(virtualWebrtcStackId);
		}
	};
};

export default webrtcmngr;