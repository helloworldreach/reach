/*!
 * The MIT License (MIT)
 * 
 * Copyright (c) 2015-2016 Webcom
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 * The externally maintained libraries used by Reach are:
 * 
 * - webrtc-adpater, licensed as follows:
 * 
 *     > Copyright (c) 2014, The WebRTC project authors. All rights reserved.
 *     >
 *     > Redistribution and use in source and binary forms, with or without
 *     > modification, are permitted provided that the following conditions are
 *     > met:
 *     >
 *     >  * Redistributions of source code must retain the above copyright
 *     >    notice, this list of conditions and the following disclaimer.
 *     >
 *     >  * Redistributions in binary form must reproduce the above copyright
 *     >    notice, this list of conditions and the following disclaimer in
 *     >    the documentation and/or other materials provided with the
 *     >    distribution.
 *     >
 *     >  * Neither the name of Google nor the names of its contributors may
 *     >    be used to endorse or promote products derived from this software
 *     >    without specific prior written permission.
 *     >
 *     >THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 *     >"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 *     >LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 *     >A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 *     >HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 *     >SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 *     >LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 *     >DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 *     >THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *     >(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 *     >OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("webcom/webcom"));
	else if(typeof define === 'function' && define.amd)
		define(["webcom/webcom"], factory);
	else if(typeof exports === 'object')
		exports["Reach"] = factory(require("webcom/webcom"));
	else
		root["Reach"] = factory(root["Webcom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_31__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(100);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(46)('wks');
var uid = __webpack_require__(37);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports,"__esModule",{value:true});exports.r=exports.e=exports.w=exports.i=exports.d=undefined;var _promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_typeof2=__webpack_require__(104),_typeof3=_interopRequireDefault(_typeof2),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var levels=['DEBUG','INFO','WARN','ERROR'],isEnabled=function isEnabled(level){return levels.indexOf(level.toUpperCase())>=levels.indexOf(_cache2.default.logLevel.toUpperCase());},gConsole=global.console,logger=function logger(method,level){for(var _len=arguments.length,messages=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){messages[_key-2]=arguments[_key];}isEnabled(level)?gConsole[method.toLowerCase()].bind(gConsole).apply(undefined,messages):function(){};},group=function group(level,message){for(var _len2=arguments.length,items=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){items[_key2-2]=arguments[_key2];}if(items.length>0){logger.bind(undefined,gConsole.group?'group':level,level)(typeof message==='string'?message:'');var values=(typeof message!=='string'?[message]:[]).concat(items);if(items.length===1&&items[0]instanceof Array&&(0,_typeof3.default)(items[0].length)!==undefined){values=items[0];}values.forEach(function(item){return logger.bind(undefined,level,level)(item);});gConsole.groupEnd&&gConsole.groupEnd();}else{logger.bind(undefined,level,level,message);}};var d=exports.d=group.bind(undefined,levels[0]);var i=exports.i=group.bind(undefined,levels[1]);var w=exports.w=group.bind(undefined,levels[2]);var e=exports.e=gConsole.error.bind(gConsole);var r=exports.r=function r(message){return function(reason){d(message,reason);return _promise2.default.reject(reason||message);};};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_Config=__webpack_require__(93),_Config2=_interopRequireDefault(_Config),_StreamManager=__webpack_require__(95),_StreamManager2=_interopRequireDefault(_StreamManager),_PeerConnectionManager=__webpack_require__(97),_PeerConnectionManager2=_interopRequireDefault(_PeerConnectionManager),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _cache=null;var CacheManager=function(){function CacheManager(){(0,_classCallCheck3.default)(this,CacheManager);if(!_cache){_cache=this;}return _cache;}(0,_createClass3.default)(CacheManager,[{key:'base',set:function set(url){this._base=url instanceof _webcom2.default?url:new _webcom2.default(url);},get:function get(){return this._base;}},{key:'config',set:function set(config){if(!this._config){this._config=new _Config2.default(config);}else{this._config.assign(config);}},get:function get(){if(!this._config){this._config=new _Config2.default();}return this._config;}},{key:'user',set:function set(user){this._user=user;},get:function get(){return this._user;}},{key:'device',set:function set(device){this._device=device;},get:function get(){return this._device;}},{key:'logLevel',set:function set(level){if(/^DEBUG|INFO|WARN|ERROR$/i.test(level)){this._logLevel=level;}else if(level){throw new Error('Unsupported log level (DEBUG, INFO, WARN, ERROR)');}},get:function get(){return this._logLevel||'ERROR';}},{key:'streams',get:function get(){if(!this._streams){this._streams=new _StreamManager2.default();}return this._streams;}},{key:'peerConnections',get:function get(){if(!this._peerConnections){this._peerConnections=new _PeerConnectionManager2.default();}return this._peerConnections;}}]);return CacheManager;}();var cache=new CacheManager();exports.default=cache;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.ts=exports.onDisconnect=exports.off=exports.on=exports.list=exports.get=exports.once=exports.remove=exports.update=exports.push=exports.set=exports.eventType=undefined;var _promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var eventType=exports.eventType=function eventType(event){var evt=void 0;if(/_ADDED$/i.test(event)||/_PUBLISHED$/.test(event)){evt='added';}else if(/_CHANGED$/.test(event)||/_REFRESHED$/.test(event)){evt='changed';}else if(/_REMOVED$/.test(event)||/_UNPUBLISHED$/.test(event)){evt='removed';}return evt?'child_'+evt:event;};var _write=function _write(method,path,data){return new _promise2.default(function(resolve,reject){_cache2.default.base.child(path)[method](data,function(error){return error?reject(error):resolve();});});};var set=exports.set=_write.bind(undefined,'set');var push=exports.push=function push(path,data){return new _promise2.default(function(resolve,reject){var pushRef=_cache2.default.base.child(path).push(data,function(error){return error?reject(error):resolve(pushRef);});});};var update=exports.update=_write.bind(undefined,'update');var remove=exports.remove=function remove(path){return new _promise2.default(function(resolve,reject){_cache2.default.base.child(path).remove(function(error){return error?reject(error):resolve();});});};var once=exports.once=function once(path,event){return new _promise2.default(function(resolve,reject){_cache2.default.base.child(path).once(eventType(event),resolve,reject);});};var get=exports.get=function get(path){return once(path,'value');};var list=exports.list=function list(path,Type){for(var _len=arguments.length,params=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){params[_key-2]=arguments[_key];}return get(path).then(function(snapData){if(snapData){var values=[];snapData.forEach(function(snapChild){values.push(new(Function.prototype.bind.apply(Type,[null].concat([snapChild],params)))());});return values;}});};var on=exports.on=function on(path,event,queryCallback,cancelCallback){_cache2.default.base.child(path).on(eventType(event),queryCallback,cancelCallback);};var off=exports.off=function off(path,event,callback){_cache2.default.base.child(path).off(eventType(event),callback);};var onDisconnect=exports.onDisconnect=function onDisconnect(path){return _cache2.default.base.child(path).onDisconnect();};var ts=exports.ts=function ts(){return Date.now();};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(2);
var ctx = __webpack_require__(23);
var hide = __webpack_require__(16);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(66);
var toPrimitive = __webpack_require__(49);
var dP = Object.defineProperty;

exports.f = __webpack_require__(13) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(26);
module.exports = __webpack_require__(13) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(67);
var defined = __webpack_require__(40);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


var logDisabled_ = true;
var deprecationWarnings_ = true;

// Utility methods.
var utils = {
  disableLog: function(bool) {
    if (typeof bool !== 'boolean') {
      return new Error('Argument type: ' + typeof bool +
          '. Please use a boolean.');
    }
    logDisabled_ = bool;
    return (bool) ? 'adapter.js logging disabled' :
        'adapter.js logging enabled';
  },

  /**
   * Disable or enable deprecation warnings
   * @param {!boolean} bool set to true to disable warnings.
   */
  disableWarnings: function(bool) {
    if (typeof bool !== 'boolean') {
      return new Error('Argument type: ' + typeof bool +
          '. Please use a boolean.');
    }
    deprecationWarnings_ = !bool;
    return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
  },

  log: function() {
    if (typeof window === 'object') {
      if (logDisabled_) {
        return;
      }
      if (typeof console !== 'undefined' && typeof console.log === 'function') {
        console.log.apply(console, arguments);
      }
    }
  },

  /**
   * Shows a deprecation warning suggesting the modern and spec-compatible API.
   */
  deprecated: function(oldMethod, newMethod) {
    if (!deprecationWarnings_) {
      return;
    }
    console.warn(oldMethod + ' is deprecated, please use ' + newMethod +
        ' instead.');
  },

  /**
   * Extract browser version out of the provided user agent string.
   *
   * @param {!string} uastring userAgent string.
   * @param {!string} expr Regular expression used as match criteria.
   * @param {!number} pos position in the version string to be returned.
   * @return {!number} browser version.
   */
  extractVersion: function(uastring, expr, pos) {
    var match = uastring.match(expr);
    return match && match.length >= pos && parseInt(match[pos], 10);
  },

  /**
   * Browser detector.
   *
   * @return {object} result containing browser and version
   *     properties.
   */
  detectBrowser: function(window) {
    var navigator = window && window.navigator;

    // Returned result object.
    var result = {};
    result.browser = null;
    result.version = null;

    // Fail early if it's not a browser
    if (typeof window === 'undefined' || !window.navigator) {
      result.browser = 'Not a browser.';
      return result;
    }

    // Firefox.
    if (navigator.mozGetUserMedia) {
      result.browser = 'firefox';
      result.version = this.extractVersion(navigator.userAgent,
          /Firefox\/(\d+)\./, 1);
    } else if (navigator.webkitGetUserMedia) {
      // Chrome, Chromium, Webview, Opera, all use the chrome shim for now
      if (window.webkitRTCPeerConnection) {
        result.browser = 'chrome';
        result.version = this.extractVersion(navigator.userAgent,
          /Chrom(e|ium)\/(\d+)\./, 2);
      } else { // Safari (in an unpublished version) or unknown webkit-based.
        if (navigator.userAgent.match(/Version\/(\d+).(\d+)/)) {
          result.browser = 'safari';
          result.version = this.extractVersion(navigator.userAgent,
            /AppleWebKit\/(\d+)\./, 1);
        } else { // unknown webkit-based browser.
          result.browser = 'Unsupported webkit-based browser ' +
              'with GUM support but no WebRTC support.';
          return result;
        }
      }
    } else if (navigator.mediaDevices &&
        navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) { // Edge.
      result.browser = 'edge';
      result.version = this.extractVersion(navigator.userAgent,
          /Edge\/(\d+).(\d+)$/, 2);
    } else if (navigator.mediaDevices &&
        navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
        // Safari, with webkitGetUserMedia removed.
      result.browser = 'safari';
      result.version = this.extractVersion(navigator.userAgent,
          /AppleWebKit\/(\d+)\./, 1);
    } else { // Default fallthrough: not supported.
      result.browser = 'Not a supported browser.';
      return result;
    }

    return result;
  },

  // shimCreateObjectURL must be called before shimSourceObject to avoid loop.

  shimCreateObjectURL: function(window) {
    var URL = window && window.URL;

    if (!(typeof window === 'object' && window.HTMLMediaElement &&
          'srcObject' in window.HTMLMediaElement.prototype)) {
      // Only shim CreateObjectURL using srcObject if srcObject exists.
      return undefined;
    }

    var nativeCreateObjectURL = URL.createObjectURL.bind(URL);
    var nativeRevokeObjectURL = URL.revokeObjectURL.bind(URL);
    var streams = new Map(), newId = 0;

    URL.createObjectURL = function(stream) {
      if ('getTracks' in stream) {
        var url = 'polyblob:' + (++newId);
        streams.set(url, stream);
        utils.deprecated('URL.createObjectURL(stream)',
            'elem.srcObject = stream');
        return url;
      }
      return nativeCreateObjectURL(stream);
    };
    URL.revokeObjectURL = function(url) {
      nativeRevokeObjectURL(url);
      streams.delete(url);
    };

    var dsc = Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype,
                                              'src');
    Object.defineProperty(window.HTMLMediaElement.prototype, 'src', {
      get: function() {
        return dsc.get.apply(this);
      },
      set: function(url) {
        this.srcObject = streams.get(url) || null;
        return dsc.set.apply(this, [url]);
      }
    });

    var nativeSetAttribute = window.HTMLMediaElement.prototype.setAttribute;
    window.HTMLMediaElement.prototype.setAttribute = function() {
      if (arguments.length === 2 &&
          ('' + arguments[0]).toLowerCase() === 'src') {
        this.srcObject = streams.get(arguments[1]) || null;
      }
      return nativeSetAttribute.apply(this, arguments);
    };
  }
};

// Export.
module.exports = {
  log: utils.log,
  deprecated: utils.deprecated,
  disableLog: utils.disableLog,
  disableWarnings: utils.disableWarnings,
  extractVersion: utils.extractVersion,
  shimCreateObjectURL: utils.shimCreateObjectURL,
  detectBrowser: utils.detectBrowser.bind(utils)
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var OPENED=exports.OPENED='OPENED';var CLOSED=exports.CLOSED='CLOSED';var CLOSING=exports.CLOSING='CLOSING';var CONNECTED=exports.CONNECTED='CONNECTED';var NOT_CONNECTED=exports.NOT_CONNECTED='NOT_CONNECTED';var WAS_CONNECTED=exports.WAS_CONNECTED='WAS_CONNECTED';var OWNER=exports.OWNER='OWNER';var MODERATOR=exports.MODERATOR='MODERATOR';var PARTICIPANT=exports.PARTICIPANT='PARTICIPANT';var NONE=exports.NONE='NONE';var ONGOING=exports.ONGOING='ONGOING';var ACCEPTED=exports.ACCEPTED='ACCEPTED';var REJECTED=exports.REJECTED='REJECTED';var CANCELED=exports.CANCELED='CANCELED';

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(32);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(75);
var enumBugKeys = __webpack_require__(42);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_constants=__webpack_require__(20),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache),_Participant=__webpack_require__(61),_Participant2=_interopRequireDefault(_Participant),_Message=__webpack_require__(60),_Message2=_interopRequireDefault(_Message),_Local=__webpack_require__(94),_Local2=_interopRequireDefault(_Local),_Invite=__webpack_require__(39),_Invite2=_interopRequireDefault(_Invite),_Events=__webpack_require__(30),Events=_interopRequireWildcard(_Events),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _joinRoom=function _joinRoom(room,role){if(room.status!==_constants.CLOSED){var participant={status:_constants.CONNECTED,userAgent:_cache2.default.userAgent,_joined:DataSync.ts()};if(role){participant.role=role;}Log.w('Room#join',[participant,'_/rooms/'+room.uid+'/participants/'+_cache2.default.user.uid]);return DataSync.update('_/rooms/'+room.uid+'/participants/'+_cache2.default.user.uid,participant).then(function(){DataSync.onDisconnect('_/rooms/'+room.uid+'/participants/'+_cache2.default.user.uid+'/status').set(_constants.WAS_CONNECTED);return room;});}return _promise2.default.reject(new Error('can\'t join a close room'));};var Room=function(){function Room(snapData){(0,_classCallCheck3.default)(this,Room);var values=snapData;if(snapData&&snapData.val&&typeof snapData.val==='function'){values=(0,_assign2.default)({},snapData.val(),{uid:snapData.name()});}this.uid=values.uid;this.name=values.name;this.localStream={};this.owner=values.owner;this.status=values.status;this._public=!!values._public;this.extra=values.extra;this._callbacks={};}(0,_createClass3.default)(Room,[{key:'participants',value:function participants(){return DataSync.list('_/rooms/'+this.uid+'/participants',_Participant2.default,this.uid);}},{key:'messages',value:function messages(){return DataSync.list('_/rooms/'+this.uid+'/messages',_Message2.default,this.uid);}},{key:'_streams',value:function _streams(localStreams){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can list a Room\'s streams.'));}return DataSync.get('_/rooms/'+this.uid+'/streams').then(function(snapData){var values=snapData.val();Log.d('Rooms~_streams',values);if(values){return(0,_keys2.default)(values).map(function(key){return(0,_assign2.default)({uid:key,roomId:_this.uid},values[key]);});}return[];}).then(function(streams){return streams.filter(function(stream){console.log('on passe par ici et ça marche');return localStreams===(stream.device===_cache2.default.device&&stream.from===_cache2.default.user.uid);});}).then(function(streams){return streams.map(_cache2.default.streams['get'+(localStreams?'Shared':'Remote')].bind(_cache2.default.streams));}).then(function(streams){return streams.filter(function(stream){return stream!==null;});});}},{key:'localStreams',value:function localStreams(){return this._streams(true).catch(Log.r('Room~localStreams'));}},{key:'remoteStreams',value:function remoteStreams(){console.log('on veut récupérer les remotes');return this._streams(false).catch(Log.r('Room~remoteStreams'));}},{key:'invite',value:function invite(users){var _this2=this,role=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_constants.NONE,message=arguments[2],_path=function _path(user){return'_/rooms/'+_this2.uid+'/participants/'+user.uid;},_data={status:_constants.NOT_CONNECTED,role:role||_constants.NONE};return _promise2.default.all(users.map(function(user){return DataSync.set(_path(user),_data);})).then(function(){return _promise2.default.all(users.map(function(user){return _Invite2.default.send(user,_this2,message);}));}).then(function(invites){var removeParticipant=function removeParticipant(invite){return DataSync.remove('_/rooms/'+invite.room+'/participants/'+invite.to);};invites.forEach(function(invite){invite.on(_constants.REJECTED,removeParticipant);invite.on(_constants.CANCELED,removeParticipant);});return{room:_this2,invites:invites};}).catch(function(e){Log.e('Room~invite',e);users.forEach(function(user){return DataSync.remove('_/rooms/'+_this2.uid+'/participants/'+user.uid);});return _promise2.default.reject(e);});}},{key:'on',value:function on(event,callback,cancelCallback){var _this3=this,path=Events.room.toPath(event)(this),obj=Events.room.toClass(event);if(path&&obj){var typedCallback=function typedCallback(snapData){if(!/^STREAM_/i.test(event)||!snapData){Log.i('Room~on('+event+')',snapData?new obj(snapData):null);callback(snapData?new obj(snapData):null);}else if(_cache2.default.user){var streamData=(0,_assign2.default)({uid:snapData.name(),roomId:_this3.uid},snapData.val());if(streamData.from!==_cache2.default.user.uid||streamData.device!==_cache2.default.device){var remoteStream=_cache2.default.streams.getRemote(streamData);Log.i('Room~on('+event+')',remoteStream);callback(remoteStream);}}};DataSync.on(path,event,typedCallback,cancelCallback);if(!this._callbacks[event]){this._callbacks[event]=[];}this._callbacks[event].push(typedCallback);}}},{key:'sendMessage',value:function sendMessage(message){return _Message2.default.send(this,message);}},{key:'share',value:function share(type,localStreamContainer,constraints){Log.i('Room~share',{type:type,localStreamContainer:localStreamContainer,constraints:constraints});return _Local2.default.share(this.uid,type,localStreamContainer,constraints);}},{key:'getLocalVideo',value:function getLocalVideo(type,localStreamContainer,constraints){var _this4=this;Log.i('Room~getLocalVideo',{type:type,localStreamContainer:localStreamContainer,constraints:constraints});console.log('Room~getLocalVideo');return _Local2.default.getLocalVideo(this.uid,type,localStreamContainer,constraints).then(function(localStream){_this4.localStream=localStream;return localStream;});}},{key:'publish',value:function publish(){Log.i('Room~publish Local');return _Local2.default.publish(this.localStream);}},{key:'join',value:function join(){Log.i('Room~join',this);if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can join a Room.'));}return _joinRoom(this).catch(Log.r('Room~join'));}},{key:'leave',value:function leave(){var _this5=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can leave a Room.'));}Log.i('Room~leave',this);DataSync.onDisconnect('_/rooms/'+this.uid+'/participants/'+_cache2.default.user.uid+'/status').cancel();(0,_keys2.default)(this._callbacks).forEach(function(event){DataSync.off(Events.room.toPath(event)(_this5),event);});this.localStreams().then(function(localStreams){return localStreams.forEach(function(localStream){return localStream.close();});});if(this.localStream){console.log('on va cloer le local');console.log('ouf cest fait');}console.log('on va désouscrire les remoteStreams');this.remoteStreams().then(function(remoteStreams){return remoteStreams.forEach(function(remoteStream){return remoteStream.unSubscribe();});});console.log('on a désouscrit les remoteStreams');return DataSync.set('_/rooms/'+this.uid+'/participants/'+_cache2.default.user.uid+'/status',_constants.WAS_CONNECTED).catch(Log.r('Room~leave'));}},{key:'close',value:function close(){var _this6=this;Log.i('Room~close',this);this.status=_constants.CLOSED;return this.leave().then(function(){return DataSync.update('rooms/'+_this6.uid,{status:_constants.CLOSED,_closed:DataSync.ts()});}).then(function(){return DataSync.remove('_/rooms/'+_this6.uid);}).catch(Log.r('Room~close'));}}],[{key:'create',value:function create(name){var extra=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null,publicRoom=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can create a Room.'));}var roomMetaData={owner:_cache2.default.user.uid,_public:publicRoom,name:name||_cache2.default.user.name+'-'+Date.now()},roomFullMetaData=(0,_assign2.default)({status:_constants.OPENED,_created:DataSync.ts(),extra:extra},roomMetaData),room=null;return DataSync.push('rooms',roomFullMetaData).then(function(roomRef){console.log('on a créé la room dans webcom');room=new Room((0,_assign2.default)({uid:roomRef.name()},roomFullMetaData));console.log('on a créé la room dans le reach');return DataSync.update('_/rooms/'+room.uid+'/meta',roomMetaData);}).then(function(){return _joinRoom(room,_constants.OWNER);}).catch(Log.r('Room#create'));}},{key:'get',value:function get(uid){return DataSync.get('rooms/'+uid).then(function(snapData){if(snapData.val()){return new Room(snapData);}});}}]);return Room;}();exports.default=Room;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_Reach=__webpack_require__(58),_Reach2=_interopRequireDefault(_Reach);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var presets={UHD:{w:3840,h:2160,min:'HD'},FHD:{w:1920,h:1080,min:'HD',max:'UHD'},HD:{w:1280,h:720,min:'SD',max:'FHD'},SVGA:{w:800,h:600,min:'VGA',max:'HD'},SD:{w:720,h:576,min:'VGA',max:'HD'},VGA:{w:640,h:480,max:'SVGA'}},_assignDevice=function _assignDevice(constraint,deviceId){if(constraint&&deviceId){return(0,_assign2.default)(/^((user)|(environment))$/i.test(deviceId)?{facingMode:deviceId}:{deviceId:deviceId},constraint===true?{}:constraint);}return constraint;};var Media=function(){function Media(){(0,_classCallCheck3.default)(this,Media);}(0,_createClass3.default)(Media,null,[{key:'constraints',value:function constraints(){var videoConstraints=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'HD',audioConstraints=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true,type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'ideal',videoDeviceId=arguments[3],audioDeviceId=arguments[4],video=videoConstraints;if(typeof videoConstraints==='string'){if(presets[videoConstraints.toUpperCase()]){var preset=presets[videoConstraints.toUpperCase()],dimConstraint=function dimConstraint(dim){if(/^(min|max|exact)$/.test(type)){var r={};r[type]=preset[dim];return r;}return{min:preset.min?presets[preset.min][dim]:preset[dim],ideal:preset[dim],max:preset.max?presets[preset.max][dim]:preset[dim]};};video={width:dimConstraint('w'),height:dimConstraint('h')};}else{throw new Error('Unknown Video Resolution preset (UHD, FHD, HD, SVGA, SD, VGA)');}}video=_assignDevice(video,videoDeviceId);var audio=_assignDevice(audioConstraints,audioDeviceId);Log.d('Media#constraints',{video:video,audio:audio});return{video:video,audio:audio};}},{key:'attachStream',value:function attachStream(mediaStream,container,previous){var volume=arguments.length>3&&arguments[3]!==undefined?arguments[3]:.7,tagName='';if(mediaStream.getVideoTracks().length>0){tagName='video';}else if(mediaStream.getAudioTracks().length>0){tagName='audio';}Log.d('Media#attachStream',mediaStream,tagName);if(tagName.length>0){var _node=previous;if(!_node||_node.tagName.toLowerCase()!==tagName){_node=document.createElement(tagName);_node.autoplay=true;if(_Reach2.default.browser.browser==='safari'){_node.setAttribute('playsinline',true);}else{}_node.style.borderRadius='1px';}if(container){if(previous&&previous!==_node){container.replaceChild(_node,previous);}else if(!previous){container.appendChild(_node);}}_node.srcObject=mediaStream;_node.addEventListener('play',function(event){Log.d('video.onplay = '+event.type);_node.srcObject.onaddtrack=function(track){Log.d('[Local] listener: video.onaddtrack = '+track.label);};_node.srcObject.onremovetrack=function(track){Log.d('[Local] listener: video.onremovetrack = '+track.label);};_node.srcObject.oninactive=function(){Log.d('[Local] listener: video.oninactive');};_node.srcObject.onplaying=function(event){console.debug('[Local] listener: video.onplaying = '+event.type);};_node.srcObject.onstalled=function(event){console.debug('[Local] listener: video.onstalled = '+event.type);};_node.srcObject.onsuspend=function(event){console.debug('[Local] listener: video.onsuspend = '+event.type);console.debug(event);console.debug('on passe là');};});_node.onsuspend=function(event){console.debug('[Local] listener: video.onsuspend = '+event);console.debug(event);};_node.addEventListener('loadeddata',function(){return Log.d('on a chargé les données');});_node.addEventListener('error',function(error){return Log.d('on a une erreur '+error);});_node.volume=volume;return _node;}return previous;}},{key:'devices',value:function devices(){return navigator.mediaDevices.enumerateDevices().then(function(devices){var r={};devices.forEach(function(device){if(!r[device.kind]){r[device.kind]=[];}r[device.kind].push(device);});Log.d('Media#devices',r);return r;}).catch(Log.r('Media#devices'));}},{key:'facingMode',get:function get(){return{USER:'user',ENVIRONMENT:'environment'};}}]);return Media;}();exports.default=Media;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.invite=exports.stream=exports.room=exports.reach=undefined;var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_stringify=__webpack_require__(99),_stringify2=_interopRequireDefault(_stringify),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_User=__webpack_require__(56),_User2=_interopRequireDefault(_User),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Invite=__webpack_require__(39),_Invite2=_interopRequireDefault(_Invite),_Participant=__webpack_require__(61),_Participant2=_interopRequireDefault(_Participant),_Message=__webpack_require__(60),_Message2=_interopRequireDefault(_Message),_Remote=__webpack_require__(62),_Remote2=_interopRequireDefault(_Remote),_constants=__webpack_require__(20);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var paths={USER:function USER(){return'users';},ROOM:function ROOM(){return'rooms';},INVITE:function INVITE(user){if(!user){throw new Error('You must be authenticated to list the invites');}return'_/invites/'+user.uid;},PARTICIPANT:function PARTICIPANT(room){return'_/rooms/'+room.uid+'/participants';},MESSAGE:function MESSAGE(room){return'_/rooms/'+room.uid+'/messages';},STREAM:function STREAM(room){return'_/rooms/'+room.uid+'/streams';}},classes={USER:_User2.default,ROOM:_Room2.default,INVITE:_Invite2.default,PARTICIPANT:_Participant2.default,MESSAGE:_Message2.default,STREAM:_Remote2.default};var _Events=function(){function _Events(keys){var _this=this;(0,_classCallCheck3.default)(this,_Events);keys.forEach(function(key){_this[key]=key;});}(0,_createClass3.default)(_Events,[{key:'supports',value:function supports(event){if(!event||typeof event!=='string'||this[event]!==event.toUpperCase()){throw new Error('Unsupported event. Use one of the following: '+(0,_stringify2.default)((0,_keys2.default)(this)));}return true;}},{key:'toPath',value:function toPath(event){if(this.supports(event)){return paths[event.toUpperCase().replace(/_.*$/,'')]||function(){return null;};}}},{key:'toClass',value:function toClass(event){if(this.supports(event)){return classes[event.toUpperCase().replace(/_.*$/,'')];}}}]);return _Events;}();var reach=exports.reach=new _Events(['USER_ADDED','USER_CHANGED','USER_REMOVED','ROOM_ADDED','ROOM_CHANGED','ROOM_REMOVED','INVITE_ADDED','INVITE_CHANGED']);var room=exports.room=new _Events(['MESSAGE_ADDED','MESSAGE_CHANGED','MESSAGE_REMOVED','PARTICIPANT_ADDED','PARTICIPANT_CHANGED','PARTICIPANT_REMOVED','STREAM_PUBLISHED','STREAM_UNPUBLISHED','STREAM_CHANGED']);var stream=exports.stream=new _Events(['MUTE','SIZE']);var invite=exports.invite=new _Events([_constants.ACCEPTED,_constants.REJECTED,_constants.CANCELED]);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(15);
var TAG = __webpack_require__(4)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(40);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_constants=__webpack_require__(20),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Events=__webpack_require__(30),Events=_interopRequireWildcard(_Events);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var update=function update(invite,status){var reason=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null,_ended=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null,values={status:status,reason:reason,_ended:_ended};if(invite.status!==_constants.ONGOING){return _promise2.default.reject(new Error('This invitation has already been answered'));}return DataSync.update('_/invites/'+invite.to+'/'+invite.uid,values).then(function(){(0,_keys2.default)(values).forEach(function(prop){invite[prop]=values[prop];});return _Room2.default.get(invite.room);}).then(function(){return{invite:invite};}).catch(Log.r('Invite_update'));};var Invite=function(){function Invite(snapData){(0,_classCallCheck3.default)(this,Invite);var values=snapData;if(snapData&&snapData.val&&typeof snapData.val==='function'){values=(0,_assign2.default)({},snapData.val(),{uid:snapData.name(),to:snapData.ref().parent().name()});}this.uid=values.uid;this.from=values.from;this.to=values.to;this.room=values.room;this.status=values.status;this.topic=values.topic;this._created=values._created;this._ended=values._ended;this._callbacks={};}(0,_createClass3.default)(Invite,[{key:'cancel',value:function cancel(reason){return update(this,_constants.CANCELED,reason,DataSync.ts());}},{key:'reject',value:function reject(reason){return update(this,_constants.REJECTED,reason,DataSync.ts());}},{key:'accept',value:function accept(){return update(this,_constants.ACCEPTED);}},{key:'on',value:function on(status,callback){var _this=this;if(Events.invite.supports(status)){if(!this._callbacks[status]){this._callbacks[status]=[];}this._callbacks[status].push(callback);if(!this._listener){this._listener=function(snapData){var updated=snapData.val();if(updated!==null&&updated!==_this.status){_this.status=updated;(_this._callbacks[updated]||[]).forEach(function(cb){cb(_this);});}};DataSync.on('_/invites/'+this.to+'/'+this.uid+'/status','value',this._listener.bind(this));}}}},{key:'onStatusChange',value:function onStatusChange(callback){var _this2=this;[_constants.ACCEPTED,_constants.REJECTED,_constants.CANCELED].forEach(function(event){_this2.on(event,callback);});}},{key:'off',value:function off(status,callback){var _this3=this;if(!status){this._callbacks={};}else if(this._callbacks[status]){if(callback){var idx=this._callbacks[status].findIndex(function(cb){return cb===callback;});if(idx>=0){this._callbacks.splice(idx,1);}}else{this._callbacks[status]=[];}}if(![_constants.CANCELED,_constants.ACCEPTED,_constants.REJECTED].some(function(event){return _this3._callbacks[event]&&_this3._callbacks[event].length>0;})){DataSync.off('_/invites/'+this.to+'/'+this.uid+'/status','value');}}},{key:'offStatusChange',value:function offStatusChange(callback){var _this4=this;if(!callback){this.off();}else{[_constants.ACCEPTED,_constants.REJECTED,_constants.CANCELED].forEach(function(event){_this4.off(event,callback);});}}},{key:'isOnGoing',get:function get(){return this.status===_constants.ONGOING;}},{key:'isRejected',get:function get(){return this.status===_constants.REJECTED;}},{key:'isAccepted',get:function get(){return this.status===_constants.ACCEPTED;}},{key:'isCanceled',get:function get(){return this.status===_constants.CANCELED;}}],[{key:'send',value:function send(invitee,room){var message=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can send an invite.'));}var inviteMetaData={from:_cache2.default.user.uid,room:room.uid,status:_constants.ONGOING,_created:DataSync.ts(),topic:message};return DataSync.push('_/invites/'+invitee.uid,inviteMetaData).then(function(inviteRef){var inviteId=inviteRef.name();return new Invite((0,_assign2.default)({uid:inviteId,to:invitee.uid},inviteMetaData));}).catch(Log.r('Invite#send'));}}]);return Invite;}();exports.default=Invite;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(32);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(46)('keys');
var uid = __webpack_require__(37);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(47);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(17);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(33);
var wksExt = __webpack_require__(51);
var defineProperty = __webpack_require__(11).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(132)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(70)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 53 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(87)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(160)
  , createDesc = __webpack_require__(161);
module.exports = __webpack_require__(54) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Device=__webpack_require__(59),_Device2=_interopRequireDefault(_Device),_constants=__webpack_require__(20),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var initializing=false;var User=function(){function User(snapData){(0,_classCallCheck3.default)(this,User);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.name=values.name;this.status=values.status;this.lastSeen=values.lastSeen;this.anonymous=/^anonymous/.test(values.provider);}(0,_createClass3.default)(User,[{key:'invite',value:function invite(message){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can invite another User.'));}return _Room2.default.create(_cache2.default.user.uid+'-'+this.uid).then(function(room){return room.invite([_this],null,message);}).then(function(data){return{room:data.room,invite:data.invites[0]};}).catch(Log.r('User~invite'));}},{key:'devices',value:function devices(){return DataSync.list('_/devices/'+this.uid,_Device2.default);}}],[{key:'init',value:function init(auth,name){var uid=auth.uid;if(!initializing){initializing=true;var d={status:_constants.CONNECTED,lastSeen:DataSync.ts(),provider:auth.provider};if(name){(0,_assign2.default)(d,{name:name});}var deviceId=_webcom2.default.INTERNAL.PersistentStorage.get(uid);return DataSync.update('users/'+uid,d).then(function(){var deviceMetadata={status:_constants.CONNECTED,sdk:{reach:'2.10.0',webcom:_webcom2.default.SDK_VERSION},userAgent:navigator.userAgent};_cache2.default.userAgent=deviceMetadata.userAgent;if(deviceId){return DataSync.update('_/devices/'+uid+'/'+deviceId,deviceMetadata);}return DataSync.push('_/devices/'+uid,deviceMetadata);}).then(function(deviceRef){if(!deviceId){deviceId=deviceRef.name();_webcom2.default.INTERNAL.PersistentStorage.set(uid,deviceId);}_cache2.default.device=deviceId;}).then(function(){DataSync.onDisconnect('_/devices/'+uid+'/'+deviceId+'/status').set(_constants.NOT_CONNECTED);DataSync.onDisconnect('users/'+uid).update({status:_constants.NOT_CONNECTED,lastSeen:DataSync.ts()});}).then(function(){return User.get(uid);}).then(function(user){initializing=false;return user;}).catch(function(e){Log.e(e);initializing=false;return _promise2.default.reject(e);});}return User.get(uid);}},{key:'disconnect',value:function disconnect(user){DataSync.onDisconnect('_/devices/'+user.uid+'/'+_cache2.default.device+'/status').cancel();DataSync.onDisconnect('users/'+user.uid).cancel();if(user.anonymous){return DataSync.remove('_/devices/'+user.uid).then(function(){return DataSync.get('_/invites/'+user.uid);}).then(function(invites){var inviteIds=[];invites.forEach(function(invite){inviteIds.push(invite.name());});return _promise2.default.all(inviteIds.map(function(inviteId){return DataSync.remove('_/invites/'+user.uid+'/'+inviteId);}));}).then(function(){return DataSync.remove('users/'+user.uid);}).then(function(){_webcom2.default.INTERNAL.PersistentStorage.remove(user.uid);}).catch(Log.r('User#anonymous_disconnect'));}return DataSync.set('_/devices/'+user.uid+'/'+_cache2.default.device+'/status',_constants.NOT_CONNECTED).then(function(){return DataSync.get('_/devices/'+user.uid);}).then(function(devices){var hasConnectedDevices=devices.forEach(function(device){return new RegExp('^'+_constants.CONNECTED+'$').test(device.val().status);});if(!hasConnectedDevices){return DataSync.update('users/'+user.uid,{status:_constants.NOT_CONNECTED});}return true;}).catch(Log.r('User#disconnect'));}},{key:'get',value:function get(uid){return DataSync.get('users/'+uid).then(function(snapData){return snapData?new User(snapData):null;}).catch(Log.r('User#get'));}}]);return User;}();exports.default=User;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var AUDIO=exports.AUDIO='audio';var VIDEO=exports.VIDEO='video';var AUDIO_VIDEO=exports.AUDIO_VIDEO='audio-video';var SCREEN_SHARING=exports.SCREEN_SHARING='screen-sharing';exports.default={AUDIO:AUDIO,VIDEO:VIDEO,AUDIO_VIDEO:AUDIO_VIDEO,SCREEN_SHARING:SCREEN_SHARING};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_Browser=__webpack_require__(91),_StreamTypes=__webpack_require__(57),_StreamTypes2=_interopRequireDefault(_StreamTypes),_Events=__webpack_require__(30),Events=_interopRequireWildcard(_Events),_Codec=__webpack_require__(92),_User=__webpack_require__(56),_User2=_interopRequireDefault(_User),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Invite=__webpack_require__(39),_Invite2=_interopRequireDefault(_Invite),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_Media=__webpack_require__(29),_Media2=_interopRequireDefault(_Media),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Reach=function(){function Reach(url){var cfg=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;(0,_classCallCheck3.default)(this,Reach);_cache2.default.base=url;_cache2.default.config=cfg;this._callbacks={};}(0,_createClass3.default)(Reach,[{key:'register',value:function register(email,password,name,rememberMe){var _this=this;return _cache2.default.base.createUser(email,password).then(function(auth){if(auth){return _this.login(email,password,name||email,rememberMe);}}).catch(Log.r('Reach~register'));}},{key:'login',value:function login(email,password,name){var rememberMe=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false,p=_promise2.default.resolve();if(this.current&&this.current.email!==email){p=this.logout();}return p.then(function(){return _cache2.default.base.authWithPassword({email:email,password:password,rememberMe:rememberMe});}).then(function(auth){return _User2.default.init(auth,name);}).then(function(u){_cache2.default.user=u;return u;}).catch(Log.r('Reach~login'));}},{key:'resume',value:function resume(){var _this2=this;return new _promise2.default(function(resolve,reject){if(_webcom2.default.INTERNAL.PersistentStorage.get('session')){_cache2.default.base.resume(function(error,auth){if(auth&&!_this2.current){_User2.default.init(auth).then(function(u){_cache2.default.user=u;resolve(u);},reject);}});}else{reject(new Error('No session to resume'));}});}},{key:'anonymous',value:function anonymous(name){var p=_promise2.default.resolve();if(this.current&&(!this.current.anonymous||this.current.name!==name)){p=this.logout();}return p.then(function(){return _cache2.default.base.authAnonymously();}).then(function(auth){return _User2.default.init(auth,name);}).then(function(u){_cache2.default.user=u;return u;}).catch(Log.r('Reach~anonymous'));}},{key:'logout',value:function logout(){var _this3=this;return new _promise2.default(function(resolve,reject){var p=_promise2.default.resolve();if(_this3.current!=null){p=_User2.default.disconnect(_this3.current);}p.then(function(){(0,_keys2.default)(_this3._callbacks).forEach(function(event){return DataSync.off(Events.reach.toPath(event)(_cache2.default.user),event);});_cache2.default.base.logout(function(){_cache2.default.user=null;resolve();});}).catch(function(e){Log.e(e);reject(e);});});}},{key:'users',value:function users(include){var _this4=this;if(!this.current){return _promise2.default.reject(new Error('Only an authenticated user can list Users.'));}return DataSync.list('users',_User2.default).then(function(users){return!include&&users&&_this4.current?users.filter(function(user){return user.uid!==_this4.current.uid;}):users;}).catch(Log.r('Reach~users'));}},{key:'rooms',value:function rooms(){if(!this.current){return _promise2.default.reject(new Error('Only an authenticated user can list Rooms.'));}return DataSync.list('rooms',_Room2.default).catch(Log.r('Reach~rooms'));}},{key:'invites',value:function invites(){if(!this.current){return _promise2.default.reject(new Error('Cannot list invites without a User being logged in.'));}return DataSync.list('_/invites/'+this.current.uid,_Invite2.default).catch(Log.r('Reach~invites'));}},{key:'on',value:function on(event,callback,cancelCallback){var path=Events.reach.toPath(event)(_cache2.default.user);if(path){var cls=Events.reach.toClass(event),cb=function cb(snapData){var d=cls?new cls(snapData):null;Log.i('Reach~on('+event+')',d);callback(d);};DataSync.on(path,event,cb,cancelCallback);if(!this._callbacks[event]){this._callbacks[event]=[];}this._callbacks[event].push(cb);}}},{key:'createRoom',value:function createRoom(name,extra){var publicRoom=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(!this.current){return _promise2.default.reject(new Error('Cannot create a Room without a User being logged in.'));}return _Room2.default.create(name,extra,publicRoom);}},{key:'getRoom',value:function getRoom(uid){return _Room2.default.get(uid);}},{key:'getUser',value:function getUser(uid){return _User2.default.get(uid);}},{key:'base',get:function get(){return _cache2.default.base;}},{key:'config',get:function get(){return _cache2.default.config;}},{key:'current',get:function get(){return _cache2.default.user;}},{key:'peerConnections',get:function get(){return _cache2.default.peerConnections.stacks;}}],[{key:'version',get:function get(){return{sdk:'2.10.0',schema:'draft-00'};}},{key:'types',get:function get(){return _StreamTypes2.default;}},{key:'events',get:function get(){return{room:Events.room,reach:Events.reach,stream:Events.stream,invite:Events.invite};}},{key:'browser',get:function get(){return _Browser.browser;}},{key:'media',get:function get(){return _Media2.default;}},{key:'codecs',get:function get(){return{audio:_Codec.audio,video:_Codec.video};}}]);return Reach;}();exports.default=Reach;module.exports=Reach;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Device=function(){function Device(snapData){(0,_classCallCheck3.default)(this,Device);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.os=values.os;this.userAgent=values.userAgent;this.status=values.status;this.sdk=values.sdk;}(0,_createClass3.default)(Device,null,[{key:'get',value:function get(userUid,deviceUid){return DataSync.get('_/devices/'+userUid+'/'+deviceUid).then(function(snapData){return snapData?new Device(snapData):null;}).catch(Log.r('Device#get'));}}]);return Device;}();exports.default=Device;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Message=function(){function Message(snapData,roomId){(0,_classCallCheck3.default)(this,Message);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.roomId=roomId;this.text=values.text;this.from=values.from;this._created=values._created;}(0,_createClass3.default)(Message,[{key:'edit',value:function edit(newText){var _this=this;return DataSync.update('/rooms/'+this.roomId+'/messages/'+this.uid,{text:newText}).then(function(){_this.text=newText;return _this;}).catch(Log.r('Message~edit'));}},{key:'remove',value:function remove(){return DataSync.remove('/rooms/'+this.roomId+'/messages/'+this.uid).catch(Log.r('Message~remove'));}}],[{key:'send',value:function send(room,text){if(!_cache2.default.user){return _promise2.default.reject(new Error('Cannot send a message to the Room without a User being logged in.'));}var data={from:_cache2.default.user.uid,_created:DataSync.ts(),text:text};return DataSync.push('_/rooms/'+room.uid+'/messages',data).then(function(pushRef){return DataSync.get('_/rooms/'+room.uid+'/messages/'+pushRef.name());}).then(function(snapData){return new Message(snapData,room.uid);}).catch(Log.r('Message#send'));}}]);return Message;}();exports.default=Message;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Participant=function Participant(snapData){(0,_classCallCheck3.default)(this,Participant);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.role=values.role;this.status=values.status;this._joined=values._joined;this.userAgent=values.userAgent;};exports.default=Participant;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_Events=__webpack_require__(30),Events=_interopRequireWildcard(_Events);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Remote=function(){function Remote(values){(0,_classCallCheck3.default)(this,Remote);Log.d('Remote~new',values);this.feed=values.feed;this.janusRoom=values.janusRoom;this.disable=values.disable;this.roomId=values.roomId;this.uid=values.uid;this.from=values.from;this.originUserUid=values.originUserUid;this.type=values.type;this.device=values.device;this.userAgent=values.userAgent;this.height=values.height;this.width=values.width;this.container=_cache2.default.config.remoteStreamContainer;this.muted=(0,_assign2.default)({audio:false,video:false},values.muted);this._callbacks={};this.peerConnection=null;}(0,_createClass3.default)(Remote,[{key:'subscribe',value:function subscribe(remoteStreamContainer){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can subscribe to a Room\'s stream.'));}this.container=remoteStreamContainer||_cache2.default.config.remoteStreamContainer;Log.d('Remote~subscribe',this,this.container);return _cache2.default.peerConnections.answer(this,this.container).then(function(pc){_this.peerConnection=pc;}).then(function(){return DataSync.update('_/rooms/'+_this.roomId+'/subscribers/'+_this.uid+'/'+_cache2.default.device,{to:_cache2.default.user.uid,_created:DataSync.ts()});}).then(function(){DataSync.onDisconnect('_/rooms/'+_this.roomId+'/subscribers/'+_this.uid+'/'+_cache2.default.device).remove();var subscribed=false;DataSync.on('_/rooms/'+_this.roomId+'/streams/'+_this.uid,'value',function(snapData){var values=snapData.val();Log.d('Remote~updated',values);if(values){_this.type=values.type;var height=values.height,width=values.width;if((height||width)&&(height!==_this.height||width!==_this.height)){_this.height=values.height;_this.width=values.width;Log.w(_this._callbacks[Events.stream.SIZE]);(_this._callbacks[Events.stream.SIZE]||[]).forEach(function(cb){return cb(_this.height,_this.width);});}var muted=values.muted;if(muted&&(muted.audio!==_this.muted.audio||muted.video!==_this.muted.video)){_this.muted=muted;Log.w(_this._callbacks[Events.stream.MUTE]);(_this._callbacks[Events.stream.MUTE]||[]).forEach(function(cb){return cb(_this.muted);});}subscribed=true;}else if(subscribed){Log.i('Remote#removed',_this);_this._close(true);}});}).catch(Log.r('Remote~subscribe'));}},{key:'unSubscribe',value:function unSubscribe(){return this._close(false);}},{key:'_close',value:function _close(remote){DataSync.onDisconnect('_/rooms/'+this.roomId+'/subscribers/'+this.uid+'/'+_cache2.default.device).cancel();DataSync.off('_/rooms/'+this.roomId+'/streams/'+this.uid,'value');!remote&&DataSync.remove('_/rooms/'+this.roomId+'/subscribers/'+this.uid+'/'+_cache2.default.device);return _promise2.default.resolve(_cache2.default.peerConnections.close(this.uid,this.device));}},{key:'on',value:function on(event,callback){if(Events.stream.supports(event)){if(!this._callbacks[event]){this._callbacks[event]=[];}this._callbacks[event].push(callback);}}},{key:'off',value:function off(event,callback){if(!event){this._callbacks={};}else if(Events.stream.supports(event)){if(!callback){this._callbacks[event]=[];}else{this._callbacks[event]=this._callbacks[event].filter(function(cb){return cb!==callback;});}}}},{key:'update',value:function update(values){var _this2=this;(0,_keys2.default)(values).forEach(function(key){_this2[key]=values[key];});}},{key:'node',get:function get(){return this.peerConnection?this.peerConnection.node:null;}}]);return Remote;}();exports.default=Remote;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(98);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(22);
var TAG = __webpack_require__(4)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(13) && !__webpack_require__(21)(function () {
  return Object.defineProperty(__webpack_require__(41)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(24);
var ITERATOR = __webpack_require__(4)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(12);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(33);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(79);
var hide = __webpack_require__(16);
var has = __webpack_require__(15);
var Iterators = __webpack_require__(24);
var $iterCreate = __webpack_require__(122);
var setToStringTag = __webpack_require__(35);
var getPrototypeOf = __webpack_require__(129);
var ITERATOR = __webpack_require__(4)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(4)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(127);
var enumBugKeys = __webpack_require__(42);
var IE_PROTO = __webpack_require__(45)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(41)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(65).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(34);
var createDesc = __webpack_require__(26);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(49);
var has = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(66);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(13) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(75);
var hiddenKeys = __webpack_require__(42).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(15);
var toIObject = __webpack_require__(18);
var arrayIndexOf = __webpack_require__(116)(false);
var IE_PROTO = __webpack_require__(45)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(10);
var core = __webpack_require__(2);
var fails = __webpack_require__(21);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var isObject = __webpack_require__(17);
var newPromiseCapability = __webpack_require__(43);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(12);
var aFunction = __webpack_require__(32);
var SPECIES = __webpack_require__(4)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(23);
var invoke = __webpack_require__(120);
var html = __webpack_require__(65);
var cel = __webpack_require__(41);
var global = __webpack_require__(3);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(22)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(64);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(24);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 83 */
/***/ (function(module, exports) {



/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(135);
var global = __webpack_require__(3);
var hide = __webpack_require__(16);
var Iterators = __webpack_require__(24);
var TO_STRING_TAG = __webpack_require__(4)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 85 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(147);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 88 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(163)('wks')
  , uid        = __webpack_require__(88)
  , Symbol     = __webpack_require__(27).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.browser=undefined;var _toConsumableArray2=__webpack_require__(63),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_console,_webrtcAdapter=__webpack_require__(170),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var browser=exports.browser=(0,_assign2.default)({compatible:!/\s/.test(_webrtcAdapter.browserDetails.browser)&&(!_webrtcAdapter.browserDetails.minVersion||_webrtcAdapter.browserDetails.version>=_webrtcAdapter.browserDetails.minVersion)},_webrtcAdapter.browserDetails);var version='Reach v'+'2.10.0'+' | Schema '+'draft-00'+' | Webcom v'+_webcom2.default.SDK_VERSION,message='';if(browser.version===null){message='Unsupported browser: browser must support WebRTC Peer-to-peer connections to use Reach';}else if(browser.minVersion&&browser.minVersion>browser.version){message='Unsupported browser: browser is outdated, update to latest version ('+browser.minVersion+'+)';}else if(!_webrtcAdapter.browserShim){message='No shim for your browser. There might a problem with your package.';}var args=[version+' '+message];if(/^(chrome|firefox)$/.test(browser.browser)){args=['%c '+version+' %c '+message,'background: '+(browser.compatible?'#f50':'red')+'; color: #fff; font-weight: bold','color: '+(browser.compatible?'inherit':'red')];}(_console=console).log.apply(_console,(0,_toConsumableArray3.default)(args));

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var video=exports.video={VP8:/^vp8/i,VP9:/^vp9/i,VP10:/^vp10/i,H264:/^h264/i,H265:/^h265/i};var audio=exports.audio={OPUS:/^opus/i,G722:/^g722/i,G711:/^g711/i,ISAC:/^isac/i,ISAC_16:/^isac\/16000/i,ISAC_32:/^isac\/32000/i,LSAC:/^lsac/i};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_toConsumableArray2=__webpack_require__(63),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_Media=__webpack_require__(29),_Media2=_interopRequireDefault(_Media),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _flattenServers=function _flattenServers(servers){var _ref,_expand=servers.map(function(server){var username=server.username,credential=server.credential,urls=server.urls,url=server.url,uris=urls||url;if(typeof uris!=='string'){return uris.map(function(uri){return{username:username,credential:credential,urls:uri};});}return[server];});return(_ref=[]).concat.apply(_ref,(0,_toConsumableArray3.default)(_expand));};var Config=function(){function Config(obj){var _this=this;(0,_classCallCheck3.default)(this,Config);this.constraints=null;this.localStreamContainer=null;this.remoteStreamContainer=null;this.preferredVideoCodec=null;this.preferredAudioCodec=null;this.reset();this.assign(obj);DataSync.get('_/ice').then(function(snapData){if(snapData){_this.iceServers=snapData.val();Log.i('ICEServers',_this.iceServers.length>0?_this.iceServers:'None');}},function(e){return Log.d('ICEServers',e);});}(0,_createClass3.default)(Config,[{key:'assign',value:function assign(obj){var _this2=this;(0,_keys2.default)(obj||{}).forEach(function(key){_this2[key]=obj[key];});}},{key:'reset',value:function reset(){this.assign({constraints:_Media2.default.constraints(),logLevel:'ERROR'});}},{key:'logLevel',set:function set(level){_cache2.default.logLevel=level;},get:function get(){return _cache2.default.logLevel;}},{key:'iceServers',set:function set(servers){Log.d('Config~set~iceServers',servers);if(servers){if(!this._iceServers){this._iceServers=[].concat(servers||[]);}else{var _currentServers=_flattenServers(this._iceServers),_newServers=_flattenServers(servers);_newServers.forEach(function(newServer){if(!_currentServers.some(function(server){return server.urls===newServer.urls&&server.username===newServer.username&&server.credential===newServer.credential;})){_currentServers.push(newServer);}});this._iceServers=_currentServers.reduce(function(previous,current){var username=current.username,credential=current.credential,urls=current.urls,idx=previous.findIndex(function(s){return s.username===username&&s.credential===credential;});if(idx>=0){previous[idx].urls.push(urls);}else{previous.push({username:username,credential:credential,urls:[urls]});}return previous;},[]);}}},get:function get(){return this._iceServers||[{username:'admin',credential:'webcom1234',urls:['turns:turn1.webcom.orange.com:443','turn:turn1.webcom.orange.com:443?transport=tcp','turn:turn1.webcom.orange.com:3478?transport=tcp']}];}}]);return Config;}();exports.default=Config;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_StreamTypes=__webpack_require__(57),_StreamTypes2=_interopRequireDefault(_StreamTypes),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_Media=__webpack_require__(29),_Media2=_interopRequireDefault(_Media),_constants=__webpack_require__(20);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _facingModes=[_Media2.default.facingMode.USER,_Media2.default.facingMode.ENVIRONMENT],_getConstraintValue=function _getConstraintValue(constraints,prop){return constraints[prop].exact||constraints[prop].ideal||constraints[prop];},_setConstrainValue=function _setConstrainValue(constraints,prop,other,value){constraints[prop]={exact:value};delete constraints[other];};var Local=function(){function Local(values){(0,_classCallCheck3.default)(this,Local);this.roomId=values.roomId;this.uid=values.uid;this.type=values.type;this.muted=(0,_assign2.default)({audio:false,video:false},values.muted);this.container=values.container||_cache2.default.config.localStreamContainer;this.node=null;this.peerConnections=[];this.status=_constants.NONE;this.isVideoLoaded=false;this._inputs={};this.constraints=values.constraints;}(0,_createClass3.default)(Local,[{key:'updateConstraints',value:function updateConstraints(constraints){var _this=this;Log.d('Local~updateConstraints',constraints);this.constraints=constraints;return navigator.mediaDevices.getUserMedia(this.constraints).then(function(media){['audio','video'].forEach(function(kind){var constraintsValue=_this.constraints[kind];if(constraintsValue){if(constraintsValue.deviceId||constraintsValue.facingMode){_this._inputs[kind]=_getConstraintValue(constraintsValue,constraintsValue.facingMode?'facingMode':'deviceId');}}});_this.media=media;});}},{key:'mute',value:function mute(){var track=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_StreamTypes2.default.AUDIO,state=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;Log.d('mute',track,state);var audio=this.muted.audio,video=this.muted.video,tracks=void 0;switch(track){case _StreamTypes2.default.AUDIO:audio=state;tracks=this.media.getAudioTracks();break;case _StreamTypes2.default.VIDEO:case _StreamTypes2.default.SCREEN_SHARING:video=state;tracks=this.media.getVideoTracks();break;case _StreamTypes2.default.AUDIO_VIDEO:audio=state;video=state;tracks=this.media.getTracks();break;}tracks.forEach(function(track){track.enabled=!state;});this.muted={audio:audio,video:video};DataSync.set('_/rooms/'+this.roomId+'/streams/'+this.uid+'/muted',this.muted);}},{key:'unMute',value:function unMute(track){this.mute(track,false);}},{key:'close',value:function close(){if(!~[_constants.CLOSED,_constants.CLOSING].indexOf(this.status)){this.status=_constants.CLOSING;var path='_/rooms/'+this.roomId+'/subscribers/'+this.uid;DataSync.off(path,'child_added');DataSync.off(path,'child_removed');DataSync.onDisconnect('_/rooms/'+this.roomId+'/streams/'+this.uid).cancel();DataSync.onDisconnect('_/rooms/'+this.roomId+'/subscribers/'+this.uid).cancel();DataSync.remove(path);DataSync.remove('_/rooms/'+this.roomId+'/streams/'+this.uid);this.media=null;this.status=_constants.CLOSED;Log.d('Local~close',this.uid);}return _promise2.default.resolve(this.status);}},{key:'switchCamera',value:function switchCamera(deviceId){return this._switchDevice(_StreamTypes2.default.VIDEO,deviceId);}},{key:'switchMicrophone',value:function switchMicrophone(deviceId){return this._switchDevice(_StreamTypes2.default.AUDIO,deviceId);}},{key:'_switchDevice',value:function _switchDevice(kind,deviceId){var _this2=this;Log.d('Local~_switchDevice',kind,deviceId);if(this.media.getTracks().some(function(track){return track.kind===kind;})){var next=_promise2.default.resolve(deviceId),currentModeIdx=_facingModes.indexOf(this._inputs[kind]);if(!deviceId&&!!~currentModeIdx){next=_promise2.default.resolve(_facingModes[(currentModeIdx+1)%_facingModes.length]);}else if(!~_facingModes.indexOf(deviceId)){next=_Media2.default.devices().then(function(d){var devices=d[kind+'input'].map(function(mediaDevice){return mediaDevice.deviceId;});devices.sort();var nextDevice=deviceId;if(deviceId&&!devices.some(function(device){return device===deviceId;})){return _promise2.default.reject(new Error('Unknown '+kind+' device'));}if(!deviceId&&devices.length>1){var idx=_this2._inputs[kind]?devices.findIndex(function(v){return v===_this2._inputs[kind];},_this2):0;nextDevice=devices[++idx%devices.length];}return nextDevice;});}else{next=_promise2.default.resolve(deviceId);}return next.then(function(device){if(_this2._inputs[kind]!==device){_this2._inputs[kind]=device;_this2.media.getTracks().forEach(function(track){return track.stop();});var constraints=(0,_assign2.default)({},_this2.constraints),props=['facingMode','deviceId'];if(!~_facingModes.indexOf(device)){props=props.reverse();}_setConstrainValue(constraints[kind],props[0],props[1],device);Log.d('Local~_switchDevice',kind,constraints);return _this2.updateConstraints(constraints);}}).then(function(){return _this2;});}return _promise2.default.reject(new Error('Current stream does not contain a '+kind+' track'));}},{key:'constraints',set:function set(constraints){var _this3=this,values=constraints||_cache2.default.config.constraints,defaultConstraints=_Media2.default.constraints();['audio','video'].forEach(function(type){if(!~_this3.type.indexOf(type)){values[type]=false;}else if(!values[type]){values[type]=defaultConstraints[type];}if(values[type].deviceId||values[type].facingMode){_this3._inputs[type]=_getConstraintValue(values[type],values[type].facingMode?'facingMode':'deviceId');}});Log.d('Local~set#contraints',values);this._constraints=values;},get:function get(){return this._constraints;}},{key:'media',set:function set(mediaStream){var _this4=this;if(mediaStream){if(!(mediaStream instanceof MediaStream)){throw new Error('The media MUST be a MediaStream');}var checkDevices={};mediaStream.getTracks().forEach(function(track){track.enabled=!_this4.muted[track.kind];if(!_this4._inputs[track.kind]){checkDevices[track.kind]=track.label;}});if((0,_keys2.default)(checkDevices).length){_Media2.default.devices().then(function(devices){(0,_keys2.default)(checkDevices).forEach(function(kind){if(devices[kind+'input']){var deviceIds=devices[kind+'input'].filter(function(device){return device.label.length&&device.label===checkDevices[kind];});if(deviceIds.length===1&&!_this4._inputs[kind]){_this4._inputs[kind]=deviceIds[0].deviceId;}if(deviceIds.length===0&&devices[kind+'input'][0].label===''&&!_this4._inputs[kind]){_this4._inputs[kind]=devices[kind+'input'][0].deviceId;}}});});}this.node=_Media2.default.attachStream(mediaStream,this.container,this.node,0);this.node.onloadeddata=function(){_this4.isVideoLoaded=true;};this.status=_constants.CONNECTED;Log.d('Local~set media',{mediaStream:mediaStream},this.node);this.peerConnections.forEach(function(peerConnection){return peerConnection.renegotiate(_this4._media,mediaStream);});}else if(this.media&&!mediaStream){this.node.srcObject=null;this.container?this.container.removeChild(this.node):'';this.node=null;this.media.getTracks().forEach(function(track){return track.stop();});this.peerConnections.forEach(function(peerConnection){return peerConnection.close();});}this._media=mediaStream;},get:function get(){return this._media;}}],[{key:'share',value:function share(roomId,type,container,constraints){if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can share a stream.'));}var streamMetaData={from:_cache2.default.user.uid,device:_cache2.default.device,type:type},sharedStream=new Local((0,_assign2.default)({roomId:roomId,constraints:constraints,container:container},streamMetaData));Log.d('Local~share',{sharedStream:sharedStream});return navigator.mediaDevices.getUserMedia(sharedStream.constraints).then(function(media){sharedStream.media=media;}).then(function(){return DataSync.push('_/rooms/'+roomId+'/streams',streamMetaData);}).then(function(streamRef){sharedStream.uid=streamRef.name();if(/video/i.test(sharedStream.type)){if(sharedStream.isVideoLoaded){var streamSize={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(streamSize);}else{sharedStream.node.onloadeddata=function(){var streamSize={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(streamSize);};}}if(/video/i.test(sharedStream.type)){window.addEventListener('resize',function(){if(sharedStream.node!=null){var _streamSize={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(_streamSize);}});}_cache2.default.streams.shared[sharedStream.uid]=sharedStream;DataSync.onDisconnect('_/rooms/'+roomId+'/streams/'+sharedStream.uid).remove();DataSync.onDisconnect('_/rooms/'+roomId+'/subscribers/'+sharedStream.uid).remove();var path='_/rooms/'+sharedStream.roomId+'/subscribers/'+sharedStream.uid,value=function value(snapData){return(0,_assign2.default)({device:snapData.name()},snapData.val()||{});};DataSync.on(path,'child_added',function(snapData){var subscriber=value(snapData);Log.d('Local~subscribed',subscriber);_cache2.default.peerConnections.offer(sharedStream,subscriber).then(function(pc){return sharedStream.peerConnections.push(pc);});},Log.e.bind(Log));DataSync.on(path,'child_removed',function(snapData){var subscriber=value(snapData);Log.d('Local~un-subscribed',subscriber);var closedPC=_cache2.default.peerConnections.close(sharedStream.uid,subscriber.device);sharedStream.peerConnections=sharedStream.peerConnections.filter(function(pc){return pc!==closedPC;});},Log.e.bind(Log));Log.d('Local~shared',{sharedStream:sharedStream});return sharedStream;});}},{key:'getLocalVideo',value:function getLocalVideo(roomId,type,container,constraints){console.log('Local~share on entre ici');if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can share a stream.'));}var streamMetaData={from:_cache2.default.user.uid,device:_cache2.default.device,userAgent:_cache2.default.userAgent,type:type},sharedStream=new Local((0,_assign2.default)({roomId:roomId,constraints:constraints,container:container},streamMetaData));sharedStream.streamMetaData=streamMetaData;Log.d('Local~share',{sharedStream:sharedStream});console.log('Local~share',{sharedStream:sharedStream});return navigator.mediaDevices.getUserMedia(sharedStream.constraints).then(function(media){sharedStream.media=media;return sharedStream;});}},{key:'publish',value:function publish(sharedStream){Log.d('Local~publish');var roomId=sharedStream.roomId;return DataSync.push('_/rooms/'+roomId+'/streams',sharedStream.streamMetaData).then(function(streamRef){sharedStream.uid=streamRef.name();if(sharedStream.isVideoLoaded){var streamSize={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(streamSize);}else{sharedStream.node.onloadeddata=function(){var streamSize={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(streamSize);};}window.addEventListener('resize',function(){if(sharedStream.node!=null){var _streamSize2={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(_streamSize2);}});_cache2.default.streams.shared[sharedStream.uid]=sharedStream;DataSync.onDisconnect('_/rooms/'+roomId+'/streams/'+sharedStream.uid).remove();DataSync.onDisconnect('_/rooms/'+roomId+'/subscribers/'+sharedStream.uid).remove();var path='_/rooms/'+sharedStream.roomId+'/subscribers/'+sharedStream.uid,value=function value(snapData){return(0,_assign2.default)({device:snapData.name()},snapData.val()||{});};DataSync.on(path,'child_added',function(snapData){var subscriber=value(snapData);Log.d('Local~subscribed',subscriber);_cache2.default.peerConnections.offer(sharedStream,subscriber).then(function(pc){return sharedStream.peerConnections.push(pc);});},Log.e.bind(Log));DataSync.on(path,'child_removed',function(snapData){var subscriber=value(snapData);Log.d('Local~un-subscribed',subscriber);var closedPC=_cache2.default.peerConnections.close(sharedStream.uid,subscriber.device);sharedStream.peerConnections=sharedStream.peerConnections.filter(function(pc){return pc!==closedPC;});},Log.e.bind(Log));Log.d('Local~shared',{sharedStream:sharedStream});return sharedStream;});}}]);return Local;}();exports.default=Local;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_Remote=__webpack_require__(62),_Remote2=_interopRequireDefault(_Remote);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var StreamManager=function(){function StreamManager(){(0,_classCallCheck3.default)(this,StreamManager);this.shared={};this.remote={};}(0,_createClass3.default)(StreamManager,[{key:'getRemote',value:function getRemote(streamData){var remoteStream=this.remote[streamData.uid];if(remoteStream){remoteStream.update(streamData);}else{this.remote[streamData.uid]=remoteStream=new _Remote2.default(streamData);}return remoteStream;}},{key:'getShared',value:function getShared(streamData){return this.shared[streamData.uid];}}]);return StreamManager;}();exports.default=StreamManager;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_getOwnPropertyDescriptor=__webpack_require__(101),_getOwnPropertyDescriptor2=_interopRequireDefault(_getOwnPropertyDescriptor),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_Media=__webpack_require__(29),_Media2=_interopRequireDefault(_Media),_Device=__webpack_require__(59),_Device2=_interopRequireDefault(_Device),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_constants=__webpack_require__(20);__webpack_require__(146);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var DtlsSrtpKeyAgreement={DtlsSrtpKeyAgreement:true},sdpConstraints=function sdpConstraints(receive){return{OfferToReceiveAudio:receive,OfferToReceiveVideo:receive};},ICE_CONNECTION_STATE_DISCONNECTED='disconnected',ICE_CONNECTION_STATE_CONNECTED='connected',ICE_CONNECTION_STATE_COMPLETED='completed',ICE_CONNECTION_STATE_CHECKING='checking',ICE_CONNECTION_STATE_CLOSED='closed',ICE_CONNECTION_STATE_FAILED='failed',ICE_CONNECTION_STATE_OTHER='other',_toJSON=function _toJSON(o){return o.toJSON&&typeof o.toJSON==='function'?o.toJSON():o;};var PeerConnection=function(){function PeerConnection(stackId,streamId,remote,publish){var _this=this;(0,_classCallCheck3.default)(this,PeerConnection);this.stackId=stackId;this.streamId=streamId;this.remote=remote;this.publish=publish;this._localPath='_/webrtc/'+this.stackId+'/'+this.streamId+'/'+_cache2.default.device;this._remotePath='_/webrtc/'+this.stackId+'/'+this.streamId+'/'+this.remote.device;this.negotiated=false;this.node=null;this.container=null;this.pc=new RTCPeerConnection({iceServers:_cache2.default.config.iceServers},{optional:[DtlsSrtpKeyAgreement],mandatory:sdpConstraints(!publish)});this.pc.onicecandidate=function(e){if(!_this.negotiated&&e.candidate){Log.d('PeerConnection~onicecandidate',e.candidate);DataSync.push(_this._localPath+'/ice',_toJSON(e.candidate));}};this.pc.oniceconnectionstatechange=function(){Log.d('PeerConnection~oniceconnectionstatechange',_this.pc);var iceConnectionState=_this.pc.iceConnectionState;switch(iceConnectionState){case ICE_CONNECTION_STATE_CHECKING:break;case ICE_CONNECTION_STATE_CONNECTED:_this._attachStream();_this._remoteICECandidates(false);break;case ICE_CONNECTION_STATE_COMPLETED:_this._remoteICECandidates(false);break;case ICE_CONNECTION_STATE_DISCONNECTED:case ICE_CONNECTION_STATE_FAILED:Log.e('PeerConnection~stateDisconnected','Disconnect PeerConnection');break;case ICE_CONNECTION_STATE_CLOSED:Log.d('PeerConnection~stateclosed','Close PeerConnection');_this.close();break;}_this.negotiated=_this.negotiated||_this.isConnected;};this.pc.onicegatheringstatechange=function(){Log.d('PeerConnection~onicegatheringstatechange',_this.pc.iceGatheringState);};this._status=_constants.OPENED;}(0,_createClass3.default)(PeerConnection,[{key:'_remoteICECandidates',value:function _remoteICECandidates(listen){var _this2=this,path=this._remotePath+'/ice',event='child_added';if(listen){DataSync.on(path,event,function(snap){var candidate=snap.val();Log.d('PeerConnection~addIceCandidate',candidate);_this2.pc.addIceCandidate(new RTCIceCandidate(candidate));});}else{DataSync.off(path,event);}}},{key:'_attachStream',value:function _attachStream(){if(this.remoteStream&&this.isConnected){this.node=_Media2.default.attachStream(this.remoteStream,this.container,this.node);}}},{key:'answer',value:function answer(htmlElement){var _this3=this;Log.i('PeerConnection~answer',{htmlElement:htmlElement,peerConnection:this});this.container=htmlElement;if((0,_getOwnPropertyDescriptor2.default)(RTCPeerConnection.prototype,'ontrack')){this.pc.ontrack=function(e){Log.d('PeerConnection~ontrack',e.streams[0]);_this3.remoteStream=e.streams[0];};}else{this.pc.onaddstream=function(e){Log.d('PeerConnection~onaddstream',e.stream);_this3.remoteStream=e.stream;};}DataSync.on(this._remotePath+'/sdp','value',function(snap){Log.d('Offer remotePath=',_this3._remotePath);var sdpOffer=snap.val();Log.d('Offer sdpOffer=',sdpOffer);if(sdpOffer!=null){Log.d('PeerConnection~offered '+sdpOffer.sdp);_this3.pc.setRemoteDescription(sdpOffer).then(function(){return Log.d('PeerConnection~answer#remoteDescription',_this3.pc.remoteDescription.sdp);}).then(function(){if(/^offer$/.test(_this3.pc.remoteDescription.type)){return _this3.pc.createAnswer();}return _promise2.default.reject(new Error('SDP is not an offer'));}).then(function(description){return _this3._setPreferredCodecs(description);}).then(function(description){return _this3.pc.setLocalDescription(description);}).then(function(){Log.d('PeerConnection~answer#localSDP',_this3.pc.localDescription.sdp);_this3._remoteICECandidates(true);}).then(function(){return console.log('PeerConnection~answer#localSDP',_this3.pc.localDescription.sdp);}).then(function(){return _this3._sendSdpToRemote();}).catch(Log.r('PeerConnection~answser#error'));}});return _promise2.default.resolve(this);}},{key:'offer',value:function offer(stream){var _this4=this;Log.i('PeerConnection~offer',{stream:stream,peerConnection:this});var sendTimeout=void 0;return new _promise2.default(function(resolve,reject){_this4.pc.onnegotiationneeded=function(){Log.d('PeerConnection~onnegotiationneeded');if(sendTimeout){clearTimeout(sendTimeout);sendTimeout=null;}sendTimeout=setTimeout(function(){sendTimeout=null;_this4._sendOffer().then(function(){resolve(_this4);}).catch(function(e){Log.d('PeerConnection~offer',e);reject(e);});},20);};DataSync.on(_this4._remotePath+'/sdp','value',function(snap){var sdpAnswer=snap.val();if(sdpAnswer!=null){Log.d('PeerConnection~offer#answered '+sdpAnswer.sdp);_this4.pc.setRemoteDescription(sdpAnswer).then(function(){Log.d('PeerConnection~offer#remoteDescription',_this4.pc.remoteDescription.sdp);_this4._remoteICECandidates(true);}).catch(Log.e.bind(Log,'PeerConnection~offer#remoteDescription'));}});_this4._alterStream(stream,'add');});}},{key:'_sendSdpToRemote',value:function _sendSdpToRemote(){var _this5=this;Log.d('PeerConnection~_sendSdpToRemote#localSDP',this.pc.localDescription.sdp);var remoteUserId=this.remote.to?this.remote.to:this.remote.from;_Device2.default.get(remoteUserId,this.remote.device).then(function(remoteDevice){var sdpOffer=_this5.pc.localDescription.sdp,newSdp=sdpOffer,local=/Chrome\/([0-9]+)/.exec(navigator.userAgent),remote=/Chrome\/([0-9]+)/.exec(remoteDevice.userAgent);Log.d('PeerConnection~_sendSdpToRemote#this.remote.device',_this5.remote.device,remoteUserId);Log.d('PeerConnection~_sendSdpToRemote#remoteDevice.userAgent',remoteDevice.userAgent);Log.d('PeerConnection~_sendSdpToRemote#navigator.userAgent',navigator.userAgent);if(navigator.userAgent.indexOf('Chrome')!==-1&&navigator.userAgent.indexOf('Android')!==-1&&remoteDevice.userAgent.indexOf('Safari')!==-1&&local[1]<=64){if(local[1]<=60){newSdp=newSdp.replace(/;profile-level-id=([a-z0-9]+)/,'');}else{newSdp=newSdp.replace('42001f','42e01f');}}if(navigator.userAgent.indexOf('Safari')!==-1&&remoteDevice.userAgent.indexOf('Chrome')!==-1&&remoteDevice.userAgent.indexOf('Android')!==-1&&remote[1]<=64){if(remote[1]<=60){newSdp=newSdp.replace(/;profile-level-id=([a-z0-9]+)/,'');}else{newSdp=newSdp.replace('42e01f','42001f');}}Log.d('PeerConnection~_sendSdpToRemote#SDP sent to remote '+newSdp);var descriptionChanged={sdp:newSdp,type:_this5.pc.localDescription.type};DataSync.update(_this5._localPath+'/sdp',_toJSON(descriptionChanged));});}},{key:'_sendOffer',value:function _sendOffer(){var _this6=this;Log.d('PeerConnection~_sendOffer');return this.pc.createOffer().then(function(description){return _this6._setPreferredCodecs(description);}).then(function(description){return _this6.pc.setLocalDescription(description);}).then(function(){return Log.d('PeerConnection~_sendOffer#localDescription',_this6.pc.localDescription.sdp);}).then(function(){return _this6._sendSdpToRemote();});}},{key:'_alterStream',value:function _alterStream(stream,method){var _this7=this;if((0,_getOwnPropertyDescriptor2.default)(RTCPeerConnection.prototype,method+'Track')){if(method==='add'){stream.getTracks().forEach(function(track){return _this7.pc[method+'Track'](track,stream);},this);}else{this.pc.getSenders().forEach(function(sender){return _this7.pc[method+'Track'](sender);},this);}}else{this.pc[method+'Stream'](stream);}}},{key:'renegotiate',value:function renegotiate(oldStream,newStream){Log.d('PeerConnection~renegotiate');if((0,_getOwnPropertyDescriptor2.default)(RTCPeerConnection.prototype,'getSenders')&&'RTCRtpSender'in window&&(0,_getOwnPropertyDescriptor2.default)(RTCRtpSender.prototype,'replaceTrack')){this.pc.getSenders().forEach(function(sender){var newTracks=void 0;switch(sender.track.kind){case'audio':newTracks=newStream.getAudioTracks();break;case'video':newTracks=newStream.getVideoTracks();break;default:newTracks=[];}if(newTracks.length){sender.replaceTrack(newTracks[0]);}});this._sendOffer().catch(function(e){Log.d('PeerConnection~renegotiate',e);});}else{this._alterStream(oldStream,'remove');this._alterStream(newStream,'add');}}},{key:'close',value:function close(){var _this8=this;if(this._status===_constants.OPENED){this._status=_constants.CLOSING;if(this.node){this.node.stop&&this.node.stop();this.node.srcObject=null;this.container.removeChild(this.node);this.node=null;}this._remoteICECandidates(false);DataSync.off(this._remotePath+'/sdp','value');DataSync.remove(this._localPath);if(this.pc&&this.pc.signalingState!=='closed'){this.pc.onsignalingstatechange=function(){if(_this8.pc.signalingState!=='closed'){_this8._status=_constants.CLOSED;}};this.pc.close();}else{this._status=_constants.CLOSED;}}}},{key:'_setPreferredCodecs',value:function _setPreferredCodecs(description){if(_cache2.default.config.preferredVideoCodec||_cache2.default.config.preferredAudioCodec){Log.d('PeerConnection~_setPreferredCodecs',{description:description,config:_cache2.default.config});var sdpLines=description.sdp.split(/\r?\n/),medias={audio:[],video:[]},current=null;sdpLines.forEach(function(sdpLine,i){if(/^m=/.test(sdpLine)){var d=/^m=(\w+)\s[0-9\/]+\s[A-Za-z0-9\/]+\s([0-9\s]+)/.exec(sdpLine);current={fmt:d[2].split(/\s/),index:i,codecs:[]};medias[d[1]].push(current);}else if(current&&/^a=rtpmap:/.test(sdpLine)){var c=/^a=rtpmap:(\d+)\s([a-zA-Z0-9\-\/]+)/.exec(sdpLine);if(c){current.codecs.push({id:c[1],name:c[2],index:i});}}});Log.d('PeerConnection~_setPreferredCodecs',medias);var update=false,prefer=function prefer(mediaList,preferedCodec){mediaList.forEach(function(media){var selected=media.codecs.find(function(codec){return preferedCodec.test(codec.name);});if(selected){var fmt=[selected.id].concat(media.fmt.filter(function(ids){return ids!==selected.id;}));sdpLines[media.index]=sdpLines[media.index].replace(media.fmt.join(' '),fmt.join(' '));update=true;}});};if(_cache2.default.config.preferredVideoCodec){prefer(medias.video,_cache2.default.config.preferredVideoCodec);}if(_cache2.default.config.preferredAudioCodec){prefer(medias.audio,_cache2.default.config.preferredAudioCodec);}if(update){Log.d('PeerConnection~_setPreferredCodecs',sdpLines.join('\r\n'));return{sdp:sdpLines.join('\r\n'),type:description.type};}}return description;}},{key:'remoteStream',set:function set(stream){this._remoteStream=stream;this._attachStream();},get:function get(){return this._remoteStream;}},{key:'isConnected',get:function get(){return this.pc&&!!~[ICE_CONNECTION_STATE_CONNECTED,ICE_CONNECTION_STATE_COMPLETED,ICE_CONNECTION_STATE_OTHER].indexOf(this.pc.iceConnectionState);}}]);return PeerConnection;}();exports.default=PeerConnection;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_PeerConnection=__webpack_require__(96),_PeerConnection2=_interopRequireDefault(_PeerConnection),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var getStackId=function getStackId(id1,id2){return id1.localeCompare(id2,'en-us')>0?id1+'-'+id2:id2+'-'+id1;};var PeerConnectionManager=function(){function PeerConnectionManager(){(0,_classCallCheck3.default)(this,PeerConnectionManager);this.stacks={};}(0,_createClass3.default)(PeerConnectionManager,[{key:'getPeerConnection',value:function getPeerConnection(stream,remote,publish){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can get a PeerConnection\'s object.'));}var stackId=getStackId(remote.device,_cache2.default.device);if(this.stacks[stackId]&&this.stacks[stackId][stream.uid]){return _promise2.default.resolve(this.stacks[stackId][stream.uid]);}if(!this.stacks[stackId]){this.stacks[stackId]={};}var users={};users[_cache2.default.user.uid]=true;users[remote.from||remote.to]=true;return DataSync.update('_/webrtc/'+stackId,users).then(function(){return new _PeerConnection2.default(stackId,stream.uid,remote,publish);}).then(function(pc){Log.d('PeerConnectionManager~getPeerConnection',{stackId:stackId,streamId:stream.uid,pc:pc});_this.stacks[stackId][stream.uid]=pc;return pc;}).catch(Log.r('PeerConnectionManager~getPeerConnection'));}},{key:'offer',value:function offer(localStream,subscriber){Log.d('PeerConnectionManager~offer',{localStream:localStream,subscriber:subscriber});return this.getPeerConnection(localStream,subscriber,true).then(function(pc){return pc.offer(localStream.media);});}},{key:'answer',value:function answer(remoteStream,htmlElement){Log.d('PeerConnectionManager~answer',{remoteStream:remoteStream,htmlElement:htmlElement});return this.getPeerConnection(remoteStream,remoteStream,false).then(function(pc){return pc.answer(htmlElement);});}},{key:'close',value:function close(streamId,remoteDevice){var stackId=getStackId(remoteDevice,_cache2.default.device),pc=this.stacks[stackId]?this.stacks[stackId][streamId]:null;if(pc){pc.close();this.stacks[stackId][streamId]=null;delete this.stacks[stackId][streamId];return pc;}return false;}}]);return PeerConnectionManager;}();exports.default=PeerConnectionManager;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(103);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(102);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
__webpack_require__(134);
module.exports = __webpack_require__(2).Array.from;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(136);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
var $Object = __webpack_require__(2).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(139);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(83);
__webpack_require__(52);
__webpack_require__(84);
__webpack_require__(140);
__webpack_require__(142);
__webpack_require__(143);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(141);
__webpack_require__(83);
__webpack_require__(144);
__webpack_require__(145);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
__webpack_require__(84);
module.exports = __webpack_require__(51).f('iterator');


/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(48);
var toAbsoluteIndex = __webpack_require__(133);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(11);
var createDesc = __webpack_require__(26);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(44);
var pIE = __webpack_require__(34);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(23);
var call = __webpack_require__(69);
var isArrayIter = __webpack_require__(68);
var anObject = __webpack_require__(12);
var toLength = __webpack_require__(48);
var getIterFn = __webpack_require__(82);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(22);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(72);
var descriptor = __webpack_require__(26);
var setToStringTag = __webpack_require__(35);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(16)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(37)('meta');
var isObject = __webpack_require__(17);
var has = __webpack_require__(15);
var setDesc = __webpack_require__(11).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(21)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var macrotask = __webpack_require__(81).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(22)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(44);
var pIE = __webpack_require__(34);
var toObject = __webpack_require__(36);
var IObject = __webpack_require__(67);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(21)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(25);

module.exports = __webpack_require__(13) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(18);
var gOPN = __webpack_require__(74).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(15);
var toObject = __webpack_require__(36);
var IE_PROTO = __webpack_require__(45)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(16);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var core = __webpack_require__(2);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(13);
var SPECIES = __webpack_require__(4)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(47);
var defined = __webpack_require__(40);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(47);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(23);
var $export = __webpack_require__(10);
var toObject = __webpack_require__(36);
var call = __webpack_require__(69);
var isArrayIter = __webpack_require__(68);
var toLength = __webpack_require__(48);
var createProperty = __webpack_require__(117);
var getIterFn = __webpack_require__(82);

$export($export.S + $export.F * !__webpack_require__(71)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(114);
var step = __webpack_require__(123);
var Iterators = __webpack_require__(24);
var toIObject = __webpack_require__(18);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(70)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(126) });


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(13), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(18);
var $getOwnPropertyDescriptor = __webpack_require__(73).f;

__webpack_require__(76)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(36);
var $keys = __webpack_require__(25);

__webpack_require__(76)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(33);
var global = __webpack_require__(3);
var ctx = __webpack_require__(23);
var classof = __webpack_require__(64);
var $export = __webpack_require__(10);
var isObject = __webpack_require__(17);
var aFunction = __webpack_require__(32);
var anInstance = __webpack_require__(115);
var forOf = __webpack_require__(119);
var speciesConstructor = __webpack_require__(80);
var task = __webpack_require__(81).set;
var microtask = __webpack_require__(125)();
var newPromiseCapabilityModule = __webpack_require__(43);
var perform = __webpack_require__(77);
var promiseResolve = __webpack_require__(78);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(4)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(130)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(35)($Promise, PROMISE);
__webpack_require__(131)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(71)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3);
var has = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(13);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(79);
var META = __webpack_require__(124).KEY;
var $fails = __webpack_require__(21);
var shared = __webpack_require__(46);
var setToStringTag = __webpack_require__(35);
var uid = __webpack_require__(37);
var wks = __webpack_require__(4);
var wksExt = __webpack_require__(51);
var wksDefine = __webpack_require__(50);
var enumKeys = __webpack_require__(118);
var isArray = __webpack_require__(121);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(17);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(49);
var createDesc = __webpack_require__(26);
var _create = __webpack_require__(72);
var gOPNExt = __webpack_require__(128);
var $GOPD = __webpack_require__(73);
var $DP = __webpack_require__(11);
var $keys = __webpack_require__(25);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(74).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(34).f = $propertyIsEnumerable;
  __webpack_require__(44).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(33)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(16)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(10);
var core = __webpack_require__(2);
var global = __webpack_require__(3);
var speciesConstructor = __webpack_require__(80);
var promiseResolve = __webpack_require__(78);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(43);
var perform = __webpack_require__(77);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50)('asyncIterator');


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50)('observable');


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(168);
module.exports = __webpack_require__(53).Array.find;

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(89)('unscopables')
  , ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(55)(ArrayProto, UNSCOPABLES, {});
module.exports = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(38);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = __webpack_require__(86)
  , IObject  = __webpack_require__(158)
  , toObject = __webpack_require__(166)
  , toLength = __webpack_require__(165)
  , asc      = __webpack_require__(152);
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(38)
  , isArray  = __webpack_require__(159)
  , SPECIES  = __webpack_require__(89)('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(151);

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 153 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(38)
  , document = __webpack_require__(27).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(27)
  , core      = __webpack_require__(53)
  , hide      = __webpack_require__(55)
  , redefine  = __webpack_require__(162)
  , ctx       = __webpack_require__(86)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target)redefine(target, key, out, type & $export.U);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 156 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(54) && !__webpack_require__(87)(function(){
  return Object.defineProperty(__webpack_require__(154)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(85);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(85);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(149)
  , IE8_DOM_DEFINE = __webpack_require__(157)
  , toPrimitive    = __webpack_require__(167)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(54) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(27)
  , hide      = __webpack_require__(55)
  , has       = __webpack_require__(156)
  , SRC       = __webpack_require__(88)('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

__webpack_require__(53).inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction)has(val, 'name') || hide(val, 'name', key);
  if(O[key] === val)return;
  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key])O[key] = val;
      else hide(O, key, val);
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(27)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 164 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(164)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(153);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(38);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(155)
  , $find   = __webpack_require__(150)(5)
  , KEY     = 'find'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(148)(KEY);

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 /* eslint-env node */


// SDP helpers.
var SDPUtils = {};

// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
  return Math.random().toString(36).substr(2, 10);
};

// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();

// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
  return blob.trim().split('\n').map(function(line) {
    return line.trim();
  });
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
  var parts = blob.split('\nm=');
  return parts.map(function(part, index) {
    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
  });
};

// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
  return SDPUtils.splitLines(blob).filter(function(line) {
    return line.indexOf(prefix) === 0;
  });
};

// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate = function(line) {
  var parts;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parseInt(parts[1], 10),
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compability.
        candidate.usernameFragment = parts[i + 1];
        break;
      default: // extension handling, in particular ufrag
        candidate[parts[i]] = parts[i + 1];
        break;
    }
  }
  return candidate;
};

// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate = function(candidate) {
  var sdp = [];
  sdp.push(candidate.foundation);
  sdp.push(candidate.component);
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.ip);
  sdp.push(candidate.port);

  var type = candidate.type;
  sdp.push('typ');
  sdp.push(type);
  if (type !== 'host' && candidate.relatedAddress &&
      candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress); // was: relAddr
    sdp.push('rport');
    sdp.push(candidate.relatedPort); // was: relPort
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  if (candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.ufrag);
  }
  return 'candidate:' + sdp.join(' ');
};

// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
  return line.substr(14).split(' ');
}

// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
  var parts = line.substr(9).split(' ');
  var parsed = {
    payloadType: parseInt(parts.shift(), 10) // was: id
  };

  parts = parts[0].split('/');

  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
  // was: channels
  parsed.numChannels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  return parsed;
};

// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
      (codec.numChannels !== 1 ? '/' + codec.numChannels : '') + '\r\n';
};

// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1]
  };
};

// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
      (headerExtension.direction && headerExtension.direction !== 'sendrecv'
          ? '/' + headerExtension.direction
          : '') +
      ' ' + headerExtension.uri + '\r\n';
};

// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function(line) {
  var parsed = {};
  var kv;
  var parts = line.substr(line.indexOf(' ') + 1).split(';');
  for (var j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }
  return parsed;
};

// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
  var line = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.parameters && Object.keys(codec.parameters).length) {
    var params = [];
    Object.keys(codec.parameters).forEach(function(param) {
      params.push(param + '=' + codec.parameters[param]);
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }
  return line;
};

// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' ')
  };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
  var lines = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function(fb) {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
          '\r\n';
    });
  }
  return lines;
};

// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
  var sp = line.indexOf(' ');
  var parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10)
  };
  var colon = line.indexOf(':', sp);
  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }
  return parts;
};

// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
  if (mid) {
    return mid.substr(6);
  }
}

SDPUtils.parseFingerprint = function(line) {
  var parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
    value: parts[1]
  };
};

// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
      'a=fingerprint:');
  // Note: a=setup line is ignored since we use the 'auto' role.
  // Note2: 'algorithm' is not case sensitive except in Edge.
  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint)
  };
};

// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
  var sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(function(fp) {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
};
// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.splitLines(mediaSection);
  // Search in session part, too.
  lines = lines.concat(SDPUtils.splitLines(sessionpart));
  var iceParameters = {
    usernameFragment: lines.filter(function(line) {
      return line.indexOf('a=ice-ufrag:') === 0;
    })[0].substr(12),
    password: lines.filter(function(line) {
      return line.indexOf('a=ice-pwd:') === 0;
    })[0].substr(10)
  };
  return iceParameters;
};

// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
      'a=ice-pwd:' + params.password + '\r\n';
};

// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
  var description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: []
  };
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
    var pt = mline[i];
    var rtpmapline = SDPUtils.matchPrefix(
        mediaSection, 'a=rtpmap:' + pt + ' ')[0];
    if (rtpmapline) {
      var codec = SDPUtils.parseRtpMap(rtpmapline);
      var fmtps = SDPUtils.matchPrefix(
          mediaSection, 'a=fmtp:' + pt + ' ');
      // Only the first a=fmtp:<pt> is considered.
      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(
          mediaSection, 'a=rtcp-fb:' + pt + ' ')
        .map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec);
      // parse FEC mechanisms from rtpmap lines.
      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;
        default: // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }
  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  });
  // FIXME: parse rtcp.
  return description;
};

// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
  var sdp = '';

  // Build the mline.
  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(function(codec) {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }
    return codec.payloadType;
  }).join(' ') + '\r\n';

  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
  caps.codecs.forEach(function(codec) {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  var maxptime = 0;
  caps.codecs.forEach(function(codec) {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });
  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }
  sdp += 'a=rtcp-mux\r\n';

  caps.headerExtensions.forEach(function(extension) {
    sdp += SDPUtils.writeExtmap(extension);
  });
  // FIXME: write fecMechanisms.
  return sdp;
};

// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

  // filter a=ssrc:... cname:, ignore PlanB-msid
  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(parts) {
    return parts.attribute === 'cname';
  });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc;

  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
  .map(function(line) {
    var parts = line.split(' ');
    parts.shift();
    return parts.map(function(part) {
      return parseInt(part, 10);
    });
  });
  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function(codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10),
        rtx: {
          ssrc: secondarySsrc
        }
      };
      encodingParameters.push(encParam);
      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: secondarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });
  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  }

  // we support both b=AS and b=TIAS but interpret AS as TIAS.
  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95
          - (50 * 40 * 8);
    } else {
      bandwidth = undefined;
    }
    encodingParameters.forEach(function(params) {
      params.maxBitrate = bandwidth;
    });
  }
  return encodingParameters;
};

// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
  var rtcpParameters = {};

  var cname;
  // Gets the first SSRC. Note that with RTX there might be multiple
  // SSRCs.
  var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
      .map(function(line) {
        return SDPUtils.parseSsrcMedia(line);
      })
      .filter(function(obj) {
        return obj.attribute === 'cname';
      })[0];
  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  }

  // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize
  var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0;

  // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.
  var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;

  return rtcpParameters;
};

// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
  var parts;
  var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return {stream: parts[0], track: parts[1]};
  }
  var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(parts) {
    return parts.attribute === 'msid';
  });
  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return {stream: parts[0], track: parts[1]};
  }
};

// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
  return Math.random().toString().substr(2, 21);
};

// Write boilder plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer) {
  var sessionId;
  var version = sessVer !== undefined ? sessVer : 2;
  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }
  // FIXME: sess-id should be an NTP timestamp.
  return 'v=0\r\n' +
      'o=thisisadapterortc ' + sessionId + ' ' + version + ' IN IP4 127.0.0.1\r\n' +
      's=-\r\n' +
      't=0 0\r\n';
};

SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
      transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      type === 'offer' ? 'actpass' : 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.direction) {
    sdp += 'a=' + transceiver.direction + '\r\n';
  } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    // spec.
    var msid = 'msid:' + stream.id + ' ' +
        transceiver.rtpSender.track.id + '\r\n';
    sdp += 'a=' + msid;

    // for Chrome.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
};

// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  var lines = SDPUtils.splitLines(mediaSection);
  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);
      default:
        // FIXME: What should happen here?
    }
  }
  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }
  return 'sendrecv';
};

SDPUtils.getKind = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function(mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

SDPUtils.parseMLine = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return {
    kind: mline[0].substr(2),
    port: parseInt(mline[1], 10),
    protocol: mline[2],
    fmt: mline.slice(3).join(' ')
  };
};

// Expose public methods.
if (true) {
  module.exports = SDPUtils;
}


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */



var adapterFactory = __webpack_require__(171);
module.exports = adapterFactory({window: global.window});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */



// Shimming starts here.
module.exports = function(dependencies, opts) {
  var window = dependencies && dependencies.window;

  var options = {
    shimChrome: true,
    shimFirefox: true,
    shimEdge: true,
    shimSafari: true,
  };

  for (var key in opts) {
    if (hasOwnProperty.call(opts, key)) {
      options[key] = opts[key];
    }
  }

  // Utils.
  var utils = __webpack_require__(19);
  var logging = utils.log;
  var browserDetails = utils.detectBrowser(window);

  // Export to the adapter global object visible in the browser.
  var adapter = {
    browserDetails: browserDetails,
    extractVersion: utils.extractVersion,
    disableLog: utils.disableLog,
    disableWarnings: utils.disableWarnings
  };

  // Uncomment the line below if you want logging to occur, including logging
  // for the switch statement below. Can also be turned on in the browser via
  // adapter.disableLog(false), but then logging from the switch statement below
  // will not appear.
  // require('./utils').disableLog(false);

  // Browser shims.
  var chromeShim = __webpack_require__(172) || null;
  var edgeShim = __webpack_require__(174) || null;
  var firefoxShim = __webpack_require__(177) || null;
  var safariShim = __webpack_require__(179) || null;

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'chrome':
      if (!chromeShim || !chromeShim.shimPeerConnection ||
          !options.shimChrome) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = chromeShim;

      chromeShim.shimGetUserMedia(window);
      chromeShim.shimMediaStream(window);
      utils.shimCreateObjectURL(window);
      chromeShim.shimSourceObject(window);
      chromeShim.shimPeerConnection(window);
      chromeShim.shimOnTrack(window);
      chromeShim.shimAddTrackRemoveTrack(window);
      chromeShim.shimGetSendersWithDtmf(window);
      break;
    case 'firefox':
      if (!firefoxShim || !firefoxShim.shimPeerConnection ||
          !options.shimFirefox) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = firefoxShim;

      firefoxShim.shimGetUserMedia(window);
      utils.shimCreateObjectURL(window);
      firefoxShim.shimSourceObject(window);
      firefoxShim.shimPeerConnection(window);
      firefoxShim.shimOnTrack(window);
      break;
    case 'edge':
      if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
        logging('MS edge shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming edge.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = edgeShim;

      edgeShim.shimGetUserMedia(window);
      utils.shimCreateObjectURL(window);
      edgeShim.shimPeerConnection(window);
      edgeShim.shimReplaceTrack(window);
      break;
    case 'safari':
      if (!safariShim || !options.shimSafari) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = safariShim;
      // shim window.URL.createObjectURL Safari (technical preview)
      utils.shimCreateObjectURL(window);
      safariShim.shimRTCIceServerUrls(window);
      safariShim.shimCallbacksAPI(window);
      safariShim.shimLocalStreamsAPI(window);
      safariShim.shimRemoteStreamsAPI(window);
      safariShim.shimGetUserMedia(window);
      break;
    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */

var utils = __webpack_require__(19);
var logging = utils.log;

var chromeShim = {
  shimMediaStream: function(window) {
    window.MediaStream = window.MediaStream || window.webkitMediaStream;
  },

  shimOnTrack: function(window) {
    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
        window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
        get: function() {
          return this._ontrack;
        },
        set: function(f) {
          if (this._ontrack) {
            this.removeEventListener('track', this._ontrack);
          }
          this.addEventListener('track', this._ontrack = f);
        }
      });
      var origSetRemoteDescription =
          window.RTCPeerConnection.prototype.setRemoteDescription;
      window.RTCPeerConnection.prototype.setRemoteDescription = function() {
        var pc = this;
        if (!pc._ontrackpoly) {
          pc._ontrackpoly = function(e) {
            // onaddstream does not fire when a track is added to an existing
            // stream. But stream.onaddtrack is implemented so we use that.
            e.stream.addEventListener('addtrack', function(te) {
              var receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = pc.getReceivers().find(function(r) {
                  return r.track && r.track.id === te.track.id;
                });
              } else {
                receiver = {track: te.track};
              }

              var event = new Event('track');
              event.track = te.track;
              event.receiver = receiver;
              event.streams = [e.stream];
              pc.dispatchEvent(event);
            });
            e.stream.getTracks().forEach(function(track) {
              var receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = pc.getReceivers().find(function(r) {
                  return r.track && r.track.id === track.id;
                });
              } else {
                receiver = {track: track};
              }
              var event = new Event('track');
              event.track = track;
              event.receiver = receiver;
              event.streams = [e.stream];
              pc.dispatchEvent(event);
            });
          };
          pc.addEventListener('addstream', pc._ontrackpoly);
        }
        return origSetRemoteDescription.apply(pc, arguments);
      };
    }
  },

  shimGetSendersWithDtmf: function(window) {
    // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
    if (typeof window === 'object' && window.RTCPeerConnection &&
        !('getSenders' in window.RTCPeerConnection.prototype) &&
        'createDTMFSender' in window.RTCPeerConnection.prototype) {
      var shimSenderWithDtmf = function(pc, track) {
        return {
          track: track,
          get dtmf() {
            if (this._dtmf === undefined) {
              if (track.kind === 'audio') {
                this._dtmf = pc.createDTMFSender(track);
              } else {
                this._dtmf = null;
              }
            }
            return this._dtmf;
          },
          _pc: pc
        };
      };

      // augment addTrack when getSenders is not available.
      if (!window.RTCPeerConnection.prototype.getSenders) {
        window.RTCPeerConnection.prototype.getSenders = function() {
          this._senders = this._senders || [];
          return this._senders.slice(); // return a copy of the internal state.
        };
        var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
        window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
          var pc = this;
          var sender = origAddTrack.apply(pc, arguments);
          if (!sender) {
            sender = shimSenderWithDtmf(pc, track);
            pc._senders.push(sender);
          }
          return sender;
        };

        var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
        window.RTCPeerConnection.prototype.removeTrack = function(sender) {
          var pc = this;
          origRemoveTrack.apply(pc, arguments);
          var idx = pc._senders.indexOf(sender);
          if (idx !== -1) {
            pc._senders.splice(idx, 1);
          }
        };
      }
      var origAddStream = window.RTCPeerConnection.prototype.addStream;
      window.RTCPeerConnection.prototype.addStream = function(stream) {
        var pc = this;
        pc._senders = pc._senders || [];
        origAddStream.apply(pc, [stream]);
        stream.getTracks().forEach(function(track) {
          pc._senders.push(shimSenderWithDtmf(pc, track));
        });
      };

      var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
      window.RTCPeerConnection.prototype.removeStream = function(stream) {
        var pc = this;
        pc._senders = pc._senders || [];
        origRemoveStream.apply(pc, [(pc._streams[stream.id] || stream)]);

        stream.getTracks().forEach(function(track) {
          var sender = pc._senders.find(function(s) {
            return s.track === track;
          });
          if (sender) {
            pc._senders.splice(pc._senders.indexOf(sender), 1); // remove sender
          }
        });
      };
    } else if (typeof window === 'object' && window.RTCPeerConnection &&
               'getSenders' in window.RTCPeerConnection.prototype &&
               'createDTMFSender' in window.RTCPeerConnection.prototype &&
               window.RTCRtpSender &&
               !('dtmf' in window.RTCRtpSender.prototype)) {
      var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
      window.RTCPeerConnection.prototype.getSenders = function() {
        var pc = this;
        var senders = origGetSenders.apply(pc, []);
        senders.forEach(function(sender) {
          sender._pc = pc;
        });
        return senders;
      };

      Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
        get: function() {
          if (this._dtmf === undefined) {
            if (this.track.kind === 'audio') {
              this._dtmf = this._pc.createDTMFSender(this.track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        }
      });
    }
  },

  shimSourceObject: function(window) {
    var URL = window && window.URL;

    if (typeof window === 'object') {
      if (window.HTMLMediaElement &&
        !('srcObject' in window.HTMLMediaElement.prototype)) {
        // Shim the srcObject property, once, when HTMLMediaElement is found.
        Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
          get: function() {
            return this._srcObject;
          },
          set: function(stream) {
            var self = this;
            // Use _srcObject as a private property for this shim
            this._srcObject = stream;
            if (this.src) {
              URL.revokeObjectURL(this.src);
            }

            if (!stream) {
              this.src = '';
              return undefined;
            }
            this.src = URL.createObjectURL(stream);
            // We need to recreate the blob url when a track is added or
            // removed. Doing it manually since we want to avoid a recursion.
            stream.addEventListener('addtrack', function() {
              if (self.src) {
                URL.revokeObjectURL(self.src);
              }
              self.src = URL.createObjectURL(stream);
            });
            stream.addEventListener('removetrack', function() {
              if (self.src) {
                URL.revokeObjectURL(self.src);
              }
              self.src = URL.createObjectURL(stream);
            });
          }
        });
      }
    }
  },

  shimAddTrackRemoveTrack: function(window) {
    // shim addTrack and removeTrack.
    if (window.RTCPeerConnection.prototype.addTrack) {
      return;
    }

    // also shim pc.getLocalStreams when addTrack is shimmed
    // to return the original streams.
    var origGetLocalStreams = window.RTCPeerConnection.prototype
        .getLocalStreams;
    window.RTCPeerConnection.prototype.getLocalStreams = function() {
      var self = this;
      var nativeStreams = origGetLocalStreams.apply(this);
      self._reverseStreams = self._reverseStreams || {};
      return nativeStreams.map(function(stream) {
        return self._reverseStreams[stream.id];
      });
    };

    var origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function(stream) {
      var pc = this;
      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};

      stream.getTracks().forEach(function(track) {
        var alreadyExists = pc.getSenders().find(function(s) {
          return s.track === track;
        });
        if (alreadyExists) {
          throw new DOMException('Track already exists.',
              'InvalidAccessError');
        }
      });
      // Add identity mapping for consistency with addTrack.
      // Unless this is being used with a stream from addTrack.
      if (!pc._reverseStreams[stream.id]) {
        var newStream = new window.MediaStream(stream.getTracks());
        pc._streams[stream.id] = newStream;
        pc._reverseStreams[newStream.id] = stream;
        stream = newStream;
      }
      origAddStream.apply(pc, [stream]);
    };

    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      var pc = this;
      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};

      origRemoveStream.apply(pc, [(pc._streams[stream.id] || stream)]);
      delete pc._reverseStreams[(pc._streams[stream.id] ?
          pc._streams[stream.id].id : stream.id)];
      delete pc._streams[stream.id];
    };

    window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
      var pc = this;
      if (pc.signalingState === 'closed') {
        throw new DOMException(
          'The RTCPeerConnection\'s signalingState is \'closed\'.',
          'InvalidStateError');
      }
      var streams = [].slice.call(arguments, 1);
      if (streams.length !== 1 ||
          !streams[0].getTracks().find(function(t) {
            return t === track;
          })) {
        // this is not fully correct but all we can manage without
        // [[associated MediaStreams]] internal slot.
        throw new DOMException(
          'The adapter.js addTrack polyfill only supports a single ' +
          ' stream which is associated with the specified track.',
          'NotSupportedError');
      }

      var alreadyExists = pc.getSenders().find(function(s) {
        return s.track === track;
      });
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
            'InvalidAccessError');
      }

      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};
      var oldStream = pc._streams[stream.id];
      if (oldStream) {
        // this is using odd Chrome behaviour, use with caution:
        // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
        // Note: we rely on the high-level addTrack/dtmf shim to
        // create the sender with a dtmf sender.
        oldStream.addTrack(track);
        pc.dispatchEvent(new Event('negotiationneeded'));
      } else {
        var newStream = new window.MediaStream([track]);
        pc._streams[stream.id] = newStream;
        pc._reverseStreams[newStream.id] = stream;
        pc.addStream(newStream);
      }
      return pc.getSenders().find(function(s) {
        return s.track === track;
      });
    };

    window.RTCPeerConnection.prototype.removeTrack = function(sender) {
      var pc = this;
      if (pc.signalingState === 'closed') {
        throw new DOMException(
          'The RTCPeerConnection\'s signalingState is \'closed\'.',
          'InvalidStateError');
      }
      // We can not yet check for sender instanceof RTCRtpSender
      // since we shim RTPSender. So we check if sender._pc is set.
      if (!sender._pc) {
        throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' +
            'does not implement interface RTCRtpSender.', 'TypeError');
      }
      var isLocal = sender._pc === pc;
      if (!isLocal) {
        throw new DOMException('Sender was not created by this connection.',
            'InvalidAccessError');
      }

      // Search for the native stream the senders track belongs to.
      pc._streams = pc._streams || {};
      var stream;
      Object.keys(pc._streams).forEach(function(streamid) {
        var hasTrack = pc._streams[streamid].getTracks().find(function(track) {
          return sender.track === track;
        });
        if (hasTrack) {
          stream = pc._streams[streamid];
        }
      });

      if (stream) {
        if (stream.getTracks().length === 1) {
          // if this is the last track of the stream, remove the stream. This
          // takes care of any shimmed _senders.
          pc.removeStream(stream);
        } else {
          // relying on the same odd chrome behaviour as above.
          stream.removeTrack(sender.track);
        }
        pc.dispatchEvent(new Event('negotiationneeded'));
      }
    };
  },

  shimPeerConnection: function(window) {
    var browserDetails = utils.detectBrowser(window);

    // The RTCPeerConnection object.
    if (!window.RTCPeerConnection) {
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        // Translate iceTransportPolicy to iceTransports,
        // see https://code.google.com/p/webrtc/issues/detail?id=4869
        // this was fixed in M56 along with unprefixing RTCPeerConnection.
        logging('PeerConnection');
        if (pcConfig && pcConfig.iceTransportPolicy) {
          pcConfig.iceTransports = pcConfig.iceTransportPolicy;
        }

        return new window.webkitRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype =
          window.webkitRTCPeerConnection.prototype;
      // wrap static methods. Currently just generateCertificate.
      if (window.webkitRTCPeerConnection.generateCertificate) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
          get: function() {
            return window.webkitRTCPeerConnection.generateCertificate;
          }
        });
      }
    } else {
      // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
      var OrigPeerConnection = window.RTCPeerConnection;
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        if (pcConfig && pcConfig.iceServers) {
          var newIceServers = [];
          for (var i = 0; i < pcConfig.iceServers.length; i++) {
            var server = pcConfig.iceServers[i];
            if (!server.hasOwnProperty('urls') &&
                server.hasOwnProperty('url')) {
              utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
              server = JSON.parse(JSON.stringify(server));
              server.urls = server.url;
              newIceServers.push(server);
            } else {
              newIceServers.push(pcConfig.iceServers[i]);
            }
          }
          pcConfig.iceServers = newIceServers;
        }
        return new OrigPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
      // wrap static methods. Currently just generateCertificate.
      Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
        get: function() {
          return OrigPeerConnection.generateCertificate;
        }
      });
    }

    var origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function(selector,
        successCallback, errorCallback) {
      var self = this;
      var args = arguments;

      // If selector is a function then we are in the old style stats so just
      // pass back the original getStats format to avoid breaking old users.
      if (arguments.length > 0 && typeof selector === 'function') {
        return origGetStats.apply(this, arguments);
      }

      // When spec-style getStats is supported, return those when called with
      // either no arguments or the selector argument is null.
      if (origGetStats.length === 0 && (arguments.length === 0 ||
          typeof arguments[0] !== 'function')) {
        return origGetStats.apply(this, []);
      }

      var fixChromeStats_ = function(response) {
        var standardReport = {};
        var reports = response.result();
        reports.forEach(function(report) {
          var standardStats = {
            id: report.id,
            timestamp: report.timestamp,
            type: {
              localcandidate: 'local-candidate',
              remotecandidate: 'remote-candidate'
            }[report.type] || report.type
          };
          report.names().forEach(function(name) {
            standardStats[name] = report.stat(name);
          });
          standardReport[standardStats.id] = standardStats;
        });

        return standardReport;
      };

      // shim getStats with maplike support
      var makeMapStats = function(stats) {
        return new Map(Object.keys(stats).map(function(key) {
          return [key, stats[key]];
        }));
      };

      if (arguments.length >= 2) {
        var successCallbackWrapper_ = function(response) {
          args[1](makeMapStats(fixChromeStats_(response)));
        };

        return origGetStats.apply(this, [successCallbackWrapper_,
          arguments[0]]);
      }

      // promise-support
      return new Promise(function(resolve, reject) {
        origGetStats.apply(self, [
          function(response) {
            resolve(makeMapStats(fixChromeStats_(response)));
          }, reject]);
      }).then(successCallback, errorCallback);
    };

    // add promise support -- natively available in Chrome 51
    if (browserDetails.version < 51) {
      ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
          .forEach(function(method) {
            var nativeMethod = window.RTCPeerConnection.prototype[method];
            window.RTCPeerConnection.prototype[method] = function() {
              var args = arguments;
              var self = this;
              var promise = new Promise(function(resolve, reject) {
                nativeMethod.apply(self, [args[0], resolve, reject]);
              });
              if (args.length < 2) {
                return promise;
              }
              return promise.then(function() {
                args[1].apply(null, []);
              },
              function(err) {
                if (args.length >= 3) {
                  args[2].apply(null, [err]);
                }
              });
            };
          });
    }

    // promise support for createOffer and createAnswer. Available (without
    // bugs) since M52: crbug/619289
    if (browserDetails.version < 52) {
      ['createOffer', 'createAnswer'].forEach(function(method) {
        var nativeMethod = window.RTCPeerConnection.prototype[method];
        window.RTCPeerConnection.prototype[method] = function() {
          var self = this;
          if (arguments.length < 1 || (arguments.length === 1 &&
              typeof arguments[0] === 'object')) {
            var opts = arguments.length === 1 ? arguments[0] : undefined;
            return new Promise(function(resolve, reject) {
              nativeMethod.apply(self, [resolve, reject, opts]);
            });
          }
          return nativeMethod.apply(this, arguments);
        };
      });
    }

    // shim implicit creation of RTCSessionDescription/RTCIceCandidate
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          var nativeMethod = window.RTCPeerConnection.prototype[method];
          window.RTCPeerConnection.prototype[method] = function() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                window.RTCIceCandidate :
                window.RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          };
        });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate =
        window.RTCPeerConnection.prototype.addIceCandidate;
    window.RTCPeerConnection.prototype.addIceCandidate = function() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
  }
};


// Expose public methods.
module.exports = {
  shimMediaStream: chromeShim.shimMediaStream,
  shimOnTrack: chromeShim.shimOnTrack,
  shimAddTrackRemoveTrack: chromeShim.shimAddTrackRemoveTrack,
  shimGetSendersWithDtmf: chromeShim.shimGetSendersWithDtmf,
  shimSourceObject: chromeShim.shimSourceObject,
  shimPeerConnection: chromeShim.shimPeerConnection,
  shimGetUserMedia: __webpack_require__(173)
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */

var utils = __webpack_require__(19);
var logging = utils.log;

// Expose public methods.
module.exports = function(window) {
  var browserDetails = utils.detectBrowser(window);
  var navigator = window && window.navigator;

  var constraintsToChrome_ = function(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    var cc = {};
    Object.keys(c).forEach(function(key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      var r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      var oldname_ = function(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return (name === 'deviceId') ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function(mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  var shimConstraints_ = function(constraints, func) {
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && typeof constraints.audio === 'object') {
      var remap = function(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && typeof constraints.video === 'object') {
      // Shim facingMode for mobile & surface pro.
      var face = constraints.video.facingMode;
      face = face && ((typeof face === 'object') ? face : {ideal: face});
      var getSupportedFacingModeLies = browserDetails.version < 61;

      if ((face && (face.exact === 'user' || face.exact === 'environment' ||
                    face.ideal === 'user' || face.ideal === 'environment')) &&
          !(navigator.mediaDevices.getSupportedConstraints &&
            navigator.mediaDevices.getSupportedConstraints().facingMode &&
            !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        var matches;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }
        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices()
          .then(function(devices) {
            devices = devices.filter(function(d) {
              return d.kind === 'videoinput';
            });
            var dev = devices.find(function(d) {
              return matches.some(function(match) {
                return d.label.toLowerCase().indexOf(match) !== -1;
              });
            });
            if (!dev && devices.length && matches.indexOf('back') !== -1) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }
            if (dev) {
              constraints.video.deviceId = face.exact ? {exact: dev.deviceId} :
                                                        {ideal: dev.deviceId};
            }
            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  var shimError_ = function(e) {
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        InvalidStateError: 'NotReadableError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotReadableError',
        MediaDeviceKillSwitchOn: 'NotReadableError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraintName,
      toString: function() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  var getUserMedia_ = function(constraints, onSuccess, onError) {
    shimConstraints_(constraints, function(c) {
      navigator.webkitGetUserMedia(c, onSuccess, function(e) {
        onError(shimError_(e));
      });
    });
  };

  navigator.getUserMedia = getUserMedia_;

  // Returns the result of getUserMedia as a Promise.
  var getUserMediaPromise_ = function(constraints) {
    return new Promise(function(resolve, reject) {
      navigator.getUserMedia(constraints, resolve, reject);
    });
  };

  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {
      getUserMedia: getUserMediaPromise_,
      enumerateDevices: function() {
        return new Promise(function(resolve) {
          var kinds = {audio: 'audioinput', video: 'videoinput'};
          return window.MediaStreamTrack.getSources(function(devices) {
            resolve(devices.map(function(device) {
              return {label: device.label,
                kind: kinds[device.kind],
                deviceId: device.id,
                groupId: ''};
            }));
          });
        });
      },
      getSupportedConstraints: function() {
        return {
          deviceId: true, echoCancellation: true, facingMode: true,
          frameRate: true, height: true, width: true
        };
      }
    };
  }

  // A shim for getUserMedia method on the mediaDevices object.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (!navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      return getUserMediaPromise_(constraints);
    };
  } else {
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(cs) {
      return shimConstraints_(cs, function(c) {
        return origGetUserMedia(c).then(function(stream) {
          if (c.audio && !stream.getAudioTracks().length ||
              c.video && !stream.getVideoTracks().length) {
            stream.getTracks().forEach(function(track) {
              track.stop();
            });
            throw new DOMException('', 'NotFoundError');
          }
          return stream;
        }, function(e) {
          return Promise.reject(shimError_(e));
        });
      });
    };
  }

  // Dummy devicechange event methods.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
    navigator.mediaDevices.addEventListener = function() {
      logging('Dummy mediaDevices.addEventListener called.');
    };
  }
  if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
    navigator.mediaDevices.removeEventListener = function() {
      logging('Dummy mediaDevices.removeEventListener called.');
    };
  }
};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


var utils = __webpack_require__(19);
var shimRTCPeerConnection = __webpack_require__(176);

module.exports = {
  shimGetUserMedia: __webpack_require__(175),
  shimPeerConnection: function(window) {
    var browserDetails = utils.detectBrowser(window);

    if (window.RTCIceGatherer) {
      // ORTC defines an RTCIceCandidate object but no constructor.
      // Not implemented in Edge.
      if (!window.RTCIceCandidate) {
        window.RTCIceCandidate = function(args) {
          return args;
        };
      }
      // ORTC does not have a session description object but
      // other browsers (i.e. Chrome) that will support both PC and ORTC
      // in the future might have this defined already.
      if (!window.RTCSessionDescription) {
        window.RTCSessionDescription = function(args) {
          return args;
        };
      }
      // this adds an additional event listener to MediaStrackTrack that signals
      // when a tracks enabled property was changed. Workaround for a bug in
      // addStream, see below. No longer required in 15025+
      if (browserDetails.version < 15025) {
        var origMSTEnabled = Object.getOwnPropertyDescriptor(
            window.MediaStreamTrack.prototype, 'enabled');
        Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
          set: function(value) {
            origMSTEnabled.set.call(this, value);
            var ev = new Event('enabled');
            ev.enabled = value;
            this.dispatchEvent(ev);
          }
        });
      }
    }

    // ORTC defines the DTMF sender a bit different.
    // https://github.com/w3c/ortc/issues/714
    if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
      Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
        get: function() {
          if (this._dtmf === undefined) {
            if (this.track.kind === 'audio') {
              this._dtmf = new window.RTCDtmfSender(this);
            } else if (this.track.kind === 'video') {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        }
      });
    }

    window.RTCPeerConnection =
        shimRTCPeerConnection(window, browserDetails.version);
  },
  shimReplaceTrack: function(window) {
    // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
    if (window.RTCRtpSender &&
        !('replaceTrack' in window.RTCRtpSender.prototype)) {
      window.RTCRtpSender.prototype.replaceTrack =
          window.RTCRtpSender.prototype.setTrack;
    }
  }
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


// Expose public methods.
module.exports = function(window) {
  var navigator = window && window.navigator;

  var shimError_ = function(e) {
    return {
      name: {PermissionDeniedError: 'NotAllowedError'}[e.name] || e.name,
      message: e.message,
      constraint: e.constraint,
      toString: function() {
        return this.name;
      }
    };
  };

  // getUserMedia error shim.
  var origGetUserMedia = navigator.mediaDevices.getUserMedia.
      bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = function(c) {
    return origGetUserMedia(c).catch(function(e) {
      return Promise.reject(shimError_(e));
    });
  };
};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


var SDPUtils = __webpack_require__(169);

// sort tracks such that they follow an a-v-a-v...
// pattern.
function sortTracks(tracks) {
  var audioTracks = tracks.filter(function(track) {
    return track.kind === 'audio';
  });
  var videoTracks = tracks.filter(function(track) {
    return track.kind === 'video';
  });
  tracks = [];
  while (audioTracks.length || videoTracks.length) {
    if (audioTracks.length) {
      tracks.push(audioTracks.shift());
    }
    if (videoTracks.length) {
      tracks.push(videoTracks.shift());
    }
  }
  return tracks;
}

// Edge does not like
// 1) stun:
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function(server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) {
        console.warn('RTCIceServer.url is deprecated! Use urls instead.');
      }
      var isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(function(url) {
        var validTurn = url.indexOf('turn:') === 0 &&
            url.indexOf('transport=udp') !== -1 &&
            url.indexOf('turn:[') === -1 &&
            !hasTurn;

        if (validTurn) {
          hasTurn = true;
          return true;
        }
        return url.indexOf('stun:') === 0 && edgeVersion >= 14393;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
    return false;
  });
}

// Determines the intersection of local and remote capabilities.
function getCommonCapabilities(localCapabilities, remoteCapabilities) {
  var commonCapabilities = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: []
  };

  var findCodecByPayloadType = function(pt, codecs) {
    pt = parseInt(pt, 10);
    for (var i = 0; i < codecs.length; i++) {
      if (codecs[i].payloadType === pt ||
          codecs[i].preferredPayloadType === pt) {
        return codecs[i];
      }
    }
  };

  var rtxCapabilityMatches = function(lRtx, rRtx, lCodecs, rCodecs) {
    var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
    var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
    return lCodec && rCodec &&
        lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
  };

  localCapabilities.codecs.forEach(function(lCodec) {
    for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
      var rCodec = remoteCapabilities.codecs[i];
      if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
          lCodec.clockRate === rCodec.clockRate) {
        if (lCodec.name.toLowerCase() === 'rtx' &&
            lCodec.parameters && rCodec.parameters.apt) {
          // for RTX we need to find the local rtx that has a apt
          // which points to the same local codec as the remote one.
          if (!rtxCapabilityMatches(lCodec, rCodec,
              localCapabilities.codecs, remoteCapabilities.codecs)) {
            continue;
          }
        }
        rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
        // number of channels is the highest common number of channels
        rCodec.numChannels = Math.min(lCodec.numChannels,
            rCodec.numChannels);
        // push rCodec so we reply with offerer payload type
        commonCapabilities.codecs.push(rCodec);

        // determine common feedback mechanisms
        rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
          for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
            if (lCodec.rtcpFeedback[j].type === fb.type &&
                lCodec.rtcpFeedback[j].parameter === fb.parameter) {
              return true;
            }
          }
          return false;
        });
        // FIXME: also need to determine .parameters
        //  see https://github.com/openpeer/ortc/issues/569
        break;
      }
    }
  });

  localCapabilities.headerExtensions.forEach(function(lHeaderExtension) {
    for (var i = 0; i < remoteCapabilities.headerExtensions.length;
         i++) {
      var rHeaderExtension = remoteCapabilities.headerExtensions[i];
      if (lHeaderExtension.uri === rHeaderExtension.uri) {
        commonCapabilities.headerExtensions.push(rHeaderExtension);
        break;
      }
    }
  });

  // FIXME: fecMechanisms
  return commonCapabilities;
}

// is action=setLocalDescription with type allowed in signalingState
function isActionAllowedInSignalingState(action, type, signalingState) {
  return {
    offer: {
      setLocalDescription: ['stable', 'have-local-offer'],
      setRemoteDescription: ['stable', 'have-remote-offer']
    },
    answer: {
      setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
      setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
    }
  }[type][action].indexOf(signalingState) !== -1;
}

module.exports = function(window, edgeVersion) {
  var RTCPeerConnection = function(config) {
    var self = this;

    var _eventTarget = document.createDocumentFragment();
    ['addEventListener', 'removeEventListener', 'dispatchEvent']
        .forEach(function(method) {
          self[method] = _eventTarget[method].bind(_eventTarget);
        });

    this.needNegotiation = false;

    this.onicecandidate = null;
    this.onaddstream = null;
    this.ontrack = null;
    this.onremovestream = null;
    this.onsignalingstatechange = null;
    this.oniceconnectionstatechange = null;
    this.onicegatheringstatechange = null;
    this.onnegotiationneeded = null;
    this.ondatachannel = null;
    this.canTrickleIceCandidates = null;

    this.localStreams = [];
    this.remoteStreams = [];
    this.getLocalStreams = function() {
      return self.localStreams;
    };
    this.getRemoteStreams = function() {
      return self.remoteStreams;
    };

    this.localDescription = new window.RTCSessionDescription({
      type: '',
      sdp: ''
    });
    this.remoteDescription = new window.RTCSessionDescription({
      type: '',
      sdp: ''
    });
    this.signalingState = 'stable';
    this.iceConnectionState = 'new';
    this.iceGatheringState = 'new';

    this.iceOptions = {
      gatherPolicy: 'all',
      iceServers: []
    };
    if (config && config.iceTransportPolicy) {
      switch (config.iceTransportPolicy) {
        case 'all':
        case 'relay':
          this.iceOptions.gatherPolicy = config.iceTransportPolicy;
          break;
        default:
          // don't set iceTransportPolicy.
          break;
      }
    }
    this.usingBundle = config && config.bundlePolicy === 'max-bundle';

    if (config && config.iceServers) {
      this.iceOptions.iceServers = filterIceServers(config.iceServers,
          edgeVersion);
    }
    this._config = config || {};

    // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
    // everything that is needed to describe a SDP m-line.
    this.transceivers = [];

    // since the iceGatherer is currently created in createOffer but we
    // must not emit candidates until after setLocalDescription we buffer
    // them in this array.
    this._localIceCandidatesBuffer = [];

    this._sdpSessionId = SDPUtils.generateSessionId();
  };

  RTCPeerConnection.prototype._emitGatheringStateChange = function() {
    var event = new Event('icegatheringstatechange');
    this.dispatchEvent(event);
    if (this.onicegatheringstatechange !== null) {
      this.onicegatheringstatechange(event);
    }
  };

  RTCPeerConnection.prototype._emitBufferedCandidates = function() {
    var self = this;
    var sections = SDPUtils.splitSections(self.localDescription.sdp);
    // FIXME: need to apply ice candidates in a way which is async but
    // in-order
    this._localIceCandidatesBuffer.forEach(function(event) {
      var end = !event.candidate || Object.keys(event.candidate).length === 0;
      if (end) {
        for (var j = 1; j < sections.length; j++) {
          if (sections[j].indexOf('\r\na=end-of-candidates\r\n') === -1) {
            sections[j] += 'a=end-of-candidates\r\n';
          }
        }
      } else {
        sections[event.candidate.sdpMLineIndex + 1] +=
            'a=' + event.candidate.candidate + '\r\n';
      }
      self.localDescription.sdp = sections.join('');
      self.dispatchEvent(event);
      if (self.onicecandidate !== null) {
        self.onicecandidate(event);
      }
      if (!event.candidate && self.iceGatheringState !== 'complete') {
        var complete = self.transceivers.every(function(transceiver) {
          return transceiver.iceGatherer &&
              transceiver.iceGatherer.state === 'completed';
        });
        if (complete && self.iceGatheringStateChange !== 'complete') {
          self.iceGatheringState = 'complete';
          self._emitGatheringStateChange();
        }
      }
    });
    this._localIceCandidatesBuffer = [];
  };

  RTCPeerConnection.prototype.getConfiguration = function() {
    return this._config;
  };

  // internal helper to create a transceiver object.
  // (whih is not yet the same as the WebRTC 1.0 transceiver)
  RTCPeerConnection.prototype._createTransceiver = function(kind) {
    var hasBundleTransport = this.transceivers.length > 0;
    var transceiver = {
      track: null,
      iceGatherer: null,
      iceTransport: null,
      dtlsTransport: null,
      localCapabilities: null,
      remoteCapabilities: null,
      rtpSender: null,
      rtpReceiver: null,
      kind: kind,
      mid: null,
      sendEncodingParameters: null,
      recvEncodingParameters: null,
      stream: null,
      wantReceive: true
    };
    if (this.usingBundle && hasBundleTransport) {
      transceiver.iceTransport = this.transceivers[0].iceTransport;
      transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
    } else {
      var transports = this._createIceAndDtlsTransports();
      transceiver.iceTransport = transports.iceTransport;
      transceiver.dtlsTransport = transports.dtlsTransport;
    }
    this.transceivers.push(transceiver);
    return transceiver;
  };

  RTCPeerConnection.prototype.addTrack = function(track, stream) {
    var transceiver;
    for (var i = 0; i < this.transceivers.length; i++) {
      if (!this.transceivers[i].track &&
          this.transceivers[i].kind === track.kind) {
        transceiver = this.transceivers[i];
      }
    }
    if (!transceiver) {
      transceiver = this._createTransceiver(track.kind);
    }

    transceiver.track = track;
    transceiver.stream = stream;
    transceiver.rtpSender = new window.RTCRtpSender(track,
        transceiver.dtlsTransport);

    this._maybeFireNegotiationNeeded();
    return transceiver.rtpSender;
  };

  RTCPeerConnection.prototype.addStream = function(stream) {
    var self = this;
    if (edgeVersion >= 15025) {
      this.localStreams.push(stream);
      stream.getTracks().forEach(function(track) {
        self.addTrack(track, stream);
      });
    } else {
      // Clone is necessary for local demos mostly, attaching directly
      // to two different senders does not work (build 10547).
      // Fixed in 15025 (or earlier)
      var clonedStream = stream.clone();
      stream.getTracks().forEach(function(track, idx) {
        var clonedTrack = clonedStream.getTracks()[idx];
        track.addEventListener('enabled', function(event) {
          clonedTrack.enabled = event.enabled;
        });
      });
      clonedStream.getTracks().forEach(function(track) {
        self.addTrack(track, clonedStream);
      });
      this.localStreams.push(clonedStream);
    }
    this._maybeFireNegotiationNeeded();
  };

  RTCPeerConnection.prototype.removeStream = function(stream) {
    var idx = this.localStreams.indexOf(stream);
    if (idx > -1) {
      this.localStreams.splice(idx, 1);
      this._maybeFireNegotiationNeeded();
    }
  };

  RTCPeerConnection.prototype.getSenders = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpSender;
    })
    .map(function(transceiver) {
      return transceiver.rtpSender;
    });
  };

  RTCPeerConnection.prototype.getReceivers = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpReceiver;
    })
    .map(function(transceiver) {
      return transceiver.rtpReceiver;
    });
  };

  // Create ICE gatherer and hook it up.
  RTCPeerConnection.prototype._createIceGatherer = function(mid,
      sdpMLineIndex) {
    var self = this;
    var iceGatherer = new window.RTCIceGatherer(self.iceOptions);
    iceGatherer.onlocalcandidate = function(evt) {
      var event = new Event('icecandidate');
      event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};

      var cand = evt.candidate;
      var end = !cand || Object.keys(cand).length === 0;
      // Edge emits an empty object for RTCIceCandidateComplete‥
      if (end) {
        // polyfill since RTCIceGatherer.state is not implemented in
        // Edge 10547 yet.
        if (iceGatherer.state === undefined) {
          iceGatherer.state = 'completed';
        }
      } else {
        // RTCIceCandidate doesn't have a component, needs to be added
        cand.component = 1;
        event.candidate.candidate = SDPUtils.writeCandidate(cand);
      }

      // update local description.
      var sections = SDPUtils.splitSections(self.localDescription.sdp);
      if (!end) {
        sections[event.candidate.sdpMLineIndex + 1] +=
            'a=' + event.candidate.candidate + '\r\n';
      } else {
        sections[event.candidate.sdpMLineIndex + 1] +=
            'a=end-of-candidates\r\n';
      }
      self.localDescription.sdp = sections.join('');
      var transceivers = self._pendingOffer ? self._pendingOffer :
          self.transceivers;
      var complete = transceivers.every(function(transceiver) {
        return transceiver.iceGatherer &&
            transceiver.iceGatherer.state === 'completed';
      });

      // Emit candidate if localDescription is set.
      // Also emits null candidate when all gatherers are complete.
      switch (self.iceGatheringState) {
        case 'new':
          if (!end) {
            self._localIceCandidatesBuffer.push(event);
          }
          if (end && complete) {
            self._localIceCandidatesBuffer.push(
                new Event('icecandidate'));
          }
          break;
        case 'gathering':
          self._emitBufferedCandidates();
          if (!end) {
            self.dispatchEvent(event);
            if (self.onicecandidate !== null) {
              self.onicecandidate(event);
            }
          }
          if (complete) {
            self.dispatchEvent(new Event('icecandidate'));
            if (self.onicecandidate !== null) {
              self.onicecandidate(new Event('icecandidate'));
            }
            self.iceGatheringState = 'complete';
            self._emitGatheringStateChange();
          }
          break;
        case 'complete':
          // should not happen... currently!
          break;
        default: // no-op.
          break;
      }
    };
    return iceGatherer;
  };

  // Create ICE transport and DTLS transport.
  RTCPeerConnection.prototype._createIceAndDtlsTransports = function() {
    var self = this;
    var iceTransport = new window.RTCIceTransport(null);
    iceTransport.onicestatechange = function() {
      self._updateConnectionState();
    };

    var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
    dtlsTransport.ondtlsstatechange = function() {
      self._updateConnectionState();
    };
    dtlsTransport.onerror = function() {
      // onerror does not set state to failed by itself.
      Object.defineProperty(dtlsTransport, 'state',
          {value: 'failed', writable: true});
      self._updateConnectionState();
    };

    return {
      iceTransport: iceTransport,
      dtlsTransport: dtlsTransport
    };
  };

  // Destroy ICE gatherer, ICE transport and DTLS transport.
  // Without triggering the callbacks.
  RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function(
      sdpMLineIndex) {
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer) {
      delete iceGatherer.onlocalcandidate;
      delete this.transceivers[sdpMLineIndex].iceGatherer;
    }
    var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
    if (iceTransport) {
      delete iceTransport.onicestatechange;
      delete this.transceivers[sdpMLineIndex].iceTransport;
    }
    var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
    if (dtlsTransport) {
      delete dtlsTransport.ondtlsstatechange;
      delete dtlsTransport.onerror;
      delete this.transceivers[sdpMLineIndex].dtlsTransport;
    }
  };

  // Start the RTP Sender and Receiver for a transceiver.
  RTCPeerConnection.prototype._transceive = function(transceiver,
      send, recv) {
    var params = getCommonCapabilities(transceiver.localCapabilities,
        transceiver.remoteCapabilities);
    if (send && transceiver.rtpSender) {
      params.encodings = transceiver.sendEncodingParameters;
      params.rtcp = {
        cname: SDPUtils.localCName,
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.recvEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
      }
      transceiver.rtpSender.send(params);
    }
    if (recv && transceiver.rtpReceiver) {
      // remove RTX field in Edge 14942
      if (transceiver.kind === 'video'
          && transceiver.recvEncodingParameters
          && edgeVersion < 15019) {
        transceiver.recvEncodingParameters.forEach(function(p) {
          delete p.rtx;
        });
      }
      params.encodings = transceiver.recvEncodingParameters;
      params.rtcp = {
        cname: transceiver.rtcpParameters.cname,
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.sendEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
      }
      transceiver.rtpReceiver.receive(params);
    }
  };

  RTCPeerConnection.prototype.setLocalDescription = function(description) {
    var self = this;

    if (!isActionAllowedInSignalingState('setLocalDescription',
        description.type, this.signalingState)) {
      var e = new Error('Can not set local ' + description.type +
          ' in state ' + this.signalingState);
      e.name = 'InvalidStateError';
      if (arguments.length > 2 && typeof arguments[2] === 'function') {
        window.setTimeout(arguments[2], 0, e);
      }
      return Promise.reject(e);
    }

    var sections;
    var sessionpart;
    if (description.type === 'offer') {
      // FIXME: What was the purpose of this empty if statement?
      // if (!this._pendingOffer) {
      // } else {
      if (this._pendingOffer) {
        // VERY limited support for SDP munging. Limited to:
        // * changing the order of codecs
        sections = SDPUtils.splitSections(description.sdp);
        sessionpart = sections.shift();
        sections.forEach(function(mediaSection, sdpMLineIndex) {
          var caps = SDPUtils.parseRtpParameters(mediaSection);
          self._pendingOffer[sdpMLineIndex].localCapabilities = caps;
        });
        this.transceivers = this._pendingOffer;
        delete this._pendingOffer;
      }
    } else if (description.type === 'answer') {
      sections = SDPUtils.splitSections(self.remoteDescription.sdp);
      sessionpart = sections.shift();
      var isIceLite = SDPUtils.matchPrefix(sessionpart,
          'a=ice-lite').length > 0;
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var transceiver = self.transceivers[sdpMLineIndex];
        var iceGatherer = transceiver.iceGatherer;
        var iceTransport = transceiver.iceTransport;
        var dtlsTransport = transceiver.dtlsTransport;
        var localCapabilities = transceiver.localCapabilities;
        var remoteCapabilities = transceiver.remoteCapabilities;

        var rejected = SDPUtils.isRejected(mediaSection);

        if (!rejected && !transceiver.isDatachannel) {
          var remoteIceParameters = SDPUtils.getIceParameters(
              mediaSection, sessionpart);
          var remoteDtlsParameters = SDPUtils.getDtlsParameters(
              mediaSection, sessionpart);
          if (isIceLite) {
            remoteDtlsParameters.role = 'server';
          }

          if (!self.usingBundle || sdpMLineIndex === 0) {
            iceTransport.start(iceGatherer, remoteIceParameters,
                isIceLite ? 'controlling' : 'controlled');
            dtlsTransport.start(remoteDtlsParameters);
          }

          // Calculate intersection of capabilities.
          var params = getCommonCapabilities(localCapabilities,
              remoteCapabilities);

          // Start the RTCRtpSender. The RTCRtpReceiver for this
          // transceiver has already been started in setRemoteDescription.
          self._transceive(transceiver,
              params.codecs.length > 0,
              false);
        }
      });
    }

    this.localDescription = {
      type: description.type,
      sdp: description.sdp
    };
    switch (description.type) {
      case 'offer':
        this._updateSignalingState('have-local-offer');
        break;
      case 'answer':
        this._updateSignalingState('stable');
        break;
      default:
        throw new TypeError('unsupported type "' + description.type +
            '"');
    }

    // If a success callback was provided, emit ICE candidates after it
    // has been executed. Otherwise, emit callback after the Promise is
    // resolved.
    var hasCallback = arguments.length > 1 &&
      typeof arguments[1] === 'function';
    if (hasCallback) {
      var cb = arguments[1];
      window.setTimeout(function() {
        cb();
        if (self.iceGatheringState === 'new') {
          self.iceGatheringState = 'gathering';
          self._emitGatheringStateChange();
        }
        self._emitBufferedCandidates();
      }, 0);
    }
    var p = Promise.resolve();
    p.then(function() {
      if (!hasCallback) {
        if (self.iceGatheringState === 'new') {
          self.iceGatheringState = 'gathering';
          self._emitGatheringStateChange();
        }
        // Usually candidates will be emitted earlier.
        window.setTimeout(self._emitBufferedCandidates.bind(self), 500);
      }
    });
    return p;
  };

  RTCPeerConnection.prototype.setRemoteDescription = function(description) {
    var self = this;

    if (!isActionAllowedInSignalingState('setRemoteDescription',
        description.type, this.signalingState)) {
      var e = new Error('Can not set remote ' + description.type +
          ' in state ' + this.signalingState);
      e.name = 'InvalidStateError';
      if (arguments.length > 2 && typeof arguments[2] === 'function') {
        window.setTimeout(arguments[2], 0, e);
      }
      return Promise.reject(e);
    }

    var streams = {};
    var receiverList = [];
    var sections = SDPUtils.splitSections(description.sdp);
    var sessionpart = sections.shift();
    var isIceLite = SDPUtils.matchPrefix(sessionpart,
        'a=ice-lite').length > 0;
    var usingBundle = SDPUtils.matchPrefix(sessionpart,
        'a=group:BUNDLE ').length > 0;
    this.usingBundle = usingBundle;
    var iceOptions = SDPUtils.matchPrefix(sessionpart,
        'a=ice-options:')[0];
    if (iceOptions) {
      this.canTrickleIceCandidates = iceOptions.substr(14).split(' ')
          .indexOf('trickle') >= 0;
    } else {
      this.canTrickleIceCandidates = false;
    }

    sections.forEach(function(mediaSection, sdpMLineIndex) {
      var lines = SDPUtils.splitLines(mediaSection);
      var kind = SDPUtils.getKind(mediaSection);
      var rejected = SDPUtils.isRejected(mediaSection);
      var protocol = lines[0].substr(2).split(' ')[2];

      var direction = SDPUtils.getDirection(mediaSection, sessionpart);
      var remoteMsid = SDPUtils.parseMsid(mediaSection);

      var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();

      // Reject datachannels which are not implemented yet.
      if (kind === 'application' && protocol === 'DTLS/SCTP') {
        self.transceivers[sdpMLineIndex] = {
          mid: mid,
          isDatachannel: true
        };
        return;
      }

      var transceiver;
      var iceGatherer;
      var iceTransport;
      var dtlsTransport;
      var rtpReceiver;
      var sendEncodingParameters;
      var recvEncodingParameters;
      var localCapabilities;

      var track;
      // FIXME: ensure the mediaSection has rtcp-mux set.
      var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
      var remoteIceParameters;
      var remoteDtlsParameters;
      if (!rejected) {
        remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters.role = 'client';
      }
      recvEncodingParameters =
          SDPUtils.parseRtpEncodingParameters(mediaSection);

      var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);

      var isComplete = SDPUtils.matchPrefix(mediaSection,
          'a=end-of-candidates', sessionpart).length > 0;
      var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
          .map(function(cand) {
            return SDPUtils.parseCandidate(cand);
          })
          .filter(function(cand) {
            return cand.component === '1' || cand.component === 1;
          });

      // Check if we can use BUNDLE and dispose transports.
      if ((description.type === 'offer' || description.type === 'answer') &&
          !rejected && usingBundle && sdpMLineIndex > 0 &&
          self.transceivers[sdpMLineIndex]) {
        self._disposeIceAndDtlsTransports(sdpMLineIndex);
        self.transceivers[sdpMLineIndex].iceGatherer =
            self.transceivers[0].iceGatherer;
        self.transceivers[sdpMLineIndex].iceTransport =
            self.transceivers[0].iceTransport;
        self.transceivers[sdpMLineIndex].dtlsTransport =
            self.transceivers[0].dtlsTransport;
        if (self.transceivers[sdpMLineIndex].rtpSender) {
          self.transceivers[sdpMLineIndex].rtpSender.setTransport(
              self.transceivers[0].dtlsTransport);
        }
        if (self.transceivers[sdpMLineIndex].rtpReceiver) {
          self.transceivers[sdpMLineIndex].rtpReceiver.setTransport(
              self.transceivers[0].dtlsTransport);
        }
      }
      if (description.type === 'offer' && !rejected) {
        transceiver = self.transceivers[sdpMLineIndex] ||
            self._createTransceiver(kind);
        transceiver.mid = mid;

        if (!transceiver.iceGatherer) {
          transceiver.iceGatherer = usingBundle && sdpMLineIndex > 0 ?
              self.transceivers[0].iceGatherer :
              self._createIceGatherer(mid, sdpMLineIndex);
        }

        if (isComplete && cands.length &&
            (!usingBundle || sdpMLineIndex === 0)) {
          transceiver.iceTransport.setRemoteCandidates(cands);
        }

        localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);

        // filter RTX until additional stuff needed for RTX is implemented
        // in adapter.js
        if (edgeVersion < 15019) {
          localCapabilities.codecs = localCapabilities.codecs.filter(
              function(codec) {
                return codec.name !== 'rtx';
              });
        }

        sendEncodingParameters = [{
          ssrc: (2 * sdpMLineIndex + 2) * 1001
        }];

        if (direction === 'sendrecv' || direction === 'sendonly') {
          rtpReceiver = new window.RTCRtpReceiver(transceiver.dtlsTransport,
              kind);

          track = rtpReceiver.track;
          // FIXME: does not work with Plan B.
          if (remoteMsid) {
            if (!streams[remoteMsid.stream]) {
              streams[remoteMsid.stream] = new window.MediaStream();
              Object.defineProperty(streams[remoteMsid.stream], 'id', {
                get: function() {
                  return remoteMsid.stream;
                }
              });
            }
            Object.defineProperty(track, 'id', {
              get: function() {
                return remoteMsid.track;
              }
            });
            streams[remoteMsid.stream].addTrack(track);
            receiverList.push([track, rtpReceiver,
              streams[remoteMsid.stream]]);
          } else {
            if (!streams.default) {
              streams.default = new window.MediaStream();
            }
            streams.default.addTrack(track);
            receiverList.push([track, rtpReceiver, streams.default]);
          }
        }

        transceiver.localCapabilities = localCapabilities;
        transceiver.remoteCapabilities = remoteCapabilities;
        transceiver.rtpReceiver = rtpReceiver;
        transceiver.rtcpParameters = rtcpParameters;
        transceiver.sendEncodingParameters = sendEncodingParameters;
        transceiver.recvEncodingParameters = recvEncodingParameters;

        // Start the RTCRtpReceiver now. The RTPSender is started in
        // setLocalDescription.
        self._transceive(self.transceivers[sdpMLineIndex],
            false,
            direction === 'sendrecv' || direction === 'sendonly');
      } else if (description.type === 'answer' && !rejected) {
        transceiver = self.transceivers[sdpMLineIndex];
        iceGatherer = transceiver.iceGatherer;
        iceTransport = transceiver.iceTransport;
        dtlsTransport = transceiver.dtlsTransport;
        rtpReceiver = transceiver.rtpReceiver;
        sendEncodingParameters = transceiver.sendEncodingParameters;
        localCapabilities = transceiver.localCapabilities;

        self.transceivers[sdpMLineIndex].recvEncodingParameters =
            recvEncodingParameters;
        self.transceivers[sdpMLineIndex].remoteCapabilities =
            remoteCapabilities;
        self.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

        if (!usingBundle || sdpMLineIndex === 0) {
          if ((isIceLite || isComplete) && cands.length) {
            iceTransport.setRemoteCandidates(cands);
          }
          iceTransport.start(iceGatherer, remoteIceParameters,
              'controlling');
          dtlsTransport.start(remoteDtlsParameters);
        }

        self._transceive(transceiver,
            direction === 'sendrecv' || direction === 'recvonly',
            direction === 'sendrecv' || direction === 'sendonly');

        if (rtpReceiver &&
            (direction === 'sendrecv' || direction === 'sendonly')) {
          track = rtpReceiver.track;
          if (remoteMsid) {
            if (!streams[remoteMsid.stream]) {
              streams[remoteMsid.stream] = new window.MediaStream();
            }
            streams[remoteMsid.stream].addTrack(track);
            receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
          } else {
            if (!streams.default) {
              streams.default = new window.MediaStream();
            }
            streams.default.addTrack(track);
            receiverList.push([track, rtpReceiver, streams.default]);
          }
        } else {
          // FIXME: actually the receiver should be created later.
          delete transceiver.rtpReceiver;
        }
      }
    });

    this.remoteDescription = {
      type: description.type,
      sdp: description.sdp
    };
    switch (description.type) {
      case 'offer':
        this._updateSignalingState('have-remote-offer');
        break;
      case 'answer':
        this._updateSignalingState('stable');
        break;
      default:
        throw new TypeError('unsupported type "' + description.type +
            '"');
    }
    Object.keys(streams).forEach(function(sid) {
      var stream = streams[sid];
      if (stream.getTracks().length) {
        self.remoteStreams.push(stream);
        var event = new Event('addstream');
        event.stream = stream;
        self.dispatchEvent(event);
        if (self.onaddstream !== null) {
          window.setTimeout(function() {
            self.onaddstream(event);
          }, 0);
        }

        receiverList.forEach(function(item) {
          var track = item[0];
          var receiver = item[1];
          if (stream.id !== item[2].id) {
            return;
          }
          var trackEvent = new Event('track');
          trackEvent.track = track;
          trackEvent.receiver = receiver;
          trackEvent.streams = [stream];
          self.dispatchEvent(trackEvent);
          if (self.ontrack !== null) {
            window.setTimeout(function() {
              self.ontrack(trackEvent);
            }, 0);
          }
        });
      }
    });

    // check whether addIceCandidate({}) was called within four seconds after
    // setRemoteDescription.
    window.setTimeout(function() {
      if (!(self && self.transceivers)) {
        return;
      }
      self.transceivers.forEach(function(transceiver) {
        if (transceiver.iceTransport &&
            transceiver.iceTransport.state === 'new' &&
            transceiver.iceTransport.getRemoteCandidates().length > 0) {
          console.warn('Timeout for addRemoteCandidate. Consider sending ' +
              'an end-of-candidates notification');
          transceiver.iceTransport.addRemoteCandidate({});
        }
      });
    }, 4000);

    if (arguments.length > 1 && typeof arguments[1] === 'function') {
      window.setTimeout(arguments[1], 0);
    }
    return Promise.resolve();
  };

  RTCPeerConnection.prototype.close = function() {
    this.transceivers.forEach(function(transceiver) {
      /* not yet
      if (transceiver.iceGatherer) {
        transceiver.iceGatherer.close();
      }
      */
      if (transceiver.iceTransport) {
        transceiver.iceTransport.stop();
      }
      if (transceiver.dtlsTransport) {
        transceiver.dtlsTransport.stop();
      }
      if (transceiver.rtpSender) {
        transceiver.rtpSender.stop();
      }
      if (transceiver.rtpReceiver) {
        transceiver.rtpReceiver.stop();
      }
    });
    // FIXME: clean up tracks, local streams, remote streams, etc
    this._updateSignalingState('closed');
  };

  // Update the signaling state.
  RTCPeerConnection.prototype._updateSignalingState = function(newState) {
    this.signalingState = newState;
    var event = new Event('signalingstatechange');
    this.dispatchEvent(event);
    if (this.onsignalingstatechange !== null) {
      this.onsignalingstatechange(event);
    }
  };

  // Determine whether to fire the negotiationneeded event.
  RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function() {
    var self = this;
    if (this.signalingState !== 'stable' || this.needNegotiation === true) {
      return;
    }
    this.needNegotiation = true;
    window.setTimeout(function() {
      if (self.needNegotiation === false) {
        return;
      }
      self.needNegotiation = false;
      var event = new Event('negotiationneeded');
      self.dispatchEvent(event);
      if (self.onnegotiationneeded !== null) {
        self.onnegotiationneeded(event);
      }
    }, 0);
  };

  // Update the connection state.
  RTCPeerConnection.prototype._updateConnectionState = function() {
    var self = this;
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      connecting: 0,
      checking: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function(transceiver) {
      states[transceiver.iceTransport.state]++;
      states[transceiver.dtlsTransport.state]++;
    });
    // ICETransport.completed and connected are the same for this purpose.
    states.connected += states.completed;

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.connecting > 0 || states.checking > 0) {
      newState = 'connecting';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0 || states.completed > 0) {
      newState = 'connected';
    }

    if (newState !== self.iceConnectionState) {
      self.iceConnectionState = newState;
      var event = new Event('iceconnectionstatechange');
      this.dispatchEvent(event);
      if (this.oniceconnectionstatechange !== null) {
        this.oniceconnectionstatechange(event);
      }
    }
  };

  RTCPeerConnection.prototype.createOffer = function() {
    var self = this;
    if (this._pendingOffer) {
      throw new Error('createOffer called while there is a pending offer.');
    }
    var offerOptions;
    if (arguments.length === 1 && typeof arguments[0] !== 'function') {
      offerOptions = arguments[0];
    } else if (arguments.length === 3) {
      offerOptions = arguments[2];
    }

    var numAudioTracks = this.transceivers.filter(function(t) {
      return t.kind === 'audio';
    }).length;
    var numVideoTracks = this.transceivers.filter(function(t) {
      return t.kind === 'video';
    }).length;

    // Determine number of audio and video tracks we need to send/recv.
    if (offerOptions) {
      // Reject Chrome legacy constraints.
      if (offerOptions.mandatory || offerOptions.optional) {
        throw new TypeError(
            'Legacy mandatory/optional constraints not supported.');
      }
      if (offerOptions.offerToReceiveAudio !== undefined) {
        if (offerOptions.offerToReceiveAudio === true) {
          numAudioTracks = 1;
        } else if (offerOptions.offerToReceiveAudio === false) {
          numAudioTracks = 0;
        } else {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
      }
      if (offerOptions.offerToReceiveVideo !== undefined) {
        if (offerOptions.offerToReceiveVideo === true) {
          numVideoTracks = 1;
        } else if (offerOptions.offerToReceiveVideo === false) {
          numVideoTracks = 0;
        } else {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
    }

    this.transceivers.forEach(function(transceiver) {
      if (transceiver.kind === 'audio') {
        numAudioTracks--;
        if (numAudioTracks < 0) {
          transceiver.wantReceive = false;
        }
      } else if (transceiver.kind === 'video') {
        numVideoTracks--;
        if (numVideoTracks < 0) {
          transceiver.wantReceive = false;
        }
      }
    });

    // Create M-lines for recvonly streams.
    while (numAudioTracks > 0 || numVideoTracks > 0) {
      if (numAudioTracks > 0) {
        this._createTransceiver('audio');
        numAudioTracks--;
      }
      if (numVideoTracks > 0) {
        this._createTransceiver('video');
        numVideoTracks--;
      }
    }
    // reorder tracks
    var transceivers = sortTracks(this.transceivers);

    var sdp = SDPUtils.writeSessionBoilerplate(this._sdpSessionId);
    transceivers.forEach(function(transceiver, sdpMLineIndex) {
      // For each track, create an ice gatherer, ice transport,
      // dtls transport, potentially rtpsender and rtpreceiver.
      var track = transceiver.track;
      var kind = transceiver.kind;
      var mid = SDPUtils.generateIdentifier();
      transceiver.mid = mid;

      if (!transceiver.iceGatherer) {
        transceiver.iceGatherer = self.usingBundle && sdpMLineIndex > 0 ?
            transceivers[0].iceGatherer :
            self._createIceGatherer(mid, sdpMLineIndex);
      }

      var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
      // filter RTX until additional stuff needed for RTX is implemented
      // in adapter.js
      if (edgeVersion < 15019) {
        localCapabilities.codecs = localCapabilities.codecs.filter(
            function(codec) {
              return codec.name !== 'rtx';
            });
      }
      localCapabilities.codecs.forEach(function(codec) {
        // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
        // by adding level-asymmetry-allowed=1
        if (codec.name === 'H264' &&
            codec.parameters['level-asymmetry-allowed'] === undefined) {
          codec.parameters['level-asymmetry-allowed'] = '1';
        }
      });

      // generate an ssrc now, to be used later in rtpSender.send
      var sendEncodingParameters = [{
        ssrc: (2 * sdpMLineIndex + 1) * 1001
      }];
      if (track) {
        // add RTX
        if (edgeVersion >= 15019 && kind === 'video') {
          sendEncodingParameters[0].rtx = {
            ssrc: (2 * sdpMLineIndex + 1) * 1001 + 1
          };
        }
      }

      if (transceiver.wantReceive) {
        transceiver.rtpReceiver = new window.RTCRtpReceiver(
          transceiver.dtlsTransport,
          kind
        );
      }

      transceiver.localCapabilities = localCapabilities;
      transceiver.sendEncodingParameters = sendEncodingParameters;
    });

    // always offer BUNDLE and dispose on return if not supported.
    if (this._config.bundlePolicy !== 'max-compat') {
      sdp += 'a=group:BUNDLE ' + transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    sdp += 'a=ice-options:trickle\r\n';

    transceivers.forEach(function(transceiver, sdpMLineIndex) {
      sdp += SDPUtils.writeMediaSection(transceiver,
          transceiver.localCapabilities, 'offer', transceiver.stream);
      sdp += 'a=rtcp-rsize\r\n';
    });

    this._pendingOffer = transceivers;
    var desc = new window.RTCSessionDescription({
      type: 'offer',
      sdp: sdp
    });
    if (arguments.length && typeof arguments[0] === 'function') {
      window.setTimeout(arguments[0], 0, desc);
    }
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.createAnswer = function() {
    var sdp = SDPUtils.writeSessionBoilerplate(this._sdpSessionId);
    if (this.usingBundle) {
      sdp += 'a=group:BUNDLE ' + this.transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    this.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      if (transceiver.isDatachannel) {
        sdp += 'm=application 0 DTLS/SCTP 5000\r\n' +
            'c=IN IP4 0.0.0.0\r\n' +
            'a=mid:' + transceiver.mid + '\r\n';
        return;
      }

      // FIXME: look at direction.
      if (transceiver.stream) {
        var localTrack;
        if (transceiver.kind === 'audio') {
          localTrack = transceiver.stream.getAudioTracks()[0];
        } else if (transceiver.kind === 'video') {
          localTrack = transceiver.stream.getVideoTracks()[0];
        }
        if (localTrack) {
          // add RTX
          if (edgeVersion >= 15019 && transceiver.kind === 'video') {
            transceiver.sendEncodingParameters[0].rtx = {
              ssrc: (2 * sdpMLineIndex + 2) * 1001 + 1
            };
          }
        }
      }

      // Calculate intersection of capabilities.
      var commonCapabilities = getCommonCapabilities(
          transceiver.localCapabilities,
          transceiver.remoteCapabilities);

      var hasRtx = commonCapabilities.codecs.filter(function(c) {
        return c.name.toLowerCase() === 'rtx';
      }).length;
      if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
        delete transceiver.sendEncodingParameters[0].rtx;
      }

      sdp += SDPUtils.writeMediaSection(transceiver, commonCapabilities,
          'answer', transceiver.stream);
      if (transceiver.rtcpParameters &&
          transceiver.rtcpParameters.reducedSize) {
        sdp += 'a=rtcp-rsize\r\n';
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'answer',
      sdp: sdp
    });
    if (arguments.length && typeof arguments[0] === 'function') {
      window.setTimeout(arguments[0], 0, desc);
    }
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
    if (!candidate) {
      for (var j = 0; j < this.transceivers.length; j++) {
        this.transceivers[j].iceTransport.addRemoteCandidate({});
        if (this.usingBundle) {
          return Promise.resolve();
        }
      }
    } else {
      var mLineIndex = candidate.sdpMLineIndex;
      if (candidate.sdpMid) {
        for (var i = 0; i < this.transceivers.length; i++) {
          if (this.transceivers[i].mid === candidate.sdpMid) {
            mLineIndex = i;
            break;
          }
        }
      }
      var transceiver = this.transceivers[mLineIndex];
      if (transceiver) {
        var cand = Object.keys(candidate.candidate).length > 0 ?
            SDPUtils.parseCandidate(candidate.candidate) : {};
        // Ignore Chrome's invalid candidates since Edge does not like them.
        if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
          return Promise.resolve();
        }
        // Ignore RTCP candidates, we assume RTCP-MUX.
        if (cand.component &&
            !(cand.component === '1' || cand.component === 1)) {
          return Promise.resolve();
        }
        transceiver.iceTransport.addRemoteCandidate(cand);

        // update the remoteDescription.
        var sections = SDPUtils.splitSections(this.remoteDescription.sdp);
        sections[mLineIndex + 1] += (cand.type ? candidate.candidate.trim()
            : 'a=end-of-candidates') + '\r\n';
        this.remoteDescription.sdp = sections.join('');
      }
    }
    if (arguments.length > 1 && typeof arguments[1] === 'function') {
      window.setTimeout(arguments[1], 0);
    }
    return Promise.resolve();
  };

  RTCPeerConnection.prototype.getStats = function() {
    var promises = [];
    this.transceivers.forEach(function(transceiver) {
      ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
        'dtlsTransport'].forEach(function(method) {
          if (transceiver[method]) {
            promises.push(transceiver[method].getStats());
          }
        });
    });
    var cb = arguments.length > 1 && typeof arguments[1] === 'function' &&
        arguments[1];
    var fixStatsType = function(stat) {
      return {
        inboundrtp: 'inbound-rtp',
        outboundrtp: 'outbound-rtp',
        candidatepair: 'candidate-pair',
        localcandidate: 'local-candidate',
        remotecandidate: 'remote-candidate'
      }[stat.type] || stat.type;
    };
    return new Promise(function(resolve) {
      // shim getStats with maplike support
      var results = new Map();
      Promise.all(promises).then(function(res) {
        res.forEach(function(result) {
          Object.keys(result).forEach(function(id) {
            result[id].type = fixStatsType(result[id]);
            results.set(id, result[id]);
          });
        });
        if (cb) {
          window.setTimeout(cb, 0, results);
        }
        resolve(results);
      });
    });
  };
  return RTCPeerConnection;
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


var utils = __webpack_require__(19);

var firefoxShim = {
  shimOnTrack: function(window) {
    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
        window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
        get: function() {
          return this._ontrack;
        },
        set: function(f) {
          if (this._ontrack) {
            this.removeEventListener('track', this._ontrack);
            this.removeEventListener('addstream', this._ontrackpoly);
          }
          this.addEventListener('track', this._ontrack = f);
          this.addEventListener('addstream', this._ontrackpoly = function(e) {
            e.stream.getTracks().forEach(function(track) {
              var event = new Event('track');
              event.track = track;
              event.receiver = {track: track};
              event.streams = [e.stream];
              this.dispatchEvent(event);
            }.bind(this));
          }.bind(this));
        }
      });
    }
  },

  shimSourceObject: function(window) {
    // Firefox has supported mozSrcObject since FF22, unprefixed in 42.
    if (typeof window === 'object') {
      if (window.HTMLMediaElement &&
        !('srcObject' in window.HTMLMediaElement.prototype)) {
        // Shim the srcObject property, once, when HTMLMediaElement is found.
        Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
          get: function() {
            return this.mozSrcObject;
          },
          set: function(stream) {
            this.mozSrcObject = stream;
          }
        });
      }
    }
  },

  shimPeerConnection: function(window) {
    var browserDetails = utils.detectBrowser(window);

    if (typeof window !== 'object' || !(window.RTCPeerConnection ||
        window.mozRTCPeerConnection)) {
      return; // probably media.peerconnection.enabled=false in about:config
    }
    // The RTCPeerConnection object.
    if (!window.RTCPeerConnection) {
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        if (browserDetails.version < 38) {
          // .urls is not supported in FF < 38.
          // create RTCIceServers with a single url.
          if (pcConfig && pcConfig.iceServers) {
            var newIceServers = [];
            for (var i = 0; i < pcConfig.iceServers.length; i++) {
              var server = pcConfig.iceServers[i];
              if (server.hasOwnProperty('urls')) {
                for (var j = 0; j < server.urls.length; j++) {
                  var newServer = {
                    url: server.urls[j]
                  };
                  if (server.urls[j].indexOf('turn') === 0) {
                    newServer.username = server.username;
                    newServer.credential = server.credential;
                  }
                  newIceServers.push(newServer);
                }
              } else {
                newIceServers.push(pcConfig.iceServers[i]);
              }
            }
            pcConfig.iceServers = newIceServers;
          }
        }
        return new window.mozRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype =
          window.mozRTCPeerConnection.prototype;

      // wrap static methods. Currently just generateCertificate.
      if (window.mozRTCPeerConnection.generateCertificate) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
          get: function() {
            return window.mozRTCPeerConnection.generateCertificate;
          }
        });
      }

      window.RTCSessionDescription = window.mozRTCSessionDescription;
      window.RTCIceCandidate = window.mozRTCIceCandidate;
    }

    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          var nativeMethod = window.RTCPeerConnection.prototype[method];
          window.RTCPeerConnection.prototype[method] = function() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                window.RTCIceCandidate :
                window.RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          };
        });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate =
        window.RTCPeerConnection.prototype.addIceCandidate;
    window.RTCPeerConnection.prototype.addIceCandidate = function() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };

    // shim getStats with maplike support
    var makeMapStats = function(stats) {
      var map = new Map();
      Object.keys(stats).forEach(function(key) {
        map.set(key, stats[key]);
        map[key] = stats[key];
      });
      return map;
    };

    var modernStatsTypes = {
      inboundrtp: 'inbound-rtp',
      outboundrtp: 'outbound-rtp',
      candidatepair: 'candidate-pair',
      localcandidate: 'local-candidate',
      remotecandidate: 'remote-candidate'
    };

    var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function(
      selector,
      onSucc,
      onErr
    ) {
      return nativeGetStats.apply(this, [selector || null])
        .then(function(stats) {
          if (browserDetails.version < 48) {
            stats = makeMapStats(stats);
          }
          if (browserDetails.version < 53 && !onSucc) {
            // Shim only promise getStats with spec-hyphens in type names
            // Leave callback version alone; misc old uses of forEach before Map
            try {
              stats.forEach(function(stat) {
                stat.type = modernStatsTypes[stat.type] || stat.type;
              });
            } catch (e) {
              if (e.name !== 'TypeError') {
                throw e;
              }
              // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
              stats.forEach(function(stat, i) {
                stats.set(i, Object.assign({}, stat, {
                  type: modernStatsTypes[stat.type] || stat.type
                }));
              });
            }
          }
          return stats;
        })
        .then(onSucc, onErr);
    };
  }
};

// Expose public methods.
module.exports = {
  shimOnTrack: firefoxShim.shimOnTrack,
  shimSourceObject: firefoxShim.shimSourceObject,
  shimPeerConnection: firefoxShim.shimPeerConnection,
  shimGetUserMedia: __webpack_require__(178)
};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


var utils = __webpack_require__(19);
var logging = utils.log;

// Expose public methods.
module.exports = function(window) {
  var browserDetails = utils.detectBrowser(window);
  var navigator = window && window.navigator;
  var MediaStreamTrack = window && window.MediaStreamTrack;

  var shimError_ = function(e) {
    return {
      name: {
        InternalError: 'NotReadableError',
        NotSupportedError: 'TypeError',
        PermissionDeniedError: 'NotAllowedError',
        SecurityError: 'NotAllowedError'
      }[e.name] || e.name,
      message: {
        'The operation is insecure.': 'The request is not allowed by the ' +
        'user agent or the platform in the current context.'
      }[e.message] || e.message,
      constraint: e.constraint,
      toString: function() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  // getUserMedia constraints shim.
  var getUserMedia_ = function(constraints, onSuccess, onError) {
    var constraintsToFF37_ = function(c) {
      if (typeof c !== 'object' || c.require) {
        return c;
      }
      var require = [];
      Object.keys(c).forEach(function(key) {
        if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
          return;
        }
        var r = c[key] = (typeof c[key] === 'object') ?
            c[key] : {ideal: c[key]};
        if (r.min !== undefined ||
            r.max !== undefined || r.exact !== undefined) {
          require.push(key);
        }
        if (r.exact !== undefined) {
          if (typeof r.exact === 'number') {
            r. min = r.max = r.exact;
          } else {
            c[key] = r.exact;
          }
          delete r.exact;
        }
        if (r.ideal !== undefined) {
          c.advanced = c.advanced || [];
          var oc = {};
          if (typeof r.ideal === 'number') {
            oc[key] = {min: r.ideal, max: r.ideal};
          } else {
            oc[key] = r.ideal;
          }
          c.advanced.push(oc);
          delete r.ideal;
          if (!Object.keys(r).length) {
            delete c[key];
          }
        }
      });
      if (require.length) {
        c.require = require;
      }
      return c;
    };
    constraints = JSON.parse(JSON.stringify(constraints));
    if (browserDetails.version < 38) {
      logging('spec: ' + JSON.stringify(constraints));
      if (constraints.audio) {
        constraints.audio = constraintsToFF37_(constraints.audio);
      }
      if (constraints.video) {
        constraints.video = constraintsToFF37_(constraints.video);
      }
      logging('ff37: ' + JSON.stringify(constraints));
    }
    return navigator.mozGetUserMedia(constraints, onSuccess, function(e) {
      onError(shimError_(e));
    });
  };

  // Returns the result of getUserMedia as a Promise.
  var getUserMediaPromise_ = function(constraints) {
    return new Promise(function(resolve, reject) {
      getUserMedia_(constraints, resolve, reject);
    });
  };

  // Shim for mediaDevices on older versions.
  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {getUserMedia: getUserMediaPromise_,
      addEventListener: function() { },
      removeEventListener: function() { }
    };
  }
  navigator.mediaDevices.enumerateDevices =
      navigator.mediaDevices.enumerateDevices || function() {
        return new Promise(function(resolve) {
          var infos = [
            {kind: 'audioinput', deviceId: 'default', label: '', groupId: ''},
            {kind: 'videoinput', deviceId: 'default', label: '', groupId: ''}
          ];
          resolve(infos);
        });
      };

  if (browserDetails.version < 41) {
    // Work around http://bugzil.la/1169665
    var orgEnumerateDevices =
        navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
    navigator.mediaDevices.enumerateDevices = function() {
      return orgEnumerateDevices().then(undefined, function(e) {
        if (e.name === 'NotFoundError') {
          return [];
        }
        throw e;
      });
    };
  }
  if (browserDetails.version < 49) {
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      return origGetUserMedia(c).then(function(stream) {
        // Work around https://bugzil.la/802326
        if (c.audio && !stream.getAudioTracks().length ||
            c.video && !stream.getVideoTracks().length) {
          stream.getTracks().forEach(function(track) {
            track.stop();
          });
          throw new DOMException('The object can not be found here.',
                                 'NotFoundError');
        }
        return stream;
      }, function(e) {
        return Promise.reject(shimError_(e));
      });
    };
  }
  if (!(browserDetails.version > 55 &&
      'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    var remap = function(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      if (typeof c === 'object' && typeof c.audio === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }
      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function() {
        var obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function(c) {
        if (this.kind === 'audio' && typeof c === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
  navigator.getUserMedia = function(constraints, onSuccess, onError) {
    if (browserDetails.version < 44) {
      return getUserMedia_(constraints, onSuccess, onError);
    }
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    utils.deprecated('navigator.getUserMedia',
        'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };
};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

var utils = __webpack_require__(19);

var safariShim = {
  // TODO: DrAlex, should be here, double check against LayoutTests

  // TODO: once the back-end for the mac port is done, add.
  // TODO: check for webkitGTK+
  // shimPeerConnection: function() { },

  shimLocalStreamsAPI: function(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.getLocalStreams = function() {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        return this._localStreams;
      };
    }
    if (!('getStreamById' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.getStreamById = function(id) {
        var result = null;
        if (this._localStreams) {
          this._localStreams.forEach(function(stream) {
            if (stream.id === id) {
              result = stream;
            }
          });
        }
        if (this._remoteStreams) {
          this._remoteStreams.forEach(function(stream) {
            if (stream.id === id) {
              result = stream;
            }
          });
        }
        return result;
      };
    }
    if (!('addStream' in window.RTCPeerConnection.prototype)) {
      var _addTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addStream = function(stream) {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        if (this._localStreams.indexOf(stream) === -1) {
          this._localStreams.push(stream);
        }
        var self = this;
        stream.getTracks().forEach(function(track) {
          _addTrack.call(self, track, stream);
        });
      };

      window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
        if (stream) {
          if (!this._localStreams) {
            this._localStreams = [stream];
          } else if (this._localStreams.indexOf(stream) === -1) {
            this._localStreams.push(stream);
          }
        }
        _addTrack.call(this, track, stream);
      };
    }
    if (!('removeStream' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.removeStream = function(stream) {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        var index = this._localStreams.indexOf(stream);
        if (index === -1) {
          return;
        }
        this._localStreams.splice(index, 1);
        var self = this;
        var tracks = stream.getTracks();
        this.getSenders().forEach(function(sender) {
          if (tracks.indexOf(sender.track) !== -1) {
            self.removeTrack(sender);
          }
        });
      };
    }
  },
  shimRemoteStreamsAPI: function(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.getRemoteStreams = function() {
        return this._remoteStreams ? this._remoteStreams : [];
      };
    }
    if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
        get: function() {
          return this._onaddstream;
        },
        set: function(f) {
          if (this._onaddstream) {
            this.removeEventListener('addstream', this._onaddstream);
            this.removeEventListener('track', this._onaddstreampoly);
          }
          this.addEventListener('addstream', this._onaddstream = f);
          this.addEventListener('track', this._onaddstreampoly = function(e) {
            var stream = e.streams[0];
            if (!this._remoteStreams) {
              this._remoteStreams = [];
            }
            if (this._remoteStreams.indexOf(stream) >= 0) {
              return;
            }
            this._remoteStreams.push(stream);
            var event = new Event('addstream');
            event.stream = e.streams[0];
            this.dispatchEvent(event);
          }.bind(this));
        }
      });
    }
  },
  shimCallbacksAPI: function(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    var prototype = window.RTCPeerConnection.prototype;
    var createOffer = prototype.createOffer;
    var createAnswer = prototype.createAnswer;
    var setLocalDescription = prototype.setLocalDescription;
    var setRemoteDescription = prototype.setRemoteDescription;
    var addIceCandidate = prototype.addIceCandidate;

    prototype.createOffer = function(successCallback, failureCallback) {
      var options = (arguments.length >= 2) ? arguments[2] : arguments[0];
      var promise = createOffer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

    prototype.createAnswer = function(successCallback, failureCallback) {
      var options = (arguments.length >= 2) ? arguments[2] : arguments[0];
      var promise = createAnswer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

    var withCallback = function(description, successCallback, failureCallback) {
      var promise = setLocalDescription.apply(this, [description]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.setLocalDescription = withCallback;

    withCallback = function(description, successCallback, failureCallback) {
      var promise = setRemoteDescription.apply(this, [description]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.setRemoteDescription = withCallback;

    withCallback = function(candidate, successCallback, failureCallback) {
      var promise = addIceCandidate.apply(this, [candidate]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.addIceCandidate = withCallback;
  },
  shimGetUserMedia: function(window) {
    var navigator = window && window.navigator;

    if (!navigator.getUserMedia) {
      if (navigator.webkitGetUserMedia) {
        navigator.getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
      } else if (navigator.mediaDevices &&
          navigator.mediaDevices.getUserMedia) {
        navigator.getUserMedia = function(constraints, cb, errcb) {
          navigator.mediaDevices.getUserMedia(constraints)
          .then(cb, errcb);
        }.bind(navigator);
      }
    }
  },
  shimRTCIceServerUrls: function(window) {
    // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
    var OrigPeerConnection = window.RTCPeerConnection;
    window.RTCPeerConnection = function(pcConfig, pcConstraints) {
      if (pcConfig && pcConfig.iceServers) {
        var newIceServers = [];
        for (var i = 0; i < pcConfig.iceServers.length; i++) {
          var server = pcConfig.iceServers[i];
          if (!server.hasOwnProperty('urls') &&
              server.hasOwnProperty('url')) {
            utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
            server = JSON.parse(JSON.stringify(server));
            server.urls = server.url;
            delete server.url;
            newIceServers.push(server);
          } else {
            newIceServers.push(pcConfig.iceServers[i]);
          }
        }
        pcConfig.iceServers = newIceServers;
      }
      return new OrigPeerConnection(pcConfig, pcConstraints);
    };
    window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
    // wrap static methods. Currently just generateCertificate.
    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
      get: function() {
        return OrigPeerConnection.generateCertificate;
      }
    });
  }
};

// Expose public methods.
module.exports = {
  shimCallbacksAPI: safariShim.shimCallbacksAPI,
  shimLocalStreamsAPI: safariShim.shimLocalStreamsAPI,
  shimRemoteStreamsAPI: safariShim.shimRemoteStreamsAPI,
  shimGetUserMedia: safariShim.shimGetUserMedia,
  shimRTCIceServerUrls: safariShim.shimRTCIceServerUrls
  // TODO
  // shimPeerConnection: safariShim.shimPeerConnection
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5YTQ5M2M1ZGNkMzIxNGI3OTQ2NiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdXRpbC9Mb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdXRpbC9jYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91dGlsL0RhdGFTeW5jLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3V0aWwvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9Sb29tLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3V0aWwvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlZmluaXRpb25zL0V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiV2ViY29tXCIsXCJjb21tb25qc1wiOlwid2ViY29tL3dlYmNvbVwiLFwiY29tbW9uanMyXCI6XCJ3ZWJjb20vd2ViY29tXCIsXCJhbWRcIjpcIndlYmNvbS93ZWJjb21cIn0iLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0ludml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVmaW5pdGlvbnMvU3RyZWFtVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlYWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0RldmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9NZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1BhcnRpY2lwYW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0cmVhbS9SZW1vdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9kZWZpbml0aW9ucy9Ccm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kZWZpbml0aW9ucy9Db2RlYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9Db25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc3RyZWFtL0xvY2FsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0cmVhbS9TdHJlYW1NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3dlYnJ0Yy9QZWVyQ29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS93ZWJydGMvUGVlckNvbm5lY3Rpb25NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9mbi9hcnJheS9maW5kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3NkcC9zZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvYWRhcHRlcl9jb3JlLmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2FkYXB0ZXJfZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9jaHJvbWUvY2hyb21lX3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvY2hyb21lL2dldHVzZXJtZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9lZGdlL2VkZ2Vfc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9lZGdlL2dldHVzZXJtZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9lZGdlL3J0Y3BlZXJjb25uZWN0aW9uX3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvZmlyZWZveC9maXJlZm94X3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvZmlyZWZveC9nZXR1c2VybWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvc2FmYXJpL3NhZmFyaV9zaGltLmpzIl0sIm5hbWVzIjpbImxldmVscyIsImlzRW5hYmxlZCIsImluZGV4T2YiLCJsZXZlbCIsInRvVXBwZXJDYXNlIiwibG9nTGV2ZWwiLCJnQ29uc29sZSIsImdsb2JhbCIsImxvZ2dlciIsIm1ldGhvZCIsIm1lc3NhZ2VzIiwidG9Mb3dlckNhc2UiLCJiaW5kIiwiZ3JvdXAiLCJtZXNzYWdlIiwiaXRlbXMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ2YWx1ZXMiLCJjb25jYXQiLCJBcnJheSIsImZvckVhY2giLCJpdGVtIiwiZ3JvdXBFbmQiLCJkIiwiaSIsInciLCJlIiwiZXJyb3IiLCJyIiwicmVhc29uIiwicmVqZWN0IiwiX2NhY2hlIiwiQ2FjaGVNYW5hZ2VyIiwidXJsIiwiX2Jhc2UiLCJjb25maWciLCJfY29uZmlnIiwiYXNzaWduIiwidXNlciIsIl91c2VyIiwiZGV2aWNlIiwiX2RldmljZSIsInRlc3QiLCJfbG9nTGV2ZWwiLCJFcnJvciIsIl9zdHJlYW1zIiwiX3BlZXJDb25uZWN0aW9ucyIsImNhY2hlIiwiZXZlbnRUeXBlIiwiZXZlbnQiLCJldnQiLCJfd3JpdGUiLCJwYXRoIiwiZGF0YSIsInJlc29sdmUiLCJiYXNlIiwiY2hpbGQiLCJzZXQiLCJwdXNoIiwicHVzaFJlZiIsInVwZGF0ZSIsInJlbW92ZSIsIm9uY2UiLCJnZXQiLCJsaXN0IiwiVHlwZSIsInBhcmFtcyIsInRoZW4iLCJzbmFwRGF0YSIsInNuYXBDaGlsZCIsIm9uIiwicXVlcnlDYWxsYmFjayIsImNhbmNlbENhbGxiYWNrIiwib2ZmIiwiY2FsbGJhY2siLCJvbkRpc2Nvbm5lY3QiLCJ0cyIsIkRhdGUiLCJub3ciLCJPUEVORUQiLCJDTE9TRUQiLCJDTE9TSU5HIiwiQ09OTkVDVEVEIiwiTk9UX0NPTk5FQ1RFRCIsIldBU19DT05ORUNURUQiLCJPV05FUiIsIk1PREVSQVRPUiIsIlBBUlRJQ0lQQU5UIiwiTk9ORSIsIk9OR09JTkciLCJBQ0NFUFRFRCIsIlJFSkVDVEVEIiwiQ0FOQ0VMRUQiLCJEYXRhU3luYyIsIkV2ZW50cyIsIkxvZyIsIl9qb2luUm9vbSIsInJvb20iLCJyb2xlIiwic3RhdHVzIiwicGFydGljaXBhbnQiLCJ1c2VyQWdlbnQiLCJfam9pbmVkIiwidWlkIiwiUm9vbSIsInZhbCIsIm5hbWUiLCJsb2NhbFN0cmVhbSIsIm93bmVyIiwiX3B1YmxpYyIsImV4dHJhIiwiX2NhbGxiYWNrcyIsImxvY2FsU3RyZWFtcyIsIm1hcCIsImtleSIsInJvb21JZCIsInN0cmVhbXMiLCJmaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwic3RyZWFtIiwiZnJvbSIsImNhdGNoIiwidXNlcnMiLCJfcGF0aCIsIl9kYXRhIiwiYWxsIiwic2VuZCIsInJlbW92ZVBhcnRpY2lwYW50IiwiaW52aXRlIiwidG8iLCJpbnZpdGVzIiwidG9QYXRoIiwib2JqIiwidG9DbGFzcyIsInR5cGVkQ2FsbGJhY2siLCJzdHJlYW1EYXRhIiwicmVtb3RlU3RyZWFtIiwiZ2V0UmVtb3RlIiwidHlwZSIsImxvY2FsU3RyZWFtQ29udGFpbmVyIiwiY29uc3RyYWludHMiLCJzaGFyZSIsImdldExvY2FsVmlkZW8iLCJwdWJsaXNoIiwiY2FuY2VsIiwiY2xvc2UiLCJyZW1vdGVTdHJlYW1zIiwidW5TdWJzY3JpYmUiLCJsZWF2ZSIsIl9jbG9zZWQiLCJwdWJsaWNSb29tIiwicm9vbU1ldGFEYXRhIiwicm9vbUZ1bGxNZXRhRGF0YSIsIl9jcmVhdGVkIiwicm9vbVJlZiIsInByZXNldHMiLCJVSEQiLCJoIiwibWluIiwiRkhEIiwibWF4IiwiSEQiLCJTVkdBIiwiU0QiLCJWR0EiLCJfYXNzaWduRGV2aWNlIiwiY29uc3RyYWludCIsImRldmljZUlkIiwiZmFjaW5nTW9kZSIsIk1lZGlhIiwidmlkZW9Db25zdHJhaW50cyIsImF1ZGlvQ29uc3RyYWludHMiLCJ2aWRlb0RldmljZUlkIiwiYXVkaW9EZXZpY2VJZCIsInZpZGVvIiwicHJlc2V0IiwiZGltQ29uc3RyYWludCIsImRpbSIsImlkZWFsIiwid2lkdGgiLCJoZWlnaHQiLCJhdWRpbyIsIm1lZGlhU3RyZWFtIiwiY29udGFpbmVyIiwicHJldmlvdXMiLCJ2b2x1bWUiLCJ0YWdOYW1lIiwiZ2V0VmlkZW9UcmFja3MiLCJnZXRBdWRpb1RyYWNrcyIsIl9ub2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXV0b3BsYXkiLCJicm93c2VyIiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJib3JkZXJSYWRpdXMiLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsInNyY09iamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmFkZHRyYWNrIiwidHJhY2siLCJsYWJlbCIsIm9ucmVtb3ZldHJhY2siLCJvbmluYWN0aXZlIiwib25wbGF5aW5nIiwiZGVidWciLCJvbnN0YWxsZWQiLCJvbnN1c3BlbmQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJlbnVtZXJhdGVEZXZpY2VzIiwiZGV2aWNlcyIsImtpbmQiLCJVU0VSIiwiRU5WSVJPTk1FTlQiLCJwYXRocyIsImNsYXNzZXMiLCJfRXZlbnRzIiwia2V5cyIsInN1cHBvcnRzIiwicmVwbGFjZSIsInJlYWNoIiwiX2VuZGVkIiwicHJvcCIsIkludml0ZSIsInJlZiIsInBhcmVudCIsInRvcGljIiwiX2xpc3RlbmVyIiwidXBkYXRlZCIsImNiIiwiaWR4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwic29tZSIsImludml0ZWUiLCJpbnZpdGVNZXRhRGF0YSIsImludml0ZUlkIiwiaW52aXRlUmVmIiwiaW5pdGlhbGl6aW5nIiwiVXNlciIsImxhc3RTZWVuIiwiYW5vbnltb3VzIiwicHJvdmlkZXIiLCJjcmVhdGUiLCJhdXRoIiwiSU5URVJOQUwiLCJQZXJzaXN0ZW50U3RvcmFnZSIsImRldmljZU1ldGFkYXRhIiwic2RrIiwid2ViY29tIiwiU0RLX1ZFUlNJT04iLCJkZXZpY2VSZWYiLCJpbnZpdGVJZHMiLCJoYXNDb25uZWN0ZWREZXZpY2VzIiwiUmVnRXhwIiwiQVVESU8iLCJWSURFTyIsIkFVRElPX1ZJREVPIiwiU0NSRUVOX1NIQVJJTkciLCJSZWFjaCIsImNmZyIsImVtYWlsIiwicGFzc3dvcmQiLCJyZW1lbWJlck1lIiwiY3JlYXRlVXNlciIsImxvZ2luIiwicCIsImN1cnJlbnQiLCJsb2dvdXQiLCJhdXRoV2l0aFBhc3N3b3JkIiwiaW5pdCIsInUiLCJyZXN1bWUiLCJhdXRoQW5vbnltb3VzbHkiLCJkaXNjb25uZWN0IiwiaW5jbHVkZSIsImNscyIsInBlZXJDb25uZWN0aW9ucyIsInN0YWNrcyIsInNjaGVtYSIsIm1vZHVsZSIsImV4cG9ydHMiLCJEZXZpY2UiLCJvcyIsInVzZXJVaWQiLCJkZXZpY2VVaWQiLCJNZXNzYWdlIiwidGV4dCIsIm5ld1RleHQiLCJQYXJ0aWNpcGFudCIsIlJlbW90ZSIsImZlZWQiLCJqYW51c1Jvb20iLCJkaXNhYmxlIiwib3JpZ2luVXNlclVpZCIsInJlbW90ZVN0cmVhbUNvbnRhaW5lciIsIm11dGVkIiwicGVlckNvbm5lY3Rpb24iLCJhbnN3ZXIiLCJwYyIsInN1YnNjcmliZWQiLCJTSVpFIiwiTVVURSIsIl9jbG9zZSIsInJlbW90ZSIsIm5vZGUiLCJjb21wYXRpYmxlIiwibWluVmVyc2lvbiIsInZlcnNpb24iLCJhcmdzIiwiX2ZsYXR0ZW5TZXJ2ZXJzIiwiX2V4cGFuZCIsInNlcnZlcnMiLCJ1c2VybmFtZSIsInNlcnZlciIsImNyZWRlbnRpYWwiLCJ1cmxzIiwidXJpcyIsInVyaSIsIkNvbmZpZyIsInByZWZlcnJlZFZpZGVvQ29kZWMiLCJwcmVmZXJyZWRBdWRpb0NvZGVjIiwicmVzZXQiLCJpY2VTZXJ2ZXJzIiwiX2ljZVNlcnZlcnMiLCJfY3VycmVudFNlcnZlcnMiLCJfbmV3U2VydmVycyIsIm5ld1NlcnZlciIsInJlZHVjZSIsInMiLCJfZmFjaW5nTW9kZXMiLCJfZ2V0Q29uc3RyYWludFZhbHVlIiwiZXhhY3QiLCJfc2V0Q29uc3RyYWluVmFsdWUiLCJvdGhlciIsInZhbHVlIiwiTG9jYWwiLCJpc1ZpZGVvTG9hZGVkIiwiX2lucHV0cyIsImdldFVzZXJNZWRpYSIsImNvbnN0cmFpbnRzVmFsdWUiLCJtZWRpYSIsInN0YXRlIiwidHJhY2tzIiwiZ2V0VHJhY2tzIiwiZW5hYmxlZCIsIm11dGUiLCJfc3dpdGNoRGV2aWNlIiwibmV4dCIsImN1cnJlbnRNb2RlSWR4IiwibWVkaWFEZXZpY2UiLCJzb3J0IiwibmV4dERldmljZSIsInYiLCJzdG9wIiwicHJvcHMiLCJyZXZlcnNlIiwidXBkYXRlQ29uc3RyYWludHMiLCJkZWZhdWx0Q29uc3RyYWludHMiLCJfY29uc3RyYWludHMiLCJNZWRpYVN0cmVhbSIsImNoZWNrRGV2aWNlcyIsImRldmljZUlkcyIsImF0dGFjaFN0cmVhbSIsIm9ubG9hZGVkZGF0YSIsInJlbmVnb3RpYXRlIiwiX21lZGlhIiwicmVtb3ZlQ2hpbGQiLCJzdHJlYW1NZXRhRGF0YSIsInNoYXJlZFN0cmVhbSIsInN0cmVhbVJlZiIsInN0cmVhbVNpemUiLCJ2aWRlb0hlaWdodCIsInZpZGVvV2lkdGgiLCJ3aW5kb3ciLCJzaGFyZWQiLCJzdWJzY3JpYmVyIiwib2ZmZXIiLCJjbG9zZWRQQyIsIlN0cmVhbU1hbmFnZXIiLCJEdGxzU3J0cEtleUFncmVlbWVudCIsInNkcENvbnN0cmFpbnRzIiwiT2ZmZXJUb1JlY2VpdmVBdWRpbyIsInJlY2VpdmUiLCJPZmZlclRvUmVjZWl2ZVZpZGVvIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfRElTQ09OTkVDVEVEIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09OTkVDVEVEIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09NUExFVEVEIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0hFQ0tJTkciLCJJQ0VfQ09OTkVDVElPTl9TVEFURV9DTE9TRUQiLCJJQ0VfQ09OTkVDVElPTl9TVEFURV9GQUlMRUQiLCJJQ0VfQ09OTkVDVElPTl9TVEFURV9PVEhFUiIsIl90b0pTT04iLCJvIiwidG9KU09OIiwiUGVlckNvbm5lY3Rpb24iLCJzdGFja0lkIiwic3RyZWFtSWQiLCJfbG9jYWxQYXRoIiwiX3JlbW90ZVBhdGgiLCJuZWdvdGlhdGVkIiwiUlRDUGVlckNvbm5lY3Rpb24iLCJvcHRpb25hbCIsIm1hbmRhdG9yeSIsIm9uaWNlY2FuZGlkYXRlIiwiY2FuZGlkYXRlIiwib25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UiLCJpY2VDb25uZWN0aW9uU3RhdGUiLCJfYXR0YWNoU3RyZWFtIiwiX3JlbW90ZUlDRUNhbmRpZGF0ZXMiLCJpc0Nvbm5lY3RlZCIsIm9uaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UiLCJpY2VHYXRoZXJpbmdTdGF0ZSIsIl9zdGF0dXMiLCJsaXN0ZW4iLCJzbmFwIiwiYWRkSWNlQ2FuZGlkYXRlIiwiUlRDSWNlQ2FuZGlkYXRlIiwiaHRtbEVsZW1lbnQiLCJwcm90b3R5cGUiLCJvbnRyYWNrIiwib25hZGRzdHJlYW0iLCJzZHBPZmZlciIsInNkcCIsInNldFJlbW90ZURlc2NyaXB0aW9uIiwicmVtb3RlRGVzY3JpcHRpb24iLCJjcmVhdGVBbnN3ZXIiLCJfc2V0UHJlZmVycmVkQ29kZWNzIiwiZGVzY3JpcHRpb24iLCJzZXRMb2NhbERlc2NyaXB0aW9uIiwibG9jYWxEZXNjcmlwdGlvbiIsIl9zZW5kU2RwVG9SZW1vdGUiLCJzZW5kVGltZW91dCIsIm9ubmVnb3RpYXRpb25uZWVkZWQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiX3NlbmRPZmZlciIsInNkcEFuc3dlciIsIl9hbHRlclN0cmVhbSIsInJlbW90ZVVzZXJJZCIsInJlbW90ZURldmljZSIsIm5ld1NkcCIsImxvY2FsIiwiZXhlYyIsImRlc2NyaXB0aW9uQ2hhbmdlZCIsImNyZWF0ZU9mZmVyIiwiZ2V0U2VuZGVycyIsInNlbmRlciIsIm9sZFN0cmVhbSIsIm5ld1N0cmVhbSIsIlJUQ1J0cFNlbmRlciIsIm5ld1RyYWNrcyIsInJlcGxhY2VUcmFjayIsInNpZ25hbGluZ1N0YXRlIiwib25zaWduYWxpbmdzdGF0ZWNoYW5nZSIsInNkcExpbmVzIiwic3BsaXQiLCJtZWRpYXMiLCJzZHBMaW5lIiwiZm10IiwiaW5kZXgiLCJjb2RlY3MiLCJjIiwiaWQiLCJwcmVmZXIiLCJtZWRpYUxpc3QiLCJwcmVmZXJlZENvZGVjIiwic2VsZWN0ZWQiLCJmaW5kIiwiY29kZWMiLCJpZHMiLCJqb2luIiwiX3JlbW90ZVN0cmVhbSIsImdldFN0YWNrSWQiLCJpZDEiLCJpZDIiLCJsb2NhbGVDb21wYXJlIiwiUGVlckNvbm5lY3Rpb25NYW5hZ2VyIiwiZ2V0UGVlckNvbm5lY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEIsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RCxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0IsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6b0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpQ0FBaUMsc0JBQXNCOzs7Ozs7Ozs7QUNadkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZiw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdDQUFnQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0a0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxZQUFZO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHlEQUF5RCxvQkFBb0I7QUFDN0UseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEseUNBQXlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsOEJBQThCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQ0FBZ0M7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTCx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25ELCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUJBQXVCLDhCQUE4QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicmVhY2gtZGVidWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJ3ZWJjb20vd2ViY29tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIndlYmNvbS93ZWJjb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY2hcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ3ZWJjb20vd2ViY29tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjaFwiXSA9IGZhY3Rvcnkocm9vdFtcIldlYmNvbVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMxX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1OCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWE0OTNjNWRjZDMyMTRiNzk0NjYiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNhY2hlIGZyb20gJy4vY2FjaGUnO1xuXG4vKipcbiAqIExpc3Qgb2YgcG9zc2libGUgbG9nIGxldmVsc1xuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbmNvbnN0IGxldmVscyA9IFsnREVCVUcnLCAnSU5GTycsICdXQVJOJywgJ0VSUk9SJ107XG4vKipcbiAqIElzIGxvZyBlbmFibGVkIGZvciBhIHNwZWNpZmljIGxldmVsXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbCBUaGUgbGV2ZWwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGlzRW5hYmxlZCA9IGxldmVsID0+IHtcblx0cmV0dXJuIGxldmVscy5pbmRleE9mKGxldmVsLnRvVXBwZXJDYXNlKCkpID49IGxldmVscy5pbmRleE9mKGNhY2hlLmxvZ0xldmVsLnRvVXBwZXJDYXNlKCkpO1xufTtcbi8qKlxuICogR2xvYmFsIENvbnNvbGUuICh0byBhdm9pZCBkcm9wX2NvbnNvbGUuLi4pXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEB0eXBlIHtDb25zb2xlfVxuICovXG5jb25zdCBnQ29uc29sZSA9IGdsb2JhbFsnY29uc29sZSddO1xuLyoqXG4gKiBTaG9ydGhhbmQgZm9yIGNvbnNvbGUgY2FsbFxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIEEgbWV0aG9kIG9mIHRoZSBjb25zb2xlIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IGxldmVsIFRoZSBsb2cgbGV2ZWxcbiAqIEBwYXJhbSB7Kn0gbWVzc2FnZXMgdGhlIGxvZyBjb250ZW50XG4gKi9cbmNvbnN0IGxvZ2dlciA9IChtZXRob2QsIGxldmVsLCAuLi5tZXNzYWdlcykgPT4ge1xuXHRpc0VuYWJsZWQobGV2ZWwpID8gZ0NvbnNvbGVbbWV0aG9kLnRvTG93ZXJDYXNlKCldLmJpbmQoZ0NvbnNvbGUpKC4uLm1lc3NhZ2VzKSA6ICgpID0+IHt9O1xufTtcbi8qKlxuICogVXNlIGEgZ3JvdXAgdG8gbG9nXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbCBUaGUgbG9nIGxldmVsXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZ3JvdXAgdGl0bGVcbiAqIEBwYXJhbSB7Kn0gaXRlbXMgdGhlIGxvZyBjb250ZW50XG4gKi9cbmNvbnN0IGdyb3VwID0gKGxldmVsLCBtZXNzYWdlLCAuLi5pdGVtcykgPT4ge1xuXHRpZiAoaXRlbXMubGVuZ3RoID4gMCkge1xuXHRcdGxvZ2dlci5iaW5kKHVuZGVmaW5lZCwgZ0NvbnNvbGUuZ3JvdXAgPyAnZ3JvdXAnIDogbGV2ZWwsIGxldmVsKSh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycgPyBtZXNzYWdlIDogJycpO1xuXHRcdGxldCB2YWx1ZXMgPSAodHlwZW9mIG1lc3NhZ2UgIT09ICdzdHJpbmcnID8gW21lc3NhZ2VdIDogW10pLmNvbmNhdChpdGVtcyk7XG5cdFx0aWYgKGl0ZW1zLmxlbmd0aCA9PT0gMSAmJiBpdGVtc1swXSBpbnN0YW5jZW9mIEFycmF5ICYmIHR5cGVvZiBpdGVtc1swXS5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFsdWVzID0gaXRlbXNbMF07XG5cdFx0fVxuXHRcdHZhbHVlcy5mb3JFYWNoKGl0ZW0gPT4gbG9nZ2VyLmJpbmQodW5kZWZpbmVkLCBsZXZlbCwgbGV2ZWwpKGl0ZW0pKTtcblx0XHRnQ29uc29sZS5ncm91cEVuZCAmJiBnQ29uc29sZS5ncm91cEVuZCgpO1xuXHR9IGVsc2Uge1xuXHRcdGxvZ2dlci5iaW5kKHVuZGVmaW5lZCwgbGV2ZWwsIGxldmVsLCBtZXNzYWdlKTtcblx0fVxufTtcblxuLyoqXG4gKiBMb2cgZGVidWcgbWVzc2FnZXMgaWYgbG9nIGxldmVsIGlzIHNldCB0byBERUJVRy5cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0FQSS9Db25zb2xlL2xvZ1xuICovXG5leHBvcnQgY29uc3QgZCA9IGdyb3VwLmJpbmQodW5kZWZpbmVkLCBsZXZlbHNbMF0pO1xuLyoqXG4gKiBMb2cgaW5mb3JtYXRpb24gbWVzc2FnZXMgaWYgbG9nIGxldmVsIGlzIHNldCB0byBERUJVRyBvciBJTkZPLlxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQVBJL0NvbnNvbGUvaW5mb1xuICovXG5leHBvcnQgY29uc3QgaSA9IGdyb3VwLmJpbmQodW5kZWZpbmVkLCBsZXZlbHNbMV0pO1xuLyoqXG4gKiBMb2cgd2FybmluZyBtZXNzYWdlcyBpZiBsb2cgbGV2ZWwgaXMgc2V0IHRvIERFQlVHLCBJTkZPIG9yIFdBUk4uXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9BUEkvQ29uc29sZS93YXJuXG4gKi9cbmV4cG9ydCBjb25zdCB3ID0gZ3JvdXAuYmluZCh1bmRlZmluZWQsIGxldmVsc1syXSk7XG4vKipcbiAqIExvZyBlcnJvciBtZXNzYWdlcy4gRXJyb3JzIGFyZSBhbHdheXMgbG9nZ2VkLlxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQVBJL0NvbnNvbGUvZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGUgPSBnQ29uc29sZS5lcnJvci5iaW5kKGdDb25zb2xlKTtcbi8qKlxuICogUHJvbWlzZSByZWplY3Rpb24gbG9nZ2VyIHRvIHVzZSB3aXRoIGNhdGNoXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IHIgPSBtZXNzYWdlID0+IHJlYXNvbiA9PiB7XG5cdGQobWVzc2FnZSwgcmVhc29uKTtcblx0cmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbiB8fCBtZXNzYWdlKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS91dGlsL0xvZy5qcyIsImltcG9ydCBDb25maWcgZnJvbSAnLi4vQ29uZmlnJztcbmltcG9ydCBTdHJlYW1NYW5hZ2VyIGZyb20gJy4uL3N0cmVhbS9TdHJlYW1NYW5hZ2VyJztcbmltcG9ydCBQZWVyQ29ubmVjdGlvbk1hbmFnZXIgZnJvbSAnLi4vd2VicnRjL1BlZXJDb25uZWN0aW9uTWFuYWdlcic7XG5pbXBvcnQgV2ViY29tIGZyb20gJ3dlYmNvbS93ZWJjb20nO1xuXG4vKipcbiAqIHNpbmdsZXRvblxuICogQHR5cGUge0NhY2hlTWFuYWdlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmxldCBfY2FjaGUgPSBudWxsO1xuXG4vKipcbiAqIFNpbmdsZXRvbiB0byBoYW5kbGUgZ2xvYmFsIHJlZmVyZW5jZXNcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKi9cbmNsYXNzIENhY2hlTWFuYWdlciB7XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3Qgc2luZ2xldG9uXG5cdCAqIEByZXR1cm4ge0NhY2hlTWFuYWdlcn1cblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGlmKCFfY2FjaGUpIHtcblx0XHRcdF9jYWNoZSA9IHRoaXM7XG5cdFx0fVxuXHRcdHJldHVybiBfY2FjaGU7XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBiYXNlIHJlZmVyZW5jZVxuXHQgKiBAcGFyYW0ge1dlYmNvbX0gdXJsIHRoZSByZWZlcmVuY2Ugb3IgaXRzIHVybFxuXHQgKi9cblx0c2V0IGJhc2UodXJsKSB7XG5cdFx0LyoqXG5cdFx0ICogQGlnbm9yZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2Jhc2UgPSB1cmwgaW5zdGFuY2VvZiBXZWJjb20gPyB1cmwgOiBuZXcgV2ViY29tKHVybCk7XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBiYXNlIHJlZmVyZW5jZVxuXHQgKiBAdHlwZSB7V2ViY29tfVxuXHQgKi9cblx0Z2V0IGJhc2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2Jhc2U7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGNvbm5lY3RlZCB1c2VyXG5cdCAqIEBwYXJhbSB7Q29uZmlnfSBjb25maWcgdGhlIGNvbm5lY3RlZCB1c2VyXG5cdCAqL1xuXHRzZXQgY29uZmlnKGNvbmZpZykge1xuXHRcdGlmKCF0aGlzLl9jb25maWcpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQGlnbm9yZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLl9jb25maWcgPSBuZXcgQ29uZmlnKGNvbmZpZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2NvbmZpZy5hc3NpZ24oY29uZmlnKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBjb25uZWN0ZWQgdXNlclxuXHQgKiBAdHlwZSB7Q29uZmlnfVxuXHQgKi9cblx0Z2V0IGNvbmZpZygpIHtcblx0XHRpZighdGhpcy5fY29uZmlnKSB7XG5cdFx0XHR0aGlzLl9jb25maWcgPSBuZXcgQ29uZmlnKCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBjb25uZWN0ZWQgdXNlclxuXHQgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgdGhlIGNvbm5lY3RlZCB1c2VyXG5cdCAqL1xuXHRzZXQgdXNlcih1c2VyKSB7XG5cdFx0LyoqXG5cdFx0ICogQGlnbm9yZVxuXHRcdCAqL1xuXHRcdHRoaXMuX3VzZXIgPSB1c2VyO1xuXHR9XG5cdC8qKlxuXHQgKiBUaGUgY29ubmVjdGVkIHVzZXJcblx0ICogQHR5cGUge1VzZXJ9XG5cdCAqL1xuXHRnZXQgdXNlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5fdXNlcjtcblx0fVxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgZGV2aWNlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBkZXZpY2UgdGhlIGN1cnJlbnQgZGV2aWNlXG5cdCAqL1xuXHRzZXQgZGV2aWNlKGRldmljZSkge1xuXHRcdC8qKlxuXHRcdCAqIEBpZ25vcmVcblx0XHQgKi9cblx0XHR0aGlzLl9kZXZpY2UgPSBkZXZpY2U7XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IGRldmljZVxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0IGRldmljZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZGV2aWNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBsb2cgbGV2ZWwgKERFQlVHLCBJTkZPLCBXQVJOLCBFUlJPUilcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdHNldCBsb2dMZXZlbChsZXZlbCkge1xuXHRcdGlmKC9eREVCVUd8SU5GT3xXQVJOfEVSUk9SJC9pLnRlc3QobGV2ZWwpKSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIEBpZ25vcmVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5fbG9nTGV2ZWwgPSBsZXZlbDtcblx0XHR9IGVsc2UgaWYobGV2ZWwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgbG9nIGxldmVsIChERUJVRywgSU5GTywgV0FSTiwgRVJST1IpJyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBUaGUgbG9nIGxldmVsIChERUJVRywgSU5GTywgV0FSTiwgRVJST1IpXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRnZXQgbG9nTGV2ZWwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2xvZ0xldmVsIHx8ICdFUlJPUic7XG5cdH1cblxuXHQvKipcblx0ICogU3RyZWFtcyBtYW5hZ2VyXG5cdCAqIEByZXR1cm5zIHtTdHJlYW1NYW5hZ2VyfVxuXHQgKi9cblx0Z2V0IHN0cmVhbXMoKSB7XG5cdFx0aWYoIXRoaXMuX3N0cmVhbXMpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQGlnbm9yZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLl9zdHJlYW1zID0gbmV3IFN0cmVhbU1hbmFnZXIoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX3N0cmVhbXM7XG5cdH1cblxuXHQvKipcblx0ICogUGVlckNvbm5lY3Rpb25zIG1hbmFnZXJcblx0ICogQHJldHVybnMge1BlZXJDb25uZWN0aW9uTWFuYWdlcn1cblx0ICovXG5cdGdldCBwZWVyQ29ubmVjdGlvbnMoKSB7XG5cdFx0aWYoIXRoaXMuX3BlZXJDb25uZWN0aW9ucykge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBAaWdub3JlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuX3BlZXJDb25uZWN0aW9ucyA9IG5ldyBQZWVyQ29ubmVjdGlvbk1hbmFnZXIoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX3BlZXJDb25uZWN0aW9ucztcblx0fVxufVxuXG4vKipcbiAqIFRoZSBzaW5nbGV0b24gaW5zdGFuY2VcbiAqIEBpZ25vcmVcbiAqIEB0eXBlIHtDYWNoZU1hbmFnZXJ9XG4gKi9cbmNvbnN0IGNhY2hlID0gbmV3IENhY2hlTWFuYWdlcigpO1xuXG4vKipcbiAqIFNpbmdsZXRvbiBmb3Igc2hhcmVkIHJlZmVyZW5jZXNcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNhY2hlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvdXRpbC9jYWNoZS5qcyIsImltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlJztcblxuLyoqXG4gKiBHZXQgdGhlIGV2ZW50IHN0cmluZyBmb3IgV2ViY29tIGZyb20gUmVhY2ggZXZlbnRzXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IEEgUmVhY2ggZXZlbnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IGV2ZW50VHlwZSA9IChldmVudCkgPT4ge1xuXHRsZXQgZXZ0O1xuXHRpZigoL19BRERFRCQvaSkudGVzdChldmVudCkgfHwgL19QVUJMSVNIRUQkLy50ZXN0KGV2ZW50KSkge1xuXHRcdGV2dCA9ICdhZGRlZCc7XG5cdH0gZWxzZSBpZigvX0NIQU5HRUQkLy50ZXN0KGV2ZW50KSB8fCAvX1JFRlJFU0hFRCQvLnRlc3QoZXZlbnQpKSB7XG5cdFx0ZXZ0ID0gJ2NoYW5nZWQnO1xuXHR9IGVsc2UgaWYoL19SRU1PVkVEJC8udGVzdChldmVudCkgfHwgL19VTlBVQkxJU0hFRCQvLnRlc3QoZXZlbnQpKSB7XG5cdFx0ZXZ0ID0gJ3JlbW92ZWQnO1xuXHR9XG5cdHJldHVybiBldnQgPyBgY2hpbGRfJHtldnR9YCA6IGV2ZW50O1xufTtcblxuLyoqXG4gKiBXcml0ZSBtZXRob2RcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgV3JpdGUgbWV0aG9kIChzZXQsdXBkYXRlKVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gc2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBzZXRcbiAqIEBpZ25vcmVcbiAqL1xuY29uc3QgX3dyaXRlID0gKG1ldGhvZCwgcGF0aCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRjYWNoZS5iYXNlLmNoaWxkKHBhdGgpW21ldGhvZF0oZGF0YSwgZXJyb3IgPT4gZXJyb3IgPyByZWplY3QoZXJyb3IpIDogcmVzb2x2ZSgpKTtcbn0pO1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jc2V0fSBhcyBhIHtAbGluayBQcm9taXNlfVxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHNldFxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gc2V0XG4gKiBAcmV0dXJuIHtQcm9taXNlPCosIEVycm9yPn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNldCA9IF93cml0ZS5iaW5kKHVuZGVmaW5lZCwgJ3NldCcpO1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jcHVzaH0gYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBwdXNoXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwdXNoXG4gKiBAcmV0dXJuIHtQcm9taXNlPFdlYmNvbSwgRXJyb3I+fVxuICovXG5leHBvcnQgY29uc3QgcHVzaCA9IChwYXRoLCBkYXRhKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdGNvbnN0IHB1c2hSZWYgPSBjYWNoZS5iYXNlLmNoaWxkKHBhdGgpLnB1c2goZGF0YSwgZXJyb3IgPT4gZXJyb3IgPyByZWplY3QoZXJyb3IpIDogcmVzb2x2ZShwdXNoUmVmKSk7XG59KTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI3VwZGF0ZX0gYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byB1cGRhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHVwZGF0ZVxuICogQHJldHVybiB7UHJvbWlzZTwqLCBFcnJvcj59XG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGUgPSBfd3JpdGUuYmluZCh1bmRlZmluZWQsICd1cGRhdGUnKTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI3JlbW92ZX0gYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byByZW1vdmVcbiAqIEByZXR1cm4ge1Byb21pc2U8KiwgRXJyb3I+fVxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gKHBhdGgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0Y2FjaGUuYmFzZS5jaGlsZChwYXRoKS5yZW1vdmUoZXJyb3IgPT4gZXJyb3IgPyByZWplY3QoZXJyb3IpIDogcmVzb2x2ZSgpKTtcbn0pO1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jb25jZX0gc2hvcnRjdXQgYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudFxuICogQHJldHVybnMge1Byb21pc2U8V2ViY29tL2FwaS5EYXRhU25hcHNob3QsIEVycm9yPn1cbiAqL1xuZXhwb3J0IGNvbnN0IG9uY2UgPSAocGF0aCwgZXZlbnQpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0Y2FjaGUuYmFzZS5jaGlsZChwYXRoKS5vbmNlKGV2ZW50VHlwZShldmVudCksIHJlc29sdmUsIHJlamVjdCk7XG59KTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI29uY2V9KCd2YWx1ZScpIGFzIGEge0BsaW5rIFByb21pc2V9XG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gZ2V0XG4gKiBAcmV0dXJuIHtQcm9taXNlPFdlYmNvbS9hcGkuRGF0YVNuYXBzaG90LCBFcnJvcj59XG4gKi9cbmV4cG9ydCBjb25zdCBnZXQgPSBwYXRoID0+IG9uY2UocGF0aCwgJ3ZhbHVlJyk7XG5cbi8qKlxuICogTGlzdCB2YWx1ZXMgYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBnZXRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFR5cGUgVGhlIHR5cGUgb2YgdGhlIG9iamVjdCB0byBsaXN0XG4gKiBAcGFyYW0gcGFyYW1zIEFkZGl0aW9uYWwgY29uc3RydWN0b3IgcGFyYW1ldGVyc1xuICogQHJldHVybiB7UHJvbWlzZTxPYmplY3RbXSwgRXJyb3I+fVxuICovXG5leHBvcnQgY29uc3QgbGlzdCA9IChwYXRoLCBUeXBlLCAuLi5wYXJhbXMpID0+IHtcblx0cmV0dXJuIGdldChwYXRoKVxuXHQudGhlbihzbmFwRGF0YSA9PiB7XG5cdFx0aWYoc25hcERhdGEpIHtcblx0XHRcdGNvbnN0IHZhbHVlcyA9IFtdO1xuXHRcdFx0c25hcERhdGEuZm9yRWFjaChzbmFwQ2hpbGQgPT4ge1xuXHRcdFx0XHR2YWx1ZXMucHVzaChuZXcgVHlwZShzbmFwQ2hpbGQsIC4uLnBhcmFtcykpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gdmFsdWVzO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jb259IHNob3J0Y3V0XG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnRcbiAqIEBwYXJhbSB7V2ViY29tL2FwaS5RdWVyeX5xdWVyeUNhbGxiYWNrfGZ1bmN0aW9ufSBxdWVyeUNhbGxiYWNrIFRoZSBjYWxsYmFja1xuICogQHBhcmFtIHtXZWJjb20vYXBpLlF1ZXJ5fmNhbmNlbENhbGxiYWNrfGZ1bmN0aW9ufSBbY2FuY2VsQ2FsbGJhY2tdIFRoZSBjYWxsYmFja1xuICovXG5leHBvcnQgY29uc3Qgb24gPSAocGF0aCwgZXZlbnQsIHF1ZXJ5Q2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrKSA9PiB7XG5cdGNhY2hlLmJhc2UuY2hpbGQocGF0aCkub24oZXZlbnRUeXBlKGV2ZW50KSwgcXVlcnlDYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI29mZn0gc2hvcnRjdXRcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXSBUaGUgY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGNvbnN0IG9mZiA9IChwYXRoLCBldmVudCwgY2FsbGJhY2spID0+IHtcblx0Y2FjaGUuYmFzZS5jaGlsZChwYXRoKS5vZmYoZXZlbnRUeXBlKGV2ZW50KSwgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI29uRGlzY29ubmVjdH0gc2hvcnRjdXRcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aFxuICogQHJldHVybiB7V2ViY29tL2FwaS5PbkRpc2Nvbm5lY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBvbkRpc2Nvbm5lY3QgPSBwYXRoID0+IGNhY2hlLmJhc2UuY2hpbGQocGF0aCkub25EaXNjb25uZWN0KCk7XG5cbi8qKlxuICogVGltZXN0YW1wIHZhbHVlXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge2Z1bmN0aW9ufVxuICovXG4vLyBleHBvcnQgY29uc3QgdHMgPSAoKSA9PiBXZWJjb20uU2VydmVyVmFsdWUuVElNRVNUQU1QO1xuZXhwb3J0IGNvbnN0IHRzID0gKCkgPT4gRGF0ZS5ub3coKTtcbi8vIEhBQ0sgI0RhdGFTeW5jOiBSb2xsYmFjayB3aGVuIFRJTUVTVEFNUCB3b3JrcyBhZ2FpbiAoc2VydmVyLXNpZGUgYnVnIHdpdGggc2VjdXJpdHkgcnVsZXMpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS91dGlsL0RhdGFTeW5jLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGtleSBpbiBleHBvcnRzKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGxvZ0Rpc2FibGVkXyA9IHRydWU7XG52YXIgZGVwcmVjYXRpb25XYXJuaW5nc18gPSB0cnVlO1xuXG4vLyBVdGlsaXR5IG1ldGhvZHMuXG52YXIgdXRpbHMgPSB7XG4gIGRpc2FibGVMb2c6IGZ1bmN0aW9uKGJvb2wpIHtcbiAgICBpZiAodHlwZW9mIGJvb2wgIT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignQXJndW1lbnQgdHlwZTogJyArIHR5cGVvZiBib29sICtcbiAgICAgICAgICAnLiBQbGVhc2UgdXNlIGEgYm9vbGVhbi4nKTtcbiAgICB9XG4gICAgbG9nRGlzYWJsZWRfID0gYm9vbDtcbiAgICByZXR1cm4gKGJvb2wpID8gJ2FkYXB0ZXIuanMgbG9nZ2luZyBkaXNhYmxlZCcgOlxuICAgICAgICAnYWRhcHRlci5qcyBsb2dnaW5nIGVuYWJsZWQnO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIG9yIGVuYWJsZSBkZXByZWNhdGlvbiB3YXJuaW5nc1xuICAgKiBAcGFyYW0geyFib29sZWFufSBib29sIHNldCB0byB0cnVlIHRvIGRpc2FibGUgd2FybmluZ3MuXG4gICAqL1xuICBkaXNhYmxlV2FybmluZ3M6IGZ1bmN0aW9uKGJvb2wpIHtcbiAgICBpZiAodHlwZW9mIGJvb2wgIT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignQXJndW1lbnQgdHlwZTogJyArIHR5cGVvZiBib29sICtcbiAgICAgICAgICAnLiBQbGVhc2UgdXNlIGEgYm9vbGVhbi4nKTtcbiAgICB9XG4gICAgZGVwcmVjYXRpb25XYXJuaW5nc18gPSAhYm9vbDtcbiAgICByZXR1cm4gJ2FkYXB0ZXIuanMgZGVwcmVjYXRpb24gd2FybmluZ3MgJyArIChib29sID8gJ2Rpc2FibGVkJyA6ICdlbmFibGVkJyk7XG4gIH0sXG5cbiAgbG9nOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChsb2dEaXNhYmxlZF8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5sb2cgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNob3dzIGEgZGVwcmVjYXRpb24gd2FybmluZyBzdWdnZXN0aW5nIHRoZSBtb2Rlcm4gYW5kIHNwZWMtY29tcGF0aWJsZSBBUEkuXG4gICAqL1xuICBkZXByZWNhdGVkOiBmdW5jdGlvbihvbGRNZXRob2QsIG5ld01ldGhvZCkge1xuICAgIGlmICghZGVwcmVjYXRpb25XYXJuaW5nc18pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS53YXJuKG9sZE1ldGhvZCArICcgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSAnICsgbmV3TWV0aG9kICtcbiAgICAgICAgJyBpbnN0ZWFkLicpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IGJyb3dzZXIgdmVyc2lvbiBvdXQgb2YgdGhlIHByb3ZpZGVkIHVzZXIgYWdlbnQgc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0geyFzdHJpbmd9IHVhc3RyaW5nIHVzZXJBZ2VudCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7IXN0cmluZ30gZXhwciBSZWd1bGFyIGV4cHJlc3Npb24gdXNlZCBhcyBtYXRjaCBjcml0ZXJpYS5cbiAgICogQHBhcmFtIHshbnVtYmVyfSBwb3MgcG9zaXRpb24gaW4gdGhlIHZlcnNpb24gc3RyaW5nIHRvIGJlIHJldHVybmVkLlxuICAgKiBAcmV0dXJuIHshbnVtYmVyfSBicm93c2VyIHZlcnNpb24uXG4gICAqL1xuICBleHRyYWN0VmVyc2lvbjogZnVuY3Rpb24odWFzdHJpbmcsIGV4cHIsIHBvcykge1xuICAgIHZhciBtYXRjaCA9IHVhc3RyaW5nLm1hdGNoKGV4cHIpO1xuICAgIHJldHVybiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPj0gcG9zICYmIHBhcnNlSW50KG1hdGNoW3Bvc10sIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogQnJvd3NlciBkZXRlY3Rvci5cbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fSByZXN1bHQgY29udGFpbmluZyBicm93c2VyIGFuZCB2ZXJzaW9uXG4gICAqICAgICBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgZGV0ZWN0QnJvd3NlcjogZnVuY3Rpb24od2luZG93KSB7XG4gICAgdmFyIG5hdmlnYXRvciA9IHdpbmRvdyAmJiB3aW5kb3cubmF2aWdhdG9yO1xuXG4gICAgLy8gUmV0dXJuZWQgcmVzdWx0IG9iamVjdC5cbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgcmVzdWx0LmJyb3dzZXIgPSBudWxsO1xuICAgIHJlc3VsdC52ZXJzaW9uID0gbnVsbDtcblxuICAgIC8vIEZhaWwgZWFybHkgaWYgaXQncyBub3QgYSBicm93c2VyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICF3aW5kb3cubmF2aWdhdG9yKSB7XG4gICAgICByZXN1bHQuYnJvd3NlciA9ICdOb3QgYSBicm93c2VyLic7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIEZpcmVmb3guXG4gICAgaWYgKG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcbiAgICAgIHJlc3VsdC5icm93c2VyID0gJ2ZpcmVmb3gnO1xuICAgICAgcmVzdWx0LnZlcnNpb24gPSB0aGlzLmV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgICAgL0ZpcmVmb3hcXC8oXFxkKylcXC4vLCAxKTtcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEpIHtcbiAgICAgIC8vIENocm9tZSwgQ2hyb21pdW0sIFdlYnZpZXcsIE9wZXJhLCBhbGwgdXNlIHRoZSBjaHJvbWUgc2hpbSBmb3Igbm93XG4gICAgICBpZiAod2luZG93LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgICAgIHJlc3VsdC5icm93c2VyID0gJ2Nocm9tZSc7XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gdGhpcy5leHRyYWN0VmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICAgIC9DaHJvbShlfGl1bSlcXC8oXFxkKylcXC4vLCAyKTtcbiAgICAgIH0gZWxzZSB7IC8vIFNhZmFyaSAoaW4gYW4gdW5wdWJsaXNoZWQgdmVyc2lvbikgb3IgdW5rbm93biB3ZWJraXQtYmFzZWQuXG4gICAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9WZXJzaW9uXFwvKFxcZCspLihcXGQrKS8pKSB7XG4gICAgICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnc2FmYXJpJztcbiAgICAgICAgICByZXN1bHQudmVyc2lvbiA9IHRoaXMuZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAgIC9BcHBsZVdlYktpdFxcLyhcXGQrKVxcLi8sIDEpO1xuICAgICAgICB9IGVsc2UgeyAvLyB1bmtub3duIHdlYmtpdC1iYXNlZCBicm93c2VyLlxuICAgICAgICAgIHJlc3VsdC5icm93c2VyID0gJ1Vuc3VwcG9ydGVkIHdlYmtpdC1iYXNlZCBicm93c2VyICcgK1xuICAgICAgICAgICAgICAnd2l0aCBHVU0gc3VwcG9ydCBidXQgbm8gV2ViUlRDIHN1cHBvcnQuJztcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykuKFxcZCspJC8pKSB7IC8vIEVkZ2UuXG4gICAgICByZXN1bHQuYnJvd3NlciA9ICdlZGdlJztcbiAgICAgIHJlc3VsdC52ZXJzaW9uID0gdGhpcy5leHRyYWN0VmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICAgIC9FZGdlXFwvKFxcZCspLihcXGQrKSQvLCAyKTtcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiZcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQXBwbGVXZWJLaXRcXC8oXFxkKylcXC4vKSkge1xuICAgICAgICAvLyBTYWZhcmksIHdpdGggd2Via2l0R2V0VXNlck1lZGlhIHJlbW92ZWQuXG4gICAgICByZXN1bHQuYnJvd3NlciA9ICdzYWZhcmknO1xuICAgICAgcmVzdWx0LnZlcnNpb24gPSB0aGlzLmV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgICAgL0FwcGxlV2ViS2l0XFwvKFxcZCspXFwuLywgMSk7XG4gICAgfSBlbHNlIHsgLy8gRGVmYXVsdCBmYWxsdGhyb3VnaDogbm90IHN1cHBvcnRlZC5cbiAgICAgIHJlc3VsdC5icm93c2VyID0gJ05vdCBhIHN1cHBvcnRlZCBicm93c2VyLic7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLy8gc2hpbUNyZWF0ZU9iamVjdFVSTCBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgc2hpbVNvdXJjZU9iamVjdCB0byBhdm9pZCBsb29wLlxuXG4gIHNoaW1DcmVhdGVPYmplY3RVUkw6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIHZhciBVUkwgPSB3aW5kb3cgJiYgd2luZG93LlVSTDtcblxuICAgIGlmICghKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50ICYmXG4gICAgICAgICAgJ3NyY09iamVjdCcgaW4gd2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgLy8gT25seSBzaGltIENyZWF0ZU9iamVjdFVSTCB1c2luZyBzcmNPYmplY3QgaWYgc3JjT2JqZWN0IGV4aXN0cy5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIG5hdGl2ZUNyZWF0ZU9iamVjdFVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwuYmluZChVUkwpO1xuICAgIHZhciBuYXRpdmVSZXZva2VPYmplY3RVUkwgPSBVUkwucmV2b2tlT2JqZWN0VVJMLmJpbmQoVVJMKTtcbiAgICB2YXIgc3RyZWFtcyA9IG5ldyBNYXAoKSwgbmV3SWQgPSAwO1xuXG4gICAgVVJMLmNyZWF0ZU9iamVjdFVSTCA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgaWYgKCdnZXRUcmFja3MnIGluIHN0cmVhbSkge1xuICAgICAgICB2YXIgdXJsID0gJ3BvbHlibG9iOicgKyAoKytuZXdJZCk7XG4gICAgICAgIHN0cmVhbXMuc2V0KHVybCwgc3RyZWFtKTtcbiAgICAgICAgdXRpbHMuZGVwcmVjYXRlZCgnVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pJyxcbiAgICAgICAgICAgICdlbGVtLnNyY09iamVjdCA9IHN0cmVhbScpO1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5hdGl2ZUNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuICAgIH07XG4gICAgVVJMLnJldm9rZU9iamVjdFVSTCA9IGZ1bmN0aW9uKHVybCkge1xuICAgICAgbmF0aXZlUmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICBzdHJlYW1zLmRlbGV0ZSh1cmwpO1xuICAgIH07XG5cbiAgICB2YXIgZHNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYycpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUsICdzcmMnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZHNjLmdldC5hcHBseSh0aGlzKTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHVybCkge1xuICAgICAgICB0aGlzLnNyY09iamVjdCA9IHN0cmVhbXMuZ2V0KHVybCkgfHwgbnVsbDtcbiAgICAgICAgcmV0dXJuIGRzYy5zZXQuYXBwbHkodGhpcywgW3VybF0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIG5hdGl2ZVNldEF0dHJpYnV0ZSA9IHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGU7XG4gICAgd2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiZcbiAgICAgICAgICAoJycgKyBhcmd1bWVudHNbMF0pLnRvTG93ZXJDYXNlKCkgPT09ICdzcmMnKSB7XG4gICAgICAgIHRoaXMuc3JjT2JqZWN0ID0gc3RyZWFtcy5nZXQoYXJndW1lbnRzWzFdKSB8fCBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5hdGl2ZVNldEF0dHJpYnV0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbn07XG5cbi8vIEV4cG9ydC5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBsb2c6IHV0aWxzLmxvZyxcbiAgZGVwcmVjYXRlZDogdXRpbHMuZGVwcmVjYXRlZCxcbiAgZGlzYWJsZUxvZzogdXRpbHMuZGlzYWJsZUxvZyxcbiAgZGlzYWJsZVdhcm5pbmdzOiB1dGlscy5kaXNhYmxlV2FybmluZ3MsXG4gIGV4dHJhY3RWZXJzaW9uOiB1dGlscy5leHRyYWN0VmVyc2lvbixcbiAgc2hpbUNyZWF0ZU9iamVjdFVSTDogdXRpbHMuc2hpbUNyZWF0ZU9iamVjdFVSTCxcbiAgZGV0ZWN0QnJvd3NlcjogdXRpbHMuZGV0ZWN0QnJvd3Nlci5iaW5kKHV0aWxzKVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogT1BFTkVEXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IE9QRU5FRCA9ICdPUEVORUQnO1xuLyoqXG4gKiBDTE9TRURcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgQ0xPU0VEID0gJ0NMT1NFRCc7XG4vKipcbiAqIENMT1NJTkdcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgQ0xPU0lORyA9ICdDTE9TSU5HJztcbi8qKlxuICogQ09OTkVDVEVEXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IENPTk5FQ1RFRCA9ICdDT05ORUNURUQnO1xuLyoqXG4gKiBOT1RfQ09OTkVDVEVEXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IE5PVF9DT05ORUNURUQgPSAnTk9UX0NPTk5FQ1RFRCc7XG4vKipcbiAqIFdBU19DT05ORUNURURcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgV0FTX0NPTk5FQ1RFRCA9ICdXQVNfQ09OTkVDVEVEJztcbi8qKlxuICogT1dORVJcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgT1dORVIgPSAnT1dORVInO1xuLyoqXG4gKiBNT0RFUkFUT1JcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgTU9ERVJBVE9SID0gJ01PREVSQVRPUic7XG4vKipcbiAqIFBBUlRJQ0lQQU5UXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFBBUlRJQ0lQQU5UID0gJ1BBUlRJQ0lQQU5UJztcbi8qKlxuICogTk9ORVxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBOT05FID0gJ05PTkUnO1xuLyoqXG4gKiBPbmdvaW5nIGludml0YXRpb25cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgT05HT0lORyA9ICdPTkdPSU5HJztcbi8qKlxuICogQWNjZXB0ZWQgaW52aXRhdGlvblxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBBQ0NFUFRFRCA9ICdBQ0NFUFRFRCc7XG4vKipcbiAqIFJlamVjdGVkIGludml0YXRpb25cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgUkVKRUNURUQgPSAnUkVKRUNURUQnO1xuLyoqXG4gKiBDYW5jZWxlZCBpbnZpdGF0aW9uXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IENBTkNFTEVEID0gJ0NBTkNFTEVEJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3V0aWwvY29uc3RhbnRzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge05PTkUsIE9QRU5FRCwgQ0xPU0VELCBDT05ORUNURUQsIE5PVF9DT05ORUNURUQsIFdBU19DT05ORUNURUQsIE9XTkVSfSBmcm9tICcuL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgY2FjaGUgZnJvbSAnLi91dGlsL2NhY2hlJztcbmltcG9ydCBQYXJ0aWNpcGFudCBmcm9tICcuL1BhcnRpY2lwYW50JztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vTWVzc2FnZSc7XG5pbXBvcnQgTG9jYWwgZnJvbSAnLi9zdHJlYW0vTG9jYWwnO1xuaW1wb3J0IEludml0ZSBmcm9tICcuL0ludml0ZSc7XG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi4vZGVmaW5pdGlvbnMvRXZlbnRzJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuL3V0aWwvTG9nJztcbmltcG9ydCB7UkVKRUNURUQsIENBTkNFTEVEfSBmcm9tICcuL3V0aWwvY29uc3RhbnRzJztcblxuY29uc3QgX2pvaW5Sb29tID0gKHJvb20sIHJvbGUpID0+IHtcblx0aWYgKHJvb20uc3RhdHVzICE9PSBDTE9TRUQpIHtcblx0XHRjb25zdCBwYXJ0aWNpcGFudCA9IHtcblx0XHRcdHN0YXR1czogQ09OTkVDVEVELFxuXHRcdFx0dXNlckFnZW50OiBjYWNoZS51c2VyQWdlbnQsXG5cdFx0XHRfam9pbmVkOiBEYXRhU3luYy50cygpXG5cdFx0fTtcblx0XHRpZihyb2xlKSB7XG5cdFx0XHRwYXJ0aWNpcGFudC5yb2xlID0gcm9sZTtcblx0XHR9XG5cdFx0TG9nLncoJ1Jvb20jam9pbicsIFtwYXJ0aWNpcGFudCwgYF8vcm9vbXMvJHtyb29tLnVpZH0vcGFydGljaXBhbnRzLyR7Y2FjaGUudXNlci51aWR9YF0pO1xuXHRcdHJldHVybiBEYXRhU3luY1xuXHRcdFx0LnVwZGF0ZShgXy9yb29tcy8ke3Jvb20udWlkfS9wYXJ0aWNpcGFudHMvJHtjYWNoZS51c2VyLnVpZH1gLCBwYXJ0aWNpcGFudClcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0RGF0YVN5bmNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHtyb29tLnVpZH0vcGFydGljaXBhbnRzLyR7Y2FjaGUudXNlci51aWR9L3N0YXR1c2ApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0KFdBU19DT05ORUNURUQpO1xuXHRcdFx0XHRyZXR1cm4gcm9vbTtcblx0XHRcdH0pO1xuXHR9XG5cdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ2NhblxcJ3Qgam9pbiBhIGNsb3NlIHJvb20nKSk7XG59O1xuXG4vKipcbiAqIFJvb20gaW5mb3JtYXRpb25cbiAqIEBhY2Nlc3MgcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb20ge1xuXHQvKipcblx0ICogQ3JlYXRlIGEgcm9vbVxuXHQgKiBAcGFyYW0ge1dlYmNvbS9hcGkuRGF0YVNuYXBzaG90fE9iamVjdH0gc25hcERhdGEgVGhlIGRhdGEgc25hcHNob3Rcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICovXG5cdGNvbnN0cnVjdG9yKHNuYXBEYXRhKSB7XG5cdFx0bGV0IHZhbHVlcyA9IHNuYXBEYXRhO1xuXHRcdGlmKHNuYXBEYXRhICYmIHNuYXBEYXRhLnZhbCAmJiB0eXBlb2Ygc25hcERhdGEudmFsID09PSAnZnVuY3Rpb24nKXtcblx0XHRcdHZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIHNuYXBEYXRhLnZhbCgpLCB7dWlkOiBzbmFwRGF0YS5uYW1lKCl9KTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogVGhlIHJvb20gdW5pcXVlIGlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHZhbHVlcy51aWQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHJvb20gbmFtZVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5uYW1lID0gdmFsdWVzLm5hbWU7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGxvY2FsIHN0cmVhbSBvZiB0aGUgcm9vbVxuXHRcdCAqIEB0eXBlIHtMb2NhbH1cblx0XHQgKi9cblx0XHR0aGlzLmxvY2FsU3RyZWFtID0ge307XG5cdFx0LyoqXG5cdFx0ICogVGhlIHJvb20gb3duZXIgdWlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLm93bmVyID0gdmFsdWVzLm93bmVyO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSByb29tIHN0YXR1czpcblx0XHQgKiAtIE9QRU5FRFxuXHRcdCAqIC0gQ0xPU0VEXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnN0YXR1cyA9IHZhbHVlcy5zdGF0dXM7XG5cblx0XHQvKipcblx0XHQgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgcm9vbSBpcyBwdWJsaWMgc28gYWxsIHVzZXJzIGNhbiBqb2luXG5cdFx0ICogQHR5cGUge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGhpcy5fcHVibGljID0gISF2YWx1ZXMuX3B1YmxpYztcblxuXHRcdC8qKlxuXHRcdCAqIEFkZGl0aW9uYWwgcm9vbSBpbmZvcm1hdGlvbnNcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuZXh0cmEgPSB2YWx1ZXMuZXh0cmE7XG5cblx0XHQvKipcblx0XHQgKiBMaXN0IG9mIGRlY2xhcmVkIGNhbGxiYWNrc1xuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5fY2FsbGJhY2tzID0ge307XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIHBhcnRpY2lwYW50cy5cblx0ICogVGhpcyB3aWxsIG9ubHkgd29yayBpZiB0aGUgdXNlciBpcyBlaXRoZXIgYSBwYXJ0aWNpcGFudCBvciB0aGUgb3duZXIgb2YgdGhlIHJvb20uXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFBhcnRpY2lwYW50W10sIEVycm9yPn1cblx0ICovXG5cdHBhcnRpY2lwYW50cygpIHtcblx0XHRyZXR1cm4gRGF0YVN5bmMubGlzdChgXy9yb29tcy8ke3RoaXMudWlkfS9wYXJ0aWNpcGFudHNgLCBQYXJ0aWNpcGFudCwgdGhpcy51aWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbGlzdCBvZiBtZXNzYWdlcy5cblx0ICogVGhpcyB3aWxsIG9ubHkgd29yayBpZiB0aGUgdXNlciBpcyBlaXRoZXIgYSBwYXJ0aWNpcGFudCBvciB0aGUgb3duZXIgb2YgdGhlIHJvb20uXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8TWVzc2FnZVtdLCBFcnJvcj59XG5cdCAqL1xuXHRtZXNzYWdlcygpIHtcblx0XHRyZXR1cm4gRGF0YVN5bmMubGlzdChgXy9yb29tcy8ke3RoaXMudWlkfS9tZXNzYWdlc2AsIE1lc3NhZ2UsIHRoaXMudWlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGxpc3Qgb2Ygc3RyZWFtc1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfc3RyZWFtcyhsb2NhbFN0cmVhbXMpIHtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIGxpc3QgYSBSb29tXFwncyBzdHJlYW1zLicpKTtcblx0XHR9XG5cdFx0cmV0dXJuIERhdGFTeW5jLmdldChgXy9yb29tcy8ke3RoaXMudWlkfS9zdHJlYW1zYClcblx0XHRcdC50aGVuKHNuYXBEYXRhID0+IHtcblx0XHRcdFx0Y29uc3QgdmFsdWVzID0gc25hcERhdGEudmFsKCk7XG5cdFx0XHRcdExvZy5kKCdSb29tc35fc3RyZWFtcycsIHZhbHVlcyk7XG5cdFx0XHRcdGlmKHZhbHVlcykge1xuXHRcdFx0XHRcdHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZXMpLm1hcChrZXkgPT4gT2JqZWN0LmFzc2lnbih7dWlkOiBrZXksIHJvb21JZDogdGhpcy51aWR9LCB2YWx1ZXNba2V5XSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihzdHJlYW1zID0+IHN0cmVhbXMuZmlsdGVyKHN0cmVhbSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCgnb24gcGFzc2UgcGFyIGljaSBldCDDp2EgbWFyY2hlJykpO1xuXHRcdFx0XHRyZXR1cm4gbG9jYWxTdHJlYW1zID09PSAoc3RyZWFtLmRldmljZSA9PT0gY2FjaGUuZGV2aWNlICYmIHN0cmVhbS5mcm9tID09PSBjYWNoZS51c2VyLnVpZCk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKHN0cmVhbXMgPT4gc3RyZWFtcy5tYXAoY2FjaGUuc3RyZWFtc1tgZ2V0JHtsb2NhbFN0cmVhbXMgPyAnU2hhcmVkJyA6ICdSZW1vdGUnfWBdLmJpbmQoY2FjaGUuc3RyZWFtcykpKVxuXHRcdFx0LnRoZW4oc3RyZWFtcyA9PiBzdHJlYW1zLmZpbHRlcihzdHJlYW0gPT4gc3RyZWFtICE9PSBudWxsKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIGxvY2FsbHkgcHVibGlzaGVkIHN0cmVhbXMuIFRoZSBzdHJlYW1zIHB1Ymxpc2hlZCB3aXRoIGFub3RoZXIgZGV2aWNlIHdvbid0IGJlIHZpc2libGUgaGVyZVxuXHQgKiBUaGlzIHdpbGwgb25seSB3b3JrIGlmIHRoZSB1c2VyIGlzIGVpdGhlciBhIHBhcnRpY2lwYW50IG9yIHRoZSBvd25lciBvZiB0aGUgcm9vbS5cblx0ICogQHJldHVybiB7UHJvbWlzZTxMb2NhbFtdLCBFcnJvcj59XG5cdCAqL1xuXHRsb2NhbFN0cmVhbXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0cmVhbXModHJ1ZSlcblx0XHRcdC5jYXRjaChMb2cucignUm9vbX5sb2NhbFN0cmVhbXMnKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIHJlbW90ZWx5IHB1Ymxpc2hlZCBzdHJlYW1zLlxuXHQgKiBUaGlzIHdpbGwgb25seSB3b3JrIGlmIHRoZSB1c2VyIGlzIGVpdGhlciBhIHBhcnRpY2lwYW50IG9yIHRoZSBvd25lciBvZiB0aGUgcm9vbS5cblx0ICogQHJldHVybiB7UHJvbWlzZTxSZW1vdGVbXSwgRXJyb3I+fVxuXHQgKi9cblx0cmVtb3RlU3RyZWFtcygpIHtcblx0XHRjb25zb2xlLmxvZygnb24gdmV1dCByw6ljdXDDqXJlciBsZXMgcmVtb3RlcycpO1xuXHRcdHJldHVybiB0aGlzLl9zdHJlYW1zKGZhbHNlKVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSb29tfnJlbW90ZVN0cmVhbXMnKSk7XG5cdH1cblxuXHQvKipcblx0ICogSW52aXRlIHVzZXJzIHRvIHRoZSByb29tLiB0aGlzIHdpbGwgb25seSB3b3JrIGlmIHRoZSBjdXJyZW50IFVzZXIgaXMgdGhlIG93bmVyIG9yIGEgbW9kZXJhdG9yIG9mIHRoaXMgUm9vbS5cblx0ICogVGhpcyB3aWxsIGNyZWF0ZSB0aGUgaW52aXRhdGlvbiBhbmQgYWRkIHRoZSB1c2VyIHRvIHRoZSBwYXJ0aWNpcGFudHMgbGlzdC5cblx0ICogQHBhcmFtIHtVc2VyW119IHVzZXJzIHRoZSB1c2VycyB0byBpbnZpdGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtyb2xlPSdOT05FJ10gdGhlIHJvbGUgb2YgdGhlIGludml0ZWVcblx0ICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXSBhIG1lc3NhZ2UgdG8gYWRkIHRvIHRoZSBpbnZpdGVcblx0ICogQHJldHVybiB7UHJvbWlzZTx7cm9vbTogUm9vbSwgaW52aXRlczogSW52aXRlW119LCBFcnJvcj59XG5cdCAqL1xuXHRpbnZpdGUodXNlcnMsIHJvbGUgPSBOT05FLCBtZXNzYWdlKSB7XG5cdFx0Y29uc3Rcblx0XHRcdF9wYXRoID0gdXNlciA9PiBgXy9yb29tcy8ke3RoaXMudWlkfS9wYXJ0aWNpcGFudHMvJHt1c2VyLnVpZH1gLFxuXHRcdFx0X2RhdGEgPSB7XG5cdFx0XHRcdHN0YXR1czogTk9UX0NPTk5FQ1RFRCxcblx0XHRcdFx0cm9sZTogcm9sZSB8fCBOT05FXG5cdFx0XHR9O1xuXHRcdC8vIEFkZCB1c2VycyBhcyBwYXJ0aWNpcGFudCBzbyB0aGV5IGNhbiBqb2luIHRoZSByb29tXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKHVzZXJzLm1hcCh1c2VyID0+IERhdGFTeW5jLnNldChfcGF0aCh1c2VyKSwgX2RhdGEpKSlcblx0XHRcdC8vIFNlbmQgaW52aXRlc1xuXHRcdFx0LnRoZW4oKCkgPT4gUHJvbWlzZS5hbGwodXNlcnMubWFwKHVzZXIgPT4gSW52aXRlLnNlbmQodXNlciwgdGhpcywgbWVzc2FnZSkpKSlcblx0XHRcdC50aGVuKGludml0ZXMgPT4ge1xuXHRcdFx0XHRjb25zdCByZW1vdmVQYXJ0aWNpcGFudCA9IGludml0ZSA9PiBEYXRhU3luYy5yZW1vdmUoYF8vcm9vbXMvJHtpbnZpdGUucm9vbX0vcGFydGljaXBhbnRzLyR7aW52aXRlLnRvfWApO1xuXHRcdFx0XHRpbnZpdGVzLmZvckVhY2goaW52aXRlID0+IHtcblx0XHRcdFx0XHRpbnZpdGUub24oUkVKRUNURUQsIHJlbW92ZVBhcnRpY2lwYW50KTtcblx0XHRcdFx0XHRpbnZpdGUub24oQ0FOQ0VMRUQsIHJlbW92ZVBhcnRpY2lwYW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiB7cm9vbTogdGhpcywgaW52aXRlc307XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGUgPT4ge1xuXHRcdFx0XHRMb2cuZSgnUm9vbX5pbnZpdGUnLCBlKTtcblx0XHRcdFx0dXNlcnMuZm9yRWFjaCh1c2VyID0+IERhdGFTeW5jLnJlbW92ZShgXy9yb29tcy8ke3RoaXMudWlkfS9wYXJ0aWNpcGFudHMvJHt1c2VyLnVpZH1gKSk7XG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgZm9yIGEgc3BlY2lmaWMgZXZlbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lICh7QGxpbmsgRXZlbnRzL1Jvb219KTpcblx0ICogLSBQQVJUSUNJUEFOVF9BRERFRDogYSBwYXJ0aWNpcGFudCBpcyBhZGRlZCB0byB0aGUgcm9vbVxuXHQgKiAtIFBBUlRJQ0lQQU5UX0NIQU5HRUQ6IGEgcGFydGljaXBhbnQgY2hhbmdlcyBoaXMgc3RhdHVzIChqb2luKVxuXHQgKiAtIFBBUlRJQ0lQQU5UX1JFTU9WRUQ6IGEgcGFydGljaXBhbnQgbGVhdmUgdGhlIHJvb21cblx0ICogLSBNRVNTQUdFX0FEREVEOiBuZXcgaW5zdGFudCBtZXNzYWdlXG5cdCAqIC0gTUVTU0FHRV9DSEFOR0VEOiBhbiBleGlzdGluZyBtZXNzYWdlIGhhcyBiZWVuIG1vZGlmaWVkIChtb2RlcmF0aW9uKVxuXHQgKiAtIE1FU1NBR0VfUkVNT1ZFRDogYSBtZXNzYWdlIGhhcyBiZWVuIHJlbW92ZWQgKG1vZGVyYXRpb24pXG5cdCAqIC0gU1RSRUFNX1BVQkxJU0hFRDogYSBwYXJ0aWNpcGFudCBwdWJsaXNoZWQgYSBuZXcgU3RyZWFtXG5cdCAqIC0gU1RSRUFNX0NIQU5HRUQ6IGEgcGFydGljaXBhbnQgY2hhbmdlcyBoaXMgcHVibGlzaGVkIFN0cmVhbSAobW9kZXJhdGlvbiwgdHlwZSwgbXV0ZS4uLilcblx0ICogLSBTVFJFQU1fVU5QVUJMSVNIRUQ6IGEgcGFydGljaXBhbnQgc3RvcHMgdGhlIHB1YmxpY2F0aW9uIG9mIGhpcyBTdHJlYW1cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZvciB0aGUgZXZlbnQsIHRoZSBhcmd1bWVudHMgZGVwZW5kcyBvbiB0aGUgdHlwZSBvZiBldmVudDpcblx0ICogLSBQQVJUSUNJUEFOVF8qIDogY2FsbGJhY2soe0BsaW5rIFBhcnRpY2lwYW50fSBwIFssIEVycm9yIGVdKVxuXHQgKiAtIE1FU1NBR0VfKiA6IGNhbGxiYWNrKHtAbGluayBNZXNzYWdlfSBtIFssIEVycm9yIGVdKVxuXHQgKiAtIFNUUkVBTV8qIDogY2FsbGJhY2soe0BsaW5rIFJlbW90ZX0gcyBbLCBFcnJvciBlXSlcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLlF1ZXJ5fmNhbmNlbENhbGxiYWNrfSBjYW5jZWxDYWxsYmFjayBUaGUgZXJyb3IgY2FsbGJhY2sgZm9yIHRoZSBldmVudCwgdGFrZXMgYW4gRXJyb3IgYXMgb25seSBhcmd1bWVudFxuXHQgKi9cblx0b24oZXZlbnQsIGNhbGxiYWNrLCBjYW5jZWxDYWxsYmFjaykge1xuXHRcdGNvbnN0XG5cdFx0XHRwYXRoID0gRXZlbnRzLnJvb20udG9QYXRoKGV2ZW50KSh0aGlzKSxcblx0XHRcdG9iaiA9IEV2ZW50cy5yb29tLnRvQ2xhc3MoZXZlbnQpO1xuXHRcdGlmKHBhdGggJiYgb2JqKSB7XG5cdFx0XHRjb25zdCB0eXBlZENhbGxiYWNrID0gc25hcERhdGEgPT4ge1xuXHRcdFx0XHRpZighL15TVFJFQU1fL2kudGVzdChldmVudCkgfHwgIXNuYXBEYXRhKSB7XG5cdFx0XHRcdFx0TG9nLmkoYFJvb21+b24oJHtldmVudH0pYCwgc25hcERhdGEgPyBuZXcgb2JqKHNuYXBEYXRhKSA6IG51bGwpO1xuXHRcdFx0XHRcdGNhbGxiYWNrKHNuYXBEYXRhID8gbmV3IG9iaihzbmFwRGF0YSkgOiBudWxsKTtcblx0XHRcdFx0fSBlbHNlIGlmKGNhY2hlLnVzZXIpIHtcblx0XHRcdFx0XHRjb25zdCBzdHJlYW1EYXRhID0gT2JqZWN0LmFzc2lnbih7dWlkOiBzbmFwRGF0YS5uYW1lKCksIHJvb21JZDogdGhpcy51aWR9LCBzbmFwRGF0YS52YWwoKSk7XG5cdFx0XHRcdFx0aWYoc3RyZWFtRGF0YS5mcm9tICE9PSBjYWNoZS51c2VyLnVpZCB8fCBzdHJlYW1EYXRhLmRldmljZSAhPT0gY2FjaGUuZGV2aWNlKSB7XG5cdFx0XHRcdFx0XHRjb25zdCByZW1vdGVTdHJlYW0gPSBjYWNoZS5zdHJlYW1zLmdldFJlbW90ZShzdHJlYW1EYXRhKTtcblx0XHRcdFx0XHRcdExvZy5pKGBSb29tfm9uKCR7ZXZlbnR9KWAsIHJlbW90ZVN0cmVhbSk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayhyZW1vdGVTdHJlYW0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdERhdGFTeW5jLm9uKHBhdGgsIGV2ZW50LCB0eXBlZENhbGxiYWNrLCBjYW5jZWxDYWxsYmFjayk7XG5cdFx0XHRpZighdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSkge1xuXHRcdFx0XHR0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gW107XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jYWxsYmFja3NbZXZlbnRdLnB1c2godHlwZWRDYWxsYmFjayk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFNlbmQgYW4gaW5zdGFudCBtZXNzYWdlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHNlbmRcblx0ICogQHJldHVybiB7UHJvbWlzZTxNZXNzYWdlPn1cblx0ICovXG5cdHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcblx0XHRyZXR1cm4gTWVzc2FnZS5zZW5kKHRoaXMsIG1lc3NhZ2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFB1Ymxpc2ggYSBsb2NhbCBzdHJlYW1cblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHN0cmVhbSB0eXBlLCBzZWUge0BsaW5rIFN0cmVhbVR5cGVzfSBmb3IgcG9zc2libGUgdmFsdWVzXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gW2xvY2FsU3RyZWFtQ29udGFpbmVyXSBUaGUgZWxlbWVudCB0aGUgc3RyZWFtIGlzIGF0dGFjaGVkIHRvLiBDYW4gYmUgbnVsbCBpZiBhbHJlYWR5IHNwZWNpZmllZCBpbiB7QGxpbmsgQ29uZmlnfS5cblx0ICogQHBhcmFtIHtNZWRpYVN0cmVhbUNvbnN0cmFpbnRzfSBbY29uc3RyYWludHNdIFRoZSBzdHJlYW0gY29uc3RyYWludHMuIElmIG5vdCBkZWZpbmVkLCB0aGUgY29uc3RyYWludHMgZGVmaW5lZCBpbiB7QGxpbmsgQ29uZmlnfSB3aWxsIGJlIHVzZWQuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPExvY2FsLCBFcnJvcj59XG5cdCAqL1xuXHRzaGFyZSh0eXBlLCBsb2NhbFN0cmVhbUNvbnRhaW5lciwgY29uc3RyYWludHMpIHtcblx0XHRMb2cuaSgnUm9vbX5zaGFyZScsIHt0eXBlLCBsb2NhbFN0cmVhbUNvbnRhaW5lciwgY29uc3RyYWludHN9KTtcblx0XHRyZXR1cm4gTG9jYWwuc2hhcmUodGhpcy51aWQsIHR5cGUsIGxvY2FsU3RyZWFtQ29udGFpbmVyLCBjb25zdHJhaW50cyk7XG5cdH1cblxuXHQvKipcblx0ICogZ2V0IGEgbG9jYWwgc3RyZWFtIGluIHZpZGVvIHRhZ1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgc3RyZWFtIHR5cGUsIHNlZSB7QGxpbmsgU3RyZWFtVHlwZXN9IGZvciBwb3NzaWJsZSB2YWx1ZXNcblx0ICogQHBhcmFtIHtFbGVtZW50fSBbbG9jYWxTdHJlYW1Db250YWluZXJdIFRoZSBlbGVtZW50IHRoZSBzdHJlYW0gaXMgYXR0YWNoZWQgdG8uIENhbiBiZSBudWxsIGlmIGFscmVhZHkgc3BlY2lmaWVkIGluIHtAbGluayBDb25maWd9LlxuXHQgKiBAcGFyYW0ge01lZGlhU3RyZWFtQ29uc3RyYWludHN9IFtjb25zdHJhaW50c10gVGhlIHN0cmVhbSBjb25zdHJhaW50cy4gSWYgbm90IGRlZmluZWQsIHRoZSBjb25zdHJhaW50cyBkZWZpbmVkIGluIHtAbGluayBDb25maWd9IHdpbGwgYmUgdXNlZC5cblx0ICogQHJldHVybnMge1Byb21pc2U8TG9jYWwsIEVycm9yPn1cblx0ICovXG5cdGdldExvY2FsVmlkZW8odHlwZSwgbG9jYWxTdHJlYW1Db250YWluZXIsIGNvbnN0cmFpbnRzKSB7XG5cdFx0TG9nLmkoJ1Jvb21+Z2V0TG9jYWxWaWRlbycsIHt0eXBlLCBsb2NhbFN0cmVhbUNvbnRhaW5lciwgY29uc3RyYWludHN9KTtcblx0XHRjb25zb2xlLmxvZygnUm9vbX5nZXRMb2NhbFZpZGVvJyk7XG5cdFx0cmV0dXJuIExvY2FsLmdldExvY2FsVmlkZW8odGhpcy51aWQsIHR5cGUsIGxvY2FsU3RyZWFtQ29udGFpbmVyLCBjb25zdHJhaW50cylcblx0XHQudGhlbiggbG9jYWxTdHJlYW0gPT4ge1xuXHRcdFx0dGhpcy5sb2NhbFN0cmVhbSA9IGxvY2FsU3RyZWFtO1xuXHRcdFx0cmV0dXJuIGxvY2FsU3RyZWFtO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIHB1Ymxpc2ggYSBsb2NhbCBzdHJlYW1cblx0ICogQHJldHVybnMge0xvY2FsfVxuXHQgKi9cblx0cHVibGlzaCgpIHtcblx0XHRMb2cuaSgnUm9vbX5wdWJsaXNoIExvY2FsJyk7XG5cdFx0cmV0dXJuIExvY2FsLnB1Ymxpc2godGhpcy5sb2NhbFN0cmVhbSk7XG5cdH1cblxuXHQvKipcblx0ICogSm9pbiB0aGUgcm9vbS4gU2V0cyB0aGUgY29ubmVjdGVkIHN0YXR1cyBvZiB0aGUgY3VycmVudCBwYXJ0aWNpcGFudCB0byBDT05ORUNURUQuXG5cdCAqIEByZXR1cm4ge1Byb21pc2V9XG5cdCAqL1xuXHRqb2luKCkge1xuXHRcdExvZy5pKCdSb29tfmpvaW4nLCB0aGlzKTtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIGpvaW4gYSBSb29tLicpKTtcblx0XHR9XG5cdFx0cmV0dXJuIF9qb2luUm9vbSh0aGlzKS5jYXRjaChMb2cucignUm9vbX5qb2luJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIExlYXZlIHRoZSByb29tLiBTZXRzIHRoZSBjb25uZWN0ZWQgc3RhdHVzIG9mIHRoZSBjdXJyZW50IHBhcnRpY2lwYW50IHRvIFdBU19DT05ORUNURUQsIGRlbGV0ZXMgbWVkaWFzIGFuZCBjYWxsYmFja3MsIGNsb3NlcyBXZWJSVEMgc3RhY2tzIGluIHVzZS5cblx0ICogQHJldHVybiB7UHJvbWlzZX1cblx0ICovXG5cdGxlYXZlKCkge1xuXHRcdGlmKCFjYWNoZS51c2VyKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdPbmx5IGFuIGF1dGhlbnRpY2F0ZWQgdXNlciBjYW4gbGVhdmUgYSBSb29tLicpKTtcblx0XHR9XG5cdFx0TG9nLmkoJ1Jvb21+bGVhdmUnLCB0aGlzKTtcblx0XHQvLyBDYW5jZWwgb25EaXNjb25uZWN0XG5cdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL3Jvb21zLyR7dGhpcy51aWR9L3BhcnRpY2lwYW50cy8ke2NhY2hlLnVzZXIudWlkfS9zdGF0dXNgKS5jYW5jZWwoKTtcblxuXHRcdC8vIERpc2Nvbm5lY3QgdXNlcidzIGNhbGxiYWNrc1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuX2NhbGxiYWNrcykuZm9yRWFjaChldmVudCA9PiB7XG5cdFx0XHREYXRhU3luYy5vZmYoRXZlbnRzLnJvb20udG9QYXRoKGV2ZW50KSh0aGlzKSwgZXZlbnQpO1xuXHRcdH0pO1xuXHRcdC8vIFVucHVibGlzaCBhbGwgcHVibGlzaGVkIGxvY2FsIHN0cmVhbXNcblx0XHR0aGlzLmxvY2FsU3RyZWFtcygpLnRoZW4obG9jYWxTdHJlYW1zID0+IGxvY2FsU3RyZWFtcy5mb3JFYWNoKGxvY2FsU3RyZWFtID0+IGxvY2FsU3RyZWFtLmNsb3NlKCkpKTtcblx0XHQvLyBVbnB1Ymxpc2ggbG9jYWwgc3RyZWFtIGV2ZW4gaWYgbm90IHB1Ymxpc2hlZFxuXHRcdGlmICh0aGlzLmxvY2FsU3RyZWFtKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnb24gdmEgY2xvZXIgbGUgbG9jYWwnKTtcblx0XHRcdC8vIHRoaXMubG9jYWxTdHJlYW0uY2xvc2UoKTtcblx0XHRcdGNvbnNvbGUubG9nKCdvdWYgY2VzdCBmYWl0Jyk7XG5cdFx0fVxuXHRcdC8vIFVuc3Vic2NyaWJlIGFsbCByZW1vdGUgc3RyZWFtc1xuXHRcdGNvbnNvbGUubG9nKCdvbiB2YSBkw6lzb3VzY3JpcmUgbGVzIHJlbW90ZVN0cmVhbXMnKTtcblx0XHR0aGlzLnJlbW90ZVN0cmVhbXMoKS50aGVuKHJlbW90ZVN0cmVhbXMgPT4gcmVtb3RlU3RyZWFtcy5mb3JFYWNoKHJlbW90ZVN0cmVhbSA9PiByZW1vdGVTdHJlYW0udW5TdWJzY3JpYmUoKSkpO1xuXHRcdGNvbnNvbGUubG9nKCdvbiBhIGTDqXNvdXNjcml0IGxlcyByZW1vdGVTdHJlYW1zJyk7XG5cdFx0Ly8gVXBkYXRlIHN0YXR1c1xuXHRcdHJldHVybiBEYXRhU3luYy5zZXQoYF8vcm9vbXMvJHt0aGlzLnVpZH0vcGFydGljaXBhbnRzLyR7Y2FjaGUudXNlci51aWR9L3N0YXR1c2AsIFdBU19DT05ORUNURUQpXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1Jvb21+bGVhdmUnKSk7XG5cdH1cblxuXHQvKipcblx0ICogTGVhdmVzICYgY2xvc2UgdGhlIFJvb20uIE9ubHkgdGhlIG93bmVyL21vZGVyYXRvciBjYW4gY2xvc2UgYSByb29tLlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlfVxuXHQgKi9cblx0Y2xvc2UoKSB7XG5cdFx0TG9nLmkoJ1Jvb21+Y2xvc2UnLCB0aGlzKTtcblx0XHR0aGlzLnN0YXR1cyA9IENMT1NFRDtcblx0XHRyZXR1cm4gdGhpcy5sZWF2ZSgpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHJldHVybiBEYXRhU3luYy51cGRhdGUoYHJvb21zLyR7dGhpcy51aWR9YCwge1xuXHRcdFx0XHRcdHN0YXR1czogQ0xPU0VELFxuXHRcdFx0XHRcdF9jbG9zZWQ6IERhdGFTeW5jLnRzKClcblx0XHRcdFx0fSk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gRGF0YVN5bmMucmVtb3ZlKGBfL3Jvb21zLyR7dGhpcy51aWR9YCk7XG5cdFx0XHRcdFx0Ly8gLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoYGxlIHJlbW92ZSBkZSBfIHJvb21zIG5lIHBhc3NlIHBhcyAke2Vycm9yfWApKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1Jvb21+Y2xvc2UnKSk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGEgcm9vbVxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW25hbWVdIFRoZSByb29tIG5hbWVcblx0ICogQHBhcmFtIHtvYmplY3R9IFtleHRyYT1udWxsXSBFeHRyYSBpbmZvcm1hdGlvbnNcblx0ICogQHBhcmFtIHtib29sZWFufSBbcHVibGljUm9vbT1mYWxzZV0gSW5kaWNhdGVzIHB1YmxpYyByb29tXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFJvb20sIEVycm9yPn1cblx0ICovXG5cdHN0YXRpYyBjcmVhdGUgKG5hbWUsIGV4dHJhID0gbnVsbCwgcHVibGljUm9vbSA9IGZhbHNlKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBjcmVhdGUgYSBSb29tLicpKTtcblx0XHR9XG5cblx0XHRjb25zdFxuXHRcdFx0cm9vbU1ldGFEYXRhID0ge1xuXHRcdFx0XHRvd25lcjogY2FjaGUudXNlci51aWQsXG5cdFx0XHRcdF9wdWJsaWM6IHB1YmxpY1Jvb20sXG5cdFx0XHRcdG5hbWU6IG5hbWUgfHwgYCR7Y2FjaGUudXNlci5uYW1lfS0ke0RhdGUubm93KCl9YFxuXHRcdFx0fSxcblx0XHRcdHJvb21GdWxsTWV0YURhdGEgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdFx0c3RhdHVzOiBPUEVORUQsXG5cdFx0XHRcdF9jcmVhdGVkOiBEYXRhU3luYy50cygpLFxuXHRcdFx0XHRleHRyYVxuXHRcdFx0fSwgcm9vbU1ldGFEYXRhKTtcblxuXHRcdGxldCByb29tID0gbnVsbDtcblx0XHQvLyBDcmVhdGUgcHVibGljIHJvb20gaW5mb3Ncblx0XHRyZXR1cm4gRGF0YVN5bmMucHVzaCgncm9vbXMnLCByb29tRnVsbE1ldGFEYXRhKVxuXHRcdFx0Ly8gQ3JlYXRlIHByaXZhdGUgcm9vbSBpbmZvc1xuXHRcdFx0LnRoZW4ocm9vbVJlZiA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdvbiBhIGNyw6nDqSBsYSByb29tIGRhbnMgd2ViY29tJyk7XG5cdFx0XHRcdHJvb20gPSBuZXcgUm9vbShPYmplY3QuYXNzaWduKHt1aWQ6IHJvb21SZWYubmFtZSgpfSwgcm9vbUZ1bGxNZXRhRGF0YSkpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnb24gYSBjcsOpw6kgbGEgcm9vbSBkYW5zIGxlIHJlYWNoJyk7XG5cdFx0XHRcdHJldHVybiBEYXRhU3luYy51cGRhdGUoYF8vcm9vbXMvJHtyb29tLnVpZH0vbWV0YWAsIHJvb21NZXRhRGF0YSk7XG5cdFx0XHR9KVxuXHRcdFx0Ly8gSm9pbiB0aGUgcm9vbVxuXHRcdFx0LnRoZW4oKCkgPT4gX2pvaW5Sb29tKHJvb20sIE9XTkVSKSlcblx0XHRcdC5jYXRjaChMb2cucignUm9vbSNjcmVhdGUnKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEge0BsaW5rIFJvb219IGZyb20gaXRzIGB1aWRgXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB1aWRcblx0ICogQHJldHVybnMge1Byb21pc2UuPFJvb20+fVxuXHQgKi9cblx0c3RhdGljIGdldCAodWlkKSB7XG5cdFx0cmV0dXJuIERhdGFTeW5jLmdldChgcm9vbXMvJHt1aWR9YClcblx0XHRcdC50aGVuKHNuYXBEYXRhID0+IHtcblx0XHRcdFx0aWYoc25hcERhdGEudmFsKCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IFJvb20oc25hcERhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvUm9vbS5qcyIsIi8qZXNsaW50IG1heC1wYXJhbXM6IFsyLCA1XSwgbWF4LWxlbjogWzAsIDEyMF0gKi9cbmltcG9ydCAqIGFzIExvZyBmcm9tICcuL0xvZyc7XG5pbXBvcnQgUmVhY2ggZnJvbSAnLi4vLi4vUmVhY2gnO1xuXG4vKipcbiAqIFZpZGVvIHJlc29sdXRpb24gcHJlc2V0c1xuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAdHlwZSB7e1VIRDoge3c6IG51bWJlciwgaDogbnVtYmVyLCBtaW46IHN0cmluZ30sIEZIRDoge3c6IG51bWJlciwgaDogbnVtYmVyLCBtaW46IHN0cmluZywgbWF4OiBzdHJpbmd9LCBIRDoge3c6IG51bWJlciwgaDogbnVtYmVyLCBtaW46IHN0cmluZywgbWF4OiBzdHJpbmd9LCBTVkdBOiB7dzogbnVtYmVyLCBoOiBudW1iZXIsIG1pbjogc3RyaW5nLCBtYXg6IHN0cmluZ30sIFNEOiB7dzogbnVtYmVyLCBoOiBudW1iZXIsIG1pbjogc3RyaW5nLCBtYXg6IHN0cmluZ30sIFZHQToge3c6IG51bWJlciwgaDogbnVtYmVyLCBtYXg6IHN0cmluZ319fVxuICovXG5jb25zdCBwcmVzZXRzID0ge1xuXHRVSEQ6IHt3OiAzODQwLCBoOiAyMTYwLCBtaW46ICdIRCd9LFxuXHRGSEQ6IHt3OiAxOTIwLCBoOiAxMDgwLCBtaW46ICdIRCcsIG1heDogJ1VIRCd9LFxuXHRIRDoge3c6IDEyODAsIGg6IDcyMCwgbWluOiAnU0QnLCBtYXg6ICdGSEQnfSxcblx0U1ZHQToge3c6IDgwMCwgaDogNjAwLCBtaW46ICdWR0EnLCBtYXg6ICdIRCd9LFxuXHRTRDoge3c6IDcyMCwgaDogNTc2LCBtaW46ICdWR0EnLCBtYXg6ICdIRCd9LFxuXHRWR0E6IHt3OiA2NDAsIGg6IDQ4MCwgbWF4OiAnU1ZHQSd9XG59O1xuXG4vKipcbiAqIEFzc2lnbiBkZXZpY2VJZCB0byBjb25zdHJhaW50XG4gKiBAcGFyYW0gY29uc3RyYWludFxuICogQHBhcmFtIGRldmljZUlkXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuY29uc3QgX2Fzc2lnbkRldmljZSA9IChjb25zdHJhaW50LCBkZXZpY2VJZCkgPT4ge1xuXHRpZihjb25zdHJhaW50ICYmIGRldmljZUlkKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oXG5cdFx0XHQvXigodXNlcil8KGVudmlyb25tZW50KSkkL2kudGVzdChkZXZpY2VJZCkgPyB7ZmFjaW5nTW9kZTogZGV2aWNlSWR9IDoge2RldmljZUlkfSxcblx0XHRcdGNvbnN0cmFpbnQgPT09IHRydWUgPyB7fSA6IGNvbnN0cmFpbnQpO1xuXHR9XG5cdHJldHVybiBjb25zdHJhaW50O1xufTtcblxuLyoqXG4gKiBIZWxwZXJzIGZvciBNZWRpYURldmljZXMgYW5kIE1lZGlhU3RyZWFtQ29uc3RyYWludHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcblx0LyoqXG5cdCAqIGZhY2luZ01vZGUgdmFsdWVzIHRvIHVzZSB3aXRoIGNvbnN0cmFpbnRzXG5cdCAqIEByZXR1cm5zIHt7VVNFUjogc3RyaW5nLCBFTlZJUk9OTUVOVDogc3RyaW5nfX1cblx0ICovXG5cdHN0YXRpYyBnZXQgZmFjaW5nTW9kZSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0VVNFUjogJ3VzZXInLFxuXHRcdFx0RU5WSVJPTk1FTlQ6ICdlbnZpcm9ubWVudCdcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEhlbHBlcnMgdG8gY3JlYXRlIGEgTWVkaWFTdHJlYW1Db25zdHJhaW50cyBjb25maWd1cmF0aW9uIG9iamVjdFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW58TWVkaWFUcmFja0NvbnN0cmFpbnRzfHN0cmluZ30gW3ZpZGVvQ29uc3RyYWludHM9J0hEJ10gYSBib29sZWFuLCBhIHZpZGVvIGNvbnN0cmFpbnRzIG9iamVjdCBvciBhIHByZXNldCBpZCAoVUhELCBGSEQsIEhELCBTVkdBLCBTRCwgVkdBKVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW58TWVkaWFUcmFja0NvbnN0cmFpbnRzfSBbYXVkaW9Db25zdHJhaW50cz10cnVlXSBhIGJvb2xlYW4gb3IgYW4gYXVkaW8gY29uc3RyYWludHMgb2JqZWN0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZT1pZGVhbF0gdHlwZSBvZiBjb25zdHJhaW50cyBmb3IgdmlkZW8gd2hlbiB1c2luZyBhIHByZXNldCAoZXhhY3QsbWluLG1heCBvciBpZGVhbClcblx0ICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBbdmlkZW9EZXZpY2VJZF0gdmlkZW8gaW5wdXQgZGV2aWNlIGlkIG9yIGZhY2luZ01vZGVcblx0ICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBbYXVkaW9EZXZpY2VJZF0gYXVkaW8gaW5wdXQgZGV2aWNlIGlkXG5cdCAqIEByZXR1cm5zIHtvYmplY3R9XG5cdCAqIEB0aHJvd3Mge0Vycm9yfVxuXHQgKlxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5IRCBBdWRpb1ZpZGVvIHdpdGggZGVmYXVsdCBkZXZpY2VzPC9jYXB0aW9uPlxuXHQgKiBsZXQgbXlDb25zdHJhaW50cyA9IFJlYWNoLm1lZGlhLmNvbnN0cmFpbnRzKCk7XG5cdCAqIGNvbnNvbGUubG9nKG15Q29uc3RyYWludHMpO1xuXHQgKlxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5GdWxsIEhEIFZpZGVvIHdpdGhvdXQgYXVkaW8gdXNpbmcgZGVmYXVsdCBkZXZpY2VzPC9jYXB0aW9uPlxuXHQgKiBsZXQgbXlDb25zdHJhaW50cyA9IFJlYWNoLm1lZGlhLmNvbnN0cmFpbnRzKCdGSEQnLCBmYWxzZSwgJ2V4YWN0Jyk7XG5cdCAqIGNvbnNvbGUubG9nKG15Q29uc3RyYWludHMpO1xuXHQgKi9cblx0c3RhdGljIGNvbnN0cmFpbnRzICh2aWRlb0NvbnN0cmFpbnRzID0gJ0hEJywgYXVkaW9Db25zdHJhaW50cyA9IHRydWUsIHR5cGUgPSAnaWRlYWwnLCB2aWRlb0RldmljZUlkLCBhdWRpb0RldmljZUlkKSB7XG5cdFx0bGV0IHZpZGVvID0gdmlkZW9Db25zdHJhaW50cztcblx0XHRpZiAodHlwZW9mIHZpZGVvQ29uc3RyYWludHMgPT09ICdzdHJpbmcnKXtcblx0XHRcdGlmKHByZXNldHNbdmlkZW9Db25zdHJhaW50cy50b1VwcGVyQ2FzZSgpXSkge1xuXHRcdFx0XHRjb25zdFxuXHRcdFx0XHRcdHByZXNldCA9IHByZXNldHNbdmlkZW9Db25zdHJhaW50cy50b1VwcGVyQ2FzZSgpXSxcblx0XHRcdFx0XHRkaW1Db25zdHJhaW50ID0gKGRpbSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoL14obWlufG1heHxleGFjdCkkLy50ZXN0KHR5cGUpKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHIgPSB7fTtcblx0XHRcdFx0XHRcdFx0clt0eXBlXSA9IHByZXNldFtkaW1dO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdG1pbjogcHJlc2V0Lm1pbiA/IHByZXNldHNbcHJlc2V0Lm1pbl1bZGltXSA6IHByZXNldFtkaW1dLFxuXHRcdFx0XHRcdFx0XHRpZGVhbDogcHJlc2V0W2RpbV0sXG5cdFx0XHRcdFx0XHRcdG1heDogcHJlc2V0Lm1heCA/IHByZXNldHNbcHJlc2V0Lm1heF1bZGltXSA6IHByZXNldFtkaW1dXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdHZpZGVvID0ge3dpZHRoOiBkaW1Db25zdHJhaW50KCd3JyksIGhlaWdodDogZGltQ29uc3RyYWludCgnaCcpfTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBWaWRlbyBSZXNvbHV0aW9uIHByZXNldCAoVUhELCBGSEQsIEhELCBTVkdBLCBTRCwgVkdBKScpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR2aWRlbyA9IF9hc3NpZ25EZXZpY2UodmlkZW8sIHZpZGVvRGV2aWNlSWQpO1xuXG5cdFx0Y29uc3QgYXVkaW8gPSBfYXNzaWduRGV2aWNlKGF1ZGlvQ29uc3RyYWludHMsIGF1ZGlvRGV2aWNlSWQpO1xuXG5cdFx0TG9nLmQoJ01lZGlhI2NvbnN0cmFpbnRzJywge3ZpZGVvLCBhdWRpb30pO1xuXHRcdHJldHVybiB7dmlkZW8sIGF1ZGlvfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IHN0cmVhbSBkaXNwbGF5IG5vZGUgZGVwZW5kaW5nIG9uIHN0cmVhbSB0eXBlXG5cdCAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtIFRoZSBNZWRpYVN0cmVhbSB0byBkaXNwbGF5XG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyIENvbnRhaW5lciBub2RlIGZvciBzdHJlYW1zXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gcHJldmlvdXMgUHJldmlvdXMgbm9kZSBmb3IgdGhlIHN0cmVhbVxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3ZvbHVtZT0uN10gdGhlIGRlZmF1bHQgdm9sdW1lXG5cdCAqIEByZXR1cm4ge0VsZW1lbnR9XG5cdCAqL1xuXHRzdGF0aWMgYXR0YWNoU3RyZWFtKG1lZGlhU3RyZWFtLCBjb250YWluZXIsIHByZXZpb3VzLCB2b2x1bWUgPSAuNykge1xuXHRcdGxldCB0YWdOYW1lID0gJyc7XG5cdFx0aWYobWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0YWdOYW1lID0gJ3ZpZGVvJztcblx0XHR9IGVsc2UgaWYobWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0YWdOYW1lID0gJ2F1ZGlvJztcblx0XHR9XG5cdFx0TG9nLmQoJ01lZGlhI2F0dGFjaFN0cmVhbScsIG1lZGlhU3RyZWFtLCB0YWdOYW1lKTtcblx0XHRpZiAodGFnTmFtZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRsZXQgX25vZGUgPSBwcmV2aW91cztcblx0XHRcdGlmICghX25vZGUgfHwgX25vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0YWdOYW1lKSB7XG5cdFx0XHRcdF9ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblx0XHRcdFx0X25vZGUuYXV0b3BsYXkgPSB0cnVlO1xuXHRcdFx0XHQvLyBzZXQgdGhlc2UgYXR0cmlidXRlcyBpbiBvcmRlciB0byBsYXVuY2ggdGhlIHZpZGVvIG9uIElPU1xuXHRcdFx0XHRpZiAoUmVhY2guYnJvd3Nlci5icm93c2VyID09PSAnc2FmYXJpJykge1xuXHRcdFx0XHRcdF9ub2RlLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLHRydWUpO1xuXHRcdFx0XHRcdC8vIF9ub2RlLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLHRydWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vX25vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywndmlkZW8vbXA0Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X25vZGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzFweCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY29udGFpbmVyKSB7XG5cdFx0XHRcdGlmIChwcmV2aW91cyAmJiBwcmV2aW91cyAhPT0gX25vZGUpIHtcblx0XHRcdFx0XHRjb250YWluZXIucmVwbGFjZUNoaWxkKF9ub2RlLCBwcmV2aW91cyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoIXByZXZpb3VzKSB7XG5cdFx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKF9ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0X25vZGUuc3JjT2JqZWN0ID0gbWVkaWFTdHJlYW07XG5cdFx0XHRfbm9kZS5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdExvZy5kKGB2aWRlby5vbnBsYXkgPSAke2V2ZW50LnR5cGV9YCk7XG5cdFx0XHRcdF9ub2RlLnNyY09iamVjdC5vbmFkZHRyYWNrID0gKHRyYWNrKSA9PiB7XG5cdFx0XHRcdFx0TG9nLmQoYFtMb2NhbF0gbGlzdGVuZXI6IHZpZGVvLm9uYWRkdHJhY2sgPSAke3RyYWNrLmxhYmVsfWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0XHRcdH07XG5cdFx0XHRcdF9ub2RlLnNyY09iamVjdC5vbnJlbW92ZXRyYWNrID0gKHRyYWNrKSA9PiB7XG5cdFx0XHRcdFx0TG9nLmQoYFtMb2NhbF0gbGlzdGVuZXI6IHZpZGVvLm9ucmVtb3ZldHJhY2sgPSAke3RyYWNrLmxhYmVsfWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0XHRcdH07XG5cdFx0XHRcdF9ub2RlLnNyY09iamVjdC5vbmluYWN0aXZlID0gKCkgPT4ge1xuXHRcdFx0XHRcdExvZy5kKGBbTG9jYWxdIGxpc3RlbmVyOiB2aWRlby5vbmluYWN0aXZlYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblx0XHRcdFx0fTtcblx0XHRcdFx0X25vZGUuc3JjT2JqZWN0Lm9ucGxheWluZyA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoYFtMb2NhbF0gbGlzdGVuZXI6IHZpZGVvLm9ucGxheWluZyA9ICR7ZXZlbnQudHlwZX1gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRfbm9kZS5zcmNPYmplY3Qub25zdGFsbGVkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhgW0xvY2FsXSBsaXN0ZW5lcjogdmlkZW8ub25zdGFsbGVkID0gJHtldmVudC50eXBlfWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0XHRcdH07XG5cdFx0XHRcdF9ub2RlLnNyY09iamVjdC5vbnN1c3BlbmQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmRlYnVnKGBbTG9jYWxdIGxpc3RlbmVyOiB2aWRlby5vbnN1c3BlbmQgPSAke2V2ZW50LnR5cGV9YCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblx0XHRcdFx0XHRjb25zb2xlLmRlYnVnKGV2ZW50KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdFx0XHRcdGNvbnNvbGUuZGVidWcoJ29uIHBhc3NlIGzDoCcpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fSk7XG5cdFx0XHRfbm9kZS5vbnN1c3BlbmQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0Y29uc29sZS5kZWJ1ZyhgW0xvY2FsXSBsaXN0ZW5lcjogdmlkZW8ub25zdXNwZW5kID0gJHtldmVudH1gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdFx0XHRjb25zb2xlLmRlYnVnKGV2ZW50KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdFx0XHQvKiBjb25zb2xlLmRlYnVnKCdvbiBlc3QgaWNpJyk7XG5cdFx0XHRcdGNvbnN0IHRhZ211dGVkID0gX25vZGUubXV0ZWQ7XG5cdFx0XHRcdF9ub2RlLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLHRydWUpO1xuXHRcdFx0XHRsZXQgYXV0b1BsYXlBbGxvd2VkID0gdHJ1ZTtcblx0XHRcdFx0Y29uc3QgcHJvbWlzZSA9IF9ub2RlLnBsYXkoKTtcblx0XHRcdFx0aWYgKHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG5cdFx0XHRcdFx0cHJvbWlzZS50aGVuKGZ1bmN0aW9uKHN0YXR1cykge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5kaXIocHJvbWlzZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cHJvbWlzZS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0XHRcdGlmIChlcnJvci5uYW1lID09PSAnTm90QWxsb3dlZEVycm9yJykge1xuXHRcdFx0XHRcdFx0XHRhdXRvUGxheUFsbG93ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIERvbid0IHRocm93IHRoZSBlcnJvciBzbyB0aGF0IHdlIGdldCB0byB0aGUgdGhlblxuXHRcdFx0XHRcdFx0XHQvLyBvciB0aHJvdyBpdCBidXQgc2V0IHRoZSBhdXRvUGxheUFsbG93ZWQgdG8gdHJ1ZSBpbiBoZXJlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmIChhdXRvUGxheUFsbG93ZWQpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2F1dG9wbGF5IGFsbG93ZWQnKVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2F1dG9wbGF5IE5PVCBhbGxvd2VkJylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnYXV0b3BsYXkgdW5rbm93bicpXG5cdFx0XHRcdH0gKi9cblx0XHRcdH07XG5cdFx0XHRfbm9kZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJywgKCkgPT4gTG9nLmQoJ29uIGEgY2hhcmfDqSBsZXMgZG9ubsOpZXMnKSk7XG5cdFx0XHRfbm9kZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlcnJvcikgPT4gTG9nLmQoYG9uIGEgdW5lIGVycmV1ciAke2Vycm9yfWApKTtcblx0XHRcdC8vIF9ub2RlLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLHRydWUpO1xuXHRcdFx0Ly8gZGlzYWJsZWQgZG9lc24ndCBzZWVtIHRvIGJlIG5lZWRlZFxuXHRcdFx0Ly8gX25vZGUuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdF9ub2RlLnZvbHVtZSA9IHZvbHVtZTtcblx0XHRcdHJldHVybiBfbm9kZTtcblx0XHR9XG5cdFx0cmV0dXJuIHByZXZpb3VzO1xuXHR9XG5cblx0LyoqXG5cdCAqIExpc3QgYXZhaWxhYmxlIGlucHV0IGRldmljZXNcblx0ICogQHJldHVybiB7UHJvbWlzZTx7YXVkaW9pbnB1dDogTWVkaWFEZXZpY2VJbmZvW10sIHZpZGVvaW5wdXQ6IE1lZGlhRGV2aWNlSW5mb1tdfT59XG5cdCAqXG5cdCAqIEBleGFtcGxlXG5cdCAqIFJlYWNoLm1lZGlhLmRldmljZXMoKS50aGVuKGRldmljZXMgPT4ge1xuXHQgKiAgLy8gVmlkZW8gY2FtZXJhc1xuXHQgKiAgY29uc29sZS5sb2coZGV2aWNlcy52aWRlb2lucHV0KTtcblx0ICogIC8vIEF1ZGlvIG1pY3Ncblx0ICogIGNvbnNvbGUubG9nKGRldmljZXMuYXVkaW9pbnB1dCk7XG5cdCAqIH0pO1xuXHQgKi9cblx0c3RhdGljIGRldmljZXMgKCkge1xuXHRcdHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKVxuXHRcdFx0LnRoZW4oZGV2aWNlcyA9PiB7XG5cdFx0XHRcdGNvbnN0IHIgPSB7fTtcblx0XHRcdFx0ZGV2aWNlcy5mb3JFYWNoKGRldmljZSA9PiB7XG5cdFx0XHRcdFx0aWYgKCFyW2RldmljZS5raW5kXSkge1xuXHRcdFx0XHRcdFx0cltkZXZpY2Uua2luZF0gPSBbXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cltkZXZpY2Uua2luZF0ucHVzaChkZXZpY2UpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0TG9nLmQoJ01lZGlhI2RldmljZXMnLCByKTtcblx0XHRcdFx0cmV0dXJuIHI7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdNZWRpYSNkZXZpY2VzJykpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS91dGlsL01lZGlhLmpzIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi4vY29yZS9Vc2VyJztcbmltcG9ydCBSb29tIGZyb20gJy4uL2NvcmUvUm9vbSc7XG5pbXBvcnQgSW52aXRlIGZyb20gJy4uL2NvcmUvSW52aXRlJztcbmltcG9ydCBQYXJ0aWNpcGFudCBmcm9tICcuLi9jb3JlL1BhcnRpY2lwYW50JztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uL2NvcmUvTWVzc2FnZSc7XG5pbXBvcnQgUmVtb3RlIGZyb20gJy4uL2NvcmUvc3RyZWFtL1JlbW90ZSc7XG5pbXBvcnQge0FDQ0VQVEVELCBSRUpFQ1RFRCwgQ0FOQ0VMRUR9IGZyb20gJy4uL2NvcmUvdXRpbC9jb25zdGFudHMnO1xuXG4vKipcbiAqIFRoZSBldmVudHMgc3VwcG9ydGVkIGJ5IHtAbGluayBSZWFjaCNvbn1cbiAqIEB0eXBlZGVmIHtPYmplY3R9IEV2ZW50cy9SZWFjaFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFVTRVJfQURERUQgRmlyZWQgd2hlbiBhIG5ldyB1c2VyIGlzIHJlZ2lzdGVyZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBVU0VSX0NIQU5HRUQgRmlyZWQgd2hlbiBhbiBleGlzdGluZyB1c2VyIGxvZ3MgaW4gb3Igb3V0IG9yIGNoYW5nZXMgaXMgc3RhdHVzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVVNFUl9SRU1PVkVEIEZpcmVkIHdoZW4gYSB1c2VyIGlzIHVucmVnaXN0ZXJlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFJPT01fQURERUQgRmlyZWQgd2hlbiBhIHJvb20gaXMgY3JlYXRlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFJPT01fQ0hBTkdFRCBGaXJlZCB3aGVuIGEgcm9vbSBzdGF0dXMgaXMgY2hhbmdpbmdcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBST09NX1JFTU9WRUQgRmlyZWQgd2hlbiBhIHJvb20gaXMgY2xvc2VkIGRlZmluaXRlbHlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJTlZJVEVfQURERUQgRmlyZWQgd2hlbiBhbiBpbnZpdGUgaXMgcmVjZWl2ZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJTlZJVEVfQ0hBTkdFRCBGaXJlZCB3aGVuIGFuIGludml0ZSBzdGF0dXMgaXMgbW9kaWZpZWRcbiAqL1xuXG4vKipcbiAqIFRoZSBldmVudHMgc3VwcG9ydGVkIGJ5IHtAbGluayBSb29tI29ufVxuICogQHR5cGVkZWYge09iamVjdH0gRXZlbnRzL1Jvb21cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQQVJUSUNJUEFOVF9BRERFRCBGaXJlZCB3aGVuIGEgbmV3IHBhcnRpY2lwYW50IGlzIGFkZGVkIHRvIHRoZSByb29tLiBEb2VzIG5vdCBtZWFuIGhlJ3MgY29ubmVjdGVkIGJ1dCB0aGF0IGhlJ3MgaW52aXRlZCB0b1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFBBUlRJQ0lQQU5UX0NIQU5HRUQgRmlyZWQgd2hlbiBhIHBhcnRpY2lwYW50IGNoYW5nZXMgaXMgc3RhdHVzIChlbnRlci9sZWF2ZXMgdGhlIHJvb20pXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUEFSVElDSVBBTlRfUkVNT1ZFRCBGaXJlZCB3aGVuIGEgdXNlciBsZWF2ZXMgZGVmaW5pdGVseSBvciBpcyBiYW5uZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNRVNTQUdFX0FEREVEIEZpcmVkIHdoZW4gYSBuZXcgaW5zdGFudCBtZXNzYWdlIGlzIHNlbnQgdG8gdGhlIHJvb21cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNRVNTQUdFX0NIQU5HRUQgRmlyZWQgd2hlbiBhbiBpbnN0YW50IG1lc3NhZ2UgaXMgZWRpdGVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTUVTU0FHRV9SRU1PVkVEIEZpcmVkIHdoZW4gYW4gaW5zdGFudCBtZXNzYWdlIGlzIHJlbW92ZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTVFJFQU1fUFVCTElTSEVEIEZpcmVkIHdoZW4gYSBwYXJ0aWNpcGFudCBwdWJsaXNoZXMgYSBzdHJlYW1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTVFJFQU1fVU5QVUJMSVNIRUQgRmlyZWQgd2hlbiBhIHBhcnRpY2lwYW50IHN0b3BzIHRoZSBwdWJsaXNoaW5nIG9mIGhpcyBzdHJlYW1cbiAqL1xuXG4vKipcbiAqIFRoZSBldmVudHMgc3VwcG9ydGVkIGJ5IHtAbGluayBJbnZpdGUjb259XG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFdmVudHMvSW52aXRlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQUNDRVBURUQgRmlyZWQgd2hlbiB0aGUgaW52aXRlIGhhcyBiZWVuIGFjY2VwdGVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUkVKRUNURUQgRmlyZWQgd2hlbiB0aGUgaW52aXRlIGhhcyBiZWVuIGFjY2VwdGVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ0FOQ0VMRUQgRmlyZWQgd2hlbiB0aGUgaW52aXRlIGhhcyBiZWVuIGNhbmNlbGVkXG4gKi9cblxuLyoqXG4gKiBUaGUgZXZlbnRzIHN1cHBvcnRlZCBieSB7QGxpbmsgUmVtb3RlI29ufS5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IEV2ZW50cy9TdHJlYW1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNVVRFIEZpcmVkIHdoZW4gdGhlIG11dGUgc3RhdHVzIG9mIHRoZSBzdHJlYW0gY2hhbmdlc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFNJWkUgRmlyZWQgd2hlbiB0aGUgc2l6ZSBvZiB0aGUgc3RyZWFtIGNoYW5nZXNcbiAqL1xuXG4vKipcbiAqIFBhdGggY29uZmlndXJhdGlvbiBmb3IgZWFjaCBldmVudFxuICogQGlnbm9yZVxuICogQHR5cGUge3t9fVxuICovXG5jb25zdCBwYXRocyA9IHtcblx0J1VTRVInOiAoKSA9PiAndXNlcnMnLFxuXHQnUk9PTSc6ICgpID0+ICdyb29tcycsXG5cdCdJTlZJVEUnOiB1c2VyID0+IHtcblx0XHRpZighdXNlcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBiZSBhdXRoZW50aWNhdGVkIHRvIGxpc3QgdGhlIGludml0ZXMnKTtcblx0XHR9XG5cdFx0cmV0dXJuIGBfL2ludml0ZXMvJHt1c2VyLnVpZH1gO1xuXHR9LFxuXHQnUEFSVElDSVBBTlQnOiByb29tID0+IGBfL3Jvb21zLyR7cm9vbS51aWR9L3BhcnRpY2lwYW50c2AsXG5cdCdNRVNTQUdFJzogcm9vbSA9PiBgXy9yb29tcy8ke3Jvb20udWlkfS9tZXNzYWdlc2AsXG5cdCdTVFJFQU0nOiByb29tID0+IGBfL3Jvb21zLyR7cm9vbS51aWR9L3N0cmVhbXNgXG59O1xuXG4vKipcbiAqIE9iamVjdCB0eXBlIGNvbmZpZ3VyYXRpb24gZm9yIGVhY2ggZXZlbnRcbiAqIEBpZ25vcmVcbiAqIEB0eXBlIHt7fX1cbiAqL1xuY29uc3QgY2xhc3NlcyA9IHtcblx0J1VTRVInOiBVc2VyLFxuXHQnUk9PTSc6IFJvb20sXG5cdCdJTlZJVEUnOiBJbnZpdGUsXG5cdCdQQVJUSUNJUEFOVCc6IFBhcnRpY2lwYW50LFxuXHQnTUVTU0FHRSc6IE1lc3NhZ2UsXG5cdCdTVFJFQU0nOiBSZW1vdGVcbn07XG5cbi8qKlxuICogUHJpdmF0ZSBjbGFzcyB0byBhZGQgc3VwcG9ydCB0ZXN0IG1ldGhvZHNcbiAqIEBjbGFzcyBfRXZlbnRzXG4gKiBAaWdub3JlXG4gKi9cbmNsYXNzIF9FdmVudHMge1xuXHRjb25zdHJ1Y3RvcihrZXlzKSB7XG5cdFx0a2V5cy5mb3JFYWNoKGtleSA9PiB7dGhpc1trZXldID0ga2V5O30pO1xuXHR9XG5cdHN1cHBvcnRzKGV2ZW50KSB7XG5cdFx0aWYoIWV2ZW50IHx8IHR5cGVvZiBldmVudCAhPT0gJ3N0cmluZycgfHwgdGhpc1tldmVudF0gIT09IGV2ZW50LnRvVXBwZXJDYXNlKCkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgZXZlbnQuIFVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogJHtKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyh0aGlzKSl9YCk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHRvUGF0aChldmVudCkge1xuXHRcdGlmKHRoaXMuc3VwcG9ydHMoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm4gcGF0aHNbZXZlbnQudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9fLiokLywgJycpXSB8fCAoKCkgPT4gbnVsbCk7XG5cdFx0fVxuXHR9XG5cdHRvQ2xhc3MoZXZlbnQpIHtcblx0XHRpZih0aGlzLnN1cHBvcnRzKGV2ZW50KSkge1xuXHRcdFx0cmV0dXJuIGNsYXNzZXNbZXZlbnQudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9fLiokLywgJycpXTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCByZWFjaCA9IG5ldyBfRXZlbnRzKFtcblx0J1VTRVJfQURERUQnLCAnVVNFUl9DSEFOR0VEJywgJ1VTRVJfUkVNT1ZFRCcsXG5cdCdST09NX0FEREVEJywgJ1JPT01fQ0hBTkdFRCcsICdST09NX1JFTU9WRUQnLFxuXHQnSU5WSVRFX0FEREVEJywgJ0lOVklURV9DSEFOR0VEJ1xuXSk7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3Qgcm9vbSA9IG5ldyBfRXZlbnRzKFtcblx0J01FU1NBR0VfQURERUQnLCAnTUVTU0FHRV9DSEFOR0VEJywgJ01FU1NBR0VfUkVNT1ZFRCcsXG5cdCdQQVJUSUNJUEFOVF9BRERFRCcsICdQQVJUSUNJUEFOVF9DSEFOR0VEJywgJ1BBUlRJQ0lQQU5UX1JFTU9WRUQnLFxuXHQnU1RSRUFNX1BVQkxJU0hFRCcsICdTVFJFQU1fVU5QVUJMSVNIRUQnLCAnU1RSRUFNX0NIQU5HRUQnXG5dKTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJlYW0gPSBuZXcgX0V2ZW50cyhbJ01VVEUnLCAnU0laRSddKTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBpbnZpdGUgPSBuZXcgX0V2ZW50cyhbQUNDRVBURUQsIFJFSkVDVEVELCBDQU5DRUxFRF0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlZmluaXRpb25zL0V2ZW50cy5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIldlYmNvbVwiLFwiY29tbW9uanNcIjpcIndlYmNvbS93ZWJjb21cIixcImNvbW1vbmpzMlwiOlwid2ViY29tL3dlYmNvbVwiLFwiYW1kXCI6XCJ3ZWJjb20vd2ViY29tXCJ9XG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtPTkdPSU5HLCBBQ0NFUFRFRCwgUkVKRUNURUQsIENBTkNFTEVEfSBmcm9tICcuL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi91dGlsL0xvZyc7XG5pbXBvcnQgY2FjaGUgZnJvbSAnLi91dGlsL2NhY2hlJztcbmltcG9ydCBSb29tIGZyb20gJy4vUm9vbSc7XG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi4vZGVmaW5pdGlvbnMvRXZlbnRzJztcblxuLyoqXG4gKiBVcGRhdGVcbiAqIEBwYXJhbSB7SW52aXRlfSBpbnZpdGUgVGhlIGludml0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyBUaGUgbmV3IHN0YXR1c1xuICogQHBhcmFtIHtzdHJpbmd9IFtyZWFzb249bnVsbF0gVGhlIHJlYXNvbiAoYSBtZXNzYWdlKVxuICogQHBhcmFtIHtvYmplY3R9IFtfZW5kZWQ9bnVsbF1cbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHJldHVybnMge1Byb21pc2U8SW52aXRlLCBFcnJvcj59XG4gKi9cbmNvbnN0IHVwZGF0ZSA9IChpbnZpdGUsIHN0YXR1cywgcmVhc29uID0gbnVsbCwgX2VuZGVkID0gbnVsbCkgPT4ge1xuXHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0c3RhdHVzLFxuXHRcdHJlYXNvbixcblx0XHRfZW5kZWRcblx0fTtcblx0aWYoaW52aXRlLnN0YXR1cyAhPT0gT05HT0lORykge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1RoaXMgaW52aXRhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFuc3dlcmVkJykpO1xuXHR9XG5cdHJldHVybiBEYXRhU3luYy51cGRhdGUoYF8vaW52aXRlcy8ke2ludml0ZS50b30vJHtpbnZpdGUudWlkfWAsIHZhbHVlcylcblx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2gocHJvcCA9PiB7XG5cdFx0XHRcdGludml0ZVtwcm9wXSA9IHZhbHVlc1twcm9wXTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIFJvb20uZ2V0KGludml0ZS5yb29tKTtcblx0XHR9KVxuXHRcdC50aGVuKCgpID0+ICh7aW52aXRlfSkpXG5cdFx0LmNhdGNoKExvZy5yKCdJbnZpdGVfdXBkYXRlJykpO1xufTtcblxuLyoqXG4gKiBJbnZpdGF0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludml0ZSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhbiBpbnZpdGVcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLkRhdGFTbmFwc2hvdHxvYmplY3R9IHNuYXBEYXRhIFRoZSBkYXRhIHNuYXBzaG90XG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzbmFwRGF0YSkge1xuXHRcdGxldCB2YWx1ZXMgPSBzbmFwRGF0YTtcblx0XHRpZihzbmFwRGF0YSAmJiBzbmFwRGF0YS52YWwgJiYgdHlwZW9mIHNuYXBEYXRhLnZhbCA9PT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHR2YWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzbmFwRGF0YS52YWwoKSwge3VpZDogc25hcERhdGEubmFtZSgpLCB0bzogc25hcERhdGEucmVmKCkucGFyZW50KCkubmFtZSgpfSk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEludml0ZSdzIHVuaXF1ZSBpZFxuXHRcdCAqIEB0eXBlIHN0cmluZ1xuXHRcdCAqL1xuXHRcdHRoaXMudWlkID0gdmFsdWVzLnVpZDtcblx0XHQvKipcblx0XHQgKiBJbnZpdGUncyBzZW5kZXIgdWlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmZyb20gPSB2YWx1ZXMuZnJvbTtcblx0XHQvKipcblx0XHQgKiBJbnZpdGVlJ3MgdWlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnRvID0gdmFsdWVzLnRvO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBpZCBvZiB0aGUgcm9vbSBhc3NvY2lhdGVkIHRvIHRoZSBpbnZpdGVcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMucm9vbSA9IHZhbHVlcy5yb29tO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBpbnZpdGF0aW9uIHN0YXR1cyA6XG5cdFx0ICogLSBPTkdPSU5HIC0gVGhlIHJlY2VpdmVyIGhhcyBub3QgeWV0IHJlc3BvbmRlZCB0byB0aGUgaW52aXRhdGlvblxuXHRcdCAqIC0gQUNDRVBURUQgLSBUaGUgcmVjZWl2ZXIgaGFzIGFjY2VwdGVkIHRoZSBpbnZpdGF0aW9uXG5cdFx0ICogLSBSRUpFQ1RFRCAtIFRoZSByZWNlaXZlciBoYXMgcmVqZWN0ZWQgdGhlIGludml0YXRpb25cblx0XHQgKiAtIENBTkNFTEVEIC0gVGhlIHNlbmRlciBjYW5jZWxlZCB0aGUgaW52aXRhdGlvblxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdGF0dXMgPSB2YWx1ZXMuc3RhdHVzO1xuXHRcdC8qKlxuXHRcdCAqIEludml0ZSBtZXNzYWdlLiBUaGlzIHdpbGwgYmUgZWl0aGVyIGEgY3VzdG9tIG1lc3NhZ2UgaWYgdGhlIHN0YXR1cyBpcyBPTkdPSU5HIG9yIGEgcmVhc29uIHdoZW4gc3RhdHVzIGlzIENBTkNFTEVEfFJFSkVDVEVELlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy50b3BpYyA9IHZhbHVlcy50b3BpYztcblx0XHQvKipcblx0XHQgKiBJbnZpdGUgY3JlYXRpb24gdGltZXN0YW1wXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9jcmVhdGVkID0gdmFsdWVzLl9jcmVhdGVkO1xuXHRcdC8qKlxuXHRcdCAqIEludml0ZSBleHBpcmF0aW9uIHRpbWVzdGFtcFxuXHRcdCAqIEB0eXBlIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5fZW5kZWQgPSB2YWx1ZXMuX2VuZGVkO1xuXHRcdC8qKlxuXHRcdCAqIEludml0ZSBldmVudHMgY2FsbGJhY2tzXG5cdFx0ICogQHR5cGUge3t9fVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fY2FsbGJhY2tzID0ge307XG5cdH1cblxuXHQvKipcblx0ICogSXMgdGhpcyBpbnZpdGF0aW9uIHdhaXRpbmcgZm9yIGEgcmVwbHkgP1xuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBpc09uR29pbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzID09PSBPTkdPSU5HO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdhcyB0aGlzIGludml0YXRpb24gcmVqZWN0ZWQgP1xuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBpc1JlamVjdGVkKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXR1cyA9PT0gUkVKRUNURUQ7XG5cdH1cblxuXHQvKipcblx0ICogV2FzIHRoaXMgaW52aXRhdGlvbiBhY2NlcHRlZCA/XG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0Z2V0IGlzQWNjZXB0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzID09PSBBQ0NFUFRFRDtcblx0fVxuXG5cdC8qKlxuXHQgKiBXYXMgdGhpcyBpbnZpdGF0aW9uIGNhbmNlbGVkID9cblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgaXNDYW5jZWxlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0dXMgPT09IENBTkNFTEVEO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbmNlbHMgdGhlIGludml0YXRpb24uIE9ubHkgdGhlIHNlbmRlciBjYW4gY2FuY2VsIHRoZSBpbnZpdGF0aW9uLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3JlYXNvbl0gVGhlIHJlYXNvbiB0aGUgc2VuZGVyIGlzIGNhbmNlbGluZyB0aGUgaW52aXRlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8SW52aXRlPn1cblx0ICovXG5cdGNhbmNlbChyZWFzb24pIHtcblx0XHRyZXR1cm4gdXBkYXRlKHRoaXMsIENBTkNFTEVELCByZWFzb24sIERhdGFTeW5jLnRzKCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlamVjdHMgdGhlIGludml0YXRpb24uIE9ubHkgdGhlIHJlY2VpdmVyIGNhbiByZWplY3QgdGhlIGludml0YXRpb24uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbcmVhc29uXSBUaGUgcmVhc29uIHRoZSByZWNlaXZlciBpcyByZWplY3RpbmcgdGhlIGludml0ZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEludml0ZT59XG5cdCAqL1xuXHRyZWplY3QocmVhc29uKSB7XG5cdFx0cmV0dXJuIHVwZGF0ZSh0aGlzLCBSRUpFQ1RFRCwgcmVhc29uLCBEYXRhU3luYy50cygpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBY2NlcHQgdGhlIGludml0YXRpb24uIE9ubHkgdGhlIHJlY2VpdmVyIGNhbiBhY2NlcHQgdGhlIGludml0YXRpb24uXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8SW52aXRlPn1cblx0ICovXG5cdGFjY2VwdCgpIHtcblx0XHRyZXR1cm4gdXBkYXRlKHRoaXMsIEFDQ0VQVEVEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhIHN0YXR1cyB1cGRhdGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyBDYW4gYmU6XG5cdCAqIC0gQUNDRVBURURcblx0ICogLSBSRUpFQ1RFRFxuXHQgKiAtIENBTkNFTEVEXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG5cdCAqL1xuXHRvbihzdGF0dXMsIGNhbGxiYWNrKSB7XG5cdFx0aWYoRXZlbnRzLmludml0ZS5zdXBwb3J0cyhzdGF0dXMpKSB7XG5cdFx0XHQvLyBSZWdpc3RlciBjYWxsYmFja1xuXHRcdFx0aWYgKCF0aGlzLl9jYWxsYmFja3Nbc3RhdHVzXSkge1xuXHRcdFx0XHR0aGlzLl9jYWxsYmFja3Nbc3RhdHVzXSA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY2FsbGJhY2tzW3N0YXR1c10ucHVzaChjYWxsYmFjayk7XG5cdFx0XHQvLyBEZWZpbmVkIGxpc3RlbmVyICYgc3Vic2NyaWJlIGlmIG5lZWRlZFxuXHRcdFx0aWYgKCF0aGlzLl9saXN0ZW5lcikge1xuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogSW52aXRlIHN0YXR1cyB1cGRhdGUgY2FsbGJhY2tcblx0XHRcdFx0ICogQHR5cGUge2Z1bmN0aW9ufVxuXHRcdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0XHQgKi9cblx0XHRcdFx0dGhpcy5fbGlzdGVuZXIgPSBzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgdXBkYXRlZCA9IHNuYXBEYXRhLnZhbCgpO1xuXHRcdFx0XHRcdGlmICh1cGRhdGVkICE9PSBudWxsICYmIHVwZGF0ZWQgIT09IHRoaXMuc3RhdHVzKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXR1cyA9IHVwZGF0ZWQ7XG5cdFx0XHRcdFx0XHQodGhpcy5fY2FsbGJhY2tzW3VwZGF0ZWRdIHx8IFtdKS5mb3JFYWNoKGNiID0+IHtcblx0XHRcdFx0XHRcdFx0Y2IodGhpcyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdERhdGFTeW5jLm9uKGBfL2ludml0ZXMvJHt0aGlzLnRvfS8ke3RoaXMudWlkfS9zdGF0dXNgLCAndmFsdWUnLCB0aGlzLl9saXN0ZW5lci5iaW5kKHRoaXMpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgYSBjYWxsYmFjayBmb3IgYWxsIHN0YXR1cyBjaGFuZ2UgZXZlbnRzXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG5cdCAqL1xuXHRvblN0YXR1c0NoYW5nZShjYWxsYmFjaykge1xuXHRcdFtBQ0NFUFRFRCwgUkVKRUNURUQsIENBTkNFTEVEXS5mb3JFYWNoKGV2ZW50ID0+IHtcblx0XHRcdHRoaXMub24oZXZlbnQsIGNhbGxiYWNrKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVbi1yZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhIHN0YXR1cyB1cGRhdGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0dXNdIENhbiBiZTpcblx0ICogLSBBQ0NFUFRFRFxuXHQgKiAtIFJFSkVDVEVEXG5cdCAqIC0gQ0FOQ0VMRURcblx0ICogLSBudWxsIFRoaXMgd2lsbCB1bi1yZWdpc3RlciBhbGwgY2FsbGJhY2tzXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja11cblx0ICovXG5cdG9mZihzdGF0dXMsIGNhbGxiYWNrKSB7XG5cdFx0aWYoIXN0YXR1cykge1xuXHRcdFx0dGhpcy5fY2FsbGJhY2tzID0ge307XG5cdFx0fSBlbHNlIGlmKHRoaXMuX2NhbGxiYWNrc1tzdGF0dXNdKSB7XG5cdFx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0XHRjb25zdCBpZHggPSB0aGlzLl9jYWxsYmFja3Nbc3RhdHVzXS5maW5kSW5kZXgoY2IgPT4gY2IgPT09IGNhbGxiYWNrKTtcblx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5fY2FsbGJhY2tzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9jYWxsYmFja3Nbc3RhdHVzXSA9IFtdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZighW0NBTkNFTEVELCBBQ0NFUFRFRCwgUkVKRUNURURdLnNvbWUoZXZlbnQgPT4gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSAmJiB0aGlzLl9jYWxsYmFja3NbZXZlbnRdLmxlbmd0aCA+IDApKXtcblx0XHRcdERhdGFTeW5jLm9mZihgXy9pbnZpdGVzLyR7dGhpcy50b30vJHt0aGlzLnVpZH0vc3RhdHVzYCwgJ3ZhbHVlJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFVuLXJlZ2lzdGVyIGEgY2FsbGJhY2sgZm9yIGFsbCBzdGF0dXMgY2hhbmdlIGV2ZW50c1xuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdXG5cdCAqL1xuXHRvZmZTdGF0dXNDaGFuZ2UoY2FsbGJhY2spIHtcblx0XHRpZighY2FsbGJhY2spIHtcblx0XHRcdHRoaXMub2ZmKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFtBQ0NFUFRFRCwgUkVKRUNURUQsIENBTkNFTEVEXS5mb3JFYWNoKGV2ZW50ID0+IHtcblx0XHRcdFx0dGhpcy5vZmYoZXZlbnQsIGNhbGxiYWNrKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgdGhlIGludml0YXRpb24gJiBhZGQgdGhlIHVzZXIgdG8gdGhlIHBhcnRpY2lwYW50cyBsaXN0XG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7VXNlcn0gaW52aXRlZSBUaGUgdXNlciB0byBpbnZpdGVcblx0ICogQHBhcmFtIHtSb29tfSByb29tIFRoZSByb29tIHRvIGludml0ZSB0aGUgdXNlciB0b1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gW21lc3NhZ2VdIEEgbWVzc2FnZSBmb3IgdGhlIGludml0ZWVcblx0ICovXG5cdHN0YXRpYyBzZW5kKGludml0ZWUsIHJvb20sIG1lc3NhZ2UgPSBudWxsKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBzZW5kIGFuIGludml0ZS4nKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW52aXRlTWV0YURhdGEgPSB7XG5cdFx0XHRmcm9tOiBjYWNoZS51c2VyLnVpZCxcblx0XHRcdHJvb206IHJvb20udWlkLFxuXHRcdFx0c3RhdHVzOiBPTkdPSU5HLFxuXHRcdFx0X2NyZWF0ZWQ6IERhdGFTeW5jLnRzKCksXG5cdFx0XHR0b3BpYzogbWVzc2FnZVxuXHRcdH07XG5cblx0XHRyZXR1cm4gRGF0YVN5bmMucHVzaChgXy9pbnZpdGVzLyR7aW52aXRlZS51aWR9YCwgaW52aXRlTWV0YURhdGEpXG5cdFx0XHQudGhlbihpbnZpdGVSZWYgPT4ge1xuXHRcdFx0XHRjb25zdCBpbnZpdGVJZCA9IGludml0ZVJlZi5uYW1lKCk7XG5cdFx0XHRcdHJldHVybiBuZXcgSW52aXRlKE9iamVjdC5hc3NpZ24oe3VpZDogaW52aXRlSWQsIHRvOiBpbnZpdGVlLnVpZH0sIGludml0ZU1ldGFEYXRhKSk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdJbnZpdGUjc2VuZCcpKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvSW52aXRlLmpzIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBEYXRhU3luYyBmcm9tICcuL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vdXRpbC9jYWNoZSc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi91dGlsL0xvZyc7XG5pbXBvcnQgUm9vbSBmcm9tICcuL1Jvb20nO1xuaW1wb3J0IERldmljZSBmcm9tICcuL0RldmljZSc7XG5pbXBvcnQge0NPTk5FQ1RFRCwgTk9UX0NPTk5FQ1RFRH0gZnJvbSAnLi91dGlsL2NvbnN0YW50cyc7XG5pbXBvcnQgV2ViY29tIGZyb20gJ3dlYmNvbS93ZWJjb20nO1xuXG5sZXQgaW5pdGlhbGl6aW5nID0gZmFsc2U7XG5cbi8qKlxuICogVXNlciBpbmZvcm1hdGlvbnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSB1c2VyXG5cdCAqIEBwYXJhbSB7V2ViY29tL2FwaS5EYXRhU25hcHNob3R8b2JqZWN0fSBzbmFwRGF0YSBUaGUgZGF0YSBzbmFwc2hvdFxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioc25hcERhdGEpIHtcblx0XHRjb25zdCB2YWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzbmFwRGF0YS52YWwoKSk7XG5cdFx0LyoqXG5cdFx0ICogVXNlcidzIHVuaXF1ZSBpZFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy51aWQgPSBzbmFwRGF0YS5uYW1lKCk7XG5cdFx0LyoqXG5cdFx0ICogVXNlcidzIGRpc3BsYXkgbmFtZVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5uYW1lID0gdmFsdWVzLm5hbWU7XG5cdFx0LyoqXG5cdFx0ICogVXNlcidzIHN0YXR1c1xuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdGF0dXMgPSB2YWx1ZXMuc3RhdHVzO1xuXHRcdC8qKlxuXHRcdCAqIFVzZXIncyBsYXN0IGtub3cgY29ubmVjdGlvbiB0c1xuXHRcdCAqIEB0eXBlIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5sYXN0U2VlbiA9IHZhbHVlcy5sYXN0U2Vlbjtcblx0XHQvKipcblx0XHQgKiBJbmRpY2F0ZXMgaWYgdGhlIHVzZXIgaXMgYW4gYW5vbnltb3VzIHVzZXJcblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLmFub255bW91cyA9IC9eYW5vbnltb3VzLy50ZXN0KHZhbHVlcy5wcm92aWRlcik7XG5cdFx0Ly8gVE9ETyAjRmVhdDogQWRkICdleHRyYScgcHJvcGVydHkgZm9yIHVucmVzdHJpY3RlZCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uID9cblx0fVxuXG5cdC8qKlxuXHQgKiBJbnZpdGUgYSB1c2VyIGRpcmVjdGx5LiBUaGlzIHdpbGwgY3JlYXRlIGEgbmV3IFJvb20sIGxvZyB5b3UgaW4gaXQgJiBpbnZpdGUgdGhlIHVzZXIuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV0gYSBtZXNzYWdlIHRvIGFkZCB0byB0aGUgaW52aXRlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8e3Jvb206IFJvb20sIGludml0ZTogSW52aXRlfSwgRXJyb3I+fVxuXHQgKi9cblx0aW52aXRlKG1lc3NhZ2UpIHtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIGludml0ZSBhbm90aGVyIFVzZXIuJykpO1xuXHRcdH1cblx0XHRyZXR1cm4gUm9vbS5jcmVhdGUoYCR7Y2FjaGUudXNlci51aWR9LSR7dGhpcy51aWR9YClcblx0XHRcdC50aGVuKHJvb20gPT4ge1xuXHRcdFx0XHRyZXR1cm4gcm9vbS5pbnZpdGUoW3RoaXNdLCBudWxsLCBtZXNzYWdlKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdFx0cmV0dXJuIHtyb29tOiBkYXRhLnJvb20sIGludml0ZTogZGF0YS5pbnZpdGVzWzBdfTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1VzZXJ+aW52aXRlJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIExpc3QgVXNlcnMncyBkZXZpY2VzLiBPbmx5IGZvciBjdXJyZW50IHVzZXIuXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8RGV2aWNlW10sIEVycm9yPn1cblx0ICovXG5cdGRldmljZXMoKSB7XG5cdFx0cmV0dXJuIERhdGFTeW5jLmxpc3QoYF8vZGV2aWNlcy8ke3RoaXMudWlkfWAsIERldmljZSk7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdCB0aGUgY3VycmVudCB1c2VyXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7anNvbn0gYXV0aCBUaGUgdXNlcidzIGlkZW50aXR5ICh3ZWJjb20gSlNPTiBzdHJ1Y3R1cmUpXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZV0gVGhlIHVzZXIncyBkaXNwbGF5IG5hbWVcblx0ICogQHJldHVybnMge1Byb21pc2U8VXNlciwgRXJyb3I+fVxuXHQgKi9cblx0c3RhdGljIGluaXQgKGF1dGgsIG5hbWUpIHtcblx0XHRjb25zdCB1aWQgPSBhdXRoLnVpZDtcblx0XHRpZighaW5pdGlhbGl6aW5nKSB7XG5cdFx0XHRpbml0aWFsaXppbmcgPSB0cnVlO1xuXHRcdFx0Y29uc3QgZCA9IHtzdGF0dXM6IENPTk5FQ1RFRCwgbGFzdFNlZW46IERhdGFTeW5jLnRzKCksIHByb3ZpZGVyOiBhdXRoLnByb3ZpZGVyfTtcblx0XHRcdGlmKG5hbWUpIHtcblx0XHRcdFx0T2JqZWN0LmFzc2lnbihkLCB7bmFtZX0pO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGRldmljZUlkID0gV2ViY29tLklOVEVSTkFMLlBlcnNpc3RlbnRTdG9yYWdlLmdldCh1aWQpO1xuXHRcdFx0cmV0dXJuIERhdGFTeW5jLnVwZGF0ZShgdXNlcnMvJHt1aWR9YCwgZClcblx0XHRcdFx0Ly8gUmVnaXN0ZXIgY3VycmVudCBkZXZpY2Vcblx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGRldmljZU1ldGFkYXRhID0ge1xuXHRcdFx0XHRcdFx0c3RhdHVzOiBDT05ORUNURUQsXG5cdFx0XHRcdFx0XHRzZGs6IHtcblx0XHRcdFx0XHRcdFx0cmVhY2g6IFNES19WRVJTSU9OLFxuXHRcdFx0XHRcdFx0XHR3ZWJjb206IFdlYmNvbS5TREtfVkVSU0lPTlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0Y2FjaGUudXNlckFnZW50ID0gZGV2aWNlTWV0YWRhdGEudXNlckFnZW50O1xuXHRcdFx0XHRcdGlmKGRldmljZUlkKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gRGF0YVN5bmMudXBkYXRlKGBfL2RldmljZXMvJHt1aWR9LyR7ZGV2aWNlSWR9YCwgZGV2aWNlTWV0YWRhdGEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gRGF0YVN5bmMucHVzaChgXy9kZXZpY2VzLyR7dWlkfWAsIGRldmljZU1ldGFkYXRhKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8gU2F2ZSBkZXZpY2Vcblx0XHRcdFx0LnRoZW4oZGV2aWNlUmVmID0+IHtcblx0XHRcdFx0XHRpZiAoIWRldmljZUlkKSB7XG5cdFx0XHRcdFx0XHRkZXZpY2VJZCA9IGRldmljZVJlZi5uYW1lKCk7XG5cdFx0XHRcdFx0XHRXZWJjb20uSU5URVJOQUwuUGVyc2lzdGVudFN0b3JhZ2Uuc2V0KHVpZCwgZGV2aWNlSWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYWNoZS5kZXZpY2UgPSBkZXZpY2VJZDtcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8gQWRkIG9uRGlzY29ubmVjdCBhY3Rpb25zXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHQvLyBEaXNjb25uZWN0IGRldmljZVxuXHRcdFx0XHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9kZXZpY2VzLyR7dWlkfS8ke2RldmljZUlkfS9zdGF0dXNgKS5zZXQoTk9UX0NPTk5FQ1RFRCk7XG5cdFx0XHRcdFx0Ly8gVXBkYXRlIHVzZXIgc3RhdHVzXG5cdFx0XHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGB1c2Vycy8ke3VpZH1gKS51cGRhdGUoe1xuXHRcdFx0XHRcdFx0c3RhdHVzOiBOT1RfQ09OTkVDVEVELFxuXHRcdFx0XHRcdFx0bGFzdFNlZW46IERhdGFTeW5jLnRzKClcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8gR2V0IHVzZXJcblx0XHRcdFx0LnRoZW4oKCkgPT4gVXNlci5nZXQodWlkKSlcblx0XHRcdFx0LnRoZW4odXNlciA9PiB7XG5cdFx0XHRcdFx0aW5pdGlhbGl6aW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0cmV0dXJuIHVzZXI7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlID0+IHtcblx0XHRcdFx0XHRMb2cuZShlKTtcblx0XHRcdFx0XHRpbml0aWFsaXppbmcgPSBmYWxzZTtcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gVXNlci5nZXQodWlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEaXNjb25uZWN0IHRoZSBjdXJyZW50IHVzZXJcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtVc2VyfSB1c2VyIFRoZSBjdXJyZW50IHVzZXJcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRzdGF0aWMgZGlzY29ubmVjdCh1c2VyKSB7XG5cdFx0Ly8gQ2FuY2VsIG9uRGlzY29ubmVjdFxuXHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9kZXZpY2VzLyR7dXNlci51aWR9LyR7Y2FjaGUuZGV2aWNlfS9zdGF0dXNgKS5jYW5jZWwoKTtcblx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYHVzZXJzLyR7dXNlci51aWR9YCkuY2FuY2VsKCk7XG5cdFx0aWYodXNlci5hbm9ueW1vdXMpIHtcblx0XHRcdHJldHVybiBEYXRhU3luYy5yZW1vdmUoYF8vZGV2aWNlcy8ke3VzZXIudWlkfWApXG5cdFx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLmdldChgXy9pbnZpdGVzLyR7dXNlci51aWR9YCkpXG5cdFx0XHRcdC50aGVuKGludml0ZXMgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGludml0ZUlkcyA9IFtdO1xuXHRcdFx0XHRcdGludml0ZXMuZm9yRWFjaChpbnZpdGUgPT4ge1xuXHRcdFx0XHRcdFx0aW52aXRlSWRzLnB1c2goaW52aXRlLm5hbWUoKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKGludml0ZUlkcy5tYXAoaW52aXRlSWQgPT4gRGF0YVN5bmMucmVtb3ZlKGBfL2ludml0ZXMvJHt1c2VyLnVpZH0vJHtpbnZpdGVJZH1gKSkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQvLyBUT0RPIHJlZmFjdG9yIGRhdGEgbW9kZWwgZm9yIGludml0ZXMgc28gd2UgY2FuIGRlbGV0ZSBfL2ludml0ZXMvJHt1c2VyLnVpZH1cblx0XHRcdFx0Ly8gLnRoZW4oKCkgPT4gRGF0YVN5bmMucmVtb3ZlKGBfL2ludml0ZXMvJHt1c2VyLnVpZH1gKSlcblx0XHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMucmVtb3ZlKGB1c2Vycy8ke3VzZXIudWlkfWApKVxuXHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0V2ViY29tLklOVEVSTkFMLlBlcnNpc3RlbnRTdG9yYWdlLnJlbW92ZSh1c2VyLnVpZCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChMb2cucignVXNlciNhbm9ueW1vdXNfZGlzY29ubmVjdCcpKTtcblx0XHR9XG5cdFx0cmV0dXJuIERhdGFTeW5jLnNldChgXy9kZXZpY2VzLyR7dXNlci51aWR9LyR7Y2FjaGUuZGV2aWNlfS9zdGF0dXNgLCBOT1RfQ09OTkVDVEVEKVxuXHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMuZ2V0KGBfL2RldmljZXMvJHt1c2VyLnVpZH1gKSlcblx0XHRcdC50aGVuKGRldmljZXMgPT4ge1xuXHRcdFx0XHQvLyBPbmx5IGNoYW5nZSB1c2VyJ3Mgc3RhdHVzIGlmIG5vIG90aGVyIGRldmljZSBjb25uZWN0ZWRcblx0XHRcdFx0Y29uc3QgaGFzQ29ubmVjdGVkRGV2aWNlcyA9IGRldmljZXMuZm9yRWFjaChkZXZpY2UgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAobmV3IFJlZ0V4cChgXiR7Q09OTkVDVEVEfSRgKSkudGVzdChkZXZpY2UudmFsKCkuc3RhdHVzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmKCFoYXNDb25uZWN0ZWREZXZpY2VzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIERhdGFTeW5jLnVwZGF0ZShgdXNlcnMvJHt1c2VyLnVpZH1gLCB7c3RhdHVzOiBOT1RfQ09OTkVDVEVEfSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdVc2VyI2Rpc2Nvbm5lY3QnKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgdXNlciBieSBpdHMgdWlkXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdWlkIFRoZSB1c2VyJ3MgdWlkXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFVzZXIsIEVycm9yPn1cblx0ICovXG5cdHN0YXRpYyBnZXQodWlkKSB7XG5cdFx0cmV0dXJuIERhdGFTeW5jLmdldChgdXNlcnMvJHt1aWR9YClcblx0XHQudGhlbihzbmFwRGF0YSA9PiBzbmFwRGF0YSA/IG5ldyBVc2VyKHNuYXBEYXRhKSA6IG51bGwpXG5cdFx0LmNhdGNoKExvZy5yKCdVc2VyI2dldCcpKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvVXNlci5qcyIsIi8qKlxuICogVGhlIGF2YWlsYWJsZSBzdHJlYW0gdHlwZXNcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFN0cmVhbVR5cGVzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQVVESU89J2F1ZGlvJyAtIEF1ZGlvIGNvbW11bmljYXRpb24gc2VydmljZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFZJREVPPSd2aWRlbycgLSBWaWRlbyBjb21tdW5pY2F0aW9uIHNlcnZpY2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBVURJT19WSURFTz0nYXVkaW8tdmlkZW8nIC0gQXVkaW8gYW5kIHZpZGVvIGNvbW11bmljYXRpb24gc2VydmljZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFNDUkVFTl9TSEFSSU5HPSdzY3JlZW4tc2hhcmluZycgLSBTY3JlZW4tc2hhcmluZyBjb21tdW5pY2F0aW9uIHNlcnZpY2VcbiAqL1xuXG4vKipcbiogQXVkaW8gY29tbXVuaWNhdGlvbiBzZXJ2aWNlXG4qIEBpZ25vcmVcbiogQHR5cGUge3N0cmluZ31cbiovXG5leHBvcnQgY29uc3QgQVVESU8gPSAnYXVkaW8nO1xuLyoqXG4qIFZpZGVvIGNvbW11bmljYXRpb24gc2VydmljZVxuKiBAaWdub3JlXG4qIEB0eXBlIHtzdHJpbmd9XG4qL1xuZXhwb3J0IGNvbnN0IFZJREVPID0gJ3ZpZGVvJztcbi8qKlxuKiBBdWRpbyBhbmQgdmlkZW8gY29tbXVuaWNhdGlvbiBzZXJ2aWNlXG4qIEBpZ25vcmVcbiogQHR5cGUge3N0cmluZ31cbiovXG5leHBvcnQgY29uc3QgQVVESU9fVklERU8gPSAnYXVkaW8tdmlkZW8nO1xuLyoqXG4qIFNjcmVlbi1zaGFyaW5nIHNlcnZpY2VcbiogQGlnbm9yZVxuKiBAdHlwZSB7c3RyaW5nfVxuKi9cbmV4cG9ydCBjb25zdCBTQ1JFRU5fU0hBUklORyA9ICdzY3JlZW4tc2hhcmluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtBVURJTywgVklERU8sIEFVRElPX1ZJREVPLCBTQ1JFRU5fU0hBUklOR307XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVmaW5pdGlvbnMvU3RyZWFtVHlwZXMuanMiLCJpbXBvcnQge2Jyb3dzZXJ9IGZyb20gJy4vZGVmaW5pdGlvbnMvQnJvd3Nlcic7XG5pbXBvcnQgU3RyZWFtVHlwZXMgZnJvbSAnLi9kZWZpbml0aW9ucy9TdHJlYW1UeXBlcyc7XG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi9kZWZpbml0aW9ucy9FdmVudHMnO1xuaW1wb3J0IHthdWRpbywgdmlkZW99IGZyb20gJy4vZGVmaW5pdGlvbnMvQ29kZWMnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9jb3JlL1VzZXInO1xuaW1wb3J0IFJvb20gZnJvbSAnLi9jb3JlL1Jvb20nO1xuaW1wb3J0IEludml0ZSBmcm9tICcuL2NvcmUvSW52aXRlJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4vY29yZS91dGlsL0RhdGFTeW5jJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NvcmUvdXRpbC9jYWNoZSc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi9jb3JlL3V0aWwvTG9nJztcbmltcG9ydCBNZWRpYSBmcm9tICcuL2NvcmUvdXRpbC9NZWRpYSc7XG5pbXBvcnQgV2ViY29tIGZyb20gJ3dlYmNvbS93ZWJjb20nO1xuXG4vKipcbiAqIEVudHJ5IHBvaW50IGZvciBSZWFjaCBTREtcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY2gge1xuXHQvKipcblx0ICogQ3JlYXRlIFJlYWNoJ3MgZGF0YSBzdHJ1Y3R1cmUgd2hlcmUgdGhlIHVybCBwb2ludHMgdG8gKG1pZ2h0IG5vdCBiZSB0aGUgcm9vdCBvZiB5b3VyIG5hbWVzcGFjZSlcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge3N0cmluZ3xXZWJjb219IHVybCBUaGUgdXJsIG9mIHlvdXIgbmFtZXNwYWNlIG9yIGFuIGV4aXN0aW5nIFdlYmNvbSByZWZlcmVuY2UuXG5cdCAqIEBwYXJhbSB7Q29uZmlnfSBbY2ZnXSBSZWFjaCBjb25maWd1cmF0aW9uLiBZb3UgY2FuIHBhc3MgY29uc3RyYWludHMgaGVyZVxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5Jbml0IHdpdGggdGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbjwvY2FwdGlvbj5cblx0ICogdmFyIG15UmVhY2ggPSBuZXcgUmVhY2goJ2h0dHBzOi8vaW8uZGF0YXN5bmMub3JhbmdlLmNvbS9iYXNlLzxteV9uYW1lc3BhY2U+Jyk7XG5cdCAqIEBleGFtcGxlIDxjYXB0aW9uPkluaXQgYW5kIHNldCBjb25zdHJhaW50cyBmb3IgU0QgdmlkZW8gYW5kIGxvZ0xldmVsIHRvICdpbmZvJzwvY2FwdGlvbj5cblx0ICogdmFyIG15UmVhY2ggPSBuZXcgUmVhY2goJ2h0dHBzOi8vaW8uZGF0YXN5bmMub3JhbmdlLmNvbS9iYXNlLzxteV9uYW1lc3BhY2U+Jywge1xuXHQgKiAgY29uc3RyYWludHM6IFJlYWNoLm1lZGlhLmNvbnN0cmFpbnRzKCdTRCcpLFxuXHQgKiAgbG9nTGV2ZWw6ICdJTkZPJ1xuXHQgKiB9KTtcblx0ICovXG5cdGNvbnN0cnVjdG9yKHVybCwgY2ZnID0gbnVsbCkge1xuXHRcdC8vIFNldCBzaGFyZWQgcmVmZXJlbmNlXG5cdFx0Y2FjaGUuYmFzZSA9IHVybDtcblx0XHQvLyBTZXQgc2hhcmVkIGNvbmZpZ3VyYXRpb25cblx0XHRjYWNoZS5jb25maWcgPSBjZmc7XG5cdFx0LyoqXG5cdFx0ICogTGlzdCBvZiBkZWNsYXJlZCBjYWxsYmFja3Ncblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB2ZXJzaW9ucyBvZiBTREsgYW5kIERhdGFNb2RlbC5UaGUgU2NoZW1hIHZlcnNpb24gY2FuIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIGNvbXBhdGliaWxpdHkgd2l0aCB0aGUgQW5kcm9pZCAmIGlPUyBTREsuXG5cdCAqIEByZXR1cm4ge3tzZGs6IHN0cmluZywgc2NoZW1hOiBzdHJpbmd9fVxuXHQgKi9cblx0c3RhdGljIGdldCB2ZXJzaW9uKCkge1xuXHRcdHJldHVybiB7c2RrOiBTREtfVkVSU0lPTiwgc2NoZW1hOiBTQ0hFTUFfVkVSU0lPTn07XG5cdH1cblxuXHQvKipcblx0ICogVGhlIHN1cHBvcnRlZCBzdHJlYW0gdHlwZXNcblx0ICogQHJldHVybnMge1N0cmVhbVR5cGVzfVxuXHQgKi9cblx0c3RhdGljIGdldCB0eXBlcygpIHtcblx0XHRyZXR1cm4gU3RyZWFtVHlwZXM7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIHN1cHBvcnRlZCBldmVudHNcblx0ICogQHJldHVybiB7e3Jvb206IEV2ZW50cy9Sb29tLCByZWFjaDogRXZlbnRzL1JlYWNoLCBzdHJlYW06IEV2ZW50cy9TdHJlYW19fVxuXHQgKi9cblx0c3RhdGljIGdldCBldmVudHMoKSB7XG5cdFx0cmV0dXJuIHtyb29tOiBFdmVudHMucm9vbSwgcmVhY2g6IEV2ZW50cy5yZWFjaCwgc3RyZWFtOiBFdmVudHMuc3RyZWFtLCBpbnZpdGU6IEV2ZW50cy5pbnZpdGV9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBicm93c2VyJ3MgZGV0YWlsc1xuXHQgKiBAcmV0dXJuIHtCcm93c2VyfVxuXHQgKi9cblx0c3RhdGljIGdldCBicm93c2VyKCkge1xuXHRcdHJldHVybiBicm93c2VyO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1lZGlhIHV0aWxpdHkgZnVuY3Rpb25zXG5cdCAqIEByZXR1cm4ge01lZGlhfVxuXHQgKi9cblx0c3RhdGljIGdldCBtZWRpYSgpIHtcblx0XHRyZXR1cm4gTWVkaWE7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGNvZGVjIHByZXNldHMgdG8gdXNlIHdoZW4gc2V0dGluZyB7QGxpbmsgQ29uZmlnI3ByZWZlcnJlZEF1ZGlvQ29kZWN9IG9yIHtAbGluayBDb25maWcjcHJlZmVycmVkVmlkZW9Db2RlY31cblx0ICogQHJldHVybiB7e2F1ZGlvOiBDb2RlYy9hdWRpbywgdmlkZW86IENvZGVjL3ZpZGVvfX1cblx0ICovXG5cdHN0YXRpYyBnZXQgY29kZWNzKCkge1xuXHRcdHJldHVybiB7YXVkaW8sIHZpZGVvfTtcblx0fVxuXHQvKipcblx0ICogRGF0YVN5bmMgcmVmZXJlbmNlXG5cdCAqIEB0eXBlIHtXZWJjb219XG5cdCAqL1xuXHRnZXQgYmFzZSgpIHtcblx0XHRyZXR1cm4gY2FjaGUuYmFzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgY29uZmlndXJhdGlvblxuXHQgKiBAdHlwZSB7Q29uZmlnfVxuXHQgKi9cblx0Z2V0IGNvbmZpZygpIHtcblx0XHRyZXR1cm4gY2FjaGUuY29uZmlnO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBjb25uZWN0ZWQgVXNlclxuXHQgKiBAdHlwZSB7VXNlcn1cblx0ICovXG5cdGdldCBjdXJyZW50KCkge1xuXHRcdHJldHVybiBjYWNoZS51c2VyO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyICYgU2lnbi1pbiBhcyBhIG5ldyB1c2VyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBlbWFpbCBUaGUgZW1haWwgb2YgdGhlIHVzZXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZCBvZiB0aGUgdXNlclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVdIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIHVzZXIgKGRlZmF1bHRzIHRvIGVtYWlsKVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZW1lbWJlck1lPWZhbHNlXSBrZWVwIHVzZXIgY29ubmVjdGVkID9cblx0ICogQHJldHVybnMge1Byb21pc2U8VXNlcj59XG5cdCAqL1xuXHRyZWdpc3RlcihlbWFpbCwgcGFzc3dvcmQsIG5hbWUsIHJlbWVtYmVyTWUpIHtcblx0XHRyZXR1cm4gY2FjaGUuYmFzZS5jcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZClcblx0XHRcdC50aGVuKGF1dGggPT4ge1xuXHRcdFx0XHRpZihhdXRoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMubG9naW4oZW1haWwsIHBhc3N3b3JkLCBuYW1lIHx8IGVtYWlsLCByZW1lbWJlck1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignUmVhY2h+cmVnaXN0ZXInKSk7XG5cdH1cblxuXHQvKipcblx0ICogU2lnbi1pbiBhbiBleGlzdGluZyB1c2VyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBlbWFpbCBUaGUgZW1haWwgb2YgdGhlIHVzZXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZCBvZiB0aGUgdXNlclxuIFx0ICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lXSBUaGUgbmFtZSBvZiB0aGUgdXNlci4gRGVmYXVsdHMgdG8gdGhlIHZhbHVlIGluIGJhc2UuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlbWVtYmVyTWU9ZmFsc2VdIGtlZXAgdXNlciBjb25uZWN0ZWQgP1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyPn1cblx0ICovXG5cdGxvZ2luKGVtYWlsLCBwYXNzd29yZCwgbmFtZSwgcmVtZW1iZXJNZSA9IGZhbHNlKSB7XG5cdFx0Ly8gRm9yY2UgbG9nb3V0IHRvIGJ5cGFzcyBXZWJjb20gYnVnXG5cdFx0bGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRpZih0aGlzLmN1cnJlbnQgJiYgdGhpcy5jdXJyZW50LmVtYWlsICE9PSBlbWFpbCkge1xuXHRcdFx0cCA9IHRoaXMubG9nb3V0KCk7XG5cdFx0fVxuXHRcdHJldHVybiBwXG5cdFx0XHQudGhlbigoKSA9PiBjYWNoZS5iYXNlLmF1dGhXaXRoUGFzc3dvcmQoe2VtYWlsLCBwYXNzd29yZCwgcmVtZW1iZXJNZX0pKVxuXHRcdFx0LnRoZW4oYXV0aCA9PiBVc2VyLmluaXQoYXV0aCwgbmFtZSkpXG5cdFx0XHQudGhlbih1ID0+IHtcblx0XHRcdFx0Y2FjaGUudXNlciA9IHU7XG5cdFx0XHRcdHJldHVybiB1O1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignUmVhY2h+bG9naW4nKSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVzdW1lIHByZXZpb3VzIHNlc3Npb25cblx0ICogQHJldHVybnMge1Byb21pc2U8VXNlcj59XG5cdCAqL1xuXHRyZXN1bWUoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdC8vIFJlc3VtZSBzZXNzaW9uXG5cdFx0XHRpZihXZWJjb20uSU5URVJOQUwuUGVyc2lzdGVudFN0b3JhZ2UuZ2V0KCdzZXNzaW9uJykpe1xuXHRcdFx0XHRjYWNoZS5iYXNlLnJlc3VtZSgoZXJyb3IsIGF1dGgpID0+IHtcblx0XHRcdFx0XHRpZihhdXRoICYmICF0aGlzLmN1cnJlbnQpIHtcblx0XHRcdFx0XHRcdFVzZXIuaW5pdChhdXRoKS50aGVuKHUgPT4ge1xuXHRcdFx0XHRcdFx0XHRjYWNoZS51c2VyID0gdTtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh1KTtcblx0XHRcdFx0XHRcdH0sIHJlamVjdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoJ05vIHNlc3Npb24gdG8gcmVzdW1lJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNpZ24taW4gYW4gYW5vbnltb3VzIHVzZXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgdXNlclxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyPn1cblx0ICovXG5cdGFub255bW91cyhuYW1lKSB7XG5cdFx0Ly8gRm9yY2UgbG9nb3V0IHRvIGJ5cGFzcyBXZWJjb20gYnVnXG5cdFx0bGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRpZih0aGlzLmN1cnJlbnQgJiYgKCF0aGlzLmN1cnJlbnQuYW5vbnltb3VzIHx8IHRoaXMuY3VycmVudC5uYW1lICE9PSBuYW1lKSkge1xuXHRcdFx0cCA9IHRoaXMubG9nb3V0KCk7XG5cdFx0fVxuXHRcdHJldHVybiBwXG5cdFx0XHQudGhlbigoKSA9PiBjYWNoZS5iYXNlLmF1dGhBbm9ueW1vdXNseSgpKVxuXHRcdFx0LnRoZW4oYXV0aCA9PiBVc2VyLmluaXQoYXV0aCwgbmFtZSkpXG5cdFx0XHQudGhlbih1ID0+IHtcblx0XHRcdFx0Y2FjaGUudXNlciA9IHU7XG5cdFx0XHRcdHJldHVybiB1O1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignUmVhY2h+YW5vbnltb3VzJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIExvZ291dCBjdXJyZW50IHVzZXJcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRsb2dvdXQoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0XHRpZih0aGlzLmN1cnJlbnQgIT0gbnVsbCkge1xuXHRcdFx0XHRwID0gVXNlci5kaXNjb25uZWN0KHRoaXMuY3VycmVudCk7XG5cdFx0XHR9XG5cdFx0XHRwLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRPYmplY3Qua2V5cyh0aGlzLl9jYWxsYmFja3MpLmZvckVhY2goXG5cdFx0XHRcdFx0ZXZlbnQgPT4gRGF0YVN5bmMub2ZmKEV2ZW50cy5yZWFjaC50b1BhdGgoZXZlbnQpKGNhY2hlLnVzZXIpLCBldmVudClcblx0XHRcdFx0KTtcblx0XHRcdFx0Y2FjaGUuYmFzZS5sb2dvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGNhY2hlLnVzZXIgPSBudWxsO1xuXHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGUgPT4ge1xuXHRcdFx0XHRMb2cuZShlKTtcblx0XHRcdFx0cmVqZWN0KGUpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIHJlZ2lzdGVyZWQgdXNlcnNcblx0ICogQGV4cGVyaW1lbnRhbCBTaW5jZSAnc2VhcmNoJyBhbmQgJ3BhZ2luZycgZmVhdHVyZXMgYXJlIG5vdCB5ZXQgaW1wbGVtZW50ZWQgaW4gRGF0YVN5bmMsIHRoaXMgY2FsbCBjYW4gbGVhZCB0byBhIGxvdCBkYXRhIGJlaW5nIGV4Y2hhbmdlZCBvdmVyIHRoZSBXZWJTb2NrZXQuXG5cdCAqIEF2b2lkIGl0IGlmIHlvdXIgdXNlcnMgYmFzZSBpcyBwcmV0dHkgbGFyZ2UuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luY2x1ZGU9ZmFsc2VdIEluY2x1ZGUgY3VycmVudCB1c2VyIGluIHVzZXIncyBsaXN0XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8VXNlcltdLCBFcnJvcj59XG5cdCAqL1xuXHR1c2VycyhpbmNsdWRlKSB7XG5cdFx0aWYoIXRoaXMuY3VycmVudCkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIGxpc3QgVXNlcnMuJykpO1xuXHRcdH1cblx0XHRyZXR1cm4gRGF0YVN5bmMubGlzdCgndXNlcnMnLCBVc2VyKVxuXHRcdFx0LnRoZW4odXNlcnMgPT4ge1xuXHRcdFx0XHRyZXR1cm4gIWluY2x1ZGUgJiYgdXNlcnMgJiYgdGhpcy5jdXJyZW50ID8gdXNlcnMuZmlsdGVyKHVzZXIgPT4gdXNlci51aWQgIT09IHRoaXMuY3VycmVudC51aWQpIDogdXNlcnM7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSZWFjaH51c2VycycpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGxpc3Qgb2Ygcm9vbXNcblx0ICogQHJldHVybiB7UHJvbWlzZTxSb29tW10sIEVycm9yPn1cblx0ICovXG5cdHJvb21zKCkge1xuXHRcdGlmKCF0aGlzLmN1cnJlbnQpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBsaXN0IFJvb21zLicpKTtcblx0XHR9XG5cdFx0cmV0dXJuIERhdGFTeW5jLmxpc3QoJ3Jvb21zJywgUm9vbSlcblx0XHRcdC5jYXRjaChMb2cucignUmVhY2h+cm9vbXMnKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIGludml0ZXNcblx0ICogQHJldHVybiB7UHJvbWlzZTxJbnZpdGVbXSwgRXJyb3I+fVxuXHQgKi9cblx0aW52aXRlcygpIHtcblx0XHRpZighdGhpcy5jdXJyZW50KSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdDYW5ub3QgbGlzdCBpbnZpdGVzIHdpdGhvdXQgYSBVc2VyIGJlaW5nIGxvZ2dlZCBpbi4nKSk7XG5cdFx0fVxuXHRcdHJldHVybiBEYXRhU3luYy5saXN0KGBfL2ludml0ZXMvJHt0aGlzLmN1cnJlbnQudWlkfWAsIEludml0ZSlcblx0XHRcdC5jYXRjaChMb2cucignUmVhY2h+aW52aXRlcycpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhIHNwZWNpZmljIGV2ZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZSAoe0BsaW5rIEV2ZW50cy9SZWFjaH0pLiBDYW4gYmU6XG5cdCAqIC0gVVNFUl9BRERFRFxuXHQgKiAtIFVTRVJfQ0hBTkdFRFxuXHQgKiAtIFVTRVJfUkVNT1ZFRFxuXHQgKiAtIFJPT01fQURERURcblx0ICogLSBST09NX0NIQU5HRURcblx0ICogLSBST09NX1JFTU9WRURcblx0ICogLSBJTlZJVEVfQURERURcblx0ICogLSBJTlZJVEVfQ0hBTkdFRFxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZm9yIHRoZSBldmVudCwgdGhlIGFyZ3VtZW50cyBkZXBlbmRzIG9uIHRoZSB0eXBlIG9mIGV2ZW50OlxuXHQgKiAtIFVTRVJfKjogY2FsbGJhY2soe0BsaW5rIFVzZXJ9IHUpXG5cdCAqIC0gUk9PTV8qOiBjYWxsYmFjayh7QGxpbmsgUm9vbX0gcilcblx0ICogLSBJTlZJVEVfKjogY2FsbGJhY2soe0BsaW5rIEludml0ZX0gaSlcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLlF1ZXJ5fmNhbmNlbENhbGxiYWNrfSBbY2FuY2VsQ2FsbGJhY2tdIFRoZSBlcnJvciBjYWxsYmFjayBmb3IgdGhlIGV2ZW50LCB0YWtlcyBhbiBFcnJvciBhcyBvbmx5IGFyZ3VtZW50XG5cdCAqL1xuXHRvbihldmVudCwgY2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrKSB7XG5cdFx0Y29uc3QgcGF0aCA9IEV2ZW50cy5yZWFjaC50b1BhdGgoZXZlbnQpKGNhY2hlLnVzZXIpO1xuXHRcdGlmKHBhdGgpIHtcblx0XHRcdGNvbnN0IGNscyA9IEV2ZW50cy5yZWFjaC50b0NsYXNzKGV2ZW50KTtcblx0XHRcdGNvbnN0IGNiID0gc25hcERhdGEgPT4ge1xuXHRcdFx0XHRjb25zdCBkID0gY2xzID8gbmV3IGNscyhzbmFwRGF0YSkgOiBudWxsO1xuXHRcdFx0XHRMb2cuaShgUmVhY2h+b24oJHtldmVudH0pYCwgZCk7XG5cdFx0XHRcdGNhbGxiYWNrKGQpO1xuXHRcdFx0fTtcblx0XHRcdERhdGFTeW5jLm9uKHBhdGgsIGV2ZW50LCBjYiwgY2FuY2VsQ2FsbGJhY2spO1xuXHRcdFx0aWYoIXRoaXMuX2NhbGxiYWNrc1tldmVudF0pIHtcblx0XHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XS5wdXNoKGNiKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IHJvb21cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lXSBUaGUgcm9vbSBuYW1lXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbZXh0cmFdIEV4dHJhIGluZm9ybWF0aW9uc1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtwdWJsaWNSb29tPWZhbHNlXSBJbmRpY2F0ZXMgcHVibGljIHJvb21cblx0ICogQHJldHVybnMge1Byb21pc2U8Um9vbT59XG5cdCAqL1xuXHRjcmVhdGVSb29tKG5hbWUsIGV4dHJhLCBwdWJsaWNSb29tID0gZmFsc2UpIHtcblx0XHRpZighdGhpcy5jdXJyZW50KSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIGEgUm9vbSB3aXRob3V0IGEgVXNlciBiZWluZyBsb2dnZWQgaW4uJykpO1xuXHRcdH1cblx0XHRyZXR1cm4gUm9vbS5jcmVhdGUobmFtZSwgZXh0cmEsIHB1YmxpY1Jvb20pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIGxpc3Qgb2YgYWxsIG9wZW5lZCB7QGxpbmsgUGVlckNvbm5lY3Rpb259c1xuXHQgKiBAcmV0dXJuIHsqfVxuXHQgKi9cblx0Z2V0IHBlZXJDb25uZWN0aW9ucyAoKSB7XG5cdFx0cmV0dXJuIGNhY2hlLnBlZXJDb25uZWN0aW9ucy5zdGFja3M7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEge0BsaW5rIFJvb219IGZyb20gaXRzIGB1aWRgXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1aWQgVGhlIHJvb20ncyBVSURcblx0ICogQHJldHVybnMge1Byb21pc2UuPFJvb20+fVxuXHQgKi9cblx0Z2V0Um9vbSAodWlkKSB7XG5cdFx0cmV0dXJuIFJvb20uZ2V0KHVpZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEge0BsaW5rIFVzZXJ9IGZyb20gaXRzIGB1aWRgXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1aWQgVGhlIHVzZXIncyBVSURcblx0ICogQHJldHVybnMge1Byb21pc2UuPFVzZXI+fVxuXHQgKi9cblx0Z2V0VXNlciAodWlkKSB7XG5cdFx0cmV0dXJuIFVzZXIuZ2V0KHVpZCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWFjaC5qcyIsImltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi91dGlsL0xvZyc7XG5cbi8qKlxuICogVXNlciBkZXZpY2VcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldmljZSB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBkZXZpY2Vcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLkRhdGFTbmFwc2hvdHxvYmplY3R9IHNuYXBEYXRhIFRoZSBkYXRhIHNuYXBzaG90XG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzbmFwRGF0YSkge1xuXHRcdGNvbnN0IHZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIHNuYXBEYXRhLnZhbCgpKTtcblx0XHQvKipcblx0XHQgKiBEZXZpY2UncyB1bmlxdWUgaWRcblx0XHQgKiBAdHlwZSBzdHJpbmdcblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHNuYXBEYXRhLm5hbWUoKTtcblx0XHQvKipcblx0XHQgKiBEZXZpY2UncyBPU1xuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5vcyA9IHZhbHVlcy5vcztcblx0XHQvKipcblx0XHQgKiBEZXZpY2UncyB1c2VyQWdlbnRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudXNlckFnZW50ID0gdmFsdWVzLnVzZXJBZ2VudDtcblx0XHQvKipcblx0XHQgKiBEZXZpY2UncyBsYXN0IGtub3cgc3RhdHVzXG5cdFx0ICogLSBDT05ORUNURURcblx0XHQgKiAtIE5PVF9DT05ORUNURURcblx0XHQgKiAtIFNMRUVQSU5HXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnN0YXR1cyA9IHZhbHVlcy5zdGF0dXM7XG5cdFx0LyoqXG5cdFx0ICogRGV2aWNlJ3Mgc2RrXG5cdFx0ICogQHR5cGUge3tyZWFjaDogc3RyaW5nLCB3ZWJjb206IHN0cmluZ319XG5cdFx0ICovXG5cdFx0dGhpcy5zZGsgPSB2YWx1ZXMuc2RrO1xuXHRcdC8vIFRPRE8gI0ZlYXQ6IEFkZCAnZXh0cmEnIHByb3BlcnR5IGZvciB1bnJlc3RyaWN0ZWQgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiA/XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBHZXQgYSBkZXZpY2UgYnkgaXRzIHVzZXIgdWlkIGFuZCBpdHMgdWlkXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXNlclVpZCBUaGUgdXNlcidzIHVpZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlVWlkIFRoZSBkZXZpY2UncyB1aWRcblx0ICogQHJldHVybnMge1Byb21pc2U8RGV2aWNlLCBFcnJvcj59XG5cdCAqL1xuXHRzdGF0aWMgZ2V0KHVzZXJVaWQsIGRldmljZVVpZCkge1xuXHRcdHJldHVybiBEYXRhU3luYy5nZXQoYF8vZGV2aWNlcy8ke3VzZXJVaWR9LyR7ZGV2aWNlVWlkfWApXG5cdFx0LnRoZW4oc25hcERhdGEgPT4gc25hcERhdGEgPyBuZXcgRGV2aWNlKHNuYXBEYXRhKSA6IG51bGwpXG5cdFx0LmNhdGNoKExvZy5yKCdEZXZpY2UjZ2V0JykpO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL0RldmljZS5qcyIsImltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi91dGlsL0xvZyc7XG5cbmltcG9ydCBjYWNoZSBmcm9tICcuL3V0aWwvY2FjaGUnO1xuLyoqXG4gKiBJbnN0YW50IE1lc3NhZ2VcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBtZXNzYWdlXG5cdCAqIEBwYXJhbSB7V2ViY29tL2FwaS5EYXRhU25hcHNob3R8T2JqZWN0fSBzbmFwRGF0YSBUaGUgZGF0YSBzbmFwc2hvdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcm9vbUlkIFRoZSBtZXNzYWdlJ3Mgcm9vbSBpZFxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioc25hcERhdGEsIHJvb21JZCkge1xuXHRcdGNvbnN0IHZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIHNuYXBEYXRhLnZhbCgpKTtcblx0XHQvKipcblx0XHQgKiBUaGUgbWVzc2FnZSB1bmlxdWUgaWRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudWlkID0gc25hcERhdGEubmFtZSgpO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSByb29tIHVpZFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5yb29tSWQgPSByb29tSWQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIG1lc3NhZ2Vcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudGV4dCA9IHZhbHVlcy50ZXh0O1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBtZXNzYWdlIHNlbmRlclxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5mcm9tID0gdmFsdWVzLmZyb207XG5cdFx0LyoqXG5cdFx0ICogSm9pbmVkIGRhdGVcblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NyZWF0ZWQgPSB2YWx1ZXMuX2NyZWF0ZWQ7XG5cdH1cblxuXHQvKipcblx0ICogRWRpdCB0aGUgdGV4dCBtZXNzYWdlLiBPbmx5IHRoZSBzZW5kZXIgb3IgbW9kZXJhdG9yL293bmVyIG9mIHRoZSByb29tIGNhbiBlZGl0IGEgbWVzc2FnZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IG5ld1RleHQgVGhlIG5ldyBtZXNzYWdlXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPE1lc3NhZ2U+fVxuXHQgKi9cblx0ZWRpdChuZXdUZXh0KSB7XG5cdFx0cmV0dXJuIERhdGFTeW5jLnVwZGF0ZShgL3Jvb21zLyR7dGhpcy5yb29tSWR9L21lc3NhZ2VzLyR7dGhpcy51aWR9YCwge3RleHQ6IG5ld1RleHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnRleHQgPSBuZXdUZXh0O1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ01lc3NhZ2V+ZWRpdCcpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgdGhlIHRleHQgbWVzc2FnZS4gT25seSB0aGUgc2VuZGVyIG9yIG1vZGVyYXRvci9vd25lciBvZiB0aGUgcm9vbSBjYW4gcmVtb3ZlIGEgbWVzc2FnZS5cblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRyZW1vdmUoKSB7XG5cdFx0cmV0dXJuIERhdGFTeW5jLnJlbW92ZShgL3Jvb21zLyR7dGhpcy5yb29tSWR9L21lc3NhZ2VzLyR7dGhpcy51aWR9YClcblx0XHRcdC5jYXRjaChMb2cucignTWVzc2FnZX5yZW1vdmUnKSk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIHtSb29tfSByb29tIFRoZSByb29tIHRvIHNlbmQgdGhlIG1lc3NhZ2UgdG9cblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIG1lc3NhZ2Vcblx0ICogQHJldHVybiB7UHJvbWlzZTxNZXNzYWdlPn1cblx0ICovXG5cdHN0YXRpYyBzZW5kKHJvb20sIHRleHQpIHtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignQ2Fubm90IHNlbmQgYSBtZXNzYWdlIHRvIHRoZSBSb29tIHdpdGhvdXQgYSBVc2VyIGJlaW5nIGxvZ2dlZCBpbi4nKSk7XG5cdFx0fVxuXHRcdGNvbnN0IGRhdGEgPSB7XG5cdFx0XHRmcm9tOiBjYWNoZS51c2VyLnVpZCxcblx0XHRcdF9jcmVhdGVkOiBEYXRhU3luYy50cygpLFxuXHRcdFx0dGV4dFxuXHRcdH07XG5cdFx0cmV0dXJuIERhdGFTeW5jLnB1c2goYF8vcm9vbXMvJHtyb29tLnVpZH0vbWVzc2FnZXNgLCBkYXRhKVxuXHRcdFx0LnRoZW4ocHVzaFJlZiA9PiBEYXRhU3luYy5nZXQoYF8vcm9vbXMvJHtyb29tLnVpZH0vbWVzc2FnZXMvJHtwdXNoUmVmLm5hbWUoKX1gKSlcblx0XHRcdC50aGVuKHNuYXBEYXRhID0+IG5ldyBNZXNzYWdlKHNuYXBEYXRhLCByb29tLnVpZCkpXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ01lc3NhZ2Ujc2VuZCcpKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvTWVzc2FnZS5qcyIsIi8qKlxuICoge0BsaW5rIFJvb219IHBhcnRpY2lwYW50XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY2lwYW50IHtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIHBhcnRpY2lwYW50XG5cdCAqIEBwYXJhbSB7V2ViY29tL2FwaS5EYXRhU25hcHNob3R8T2JqZWN0fSBzbmFwRGF0YSBUaGUgZGF0YSBzbmFwc2hvdFxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioc25hcERhdGEpIHtcblx0XHRjb25zdCB2YWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzbmFwRGF0YS52YWwoKSk7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHBhcnRpY2lwYW50IHVuaXF1ZSBpZFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy51aWQgPSBzbmFwRGF0YS5uYW1lKCk7XG5cdFx0LyoqXG5cdFx0ICogVGhlIFBhcnRpY2lwYW50J3Mgcm9sZS4gQ2FuIGJlOlxuXHRcdCAqIC0gT1dORVI6IHRoZSBvd25lci9jcmVhdG9yIG9mIHRoZSB7QGxpbmsgUm9vbX1cblx0XHQgKiAtIE1PREVSQVRPUjogYSBwYXJ0aWNpcGFudCB3aXRoIHtAbGluayBSb29tfSBtYW5hZ2VtZW50IFJpZ2h0c1xuXHRcdCAqIC0gTk9ORTogYmFzaWMgcGFydGljaXBhbnRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMucm9sZSA9IHZhbHVlcy5yb2xlO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBwYXJ0aWNpcGFudCBzdGF0dXMgQ2FuIGJlOlxuXHRcdCAqIC0gTk9UX0NPTk5FQ1RFRDogdGhlIHBhcnRpY2lwYW50IGRpZCBub3QgYWNjZXB0IHRoZSBpbnZpdGF0aW9uIHlldCBhbmQvb3IgZGlkIG5vdCBqb2luIHRoZSB7QGxpbmsgUm9vbX0geWV0XG5cdFx0ICogLSBDT05ORUNURUQ6IHRoZSBwYXJ0aWNpcGFudCBpcyBpbiB0aGUge0BsaW5rIFJvb219XG5cdFx0ICogLSBXQVNfQ09OTkVDVEVEOiB0aGUgcGFydGljaXBhbnQgbGVmdCB0aGUge0BsaW5rIFJvb219XG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnN0YXR1cyA9IHZhbHVlcy5zdGF0dXM7XG5cdFx0LyoqXG5cdFx0ICogSm9pbmVkIGRhdGVcblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2pvaW5lZCA9IHZhbHVlcy5fam9pbmVkO1xuXHRcdC8qKlxuXHRcdCAqIFBhcnRpY2lwYW50J3MgdXNlckFnZW50XG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnVzZXJBZ2VudCA9IHZhbHVlcy51c2VyQWdlbnQ7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL1BhcnRpY2lwYW50LmpzIiwiaW1wb3J0IGNhY2hlIGZyb20gJy4uL3V0aWwvY2FjaGUnO1xuaW1wb3J0ICogYXMgRGF0YVN5bmMgZnJvbSAnLi4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi4vdXRpbC9Mb2cnO1xuaW1wb3J0ICogYXMgRXZlbnRzIGZyb20gJy4uLy4uL2RlZmluaXRpb25zL0V2ZW50cyc7XG5cbi8qKlxuICogQSBwdWJsaXNoZWQgU3RyZWFtXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbW90ZSB7XG5cdC8qKlxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZXMpIHtcblx0XHRMb2cuZCgnUmVtb3Rlfm5ldycsIHZhbHVlcyk7XG5cdFx0LyoqXG4gICAgICAgICAqIEphbnVzIGZlZWQgaWQgKG1lZGlhIHNlcnZlciB1c2FnZSlcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cblx0XHQgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cblx0XHR0aGlzLmZlZWQgPSB2YWx1ZXMuZmVlZDtcblx0XHQvKipcbiAgICAgICAgICogSmFudXMgcm9vbSBpZCAobWVkaWEgc2VydmVyIHVzYWdlKVxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5qYW51c1Jvb20gPSB2YWx1ZXMuamFudXNSb29tO1xuXHRcdC8qKlxuICAgICAgICAgKiBMb2NhbCBzdHJlYW0gZGlzYWJsZSBvciBub3QgKG1lZGlhIHNlcnZlciB1c2FnZSlcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG5cdFx0ICogQHByaXZhdGVcbiAgICAgICAgICovXG5cdFx0dGhpcy5kaXNhYmxlID0gdmFsdWVzLmRpc2FibGU7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHVpZCBvZiB0aGUgcm9vbSB0aGUgc3RyZWFtIGlzIHB1Ymxpc2hlZCBpblxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5yb29tSWQgPSB2YWx1ZXMucm9vbUlkO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB1aWQgb2YgdGhpcyBzdHJlYW1cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudWlkID0gdmFsdWVzLnVpZDtcblx0XHQvKipcblx0XHQgKiBUaGUgdWlkIG9mIHRoZSBwdWJsaXNoZXIgb2YgdGhlIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5mcm9tID0gdmFsdWVzLmZyb207XG5cdFx0LyoqXG5cdFx0ICogVGhlIG9yaWdpbiB1c2VyIHVpZCBvZiB0aGUgcHVibGlzaGVyIG9mIHRoZSBzdHJlYW0gKG1lZGlhIHNlcnZlciB1c2FnZSlcblx0XHQgKiB0aGUgb25lIGZvciB3aG9tIGd3IG5lZ29jaWF0ZXMgZm9yIC4uLlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5vcmlnaW5Vc2VyVWlkID0gdmFsdWVzLm9yaWdpblVzZXJVaWQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHR5cGUgb2YgdGhlIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy50eXBlID0gdmFsdWVzLnR5cGU7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmRldmljZSA9IHZhbHVlcy5kZXZpY2U7XG5cdFx0LyoqXG5cdFx0ICogdGhlIHVzZXIgYWdlbnQgb2YgdGhlIHB1Ymxpc2hlciBvZiB0aGUgc3RyZWFtXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnVzZXJBZ2VudCA9IHZhbHVlcy51c2VyQWdlbnQ7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmhlaWdodCA9IHZhbHVlcy5oZWlnaHQ7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLndpZHRoID0gdmFsdWVzLndpZHRoO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBsb2NhbCBET00gY29udGFpbmVyIGVsZW1lbnQgd2hlcmUgdGhlIHtAbGluayBMb2NhbH5tZWRpYX0gaXMgZGlzcGxheWVkXG5cdFx0ICogQHR5cGUge0VsZW1lbnR9XG5cdFx0ICovXG5cdFx0dGhpcy5jb250YWluZXIgPSBjYWNoZS5jb25maWcucmVtb3RlU3RyZWFtQ29udGFpbmVyO1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHt7YXVkaW86IGJvb2xlYW4sIHZpZGVvOiBib29sZWFufX1cblx0XHQgKi9cblx0XHR0aGlzLm11dGVkID0gT2JqZWN0LmFzc2lnbih7YXVkaW86IGZhbHNlLCB2aWRlbzogZmFsc2V9LCB2YWx1ZXMubXV0ZWQpO1xuXHRcdC8qKlxuXHRcdCAqIExpc3Qgb2YgY2FsbGJhY2tzIGZvciBtdXRlIHN0YXR1cyBjaGFuZ2Vcblx0XHQgKiBAdHlwZSB7e01VVEU6IGZ1bmN0aW9uW119fVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fY2FsbGJhY2tzID0ge307XG5cdFx0LyoqXG5cdFx0ICogUGVlckNvbm5lY3Rpb25zIGFzc29jaWF0ZWQgdG8gdGhpcyByZW1vdGUgc3RyZWFtXG5cdFx0ICogQHR5cGUge1BlZXJDb25uZWN0aW9ufVxuXHRcdCAqL1xuXHRcdHRoaXMucGVlckNvbm5lY3Rpb24gPSBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIERPTSBlbGVtZW50IHdoZXJlIHRoZSBNZWRpYVN0cmVhbSBpcyBkaXNwbGF5ZWRcblx0ICogQHJldHVybnMge0VsZW1lbnR9XG5cdCAqL1xuXHRnZXQgbm9kZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5wZWVyQ29ubmVjdGlvbiA/IHRoaXMucGVlckNvbm5lY3Rpb24ubm9kZSA6IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogU3Vic2NyaWJlIHRvIHRoZSBzdHJlYW1cblx0ICogQHBhcmFtIHtFbGVtZW50fSBbcmVtb3RlU3RyZWFtQ29udGFpbmVyXSBUaGUgZWxlbWVudCB0aGUgc3RyZWFtIGlzIGF0dGFjaGVkIHRvLiBDYW4gYmUgbnVsbCBpZiBhbHJlYWR5IHNwZWNpZmllZCBpbiBSZWFjaENvbmZpZy5cblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRzdWJzY3JpYmUocmVtb3RlU3RyZWFtQ29udGFpbmVyKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBzdWJzY3JpYmUgdG8gYSBSb29tXFwncyBzdHJlYW0uJykpO1xuXHRcdH1cblx0XHQvLyBUT0RPOiBUZXN0IGlmIG5vdCBhbHJlYWR5IHN1YnNjcmliZWQgP1xuXHRcdHRoaXMuY29udGFpbmVyID0gcmVtb3RlU3RyZWFtQ29udGFpbmVyIHx8IGNhY2hlLmNvbmZpZy5yZW1vdGVTdHJlYW1Db250YWluZXI7XG5cdFx0TG9nLmQoJ1JlbW90ZX5zdWJzY3JpYmUnLCB0aGlzLCB0aGlzLmNvbnRhaW5lcik7XG5cdFx0cmV0dXJuIGNhY2hlLnBlZXJDb25uZWN0aW9ucy5hbnN3ZXIodGhpcywgdGhpcy5jb250YWluZXIpXG5cdFx0XHQudGhlbihwYyA9PiB7dGhpcy5wZWVyQ29ubmVjdGlvbiA9IHBjO30pXG5cdFx0XHQudGhlbigoKSA9PiBEYXRhU3luYy51cGRhdGUoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3Vic2NyaWJlcnMvJHt0aGlzLnVpZH0vJHtjYWNoZS5kZXZpY2V9YCwge1xuXHRcdFx0XHR0bzogY2FjaGUudXNlci51aWQsXG5cdFx0XHRcdF9jcmVhdGVkOiBEYXRhU3luYy50cygpXG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N1YnNjcmliZXJzLyR7dGhpcy51aWR9LyR7Y2FjaGUuZGV2aWNlfWApLnJlbW92ZSgpO1xuXHRcdFx0XHRsZXQgc3Vic2NyaWJlZCA9IGZhbHNlO1xuXHRcdFx0XHREYXRhU3luYy5vbihgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdHJlYW1zLyR7dGhpcy51aWR9YCwgJ3ZhbHVlJywgc25hcERhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlcyA9IHNuYXBEYXRhLnZhbCgpO1xuXHRcdFx0XHRcdExvZy5kKCdSZW1vdGV+dXBkYXRlZCcsIHZhbHVlcyk7XG5cdFx0XHRcdFx0aWYodmFsdWVzKSB7XG5cdFx0XHRcdFx0XHQvLyBVcGRhdGUgdHlwZVxuXHRcdFx0XHRcdFx0dGhpcy50eXBlID0gdmFsdWVzLnR5cGU7XG5cdFx0XHRcdFx0XHQvL3VwZGF0ZSBzdHJlYW0gc2l6ZVxuXHRcdFx0XHRcdFx0Y29uc3QgaGVpZ2h0ID0gdmFsdWVzLmhlaWdodDtcblx0XHRcdFx0XHRcdGNvbnN0IHdpZHRoID0gdmFsdWVzLndpZHRoO1xuXHRcdFx0XHRcdFx0aWYoKGhlaWdodCB8fCB3aWR0aCkgJiYgKGhlaWdodCAhPT0gdGhpcy5oZWlnaHQgfHwgd2lkdGggIT09IHRoaXMuaGVpZ2h0KSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmhlaWdodCA9IHZhbHVlcy5oZWlnaHQ7XG5cdFx0XHRcdFx0XHRcdHRoaXMud2lkdGggPSB2YWx1ZXMud2lkdGg7XG5cdFx0XHRcdFx0XHRcdExvZy53KHRoaXMuX2NhbGxiYWNrc1tFdmVudHMuc3RyZWFtLlNJWkVdKTtcblx0XHRcdFx0XHRcdFx0KHRoaXMuX2NhbGxiYWNrc1tFdmVudHMuc3RyZWFtLlNJWkVdIHx8IFtdKS5mb3JFYWNoKGNiID0+IGNiKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBVcGRhdGUgbXV0ZSBzdGF0dXNcblx0XHRcdFx0XHRcdGNvbnN0IG11dGVkID0gdmFsdWVzLm11dGVkO1xuXHRcdFx0XHRcdFx0aWYobXV0ZWQgJiYgKG11dGVkLmF1ZGlvICE9PSB0aGlzLm11dGVkLmF1ZGlvIHx8IG11dGVkLnZpZGVvICE9PSB0aGlzLm11dGVkLnZpZGVvKSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLm11dGVkID0gbXV0ZWQ7XG5cdFx0XHRcdFx0XHRcdExvZy53KHRoaXMuX2NhbGxiYWNrc1tFdmVudHMuc3RyZWFtLk1VVEVdKTtcblx0XHRcdFx0XHRcdFx0KHRoaXMuX2NhbGxiYWNrc1tFdmVudHMuc3RyZWFtLk1VVEVdIHx8IFtdKS5mb3JFYWNoKGNiID0+IGNiKHRoaXMubXV0ZWQpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHN1YnNjcmliZWQgPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZihzdWJzY3JpYmVkKSB7XG5cdFx0XHRcdFx0XHRMb2cuaSgnUmVtb3RlI3JlbW92ZWQnLCB0aGlzKTtcblx0XHRcdFx0XHRcdHRoaXMuX2Nsb3NlKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSZW1vdGV+c3Vic2NyaWJlJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVuc3Vic2NyaWJlIGZyb20gdGhlIHN0cmVhbVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdHVuU3Vic2NyaWJlKCkge1xuXHRcdHJldHVybiB0aGlzLl9jbG9zZShmYWxzZSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2xvc2UgdGhlIHJlbW90ZSBTdHJlYW1cblx0ICogQHBhcmFtIHtib29sZWFufSByZW1vdGUgQ2xvc2UgaXMgaW5pdGlhdGVkIGJ5IHB1Ymxpc2hlclxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9jbG9zZShyZW1vdGUpIHtcblx0XHQvLyBDYW5jZWwgb25EaXNjb25uZWN0XG5cdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N1YnNjcmliZXJzLyR7dGhpcy51aWR9LyR7Y2FjaGUuZGV2aWNlfWApLmNhbmNlbCgpO1xuXHRcdC8vIFN0b3AgbGlzdGVuaW5nIHRvIHN0cmVhbSBtb2RpZmljYXRpb25zXG5cdFx0RGF0YVN5bmMub2ZmKGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N0cmVhbXMvJHt0aGlzLnVpZH1gLCAndmFsdWUnKTtcblx0XHQvLyBVbi1zdWJzY3JpYmVcblx0XHQhcmVtb3RlICYmIERhdGFTeW5jLnJlbW92ZShgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdWJzY3JpYmVycy8ke3RoaXMudWlkfS8ke2NhY2hlLmRldmljZX1gKTtcblx0XHQvLyBDbG9zZSBQZWVyQ29ubmVjdGlvblxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGUucGVlckNvbm5lY3Rpb25zLmNsb3NlKHRoaXMudWlkLCB0aGlzLmRldmljZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgZm9yIGEgc3BlY2lmaWMgZXZlbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lICh7QGxpbmsgRXZlbnRzL1N0cmVhbX0pXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmb3IgdGhlIGV2ZW50XG5cdCAqL1xuXHRvbihldmVudCwgY2FsbGJhY2spIHtcblx0XHRpZihFdmVudHMuc3RyZWFtLnN1cHBvcnRzKGV2ZW50KSkge1xuXHRcdFx0aWYoIXRoaXMuX2NhbGxiYWNrc1tldmVudF0pIHtcblx0XHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgYSBjYWxsYmFjayBmb3IgYSBzcGVjaWZpYyBldmVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2V2ZW50XSBUaGUgZXZlbnQgbmFtZSAoe0BsaW5rIEV2ZW50cy9TdHJlYW19KVxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIFRoZSBjYWxsYmFjayBmb3IgdGhlIGV2ZW50XG5cdCAqL1xuXHRvZmYoZXZlbnQsIGNhbGxiYWNrKSB7XG5cdFx0aWYoIWV2ZW50KSB7XG5cdFx0XHR0aGlzLl9jYWxsYmFja3MgPSB7fTtcblx0XHR9IGVsc2UgaWYoRXZlbnRzLnN0cmVhbS5zdXBwb3J0cyhldmVudCkpIHtcblx0XHRcdGlmKCFjYWxsYmFjaykge1xuXHRcdFx0XHR0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gW107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XS5maWx0ZXIoY2IgPT4gY2IgIT09IGNhbGxiYWNrKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtvYmplY3R9IHZhbHVlc1xuXHQgKi9cblx0dXBkYXRlKHZhbHVlcykge1xuXHRcdE9iamVjdC5rZXlzKHZhbHVlcykuZm9yRWFjaChrZXkgPT4ge3RoaXNba2V5XSA9IHZhbHVlc1trZXldO30pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9zdHJlYW0vUmVtb3RlLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICghQlVHR1kgJiYgJG5hdGl2ZSkgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2Jyb3dzZXJEZXRhaWxzLCBicm93c2VyU2hpbX0gZnJvbSAnd2VicnRjLWFkYXB0ZXInO1xuaW1wb3J0IFdlYmNvbSBmcm9tICd3ZWJjb20vd2ViY29tJztcblxuLyoqXG4gKiBUaGUgY3VycmVudCBicm93c2VyJ3MgaW5mb3NcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJyb3dzZXJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lIC0gY3VycmVudCBicm93c2VyJ3MgbmFtZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt2ZXJzaW9uXSAtIGN1cnJlbnQgYnJvd3NlcidzIHZlcnNpb25cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWluVmVyc2lvbl0gLSBjdXJyZW50IGJyb3dzZXIncyBtaW5pbXVtIHN1cHBvcnRlZCB2ZXJzaW9uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGNvbXBhdGlibGUgLSBpcyBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydGVkID9cbiAqL1xuZXhwb3J0IGNvbnN0IGJyb3dzZXIgPSBPYmplY3QuYXNzaWduKHtcblx0Y29tcGF0aWJsZTogIS9cXHMvLnRlc3QoYnJvd3NlckRldGFpbHMuYnJvd3NlcikgJiZcblx0XHQoIWJyb3dzZXJEZXRhaWxzLm1pblZlcnNpb24gfHwgYnJvd3NlckRldGFpbHMudmVyc2lvbiA+PSBicm93c2VyRGV0YWlscy5taW5WZXJzaW9uKVxufSwgYnJvd3NlckRldGFpbHMpO1xuXG5jb25zdCB2ZXJzaW9uID0gYFJlYWNoIHYke1NES19WRVJTSU9OfSB8IFNjaGVtYSAke1NDSEVNQV9WRVJTSU9OfSB8IFdlYmNvbSB2JHtXZWJjb20uU0RLX1ZFUlNJT059YDtcbmxldCBtZXNzYWdlID0gJyc7XG5pZihicm93c2VyLnZlcnNpb24gPT09IG51bGwpIHtcblx0bWVzc2FnZSA9ICdVbnN1cHBvcnRlZCBicm93c2VyOiBicm93c2VyIG11c3Qgc3VwcG9ydCBXZWJSVEMgUGVlci10by1wZWVyIGNvbm5lY3Rpb25zIHRvIHVzZSBSZWFjaCc7XG59IGVsc2UgaWYgKGJyb3dzZXIubWluVmVyc2lvbiAmJiBicm93c2VyLm1pblZlcnNpb24gPiBicm93c2VyLnZlcnNpb24pIHtcblx0bWVzc2FnZSA9IGBVbnN1cHBvcnRlZCBicm93c2VyOiBicm93c2VyIGlzIG91dGRhdGVkLCB1cGRhdGUgdG8gbGF0ZXN0IHZlcnNpb24gKCR7YnJvd3Nlci5taW5WZXJzaW9ufSspYDtcbn0gZWxzZSBpZighYnJvd3NlclNoaW0pe1xuXHRtZXNzYWdlID0gJ05vIHNoaW0gZm9yIHlvdXIgYnJvd3Nlci4gVGhlcmUgbWlnaHQgYSBwcm9ibGVtIHdpdGggeW91ciBwYWNrYWdlLic7XG59XG5cbi8vIExvZyBicm93c2VyIHN0YXR1cyAmIFNES3MgdmVyc2lvbnMgb24gbG9hZFxubGV0IGFyZ3MgPSBbYCR7dmVyc2lvbn0gJHttZXNzYWdlfWBdO1xuaWYoL14oY2hyb21lfGZpcmVmb3gpJC8udGVzdChicm93c2VyLmJyb3dzZXIpKSB7XG5cdGFyZ3MgPSBbXG5cdFx0YCVjICR7dmVyc2lvbn0gJWMgJHttZXNzYWdlfWAsXG5cdFx0YGJhY2tncm91bmQ6ICR7YnJvd3Nlci5jb21wYXRpYmxlID8gJyNmNTAnIDogJ3JlZCd9OyBjb2xvcjogI2ZmZjsgZm9udC13ZWlnaHQ6IGJvbGRgLFxuXHRcdGBjb2xvcjogJHticm93c2VyLmNvbXBhdGlibGUgPyAnaW5oZXJpdCcgOiAncmVkJ31gXG5cdF07XG59XG5jb25zb2xlLmxvZyguLi5hcmdzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWZpbml0aW9ucy9Ccm93c2VyLmpzIiwiLyoqXG4gKiBWaWRlbyBjb2RlYyBwcmVzZXRzIHRvIHVzZSBmb3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IENvZGVjL3ZpZGVvXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gVlA4IFZQOCBpcyB0aGUgb25seSB2aWRlbyBjb2RlYyBvZmZpY2lhbGx5IHN1cHBvcnRlZCBieSBXZWJSVENcbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBWUDkgVlA4J3Mgc3VjY2Vzc29yLlxuICogQHByb3BlcnR5IHtSZWdFeHB9IEgyNjQgTVBFRy00IHBhcnQgMTAuIE9ubHkgRmlyZWZveC5cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBWUDEwIFN1aXRlZCBmb3IgVUhEIHZpZGVvLiBObyBzdXBwb3J0IHlldFxuICogQHByb3BlcnR5IHtSZWdFeHB9IEgyNjUgSC4yNjQncyBzdWNjZXNzb3IuIE5vIHN1cHBvcnQgeWV0XG4gKi9cbmV4cG9ydCBjb25zdCB2aWRlbyA9IHtcblx0J1ZQOCc6IC9ednA4L2ksXG5cdCdWUDknOiAvXnZwOS9pLFxuXHQnVlAxMCc6IC9ednAxMC9pLFxuXHQnSDI2NCc6IC9eaDI2NC9pLFxuXHQnSDI2NSc6IC9eaDI2NS9pXG59O1xuXG4vKipcbiAqIEF1ZGlvIGNvZGVjIHByZXNldHMgdG8gdXNlIGZvclxuICogQHR5cGVkZWYge09iamVjdH0gQ29kZWMvYXVkaW9cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBPUFVTIE9wdXMgYXVkaW8gY29kZWMge0BsaW5rIGh0dHA6Ly9vcHVzLWNvZGVjLm9yZy99LiBPbmx5IGNob2ljZSBmb3IgaGlnaC1xdWFsaXR5IGF1ZGlvLlxuICogQHByb3BlcnR5IHtSZWdFeHB9IEc3MjIgRy43MjIgYXVkaW8gY29kZWNcbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBHNzExIEcuNzExIGF1ZGlvIGNvZGVjXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gSVNBQyBpU0FDIGF1ZGlvIGNvZGVjLiBHb29kIGZvciB2b2ljZSBkYXRhLCBidXQgbm90IHN1aXRhYmxlIGZvciBoaWdoLXF1YWxpdHkgYXVkaW8gc3RyZWFtcy5cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBJU0FDXzE2IGlTQUMgYXVkaW8gY29kZWMgKDE2a0h6KVxuICogQHByb3BlcnR5IHtSZWdFeHB9IElTQUNfMzIgaVNBQyBhdWRpbyBjb2RlYyAoMzJrSHopXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gSUxCQyBpTEJDIGF1ZGlvIGNvZGVjLiBGb3IgYmFkIGNoYW5uZWxzICYgbG93IGJhbmR3aWR0aC5cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBJTEJDIGlMQkMgYXVkaW8gY29kZWMuIEZvciBiYWQgY2hhbm5lbHMgJiBsb3cgYmFuZHdpZHRoLlxuICovXG5leHBvcnQgY29uc3QgYXVkaW8gPSB7XG5cdCdPUFVTJzogL15vcHVzL2ksXG5cdCdHNzIyJzogL15nNzIyL2ksXG5cdCdHNzExJzogL15nNzExL2ksXG5cdCdJU0FDJzogL15pc2FjL2ksXG5cdCdJU0FDXzE2JzogL15pc2FjXFwvMTYwMDAvaSxcblx0J0lTQUNfMzInOiAvXmlzYWNcXC8zMjAwMC9pLFxuXHQnTFNBQyc6IC9ebHNhYy9pXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWZpbml0aW9ucy9Db2RlYy5qcyIsImltcG9ydCBtZWRpYSBmcm9tICcuL3V0aWwvTWVkaWEnO1xuaW1wb3J0ICogYXMgRGF0YVN5bmMgZnJvbSAnLi91dGlsL0RhdGFTeW5jJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuL3V0aWwvTG9nJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL3V0aWwvY2FjaGUnO1xuXG5jb25zdCBfZmxhdHRlblNlcnZlcnMgPSBzZXJ2ZXJzID0+IHtcblx0Y29uc3QgX2V4cGFuZCA9IHNlcnZlcnMubWFwKHNlcnZlciA9PiB7XG5cdFx0Y29uc3Qge3VzZXJuYW1lLCBjcmVkZW50aWFsLCB1cmxzLCB1cmx9ID0gc2VydmVyO1xuXHRcdGNvbnN0IHVyaXMgPSB1cmxzIHx8IHVybDtcblx0XHRpZih0eXBlb2YgdXJpcyAhPT0gJ3N0cmluZycgKSB7XG5cdFx0XHRyZXR1cm4gdXJpcy5tYXAodXJpID0+ICh7dXNlcm5hbWUsIGNyZWRlbnRpYWwsIHVybHM6IHVyaX0pKTtcblx0XHR9XG5cdFx0cmV0dXJuIFtzZXJ2ZXJdO1xuXHR9KTtcblx0cmV0dXJuIFtdLmNvbmNhdCguLi5fZXhwYW5kKTtcbn07XG5cbi8qKlxuICogVGhlIFJlYWNoIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gKiBAY2xhc3MgQ29uZmlnXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZyB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgY29uZmlndXJhdGlvblxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0gb2JqXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihvYmopIHtcblx0XHQvKipcblx0XHQgKiBUaGUgZGVmYXVsdCBtZWRpYSBjb25zdHJhaW50cy4gVGhlc2UgY2FuIGJlIG92ZXJyaWRkZW4gd2hlbiBzdWJzY3JpYmluZyB0byBhIHN0cmVhbS5cblx0XHQgKiBAdHlwZSB7TWVkaWFTdHJlYW1Db25zdHJhaW50c31cblx0XHQgKi9cblx0XHR0aGlzLmNvbnN0cmFpbnRzID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBpZC9lbGVtZW50IGRvbSBlbGVtZW50IHRoYXQgd2lsbCBob2xkIHRoZSBsb2NhbCB2aWRlby9hdWRpbyBlbGVtZW50XG5cdFx0ICogQHR5cGUge3N0cmluZ3xFbGVtZW50fVxuXHRcdCAqL1xuXHRcdHRoaXMubG9jYWxTdHJlYW1Db250YWluZXIgPSBudWxsO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBpZC9lbGVtZW50IGRvbSBlbGVtZW50IHRoYXQgd2lsbCBob2xkIHRoZSByZW1vdGUgdmlkZW8vYXVkaW8gZWxlbWVudFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd8RWxlbWVudH1cblx0XHQgKi9cblx0XHR0aGlzLnJlbW90ZVN0cmVhbUNvbnRhaW5lciA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgcHJlZmVycmVkIHZpZGVvIENvZGVjLiBUYWtlcyBhIFJlZ0V4cCBtYXRjaGluZyB0aGUgY29kZWMgbmFtZSBhbmQgc2FtcGxlIHJhdGUuXG5cdFx0ICogUHJlZGVmaW5lZCB2YWx1ZXMgY2FuIGJlIGZvdW5kIGluIHtAbGluayBDb2RlYy92aWRlb31cblx0XHQgKiBAdHlwZSB7UmVnRXhwfVxuXHRcdCAqIEBleGFtcGxlIDxjYXB0aW9uPlByZWZlciBWUDk8L2NhcHRpb24+XG5cdFx0ICogdmFyIG15UmVhY2ggPSBuZXcgUmVhY2goJ2h0dHBzOi8vaW8uZGF0YXN5bmMub3JhbmdlLmNvbS9iYXNlLzxteV9uYW1lc3BhY2U+Jywge1xuXHRcdCAqICBwcmVmZXJyZWRWaWRlb0NvZGVjOiBSZWFjaC5jb2RlY3MudmlkZW8uVlA5XG5cdFx0ICogfSk7XG5cdFx0ICovXG5cdFx0dGhpcy5wcmVmZXJyZWRWaWRlb0NvZGVjID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBwcmVmZXJyZWQgYXVkaW8gQ29kZWMuIFRha2VzIGEgUmVnRXhwIG1hdGNoaW5nIHRoZSBjb2RlYyBuYW1lIGFuZCBzYW1wbGUgcmF0ZS5cblx0XHQgKiBQcmVkZWZpbmVkIHZhbHVlcyBjYW4gYmUgZm91bmQgaW4ge0BsaW5rIENvZGVjL2F1ZGlvfVxuXHRcdCAqIEB0eXBlIHtSZWdFeHB9XG5cdFx0ICogQGV4YW1wbGUgPGNhcHRpb24+UHJlZmVyIG9wdXM8L2NhcHRpb24+XG5cdFx0ICogdmFyIG15UmVhY2ggPSBuZXcgUmVhY2goJ2h0dHBzOi8vaW8uZGF0YXN5bmMub3JhbmdlLmNvbS9iYXNlLzxteV9uYW1lc3BhY2U+Jywge1xuXHRcdCAqICBwcmVmZXJyZWRBdWRpb0NvZGVjOiBSZWFjaC5jb2RlY3MuYXVkaW8uT1BVU1xuXHRcdCAqIH0pO1xuXHRcdCAqL1xuXHRcdHRoaXMucHJlZmVycmVkQXVkaW9Db2RlYyA9IG51bGw7XG5cblx0XHQvLyBQb3B1bGF0ZSB3aXRoIGRlZmF1bHQgdmFsdWVzXG5cdFx0dGhpcy5yZXNldCgpO1xuXG5cdFx0Ly8gUG9wdWxhdGUgd2l0aCBkYXRhXG5cdFx0dGhpcy5hc3NpZ24ob2JqKTtcblxuXHRcdC8vIFJlYWQgSUNFIHNlcnZlcnMgZnJvbSBzZXJ2ZXJcblx0XHREYXRhU3luYy5nZXQoJ18vaWNlJykudGhlbihzbmFwRGF0YSA9PiB7XG5cdFx0XHRpZihzbmFwRGF0YSkge1xuXHRcdFx0XHR0aGlzLmljZVNlcnZlcnMgPSBzbmFwRGF0YS52YWwoKTtcblx0XHRcdFx0TG9nLmkoJ0lDRVNlcnZlcnMnLCB0aGlzLmljZVNlcnZlcnMubGVuZ3RoID4gMCA/IHRoaXMuaWNlU2VydmVycyA6ICdOb25lJyk7XG5cdFx0XHR9XG5cdFx0fSwgZSA9PiBMb2cuZCgnSUNFU2VydmVycycsIGUpKTtcblxuXHRcdC8vIFRPRE8gI0ZlYXQ6IEFkZCBib29sZWFuIHByb3AgdG8gcmVxdWVzdCBwZXJtaXNzaW9uIG9uIHN0YXJ0LCBzZHBFZGl0b3IgKGZvciB1c2VyIGRlZmluZWQgU0RQIG1vZGlmaWNhdGlvbnMpXG5cdH1cblxuXHQvKipcblx0ICogQXNzaWduIG5ldyBjb25mIHZhbHVlc1xuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBuZXcgY29uZiB2YWx1ZXNcblx0ICovXG5cdGFzc2lnbihvYmopIHtcblx0XHRPYmplY3Qua2V5cyhvYmogfHwge30pLmZvckVhY2goa2V5ID0+IHt0aGlzW2tleV0gPSBvYmpba2V5XTt9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgbG9nIGxldmVsIChERUJVRywgSU5GTywgV0FSTiwgRVJST1IpXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRzZXQgbG9nTGV2ZWwobGV2ZWwpIHtcblx0XHRjYWNoZS5sb2dMZXZlbCA9IGxldmVsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBsb2cgbGV2ZWwgKERFQlVHLCBJTkZPLCBXQVJOLCBFUlJPUilcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGdldCBsb2dMZXZlbCgpIHtcblx0XHRyZXR1cm4gY2FjaGUubG9nTGV2ZWw7XG5cdH1cblxuXHQvKipcblx0ICogTGlzdCBvZiBUVVJOL1NUVU4gc2VydmVycyB0byB1c2UgZm9yIElDRS4gVGhpcyBsaXN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIElDRSBzZXJ2ZXJzIGRlY2xhcmVkIGluIHRoZSBuYW1lc3BhY2UgKCoqXy9pY2UqKikuXG5cdCAqIEB0eXBlIHtJQ0VTZXJ2ZXJbXX1cblx0ICovXG5cdHNldCBpY2VTZXJ2ZXJzKHNlcnZlcnMpIHtcblx0XHRMb2cuZCgnQ29uZmlnfnNldH5pY2VTZXJ2ZXJzJywgc2VydmVycyk7XG5cdFx0aWYoc2VydmVycykge1xuXHRcdFx0aWYgKCF0aGlzLl9pY2VTZXJ2ZXJzKSB7XG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBAaWdub3JlXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHR0aGlzLl9pY2VTZXJ2ZXJzID0gW10uY29uY2F0KHNlcnZlcnMgfHwgW10pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gZmxhdHRlbiBleGlzdGluZ1xuXHRcdFx0XHRjb25zdCBfY3VycmVudFNlcnZlcnMgPSBfZmxhdHRlblNlcnZlcnModGhpcy5faWNlU2VydmVycyk7XG5cdFx0XHRcdC8vIGZsYXR0ZW4gbmV3XG5cdFx0XHRcdGNvbnN0IF9uZXdTZXJ2ZXJzID0gX2ZsYXR0ZW5TZXJ2ZXJzKHNlcnZlcnMpO1xuXHRcdFx0XHQvLyBBZGQgb25seSB0aGUgbWlzc2luZyBzZXJ2ZXJzXG5cdFx0XHRcdF9uZXdTZXJ2ZXJzLmZvckVhY2gobmV3U2VydmVyID0+IHtcblx0XHRcdFx0XHRpZighX2N1cnJlbnRTZXJ2ZXJzLnNvbWUoc2VydmVyID0+XG5cdFx0XHRcdFx0XHRcdHNlcnZlci51cmxzID09PSBuZXdTZXJ2ZXIudXJscyAmJlxuXHRcdFx0XHRcdFx0XHRzZXJ2ZXIudXNlcm5hbWUgPT09IG5ld1NlcnZlci51c2VybmFtZSAmJlxuXHRcdFx0XHRcdFx0XHRzZXJ2ZXIuY3JlZGVudGlhbCA9PT0gbmV3U2VydmVyLmNyZWRlbnRpYWwpKSB7XG5cdFx0XHRcdFx0XHRfY3VycmVudFNlcnZlcnMucHVzaChuZXdTZXJ2ZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIFJlLWdyb3VwIGJ5IHVzZXJuYW1lL2NyZWRlbnRpYWxcblx0XHRcdFx0dGhpcy5faWNlU2VydmVycyA9IF9jdXJyZW50U2VydmVycy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qge3VzZXJuYW1lLCBjcmVkZW50aWFsLCB1cmxzfSA9IGN1cnJlbnQ7XG5cdFx0XHRcdFx0Y29uc3QgaWR4ID0gcHJldmlvdXMuZmluZEluZGV4KHMgPT4gcy51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgcy5jcmVkZW50aWFsID09PSBjcmVkZW50aWFsKTtcblx0XHRcdFx0XHRpZihpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0cHJldmlvdXNbaWR4XS51cmxzLnB1c2godXJscyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHByZXZpb3VzLnB1c2goe3VzZXJuYW1lLCBjcmVkZW50aWFsLCB1cmxzOiBbdXJsc119KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHByZXZpb3VzO1xuXHRcdFx0XHR9LCBbXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIExpc3Qgb2YgVFVSTi9TVFVOIHNlcnZlcnMgdG8gdXNlIGZvciBJQ0UuIFRoaXMgbGlzdCB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSBJQ0Ugc2VydmVycyBkZWNsYXJlZCBpbiB0aGUgbmFtZXNwYWNlICgqKl8vaWNlKiopLlxuXHQgKiBAdHlwZSB7SUNFU2VydmVyW119XG5cdCAqL1xuXHRnZXQgaWNlU2VydmVycygpIHtcblx0XHRyZXR1cm4gdGhpcy5faWNlU2VydmVycyB8fCBbXG5cdFx0XHR7XG5cdFx0XHRcdHVzZXJuYW1lOiAnYWRtaW4nLFxuXHRcdFx0XHRjcmVkZW50aWFsOiAnd2ViY29tMTIzNCcsXG5cdFx0XHRcdHVybHM6IFtcblx0XHRcdFx0XHQndHVybnM6dHVybjEud2ViY29tLm9yYW5nZS5jb206NDQzJyxcblx0XHRcdFx0XHQndHVybjp0dXJuMS53ZWJjb20ub3JhbmdlLmNvbTo0NDM/dHJhbnNwb3J0PXRjcCcsXG5cdFx0XHRcdFx0J3R1cm46dHVybjEud2ViY29tLm9yYW5nZS5jb206MzQ3OD90cmFuc3BvcnQ9dGNwJ1xuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0XTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXNldHMgY29uZmlndXJhdGlvbiB0byBkZWZhdWx0IHZhbHVlc1xuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRyZXNldCAoKSB7XG5cdFx0dGhpcy5hc3NpZ24oe1xuXHRcdFx0Y29uc3RyYWludHM6IG1lZGlhLmNvbnN0cmFpbnRzKCksXG5cdFx0XHRsb2dMZXZlbDogJ0VSUk9SJ1xuXHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9Db25maWcuanMiLCJpbXBvcnQgU3RyZWFtVHlwZXMgZnJvbSAnLi4vLi4vZGVmaW5pdGlvbnMvU3RyZWFtVHlwZXMnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4uL3V0aWwvTG9nJztcbmltcG9ydCBjYWNoZSBmcm9tICcuLi91dGlsL2NhY2hlJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4uL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4uL3V0aWwvTWVkaWEnO1xuaW1wb3J0IHtOT05FLCBDTE9TRUQsIENMT1NJTkcsIENPTk5FQ1RFRH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnO1xuXG5jb25zdCBfZmFjaW5nTW9kZXMgPSBbTWVkaWEuZmFjaW5nTW9kZS5VU0VSLCBNZWRpYS5mYWNpbmdNb2RlLkVOVklST05NRU5UXTtcblxuY29uc3QgX2dldENvbnN0cmFpbnRWYWx1ZSA9IChjb25zdHJhaW50cywgcHJvcCkgPT4ge1xuXHRyZXR1cm4gY29uc3RyYWludHNbcHJvcF0uZXhhY3QgfHwgY29uc3RyYWludHNbcHJvcF0uaWRlYWwgfHwgY29uc3RyYWludHNbcHJvcF07XG59O1xuXG5jb25zdCBfc2V0Q29uc3RyYWluVmFsdWUgPSAoY29uc3RyYWludHMsIHByb3AsIG90aGVyLCB2YWx1ZSkgPT4ge1xuXHRjb25zdHJhaW50c1twcm9wXSA9IHtleGFjdDogdmFsdWV9O1xuXHRkZWxldGUgY29uc3RyYWludHNbb3RoZXJdO1xufTtcblxuLyoqXG4gKiBUaGUgbG9jYWwgc3RyZWFtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsIHtcblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXNcblx0ICovXG5cdGNvbnN0cnVjdG9yKHZhbHVlcykge1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB1aWQgb2YgdGhlIHJvb20gdGhlIHN0cmVhbSBpcyBwdWJsaXNoZWQgaW5cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMucm9vbUlkID0gdmFsdWVzLnJvb21JZDtcblx0XHQvKipcblx0XHQgKiBUaGUgdWlkIG9mIHRoaXMgc3RyZWFtXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHZhbHVlcy51aWQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHR5cGUgb2YgdGhlIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy50eXBlID0gdmFsdWVzLnR5cGU7XG5cdFx0LyoqXG5cdFx0ICogSW5kaWNhdGVzIGlmIGEgdHJhY2sgaXMgbXV0ZWRcblx0XHQgKiBAdHlwZSB7e2F1ZGlvOiBib29sZWFuLCB2aWRlbzogYm9vbGVhbn19XG5cdFx0ICovXG5cdFx0dGhpcy5tdXRlZCA9IE9iamVjdC5hc3NpZ24oe2F1ZGlvOiBmYWxzZSwgdmlkZW86IGZhbHNlfSwgdmFsdWVzLm11dGVkKTtcblx0XHQvKipcblx0XHQgKiBUaGUgbG9jYWwgRE9NIGNvbnRhaW5lciBlbGVtZW50IHdoZXJlIHRoZSB7QGxpbmsgTG9jYWx+bWVkaWF9IGlzIGRpc3BsYXllZFxuXHRcdCAqIEB0eXBlIHtFbGVtZW50fVxuXHQgICovXG5cdFx0dGhpcy5jb250YWluZXIgPSB2YWx1ZXMuY29udGFpbmVyIHx8IGNhY2hlLmNvbmZpZy5sb2NhbFN0cmVhbUNvbnRhaW5lcjtcblx0XHQvKipcblx0ICAqIFRoZSBsb2NhbCBET00gbWVkaWEgZWxlbWVudCB3aGVyZSB0aGUge0BsaW5rIExvY2Fsfm1lZGlhfSBpcyBkaXNwbGF5ZWRcblx0ICAqIEB0eXBlIHtFbGVtZW50fVxuXHQgICovXG5cdFx0dGhpcy5ub2RlID0gbnVsbDtcblx0XHQvKipcblx0XHQgKiBMaXN0IG9mIHRoZSBQZWVyQ29ubmVjdGlvbnMgYXNzb2NpYXRlZCB0byB0aGlzIGxvY2FsIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtQZWVyQ29ubmVjdGlvbltdfVxuXHRcdCAqL1xuXHRcdHRoaXMucGVlckNvbm5lY3Rpb25zID0gW107XG5cdFx0LyoqXG5cdFx0ICogTG9jYWwgc3RyZWFtIHN0YXR1c1xuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdGF0dXMgPSBOT05FO1xuXHRcdC8qKlxuXHRcdCAqIGlzIHRoZSB2aWRlbyBpcyBsb2FkZWQgaW50IHRoZSBsb2NhbCBET00gbWVkaWEgZWxlbWVudFxuXHRcdCAqIEB0eXBlIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdHRoaXMuaXNWaWRlb0xvYWRlZCA9IGZhbHNlO1xuXHRcdC8qKlxuXHRcdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHRcdCAqIEB0eXBlIHt7YXVkaW86IHN0cmluZywgdmlkZW86IHN0cmluZ319XG5cdFx0ICovXG5cdFx0dGhpcy5faW5wdXRzID0ge307XG5cblx0XHQvLyBTZXQgY29uc3RyYWludHNcblx0XHR0aGlzLmNvbnN0cmFpbnRzID0gdmFsdWVzLmNvbnN0cmFpbnRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBNZWRpYSBDb25zdHJhaW50cy4gKGRlZmF1bHRzIHRvIGdsb2JhbCBjb25maWcpXG5cdCAqIEBwYXJhbSB7TWVkaWFDb25zdHJhaW50c30gY29uc3RyYWludHNcblx0ICovXG5cdHNldCBjb25zdHJhaW50cyhjb25zdHJhaW50cykge1xuXHRcdGNvbnN0XG5cdFx0XHR2YWx1ZXMgPSBjb25zdHJhaW50cyB8fCBjYWNoZS5jb25maWcuY29uc3RyYWludHMsXG5cdFx0XHRkZWZhdWx0Q29uc3RyYWludHMgPSBNZWRpYS5jb25zdHJhaW50cygpO1xuXHRcdFsnYXVkaW8nLCAndmlkZW8nXS5mb3JFYWNoKHR5cGUgPT4ge1xuXHRcdFx0aWYoIX50aGlzLnR5cGUuaW5kZXhPZih0eXBlKSkge1xuXHRcdFx0XHR2YWx1ZXNbdHlwZV0gPSBmYWxzZTtcblx0XHRcdH0gZWxzZSBpZighdmFsdWVzW3R5cGVdKXtcblx0XHRcdFx0dmFsdWVzW3R5cGVdID0gZGVmYXVsdENvbnN0cmFpbnRzW3R5cGVdO1xuXHRcdFx0fVxuXHRcdFx0aWYodmFsdWVzW3R5cGVdLmRldmljZUlkIHx8IHZhbHVlc1t0eXBlXS5mYWNpbmdNb2RlKSB7XG5cdFx0XHRcdHRoaXMuX2lucHV0c1t0eXBlXSA9IF9nZXRDb25zdHJhaW50VmFsdWUoXG5cdFx0XHRcdFx0dmFsdWVzW3R5cGVdLFxuXHRcdFx0XHRcdHZhbHVlc1t0eXBlXS5mYWNpbmdNb2RlID8gJ2ZhY2luZ01vZGUnIDogJ2RldmljZUlkJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdExvZy5kKCdMb2NhbH5zZXQjY29udHJhaW50cycsIHZhbHVlcyk7XG5cdFx0LyoqXG5cdFx0ICogQGlnbm9yZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvbnN0cmFpbnRzID0gdmFsdWVzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBNZWRpYSBDb25zdHJhaW50cy4gKGRlZmF1bHRzIHRvIGdsb2JhbCBjb25maWcpXG5cdCAqIEB0eXBlIHtNZWRpYUNvbnN0cmFpbnRzfVxuXHQgKi9cblx0Z2V0IGNvbnN0cmFpbnRzKCkge1xuXHRcdHJldHVybiB0aGlzLl9jb25zdHJhaW50cztcblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSBzdHJlYW0gY29uc3RyYWludHMgYW5kIHJldHJpZXZlIHRoZSBuZXcgTWVkaWFTdHJlYW1cblx0ICogQHBhcmFtIGNvbnN0cmFpbnRzXG5cdCAqIEByZXR1cm5zIHsqfFByb21pc2UuPFRSZXN1bHQ+fVxuXHQgKi9cblx0dXBkYXRlQ29uc3RyYWludHMoY29uc3RyYWludHMpIHtcblx0XHRMb2cuZCgnTG9jYWx+dXBkYXRlQ29uc3RyYWludHMnLCBjb25zdHJhaW50cyk7XG5cdFx0dGhpcy5jb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzO1xuXHRcdHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh0aGlzLmNvbnN0cmFpbnRzKVxuXHRcdFx0LnRoZW4obWVkaWEgPT4ge1xuXHRcdFx0XHRbJ2F1ZGlvJywgJ3ZpZGVvJ10uZm9yRWFjaChraW5kID0+IHtcblx0XHRcdFx0XHRjb25zdCBjb25zdHJhaW50c1ZhbHVlID0gdGhpcy5jb25zdHJhaW50c1traW5kXTtcblx0XHRcdFx0XHRpZihjb25zdHJhaW50c1ZhbHVlKSB7XG5cdFx0XHRcdFx0XHRpZiAoY29uc3RyYWludHNWYWx1ZS5kZXZpY2VJZCB8fCBjb25zdHJhaW50c1ZhbHVlLmZhY2luZ01vZGUpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5faW5wdXRzW2tpbmRdID0gX2dldENvbnN0cmFpbnRWYWx1ZShcblx0XHRcdFx0XHRcdFx0XHRjb25zdHJhaW50c1ZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0cmFpbnRzVmFsdWUuZmFjaW5nTW9kZSA/ICdmYWNpbmdNb2RlJyA6ICdkZXZpY2VJZCdcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLm1lZGlhID0gbWVkaWE7XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgYXNzb2NpYXRlZCBNZWRpYVN0cmVhbVxuXHQgKiBAdHlwZSB7TWVkaWFTdHJlYW19XG5cdCAqL1xuXHRzZXQgbWVkaWEgKG1lZGlhU3RyZWFtKSB7XG5cdFx0aWYobWVkaWFTdHJlYW0pIHtcblx0XHRcdGlmKCEobWVkaWFTdHJlYW0gaW5zdGFuY2VvZiBNZWRpYVN0cmVhbSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgbWVkaWEgTVVTVCBiZSBhIE1lZGlhU3RyZWFtJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNoZWNrRGV2aWNlcyA9IHt9O1xuXHRcdFx0bWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB7XG5cdFx0XHRcdC8vIFJlc2V0IG11dGVcblx0XHRcdFx0dHJhY2suZW5hYmxlZCA9ICF0aGlzLm11dGVkW3RyYWNrLmtpbmRdO1xuXHRcdFx0XHQvLyBHZXQgZGV2aWNlIGxhYmVsXG5cdFx0XHRcdGlmKCF0aGlzLl9pbnB1dHNbdHJhY2sua2luZF0pIHtcblx0XHRcdFx0XHRjaGVja0RldmljZXNbdHJhY2sua2luZF0gPSB0cmFjay5sYWJlbDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHQvLyBUcnkgdG8gZ2V0IGRldmljZUlkIGZyb20gbGFiZWxcblx0XHRcdGlmKE9iamVjdC5rZXlzKGNoZWNrRGV2aWNlcykubGVuZ3RoKSB7XG5cdFx0XHRcdE1lZGlhLmRldmljZXMoKS50aGVuKGRldmljZXMgPT4ge1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKGNoZWNrRGV2aWNlcykuZm9yRWFjaChraW5kID0+IHtcblx0XHRcdFx0XHRcdGlmKGRldmljZXNbYCR7a2luZH1pbnB1dGBdKXtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZGV2aWNlSWRzID0gZGV2aWNlc1tgJHtraW5kfWlucHV0YF1cblx0XHRcdFx0XHRcdFx0XHQuZmlsdGVyKGRldmljZSA9PiBkZXZpY2UubGFiZWwubGVuZ3RoICYmIGRldmljZS5sYWJlbCA9PT0gY2hlY2tEZXZpY2VzW2tpbmRdKTtcblx0XHRcdFx0XHRcdFx0aWYoZGV2aWNlSWRzLmxlbmd0aCA9PT0gMSAmJiAhdGhpcy5faW5wdXRzW2tpbmRdKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5faW5wdXRzW2tpbmRdID0gZGV2aWNlSWRzWzBdLmRldmljZUlkO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmIChkZXZpY2VJZHMubGVuZ3RoID09PSAwXG5cdFx0XHRcdFx0XHRcdFx0JiYgZGV2aWNlc1tgJHtraW5kfWlucHV0YF1bMF0ubGFiZWwgPT09ICcnXG5cdFx0XHRcdFx0XHRcdFx0JiYgIXRoaXMuX2lucHV0c1traW5kXSkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGZyb20gYSB3ZWJ2aWV3LCB0aGUgbGFiZWwgaXMgbm90IGRlbGl2ZXJlZFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2lucHV0c1traW5kXSA9IGRldmljZXNbYCR7a2luZH1pbnB1dGBdWzBdLmRldmljZUlkO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRGlzcGxheVxuXHRcdFx0dGhpcy5ub2RlID0gTWVkaWEuYXR0YWNoU3RyZWFtKG1lZGlhU3RyZWFtLCB0aGlzLmNvbnRhaW5lciwgdGhpcy5ub2RlLCAwKTtcblx0XHRcdHRoaXMubm9kZS5vbmxvYWRlZGRhdGEgPSAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuaXNWaWRlb0xvYWRlZCA9IHRydWU7XG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5zdGF0dXMgPSBDT05ORUNURUQ7XG5cdFx0XHRMb2cuZCgnTG9jYWx+c2V0IG1lZGlhJywge21lZGlhU3RyZWFtfSwgdGhpcy5ub2RlKTtcblx0XHRcdC8vIFJlbmVnb3RpYXRlXG5cdFx0XHR0aGlzLnBlZXJDb25uZWN0aW9ucy5mb3JFYWNoKHBlZXJDb25uZWN0aW9uID0+IHBlZXJDb25uZWN0aW9uLnJlbmVnb3RpYXRlKHRoaXMuX21lZGlhLCBtZWRpYVN0cmVhbSkpO1xuXHRcdH0gZWxzZSBpZih0aGlzLm1lZGlhICYmICFtZWRpYVN0cmVhbSkge1xuXHRcdFx0Ly8gUmVtb3ZlIG5vZGVcblx0XHRcdHRoaXMubm9kZS5zcmNPYmplY3QgPSBudWxsO1xuXHRcdFx0dGhpcy5jb250YWluZXIgPyB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpIDogJyc7XG5cdFx0XHR0aGlzLm5vZGUgPSBudWxsO1xuXHRcdFx0Ly8gU3RvcCBzdHJlYW1cblx0XHRcdHRoaXMubWVkaWEuZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuXHRcdFx0Ly8gQ2xvc2UgUGVlckNvbm5lY3Rpb25zXG5cdFx0XHR0aGlzLnBlZXJDb25uZWN0aW9ucy5mb3JFYWNoKHBlZXJDb25uZWN0aW9uID0+IHBlZXJDb25uZWN0aW9uLmNsb3NlKCkpO1xuXHRcdH1cblx0XHQvLyBTYXZlXG5cdFx0LyoqXG5cdFx0ICogQGlnbm9yZVxuXHRcdCAqL1xuXHRcdHRoaXMuX21lZGlhID0gbWVkaWFTdHJlYW07XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGFzc29jaWF0ZWQgTWVkaWFTdHJlYW1cblx0ICogQHR5cGUge01lZGlhU3RyZWFtfVxuXHQgKi9cblx0Z2V0IG1lZGlhICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbWVkaWE7XG5cdH1cblxuXHQvKipcblx0ICogTXV0ZSBhIHRyYWNrIG9mIGEgU3RyZWFtXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHJhY2s9QVVESU9dIFRoZSB0cmFjayB0byBtdXRlLiAoQVVESU8sIFZJREVPLCBBVURJT19WSURFTylcblx0ICogQHBhcmFtIHtib29sZWFufSBbc3RhdGU9dHJ1ZV0gdHJ1ZSBmb3IgbXV0ZSAmIGZhbHNlIGZvciB1bi1tdXRlXG5cdCAqIEBleGFtcGxlIDxjYXB0aW9uPm11dGUgdmlkZW88L2NhcHRpb24+XG5cdCAqIHN0cmVhbS5tdXRlKFJlYWNoLnQuVklERU8pXG5cdCAqIEBleGFtcGxlIDxjYXB0aW9uPm11dGUgYXVkaW88L2NhcHRpb24+XG5cdCAqIHN0cmVhbS5tdXRlKFJlYWNoLnQuQVVESU8pXG5cdCAqIC8vIG9yXG5cdCAqIHN0cmVhbS5tdXRlKClcblx0ICovXG5cdG11dGUodHJhY2sgPSBTdHJlYW1UeXBlcy5BVURJTywgc3RhdGUgPSB0cnVlKSB7XG5cdFx0TG9nLmQoJ211dGUnLCB0cmFjaywgc3RhdGUpO1xuXHRcdGxldCBhdWRpbyA9IHRoaXMubXV0ZWQuYXVkaW8sIHZpZGVvID0gdGhpcy5tdXRlZC52aWRlbywgdHJhY2tzO1xuXHRcdHN3aXRjaCAodHJhY2spIHtcblx0XHRcdGNhc2UgU3RyZWFtVHlwZXMuQVVESU86XG5cdFx0XHRcdGF1ZGlvID0gc3RhdGU7XG5cdFx0XHRcdHRyYWNrcyA9IHRoaXMubWVkaWEuZ2V0QXVkaW9UcmFja3MoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFN0cmVhbVR5cGVzLlZJREVPOlxuXHRcdFx0Y2FzZSBTdHJlYW1UeXBlcy5TQ1JFRU5fU0hBUklORzpcblx0XHRcdFx0dmlkZW8gPSBzdGF0ZTtcblx0XHRcdFx0dHJhY2tzID0gdGhpcy5tZWRpYS5nZXRWaWRlb1RyYWNrcygpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgU3RyZWFtVHlwZXMuQVVESU9fVklERU86XG5cdFx0XHRcdGF1ZGlvID0gc3RhdGU7XG5cdFx0XHRcdHZpZGVvID0gc3RhdGU7XG5cdFx0XHRcdHRyYWNrcyA9IHRoaXMubWVkaWEuZ2V0VHJhY2tzKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHQvLyBNdXRlIG1lZGlhIHRyYWNrc1xuXHRcdHRyYWNrcy5mb3JFYWNoKHRyYWNrID0+IHt0cmFjay5lbmFibGVkID0gIXN0YXRlO30pO1xuXHRcdC8vIFNpZ25hbCBzdWJzY3JpYmVyc1xuXHRcdHRoaXMubXV0ZWQgPSB7YXVkaW8sIHZpZGVvfTtcblx0XHREYXRhU3luYy5zZXQoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3RyZWFtcy8ke3RoaXMudWlkfS9tdXRlZGAsIHRoaXMubXV0ZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVuLW11dGUgYSB0cmFjayBvZiBhIFN0cmVhbVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3RyYWNrPUFVRElPXSBUaGUgdHJhY2sgdG8gbXV0ZS4gKEFVRElPLCBWSURFTywgQVVESU9fVklERU8pXG5cdCAqIEBleGFtcGxlIDxjYXB0aW9uPlVuLW11dGUgdmlkZW88L2NhcHRpb24+XG5cdCAqIHN0cmVhbS51bk11dGUoUmVhY2gudC5WSURFTylcblx0ICogQGV4YW1wbGUgPGNhcHRpb24+VW4tbXV0ZSBhdWRpbzwvY2FwdGlvbj5cblx0ICogc3RyZWFtLnVuTXV0ZShSZWFjaC50LkFVRElPKVxuXHQgKiAvLyBvclxuXHQgKiBzdHJlYW0udW5NdXRlKClcblx0ICovXG5cdHVuTXV0ZSh0cmFjaykge1xuXHRcdHRoaXMubXV0ZSh0cmFjaywgZmFsc2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgc3RyZWFtIGZvciBwdWJsaXNoZWQgbGlzdCwgY2xvc2VzIGFzc29jaWF0ZWQgUGVlckNvbm5lY3Rpb25zIGFuZCBzdG9wcyBjdXJyZW50IE1lZGlhU3RyZWFtXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0Y2xvc2UoKSB7XG5cdFx0aWYoIX5bQ0xPU0VELCBDTE9TSU5HXS5pbmRleE9mKHRoaXMuc3RhdHVzKSkge1xuXHRcdFx0dGhpcy5zdGF0dXMgPSBDTE9TSU5HO1xuXHRcdFx0Ly8gU3RvcCBsaXN0ZW5pbmcgdG8gU3Vic2NyaWJlcnNcblx0XHRcdGNvbnN0IHBhdGggPSBgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdWJzY3JpYmVycy8ke3RoaXMudWlkfWA7XG5cdFx0XHREYXRhU3luYy5vZmYocGF0aCwgJ2NoaWxkX2FkZGVkJyk7XG5cdFx0XHREYXRhU3luYy5vZmYocGF0aCwgJ2NoaWxkX3JlbW92ZWQnKTtcblx0XHRcdC8vIENhbmNlbCBvbkRpc2Nvbm5lY3RzXG5cdFx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3RyZWFtcy8ke3RoaXMudWlkfWApLmNhbmNlbCgpO1xuXHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N1YnNjcmliZXJzLyR7dGhpcy51aWR9YCkuY2FuY2VsKCk7XG5cdFx0XHQvLyBSZW1vdmUgc3Vic2NyaWJlcnNcblx0XHRcdERhdGFTeW5jLnJlbW92ZShwYXRoKTtcblx0XHRcdC8vIFJlbW92ZSBzdHJlYW1cblx0XHRcdERhdGFTeW5jLnJlbW92ZShgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdHJlYW1zLyR7dGhpcy51aWR9YCk7XG5cdFx0XHR0aGlzLm1lZGlhID0gbnVsbDtcblx0XHRcdC8vIENsb3NlXG5cdFx0XHR0aGlzLnN0YXR1cyA9IENMT1NFRDtcblx0XHRcdExvZy5kKCdMb2NhbH5jbG9zZScsIHRoaXMudWlkKTtcblx0XHR9XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnN0YXR1cyk7XG5cdH1cblxuXHQvKipcblx0ICogU3dpdGNoIHZpZGVvIGlucHV0IGRldmljZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2RldmljZUlkXSBBIHZpZGVvIGlucHV0IGRldmljZSBJZCBvciB0aGUgYGZhY2luZ01vZGVgIHZhbHVlXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPExvY2FsLCBFcnJvcj59XG5cdCAqL1xuXHRzd2l0Y2hDYW1lcmEoZGV2aWNlSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3dpdGNoRGV2aWNlKFN0cmVhbVR5cGVzLlZJREVPLCBkZXZpY2VJZCk7XG5cdH1cblxuXHQvKipcblx0ICogU3dpdGNoIGF1ZGlvIGlucHV0IGRldmljZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2RldmljZUlkXSBBIGF1ZGlvIGlucHV0IGRldmljZSBJZFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxMb2NhbCwgRXJyb3I+fVxuXHQgKi9cblx0c3dpdGNoTWljcm9waG9uZShkZXZpY2VJZCkge1xuXHRcdHJldHVybiB0aGlzLl9zd2l0Y2hEZXZpY2UoU3RyZWFtVHlwZXMuQVVESU8sIGRldmljZUlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTd2l0Y2ggaW5wdXQgZGV2aWNlXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2luZCBUaGUga2luZCBvZiBkZXZpY2UgdG8gc3dpdGNoXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbZGV2aWNlSWRdIEFuIGlucHV0IGRldmljZSBpZFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxMb2NhbCwgRXJyb3I+fVxuICAgICAqL1xuXHRfc3dpdGNoRGV2aWNlKGtpbmQsIGRldmljZUlkKSB7XG5cdFx0TG9nLmQoJ0xvY2Fsfl9zd2l0Y2hEZXZpY2UnLCBraW5kLCBkZXZpY2VJZCk7XG5cdFx0aWYodGhpcy5tZWRpYS5nZXRUcmFja3MoKS5zb21lKHRyYWNrID0+IHRyYWNrLmtpbmQgPT09IGtpbmQpKSB7XG5cdFx0XHRsZXQgbmV4dCA9IFByb21pc2UucmVzb2x2ZShkZXZpY2VJZCk7XG5cdFx0XHRjb25zdCBjdXJyZW50TW9kZUlkeCA9IF9mYWNpbmdNb2Rlcy5pbmRleE9mKHRoaXMuX2lucHV0c1traW5kXSk7XG5cdFx0XHRpZighZGV2aWNlSWQgJiYgISF+Y3VycmVudE1vZGVJZHgpIHtcblx0XHRcdFx0Ly8gTG9vcCBmYWNpbmdNb2Rlc1xuXHRcdFx0XHRuZXh0ID0gUHJvbWlzZS5yZXNvbHZlKF9mYWNpbmdNb2Rlc1soY3VycmVudE1vZGVJZHggKyAxKSAlIF9mYWNpbmdNb2Rlcy5sZW5ndGhdKTtcblx0XHRcdH0gZWxzZSBpZighfl9mYWNpbmdNb2Rlcy5pbmRleE9mKGRldmljZUlkKSkge1xuXHRcdFx0XHQvLyBMb29wIGRldmljZUlkc1xuXHRcdFx0XHRuZXh0ID0gTWVkaWEuZGV2aWNlcygpXG5cdFx0XHRcdFx0LnRoZW4oZCA9PiB7XG5cdFx0XHRcdFx0XHQvLyBkZXZpY2VzIElEc1xuXHRcdFx0XHRcdFx0Y29uc3QgZGV2aWNlcyA9IGRbYCR7a2luZH1pbnB1dGBdLm1hcChtZWRpYURldmljZSA9PiBtZWRpYURldmljZS5kZXZpY2VJZCk7XG5cdFx0XHRcdFx0XHQvLyBTb3J0IHRvIGVuc3VyZSBzYW1lIG9yZGVyXG5cdFx0XHRcdFx0XHRkZXZpY2VzLnNvcnQoKTtcblx0XHRcdFx0XHRcdC8vIE5ldyBkZXZpY2Vcblx0XHRcdFx0XHRcdGxldCBuZXh0RGV2aWNlID0gZGV2aWNlSWQ7XG5cdFx0XHRcdFx0XHRpZihkZXZpY2VJZCAmJiAhZGV2aWNlcy5zb21lKGRldmljZSA9PiBkZXZpY2UgPT09IGRldmljZUlkKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGBVbmtub3duICR7a2luZH0gZGV2aWNlYCkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYoIWRldmljZUlkICYmIGRldmljZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHRsZXQgaWR4ID0gdGhpcy5faW5wdXRzW2tpbmRdID8gZGV2aWNlcy5maW5kSW5kZXgodiA9PiB2ID09PSB0aGlzLl9pbnB1dHNba2luZF0sIHRoaXMpIDogMDtcblx0XHRcdFx0XHRcdFx0bmV4dERldmljZSA9IGRldmljZXNbKytpZHggJSBkZXZpY2VzLmxlbmd0aF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV4dERldmljZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5leHQgPSBQcm9taXNlLnJlc29sdmUoZGV2aWNlSWQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbmV4dFxuXHRcdFx0XHQudGhlbihkZXZpY2UgPT4ge1xuXHRcdFx0XHRcdGlmKHRoaXMuX2lucHV0c1traW5kXSAhPT0gZGV2aWNlKSB7XG5cdFx0XHRcdFx0XHQvLyBVcGRhdGUgdmlkZW8gc3RyZWFtc1xuXHRcdFx0XHRcdFx0dGhpcy5faW5wdXRzW2tpbmRdID0gZGV2aWNlO1xuXHRcdFx0XHRcdFx0Ly8gU3RvcCB0cmFja3Ncblx0XHRcdFx0XHRcdHRoaXMubWVkaWEuZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuXHRcdFx0XHRcdFx0Ly8gVXBkYXRlIGNvbnN0cmFpbnRzXG5cdFx0XHRcdFx0XHRjb25zdCBjb25zdHJhaW50cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uc3RyYWludHMpO1xuXHRcdFx0XHRcdFx0bGV0IHByb3BzID0gWydmYWNpbmdNb2RlJywgJ2RldmljZUlkJ107XG5cdFx0XHRcdFx0XHRpZighfl9mYWNpbmdNb2Rlcy5pbmRleE9mKGRldmljZSkpIHtcblx0XHRcdFx0XHRcdFx0cHJvcHMgPSBwcm9wcy5yZXZlcnNlKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRfc2V0Q29uc3RyYWluVmFsdWUoY29uc3RyYWludHNba2luZF0sIHByb3BzWzBdLCBwcm9wc1sxXSwgZGV2aWNlKTtcblx0XHRcdFx0XHRcdExvZy5kKCdMb2NhbH5fc3dpdGNoRGV2aWNlJywga2luZCwgY29uc3RyYWludHMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMudXBkYXRlQ29uc3RyYWludHMoY29uc3RyYWludHMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LnRoZW4oKCkgPT4gdGhpcyk7XG5cdFx0fVxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYEN1cnJlbnQgc3RyZWFtIGRvZXMgbm90IGNvbnRhaW4gYSAke2tpbmR9IHRyYWNrYCkpO1xuXHR9XG5cdC8qKlxuXHQgKiBQdWJsaXNoIGEgbG9jYWwgc3RyZWFtXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByb29tSWQgVGhlIHJvb20gSWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHN0cmVhbSB0eXBlLCBzZWUge0BsaW5rIFN0cmVhbVR5cGVzfSBmb3IgcG9zc2libGUgdmFsdWVzXG5cdCAqIEBwYXJhbSB7P0VsZW1lbnR9IGNvbnRhaW5lciBUaGUgZWxlbWVudCB0aGUgc3RyZWFtIGlzIGF0dGFjaGVkIHRvLlxuXHQgKiBAcGFyYW0gez9NZWRpYVN0cmVhbUNvbnN0cmFpbnRzfSBbY29uc3RyYWludHNdIFRoZSBzdHJlYW0gY29uc3RyYWludHMuIElmIG5vdCBkZWZpbmVkIHRoZSBjb25zdHJhaW50cyBkZWZpbmVkIGluIFJlYWNoQ29uZmlnIHdpbGwgYmUgdXNlZC5cblx0ICogQHJldHVybnMge1Byb21pc2U8TG9jYWwsIEVycm9yPn1cblx0ICovXG5cdHN0YXRpYyBzaGFyZShyb29tSWQsIHR5cGUsIGNvbnRhaW5lciwgY29uc3RyYWludHMpIHtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIHNoYXJlIGEgc3RyZWFtLicpKTtcblx0XHR9XG5cdFx0Y29uc3Qgc3RyZWFtTWV0YURhdGEgPSB7XG5cdFx0XHRcdGZyb206IGNhY2hlLnVzZXIudWlkLFxuXHRcdFx0XHRkZXZpY2U6IGNhY2hlLmRldmljZSxcblx0XHRcdFx0dHlwZVxuXHRcdFx0fSxcblx0XHRcdHNoYXJlZFN0cmVhbSA9IG5ldyBMb2NhbChPYmplY3QuYXNzaWduKHtyb29tSWQsIGNvbnN0cmFpbnRzLCBjb250YWluZXJ9LCBzdHJlYW1NZXRhRGF0YSkpO1xuXHRcdExvZy5kKCdMb2NhbH5zaGFyZScsIHtzaGFyZWRTdHJlYW19KTtcblx0XHRyZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoc2hhcmVkU3RyZWFtLmNvbnN0cmFpbnRzKVxuXHRcdFx0LnRoZW4obWVkaWEgPT4ge1xuXHRcdFx0XHRzaGFyZWRTdHJlYW0ubWVkaWEgPSBtZWRpYTtcblx0XHRcdH0pXG5cdFx0XHQvLyBHb3QgTWVkaWFTdHJlYW0sIHB1Ymxpc2ggaXRcblx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLnB1c2goYF8vcm9vbXMvJHtyb29tSWR9L3N0cmVhbXNgLCBzdHJlYW1NZXRhRGF0YSkpXG5cdFx0XHQudGhlbihzdHJlYW1SZWYgPT4ge1xuXHRcdFx0XHRzaGFyZWRTdHJlYW0udWlkID0gc3RyZWFtUmVmLm5hbWUoKTtcblx0XHRcdFx0aWYgKC92aWRlby9pLnRlc3Qoc2hhcmVkU3RyZWFtLnR5cGUpKSB7XG5cdFx0XHRcdFx0aWYgKHNoYXJlZFN0cmVhbS5pc1ZpZGVvTG9hZGVkKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBzdHJlYW1TaXplID0ge1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IHNoYXJlZFN0cmVhbS5ub2RlLnZpZGVvSGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogc2hhcmVkU3RyZWFtLm5vZGUudmlkZW9XaWR0aCxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRzdHJlYW1SZWYudXBkYXRlKHN0cmVhbVNpemUpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzaGFyZWRTdHJlYW0ubm9kZS5vbmxvYWRlZGRhdGEgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3RyZWFtU2l6ZSA9IHtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IHNoYXJlZFN0cmVhbS5ub2RlLnZpZGVvSGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBzaGFyZWRTdHJlYW0ubm9kZS52aWRlb1dpZHRoLFxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRzdHJlYW1SZWYudXBkYXRlKHN0cmVhbVNpemUpO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKC92aWRlby9pLnRlc3Qoc2hhcmVkU3RyZWFtLnR5cGUpKSB7XG5cdFx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoc2hhcmVkU3RyZWFtLm5vZGUgIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBzdHJlYW1TaXplID0ge1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogc2hhcmVkU3RyZWFtLm5vZGUudmlkZW9IZWlnaHQsXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IHNoYXJlZFN0cmVhbS5ub2RlLnZpZGVvV2lkdGgsXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHN0cmVhbVJlZi51cGRhdGUoc3RyZWFtU2l6ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFNhdmUgc2hhcmVkU3RyZWFtXG5cdFx0XHRcdGNhY2hlLnN0cmVhbXMuc2hhcmVkW3NoYXJlZFN0cmVhbS51aWRdID0gc2hhcmVkU3RyZWFtO1xuXHRcdFx0XHQvLyBSZW1vdmUgc2hhcmVkIHN0cmVhbSBvbiBEaXNjb25uZWN0XG5cdFx0XHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9yb29tcy8ke3Jvb21JZH0vc3RyZWFtcy8ke3NoYXJlZFN0cmVhbS51aWR9YCkucmVtb3ZlKCk7XG5cdFx0XHRcdC8vIFJlbW92ZSBzaGFyZWQgc3RyZWFtIG9uIERpc2Nvbm5lY3Rcblx0XHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL3Jvb21zLyR7cm9vbUlkfS9zdWJzY3JpYmVycy8ke3NoYXJlZFN0cmVhbS51aWR9YCkucmVtb3ZlKCk7XG5cdFx0XHRcdC8vIFN0YXJ0IGxpc3RlbmluZyB0byBzdWJzY3JpYmVyc1xuXHRcdFx0XHRjb25zdFxuXHRcdFx0XHRcdHBhdGggPSBgXy9yb29tcy8ke3NoYXJlZFN0cmVhbS5yb29tSWR9L3N1YnNjcmliZXJzLyR7c2hhcmVkU3RyZWFtLnVpZH1gLFxuXHRcdFx0XHRcdHZhbHVlID0gc25hcERhdGEgPT4gT2JqZWN0LmFzc2lnbih7ZGV2aWNlOiBzbmFwRGF0YS5uYW1lKCl9LCBzbmFwRGF0YS52YWwoKSB8fCB7fSk7XG5cdFx0XHRcdERhdGFTeW5jLm9uKHBhdGgsICdjaGlsZF9hZGRlZCcsXG5cdFx0XHRcdFx0c25hcERhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9IHZhbHVlKHNuYXBEYXRhKTtcblx0XHRcdFx0XHRcdExvZy5kKCdMb2NhbH5zdWJzY3JpYmVkJywgc3Vic2NyaWJlcik7XG5cdFx0XHRcdFx0XHRjYWNoZS5wZWVyQ29ubmVjdGlvbnMub2ZmZXIoc2hhcmVkU3RyZWFtLCBzdWJzY3JpYmVyKVxuXHRcdFx0XHRcdFx0XHQudGhlbihwYyA9PiBzaGFyZWRTdHJlYW0ucGVlckNvbm5lY3Rpb25zLnB1c2gocGMpKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdExvZy5lLmJpbmQoTG9nKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHREYXRhU3luYy5vbihwYXRoLCAnY2hpbGRfcmVtb3ZlZCcsXG5cdFx0XHRcdFx0c25hcERhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9IHZhbHVlKHNuYXBEYXRhKTtcblx0XHRcdFx0XHRcdExvZy5kKCdMb2NhbH51bi1zdWJzY3JpYmVkJywgc3Vic2NyaWJlcik7XG5cdFx0XHRcdFx0XHRjb25zdCBjbG9zZWRQQyA9IGNhY2hlLnBlZXJDb25uZWN0aW9ucy5jbG9zZShzaGFyZWRTdHJlYW0udWlkLCBzdWJzY3JpYmVyLmRldmljZSk7XG5cdFx0XHRcdFx0XHRzaGFyZWRTdHJlYW0ucGVlckNvbm5lY3Rpb25zID0gc2hhcmVkU3RyZWFtLnBlZXJDb25uZWN0aW9ucy5maWx0ZXIocGMgPT4gcGMgIT09IGNsb3NlZFBDKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdExvZy5lLmJpbmQoTG9nKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRMb2cuZCgnTG9jYWx+c2hhcmVkJywge3NoYXJlZFN0cmVhbX0pO1xuXHRcdFx0XHRyZXR1cm4gc2hhcmVkU3RyZWFtO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgbG9jYWwgc3RyZWFtXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByb29tSWQgVGhlIHJvb20gSWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHN0cmVhbSB0eXBlLCBzZWUge0BsaW5rIFN0cmVhbVR5cGVzfSBmb3IgcG9zc2libGUgdmFsdWVzXG5cdCAqIEBwYXJhbSB7P0VsZW1lbnR9IGNvbnRhaW5lciBUaGUgZWxlbWVudCB0aGUgc3RyZWFtIGlzIGF0dGFjaGVkIHRvLlxuXHQgKiBAcGFyYW0gez9NZWRpYVN0cmVhbUNvbnN0cmFpbnRzfSBbY29uc3RyYWludHNdIFRoZSBzdHJlYW0gY29uc3RyYWludHMuIElmIG5vdCBkZWZpbmVkIHRoZSBjb25zdHJhaW50cyBkZWZpbmVkIGluIFJlYWNoQ29uZmlnIHdpbGwgYmUgdXNlZC5cblx0ICogQHJldHVybnMge1Byb21pc2U8TG9jYWwsIEVycm9yPn1cblx0ICovXG5cdHN0YXRpYyBnZXRMb2NhbFZpZGVvKHJvb21JZCwgdHlwZSwgY29udGFpbmVyLCBjb25zdHJhaW50cykge1xuXHRcdGNvbnNvbGUubG9nKCdMb2NhbH5zaGFyZSBvbiBlbnRyZSBpY2knKTtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIHNoYXJlIGEgc3RyZWFtLicpKTtcblx0XHR9XG5cdFx0Y29uc3Qgc3RyZWFtTWV0YURhdGEgPSB7XG5cdFx0XHRcdGZyb206IGNhY2hlLnVzZXIudWlkLFxuXHRcdFx0XHRkZXZpY2U6IGNhY2hlLmRldmljZSxcblx0XHRcdFx0dXNlckFnZW50OiBjYWNoZS51c2VyQWdlbnQsXG5cdFx0XHRcdHR5cGVcblx0XHRcdH0sXG5cdFx0XHRzaGFyZWRTdHJlYW0gPSBuZXcgTG9jYWwoT2JqZWN0LmFzc2lnbih7cm9vbUlkLCBjb25zdHJhaW50cywgY29udGFpbmVyfSwgc3RyZWFtTWV0YURhdGEpKTtcblx0XHRzaGFyZWRTdHJlYW0uc3RyZWFtTWV0YURhdGEgPSBzdHJlYW1NZXRhRGF0YTtcblx0XHRMb2cuZCgnTG9jYWx+c2hhcmUnLCB7c2hhcmVkU3RyZWFtfSk7XG5cdFx0Y29uc29sZS5sb2coJ0xvY2FsfnNoYXJlJywge3NoYXJlZFN0cmVhbX0pO1xuXHRcdHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShzaGFyZWRTdHJlYW0uY29uc3RyYWludHMpXG5cdFx0XHQudGhlbihtZWRpYSA9PiB7XG5cdFx0XHRcdHNoYXJlZFN0cmVhbS5tZWRpYSA9IG1lZGlhO1xuXHRcdFx0XHRyZXR1cm4gc2hhcmVkU3RyZWFtO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogUHVibGlzaCBhIGxvY2FsIHN0cmVhbVxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcmV0dXJucyB7TG9jYWx9XG5cdCAqL1xuXHRzdGF0aWMgcHVibGlzaChzaGFyZWRTdHJlYW0pIHtcblx0XHRMb2cuZCgnTG9jYWx+cHVibGlzaCcpO1xuXHRcdGNvbnN0IHJvb21JZCA9IHNoYXJlZFN0cmVhbS5yb29tSWQ7XG5cdFx0cmV0dXJuIERhdGFTeW5jLnB1c2goYF8vcm9vbXMvJHtyb29tSWR9L3N0cmVhbXNgLCBzaGFyZWRTdHJlYW0uc3RyZWFtTWV0YURhdGEpXG5cdFx0XHQudGhlbihzdHJlYW1SZWYgPT4ge1xuXHRcdFx0XHRzaGFyZWRTdHJlYW0udWlkID0gc3RyZWFtUmVmLm5hbWUoKTtcblx0XHRcdFx0aWYgKHNoYXJlZFN0cmVhbS5pc1ZpZGVvTG9hZGVkKSB7XG5cdFx0XHRcdFx0Y29uc3Qgc3RyZWFtU2l6ZSA9IHtcblx0XHRcdFx0XHRcdGhlaWdodDogc2hhcmVkU3RyZWFtLm5vZGUudmlkZW9IZWlnaHQsXG5cdFx0XHRcdFx0XHR3aWR0aDogc2hhcmVkU3RyZWFtLm5vZGUudmlkZW9XaWR0aCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHN0cmVhbVJlZi51cGRhdGUoc3RyZWFtU2l6ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2hhcmVkU3RyZWFtLm5vZGUub25sb2FkZWRkYXRhID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBzdHJlYW1TaXplID0ge1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IHNoYXJlZFN0cmVhbS5ub2RlLnZpZGVvSGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogc2hhcmVkU3RyZWFtLm5vZGUudmlkZW9XaWR0aCxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRzdHJlYW1SZWYudXBkYXRlKHN0cmVhbVNpemUpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHNoYXJlZFN0cmVhbS5ub2RlICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHN0cmVhbVNpemUgPSB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogc2hhcmVkU3RyZWFtLm5vZGUudmlkZW9IZWlnaHQsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiBzaGFyZWRTdHJlYW0ubm9kZS52aWRlb1dpZHRoLFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHN0cmVhbVJlZi51cGRhdGUoc3RyZWFtU2l6ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHRcdC8vIFNhdmUgc2hhcmVkU3RyZWFtXG5cdFx0XHRcdGNhY2hlLnN0cmVhbXMuc2hhcmVkW3NoYXJlZFN0cmVhbS51aWRdID0gc2hhcmVkU3RyZWFtO1xuXHRcdFx0XHQvLyBSZW1vdmUgc2hhcmVkIHN0cmVhbSBvbiBEaXNjb25uZWN0XG5cdFx0XHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9yb29tcy8ke3Jvb21JZH0vc3RyZWFtcy8ke3NoYXJlZFN0cmVhbS51aWR9YCkucmVtb3ZlKCk7XG5cdFx0XHRcdC8vIFJlbW92ZSBzaGFyZWQgc3RyZWFtIG9uIERpc2Nvbm5lY3Rcblx0XHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL3Jvb21zLyR7cm9vbUlkfS9zdWJzY3JpYmVycy8ke3NoYXJlZFN0cmVhbS51aWR9YCkucmVtb3ZlKCk7XG5cdFx0XHRcdC8vIFN0YXJ0IGxpc3RlbmluZyB0byBzdWJzY3JpYmVyc1xuXHRcdFx0XHRjb25zdFxuXHRcdFx0XHRcdHBhdGggPSBgXy9yb29tcy8ke3NoYXJlZFN0cmVhbS5yb29tSWR9L3N1YnNjcmliZXJzLyR7c2hhcmVkU3RyZWFtLnVpZH1gLFxuXHRcdFx0XHRcdHZhbHVlID0gc25hcERhdGEgPT4gT2JqZWN0LmFzc2lnbih7ZGV2aWNlOiBzbmFwRGF0YS5uYW1lKCl9LCBzbmFwRGF0YS52YWwoKSB8fCB7fSk7XG5cdFx0XHRcdERhdGFTeW5jLm9uKHBhdGgsICdjaGlsZF9hZGRlZCcsXG5cdFx0XHRcdFx0c25hcERhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9IHZhbHVlKHNuYXBEYXRhKTtcblx0XHRcdFx0XHRcdExvZy5kKCdMb2NhbH5zdWJzY3JpYmVkJywgc3Vic2NyaWJlcik7XG5cdFx0XHRcdFx0XHRjYWNoZS5wZWVyQ29ubmVjdGlvbnMub2ZmZXIoc2hhcmVkU3RyZWFtLCBzdWJzY3JpYmVyKVxuXHRcdFx0XHRcdFx0XHQudGhlbihwYyA9PiBzaGFyZWRTdHJlYW0ucGVlckNvbm5lY3Rpb25zLnB1c2gocGMpKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdExvZy5lLmJpbmQoTG9nKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHREYXRhU3luYy5vbihwYXRoLCAnY2hpbGRfcmVtb3ZlZCcsXG5cdFx0XHRcdFx0c25hcERhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9IHZhbHVlKHNuYXBEYXRhKTtcblx0XHRcdFx0XHRcdExvZy5kKCdMb2NhbH51bi1zdWJzY3JpYmVkJywgc3Vic2NyaWJlcik7XG5cdFx0XHRcdFx0XHRjb25zdCBjbG9zZWRQQyA9IGNhY2hlLnBlZXJDb25uZWN0aW9ucy5jbG9zZShzaGFyZWRTdHJlYW0udWlkLCBzdWJzY3JpYmVyLmRldmljZSk7XG5cdFx0XHRcdFx0XHRzaGFyZWRTdHJlYW0ucGVlckNvbm5lY3Rpb25zID0gc2hhcmVkU3RyZWFtLnBlZXJDb25uZWN0aW9ucy5maWx0ZXIocGMgPT4gcGMgIT09IGNsb3NlZFBDKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdExvZy5lLmJpbmQoTG9nKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRMb2cuZCgnTG9jYWx+c2hhcmVkJywge3NoYXJlZFN0cmVhbX0pO1xuXHRcdFx0XHRyZXR1cm4gc2hhcmVkU3RyZWFtO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3N0cmVhbS9Mb2NhbC5qcyIsImltcG9ydCBSZW1vdGUgZnJvbSAnLi9SZW1vdGUnO1xuXG4vKipcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmVhbU1hbmFnZXIge1xuXHQvKipcblx0ICogQ29uc3RydWN0b3Jcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8qKlxuXHRcdCAqIFNoYXJlZCBsb2NhbCBzdHJlYW1zXG5cdFx0ICogQHR5cGUge3sqOiBMb2NhbH19XG5cdFx0ICovXG5cdFx0dGhpcy5zaGFyZWQgPSB7fTtcblx0XHQvKipcblx0XHQgKiBTdWJzY3JpYmVkIHJlbW90ZSBzdHJlYW1zXG5cdFx0ICogQHR5cGUge3sqOiBSZW1vdGV9fVxuXHRcdCAqL1xuXHRcdHRoaXMucmVtb3RlID0ge307XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgUmVtb3RlIHN0cmVhbSByZWZlcmVuY2Vcblx0ICogQHBhcmFtIHtvYmplY3R9IHN0cmVhbURhdGFcblx0ICogQHJldHVybnMge1JlbW90ZX1cblx0ICovXG5cdGdldFJlbW90ZShzdHJlYW1EYXRhKSB7XG5cdFx0bGV0IHJlbW90ZVN0cmVhbSA9IHRoaXMucmVtb3RlW3N0cmVhbURhdGEudWlkXTtcblx0XHRpZihyZW1vdGVTdHJlYW0pIHtcblx0XHRcdHJlbW90ZVN0cmVhbS51cGRhdGUoc3RyZWFtRGF0YSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVtb3RlW3N0cmVhbURhdGEudWlkXSA9IHJlbW90ZVN0cmVhbSA9IG5ldyBSZW1vdGUoc3RyZWFtRGF0YSk7XG5cdFx0fVxuXHRcdHJldHVybiByZW1vdGVTdHJlYW07XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgUmVtb3RlIHN0cmVhbSByZWZlcmVuY2Vcblx0ICogQHBhcmFtIHtvYmplY3R9IHN0cmVhbURhdGFcblx0ICogQHJldHVybnMge1JlbW90ZX1cblx0ICovXG5cdGdldFNoYXJlZChzdHJlYW1EYXRhKSB7XG5cdFx0Ly8gVE9ETzogSWYgaXQgZG9lcyBub3QgZXhpc3RzIGxvY2FsbHkgYXMgaXQgc2hvdWxkLCBtYXliZSB3ZSBzaG91bGQgcmVtb3ZlIGl0ID9cblx0XHRyZXR1cm4gdGhpcy5zaGFyZWRbc3RyZWFtRGF0YS51aWRdO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3N0cmVhbS9TdHJlYW1NYW5hZ2VyLmpzIiwiLypnbG9iYWwgUlRDUGVlckNvbm5lY3Rpb24qL1xuLypnbG9iYWwgUlRDUnRwU2VuZGVyKi9cbmltcG9ydCBjYWNoZSBmcm9tICcuLi91dGlsL2NhY2hlJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuLi91dGlsL0xvZyc7XG5pbXBvcnQgTWVkaWEgZnJvbSAnLi4vdXRpbC9NZWRpYSc7XG5pbXBvcnQgRGV2aWNlIGZyb20gJy4uL0RldmljZSc7XG5pbXBvcnQgKiBhcyBEYXRhU3luYyBmcm9tICcuLi91dGlsL0RhdGFTeW5jJztcbmltcG9ydCB7T1BFTkVELCBDTE9TSU5HLCBDTE9TRUR9IGZyb20gJy4uL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCAnY29yZS1qcy9mbi9hcnJheS9maW5kJztcblxuY29uc3QgRHRsc1NydHBLZXlBZ3JlZW1lbnQgPSB7RHRsc1NydHBLZXlBZ3JlZW1lbnQ6IHRydWV9O1xuY29uc3Qgc2RwQ29uc3RyYWludHMgPSByZWNlaXZlID0+ICh7T2ZmZXJUb1JlY2VpdmVBdWRpbzogcmVjZWl2ZSwgT2ZmZXJUb1JlY2VpdmVWaWRlbzogcmVjZWl2ZX0pO1xuLyoqXG4gKiBJQ0UgY29ubmVjdGlvbiBzdGF0dXMgOiBkaXNjb25uZWN0ZWRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfRElTQ09OTkVDVEVEID0gJ2Rpc2Nvbm5lY3RlZCc7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGNvbm5lY3RlZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBJQ0VfQ09OTkVDVElPTl9TVEFURV9DT05ORUNURUQ9ICdjb25uZWN0ZWQnO1xuLyoqXG4gKiBJQ0UgY29ubmVjdGlvbiBzdGF0dXMgOiBjb21wbGV0ZWRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09NUExFVEVEID0gJ2NvbXBsZXRlZCc7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGNoZWNraW5nXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElDRV9DT05ORUNUSU9OX1NUQVRFX0NIRUNLSU5HID0gJ2NoZWNraW5nJztcbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogY2xvc2VkXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElDRV9DT05ORUNUSU9OX1NUQVRFX0NMT1NFRCA9ICdjbG9zZWQnO1xuLyoqXG4gKiBJQ0UgY29ubmVjdGlvbiBzdGF0dXMgOiBmYWlsZWRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfRkFJTEVEID0gJ2ZhaWxlZCc7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGFub3RoZXIgc3RhdHVzXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElDRV9DT05ORUNUSU9OX1NUQVRFX09USEVSPSAnb3RoZXInO1xuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmNvbnN0IF90b0pTT04gPSBvID0+IG8udG9KU09OICYmIHR5cGVvZiBvLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJyA/IG8udG9KU09OKCkgOiBvO1xuLyoqXG4gKiBUaGUgUGVlckNvbm5lY3Rpb24uIEEgUGVlckNvbm5lY3Rpb24gd2lsbCBvbmx5IGNvbmNlcm4gb25lIE1lZGlhU3RyZWFtLlxuICogQGNsYXNzIFBlZXJDb25uZWN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlZXJDb25uZWN0aW9uIHtcblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGFja0lkIFRoZSBXZWJSVEMgc3RhY2sgSURcblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cmVhbUlkIFRoZSBTdHJlYW0gVUlEXG5cdCAqIEBwYXJhbSB7UmVtb3RlfHt0bzogc3RyaW5nfGZyb206IHN0cmluZywgZGV2aWNlOnN0cmluZ319IHJlbW90ZSBUaGUgcmVtb3RlIGluZm9ybWF0aW9uXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gcHVibGlzaCBQdWJsaXNoIG9yIFN1YnNjcmliZSA/XG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzdGFja0lkLCBzdHJlYW1JZCwgcmVtb3RlLCBwdWJsaXNoKSB7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHN0YWNrIGlkZW50aWZpZXIuIFVzZWQgdG8gaWRlbnRpZnkgZXhjaGFuZ2VzIGJldHdlZW4gMiBkZXZpY2VzXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnN0YWNrSWQgPSBzdGFja0lkO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBzdHJlYW0gaWQuIChPbmUgc3RyZWFtIHBlciBSVENQZWVyQ29ubmVjdGlvbilcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuc3RyZWFtSWQgPSBzdHJlYW1JZDtcblx0XHQvKipcblx0XHQgKiBUaGUgcmVtb3RlIGRldmljZVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5yZW1vdGUgPSByZW1vdGU7XG5cdFx0LyoqXG5cdFx0ICogcHVibGlzaCA6IGEgY3JlYXRlZCBwZWVyIGNvbm5lY3Rpb24gb3IgYSByZW1vdGUgb25lXG5cdFx0ICogQHR5cGUge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGhpcy5wdWJsaXNoID0gcHVibGlzaDtcblx0XHQvKipcblx0XHQgKiBQYXRoIGZvciBsb2NhbCBzaWduYWxpemF0aW9uXG5cdFx0ICogQGFjY2VzcyBwcml2YXRlXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLl9sb2NhbFBhdGggPSBgXy93ZWJydGMvJHt0aGlzLnN0YWNrSWR9LyR7dGhpcy5zdHJlYW1JZH0vJHtjYWNoZS5kZXZpY2V9YDtcblx0XHQvKipcblx0XHQgKiBQYXRoIGZvciBsb2NhbCBzaWduYWxpemF0aW9uXG5cdFx0ICogQGFjY2VzcyBwcml2YXRlXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLl9yZW1vdGVQYXRoID0gYF8vd2VicnRjLyR7dGhpcy5zdGFja0lkfS8ke3RoaXMuc3RyZWFtSWR9LyR7dGhpcy5yZW1vdGUuZGV2aWNlfWA7XG5cdFx0LyoqXG5cdFx0ICogSW5kaWNhdGVzIGlmIHRoZSBQZWVyQ29ubmVjdGlvbiBoYXMgYmVlbiBlc3RhYmxpc2hlZC4gKFVzZWZ1bCBmb3IgcmVuZWdvdGlhdGlvbikuXG5cdFx0ICogQHR5cGUge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGhpcy5uZWdvdGlhdGVkID0gZmFsc2U7XG5cdFx0LyoqXG5cdFx0ICogVGhlIERPTSBlbGVtZW50IHdoZXJlIHRoZSByZW1vdGUgTWVkaWFTdHJlYW0gd2lsbCBiZSBkaXNwbGF5ZWRcblx0XHQgKiBAdHlwZSB7RWxlbWVudH1cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5ub2RlID0gbnVsbDtcblx0XHQvKipcblx0XHQgKiBUaGUgRE9NIGVsZW1lbnQgY29udGFpbmcgdGhlIG1lZGlhIGVsZW1lbnRcblx0XHQgKiBAdHlwZSB7RWxlbWVudH1cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5jb250YWluZXIgPSBudWxsO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBhY3R1YWwgUlRDUGVlckNvbm5lY3Rpb25cblx0XHQgKiBAdHlwZSB7UlRDUGVlckNvbm5lY3Rpb259XG5cdFx0ICovXG5cdFx0dGhpcy5wYyA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihcblx0XHRcdHtcblx0XHRcdFx0aWNlU2VydmVyczogY2FjaGUuY29uZmlnLmljZVNlcnZlcnNcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG9wdGlvbmFsOiBbRHRsc1NydHBLZXlBZ3JlZW1lbnRdLFxuXHRcdFx0XHRtYW5kYXRvcnk6IHNkcENvbnN0cmFpbnRzKCFwdWJsaXNoKVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0Ly8gSGFuZGxlIElDRSBjYW5kaWRhdGVzXG5cdFx0dGhpcy5wYy5vbmljZWNhbmRpZGF0ZSA9IGUgPT4ge1xuXHRcdFx0aWYgKCF0aGlzLm5lZ290aWF0ZWQgJiYgZS5jYW5kaWRhdGUpIHtcblx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufm9uaWNlY2FuZGlkYXRlJywgZS5jYW5kaWRhdGUpO1xuXHRcdFx0XHREYXRhU3luYy5wdXNoKGAke3RoaXMuX2xvY2FsUGF0aH0vaWNlYCwgX3RvSlNPTihlLmNhbmRpZGF0ZSkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0dGhpcy5wYy5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSA9ICgpID0+IHtcblx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZScsIHRoaXMucGMpO1xuXHRcdFx0Y29uc3QgaWNlQ29ubmVjdGlvblN0YXRlID0gdGhpcy5wYy5pY2VDb25uZWN0aW9uU3RhdGU7XG5cdFx0XHRzd2l0Y2ggKGljZUNvbm5lY3Rpb25TdGF0ZSkge1xuXHRcdFx0XHRjYXNlIElDRV9DT05ORUNUSU9OX1NUQVRFX0NIRUNLSU5HOlxuXHRcdFx0XHRcdC8vIE5vdGhpbmcgdG8gZG8geWV0XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09OTkVDVEVEOlxuXHRcdFx0XHRcdHRoaXMuX2F0dGFjaFN0cmVhbSgpO1xuXHRcdFx0XHRcdHRoaXMuX3JlbW90ZUlDRUNhbmRpZGF0ZXMoZmFsc2UpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIElDRV9DT05ORUNUSU9OX1NUQVRFX0NPTVBMRVRFRDpcblx0XHRcdFx0XHR0aGlzLl9yZW1vdGVJQ0VDYW5kaWRhdGVzKGZhbHNlKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBJQ0VfQ09OTkVDVElPTl9TVEFURV9ESVNDT05ORUNURUQ6XG5cdFx0XHRcdGNhc2UgSUNFX0NPTk5FQ1RJT05fU1RBVEVfRkFJTEVEOlxuXHRcdFx0XHRcdExvZy5lKCdQZWVyQ29ubmVjdGlvbn5zdGF0ZURpc2Nvbm5lY3RlZCcsICdEaXNjb25uZWN0IFBlZXJDb25uZWN0aW9uJyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0xPU0VEOlxuXHRcdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5zdGF0ZWNsb3NlZCcsICdDbG9zZSBQZWVyQ29ubmVjdGlvbicpO1xuXHRcdFx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHRoaXMubmVnb3RpYXRlZCA9IHRoaXMubmVnb3RpYXRlZCB8fCB0aGlzLmlzQ29ubmVjdGVkO1xuXHRcdH07XG5cblx0XHR0aGlzLnBjLm9uaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG5cdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b25pY2VnYXRoZXJpbmdzdGF0ZWNoYW5nZScsIHRoaXMucGMuaWNlR2F0aGVyaW5nU3RhdGUpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBQZWVyQ29ubmVjdGlvbiBzdGF0dXNcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fc3RhdHVzID0gT1BFTkVEO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZSBJQ0UgQ2FuZGlkYXRlcyBkaXNjb3Zlcnlcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gbGlzdGVuIEluZGljYXRlcyBpZiB3ZSBzaG91bGQgbGlzdGVuIHRvIG5ldyBJQ0UgY2FuZGlkYXRlc1xuXHQgKi9cblx0X3JlbW90ZUlDRUNhbmRpZGF0ZXMobGlzdGVuKSB7XG5cdFx0Y29uc3Rcblx0XHRcdHBhdGggPSBgJHt0aGlzLl9yZW1vdGVQYXRofS9pY2VgLFxuXHRcdFx0ZXZlbnQgPSAnY2hpbGRfYWRkZWQnO1xuXHRcdGlmKGxpc3Rlbikge1xuXHRcdFx0Ly8gZG9uJ3QgbGlzdGVuIHRvIGljZSBjYW5kaWRhdGVzIGlmIHBjIGlzIGFscmVhZHkgdXAgKHJlbmVnb3RpYXRpb24pXG5cdFx0XHREYXRhU3luYy5vbihwYXRoLCBldmVudCwgc25hcCA9PiB7XG5cdFx0XHRcdGNvbnN0IGNhbmRpZGF0ZSA9IHNuYXAudmFsKCk7XG5cdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5hZGRJY2VDYW5kaWRhdGUnLCBjYW5kaWRhdGUpO1xuXHRcdFx0XHR0aGlzLnBjLmFkZEljZUNhbmRpZGF0ZShuZXcgUlRDSWNlQ2FuZGlkYXRlKGNhbmRpZGF0ZSkpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdERhdGFTeW5jLm9mZihwYXRoLCBldmVudCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEF0dGFjaCB0aGUgcmVtb3RlIE1lZGlhU3RyZWFtIHRvIGEgbm9kZVxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9hdHRhY2hTdHJlYW0gKCkge1xuXHRcdGlmKHRoaXMucmVtb3RlU3RyZWFtICYmIHRoaXMuaXNDb25uZWN0ZWQpIHtcblx0XHRcdHRoaXMubm9kZSA9IE1lZGlhLmF0dGFjaFN0cmVhbSh0aGlzLnJlbW90ZVN0cmVhbSwgdGhpcy5jb250YWluZXIsIHRoaXMubm9kZSk7XG5cdFx0XHQvLyB0aGlzLm5vZGUubXV0ZWQgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVGhlIHJlbW90ZSBNZWRpYVN0cmVhbVxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAdHlwZSB7TWVkaWFTdHJlYW19XG5cdCAqL1xuXHRzZXQgcmVtb3RlU3RyZWFtIChzdHJlYW0pIHtcblx0XHQvKipcblx0XHQgKiBAaWdub3JlXG5cdFx0ICovXG5cdFx0dGhpcy5fcmVtb3RlU3RyZWFtID0gc3RyZWFtO1xuXHRcdHRoaXMuX2F0dGFjaFN0cmVhbSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSByZW1vdGUgTWVkaWFTdHJlYW1cblx0ICogQHR5cGUge01lZGlhU3RyZWFtfVxuXHQgKi9cblx0Z2V0IHJlbW90ZVN0cmVhbSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3JlbW90ZVN0cmVhbTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbmRpY2F0ZXMgaWYgdGhlIFBlZXJDb25uZWN0aW9uIGlzIGVzdGFibGlzaGVkIGJhc2VkIG9uIElDRSBjb25uZWN0aW9uIHN0YXRlXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0Z2V0IGlzQ29ubmVjdGVkICgpIHtcblx0XHRyZXR1cm4gdGhpcy5wYyAmJlxuXHRcdFx0ISF+W1xuXHRcdFx0XHRJQ0VfQ09OTkVDVElPTl9TVEFURV9DT05ORUNURUQsXG5cdFx0XHRcdElDRV9DT05ORUNUSU9OX1NUQVRFX0NPTVBMRVRFRCxcblx0XHRcdFx0SUNFX0NPTk5FQ1RJT05fU1RBVEVfT1RIRVJcblx0XHRcdF0uaW5kZXhPZih0aGlzLnBjLmljZUNvbm5lY3Rpb25TdGF0ZSk7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdCBSVENQZWVyQ29ubmVjdGlvbiBmb3Igc3Vic2NyaWJlcnNcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIGh0bWxFbGVtZW50XG5cdCAqIEByZXR1cm5zIHtQcm9taXNlLjxQZWVyQ29ubmVjdGlvbj59XG5cdCAqL1xuXHRhbnN3ZXIoaHRtbEVsZW1lbnQpIHtcblx0XHRMb2cuaSgnUGVlckNvbm5lY3Rpb25+YW5zd2VyJywge2h0bWxFbGVtZW50LCBwZWVyQ29ubmVjdGlvbjogdGhpc30pO1xuXHRcdHRoaXMuY29udGFpbmVyID0gaHRtbEVsZW1lbnQ7XG5cdFx0aWYoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUsICdvbnRyYWNrJykpIHtcblx0XHRcdHRoaXMucGMub250cmFjayA9IGUgPT4ge1xuXHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b250cmFjaycsIGUuc3RyZWFtc1swXSk7XG5cdFx0XHRcdHRoaXMucmVtb3RlU3RyZWFtID0gZS5zdHJlYW1zWzBdO1xuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wYy5vbmFkZHN0cmVhbSA9IGUgPT4ge1xuXHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b25hZGRzdHJlYW0nLCBlLnN0cmVhbSk7XG5cdFx0XHRcdHRoaXMucmVtb3RlU3RyZWFtID0gZS5zdHJlYW07XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIExpc3RlbiB0byBTRFAgb2ZmZXJcblx0XHREYXRhU3luYy5vbihgJHt0aGlzLl9yZW1vdGVQYXRofS9zZHBgLCAndmFsdWUnLCBzbmFwID0+IHtcblx0XHRcdExvZy5kKCdPZmZlciByZW1vdGVQYXRoPScsIHRoaXMuX3JlbW90ZVBhdGgpO1xuXHRcdFx0Y29uc3Qgc2RwT2ZmZXIgPSBzbmFwLnZhbCgpO1xuXHRcdFx0TG9nLmQoJ09mZmVyIHNkcE9mZmVyPScsIHNkcE9mZmVyKTtcblx0XHRcdGlmKHNkcE9mZmVyICE9IG51bGwpIHtcblx0XHRcdFx0TG9nLmQoYFBlZXJDb25uZWN0aW9ufm9mZmVyZWQgJHtzZHBPZmZlci5zZHB9YCk7XG5cdFx0XHRcdHRoaXMucGMuc2V0UmVtb3RlRGVzY3JpcHRpb24oc2RwT2ZmZXIpXG5cdFx0XHRcdFx0LnRoZW4oKCkgPT4gTG9nLmQoJ1BlZXJDb25uZWN0aW9ufmFuc3dlciNyZW1vdGVEZXNjcmlwdGlvbicsIHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24uc2RwKSlcblx0XHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoL15vZmZlciQvLnRlc3QodGhpcy5wYy5yZW1vdGVEZXNjcmlwdGlvbi50eXBlKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wYy5jcmVhdGVBbnN3ZXIoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1NEUCBpcyBub3QgYW4gb2ZmZXInKSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQudGhlbihkZXNjcmlwdGlvbiA9PiB0aGlzLl9zZXRQcmVmZXJyZWRDb2RlY3MoZGVzY3JpcHRpb24pKVxuXHRcdFx0XHRcdC50aGVuKGRlc2NyaXB0aW9uID0+IHRoaXMucGMuc2V0TG9jYWxEZXNjcmlwdGlvbihkZXNjcmlwdGlvbikpXG4vL1x0XHRcdFx0XHQudGhlbigoKSA9PiBjb25zb2xlLmxvZygnUGVlckNvbm5lY3Rpb25+YW5zd2VyI2xvY2FsU0RQJywgdGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uLnNkcCkpXG5cdFx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufmFuc3dlciNsb2NhbFNEUCcsIHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbi5zZHApO1xuXHRcdFx0XHRcdFx0dGhpcy5fcmVtb3RlSUNFQ2FuZGlkYXRlcyh0cnVlKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdQZWVyQ29ubmVjdGlvbn5hbnN3ZXIjbG9jYWxTRFAnLCB0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24uc2RwKSlcblx0XHRcdFx0XHQudGhlbigoKSA9PiB0aGlzLl9zZW5kU2RwVG9SZW1vdGUoKSlcblx0XHRcdFx0XHQuY2F0Y2goTG9nLnIoJ1BlZXJDb25uZWN0aW9ufmFuc3dzZXIjZXJyb3InKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgUlRDUGVlckNvbm5lY3Rpb24gZm9yIHB1Ymxpc2hlcnNcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHN0cmVhbVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZS48UGVlckNvbm5lY3Rpb24+fVxuXHQgKi9cblx0b2ZmZXIoc3RyZWFtKSB7XG5cdFx0TG9nLmkoJ1BlZXJDb25uZWN0aW9ufm9mZmVyJywge3N0cmVhbSwgcGVlckNvbm5lY3Rpb246IHRoaXN9KTtcblx0XHRsZXQgc2VuZFRpbWVvdXQ7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMucGMub25uZWdvdGlhdGlvbm5lZWRlZCA9ICgpID0+IHtcblx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufm9ubmVnb3RpYXRpb25uZWVkZWQnKTtcblx0XHRcdFx0Ly8gRGVib3VuY2Ugc2VuZCAocmVuZWdvdGlhdGlvbiB0cmlnZ2VycyBtdWx0aXBsZSBuZWdvdGlhdGlvbm5lZWRlZCBldmVudHMpXG5cdFx0XHRcdGlmKHNlbmRUaW1lb3V0KSB7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHNlbmRUaW1lb3V0KTtcblx0XHRcdFx0XHRzZW5kVGltZW91dCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VuZFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRzZW5kVGltZW91dCA9IG51bGw7XG5cdFx0XHRcdFx0dGhpcy5fc2VuZE9mZmVyKClcblx0XHRcdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh0aGlzKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuY2F0Y2goZSA9PiB7XG5cdFx0XHRcdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vZmZlcicsIGUpO1xuXHRcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSwgMjApO1xuXHRcdFx0fTtcblx0XHRcdERhdGFTeW5jLm9uKGAke3RoaXMuX3JlbW90ZVBhdGh9L3NkcGAsICd2YWx1ZScsIHNuYXAgPT4ge1xuXHRcdFx0XHRjb25zdCBzZHBBbnN3ZXIgPSBzbmFwLnZhbCgpO1xuXHRcdFx0XHRpZihzZHBBbnN3ZXIgIT0gbnVsbCkge1xuXHRcdFx0XHRcdExvZy5kKGBQZWVyQ29ubmVjdGlvbn5vZmZlciNhbnN3ZXJlZCAke3NkcEFuc3dlci5zZHB9YCk7XG5cdFx0XHRcdFx0dGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihzZHBBbnN3ZXIpXG5cdFx0XHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vZmZlciNyZW1vdGVEZXNjcmlwdGlvbicsIHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24uc2RwKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fcmVtb3RlSUNFQ2FuZGlkYXRlcyh0cnVlKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuY2F0Y2goTG9nLmUuYmluZChMb2csICdQZWVyQ29ubmVjdGlvbn5vZmZlciNyZW1vdGVEZXNjcmlwdGlvbicpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLl9hbHRlclN0cmVhbShzdHJlYW0sICdhZGQnKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBFZGl0cyB0aGUgU0RQIHRvIHNldCB0aGUgcHJlZmVycmVkIGF1ZGlvL3ZpZGVvIGNvZGVjXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc2RwIFRoZSBzZHAgdG8gYmUgbW9kaWZpZWRcblx0ICogQHJldHVybnMge3N0cmluZ319XG5cdCovXG5cdC8qX2FkZFZQOENvZGVjKHNkcCkge1xuXHRcdGxldCBzZHByZXN1bHQgPSBzZHA7XG5cdFx0Ly8gTG9nLmQoJ1BlZXJDb25uZWN0aW9ufl9hZGRWUDhDb2RlYycpO1xuXHRcdGlmIChzZHByZXN1bHQgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cblx0XHRjb25zdCBzZHBMaW5lcyA9IHNkcHJlc3VsdC5zcGxpdCgvXFxyP1xcbi8pO1xuXHRcdGNvbnN0IG1lZGlhcyA9IHthdWRpbzogW10sIHZpZGVvOiBbXX07XG5cdFx0bGV0IGN1cnJlbnQgPSBudWxsO1xuXHRcdGxldCB2cDhJblZpZGVvTGlzdCA9IGZhbHNlO1xuXHRcdGxldCBoMjY0SW5WaWRlb0xpc3QgPSBmYWxzZTtcblx0XHRsZXQgbGFzdEluZGV4ID0gMDtcblx0XHRsZXQgZmlyc3RJbmRleCA9IDA7XG5cdFx0Ly8gUGFyc2UgU0RQXG5cdFx0c2RwTGluZXMuZm9yRWFjaCgoc2RwTGluZSwgaSkgPT4ge1xuXHRcdFx0aWYoL15tPXZpZGVvLy50ZXN0KHNkcExpbmUpKSB7XG5cdFx0XHRcdGNvbnN0IGQgPSAvXm09KFxcdyspXFxzWzAtOVxcL10rXFxzW0EtWmEtejAtOVxcL10rXFxzKFswLTlcXHNdKykvLmV4ZWMoc2RwTGluZSk7XG5cdFx0XHRcdGN1cnJlbnQgPSB7IGZtdDogZFsyXS5zcGxpdCgvXFxzLyksIGluZGV4OiBpLCBjb2RlY3M6IFtdIH07XG5cdFx0XHRcdG1lZGlhc1tkWzFdXS5wdXNoKGN1cnJlbnQpO1xuXHRcdFx0XHRsYXN0SW5kZXggPSBjdXJyZW50LmZtdFtjdXJyZW50LmZtdC5sZW5ndGggLSAxXTtcblx0XHRcdFx0Zmlyc3RJbmRleCA9IGN1cnJlbnQuZm10WzBdO1xuXHRcdFx0fSBlbHNlIGlmKGN1cnJlbnQgJiYgL15hPXJ0cG1hcDovLnRlc3Qoc2RwTGluZSkpIHtcblx0XHRcdFx0Y29uc3QgYyA9IC9eYT1ydHBtYXA6KFxcZCspXFxzKFthLXpBLVowLTlcXC1cXC9dKykvLmV4ZWMoc2RwTGluZSk7XG5cdFx0XHRcdGlmKGMpIHtcblx0XHRcdFx0XHRjdXJyZW50LmNvZGVjcy5wdXNoKHsgaWQ6IGNbMV0sIG5hbWU6IGNbMl0sIGluZGV4OiBpIH0pO1xuXHRcdFx0XHRcdGlmIChjWzBdLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignVlA4JykgIT09IC0xKSB7IHZwOEluVmlkZW9MaXN0PXRydWU7IH1cblx0XHRcdFx0XHRpZiAoY1swXS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ0gyNjQnKSAhPT0gLTEpIHsgaDI2NEluVmlkZW9MaXN0PXRydWU7IH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNvbnN0IHZpZGVvSW5kZXggPSBtZWRpYXMudmlkZW9bMF0uaW5kZXg7XG5cdFx0aWYgKCF2cDhJblZpZGVvTGlzdCkge1xuXHRcdFx0Ly8gbGFzdEluZGV4Kys7XG5cdFx0XHRsYXN0SW5kZXggPSBmaXJzdEluZGV4IC0gMTtcblx0XHRcdGxldCBlc3NhaSA9IHNkcExpbmVzW3ZpZGVvSW5kZXhdO1xuXHRcdFx0Zm9yIChsZXQgbWVkaWEgaW4gbWVkaWFzLnZpZGVvWzBdLmZtdCkge1xuXHRcdFx0XHRlc3NhaSA9IGVzc2FpLnJlcGxhY2UoJyAnK21lZGlhcy52aWRlb1swXS5mbXRbbWVkaWFdLCcnKTtcblx0XHRcdH1cblx0XHRcdGVzc2FpID0gZXNzYWkuY29uY2F0KCcgJytsYXN0SW5kZXgpO1xuXHRcdFx0Zm9yIChsZXQgbWVkaWEgaW4gbWVkaWFzLnZpZGVvWzBdLmZtdCkge1xuXHRcdFx0XHRlc3NhaSA9IGVzc2FpLmNvbmNhdCgnICcrbWVkaWFzLnZpZGVvWzBdLmZtdFttZWRpYV0pO1xuXHRcdFx0fVxuXHRcdFx0c2RwTGluZXNbdmlkZW9JbmRleF0gPSBlc3NhaTtcblx0XHRcdHNkcHJlc3VsdCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xuXHRcdFx0c2RwcmVzdWx0ICs9IGBhPXJ0cG1hcDoke2xhc3RJbmRleH0gVlA4LzkwMDAwIFxcclxcbmArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YGE9cnRjcC1mYjoke2xhc3RJbmRleH0gY2NtIGZpciBcXHJcXG5gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGBhPXJ0Y3AtZmI6JHtsYXN0SW5kZXh9IG5hY2sgXFxyXFxuYCtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgYT1ydGNwLWZiOiR7bGFzdEluZGV4fSBuYWNrIHBsaSBcXHJcXG5gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGBhPXJ0Y3AtZmI6JHtsYXN0SW5kZXh9IGdvb2ctcmVtYiBcXHJcXG5gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGBhPXJ0Y3AtZmI6JHtsYXN0SW5kZXh9IHRyYW5zcG9ydC1jYyBcXHJcXG5gO1xuXHRcdH1cblx0XHRpZiAoIWgyNjRJblZpZGVvTGlzdCkge1xuXHRcdFx0Ly8gbGFzdEluZGV4Kys7XG5cdFx0XHRsYXN0SW5kZXggPSBmaXJzdEluZGV4IC0gMTtcblx0XHRcdGxldCBlc3NhaSA9IHNkcExpbmVzW3ZpZGVvSW5kZXhdO1xuXHRcdFx0Zm9yIChsZXQgbWVkaWEgaW4gbWVkaWFzLnZpZGVvWzBdLmZtdCkge1xuXHRcdFx0XHRlc3NhaSA9IGVzc2FpLnJlcGxhY2UoJyAnK21lZGlhcy52aWRlb1swXS5mbXRbbWVkaWFdLCcnKTtcblx0XHRcdH1cblx0XHRcdGVzc2FpID0gZXNzYWkuY29uY2F0KCcgJytsYXN0SW5kZXgpO1xuXHRcdFx0Zm9yIChsZXQgbWVkaWEgaW4gbWVkaWFzLnZpZGVvWzBdLmZtdCkge1xuXHRcdFx0XHRlc3NhaSA9IGVzc2FpLmNvbmNhdCgnICcrbWVkaWFzLnZpZGVvWzBdLmZtdFttZWRpYV0pO1xuXHRcdFx0fVxuXHRcdFx0c2RwTGluZXNbdmlkZW9JbmRleF0gPSBlc3NhaTtcblx0XHRcdHNkcHJlc3VsdCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xuXHRcdFx0c2RwcmVzdWx0ICs9IGBhPXJ0cG1hcDoke2xhc3RJbmRleH0gSDI2NC85MDAwMCBcXHJcXG5gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGBhPXJ0Y3AtZmI6JHtsYXN0SW5kZXh9IGNjbSBmaXIgXFxyXFxuYCtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgYT1ydGNwLWZiOiR7bGFzdEluZGV4fSBuYWNrIFxcclxcbmArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YGE9cnRjcC1mYjoke2xhc3RJbmRleH0gbmFjayBwbGkgXFxyXFxuYCtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgYT1ydGNwLWZiOiR7bGFzdEluZGV4fSBnb29nLXJlbWIgXFxyXFxuYCtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgYT1ydGNwLWZiOiR7bGFzdEluZGV4fSB0cmFuc3BvcnQtY2MgXFxyXFxuYCtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgYT1ydGNwLWZiOiR7bGFzdEluZGV4fSBgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdsZXZlbC1hc3ltbWV0cnktYWxsb3dlZD0xO3BhY2tldGl6YXRpb24tbW9kZT0xOycrXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3Byb2ZpbGUtbGV2ZWwtaWQ9NDJlMDFmIFxcclxcbic7XG5cdFx0fVxuXHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5fYWRkVlA4Q29kZWMnLCBzZHByZXN1bHQpO1xuXHRcdHJldHVybiBzZHByZXN1bHQ7XG5cdH0qL1xuXG5cdC8qKlxuXHQgKiBTZW5kIFNEUCBvZmZlciB0byB0aGUgcmVtb3RlIHZpYSBEYXRhU3luY1xuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3NlbmRTZHBUb1JlbW90ZSgpIHtcblx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+X3NlbmRTZHBUb1JlbW90ZSNsb2NhbFNEUCcsIHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbi5zZHApO1xuXHRcdGNvbnN0IHJlbW90ZVVzZXJJZCA9IHRoaXMucmVtb3RlLnRvID8gdGhpcy5yZW1vdGUudG8gOiB0aGlzLnJlbW90ZS5mcm9tO1xuXHRcdERldmljZS5nZXQocmVtb3RlVXNlcklkLCB0aGlzLnJlbW90ZS5kZXZpY2UpXG5cdFx0XHQudGhlbigocmVtb3RlRGV2aWNlKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHNkcE9mZmVyID0gdGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uLnNkcDtcblx0XHRcdFx0bGV0IG5ld1NkcCA9IHNkcE9mZmVyO1xuXHRcdFx0XHRjb25zdCBsb2NhbCA9IC9DaHJvbWVcXC8oWzAtOV0rKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KTtcblx0XHRcdFx0Y29uc3QgcmVtb3RlID0gL0Nocm9tZVxcLyhbMC05XSspLy5leGVjKHJlbW90ZURldmljZS51c2VyQWdlbnQpO1xuXG5cdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5fc2VuZFNkcFRvUmVtb3RlI3RoaXMucmVtb3RlLmRldmljZScsIHRoaXMucmVtb3RlLmRldmljZSwgcmVtb3RlVXNlcklkKTtcblx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufl9zZW5kU2RwVG9SZW1vdGUjcmVtb3RlRGV2aWNlLnVzZXJBZ2VudCcsIHJlbW90ZURldmljZS51c2VyQWdlbnQpO1xuXHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+X3NlbmRTZHBUb1JlbW90ZSNuYXZpZ2F0b3IudXNlckFnZW50JywgbmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblx0XHRcdFx0aWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykhPT0gLTEgJiZcblx0XHRcdFx0XHRuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0FuZHJvaWQnKSAhPT0gLTEgJiZcblx0XHRcdFx0XHRyZW1vdGVEZXZpY2UudXNlckFnZW50LmluZGV4T2YoJ1NhZmFyaScpIT09IC0xICYmXG5cdFx0XHRcdFx0bG9jYWxbMV0gPD0gNjQpIHtcblx0XHRcdFx0XHQvLyBuZXdTZHAgPVx0dGhpcy5fYWRkVlA4Q29kZWMoc2RwT2ZmZXIpO1xuXHRcdFx0XHRcdGlmIChsb2NhbFsxXSA8PSA2MCkge1xuXHRcdFx0XHRcdFx0bmV3U2RwID0gbmV3U2RwLnJlcGxhY2UoLztwcm9maWxlLWxldmVsLWlkPShbYS16MC05XSspLywnJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG5ld1NkcCA9XHRuZXdTZHAucmVwbGFjZSgnNDIwMDFmJywnNDJlMDFmJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1NhZmFyaScpIT09IC0xICYmXG5cdFx0XHRcdFx0cmVtb3RlRGV2aWNlLnVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSE9PSAtMSAmJlxuXHRcdFx0XHRcdHJlbW90ZURldmljZS51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpIT09IC0xICYmXG5cdFx0XHRcdFx0cmVtb3RlWzFdIDw9IDY0KSB7XG5cdFx0XHRcdFx0Ly8gbmV3U2RwID1cdHRoaXMuX2FkZFZQOENvZGVjKHNkcE9mZmVyKTtcblx0XHRcdFx0XHRpZiAocmVtb3RlWzFdIDw9IDYwKSB7XG5cdFx0XHRcdFx0XHRuZXdTZHAgPSBuZXdTZHAucmVwbGFjZSgvO3Byb2ZpbGUtbGV2ZWwtaWQ9KFthLXowLTldKykvLCcnKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bmV3U2RwID1cdG5ld1NkcC5yZXBsYWNlKCc0MmUwMWYnLCc0MjAwMWYnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0TG9nLmQoYFBlZXJDb25uZWN0aW9ufl9zZW5kU2RwVG9SZW1vdGUjU0RQIHNlbnQgdG8gcmVtb3RlICR7bmV3U2RwfWApO1xuXHRcdFx0XHRjb25zdCBkZXNjcmlwdGlvbkNoYW5nZWQgPSB7XG5cdFx0XHRcdFx0c2RwOiBuZXdTZHAsXG5cdFx0XHRcdFx0dHlwZTogdGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uLnR5cGVcblx0XHRcdFx0fTtcblx0XHRcdFx0RGF0YVN5bmMudXBkYXRlKGAke3RoaXMuX2xvY2FsUGF0aH0vc2RwYCwgX3RvSlNPTihkZXNjcmlwdGlvbkNoYW5nZWQpKTtcblxuXHRcdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIFNEUCBvZmZlciBhbmQgcHVzaCBpdFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9zZW5kT2ZmZXIoKSB7XG5cdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufl9zZW5kT2ZmZXInKTtcblx0XHRyZXR1cm4gdGhpcy5wYy5jcmVhdGVPZmZlcigpXG5cdFx0XHQudGhlbihkZXNjcmlwdGlvbiA9PiB0aGlzLl9zZXRQcmVmZXJyZWRDb2RlY3MoZGVzY3JpcHRpb24pKVxuXHRcdFx0LnRoZW4oZGVzY3JpcHRpb24gPT4gdGhpcy5wYy5zZXRMb2NhbERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSlcblx0XHRcdC50aGVuKCgpID0+IExvZy5kKCdQZWVyQ29ubmVjdGlvbn5fc2VuZE9mZmVyI2xvY2FsRGVzY3JpcHRpb24nLCB0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24uc2RwKSlcblx0XHRcdC50aGVuKCgpID0+IHRoaXMuX3NlbmRTZHBUb1JlbW90ZSgpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGQvUmVtb3ZlIHRyYWNrcyB0byB0aGUgUGVlckNvbm5lY3Rpb24gc3RyZWFtXG5cdCAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IHN0cmVhbVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfYWx0ZXJTdHJlYW0oc3RyZWFtLCBtZXRob2QpIHtcblx0XHRpZihPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSwgYCR7bWV0aG9kfVRyYWNrYCkpIHtcblx0XHRcdGlmIChtZXRob2QgPT09ICdhZGQnKSB7XG5cdFx0XHRcdHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IHRoaXMucGNbYCR7bWV0aG9kfVRyYWNrYF0odHJhY2ssIHN0cmVhbSksIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5wYy5nZXRTZW5kZXJzKCkuZm9yRWFjaChzZW5kZXIgPT4gdGhpcy5wY1tgJHttZXRob2R9VHJhY2tgXShzZW5kZXIpLCB0aGlzKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wY1tgJHttZXRob2R9U3RyZWFtYF0oc3RyZWFtKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVzdGFydCBTRFAgbmVnb3RpYXRpb24gZm9sbG93aW5nIGEgTWVkaWFTdHJlYW0gY2hhbmdlXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG9sZFN0cmVhbVxuXHQgKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBuZXdTdHJlYW1cblx0ICovXG5cdHJlbmVnb3RpYXRlKG9sZFN0cmVhbSwgbmV3U3RyZWFtKSB7XG5cdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufnJlbmVnb3RpYXRlJyk7XG5cdFx0aWYoKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLCAnZ2V0U2VuZGVycycpKVxuXHRcdFx0JiYgKCdSVENSdHBTZW5kZXInIGluIHdpbmRvdylcblx0XHRcdCYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUlRDUnRwU2VuZGVyLnByb3RvdHlwZSwgJ3JlcGxhY2VUcmFjaycpKXtcblxuXHRcdFx0Ly8gbW96UlRDUGVlckNvbm5lY3Rpb24gaW1wbGVtZW50YXRpb25cblx0XHRcdHRoaXMucGMuZ2V0U2VuZGVycygpLmZvckVhY2goc2VuZGVyID0+IHtcblx0XHRcdFx0bGV0IG5ld1RyYWNrcztcblx0XHRcdFx0c3dpdGNoIChzZW5kZXIudHJhY2sua2luZCkge1xuXHRcdFx0XHRcdGNhc2UgJ2F1ZGlvJzpcblx0XHRcdFx0XHRcdG5ld1RyYWNrcyA9IG5ld1N0cmVhbS5nZXRBdWRpb1RyYWNrcygpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAndmlkZW8nOlxuXHRcdFx0XHRcdFx0bmV3VHJhY2tzID0gbmV3U3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0bmV3VHJhY2tzID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYobmV3VHJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHNlbmRlci5yZXBsYWNlVHJhY2sobmV3VHJhY2tzWzBdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLl9zZW5kT2ZmZXIoKVxuXHRcdFx0XHQuY2F0Y2goZSA9PiB7TG9nLmQoJ1BlZXJDb25uZWN0aW9ufnJlbmVnb3RpYXRlJywgZSk7fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2FsdGVyU3RyZWFtKG9sZFN0cmVhbSwgJ3JlbW92ZScpO1xuXHRcdFx0dGhpcy5fYWx0ZXJTdHJlYW0obmV3U3RyZWFtLCAnYWRkJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlIHRoZSBQZWVyQ29ubmVjdGlvbiBhbmQgc3RvcCBsaXN0ZW5pbmcgdG8gU0RQIG1lc3NhZ2VzXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjbG9zZSgpIHtcblx0XHRpZih0aGlzLl9zdGF0dXMgPT09IE9QRU5FRCkge1xuXHRcdFx0dGhpcy5fc3RhdHVzID0gQ0xPU0lORztcblx0XHRcdC8vIFN0b3AgZGlzcGxheVxuXHRcdFx0aWYgKHRoaXMubm9kZSkge1xuXHRcdFx0XHR0aGlzLm5vZGUuc3RvcCAmJiB0aGlzLm5vZGUuc3RvcCgpO1xuXHRcdFx0XHR0aGlzLm5vZGUuc3JjT2JqZWN0ID0gbnVsbDtcblx0XHRcdFx0dGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcblx0XHRcdFx0dGhpcy5ub2RlID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdC8vIFN0b3AgbGlzdGVuaW5nIHRvIHJlbW90ZSBJQ0UgY2FuZGlkYXRlc1xuXHRcdFx0dGhpcy5fcmVtb3RlSUNFQ2FuZGlkYXRlcyhmYWxzZSk7XG5cdFx0XHQvLyBTdG9wIGxpc3RlbmluZyB0byBTRFAgbWVzc2FnZXNcblx0XHRcdERhdGFTeW5jLm9mZihgJHt0aGlzLl9yZW1vdGVQYXRofS9zZHBgLCAndmFsdWUnKTtcblx0XHRcdC8vIFJlbW92ZSBkYXRhXG5cdFx0XHREYXRhU3luYy5yZW1vdmUodGhpcy5fbG9jYWxQYXRoKTtcblx0XHRcdC8vIENsb3NlIFBlZXJDb25uZWN0aW9uXG5cdFx0XHRpZiAodGhpcy5wYyAmJiB0aGlzLnBjLnNpZ25hbGluZ1N0YXRlICE9PSAnY2xvc2VkJykge1xuXHRcdFx0XHR0aGlzLnBjLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG5cdFx0XHRcdFx0aWYodGhpcy5wYy5zaWduYWxpbmdTdGF0ZSAhPT0gJ2Nsb3NlZCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXR1cyA9IENMT1NFRDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdHRoaXMucGMuY2xvc2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3N0YXR1cyA9IENMT1NFRDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRWRpdHMgdGhlIFNEUCB0byBzZXQgdGhlIHByZWZlcnJlZCBhdWRpby92aWRlbyBjb2RlY1xuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtSVENTZXNzaW9uRGVzY3JpcHRpb259IGRlc2NyaXB0aW9uIFRoZSBkZXNjcmlwdGlvbiByZXRyaWV2ZWQgYnkgY3JlYXRlT2ZmZXIvY3JlYXRlQW5zd2VyXG5cdCAqIEByZXR1cm5zIHtSVENTZXNzaW9uRGVzY3JpcHRpb258e3NkcDogc3RyaW5nLCB0eXBlOiBzdHJpbmd9fVxuXHQgKi9cblx0X3NldFByZWZlcnJlZENvZGVjcyhkZXNjcmlwdGlvbikge1xuXHRcdGlmKGNhY2hlLmNvbmZpZy5wcmVmZXJyZWRWaWRlb0NvZGVjIHx8IGNhY2hlLmNvbmZpZy5wcmVmZXJyZWRBdWRpb0NvZGVjKSB7XG5cdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+X3NldFByZWZlcnJlZENvZGVjcycsIHtkZXNjcmlwdGlvbiwgY29uZmlnOiBjYWNoZS5jb25maWd9KTtcblx0XHRcdGNvbnN0IHNkcExpbmVzID0gZGVzY3JpcHRpb24uc2RwLnNwbGl0KC9cXHI/XFxuLyk7XG5cdFx0XHRjb25zdCBtZWRpYXMgPSB7YXVkaW86IFtdLCB2aWRlbzogW119O1xuXHRcdFx0bGV0IGN1cnJlbnQgPSBudWxsO1xuXHRcdFx0Ly8gUGFyc2UgU0RQXG5cdFx0XHRzZHBMaW5lcy5mb3JFYWNoKChzZHBMaW5lLCBpKSA9PiB7XG5cdFx0XHRcdGlmKC9ebT0vLnRlc3Qoc2RwTGluZSkpIHtcblx0XHRcdFx0XHRjb25zdCBkID0gL15tPShcXHcrKVxcc1swLTlcXC9dK1xcc1tBLVphLXowLTlcXC9dK1xccyhbMC05XFxzXSspLy5leGVjKHNkcExpbmUpO1xuXHRcdFx0XHRcdGN1cnJlbnQgPSB7XG5cdFx0XHRcdFx0XHRmbXQ6IGRbMl0uc3BsaXQoL1xccy8pLFxuXHRcdFx0XHRcdFx0aW5kZXg6IGksXG5cdFx0XHRcdFx0XHRjb2RlY3M6IFtdXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRtZWRpYXNbZFsxXV0ucHVzaChjdXJyZW50KTtcblx0XHRcdFx0fSBlbHNlIGlmKGN1cnJlbnQgJiYgL15hPXJ0cG1hcDovLnRlc3Qoc2RwTGluZSkpIHtcblx0XHRcdFx0XHRjb25zdCBjID0gL15hPXJ0cG1hcDooXFxkKylcXHMoW2EtekEtWjAtOVxcLVxcL10rKS8uZXhlYyhzZHBMaW5lKTtcblx0XHRcdFx0XHRpZihjKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50LmNvZGVjcy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0aWQ6IGNbMV0sXG5cdFx0XHRcdFx0XHRcdG5hbWU6IGNbMl0sXG5cdFx0XHRcdFx0XHRcdGluZGV4OiBpXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufl9zZXRQcmVmZXJyZWRDb2RlY3MnLCBtZWRpYXMpO1xuXHRcdFx0bGV0IHVwZGF0ZSA9IGZhbHNlO1xuXHRcdFx0Y29uc3QgcHJlZmVyID0gKG1lZGlhTGlzdCwgcHJlZmVyZWRDb2RlYykgPT4ge1xuXHRcdFx0XHRtZWRpYUxpc3QuZm9yRWFjaChtZWRpYSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSBtZWRpYS5jb2RlY3MuZmluZChjb2RlYyA9PiBwcmVmZXJlZENvZGVjLnRlc3QoY29kZWMubmFtZSkpO1xuXHRcdFx0XHRcdGlmKHNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBmbXQgPSBbc2VsZWN0ZWQuaWRdLmNvbmNhdChtZWRpYS5mbXQuZmlsdGVyKGlkcyA9PiBpZHMgIT09IHNlbGVjdGVkLmlkKSk7XG5cdFx0XHRcdFx0XHRzZHBMaW5lc1ttZWRpYS5pbmRleF0gPSBzZHBMaW5lc1ttZWRpYS5pbmRleF0ucmVwbGFjZShtZWRpYS5mbXQuam9pbignICcpLCBmbXQuam9pbignICcpKTtcblx0XHRcdFx0XHRcdHVwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRpZihjYWNoZS5jb25maWcucHJlZmVycmVkVmlkZW9Db2RlYykge1xuXHRcdFx0XHRwcmVmZXIobWVkaWFzLnZpZGVvLCBjYWNoZS5jb25maWcucHJlZmVycmVkVmlkZW9Db2RlYyk7XG5cdFx0XHR9XG5cdFx0XHRpZihjYWNoZS5jb25maWcucHJlZmVycmVkQXVkaW9Db2RlYykge1xuXHRcdFx0XHRwcmVmZXIobWVkaWFzLmF1ZGlvLCBjYWNoZS5jb25maWcucHJlZmVycmVkQXVkaW9Db2RlYyk7XG5cdFx0XHR9XG5cdFx0XHRpZih1cGRhdGUpIHtcblx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufl9zZXRQcmVmZXJyZWRDb2RlY3MnLCBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKSk7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0c2RwOiBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKSxcblx0XHRcdFx0XHR0eXBlOiBkZXNjcmlwdGlvbi50eXBlXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkZXNjcmlwdGlvbjtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvd2VicnRjL1BlZXJDb25uZWN0aW9uLmpzIiwiaW1wb3J0IFBlZXJDb25uZWN0aW9uIGZyb20gJy4vUGVlckNvbm5lY3Rpb24nO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL3V0aWwvY2FjaGUnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4uL3V0aWwvTG9nJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4uL3V0aWwvRGF0YVN5bmMnO1xuXG5jb25zdCBnZXRTdGFja0lkID0gKGlkMSwgaWQyKSA9PiBpZDEubG9jYWxlQ29tcGFyZShpZDIsICdlbi11cycpID4gMCA/IGAke2lkMX0tJHtpZDJ9YCA6YCR7aWQyfS0ke2lkMX1gO1xuXG4vKipcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlZXJDb25uZWN0aW9uTWFuYWdlciB7XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RvclxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0LyoqXG5cdFx0ICogV2ViUlRDIHN0YWNrc1xuXHRcdCAqIEB0eXBlIHt7Kjogeyo6IFBlZXJDb25uZWN0aW9ufX19XG5cdFx0ICovXG5cdFx0dGhpcy5zdGFja3MgPSB7fTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEdldCBhIFBlZXJDb25uZWN0aW9uIG9iamVjdCBmb3IgYSBzcGVjaWZpYyBzdHJlYW1cblx0ICogQHBhcmFtIHtMb2NhbHxSZW1vdGV9IHN0cmVhbVxuXHQgKiBAcGFyYW0ge1JlbW90ZXx7dG86IHN0cmluZywgZGV2aWNlOnN0cmluZ319IHJlbW90ZVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHB1Ymxpc2hcblx0ICogQHJldHVybiB7Kn1cblx0ICovXG5cdGdldFBlZXJDb25uZWN0aW9uKHN0cmVhbSwgcmVtb3RlLCBwdWJsaXNoKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBnZXQgYSBQZWVyQ29ubmVjdGlvblxcJ3Mgb2JqZWN0LicpKTtcblx0XHR9XG5cdFx0Y29uc3Qgc3RhY2tJZCA9IGdldFN0YWNrSWQocmVtb3RlLmRldmljZSwgY2FjaGUuZGV2aWNlKTtcblxuXHRcdGlmKHRoaXMuc3RhY2tzW3N0YWNrSWRdICYmIHRoaXMuc3RhY2tzW3N0YWNrSWRdW3N0cmVhbS51aWRdKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc3RhY2tzW3N0YWNrSWRdW3N0cmVhbS51aWRdKTtcblx0XHR9XG5cblx0XHRpZighdGhpcy5zdGFja3Nbc3RhY2tJZF0pIHtcblx0XHRcdHRoaXMuc3RhY2tzW3N0YWNrSWRdID0ge307XG5cdFx0fVxuXG5cdFx0Y29uc3QgdXNlcnMgPSB7fTtcblx0XHR1c2Vyc1tjYWNoZS51c2VyLnVpZF0gPSB0cnVlO1xuXHRcdHVzZXJzW3JlbW90ZS5mcm9tIHx8IHJlbW90ZS50b10gPSB0cnVlO1xuXG5cdFx0cmV0dXJuIERhdGFTeW5jLnVwZGF0ZShgXy93ZWJydGMvJHtzdGFja0lkfWAsIHVzZXJzKVxuXHRcdFx0LnRoZW4oKCkgPT4gbmV3IFBlZXJDb25uZWN0aW9uKHN0YWNrSWQsIHN0cmVhbS51aWQsIHJlbW90ZSwgcHVibGlzaCkpXG5cdFx0XHQudGhlbihwYyA9PiB7XG5cdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbk1hbmFnZXJ+Z2V0UGVlckNvbm5lY3Rpb24nLCB7c3RhY2tJZCwgc3RyZWFtSWQ6IHN0cmVhbS51aWQsIHBjfSk7XG5cdFx0XHRcdHRoaXMuc3RhY2tzW3N0YWNrSWRdW3N0cmVhbS51aWRdID0gcGM7XG5cdFx0XHRcdHJldHVybiBwYztcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1BlZXJDb25uZWN0aW9uTWFuYWdlcn5nZXRQZWVyQ29ubmVjdGlvbicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgb2ZmZXIgZm9yIGEgc3RyZWFtIHRvIGEgc3Vic2NyaWJlclxuXHQgKiBAcGFyYW0ge0xvY2FsfSBsb2NhbFN0cmVhbVxuXHQgKiBAcGFyYW0ge29iamVjdH0gc3Vic2NyaWJlclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlLjxQZWVyQ29ubmVjdGlvbj59XG5cdCAqL1xuXHRvZmZlcihsb2NhbFN0cmVhbSwgc3Vic2NyaWJlcikge1xuXHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbk1hbmFnZXJ+b2ZmZXInLCB7bG9jYWxTdHJlYW0sIHN1YnNjcmliZXJ9KTtcblx0XHRyZXR1cm4gdGhpcy5nZXRQZWVyQ29ubmVjdGlvbihsb2NhbFN0cmVhbSwgc3Vic2NyaWJlciwgdHJ1ZSlcblx0XHRcdC50aGVuKHBjID0+IHBjLm9mZmVyKGxvY2FsU3RyZWFtLm1lZGlhKSk7XG5cdH1cblxuXHQvKipcblx0ICogQW5zd2VyIHRvIHRoZSBvZmZlciBmcm9tIHRoZSBwdWJsaXNoZXJcblx0ICogQHBhcmFtIHtSZW1vdGV9IHJlbW90ZVN0cmVhbVxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGh0bWxFbGVtZW50XG5cdCAqIEByZXR1cm4geyp8UHJvbWlzZS48UGVlckNvbm5lY3Rpb24+fVxuXHQgKi9cblx0YW5zd2VyKHJlbW90ZVN0cmVhbSwgaHRtbEVsZW1lbnQpIHtcblx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25NYW5hZ2VyfmFuc3dlcicsIHtyZW1vdGVTdHJlYW0sIGh0bWxFbGVtZW50fSk7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UGVlckNvbm5lY3Rpb24ocmVtb3RlU3RyZWFtLCByZW1vdGVTdHJlYW0sIGZhbHNlKVxuXHRcdFx0LnRoZW4ocGMgPT4gcGMuYW5zd2VyKGh0bWxFbGVtZW50KSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2xvc2UgYSBQZWVyQ29ubmVjdGlvblxuXHQgKiBAcGFyYW0gc3RyZWFtSWRcblx0ICogQHBhcmFtIHJlbW90ZURldmljZVxuXHQgKiBAcmV0dXJuIHsqfVxuXHQgKi9cblx0Y2xvc2Uoc3RyZWFtSWQsIHJlbW90ZURldmljZSkge1xuXHRcdGNvbnN0IHN0YWNrSWQgPSBnZXRTdGFja0lkKHJlbW90ZURldmljZSwgY2FjaGUuZGV2aWNlKSxcblx0XHRcdHBjID0gdGhpcy5zdGFja3Nbc3RhY2tJZF0gPyB0aGlzLnN0YWNrc1tzdGFja0lkXVtzdHJlYW1JZF0gOiBudWxsO1xuXHRcdGlmKHBjKXtcblx0XHRcdHBjLmNsb3NlKCk7XG5cdFx0XHR0aGlzLnN0YWNrc1tzdGFja0lkXVtzdHJlYW1JZF0gPSBudWxsO1xuXHRcdFx0ZGVsZXRlIHRoaXMuc3RhY2tzW3N0YWNrSWRdW3N0cmVhbUlkXTtcblx0XHRcdHJldHVybiBwYztcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS93ZWJydGMvUGVlckNvbm5lY3Rpb25NYW5hZ2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKTtcbnZhciAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0geyBzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5IH0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgcmV0dXJuICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIFNhZmFyaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMzlcbiAgfSBlbHNlIGlmIChPYnNlcnZlciAmJiAhKGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci5zdGFuZGFsb25lKSkge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanNcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtdHJ5XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUHJvbWlzZScsIHsgJ3RyeSc6IGZ1bmN0aW9uIChjYWxsYmFja2ZuKSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYodGhpcyk7XG4gIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAocmVzdWx0LmUgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudik7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZmluZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZmluZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9mbi9hcnJheS9maW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpXG4gICwgQXJyYXlQcm90byAgPSBBcnJheS5wcm90b3R5cGU7XG5pZihBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBhc2MgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRZUEUsICRjcmVhdGUpe1xuICB2YXIgSVNfTUFQICAgICAgICA9IFRZUEUgPT0gMVxuICAgICwgSVNfRklMVEVSICAgICA9IFRZUEUgPT0gMlxuICAgICwgSVNfU09NRSAgICAgICA9IFRZUEUgPT0gM1xuICAgICwgSVNfRVZFUlkgICAgICA9IFRZUEUgPT0gNFxuICAgICwgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNlxuICAgICwgTk9fSE9MRVMgICAgICA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYXG4gICAgLCBjcmVhdGUgICAgICAgID0gJGNyZWF0ZSB8fCBhc2M7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCl7XG4gICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KCR0aGlzKVxuICAgICAgLCBzZWxmICAgPSBJT2JqZWN0KE8pXG4gICAgICAsIGYgICAgICA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gMFxuICAgICAgLCByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkXG4gICAgICAsIHZhbCwgcmVzO1xuICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZil7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZihUWVBFKXtcbiAgICAgICAgaWYoSVNfTUFQKXJlc3VsdFtpbmRleF0gPSByZXM7ICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYocmVzKXN3aXRjaChUWVBFKXtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmKElTX0VWRVJZKXJldHVybiBmYWxzZTsgICAgICAgICAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qc1xuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaXNBcnJheSAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgU1BFQ0lFUyAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsKXtcbiAgdmFyIEM7XG4gIGlmKGlzQXJyYXkob3JpZ2luYWwpKXtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZih0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpQyA9IHVuZGVmaW5lZDtcbiAgICBpZihpc09iamVjdChDKSl7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmKEMgPT09IG51bGwpQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwsIGxlbmd0aCl7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHJlZGVmaW5lICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KVxuICAgICwga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmKHRhcmdldClyZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZihleHBvcnRzW2tleV0gIT0gb3V0KWhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KWV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMTU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDE1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDE2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFNSQyAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKVxuICAsIFRPX1NUUklORyA9ICd0b1N0cmluZydcbiAgLCAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddXG4gICwgVFBMICAgICAgID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIGtleSwgdmFsLCBzYWZlKXtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZihPW2tleV0gPT09IHZhbClyZXR1cm47XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmKE8gPT09IGdsb2JhbCl7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGlmKCFzYWZlKXtcbiAgICAgIGRlbGV0ZSBPW2tleV07XG4gICAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoT1trZXldKU9ba2V5XSA9IHZhbDtcbiAgICAgIGVsc2UgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfVxuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDE2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRmaW5kICAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoNSlcbiAgLCBLRVkgICAgID0gJ2ZpbmQnXG4gICwgZm9yY2VkICA9IHRydWU7XG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYoS0VZIGluIFtdKUFycmF5KDEpW0tFWV0oZnVuY3Rpb24oKXsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoS0VZKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBTRFAgaGVscGVycy5cbnZhciBTRFBVdGlscyA9IHt9O1xuXG4vLyBHZW5lcmF0ZSBhbiBhbHBoYW51bWVyaWMgaWRlbnRpZmllciBmb3IgY25hbWUgb3IgbWlkcy5cbi8vIFRPRE86IHVzZSBVVUlEcyBpbnN0ZWFkPyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qZWQvOTgyODgzXG5TRFBVdGlscy5nZW5lcmF0ZUlkZW50aWZpZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAxMCk7XG59O1xuXG4vLyBUaGUgUlRDUCBDTkFNRSB1c2VkIGJ5IGFsbCBwZWVyY29ubmVjdGlvbnMgZnJvbSB0aGUgc2FtZSBKUy5cblNEUFV0aWxzLmxvY2FsQ05hbWUgPSBTRFBVdGlscy5nZW5lcmF0ZUlkZW50aWZpZXIoKTtcblxuLy8gU3BsaXRzIFNEUCBpbnRvIGxpbmVzLCBkZWFsaW5nIHdpdGggYm90aCBDUkxGIGFuZCBMRi5cblNEUFV0aWxzLnNwbGl0TGluZXMgPSBmdW5jdGlvbihibG9iKSB7XG4gIHJldHVybiBibG9iLnRyaW0oKS5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICByZXR1cm4gbGluZS50cmltKCk7XG4gIH0pO1xufTtcbi8vIFNwbGl0cyBTRFAgaW50byBzZXNzaW9ucGFydCBhbmQgbWVkaWFzZWN0aW9ucy4gRW5zdXJlcyBDUkxGLlxuU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyA9IGZ1bmN0aW9uKGJsb2IpIHtcbiAgdmFyIHBhcnRzID0gYmxvYi5zcGxpdCgnXFxubT0nKTtcbiAgcmV0dXJuIHBhcnRzLm1hcChmdW5jdGlvbihwYXJ0LCBpbmRleCkge1xuICAgIHJldHVybiAoaW5kZXggPiAwID8gJ209JyArIHBhcnQgOiBwYXJ0KS50cmltKCkgKyAnXFxyXFxuJztcbiAgfSk7XG59O1xuXG4vLyBSZXR1cm5zIGxpbmVzIHRoYXQgc3RhcnQgd2l0aCBhIGNlcnRhaW4gcHJlZml4LlxuU0RQVXRpbHMubWF0Y2hQcmVmaXggPSBmdW5jdGlvbihibG9iLCBwcmVmaXgpIHtcbiAgcmV0dXJuIFNEUFV0aWxzLnNwbGl0TGluZXMoYmxvYikuZmlsdGVyKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICByZXR1cm4gbGluZS5pbmRleE9mKHByZWZpeCkgPT09IDA7XG4gIH0pO1xufTtcblxuLy8gUGFyc2VzIGFuIElDRSBjYW5kaWRhdGUgbGluZS4gU2FtcGxlIGlucHV0OlxuLy8gY2FuZGlkYXRlOjcwMjc4NjM1MCAyIHVkcCA0MTgxOTkwMiA4LjguOC44IDYwNzY5IHR5cCByZWxheSByYWRkciA4LjguOC44XG4vLyBycG9ydCA1NTk5NlwiXG5TRFBVdGlscy5wYXJzZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnRzO1xuICAvLyBQYXJzZSBib3RoIHZhcmlhbnRzLlxuICBpZiAobGluZS5pbmRleE9mKCdhPWNhbmRpZGF0ZTonKSA9PT0gMCkge1xuICAgIHBhcnRzID0gbGluZS5zdWJzdHJpbmcoMTIpLnNwbGl0KCcgJyk7XG4gIH0gZWxzZSB7XG4gICAgcGFydHMgPSBsaW5lLnN1YnN0cmluZygxMCkuc3BsaXQoJyAnKTtcbiAgfVxuXG4gIHZhciBjYW5kaWRhdGUgPSB7XG4gICAgZm91bmRhdGlvbjogcGFydHNbMF0sXG4gICAgY29tcG9uZW50OiBwYXJzZUludChwYXJ0c1sxXSwgMTApLFxuICAgIHByb3RvY29sOiBwYXJ0c1syXS50b0xvd2VyQ2FzZSgpLFxuICAgIHByaW9yaXR5OiBwYXJzZUludChwYXJ0c1szXSwgMTApLFxuICAgIGlwOiBwYXJ0c1s0XSxcbiAgICBwb3J0OiBwYXJzZUludChwYXJ0c1s1XSwgMTApLFxuICAgIC8vIHNraXAgcGFydHNbNl0gPT0gJ3R5cCdcbiAgICB0eXBlOiBwYXJ0c1s3XVxuICB9O1xuXG4gIGZvciAodmFyIGkgPSA4OyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICBzd2l0Y2ggKHBhcnRzW2ldKSB7XG4gICAgICBjYXNlICdyYWRkcic6XG4gICAgICAgIGNhbmRpZGF0ZS5yZWxhdGVkQWRkcmVzcyA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdycG9ydCc6XG4gICAgICAgIGNhbmRpZGF0ZS5yZWxhdGVkUG9ydCA9IHBhcnNlSW50KHBhcnRzW2kgKyAxXSwgMTApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RjcHR5cGUnOlxuICAgICAgICBjYW5kaWRhdGUudGNwVHlwZSA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd1ZnJhZyc6XG4gICAgICAgIGNhbmRpZGF0ZS51ZnJhZyA9IHBhcnRzW2kgKyAxXTsgLy8gZm9yIGJhY2t3YXJkIGNvbXBhYmlsaXR5LlxuICAgICAgICBjYW5kaWRhdGUudXNlcm5hbWVGcmFnbWVudCA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OiAvLyBleHRlbnNpb24gaGFuZGxpbmcsIGluIHBhcnRpY3VsYXIgdWZyYWdcbiAgICAgICAgY2FuZGlkYXRlW3BhcnRzW2ldXSA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBjYW5kaWRhdGU7XG59O1xuXG4vLyBUcmFuc2xhdGVzIGEgY2FuZGlkYXRlIG9iamVjdCBpbnRvIFNEUCBjYW5kaWRhdGUgYXR0cmlidXRlLlxuU0RQVXRpbHMud3JpdGVDYW5kaWRhdGUgPSBmdW5jdGlvbihjYW5kaWRhdGUpIHtcbiAgdmFyIHNkcCA9IFtdO1xuICBzZHAucHVzaChjYW5kaWRhdGUuZm91bmRhdGlvbik7XG4gIHNkcC5wdXNoKGNhbmRpZGF0ZS5jb21wb25lbnQpO1xuICBzZHAucHVzaChjYW5kaWRhdGUucHJvdG9jb2wudG9VcHBlckNhc2UoKSk7XG4gIHNkcC5wdXNoKGNhbmRpZGF0ZS5wcmlvcml0eSk7XG4gIHNkcC5wdXNoKGNhbmRpZGF0ZS5pcCk7XG4gIHNkcC5wdXNoKGNhbmRpZGF0ZS5wb3J0KTtcblxuICB2YXIgdHlwZSA9IGNhbmRpZGF0ZS50eXBlO1xuICBzZHAucHVzaCgndHlwJyk7XG4gIHNkcC5wdXNoKHR5cGUpO1xuICBpZiAodHlwZSAhPT0gJ2hvc3QnICYmIGNhbmRpZGF0ZS5yZWxhdGVkQWRkcmVzcyAmJlxuICAgICAgY2FuZGlkYXRlLnJlbGF0ZWRQb3J0KSB7XG4gICAgc2RwLnB1c2goJ3JhZGRyJyk7XG4gICAgc2RwLnB1c2goY2FuZGlkYXRlLnJlbGF0ZWRBZGRyZXNzKTsgLy8gd2FzOiByZWxBZGRyXG4gICAgc2RwLnB1c2goJ3Jwb3J0Jyk7XG4gICAgc2RwLnB1c2goY2FuZGlkYXRlLnJlbGF0ZWRQb3J0KTsgLy8gd2FzOiByZWxQb3J0XG4gIH1cbiAgaWYgKGNhbmRpZGF0ZS50Y3BUeXBlICYmIGNhbmRpZGF0ZS5wcm90b2NvbC50b0xvd2VyQ2FzZSgpID09PSAndGNwJykge1xuICAgIHNkcC5wdXNoKCd0Y3B0eXBlJyk7XG4gICAgc2RwLnB1c2goY2FuZGlkYXRlLnRjcFR5cGUpO1xuICB9XG4gIGlmIChjYW5kaWRhdGUudWZyYWcpIHtcbiAgICBzZHAucHVzaCgndWZyYWcnKTtcbiAgICBzZHAucHVzaChjYW5kaWRhdGUudWZyYWcpO1xuICB9XG4gIHJldHVybiAnY2FuZGlkYXRlOicgKyBzZHAuam9pbignICcpO1xufTtcblxuLy8gUGFyc2VzIGFuIGljZS1vcHRpb25zIGxpbmUsIHJldHVybnMgYW4gYXJyYXkgb2Ygb3B0aW9uIHRhZ3MuXG4vLyBhPWljZS1vcHRpb25zOmZvbyBiYXJcblNEUFV0aWxzLnBhcnNlSWNlT3B0aW9ucyA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgcmV0dXJuIGxpbmUuc3Vic3RyKDE0KS5zcGxpdCgnICcpO1xufVxuXG4vLyBQYXJzZXMgYW4gcnRwbWFwIGxpbmUsIHJldHVybnMgUlRDUnRwQ29kZGVjUGFyYW1ldGVycy4gU2FtcGxlIGlucHV0OlxuLy8gYT1ydHBtYXA6MTExIG9wdXMvNDgwMDAvMlxuU0RQVXRpbHMucGFyc2VSdHBNYXAgPSBmdW5jdGlvbihsaW5lKSB7XG4gIHZhciBwYXJ0cyA9IGxpbmUuc3Vic3RyKDkpLnNwbGl0KCcgJyk7XG4gIHZhciBwYXJzZWQgPSB7XG4gICAgcGF5bG9hZFR5cGU6IHBhcnNlSW50KHBhcnRzLnNoaWZ0KCksIDEwKSAvLyB3YXM6IGlkXG4gIH07XG5cbiAgcGFydHMgPSBwYXJ0c1swXS5zcGxpdCgnLycpO1xuXG4gIHBhcnNlZC5uYW1lID0gcGFydHNbMF07XG4gIHBhcnNlZC5jbG9ja1JhdGUgPSBwYXJzZUludChwYXJ0c1sxXSwgMTApOyAvLyB3YXM6IGNsb2NrcmF0ZVxuICAvLyB3YXM6IGNoYW5uZWxzXG4gIHBhcnNlZC5udW1DaGFubmVscyA9IHBhcnRzLmxlbmd0aCA9PT0gMyA/IHBhcnNlSW50KHBhcnRzWzJdLCAxMCkgOiAxO1xuICByZXR1cm4gcGFyc2VkO1xufTtcblxuLy8gR2VuZXJhdGUgYW4gYT1ydHBtYXAgbGluZSBmcm9tIFJUQ1J0cENvZGVjQ2FwYWJpbGl0eSBvclxuLy8gUlRDUnRwQ29kZWNQYXJhbWV0ZXJzLlxuU0RQVXRpbHMud3JpdGVSdHBNYXAgPSBmdW5jdGlvbihjb2RlYykge1xuICB2YXIgcHQgPSBjb2RlYy5wYXlsb2FkVHlwZTtcbiAgaWYgKGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwdCA9IGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlO1xuICB9XG4gIHJldHVybiAnYT1ydHBtYXA6JyArIHB0ICsgJyAnICsgY29kZWMubmFtZSArICcvJyArIGNvZGVjLmNsb2NrUmF0ZSArXG4gICAgICAoY29kZWMubnVtQ2hhbm5lbHMgIT09IDEgPyAnLycgKyBjb2RlYy5udW1DaGFubmVscyA6ICcnKSArICdcXHJcXG4nO1xufTtcblxuLy8gUGFyc2VzIGFuIGE9ZXh0bWFwIGxpbmUgKGhlYWRlcmV4dGVuc2lvbiBmcm9tIFJGQyA1Mjg1KS4gU2FtcGxlIGlucHV0OlxuLy8gYT1leHRtYXA6MiB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDp0b2Zmc2V0XG4vLyBhPWV4dG1hcDoyL3NlbmRvbmx5IHVybjppZXRmOnBhcmFtczpydHAtaGRyZXh0OnRvZmZzZXRcblNEUFV0aWxzLnBhcnNlRXh0bWFwID0gZnVuY3Rpb24obGluZSkge1xuICB2YXIgcGFydHMgPSBsaW5lLnN1YnN0cig5KS5zcGxpdCgnICcpO1xuICByZXR1cm4ge1xuICAgIGlkOiBwYXJzZUludChwYXJ0c1swXSwgMTApLFxuICAgIGRpcmVjdGlvbjogcGFydHNbMF0uaW5kZXhPZignLycpID4gMCA/IHBhcnRzWzBdLnNwbGl0KCcvJylbMV0gOiAnc2VuZHJlY3YnLFxuICAgIHVyaTogcGFydHNbMV1cbiAgfTtcbn07XG5cbi8vIEdlbmVyYXRlcyBhPWV4dG1hcCBsaW5lIGZyb20gUlRDUnRwSGVhZGVyRXh0ZW5zaW9uUGFyYW1ldGVycyBvclxuLy8gUlRDUnRwSGVhZGVyRXh0ZW5zaW9uLlxuU0RQVXRpbHMud3JpdGVFeHRtYXAgPSBmdW5jdGlvbihoZWFkZXJFeHRlbnNpb24pIHtcbiAgcmV0dXJuICdhPWV4dG1hcDonICsgKGhlYWRlckV4dGVuc2lvbi5pZCB8fCBoZWFkZXJFeHRlbnNpb24ucHJlZmVycmVkSWQpICtcbiAgICAgIChoZWFkZXJFeHRlbnNpb24uZGlyZWN0aW9uICYmIGhlYWRlckV4dGVuc2lvbi5kaXJlY3Rpb24gIT09ICdzZW5kcmVjdidcbiAgICAgICAgICA/ICcvJyArIGhlYWRlckV4dGVuc2lvbi5kaXJlY3Rpb25cbiAgICAgICAgICA6ICcnKSArXG4gICAgICAnICcgKyBoZWFkZXJFeHRlbnNpb24udXJpICsgJ1xcclxcbic7XG59O1xuXG4vLyBQYXJzZXMgYW4gZnRtcCBsaW5lLCByZXR1cm5zIGRpY3Rpb25hcnkuIFNhbXBsZSBpbnB1dDpcbi8vIGE9Zm10cDo5NiB2YnI9b247Y25nPW9uXG4vLyBBbHNvIGRlYWxzIHdpdGggdmJyPW9uOyBjbmc9b25cblNEUFV0aWxzLnBhcnNlRm10cCA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga3Y7XG4gIHZhciBwYXJ0cyA9IGxpbmUuc3Vic3RyKGxpbmUuaW5kZXhPZignICcpICsgMSkuc3BsaXQoJzsnKTtcbiAgZm9yICh2YXIgaiA9IDA7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgIGt2ID0gcGFydHNbal0udHJpbSgpLnNwbGl0KCc9Jyk7XG4gICAgcGFyc2VkW2t2WzBdLnRyaW0oKV0gPSBrdlsxXTtcbiAgfVxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuLy8gR2VuZXJhdGVzIGFuIGE9ZnRtcCBsaW5lIGZyb20gUlRDUnRwQ29kZWNDYXBhYmlsaXR5IG9yIFJUQ1J0cENvZGVjUGFyYW1ldGVycy5cblNEUFV0aWxzLndyaXRlRm10cCA9IGZ1bmN0aW9uKGNvZGVjKSB7XG4gIHZhciBsaW5lID0gJyc7XG4gIHZhciBwdCA9IGNvZGVjLnBheWxvYWRUeXBlO1xuICBpZiAoY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHB0ID0gY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGU7XG4gIH1cbiAgaWYgKGNvZGVjLnBhcmFtZXRlcnMgJiYgT2JqZWN0LmtleXMoY29kZWMucGFyYW1ldGVycykubGVuZ3RoKSB7XG4gICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGNvZGVjLnBhcmFtZXRlcnMpLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pIHtcbiAgICAgIHBhcmFtcy5wdXNoKHBhcmFtICsgJz0nICsgY29kZWMucGFyYW1ldGVyc1twYXJhbV0pO1xuICAgIH0pO1xuICAgIGxpbmUgKz0gJ2E9Zm10cDonICsgcHQgKyAnICcgKyBwYXJhbXMuam9pbignOycpICsgJ1xcclxcbic7XG4gIH1cbiAgcmV0dXJuIGxpbmU7XG59O1xuXG4vLyBQYXJzZXMgYW4gcnRjcC1mYiBsaW5lLCByZXR1cm5zIFJUQ1BSdGNwRmVlZGJhY2sgb2JqZWN0LiBTYW1wbGUgaW5wdXQ6XG4vLyBhPXJ0Y3AtZmI6OTggbmFjayBycHNpXG5TRFBVdGlscy5wYXJzZVJ0Y3BGYiA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gbGluZS5zdWJzdHIobGluZS5pbmRleE9mKCcgJykgKyAxKS5zcGxpdCgnICcpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHBhcnRzLnNoaWZ0KCksXG4gICAgcGFyYW1ldGVyOiBwYXJ0cy5qb2luKCcgJylcbiAgfTtcbn07XG4vLyBHZW5lcmF0ZSBhPXJ0Y3AtZmIgbGluZXMgZnJvbSBSVENSdHBDb2RlY0NhcGFiaWxpdHkgb3IgUlRDUnRwQ29kZWNQYXJhbWV0ZXJzLlxuU0RQVXRpbHMud3JpdGVSdGNwRmIgPSBmdW5jdGlvbihjb2RlYykge1xuICB2YXIgbGluZXMgPSAnJztcbiAgdmFyIHB0ID0gY29kZWMucGF5bG9hZFR5cGU7XG4gIGlmIChjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHQgPSBjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZTtcbiAgfVxuICBpZiAoY29kZWMucnRjcEZlZWRiYWNrICYmIGNvZGVjLnJ0Y3BGZWVkYmFjay5sZW5ndGgpIHtcbiAgICAvLyBGSVhNRTogc3BlY2lhbCBoYW5kbGluZyBmb3IgdHJyLWludD9cbiAgICBjb2RlYy5ydGNwRmVlZGJhY2suZm9yRWFjaChmdW5jdGlvbihmYikge1xuICAgICAgbGluZXMgKz0gJ2E9cnRjcC1mYjonICsgcHQgKyAnICcgKyBmYi50eXBlICtcbiAgICAgIChmYi5wYXJhbWV0ZXIgJiYgZmIucGFyYW1ldGVyLmxlbmd0aCA/ICcgJyArIGZiLnBhcmFtZXRlciA6ICcnKSArXG4gICAgICAgICAgJ1xcclxcbic7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGxpbmVzO1xufTtcblxuLy8gUGFyc2VzIGFuIFJGQyA1NTc2IHNzcmMgbWVkaWEgYXR0cmlidXRlLiBTYW1wbGUgaW5wdXQ6XG4vLyBhPXNzcmM6MzczNTkyODU1OSBjbmFtZTpzb21ldGhpbmdcblNEUFV0aWxzLnBhcnNlU3NyY01lZGlhID0gZnVuY3Rpb24obGluZSkge1xuICB2YXIgc3AgPSBsaW5lLmluZGV4T2YoJyAnKTtcbiAgdmFyIHBhcnRzID0ge1xuICAgIHNzcmM6IHBhcnNlSW50KGxpbmUuc3Vic3RyKDcsIHNwIC0gNyksIDEwKVxuICB9O1xuICB2YXIgY29sb24gPSBsaW5lLmluZGV4T2YoJzonLCBzcCk7XG4gIGlmIChjb2xvbiA+IC0xKSB7XG4gICAgcGFydHMuYXR0cmlidXRlID0gbGluZS5zdWJzdHIoc3AgKyAxLCBjb2xvbiAtIHNwIC0gMSk7XG4gICAgcGFydHMudmFsdWUgPSBsaW5lLnN1YnN0cihjb2xvbiArIDEpO1xuICB9IGVsc2Uge1xuICAgIHBhcnRzLmF0dHJpYnV0ZSA9IGxpbmUuc3Vic3RyKHNwICsgMSk7XG4gIH1cbiAgcmV0dXJuIHBhcnRzO1xufTtcblxuLy8gRXh0cmFjdHMgdGhlIE1JRCAoUkZDIDU4ODgpIGZyb20gYSBtZWRpYSBzZWN0aW9uLlxuLy8gcmV0dXJucyB0aGUgTUlEIG9yIHVuZGVmaW5lZCBpZiBubyBtaWQgbGluZSB3YXMgZm91bmQuXG5TRFBVdGlscy5nZXRNaWQgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIG1pZCA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9bWlkOicpWzBdO1xuICBpZiAobWlkKSB7XG4gICAgcmV0dXJuIG1pZC5zdWJzdHIoNik7XG4gIH1cbn1cblxuU0RQVXRpbHMucGFyc2VGaW5nZXJwcmludCA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gbGluZS5zdWJzdHIoMTQpLnNwbGl0KCcgJyk7XG4gIHJldHVybiB7XG4gICAgYWxnb3JpdGhtOiBwYXJ0c1swXS50b0xvd2VyQ2FzZSgpLCAvLyBhbGdvcml0aG0gaXMgY2FzZS1zZW5zaXRpdmUgaW4gRWRnZS5cbiAgICB2YWx1ZTogcGFydHNbMV1cbiAgfTtcbn07XG5cbi8vIEV4dHJhY3RzIERUTFMgcGFyYW1ldGVycyBmcm9tIFNEUCBtZWRpYSBzZWN0aW9uIG9yIHNlc3Npb25wYXJ0LlxuLy8gRklYTUU6IGZvciBjb25zaXN0ZW5jeSB3aXRoIG90aGVyIGZ1bmN0aW9ucyB0aGlzIHNob3VsZCBvbmx5XG4vLyAgIGdldCB0aGUgZmluZ2VycHJpbnQgbGluZSBhcyBpbnB1dC4gU2VlIGFsc28gZ2V0SWNlUGFyYW1ldGVycy5cblNEUFV0aWxzLmdldER0bHNQYXJhbWV0ZXJzID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCkge1xuICB2YXIgbGluZXMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24gKyBzZXNzaW9ucGFydCxcbiAgICAgICdhPWZpbmdlcnByaW50OicpO1xuICAvLyBOb3RlOiBhPXNldHVwIGxpbmUgaXMgaWdub3JlZCBzaW5jZSB3ZSB1c2UgdGhlICdhdXRvJyByb2xlLlxuICAvLyBOb3RlMjogJ2FsZ29yaXRobScgaXMgbm90IGNhc2Ugc2Vuc2l0aXZlIGV4Y2VwdCBpbiBFZGdlLlxuICByZXR1cm4ge1xuICAgIHJvbGU6ICdhdXRvJyxcbiAgICBmaW5nZXJwcmludHM6IGxpbmVzLm1hcChTRFBVdGlscy5wYXJzZUZpbmdlcnByaW50KVxuICB9O1xufTtcblxuLy8gU2VyaWFsaXplcyBEVExTIHBhcmFtZXRlcnMgdG8gU0RQLlxuU0RQVXRpbHMud3JpdGVEdGxzUGFyYW1ldGVycyA9IGZ1bmN0aW9uKHBhcmFtcywgc2V0dXBUeXBlKSB7XG4gIHZhciBzZHAgPSAnYT1zZXR1cDonICsgc2V0dXBUeXBlICsgJ1xcclxcbic7XG4gIHBhcmFtcy5maW5nZXJwcmludHMuZm9yRWFjaChmdW5jdGlvbihmcCkge1xuICAgIHNkcCArPSAnYT1maW5nZXJwcmludDonICsgZnAuYWxnb3JpdGhtICsgJyAnICsgZnAudmFsdWUgKyAnXFxyXFxuJztcbiAgfSk7XG4gIHJldHVybiBzZHA7XG59O1xuLy8gUGFyc2VzIElDRSBpbmZvcm1hdGlvbiBmcm9tIFNEUCBtZWRpYSBzZWN0aW9uIG9yIHNlc3Npb25wYXJ0LlxuLy8gRklYTUU6IGZvciBjb25zaXN0ZW5jeSB3aXRoIG90aGVyIGZ1bmN0aW9ucyB0aGlzIHNob3VsZCBvbmx5XG4vLyAgIGdldCB0aGUgaWNlLXVmcmFnIGFuZCBpY2UtcHdkIGxpbmVzIGFzIGlucHV0LlxuU0RQVXRpbHMuZ2V0SWNlUGFyYW1ldGVycyA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpIHtcbiAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICAvLyBTZWFyY2ggaW4gc2Vzc2lvbiBwYXJ0LCB0b28uXG4gIGxpbmVzID0gbGluZXMuY29uY2F0KFNEUFV0aWxzLnNwbGl0TGluZXMoc2Vzc2lvbnBhcnQpKTtcbiAgdmFyIGljZVBhcmFtZXRlcnMgPSB7XG4gICAgdXNlcm5hbWVGcmFnbWVudDogbGluZXMuZmlsdGVyKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHJldHVybiBsaW5lLmluZGV4T2YoJ2E9aWNlLXVmcmFnOicpID09PSAwO1xuICAgIH0pWzBdLnN1YnN0cigxMiksXG4gICAgcGFzc3dvcmQ6IGxpbmVzLmZpbHRlcihmdW5jdGlvbihsaW5lKSB7XG4gICAgICByZXR1cm4gbGluZS5pbmRleE9mKCdhPWljZS1wd2Q6JykgPT09IDA7XG4gICAgfSlbMF0uc3Vic3RyKDEwKVxuICB9O1xuICByZXR1cm4gaWNlUGFyYW1ldGVycztcbn07XG5cbi8vIFNlcmlhbGl6ZXMgSUNFIHBhcmFtZXRlcnMgdG8gU0RQLlxuU0RQVXRpbHMud3JpdGVJY2VQYXJhbWV0ZXJzID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIHJldHVybiAnYT1pY2UtdWZyYWc6JyArIHBhcmFtcy51c2VybmFtZUZyYWdtZW50ICsgJ1xcclxcbicgK1xuICAgICAgJ2E9aWNlLXB3ZDonICsgcGFyYW1zLnBhc3N3b3JkICsgJ1xcclxcbic7XG59O1xuXG4vLyBQYXJzZXMgdGhlIFNEUCBtZWRpYSBzZWN0aW9uIGFuZCByZXR1cm5zIFJUQ1J0cFBhcmFtZXRlcnMuXG5TRFBVdGlscy5wYXJzZVJ0cFBhcmFtZXRlcnMgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIGRlc2NyaXB0aW9uID0ge1xuICAgIGNvZGVjczogW10sXG4gICAgaGVhZGVyRXh0ZW5zaW9uczogW10sXG4gICAgZmVjTWVjaGFuaXNtczogW10sXG4gICAgcnRjcDogW11cbiAgfTtcbiAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICB2YXIgbWxpbmUgPSBsaW5lc1swXS5zcGxpdCgnICcpO1xuICBmb3IgKHZhciBpID0gMzsgaSA8IG1saW5lLmxlbmd0aDsgaSsrKSB7IC8vIGZpbmQgYWxsIGNvZGVjcyBmcm9tIG1saW5lWzMuLl1cbiAgICB2YXIgcHQgPSBtbGluZVtpXTtcbiAgICB2YXIgcnRwbWFwbGluZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KFxuICAgICAgICBtZWRpYVNlY3Rpb24sICdhPXJ0cG1hcDonICsgcHQgKyAnICcpWzBdO1xuICAgIGlmIChydHBtYXBsaW5lKSB7XG4gICAgICB2YXIgY29kZWMgPSBTRFBVdGlscy5wYXJzZVJ0cE1hcChydHBtYXBsaW5lKTtcbiAgICAgIHZhciBmbXRwcyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KFxuICAgICAgICAgIG1lZGlhU2VjdGlvbiwgJ2E9Zm10cDonICsgcHQgKyAnICcpO1xuICAgICAgLy8gT25seSB0aGUgZmlyc3QgYT1mbXRwOjxwdD4gaXMgY29uc2lkZXJlZC5cbiAgICAgIGNvZGVjLnBhcmFtZXRlcnMgPSBmbXRwcy5sZW5ndGggPyBTRFBVdGlscy5wYXJzZUZtdHAoZm10cHNbMF0pIDoge307XG4gICAgICBjb2RlYy5ydGNwRmVlZGJhY2sgPSBTRFBVdGlscy5tYXRjaFByZWZpeChcbiAgICAgICAgICBtZWRpYVNlY3Rpb24sICdhPXJ0Y3AtZmI6JyArIHB0ICsgJyAnKVxuICAgICAgICAubWFwKFNEUFV0aWxzLnBhcnNlUnRjcEZiKTtcbiAgICAgIGRlc2NyaXB0aW9uLmNvZGVjcy5wdXNoKGNvZGVjKTtcbiAgICAgIC8vIHBhcnNlIEZFQyBtZWNoYW5pc21zIGZyb20gcnRwbWFwIGxpbmVzLlxuICAgICAgc3dpdGNoIChjb2RlYy5uYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSAnUkVEJzpcbiAgICAgICAgY2FzZSAnVUxQRkVDJzpcbiAgICAgICAgICBkZXNjcmlwdGlvbi5mZWNNZWNoYW5pc21zLnB1c2goY29kZWMubmFtZS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogLy8gb25seSBSRUQgYW5kIFVMUEZFQyBhcmUgcmVjb2duaXplZCBhcyBGRUMgbWVjaGFuaXNtcy5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1leHRtYXA6JykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgZGVzY3JpcHRpb24uaGVhZGVyRXh0ZW5zaW9ucy5wdXNoKFNEUFV0aWxzLnBhcnNlRXh0bWFwKGxpbmUpKTtcbiAgfSk7XG4gIC8vIEZJWE1FOiBwYXJzZSBydGNwLlxuICByZXR1cm4gZGVzY3JpcHRpb247XG59O1xuXG4vLyBHZW5lcmF0ZXMgcGFydHMgb2YgdGhlIFNEUCBtZWRpYSBzZWN0aW9uIGRlc2NyaWJpbmcgdGhlIGNhcGFiaWxpdGllcyAvXG4vLyBwYXJhbWV0ZXJzLlxuU0RQVXRpbHMud3JpdGVSdHBEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKGtpbmQsIGNhcHMpIHtcbiAgdmFyIHNkcCA9ICcnO1xuXG4gIC8vIEJ1aWxkIHRoZSBtbGluZS5cbiAgc2RwICs9ICdtPScgKyBraW5kICsgJyAnO1xuICBzZHAgKz0gY2Fwcy5jb2RlY3MubGVuZ3RoID4gMCA/ICc5JyA6ICcwJzsgLy8gcmVqZWN0IGlmIG5vIGNvZGVjcy5cbiAgc2RwICs9ICcgVURQL1RMUy9SVFAvU0FWUEYgJztcbiAgc2RwICs9IGNhcHMuY29kZWNzLm1hcChmdW5jdGlvbihjb2RlYykge1xuICAgIGlmIChjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGU7XG4gICAgfVxuICAgIHJldHVybiBjb2RlYy5wYXlsb2FkVHlwZTtcbiAgfSkuam9pbignICcpICsgJ1xcclxcbic7XG5cbiAgc2RwICs9ICdjPUlOIElQNCAwLjAuMC4wXFxyXFxuJztcbiAgc2RwICs9ICdhPXJ0Y3A6OSBJTiBJUDQgMC4wLjAuMFxcclxcbic7XG5cbiAgLy8gQWRkIGE9cnRwbWFwIGxpbmVzIGZvciBlYWNoIGNvZGVjLiBBbHNvIGZtdHAgYW5kIHJ0Y3AtZmIuXG4gIGNhcHMuY29kZWNzLmZvckVhY2goZnVuY3Rpb24oY29kZWMpIHtcbiAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVSdHBNYXAoY29kZWMpO1xuICAgIHNkcCArPSBTRFBVdGlscy53cml0ZUZtdHAoY29kZWMpO1xuICAgIHNkcCArPSBTRFBVdGlscy53cml0ZVJ0Y3BGYihjb2RlYyk7XG4gIH0pO1xuICB2YXIgbWF4cHRpbWUgPSAwO1xuICBjYXBzLmNvZGVjcy5mb3JFYWNoKGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgaWYgKGNvZGVjLm1heHB0aW1lID4gbWF4cHRpbWUpIHtcbiAgICAgIG1heHB0aW1lID0gY29kZWMubWF4cHRpbWU7XG4gICAgfVxuICB9KTtcbiAgaWYgKG1heHB0aW1lID4gMCkge1xuICAgIHNkcCArPSAnYT1tYXhwdGltZTonICsgbWF4cHRpbWUgKyAnXFxyXFxuJztcbiAgfVxuICBzZHAgKz0gJ2E9cnRjcC1tdXhcXHJcXG4nO1xuXG4gIGNhcHMuaGVhZGVyRXh0ZW5zaW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGV4dGVuc2lvbikge1xuICAgIHNkcCArPSBTRFBVdGlscy53cml0ZUV4dG1hcChleHRlbnNpb24pO1xuICB9KTtcbiAgLy8gRklYTUU6IHdyaXRlIGZlY01lY2hhbmlzbXMuXG4gIHJldHVybiBzZHA7XG59O1xuXG4vLyBQYXJzZXMgdGhlIFNEUCBtZWRpYSBzZWN0aW9uIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mXG4vLyBSVENSdHBFbmNvZGluZ1BhcmFtZXRlcnMuXG5TRFBVdGlscy5wYXJzZVJ0cEVuY29kaW5nUGFyYW1ldGVycyA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbikge1xuICB2YXIgZW5jb2RpbmdQYXJhbWV0ZXJzID0gW107XG4gIHZhciBkZXNjcmlwdGlvbiA9IFNEUFV0aWxzLnBhcnNlUnRwUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24pO1xuICB2YXIgaGFzUmVkID0gZGVzY3JpcHRpb24uZmVjTWVjaGFuaXNtcy5pbmRleE9mKCdSRUQnKSAhPT0gLTE7XG4gIHZhciBoYXNVbHBmZWMgPSBkZXNjcmlwdGlvbi5mZWNNZWNoYW5pc21zLmluZGV4T2YoJ1VMUEZFQycpICE9PSAtMTtcblxuICAvLyBmaWx0ZXIgYT1zc3JjOi4uLiBjbmFtZTosIGlnbm9yZSBQbGFuQi1tc2lkXG4gIHZhciBzc3JjcyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9c3NyYzonKVxuICAubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICByZXR1cm4gU0RQVXRpbHMucGFyc2VTc3JjTWVkaWEobGluZSk7XG4gIH0pXG4gIC5maWx0ZXIoZnVuY3Rpb24ocGFydHMpIHtcbiAgICByZXR1cm4gcGFydHMuYXR0cmlidXRlID09PSAnY25hbWUnO1xuICB9KTtcbiAgdmFyIHByaW1hcnlTc3JjID0gc3NyY3MubGVuZ3RoID4gMCAmJiBzc3Jjc1swXS5zc3JjO1xuICB2YXIgc2Vjb25kYXJ5U3NyYztcblxuICB2YXIgZmxvd3MgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPXNzcmMtZ3JvdXA6RklEJylcbiAgLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnICcpO1xuICAgIHBhcnRzLnNoaWZ0KCk7XG4gICAgcmV0dXJuIHBhcnRzLm1hcChmdW5jdGlvbihwYXJ0KSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQocGFydCwgMTApO1xuICAgIH0pO1xuICB9KTtcbiAgaWYgKGZsb3dzLmxlbmd0aCA+IDAgJiYgZmxvd3NbMF0ubGVuZ3RoID4gMSAmJiBmbG93c1swXVswXSA9PT0gcHJpbWFyeVNzcmMpIHtcbiAgICBzZWNvbmRhcnlTc3JjID0gZmxvd3NbMF1bMV07XG4gIH1cblxuICBkZXNjcmlwdGlvbi5jb2RlY3MuZm9yRWFjaChmdW5jdGlvbihjb2RlYykge1xuICAgIGlmIChjb2RlYy5uYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdSVFgnICYmIGNvZGVjLnBhcmFtZXRlcnMuYXB0KSB7XG4gICAgICB2YXIgZW5jUGFyYW0gPSB7XG4gICAgICAgIHNzcmM6IHByaW1hcnlTc3JjLFxuICAgICAgICBjb2RlY1BheWxvYWRUeXBlOiBwYXJzZUludChjb2RlYy5wYXJhbWV0ZXJzLmFwdCwgMTApLFxuICAgICAgICBydHg6IHtcbiAgICAgICAgICBzc3JjOiBzZWNvbmRhcnlTc3JjXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBlbmNvZGluZ1BhcmFtZXRlcnMucHVzaChlbmNQYXJhbSk7XG4gICAgICBpZiAoaGFzUmVkKSB7XG4gICAgICAgIGVuY1BhcmFtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbmNQYXJhbSkpO1xuICAgICAgICBlbmNQYXJhbS5mZWMgPSB7XG4gICAgICAgICAgc3NyYzogc2Vjb25kYXJ5U3NyYyxcbiAgICAgICAgICBtZWNoYW5pc206IGhhc1VscGZlYyA/ICdyZWQrdWxwZmVjJyA6ICdyZWQnXG4gICAgICAgIH07XG4gICAgICAgIGVuY29kaW5nUGFyYW1ldGVycy5wdXNoKGVuY1BhcmFtKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBpZiAoZW5jb2RpbmdQYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMCAmJiBwcmltYXJ5U3NyYykge1xuICAgIGVuY29kaW5nUGFyYW1ldGVycy5wdXNoKHtcbiAgICAgIHNzcmM6IHByaW1hcnlTc3JjXG4gICAgfSk7XG4gIH1cblxuICAvLyB3ZSBzdXBwb3J0IGJvdGggYj1BUyBhbmQgYj1USUFTIGJ1dCBpbnRlcnByZXQgQVMgYXMgVElBUy5cbiAgdmFyIGJhbmR3aWR0aCA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2I9Jyk7XG4gIGlmIChiYW5kd2lkdGgubGVuZ3RoKSB7XG4gICAgaWYgKGJhbmR3aWR0aFswXS5pbmRleE9mKCdiPVRJQVM6JykgPT09IDApIHtcbiAgICAgIGJhbmR3aWR0aCA9IHBhcnNlSW50KGJhbmR3aWR0aFswXS5zdWJzdHIoNyksIDEwKTtcbiAgICB9IGVsc2UgaWYgKGJhbmR3aWR0aFswXS5pbmRleE9mKCdiPUFTOicpID09PSAwKSB7XG4gICAgICAvLyB1c2UgZm9ybXVsYSBmcm9tIEpTRVAgdG8gY29udmVydCBiPUFTIHRvIFRJQVMgdmFsdWUuXG4gICAgICBiYW5kd2lkdGggPSBwYXJzZUludChiYW5kd2lkdGhbMF0uc3Vic3RyKDUpLCAxMCkgKiAxMDAwICogMC45NVxuICAgICAgICAgIC0gKDUwICogNDAgKiA4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFuZHdpZHRoID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbmNvZGluZ1BhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIHBhcmFtcy5tYXhCaXRyYXRlID0gYmFuZHdpZHRoO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlbmNvZGluZ1BhcmFtZXRlcnM7XG59O1xuXG4vLyBwYXJzZXMgaHR0cDovL2RyYWZ0Lm9ydGMub3JnLyNydGNydGNwcGFyYW1ldGVycypcblNEUFV0aWxzLnBhcnNlUnRjcFBhcmFtZXRlcnMgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIHJ0Y3BQYXJhbWV0ZXJzID0ge307XG5cbiAgdmFyIGNuYW1lO1xuICAvLyBHZXRzIHRoZSBmaXJzdCBTU1JDLiBOb3RlIHRoYXQgd2l0aCBSVFggdGhlcmUgbWlnaHQgYmUgbXVsdGlwbGVcbiAgLy8gU1NSQ3MuXG4gIHZhciByZW1vdGVTc3JjID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1zc3JjOicpXG4gICAgICAubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgcmV0dXJuIFNEUFV0aWxzLnBhcnNlU3NyY01lZGlhKGxpbmUpO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmouYXR0cmlidXRlID09PSAnY25hbWUnO1xuICAgICAgfSlbMF07XG4gIGlmIChyZW1vdGVTc3JjKSB7XG4gICAgcnRjcFBhcmFtZXRlcnMuY25hbWUgPSByZW1vdGVTc3JjLnZhbHVlO1xuICAgIHJ0Y3BQYXJhbWV0ZXJzLnNzcmMgPSByZW1vdGVTc3JjLnNzcmM7XG4gIH1cblxuICAvLyBFZGdlIHVzZXMgdGhlIGNvbXBvdW5kIGF0dHJpYnV0ZSBpbnN0ZWFkIG9mIHJlZHVjZWRTaXplXG4gIC8vIGNvbXBvdW5kIGlzICFyZWR1Y2VkU2l6ZVxuICB2YXIgcnNpemUgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPXJ0Y3AtcnNpemUnKTtcbiAgcnRjcFBhcmFtZXRlcnMucmVkdWNlZFNpemUgPSByc2l6ZS5sZW5ndGggPiAwO1xuICBydGNwUGFyYW1ldGVycy5jb21wb3VuZCA9IHJzaXplLmxlbmd0aCA9PT0gMDtcblxuICAvLyBwYXJzZXMgdGhlIHJ0Y3AtbXV4IGF0dHLRlmJ1dGUuXG4gIC8vIE5vdGUgdGhhdCBFZGdlIGRvZXMgbm90IHN1cHBvcnQgdW5tdXhlZCBSVENQLlxuICB2YXIgbXV4ID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1ydGNwLW11eCcpO1xuICBydGNwUGFyYW1ldGVycy5tdXggPSBtdXgubGVuZ3RoID4gMDtcblxuICByZXR1cm4gcnRjcFBhcmFtZXRlcnM7XG59O1xuXG4vLyBwYXJzZXMgZWl0aGVyIGE9bXNpZDogb3IgYT1zc3JjOi4uLiBtc2lkIGxpbmVzIGFuZCByZXR1cm5zXG4vLyB0aGUgaWQgb2YgdGhlIE1lZGlhU3RyZWFtIGFuZCBNZWRpYVN0cmVhbVRyYWNrLlxuU0RQVXRpbHMucGFyc2VNc2lkID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gIHZhciBwYXJ0cztcbiAgdmFyIHNwZWMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPW1zaWQ6Jyk7XG4gIGlmIChzcGVjLmxlbmd0aCA9PT0gMSkge1xuICAgIHBhcnRzID0gc3BlY1swXS5zdWJzdHIoNykuc3BsaXQoJyAnKTtcbiAgICByZXR1cm4ge3N0cmVhbTogcGFydHNbMF0sIHRyYWNrOiBwYXJ0c1sxXX07XG4gIH1cbiAgdmFyIHBsYW5CID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1zc3JjOicpXG4gIC5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgIHJldHVybiBTRFBVdGlscy5wYXJzZVNzcmNNZWRpYShsaW5lKTtcbiAgfSlcbiAgLmZpbHRlcihmdW5jdGlvbihwYXJ0cykge1xuICAgIHJldHVybiBwYXJ0cy5hdHRyaWJ1dGUgPT09ICdtc2lkJztcbiAgfSk7XG4gIGlmIChwbGFuQi5sZW5ndGggPiAwKSB7XG4gICAgcGFydHMgPSBwbGFuQlswXS52YWx1ZS5zcGxpdCgnICcpO1xuICAgIHJldHVybiB7c3RyZWFtOiBwYXJ0c1swXSwgdHJhY2s6IHBhcnRzWzFdfTtcbiAgfVxufTtcblxuLy8gR2VuZXJhdGUgYSBzZXNzaW9uIElEIGZvciBTRFAuXG4vLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvZHJhZnQtaWV0Zi1ydGN3ZWItanNlcC0yMCNzZWN0aW9uLTUuMi4xXG4vLyByZWNvbW1lbmRzIHVzaW5nIGEgY3J5cHRvZ3JhcGhpY2FsbHkgcmFuZG9tICt2ZSA2NC1iaXQgdmFsdWVcbi8vIGJ1dCByaWdodCBub3cgdGhpcyBzaG91bGQgYmUgYWNjZXB0YWJsZSBhbmQgd2l0aGluIHRoZSByaWdodCByYW5nZVxuU0RQVXRpbHMuZ2VuZXJhdGVTZXNzaW9uSWQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zdWJzdHIoMiwgMjEpO1xufTtcblxuLy8gV3JpdGUgYm9pbGRlciBwbGF0ZSBmb3Igc3RhcnQgb2YgU0RQXG4vLyBzZXNzSWQgYXJndW1lbnQgaXMgb3B0aW9uYWwgLSBpZiBub3Qgc3VwcGxpZWQgaXQgd2lsbFxuLy8gYmUgZ2VuZXJhdGVkIHJhbmRvbWx5XG4vLyBzZXNzVmVyc2lvbiBpcyBvcHRpb25hbCBhbmQgZGVmYXVsdHMgdG8gMlxuU0RQVXRpbHMud3JpdGVTZXNzaW9uQm9pbGVycGxhdGUgPSBmdW5jdGlvbihzZXNzSWQsIHNlc3NWZXIpIHtcbiAgdmFyIHNlc3Npb25JZDtcbiAgdmFyIHZlcnNpb24gPSBzZXNzVmVyICE9PSB1bmRlZmluZWQgPyBzZXNzVmVyIDogMjtcbiAgaWYgKHNlc3NJZCkge1xuICAgIHNlc3Npb25JZCA9IHNlc3NJZDtcbiAgfSBlbHNlIHtcbiAgICBzZXNzaW9uSWQgPSBTRFBVdGlscy5nZW5lcmF0ZVNlc3Npb25JZCgpO1xuICB9XG4gIC8vIEZJWE1FOiBzZXNzLWlkIHNob3VsZCBiZSBhbiBOVFAgdGltZXN0YW1wLlxuICByZXR1cm4gJ3Y9MFxcclxcbicgK1xuICAgICAgJ289dGhpc2lzYWRhcHRlcm9ydGMgJyArIHNlc3Npb25JZCArICcgJyArIHZlcnNpb24gKyAnIElOIElQNCAxMjcuMC4wLjFcXHJcXG4nICtcbiAgICAgICdzPS1cXHJcXG4nICtcbiAgICAgICd0PTAgMFxcclxcbic7XG59O1xuXG5TRFBVdGlscy53cml0ZU1lZGlhU2VjdGlvbiA9IGZ1bmN0aW9uKHRyYW5zY2VpdmVyLCBjYXBzLCB0eXBlLCBzdHJlYW0pIHtcbiAgdmFyIHNkcCA9IFNEUFV0aWxzLndyaXRlUnRwRGVzY3JpcHRpb24odHJhbnNjZWl2ZXIua2luZCwgY2Fwcyk7XG5cbiAgLy8gTWFwIElDRSBwYXJhbWV0ZXJzICh1ZnJhZywgcHdkKSB0byBTRFAuXG4gIHNkcCArPSBTRFBVdGlscy53cml0ZUljZVBhcmFtZXRlcnMoXG4gICAgICB0cmFuc2NlaXZlci5pY2VHYXRoZXJlci5nZXRMb2NhbFBhcmFtZXRlcnMoKSk7XG5cbiAgLy8gTWFwIERUTFMgcGFyYW1ldGVycyB0byBTRFAuXG4gIHNkcCArPSBTRFBVdGlscy53cml0ZUR0bHNQYXJhbWV0ZXJzKFxuICAgICAgdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydC5nZXRMb2NhbFBhcmFtZXRlcnMoKSxcbiAgICAgIHR5cGUgPT09ICdvZmZlcicgPyAnYWN0cGFzcycgOiAnYWN0aXZlJyk7XG5cbiAgc2RwICs9ICdhPW1pZDonICsgdHJhbnNjZWl2ZXIubWlkICsgJ1xcclxcbic7XG5cbiAgaWYgKHRyYW5zY2VpdmVyLmRpcmVjdGlvbikge1xuICAgIHNkcCArPSAnYT0nICsgdHJhbnNjZWl2ZXIuZGlyZWN0aW9uICsgJ1xcclxcbic7XG4gIH0gZWxzZSBpZiAodHJhbnNjZWl2ZXIucnRwU2VuZGVyICYmIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyKSB7XG4gICAgc2RwICs9ICdhPXNlbmRyZWN2XFxyXFxuJztcbiAgfSBlbHNlIGlmICh0cmFuc2NlaXZlci5ydHBTZW5kZXIpIHtcbiAgICBzZHAgKz0gJ2E9c2VuZG9ubHlcXHJcXG4nO1xuICB9IGVsc2UgaWYgKHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyKSB7XG4gICAgc2RwICs9ICdhPXJlY3Zvbmx5XFxyXFxuJztcbiAgfSBlbHNlIHtcbiAgICBzZHAgKz0gJ2E9aW5hY3RpdmVcXHJcXG4nO1xuICB9XG5cbiAgaWYgKHRyYW5zY2VpdmVyLnJ0cFNlbmRlcikge1xuICAgIC8vIHNwZWMuXG4gICAgdmFyIG1zaWQgPSAnbXNpZDonICsgc3RyZWFtLmlkICsgJyAnICtcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRwU2VuZGVyLnRyYWNrLmlkICsgJ1xcclxcbic7XG4gICAgc2RwICs9ICdhPScgKyBtc2lkO1xuXG4gICAgLy8gZm9yIENocm9tZS5cbiAgICBzZHAgKz0gJ2E9c3NyYzonICsgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5zc3JjICtcbiAgICAgICAgJyAnICsgbXNpZDtcbiAgICBpZiAodHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHgpIHtcbiAgICAgIHNkcCArPSAnYT1zc3JjOicgKyB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eC5zc3JjICtcbiAgICAgICAgICAnICcgKyBtc2lkO1xuICAgICAgc2RwICs9ICdhPXNzcmMtZ3JvdXA6RklEICcgK1xuICAgICAgICAgIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0uc3NyYyArICcgJyArXG4gICAgICAgICAgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHguc3NyYyArXG4gICAgICAgICAgJ1xcclxcbic7XG4gICAgfVxuICB9XG4gIC8vIEZJWE1FOiB0aGlzIHNob3VsZCBiZSB3cml0dGVuIGJ5IHdyaXRlUnRwRGVzY3JpcHRpb24uXG4gIHNkcCArPSAnYT1zc3JjOicgKyB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnNzcmMgK1xuICAgICAgJyBjbmFtZTonICsgU0RQVXRpbHMubG9jYWxDTmFtZSArICdcXHJcXG4nO1xuICBpZiAodHJhbnNjZWl2ZXIucnRwU2VuZGVyICYmIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4KSB7XG4gICAgc2RwICs9ICdhPXNzcmM6JyArIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4LnNzcmMgK1xuICAgICAgICAnIGNuYW1lOicgKyBTRFBVdGlscy5sb2NhbENOYW1lICsgJ1xcclxcbic7XG4gIH1cbiAgcmV0dXJuIHNkcDtcbn07XG5cbi8vIEdldHMgdGhlIGRpcmVjdGlvbiBmcm9tIHRoZSBtZWRpYVNlY3Rpb24gb3IgdGhlIHNlc3Npb25wYXJ0LlxuU0RQVXRpbHMuZ2V0RGlyZWN0aW9uID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCkge1xuICAvLyBMb29rIGZvciBzZW5kcmVjdiwgc2VuZG9ubHksIHJlY3Zvbmx5LCBpbmFjdGl2ZSwgZGVmYXVsdCB0byBzZW5kcmVjdi5cbiAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChsaW5lc1tpXSkge1xuICAgICAgY2FzZSAnYT1zZW5kcmVjdic6XG4gICAgICBjYXNlICdhPXNlbmRvbmx5JzpcbiAgICAgIGNhc2UgJ2E9cmVjdm9ubHknOlxuICAgICAgY2FzZSAnYT1pbmFjdGl2ZSc6XG4gICAgICAgIHJldHVybiBsaW5lc1tpXS5zdWJzdHIoMik7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBGSVhNRTogV2hhdCBzaG91bGQgaGFwcGVuIGhlcmU/XG4gICAgfVxuICB9XG4gIGlmIChzZXNzaW9ucGFydCkge1xuICAgIHJldHVybiBTRFBVdGlscy5nZXREaXJlY3Rpb24oc2Vzc2lvbnBhcnQpO1xuICB9XG4gIHJldHVybiAnc2VuZHJlY3YnO1xufTtcblxuU0RQVXRpbHMuZ2V0S2luZCA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbikge1xuICB2YXIgbGluZXMgPSBTRFBVdGlscy5zcGxpdExpbmVzKG1lZGlhU2VjdGlvbik7XG4gIHZhciBtbGluZSA9IGxpbmVzWzBdLnNwbGl0KCcgJyk7XG4gIHJldHVybiBtbGluZVswXS5zdWJzdHIoMik7XG59O1xuXG5TRFBVdGlscy5pc1JlamVjdGVkID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gIHJldHVybiBtZWRpYVNlY3Rpb24uc3BsaXQoJyAnLCAyKVsxXSA9PT0gJzAnO1xufTtcblxuU0RQVXRpbHMucGFyc2VNTGluZSA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbikge1xuICB2YXIgbGluZXMgPSBTRFBVdGlscy5zcGxpdExpbmVzKG1lZGlhU2VjdGlvbik7XG4gIHZhciBtbGluZSA9IGxpbmVzWzBdLnNwbGl0KCcgJyk7XG4gIHJldHVybiB7XG4gICAga2luZDogbWxpbmVbMF0uc3Vic3RyKDIpLFxuICAgIHBvcnQ6IHBhcnNlSW50KG1saW5lWzFdLCAxMCksXG4gICAgcHJvdG9jb2w6IG1saW5lWzJdLFxuICAgIGZtdDogbWxpbmUuc2xpY2UoMykuam9pbignICcpXG4gIH07XG59O1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBTRFBVdGlscztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zZHAvc2RwLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGFkYXB0ZXJGYWN0b3J5ID0gcmVxdWlyZSgnLi9hZGFwdGVyX2ZhY3RvcnkuanMnKTtcbm1vZHVsZS5leHBvcnRzID0gYWRhcHRlckZhY3Rvcnkoe3dpbmRvdzogZ2xvYmFsLndpbmRvd30pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9hZGFwdGVyX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDE3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBTaGltbWluZyBzdGFydHMgaGVyZS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZGVwZW5kZW5jaWVzLCBvcHRzKSB7XG4gIHZhciB3aW5kb3cgPSBkZXBlbmRlbmNpZXMgJiYgZGVwZW5kZW5jaWVzLndpbmRvdztcblxuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBzaGltQ2hyb21lOiB0cnVlLFxuICAgIHNoaW1GaXJlZm94OiB0cnVlLFxuICAgIHNoaW1FZGdlOiB0cnVlLFxuICAgIHNoaW1TYWZhcmk6IHRydWUsXG4gIH07XG5cbiAgZm9yICh2YXIga2V5IGluIG9wdHMpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvcHRzLCBrZXkpKSB7XG4gICAgICBvcHRpb25zW2tleV0gPSBvcHRzW2tleV07XG4gICAgfVxuICB9XG5cbiAgLy8gVXRpbHMuXG4gIHZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbiAgdmFyIGxvZ2dpbmcgPSB1dGlscy5sb2c7XG4gIHZhciBicm93c2VyRGV0YWlscyA9IHV0aWxzLmRldGVjdEJyb3dzZXIod2luZG93KTtcblxuICAvLyBFeHBvcnQgdG8gdGhlIGFkYXB0ZXIgZ2xvYmFsIG9iamVjdCB2aXNpYmxlIGluIHRoZSBicm93c2VyLlxuICB2YXIgYWRhcHRlciA9IHtcbiAgICBicm93c2VyRGV0YWlsczogYnJvd3NlckRldGFpbHMsXG4gICAgZXh0cmFjdFZlcnNpb246IHV0aWxzLmV4dHJhY3RWZXJzaW9uLFxuICAgIGRpc2FibGVMb2c6IHV0aWxzLmRpc2FibGVMb2csXG4gICAgZGlzYWJsZVdhcm5pbmdzOiB1dGlscy5kaXNhYmxlV2FybmluZ3NcbiAgfTtcblxuICAvLyBVbmNvbW1lbnQgdGhlIGxpbmUgYmVsb3cgaWYgeW91IHdhbnQgbG9nZ2luZyB0byBvY2N1ciwgaW5jbHVkaW5nIGxvZ2dpbmdcbiAgLy8gZm9yIHRoZSBzd2l0Y2ggc3RhdGVtZW50IGJlbG93LiBDYW4gYWxzbyBiZSB0dXJuZWQgb24gaW4gdGhlIGJyb3dzZXIgdmlhXG4gIC8vIGFkYXB0ZXIuZGlzYWJsZUxvZyhmYWxzZSksIGJ1dCB0aGVuIGxvZ2dpbmcgZnJvbSB0aGUgc3dpdGNoIHN0YXRlbWVudCBiZWxvd1xuICAvLyB3aWxsIG5vdCBhcHBlYXIuXG4gIC8vIHJlcXVpcmUoJy4vdXRpbHMnKS5kaXNhYmxlTG9nKGZhbHNlKTtcblxuICAvLyBCcm93c2VyIHNoaW1zLlxuICB2YXIgY2hyb21lU2hpbSA9IHJlcXVpcmUoJy4vY2hyb21lL2Nocm9tZV9zaGltJykgfHwgbnVsbDtcbiAgdmFyIGVkZ2VTaGltID0gcmVxdWlyZSgnLi9lZGdlL2VkZ2Vfc2hpbScpIHx8IG51bGw7XG4gIHZhciBmaXJlZm94U2hpbSA9IHJlcXVpcmUoJy4vZmlyZWZveC9maXJlZm94X3NoaW0nKSB8fCBudWxsO1xuICB2YXIgc2FmYXJpU2hpbSA9IHJlcXVpcmUoJy4vc2FmYXJpL3NhZmFyaV9zaGltJykgfHwgbnVsbDtcblxuICAvLyBTaGltIGJyb3dzZXIgaWYgZm91bmQuXG4gIHN3aXRjaCAoYnJvd3NlckRldGFpbHMuYnJvd3Nlcikge1xuICAgIGNhc2UgJ2Nocm9tZSc6XG4gICAgICBpZiAoIWNocm9tZVNoaW0gfHwgIWNocm9tZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uIHx8XG4gICAgICAgICAgIW9wdGlvbnMuc2hpbUNocm9tZSkge1xuICAgICAgICBsb2dnaW5nKCdDaHJvbWUgc2hpbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhpcyBhZGFwdGVyIHJlbGVhc2UuJyk7XG4gICAgICAgIHJldHVybiBhZGFwdGVyO1xuICAgICAgfVxuICAgICAgbG9nZ2luZygnYWRhcHRlci5qcyBzaGltbWluZyBjaHJvbWUuJyk7XG4gICAgICAvLyBFeHBvcnQgdG8gdGhlIGFkYXB0ZXIgZ2xvYmFsIG9iamVjdCB2aXNpYmxlIGluIHRoZSBicm93c2VyLlxuICAgICAgYWRhcHRlci5icm93c2VyU2hpbSA9IGNocm9tZVNoaW07XG5cbiAgICAgIGNocm9tZVNoaW0uc2hpbUdldFVzZXJNZWRpYSh3aW5kb3cpO1xuICAgICAgY2hyb21lU2hpbS5zaGltTWVkaWFTdHJlYW0od2luZG93KTtcbiAgICAgIHV0aWxzLnNoaW1DcmVhdGVPYmplY3RVUkwod2luZG93KTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbVNvdXJjZU9iamVjdCh3aW5kb3cpO1xuICAgICAgY2hyb21lU2hpbS5zaGltUGVlckNvbm5lY3Rpb24od2luZG93KTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbU9uVHJhY2sod2luZG93KTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbUFkZFRyYWNrUmVtb3ZlVHJhY2sod2luZG93KTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbUdldFNlbmRlcnNXaXRoRHRtZih3aW5kb3cpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZmlyZWZveCc6XG4gICAgICBpZiAoIWZpcmVmb3hTaGltIHx8ICFmaXJlZm94U2hpbS5zaGltUGVlckNvbm5lY3Rpb24gfHxcbiAgICAgICAgICAhb3B0aW9ucy5zaGltRmlyZWZveCkge1xuICAgICAgICBsb2dnaW5nKCdGaXJlZm94IHNoaW0gaXMgbm90IGluY2x1ZGVkIGluIHRoaXMgYWRhcHRlciByZWxlYXNlLicpO1xuICAgICAgICByZXR1cm4gYWRhcHRlcjtcbiAgICAgIH1cbiAgICAgIGxvZ2dpbmcoJ2FkYXB0ZXIuanMgc2hpbW1pbmcgZmlyZWZveC4nKTtcbiAgICAgIC8vIEV4cG9ydCB0byB0aGUgYWRhcHRlciBnbG9iYWwgb2JqZWN0IHZpc2libGUgaW4gdGhlIGJyb3dzZXIuXG4gICAgICBhZGFwdGVyLmJyb3dzZXJTaGltID0gZmlyZWZveFNoaW07XG5cbiAgICAgIGZpcmVmb3hTaGltLnNoaW1HZXRVc2VyTWVkaWEod2luZG93KTtcbiAgICAgIHV0aWxzLnNoaW1DcmVhdGVPYmplY3RVUkwod2luZG93KTtcbiAgICAgIGZpcmVmb3hTaGltLnNoaW1Tb3VyY2VPYmplY3Qod2luZG93KTtcbiAgICAgIGZpcmVmb3hTaGltLnNoaW1QZWVyQ29ubmVjdGlvbih3aW5kb3cpO1xuICAgICAgZmlyZWZveFNoaW0uc2hpbU9uVHJhY2sod2luZG93KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2VkZ2UnOlxuICAgICAgaWYgKCFlZGdlU2hpbSB8fCAhZWRnZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uIHx8ICFvcHRpb25zLnNoaW1FZGdlKSB7XG4gICAgICAgIGxvZ2dpbmcoJ01TIGVkZ2Ugc2hpbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhpcyBhZGFwdGVyIHJlbGVhc2UuJyk7XG4gICAgICAgIHJldHVybiBhZGFwdGVyO1xuICAgICAgfVxuICAgICAgbG9nZ2luZygnYWRhcHRlci5qcyBzaGltbWluZyBlZGdlLicpO1xuICAgICAgLy8gRXhwb3J0IHRvIHRoZSBhZGFwdGVyIGdsb2JhbCBvYmplY3QgdmlzaWJsZSBpbiB0aGUgYnJvd3Nlci5cbiAgICAgIGFkYXB0ZXIuYnJvd3NlclNoaW0gPSBlZGdlU2hpbTtcblxuICAgICAgZWRnZVNoaW0uc2hpbUdldFVzZXJNZWRpYSh3aW5kb3cpO1xuICAgICAgdXRpbHMuc2hpbUNyZWF0ZU9iamVjdFVSTCh3aW5kb3cpO1xuICAgICAgZWRnZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uKHdpbmRvdyk7XG4gICAgICBlZGdlU2hpbS5zaGltUmVwbGFjZVRyYWNrKHdpbmRvdyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzYWZhcmknOlxuICAgICAgaWYgKCFzYWZhcmlTaGltIHx8ICFvcHRpb25zLnNoaW1TYWZhcmkpIHtcbiAgICAgICAgbG9nZ2luZygnU2FmYXJpIHNoaW0gaXMgbm90IGluY2x1ZGVkIGluIHRoaXMgYWRhcHRlciByZWxlYXNlLicpO1xuICAgICAgICByZXR1cm4gYWRhcHRlcjtcbiAgICAgIH1cbiAgICAgIGxvZ2dpbmcoJ2FkYXB0ZXIuanMgc2hpbW1pbmcgc2FmYXJpLicpO1xuICAgICAgLy8gRXhwb3J0IHRvIHRoZSBhZGFwdGVyIGdsb2JhbCBvYmplY3QgdmlzaWJsZSBpbiB0aGUgYnJvd3Nlci5cbiAgICAgIGFkYXB0ZXIuYnJvd3NlclNoaW0gPSBzYWZhcmlTaGltO1xuICAgICAgLy8gc2hpbSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCBTYWZhcmkgKHRlY2huaWNhbCBwcmV2aWV3KVxuICAgICAgdXRpbHMuc2hpbUNyZWF0ZU9iamVjdFVSTCh3aW5kb3cpO1xuICAgICAgc2FmYXJpU2hpbS5zaGltUlRDSWNlU2VydmVyVXJscyh3aW5kb3cpO1xuICAgICAgc2FmYXJpU2hpbS5zaGltQ2FsbGJhY2tzQVBJKHdpbmRvdyk7XG4gICAgICBzYWZhcmlTaGltLnNoaW1Mb2NhbFN0cmVhbXNBUEkod2luZG93KTtcbiAgICAgIHNhZmFyaVNoaW0uc2hpbVJlbW90ZVN0cmVhbXNBUEkod2luZG93KTtcbiAgICAgIHNhZmFyaVNoaW0uc2hpbUdldFVzZXJNZWRpYSh3aW5kb3cpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGxvZ2dpbmcoJ1Vuc3VwcG9ydGVkIGJyb3dzZXIhJyk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBhZGFwdGVyO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvYWRhcHRlcl9mYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzLmpzJyk7XG52YXIgbG9nZ2luZyA9IHV0aWxzLmxvZztcblxudmFyIGNocm9tZVNoaW0gPSB7XG4gIHNoaW1NZWRpYVN0cmVhbTogZnVuY3Rpb24od2luZG93KSB7XG4gICAgd2luZG93Lk1lZGlhU3RyZWFtID0gd2luZG93Lk1lZGlhU3RyZWFtIHx8IHdpbmRvdy53ZWJraXRNZWRpYVN0cmVhbTtcbiAgfSxcblxuICBzaGltT25UcmFjazogZnVuY3Rpb24od2luZG93KSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiAmJiAhKCdvbnRyYWNrJyBpblxuICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUsICdvbnRyYWNrJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9vbnRyYWNrO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICBpZiAodGhpcy5fb250cmFjaykge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29udHJhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYWNrJywgdGhpcy5fb250cmFjayA9IGYpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZhciBvcmlnU2V0UmVtb3RlRGVzY3JpcHRpb24gPVxuICAgICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuc2V0UmVtb3RlRGVzY3JpcHRpb247XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICAgIGlmICghcGMuX29udHJhY2twb2x5KSB7XG4gICAgICAgICAgcGMuX29udHJhY2twb2x5ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgLy8gb25hZGRzdHJlYW0gZG9lcyBub3QgZmlyZSB3aGVuIGEgdHJhY2sgaXMgYWRkZWQgdG8gYW4gZXhpc3RpbmdcbiAgICAgICAgICAgIC8vIHN0cmVhbS4gQnV0IHN0cmVhbS5vbmFkZHRyYWNrIGlzIGltcGxlbWVudGVkIHNvIHdlIHVzZSB0aGF0LlxuICAgICAgICAgICAgZS5zdHJlYW0uYWRkRXZlbnRMaXN0ZW5lcignYWRkdHJhY2snLCBmdW5jdGlvbih0ZSkge1xuICAgICAgICAgICAgICB2YXIgcmVjZWl2ZXI7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFJlY2VpdmVycykge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyID0gcGMuZ2V0UmVjZWl2ZXJzKCkuZmluZChmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gci50cmFjayAmJiByLnRyYWNrLmlkID09PSB0ZS50cmFjay5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlciA9IHt0cmFjazogdGUudHJhY2t9O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCd0cmFjaycpO1xuICAgICAgICAgICAgICBldmVudC50cmFjayA9IHRlLnRyYWNrO1xuICAgICAgICAgICAgICBldmVudC5yZWNlaXZlciA9IHJlY2VpdmVyO1xuICAgICAgICAgICAgICBldmVudC5zdHJlYW1zID0gW2Uuc3RyZWFtXTtcbiAgICAgICAgICAgICAgcGMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGUuc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICAgICAgdmFyIHJlY2VpdmVyO1xuICAgICAgICAgICAgICBpZiAod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRSZWNlaXZlcnMpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlciA9IHBjLmdldFJlY2VpdmVycygpLmZpbmQoZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHIudHJhY2sgJiYgci50cmFjay5pZCA9PT0gdHJhY2suaWQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIgPSB7dHJhY2s6IHRyYWNrfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3RyYWNrJyk7XG4gICAgICAgICAgICAgIGV2ZW50LnRyYWNrID0gdHJhY2s7XG4gICAgICAgICAgICAgIGV2ZW50LnJlY2VpdmVyID0gcmVjZWl2ZXI7XG4gICAgICAgICAgICAgIGV2ZW50LnN0cmVhbXMgPSBbZS5zdHJlYW1dO1xuICAgICAgICAgICAgICBwYy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcGMuYWRkRXZlbnRMaXN0ZW5lcignYWRkc3RyZWFtJywgcGMuX29udHJhY2twb2x5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZ1NldFJlbW90ZURlc2NyaXB0aW9uLmFwcGx5KHBjLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sXG5cbiAgc2hpbUdldFNlbmRlcnNXaXRoRHRtZjogZnVuY3Rpb24od2luZG93KSB7XG4gICAgLy8gT3ZlcnJpZGVzIGFkZFRyYWNrL3JlbW92ZVRyYWNrLCBkZXBlbmRzIG9uIHNoaW1BZGRUcmFja1JlbW92ZVRyYWNrLlxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gJiZcbiAgICAgICAgISgnZ2V0U2VuZGVycycgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkgJiZcbiAgICAgICAgJ2NyZWF0ZURUTUZTZW5kZXInIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpIHtcbiAgICAgIHZhciBzaGltU2VuZGVyV2l0aER0bWYgPSBmdW5jdGlvbihwYywgdHJhY2spIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0cmFjazogdHJhY2ssXG4gICAgICAgICAgZ2V0IGR0bWYoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZHRtZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGlmICh0cmFjay5raW5kID09PSAnYXVkaW8nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHRtZiA9IHBjLmNyZWF0ZURUTUZTZW5kZXIodHJhY2spO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2R0bWYgPSBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZHRtZjtcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9wYzogcGNcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIC8vIGF1Z21lbnQgYWRkVHJhY2sgd2hlbiBnZXRTZW5kZXJzIGlzIG5vdCBhdmFpbGFibGUuXG4gICAgICBpZiAoIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U2VuZGVycykge1xuICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFNlbmRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLl9zZW5kZXJzID0gdGhpcy5fc2VuZGVycyB8fCBbXTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2VuZGVycy5zbGljZSgpOyAvLyByZXR1cm4gYSBjb3B5IG9mIHRoZSBpbnRlcm5hbCBzdGF0ZS5cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9yaWdBZGRUcmFjayA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkVHJhY2s7XG4gICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkVHJhY2sgPSBmdW5jdGlvbih0cmFjaywgc3RyZWFtKSB7XG4gICAgICAgICAgdmFyIHBjID0gdGhpcztcbiAgICAgICAgICB2YXIgc2VuZGVyID0gb3JpZ0FkZFRyYWNrLmFwcGx5KHBjLCBhcmd1bWVudHMpO1xuICAgICAgICAgIGlmICghc2VuZGVyKSB7XG4gICAgICAgICAgICBzZW5kZXIgPSBzaGltU2VuZGVyV2l0aER0bWYocGMsIHRyYWNrKTtcbiAgICAgICAgICAgIHBjLl9zZW5kZXJzLnB1c2goc2VuZGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHNlbmRlcjtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgb3JpZ1JlbW92ZVRyYWNrID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVUcmFjaztcbiAgICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVUcmFjayA9IGZ1bmN0aW9uKHNlbmRlcikge1xuICAgICAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICAgICAgb3JpZ1JlbW92ZVRyYWNrLmFwcGx5KHBjLCBhcmd1bWVudHMpO1xuICAgICAgICAgIHZhciBpZHggPSBwYy5fc2VuZGVycy5pbmRleE9mKHNlbmRlcik7XG4gICAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHBjLl9zZW5kZXJzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHZhciBvcmlnQWRkU3RyZWFtID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRTdHJlYW07XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICB2YXIgcGMgPSB0aGlzO1xuICAgICAgICBwYy5fc2VuZGVycyA9IHBjLl9zZW5kZXJzIHx8IFtdO1xuICAgICAgICBvcmlnQWRkU3RyZWFtLmFwcGx5KHBjLCBbc3RyZWFtXSk7XG4gICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgICAgcGMuX3NlbmRlcnMucHVzaChzaGltU2VuZGVyV2l0aER0bWYocGMsIHRyYWNrKSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgdmFyIG9yaWdSZW1vdmVTdHJlYW0gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbTtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUucmVtb3ZlU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICAgIHBjLl9zZW5kZXJzID0gcGMuX3NlbmRlcnMgfHwgW107XG4gICAgICAgIG9yaWdSZW1vdmVTdHJlYW0uYXBwbHkocGMsIFsocGMuX3N0cmVhbXNbc3RyZWFtLmlkXSB8fCBzdHJlYW0pXSk7XG5cbiAgICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICB2YXIgc2VuZGVyID0gcGMuX3NlbmRlcnMuZmluZChmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICByZXR1cm4gcy50cmFjayA9PT0gdHJhY2s7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHNlbmRlcikge1xuICAgICAgICAgICAgcGMuX3NlbmRlcnMuc3BsaWNlKHBjLl9zZW5kZXJzLmluZGV4T2Yoc2VuZGVyKSwgMSk7IC8vIHJlbW92ZSBzZW5kZXJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiAmJlxuICAgICAgICAgICAgICAgJ2dldFNlbmRlcnMnIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgJiZcbiAgICAgICAgICAgICAgICdjcmVhdGVEVE1GU2VuZGVyJyBpbiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlICYmXG4gICAgICAgICAgICAgICB3aW5kb3cuUlRDUnRwU2VuZGVyICYmXG4gICAgICAgICAgICAgICAhKCdkdG1mJyBpbiB3aW5kb3cuUlRDUnRwU2VuZGVyLnByb3RvdHlwZSkpIHtcbiAgICAgIHZhciBvcmlnR2V0U2VuZGVycyA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U2VuZGVycztcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U2VuZGVycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGMgPSB0aGlzO1xuICAgICAgICB2YXIgc2VuZGVycyA9IG9yaWdHZXRTZW5kZXJzLmFwcGx5KHBjLCBbXSk7XG4gICAgICAgIHNlbmRlcnMuZm9yRWFjaChmdW5jdGlvbihzZW5kZXIpIHtcbiAgICAgICAgICBzZW5kZXIuX3BjID0gcGM7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2VuZGVycztcbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUnRwU2VuZGVyLnByb3RvdHlwZSwgJ2R0bWYnLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2R0bWYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhY2sua2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgICB0aGlzLl9kdG1mID0gdGhpcy5fcGMuY3JlYXRlRFRNRlNlbmRlcih0aGlzLnRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2R0bWYgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fZHRtZjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIHNoaW1Tb3VyY2VPYmplY3Q6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIHZhciBVUkwgPSB3aW5kb3cgJiYgd2luZG93LlVSTDtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50ICYmXG4gICAgICAgICEoJ3NyY09iamVjdCcgaW4gd2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICAvLyBTaGltIHRoZSBzcmNPYmplY3QgcHJvcGVydHksIG9uY2UsIHdoZW4gSFRNTE1lZGlhRWxlbWVudCBpcyBmb3VuZC5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSwgJ3NyY09iamVjdCcsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NyY09iamVjdDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldDogZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAvLyBVc2UgX3NyY09iamVjdCBhcyBhIHByaXZhdGUgcHJvcGVydHkgZm9yIHRoaXMgc2hpbVxuICAgICAgICAgICAgdGhpcy5fc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3JjKSB7XG4gICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5zcmMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXN0cmVhbSkge1xuICAgICAgICAgICAgICB0aGlzLnNyYyA9ICcnO1xuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIHJlY3JlYXRlIHRoZSBibG9iIHVybCB3aGVuIGEgdHJhY2sgaXMgYWRkZWQgb3JcbiAgICAgICAgICAgIC8vIHJlbW92ZWQuIERvaW5nIGl0IG1hbnVhbGx5IHNpbmNlIHdlIHdhbnQgdG8gYXZvaWQgYSByZWN1cnNpb24uXG4gICAgICAgICAgICBzdHJlYW0uYWRkRXZlbnRMaXN0ZW5lcignYWRkdHJhY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGYuc3JjKSB7XG4gICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxmLnNyYyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VsZi5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0cmVhbS5hZGRFdmVudExpc3RlbmVyKCdyZW1vdmV0cmFjaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoc2VsZi5zcmMpIHtcbiAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHNlbGYuc3JjKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZWxmLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoc3RyZWFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNoaW1BZGRUcmFja1JlbW92ZVRyYWNrOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICAvLyBzaGltIGFkZFRyYWNrIGFuZCByZW1vdmVUcmFjay5cbiAgICBpZiAod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFsc28gc2hpbSBwYy5nZXRMb2NhbFN0cmVhbXMgd2hlbiBhZGRUcmFjayBpcyBzaGltbWVkXG4gICAgLy8gdG8gcmV0dXJuIHRoZSBvcmlnaW5hbCBzdHJlYW1zLlxuICAgIHZhciBvcmlnR2V0TG9jYWxTdHJlYW1zID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVxuICAgICAgICAuZ2V0TG9jYWxTdHJlYW1zO1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0TG9jYWxTdHJlYW1zID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgbmF0aXZlU3RyZWFtcyA9IG9yaWdHZXRMb2NhbFN0cmVhbXMuYXBwbHkodGhpcyk7XG4gICAgICBzZWxmLl9yZXZlcnNlU3RyZWFtcyA9IHNlbGYuX3JldmVyc2VTdHJlYW1zIHx8IHt9O1xuICAgICAgcmV0dXJuIG5hdGl2ZVN0cmVhbXMubWFwKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICByZXR1cm4gc2VsZi5fcmV2ZXJzZVN0cmVhbXNbc3RyZWFtLmlkXTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgb3JpZ0FkZFN0cmVhbSA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkU3RyZWFtO1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICB2YXIgcGMgPSB0aGlzO1xuICAgICAgcGMuX3N0cmVhbXMgPSBwYy5fc3RyZWFtcyB8fCB7fTtcbiAgICAgIHBjLl9yZXZlcnNlU3RyZWFtcyA9IHBjLl9yZXZlcnNlU3RyZWFtcyB8fCB7fTtcblxuICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgdmFyIGFscmVhZHlFeGlzdHMgPSBwYy5nZXRTZW5kZXJzKCkuZmluZChmdW5jdGlvbihzKSB7XG4gICAgICAgICAgcmV0dXJuIHMudHJhY2sgPT09IHRyYWNrO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKCdUcmFjayBhbHJlYWR5IGV4aXN0cy4nLFxuICAgICAgICAgICAgICAnSW52YWxpZEFjY2Vzc0Vycm9yJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQWRkIGlkZW50aXR5IG1hcHBpbmcgZm9yIGNvbnNpc3RlbmN5IHdpdGggYWRkVHJhY2suXG4gICAgICAvLyBVbmxlc3MgdGhpcyBpcyBiZWluZyB1c2VkIHdpdGggYSBzdHJlYW0gZnJvbSBhZGRUcmFjay5cbiAgICAgIGlmICghcGMuX3JldmVyc2VTdHJlYW1zW3N0cmVhbS5pZF0pIHtcbiAgICAgICAgdmFyIG5ld1N0cmVhbSA9IG5ldyB3aW5kb3cuTWVkaWFTdHJlYW0oc3RyZWFtLmdldFRyYWNrcygpKTtcbiAgICAgICAgcGMuX3N0cmVhbXNbc3RyZWFtLmlkXSA9IG5ld1N0cmVhbTtcbiAgICAgICAgcGMuX3JldmVyc2VTdHJlYW1zW25ld1N0cmVhbS5pZF0gPSBzdHJlYW07XG4gICAgICAgIHN0cmVhbSA9IG5ld1N0cmVhbTtcbiAgICAgIH1cbiAgICAgIG9yaWdBZGRTdHJlYW0uYXBwbHkocGMsIFtzdHJlYW1dKTtcbiAgICB9O1xuXG4gICAgdmFyIG9yaWdSZW1vdmVTdHJlYW0gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbTtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgdmFyIHBjID0gdGhpcztcbiAgICAgIHBjLl9zdHJlYW1zID0gcGMuX3N0cmVhbXMgfHwge307XG4gICAgICBwYy5fcmV2ZXJzZVN0cmVhbXMgPSBwYy5fcmV2ZXJzZVN0cmVhbXMgfHwge307XG5cbiAgICAgIG9yaWdSZW1vdmVTdHJlYW0uYXBwbHkocGMsIFsocGMuX3N0cmVhbXNbc3RyZWFtLmlkXSB8fCBzdHJlYW0pXSk7XG4gICAgICBkZWxldGUgcGMuX3JldmVyc2VTdHJlYW1zWyhwYy5fc3RyZWFtc1tzdHJlYW0uaWRdID9cbiAgICAgICAgICBwYy5fc3RyZWFtc1tzdHJlYW0uaWRdLmlkIDogc3RyZWFtLmlkKV07XG4gICAgICBkZWxldGUgcGMuX3N0cmVhbXNbc3RyZWFtLmlkXTtcbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjayA9IGZ1bmN0aW9uKHRyYWNrLCBzdHJlYW0pIHtcbiAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICBpZiAocGMuc2lnbmFsaW5nU3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgICAgJ1RoZSBSVENQZWVyQ29ubmVjdGlvblxcJ3Mgc2lnbmFsaW5nU3RhdGUgaXMgXFwnY2xvc2VkXFwnLicsXG4gICAgICAgICAgJ0ludmFsaWRTdGF0ZUVycm9yJyk7XG4gICAgICB9XG4gICAgICB2YXIgc3RyZWFtcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIGlmIChzdHJlYW1zLmxlbmd0aCAhPT0gMSB8fFxuICAgICAgICAgICFzdHJlYW1zWzBdLmdldFRyYWNrcygpLmZpbmQoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgcmV0dXJuIHQgPT09IHRyYWNrO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgbm90IGZ1bGx5IGNvcnJlY3QgYnV0IGFsbCB3ZSBjYW4gbWFuYWdlIHdpdGhvdXRcbiAgICAgICAgLy8gW1thc3NvY2lhdGVkIE1lZGlhU3RyZWFtc11dIGludGVybmFsIHNsb3QuXG4gICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgICAgJ1RoZSBhZGFwdGVyLmpzIGFkZFRyYWNrIHBvbHlmaWxsIG9ubHkgc3VwcG9ydHMgYSBzaW5nbGUgJyArXG4gICAgICAgICAgJyBzdHJlYW0gd2hpY2ggaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQgdHJhY2suJyxcbiAgICAgICAgICAnTm90U3VwcG9ydGVkRXJyb3InKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFscmVhZHlFeGlzdHMgPSBwYy5nZXRTZW5kZXJzKCkuZmluZChmdW5jdGlvbihzKSB7XG4gICAgICAgIHJldHVybiBzLnRyYWNrID09PSB0cmFjaztcbiAgICAgIH0pO1xuICAgICAgaWYgKGFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignVHJhY2sgYWxyZWFkeSBleGlzdHMuJyxcbiAgICAgICAgICAgICdJbnZhbGlkQWNjZXNzRXJyb3InKTtcbiAgICAgIH1cblxuICAgICAgcGMuX3N0cmVhbXMgPSBwYy5fc3RyZWFtcyB8fCB7fTtcbiAgICAgIHBjLl9yZXZlcnNlU3RyZWFtcyA9IHBjLl9yZXZlcnNlU3RyZWFtcyB8fCB7fTtcbiAgICAgIHZhciBvbGRTdHJlYW0gPSBwYy5fc3RyZWFtc1tzdHJlYW0uaWRdO1xuICAgICAgaWYgKG9sZFN0cmVhbSkge1xuICAgICAgICAvLyB0aGlzIGlzIHVzaW5nIG9kZCBDaHJvbWUgYmVoYXZpb3VyLCB1c2Ugd2l0aCBjYXV0aW9uOlxuICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3Avd2VicnRjL2lzc3Vlcy9kZXRhaWw/aWQ9NzgxNVxuICAgICAgICAvLyBOb3RlOiB3ZSByZWx5IG9uIHRoZSBoaWdoLWxldmVsIGFkZFRyYWNrL2R0bWYgc2hpbSB0b1xuICAgICAgICAvLyBjcmVhdGUgdGhlIHNlbmRlciB3aXRoIGEgZHRtZiBzZW5kZXIuXG4gICAgICAgIG9sZFN0cmVhbS5hZGRUcmFjayh0cmFjayk7XG4gICAgICAgIHBjLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCduZWdvdGlhdGlvbm5lZWRlZCcpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBuZXdTdHJlYW0gPSBuZXcgd2luZG93Lk1lZGlhU3RyZWFtKFt0cmFja10pO1xuICAgICAgICBwYy5fc3RyZWFtc1tzdHJlYW0uaWRdID0gbmV3U3RyZWFtO1xuICAgICAgICBwYy5fcmV2ZXJzZVN0cmVhbXNbbmV3U3RyZWFtLmlkXSA9IHN0cmVhbTtcbiAgICAgICAgcGMuYWRkU3RyZWFtKG5ld1N0cmVhbSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGMuZ2V0U2VuZGVycygpLmZpbmQoZnVuY3Rpb24ocykge1xuICAgICAgICByZXR1cm4gcy50cmFjayA9PT0gdHJhY2s7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVUcmFjayA9IGZ1bmN0aW9uKHNlbmRlcikge1xuICAgICAgdmFyIHBjID0gdGhpcztcbiAgICAgIGlmIChwYy5zaWduYWxpbmdTdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgICAnVGhlIFJUQ1BlZXJDb25uZWN0aW9uXFwncyBzaWduYWxpbmdTdGF0ZSBpcyBcXCdjbG9zZWRcXCcuJyxcbiAgICAgICAgICAnSW52YWxpZFN0YXRlRXJyb3InKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIGNhbiBub3QgeWV0IGNoZWNrIGZvciBzZW5kZXIgaW5zdGFuY2VvZiBSVENSdHBTZW5kZXJcbiAgICAgIC8vIHNpbmNlIHdlIHNoaW0gUlRQU2VuZGVyLiBTbyB3ZSBjaGVjayBpZiBzZW5kZXIuX3BjIGlzIHNldC5cbiAgICAgIGlmICghc2VuZGVyLl9wYykge1xuICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKCdBcmd1bWVudCAxIG9mIFJUQ1BlZXJDb25uZWN0aW9uLnJlbW92ZVRyYWNrICcgK1xuICAgICAgICAgICAgJ2RvZXMgbm90IGltcGxlbWVudCBpbnRlcmZhY2UgUlRDUnRwU2VuZGVyLicsICdUeXBlRXJyb3InKTtcbiAgICAgIH1cbiAgICAgIHZhciBpc0xvY2FsID0gc2VuZGVyLl9wYyA9PT0gcGM7XG4gICAgICBpZiAoIWlzTG9jYWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignU2VuZGVyIHdhcyBub3QgY3JlYXRlZCBieSB0aGlzIGNvbm5lY3Rpb24uJyxcbiAgICAgICAgICAgICdJbnZhbGlkQWNjZXNzRXJyb3InKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VhcmNoIGZvciB0aGUgbmF0aXZlIHN0cmVhbSB0aGUgc2VuZGVycyB0cmFjayBiZWxvbmdzIHRvLlxuICAgICAgcGMuX3N0cmVhbXMgPSBwYy5fc3RyZWFtcyB8fCB7fTtcbiAgICAgIHZhciBzdHJlYW07XG4gICAgICBPYmplY3Qua2V5cyhwYy5fc3RyZWFtcykuZm9yRWFjaChmdW5jdGlvbihzdHJlYW1pZCkge1xuICAgICAgICB2YXIgaGFzVHJhY2sgPSBwYy5fc3RyZWFtc1tzdHJlYW1pZF0uZ2V0VHJhY2tzKCkuZmluZChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICAgIHJldHVybiBzZW5kZXIudHJhY2sgPT09IHRyYWNrO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGhhc1RyYWNrKSB7XG4gICAgICAgICAgc3RyZWFtID0gcGMuX3N0cmVhbXNbc3RyZWFtaWRdO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN0cmVhbSkge1xuICAgICAgICBpZiAoc3RyZWFtLmdldFRyYWNrcygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIC8vIGlmIHRoaXMgaXMgdGhlIGxhc3QgdHJhY2sgb2YgdGhlIHN0cmVhbSwgcmVtb3ZlIHRoZSBzdHJlYW0uIFRoaXNcbiAgICAgICAgICAvLyB0YWtlcyBjYXJlIG9mIGFueSBzaGltbWVkIF9zZW5kZXJzLlxuICAgICAgICAgIHBjLnJlbW92ZVN0cmVhbShzdHJlYW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHJlbHlpbmcgb24gdGhlIHNhbWUgb2RkIGNocm9tZSBiZWhhdmlvdXIgYXMgYWJvdmUuXG4gICAgICAgICAgc3RyZWFtLnJlbW92ZVRyYWNrKHNlbmRlci50cmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgcGMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ25lZ290aWF0aW9ubmVlZGVkJykpO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgc2hpbVBlZXJDb25uZWN0aW9uOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICB2YXIgYnJvd3NlckRldGFpbHMgPSB1dGlscy5kZXRlY3RCcm93c2VyKHdpbmRvdyk7XG5cbiAgICAvLyBUaGUgUlRDUGVlckNvbm5lY3Rpb24gb2JqZWN0LlxuICAgIGlmICghd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cykge1xuICAgICAgICAvLyBUcmFuc2xhdGUgaWNlVHJhbnNwb3J0UG9saWN5IHRvIGljZVRyYW5zcG9ydHMsXG4gICAgICAgIC8vIHNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3dlYnJ0Yy9pc3N1ZXMvZGV0YWlsP2lkPTQ4NjlcbiAgICAgICAgLy8gdGhpcyB3YXMgZml4ZWQgaW4gTTU2IGFsb25nIHdpdGggdW5wcmVmaXhpbmcgUlRDUGVlckNvbm5lY3Rpb24uXG4gICAgICAgIGxvZ2dpbmcoJ1BlZXJDb25uZWN0aW9uJyk7XG4gICAgICAgIGlmIChwY0NvbmZpZyAmJiBwY0NvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3kpIHtcbiAgICAgICAgICBwY0NvbmZpZy5pY2VUcmFuc3BvcnRzID0gcGNDb25maWcuaWNlVHJhbnNwb3J0UG9saWN5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyB3aW5kb3cud2Via2l0UlRDUGVlckNvbm5lY3Rpb24ocGNDb25maWcsIHBjQ29uc3RyYWludHMpO1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgPVxuICAgICAgICAgIHdpbmRvdy53ZWJraXRSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGU7XG4gICAgICAvLyB3cmFwIHN0YXRpYyBtZXRob2RzLiBDdXJyZW50bHkganVzdCBnZW5lcmF0ZUNlcnRpZmljYXRlLlxuICAgICAgaWYgKHdpbmRvdy53ZWJraXRSVENQZWVyQ29ubmVjdGlvbi5nZW5lcmF0ZUNlcnRpZmljYXRlKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24sICdnZW5lcmF0ZUNlcnRpZmljYXRlJywge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbWlncmF0ZSBmcm9tIG5vbi1zcGVjIFJUQ0ljZVNlcnZlci51cmwgdG8gUlRDSWNlU2VydmVyLnVybHNcbiAgICAgIHZhciBPcmlnUGVlckNvbm5lY3Rpb24gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb247XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cykge1xuICAgICAgICBpZiAocGNDb25maWcgJiYgcGNDb25maWcuaWNlU2VydmVycykge1xuICAgICAgICAgIHZhciBuZXdJY2VTZXJ2ZXJzID0gW107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwY0NvbmZpZy5pY2VTZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc2VydmVyID0gcGNDb25maWcuaWNlU2VydmVyc1tpXTtcbiAgICAgICAgICAgIGlmICghc2VydmVyLmhhc093blByb3BlcnR5KCd1cmxzJykgJiZcbiAgICAgICAgICAgICAgICBzZXJ2ZXIuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICAgIHV0aWxzLmRlcHJlY2F0ZWQoJ1JUQ0ljZVNlcnZlci51cmwnLCAnUlRDSWNlU2VydmVyLnVybHMnKTtcbiAgICAgICAgICAgICAgc2VydmVyID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzZXJ2ZXIpKTtcbiAgICAgICAgICAgICAgc2VydmVyLnVybHMgPSBzZXJ2ZXIudXJsO1xuICAgICAgICAgICAgICBuZXdJY2VTZXJ2ZXJzLnB1c2goc2VydmVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5ld0ljZVNlcnZlcnMucHVzaChwY0NvbmZpZy5pY2VTZXJ2ZXJzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcGNDb25maWcuaWNlU2VydmVycyA9IG5ld0ljZVNlcnZlcnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBPcmlnUGVlckNvbm5lY3Rpb24ocGNDb25maWcsIHBjQ29uc3RyYWludHMpO1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgPSBPcmlnUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlO1xuICAgICAgLy8gd3JhcCBzdGF0aWMgbWV0aG9kcy4gQ3VycmVudGx5IGp1c3QgZ2VuZXJhdGVDZXJ0aWZpY2F0ZS5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24sICdnZW5lcmF0ZUNlcnRpZmljYXRlJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBPcmlnUGVlckNvbm5lY3Rpb24uZ2VuZXJhdGVDZXJ0aWZpY2F0ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIG9yaWdHZXRTdGF0cyA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U3RhdHM7XG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTdGF0cyA9IGZ1bmN0aW9uKHNlbGVjdG9yLFxuICAgICAgICBzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAvLyBJZiBzZWxlY3RvciBpcyBhIGZ1bmN0aW9uIHRoZW4gd2UgYXJlIGluIHRoZSBvbGQgc3R5bGUgc3RhdHMgc28ganVzdFxuICAgICAgLy8gcGFzcyBiYWNrIHRoZSBvcmlnaW5hbCBnZXRTdGF0cyBmb3JtYXQgdG8gYXZvaWQgYnJlYWtpbmcgb2xkIHVzZXJzLlxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gb3JpZ0dldFN0YXRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdoZW4gc3BlYy1zdHlsZSBnZXRTdGF0cyBpcyBzdXBwb3J0ZWQsIHJldHVybiB0aG9zZSB3aGVuIGNhbGxlZCB3aXRoXG4gICAgICAvLyBlaXRoZXIgbm8gYXJndW1lbnRzIG9yIHRoZSBzZWxlY3RvciBhcmd1bWVudCBpcyBudWxsLlxuICAgICAgaWYgKG9yaWdHZXRTdGF0cy5sZW5ndGggPT09IDAgJiYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgICB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICByZXR1cm4gb3JpZ0dldFN0YXRzLmFwcGx5KHRoaXMsIFtdKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpeENocm9tZVN0YXRzXyA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHZhciBzdGFuZGFyZFJlcG9ydCA9IHt9O1xuICAgICAgICB2YXIgcmVwb3J0cyA9IHJlc3BvbnNlLnJlc3VsdCgpO1xuICAgICAgICByZXBvcnRzLmZvckVhY2goZnVuY3Rpb24ocmVwb3J0KSB7XG4gICAgICAgICAgdmFyIHN0YW5kYXJkU3RhdHMgPSB7XG4gICAgICAgICAgICBpZDogcmVwb3J0LmlkLFxuICAgICAgICAgICAgdGltZXN0YW1wOiByZXBvcnQudGltZXN0YW1wLFxuICAgICAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgICBsb2NhbGNhbmRpZGF0ZTogJ2xvY2FsLWNhbmRpZGF0ZScsXG4gICAgICAgICAgICAgIHJlbW90ZWNhbmRpZGF0ZTogJ3JlbW90ZS1jYW5kaWRhdGUnXG4gICAgICAgICAgICB9W3JlcG9ydC50eXBlXSB8fCByZXBvcnQudHlwZVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmVwb3J0Lm5hbWVzKCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICBzdGFuZGFyZFN0YXRzW25hbWVdID0gcmVwb3J0LnN0YXQobmFtZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3RhbmRhcmRSZXBvcnRbc3RhbmRhcmRTdGF0cy5pZF0gPSBzdGFuZGFyZFN0YXRzO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3RhbmRhcmRSZXBvcnQ7XG4gICAgICB9O1xuXG4gICAgICAvLyBzaGltIGdldFN0YXRzIHdpdGggbWFwbGlrZSBzdXBwb3J0XG4gICAgICB2YXIgbWFrZU1hcFN0YXRzID0gZnVuY3Rpb24oc3RhdHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXAoT2JqZWN0LmtleXMoc3RhdHMpLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICByZXR1cm4gW2tleSwgc3RhdHNba2V5XV07XG4gICAgICAgIH0pKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgdmFyIHN1Y2Nlc3NDYWxsYmFja1dyYXBwZXJfID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICBhcmdzWzFdKG1ha2VNYXBTdGF0cyhmaXhDaHJvbWVTdGF0c18ocmVzcG9uc2UpKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG9yaWdHZXRTdGF0cy5hcHBseSh0aGlzLCBbc3VjY2Vzc0NhbGxiYWNrV3JhcHBlcl8sXG4gICAgICAgICAgYXJndW1lbnRzWzBdXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHByb21pc2Utc3VwcG9ydFxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBvcmlnR2V0U3RhdHMuYXBwbHkoc2VsZiwgW1xuICAgICAgICAgIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXNvbHZlKG1ha2VNYXBTdGF0cyhmaXhDaHJvbWVTdGF0c18ocmVzcG9uc2UpKSk7XG4gICAgICAgICAgfSwgcmVqZWN0XSk7XG4gICAgICB9KS50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgfTtcblxuICAgIC8vIGFkZCBwcm9taXNlIHN1cHBvcnQgLS0gbmF0aXZlbHkgYXZhaWxhYmxlIGluIENocm9tZSA1MVxuICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNTEpIHtcbiAgICAgIFsnc2V0TG9jYWxEZXNjcmlwdGlvbicsICdzZXRSZW1vdGVEZXNjcmlwdGlvbicsICdhZGRJY2VDYW5kaWRhdGUnXVxuICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgdmFyIG5hdGl2ZU1ldGhvZCA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXTtcbiAgICAgICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIG5hdGl2ZU1ldGhvZC5hcHBseShzZWxmLCBbYXJnc1swXSwgcmVzb2x2ZSwgcmVqZWN0XSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBhcmdzWzFdLmFwcGx5KG51bGwsIFtdKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgICAgIGFyZ3NbMl0uYXBwbHkobnVsbCwgW2Vycl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHByb21pc2Ugc3VwcG9ydCBmb3IgY3JlYXRlT2ZmZXIgYW5kIGNyZWF0ZUFuc3dlci4gQXZhaWxhYmxlICh3aXRob3V0XG4gICAgLy8gYnVncykgc2luY2UgTTUyOiBjcmJ1Zy82MTkyODlcbiAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDUyKSB7XG4gICAgICBbJ2NyZWF0ZU9mZmVyJywgJ2NyZWF0ZUFuc3dlciddLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgIHZhciBuYXRpdmVNZXRob2QgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF07XG4gICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEgfHwgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgICAgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcpKSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgIG5hdGl2ZU1ldGhvZC5hcHBseShzZWxmLCBbcmVzb2x2ZSwgcmVqZWN0LCBvcHRzXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5hdGl2ZU1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc2hpbSBpbXBsaWNpdCBjcmVhdGlvbiBvZiBSVENTZXNzaW9uRGVzY3JpcHRpb24vUlRDSWNlQ2FuZGlkYXRlXG4gICAgWydzZXRMb2NhbERlc2NyaXB0aW9uJywgJ3NldFJlbW90ZURlc2NyaXB0aW9uJywgJ2FkZEljZUNhbmRpZGF0ZSddXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgIHZhciBuYXRpdmVNZXRob2QgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF07XG4gICAgICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhcmd1bWVudHNbMF0gPSBuZXcgKChtZXRob2QgPT09ICdhZGRJY2VDYW5kaWRhdGUnKSA/XG4gICAgICAgICAgICAgICAgd2luZG93LlJUQ0ljZUNhbmRpZGF0ZSA6XG4gICAgICAgICAgICAgICAgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbikoYXJndW1lbnRzWzBdKTtcbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVNZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgIC8vIHN1cHBvcnQgZm9yIGFkZEljZUNhbmRpZGF0ZShudWxsIG9yIHVuZGVmaW5lZClcbiAgICB2YXIgbmF0aXZlQWRkSWNlQ2FuZGlkYXRlID1cbiAgICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRJY2VDYW5kaWRhdGU7XG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRJY2VDYW5kaWRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghYXJndW1lbnRzWzBdKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHNbMV0pIHtcbiAgICAgICAgICBhcmd1bWVudHNbMV0uYXBwbHkobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5hdGl2ZUFkZEljZUNhbmRpZGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbn07XG5cblxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzLlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNoaW1NZWRpYVN0cmVhbTogY2hyb21lU2hpbS5zaGltTWVkaWFTdHJlYW0sXG4gIHNoaW1PblRyYWNrOiBjaHJvbWVTaGltLnNoaW1PblRyYWNrLFxuICBzaGltQWRkVHJhY2tSZW1vdmVUcmFjazogY2hyb21lU2hpbS5zaGltQWRkVHJhY2tSZW1vdmVUcmFjayxcbiAgc2hpbUdldFNlbmRlcnNXaXRoRHRtZjogY2hyb21lU2hpbS5zaGltR2V0U2VuZGVyc1dpdGhEdG1mLFxuICBzaGltU291cmNlT2JqZWN0OiBjaHJvbWVTaGltLnNoaW1Tb3VyY2VPYmplY3QsXG4gIHNoaW1QZWVyQ29ubmVjdGlvbjogY2hyb21lU2hpbS5zaGltUGVlckNvbm5lY3Rpb24sXG4gIHNoaW1HZXRVc2VyTWVkaWE6IHJlcXVpcmUoJy4vZ2V0dXNlcm1lZGlhJylcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2Nocm9tZS9jaHJvbWVfc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gMTcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMuanMnKTtcbnZhciBsb2dnaW5nID0gdXRpbHMubG9nO1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHdpbmRvdykge1xuICB2YXIgYnJvd3NlckRldGFpbHMgPSB1dGlscy5kZXRlY3RCcm93c2VyKHdpbmRvdyk7XG4gIHZhciBuYXZpZ2F0b3IgPSB3aW5kb3cgJiYgd2luZG93Lm5hdmlnYXRvcjtcblxuICB2YXIgY29uc3RyYWludHNUb0Nocm9tZV8gPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKHR5cGVvZiBjICE9PSAnb2JqZWN0JyB8fCBjLm1hbmRhdG9yeSB8fCBjLm9wdGlvbmFsKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgdmFyIGNjID0ge307XG4gICAgT2JqZWN0LmtleXMoYykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZXF1aXJlJyB8fCBrZXkgPT09ICdhZHZhbmNlZCcgfHwga2V5ID09PSAnbWVkaWFTb3VyY2UnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByID0gKHR5cGVvZiBjW2tleV0gPT09ICdvYmplY3QnKSA/IGNba2V5XSA6IHtpZGVhbDogY1trZXldfTtcbiAgICAgIGlmIChyLmV4YWN0ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHIuZXhhY3QgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHIubWluID0gci5tYXggPSByLmV4YWN0O1xuICAgICAgfVxuICAgICAgdmFyIG9sZG5hbWVfID0gZnVuY3Rpb24ocHJlZml4LCBuYW1lKSB7XG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICByZXR1cm4gcHJlZml4ICsgbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChuYW1lID09PSAnZGV2aWNlSWQnKSA/ICdzb3VyY2VJZCcgOiBuYW1lO1xuICAgICAgfTtcbiAgICAgIGlmIChyLmlkZWFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2Mub3B0aW9uYWwgPSBjYy5vcHRpb25hbCB8fCBbXTtcbiAgICAgICAgdmFyIG9jID0ge307XG4gICAgICAgIGlmICh0eXBlb2Ygci5pZGVhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBvY1tvbGRuYW1lXygnbWluJywga2V5KV0gPSByLmlkZWFsO1xuICAgICAgICAgIGNjLm9wdGlvbmFsLnB1c2gob2MpO1xuICAgICAgICAgIG9jID0ge307XG4gICAgICAgICAgb2Nbb2xkbmFtZV8oJ21heCcsIGtleSldID0gci5pZGVhbDtcbiAgICAgICAgICBjYy5vcHRpb25hbC5wdXNoKG9jKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvY1tvbGRuYW1lXygnJywga2V5KV0gPSByLmlkZWFsO1xuICAgICAgICAgIGNjLm9wdGlvbmFsLnB1c2gob2MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoci5leGFjdCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiByLmV4YWN0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBjYy5tYW5kYXRvcnkgPSBjYy5tYW5kYXRvcnkgfHwge307XG4gICAgICAgIGNjLm1hbmRhdG9yeVtvbGRuYW1lXygnJywga2V5KV0gPSByLmV4YWN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgWydtaW4nLCAnbWF4J10uZm9yRWFjaChmdW5jdGlvbihtaXgpIHtcbiAgICAgICAgICBpZiAoclttaXhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNjLm1hbmRhdG9yeSA9IGNjLm1hbmRhdG9yeSB8fCB7fTtcbiAgICAgICAgICAgIGNjLm1hbmRhdG9yeVtvbGRuYW1lXyhtaXgsIGtleSldID0gclttaXhdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGMuYWR2YW5jZWQpIHtcbiAgICAgIGNjLm9wdGlvbmFsID0gKGNjLm9wdGlvbmFsIHx8IFtdKS5jb25jYXQoYy5hZHZhbmNlZCk7XG4gICAgfVxuICAgIHJldHVybiBjYztcbiAgfTtcblxuICB2YXIgc2hpbUNvbnN0cmFpbnRzXyA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzLCBmdW5jKSB7XG4gICAgY29uc3RyYWludHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gICAgaWYgKGNvbnN0cmFpbnRzICYmIHR5cGVvZiBjb25zdHJhaW50cy5hdWRpbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciByZW1hcCA9IGZ1bmN0aW9uKG9iaiwgYSwgYikge1xuICAgICAgICBpZiAoYSBpbiBvYmogJiYgIShiIGluIG9iaikpIHtcbiAgICAgICAgICBvYmpbYl0gPSBvYmpbYV07XG4gICAgICAgICAgZGVsZXRlIG9ialthXTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0cmFpbnRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgICAgcmVtYXAoY29uc3RyYWludHMuYXVkaW8sICdhdXRvR2FpbkNvbnRyb2wnLCAnZ29vZ0F1dG9HYWluQ29udHJvbCcpO1xuICAgICAgcmVtYXAoY29uc3RyYWludHMuYXVkaW8sICdub2lzZVN1cHByZXNzaW9uJywgJ2dvb2dOb2lzZVN1cHByZXNzaW9uJyk7XG4gICAgICBjb25zdHJhaW50cy5hdWRpbyA9IGNvbnN0cmFpbnRzVG9DaHJvbWVfKGNvbnN0cmFpbnRzLmF1ZGlvKTtcbiAgICB9XG4gICAgaWYgKGNvbnN0cmFpbnRzICYmIHR5cGVvZiBjb25zdHJhaW50cy52aWRlbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIFNoaW0gZmFjaW5nTW9kZSBmb3IgbW9iaWxlICYgc3VyZmFjZSBwcm8uXG4gICAgICB2YXIgZmFjZSA9IGNvbnN0cmFpbnRzLnZpZGVvLmZhY2luZ01vZGU7XG4gICAgICBmYWNlID0gZmFjZSAmJiAoKHR5cGVvZiBmYWNlID09PSAnb2JqZWN0JykgPyBmYWNlIDoge2lkZWFsOiBmYWNlfSk7XG4gICAgICB2YXIgZ2V0U3VwcG9ydGVkRmFjaW5nTW9kZUxpZXMgPSBicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNjE7XG5cbiAgICAgIGlmICgoZmFjZSAmJiAoZmFjZS5leGFjdCA9PT0gJ3VzZXInIHx8IGZhY2UuZXhhY3QgPT09ICdlbnZpcm9ubWVudCcgfHxcbiAgICAgICAgICAgICAgICAgICAgZmFjZS5pZGVhbCA9PT0gJ3VzZXInIHx8IGZhY2UuaWRlYWwgPT09ICdlbnZpcm9ubWVudCcpKSAmJlxuICAgICAgICAgICEobmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRTdXBwb3J0ZWRDb25zdHJhaW50cyAmJlxuICAgICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRTdXBwb3J0ZWRDb25zdHJhaW50cygpLmZhY2luZ01vZGUgJiZcbiAgICAgICAgICAgICFnZXRTdXBwb3J0ZWRGYWNpbmdNb2RlTGllcykpIHtcbiAgICAgICAgZGVsZXRlIGNvbnN0cmFpbnRzLnZpZGVvLmZhY2luZ01vZGU7XG4gICAgICAgIHZhciBtYXRjaGVzO1xuICAgICAgICBpZiAoZmFjZS5leGFjdCA9PT0gJ2Vudmlyb25tZW50JyB8fCBmYWNlLmlkZWFsID09PSAnZW52aXJvbm1lbnQnKSB7XG4gICAgICAgICAgbWF0Y2hlcyA9IFsnYmFjaycsICdyZWFyJ107XG4gICAgICAgIH0gZWxzZSBpZiAoZmFjZS5leGFjdCA9PT0gJ3VzZXInIHx8IGZhY2UuaWRlYWwgPT09ICd1c2VyJykge1xuICAgICAgICAgIG1hdGNoZXMgPSBbJ2Zyb250J107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAvLyBMb29rIGZvciBtYXRjaGVzIGluIGxhYmVsLCBvciB1c2UgbGFzdCBjYW0gZm9yIGJhY2sgKHR5cGljYWwpLlxuICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRldmljZXMpIHtcbiAgICAgICAgICAgIGRldmljZXMgPSBkZXZpY2VzLmZpbHRlcihmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkLmtpbmQgPT09ICd2aWRlb2lucHV0JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGRldiA9IGRldmljZXMuZmluZChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBtYXRjaGVzLnNvbWUoZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobWF0Y2gpICE9PSAtMTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghZGV2ICYmIGRldmljZXMubGVuZ3RoICYmIG1hdGNoZXMuaW5kZXhPZignYmFjaycpICE9PSAtMSkge1xuICAgICAgICAgICAgICBkZXYgPSBkZXZpY2VzW2RldmljZXMubGVuZ3RoIC0gMV07IC8vIG1vcmUgbGlrZWx5IHRoZSBiYWNrIGNhbVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRldikge1xuICAgICAgICAgICAgICBjb25zdHJhaW50cy52aWRlby5kZXZpY2VJZCA9IGZhY2UuZXhhY3QgPyB7ZXhhY3Q6IGRldi5kZXZpY2VJZH0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWRlYWw6IGRldi5kZXZpY2VJZH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdHJhaW50cy52aWRlbyA9IGNvbnN0cmFpbnRzVG9DaHJvbWVfKGNvbnN0cmFpbnRzLnZpZGVvKTtcbiAgICAgICAgICAgIGxvZ2dpbmcoJ2Nocm9tZTogJyArIEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuYyhjb25zdHJhaW50cyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0cmFpbnRzLnZpZGVvID0gY29uc3RyYWludHNUb0Nocm9tZV8oY29uc3RyYWludHMudmlkZW8pO1xuICAgIH1cbiAgICBsb2dnaW5nKCdjaHJvbWU6ICcgKyBKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgIHJldHVybiBmdW5jKGNvbnN0cmFpbnRzKTtcbiAgfTtcblxuICB2YXIgc2hpbUVycm9yXyA9IGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZToge1xuICAgICAgICBQZXJtaXNzaW9uRGVuaWVkRXJyb3I6ICdOb3RBbGxvd2VkRXJyb3InLFxuICAgICAgICBJbnZhbGlkU3RhdGVFcnJvcjogJ05vdFJlYWRhYmxlRXJyb3InLFxuICAgICAgICBEZXZpY2VzTm90Rm91bmRFcnJvcjogJ05vdEZvdW5kRXJyb3InLFxuICAgICAgICBDb25zdHJhaW50Tm90U2F0aXNmaWVkRXJyb3I6ICdPdmVyY29uc3RyYWluZWRFcnJvcicsXG4gICAgICAgIFRyYWNrU3RhcnRFcnJvcjogJ05vdFJlYWRhYmxlRXJyb3InLFxuICAgICAgICBNZWRpYURldmljZUZhaWxlZER1ZVRvU2h1dGRvd246ICdOb3RSZWFkYWJsZUVycm9yJyxcbiAgICAgICAgTWVkaWFEZXZpY2VLaWxsU3dpdGNoT246ICdOb3RSZWFkYWJsZUVycm9yJ1xuICAgICAgfVtlLm5hbWVdIHx8IGUubmFtZSxcbiAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZSxcbiAgICAgIGNvbnN0cmFpbnQ6IGUuY29uc3RyYWludE5hbWUsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyAodGhpcy5tZXNzYWdlICYmICc6ICcpICsgdGhpcy5tZXNzYWdlO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGdldFVzZXJNZWRpYV8gPSBmdW5jdGlvbihjb25zdHJhaW50cywgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgc2hpbUNvbnN0cmFpbnRzXyhjb25zdHJhaW50cywgZnVuY3Rpb24oYykge1xuICAgICAgbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYShjLCBvblN1Y2Nlc3MsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgb25FcnJvcihzaGltRXJyb3JfKGUpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBnZXRVc2VyTWVkaWFfO1xuXG4gIC8vIFJldHVybnMgdGhlIHJlc3VsdCBvZiBnZXRVc2VyTWVkaWEgYXMgYSBQcm9taXNlLlxuICB2YXIgZ2V0VXNlck1lZGlhUHJvbWlzZV8gPSBmdW5jdGlvbihjb25zdHJhaW50cykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyA9IHtcbiAgICAgIGdldFVzZXJNZWRpYTogZ2V0VXNlck1lZGlhUHJvbWlzZV8sXG4gICAgICBlbnVtZXJhdGVEZXZpY2VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgICB2YXIga2luZHMgPSB7YXVkaW86ICdhdWRpb2lucHV0JywgdmlkZW86ICd2aWRlb2lucHV0J307XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5NZWRpYVN0cmVhbVRyYWNrLmdldFNvdXJjZXMoZnVuY3Rpb24oZGV2aWNlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShkZXZpY2VzLm1hcChmdW5jdGlvbihkZXZpY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtsYWJlbDogZGV2aWNlLmxhYmVsLFxuICAgICAgICAgICAgICAgIGtpbmQ6IGtpbmRzW2RldmljZS5raW5kXSxcbiAgICAgICAgICAgICAgICBkZXZpY2VJZDogZGV2aWNlLmlkLFxuICAgICAgICAgICAgICAgIGdyb3VwSWQ6ICcnfTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0U3VwcG9ydGVkQ29uc3RyYWludHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRldmljZUlkOiB0cnVlLCBlY2hvQ2FuY2VsbGF0aW9uOiB0cnVlLCBmYWNpbmdNb2RlOiB0cnVlLFxuICAgICAgICAgIGZyYW1lUmF0ZTogdHJ1ZSwgaGVpZ2h0OiB0cnVlLCB3aWR0aDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBBIHNoaW0gZm9yIGdldFVzZXJNZWRpYSBtZXRob2Qgb24gdGhlIG1lZGlhRGV2aWNlcyBvYmplY3QuXG4gIC8vIFRPRE8oS2FwdGVuSmFuc3NvbikgcmVtb3ZlIG9uY2UgaW1wbGVtZW50ZWQgaW4gQ2hyb21lIHN0YWJsZS5cbiAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oY29uc3RyYWludHMpIHtcbiAgICAgIHJldHVybiBnZXRVc2VyTWVkaWFQcm9taXNlXyhjb25zdHJhaW50cyk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBFdmVuIHRob3VnaCBDaHJvbWUgNDUgaGFzIG5hdmlnYXRvci5tZWRpYURldmljZXMgYW5kIGEgZ2V0VXNlck1lZGlhXG4gICAgLy8gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIFByb21pc2UsIGl0IGRvZXMgbm90IGFjY2VwdCBzcGVjLXN0eWxlXG4gICAgLy8gY29uc3RyYWludHMuXG4gICAgdmFyIG9yaWdHZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYS5cbiAgICAgICAgYmluZChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKTtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSA9IGZ1bmN0aW9uKGNzKSB7XG4gICAgICByZXR1cm4gc2hpbUNvbnN0cmFpbnRzXyhjcywgZnVuY3Rpb24oYykge1xuICAgICAgICByZXR1cm4gb3JpZ0dldFVzZXJNZWRpYShjKS50aGVuKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICAgIGlmIChjLmF1ZGlvICYmICFzdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGggfHxcbiAgICAgICAgICAgICAgYy52aWRlbyAmJiAhc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICAgICAgICB0cmFjay5zdG9wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oJycsICdOb3RGb3VuZEVycm9yJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdHJlYW07XG4gICAgICAgIH0sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoc2hpbUVycm9yXyhlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIER1bW15IGRldmljZWNoYW5nZSBldmVudCBtZXRob2RzLlxuICAvLyBUT0RPKEthcHRlbkphbnNzb24pIHJlbW92ZSBvbmNlIGltcGxlbWVudGVkIGluIENocm9tZSBzdGFibGUuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5hZGRFdmVudExpc3RlbmVyID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xuICAgICAgbG9nZ2luZygnRHVtbXkgbWVkaWFEZXZpY2VzLmFkZEV2ZW50TGlzdGVuZXIgY2FsbGVkLicpO1xuICAgIH07XG4gIH1cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBsb2dnaW5nKCdEdW1teSBtZWRpYURldmljZXMucmVtb3ZlRXZlbnRMaXN0ZW5lciBjYWxsZWQuJyk7XG4gICAgfTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvY2hyb21lL2dldHVzZXJtZWRpYS5qc1xuLy8gbW9kdWxlIGlkID0gMTczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xudmFyIHNoaW1SVENQZWVyQ29ubmVjdGlvbiA9IHJlcXVpcmUoJy4vcnRjcGVlcmNvbm5lY3Rpb25fc2hpbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hpbUdldFVzZXJNZWRpYTogcmVxdWlyZSgnLi9nZXR1c2VybWVkaWEnKSxcbiAgc2hpbVBlZXJDb25uZWN0aW9uOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICB2YXIgYnJvd3NlckRldGFpbHMgPSB1dGlscy5kZXRlY3RCcm93c2VyKHdpbmRvdyk7XG5cbiAgICBpZiAod2luZG93LlJUQ0ljZUdhdGhlcmVyKSB7XG4gICAgICAvLyBPUlRDIGRlZmluZXMgYW4gUlRDSWNlQ2FuZGlkYXRlIG9iamVjdCBidXQgbm8gY29uc3RydWN0b3IuXG4gICAgICAvLyBOb3QgaW1wbGVtZW50ZWQgaW4gRWRnZS5cbiAgICAgIGlmICghd2luZG93LlJUQ0ljZUNhbmRpZGF0ZSkge1xuICAgICAgICB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgIHJldHVybiBhcmdzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gT1JUQyBkb2VzIG5vdCBoYXZlIGEgc2Vzc2lvbiBkZXNjcmlwdGlvbiBvYmplY3QgYnV0XG4gICAgICAvLyBvdGhlciBicm93c2VycyAoaS5lLiBDaHJvbWUpIHRoYXQgd2lsbCBzdXBwb3J0IGJvdGggUEMgYW5kIE9SVENcbiAgICAgIC8vIGluIHRoZSBmdXR1cmUgbWlnaHQgaGF2ZSB0aGlzIGRlZmluZWQgYWxyZWFkeS5cbiAgICAgIGlmICghd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbikge1xuICAgICAgICB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgIHJldHVybiBhcmdzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gdGhpcyBhZGRzIGFuIGFkZGl0aW9uYWwgZXZlbnQgbGlzdGVuZXIgdG8gTWVkaWFTdHJhY2tUcmFjayB0aGF0IHNpZ25hbHNcbiAgICAgIC8vIHdoZW4gYSB0cmFja3MgZW5hYmxlZCBwcm9wZXJ0eSB3YXMgY2hhbmdlZC4gV29ya2Fyb3VuZCBmb3IgYSBidWcgaW5cbiAgICAgIC8vIGFkZFN0cmVhbSwgc2VlIGJlbG93LiBObyBsb25nZXIgcmVxdWlyZWQgaW4gMTUwMjUrXG4gICAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDE1MDI1KSB7XG4gICAgICAgIHZhciBvcmlnTVNURW5hYmxlZCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICAgICAgICB3aW5kb3cuTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUsICdlbmFibGVkJyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUsICdlbmFibGVkJywge1xuICAgICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIG9yaWdNU1RFbmFibGVkLnNldC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgIHZhciBldiA9IG5ldyBFdmVudCgnZW5hYmxlZCcpO1xuICAgICAgICAgICAgZXYuZW5hYmxlZCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9SVEMgZGVmaW5lcyB0aGUgRFRNRiBzZW5kZXIgYSBiaXQgZGlmZmVyZW50LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93M2Mvb3J0Yy9pc3N1ZXMvNzE0XG4gICAgaWYgKHdpbmRvdy5SVENSdHBTZW5kZXIgJiYgISgnZHRtZicgaW4gd2luZG93LlJUQ1J0cFNlbmRlci5wcm90b3R5cGUpKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1J0cFNlbmRlci5wcm90b3R5cGUsICdkdG1mJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICh0aGlzLl9kdG1mID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYWNrLmtpbmQgPT09ICdhdWRpbycpIHtcbiAgICAgICAgICAgICAgdGhpcy5fZHRtZiA9IG5ldyB3aW5kb3cuUlRDRHRtZlNlbmRlcih0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50cmFjay5raW5kID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2R0bWYgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fZHRtZjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uID1cbiAgICAgICAgc2hpbVJUQ1BlZXJDb25uZWN0aW9uKHdpbmRvdywgYnJvd3NlckRldGFpbHMudmVyc2lvbik7XG4gIH0sXG4gIHNoaW1SZXBsYWNlVHJhY2s6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIC8vIE9SVEMgaGFzIHJlcGxhY2VUcmFjayAtLSBodHRwczovL2dpdGh1Yi5jb20vdzNjL29ydGMvaXNzdWVzLzYxNFxuICAgIGlmICh3aW5kb3cuUlRDUnRwU2VuZGVyICYmXG4gICAgICAgICEoJ3JlcGxhY2VUcmFjaycgaW4gd2luZG93LlJUQ1J0cFNlbmRlci5wcm90b3R5cGUpKSB7XG4gICAgICB3aW5kb3cuUlRDUnRwU2VuZGVyLnByb3RvdHlwZS5yZXBsYWNlVHJhY2sgPVxuICAgICAgICAgIHdpbmRvdy5SVENSdHBTZW5kZXIucHJvdG90eXBlLnNldFRyYWNrO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvZWRnZS9lZGdlX3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih3aW5kb3cpIHtcbiAgdmFyIG5hdmlnYXRvciA9IHdpbmRvdyAmJiB3aW5kb3cubmF2aWdhdG9yO1xuXG4gIHZhciBzaGltRXJyb3JfID0gZnVuY3Rpb24oZSkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB7UGVybWlzc2lvbkRlbmllZEVycm9yOiAnTm90QWxsb3dlZEVycm9yJ31bZS5uYW1lXSB8fCBlLm5hbWUsXG4gICAgICBtZXNzYWdlOiBlLm1lc3NhZ2UsXG4gICAgICBjb25zdHJhaW50OiBlLmNvbnN0cmFpbnQsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBnZXRVc2VyTWVkaWEgZXJyb3Igc2hpbS5cbiAgdmFyIG9yaWdHZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYS5cbiAgICAgIGJpbmQobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyk7XG4gIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBvcmlnR2V0VXNlck1lZGlhKGMpLmNhdGNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChzaGltRXJyb3JfKGUpKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvZ2V0dXNlcm1lZGlhLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTRFBVdGlscyA9IHJlcXVpcmUoJ3NkcCcpO1xuXG4vLyBzb3J0IHRyYWNrcyBzdWNoIHRoYXQgdGhleSBmb2xsb3cgYW4gYS12LWEtdi4uLlxuLy8gcGF0dGVybi5cbmZ1bmN0aW9uIHNvcnRUcmFja3ModHJhY2tzKSB7XG4gIHZhciBhdWRpb1RyYWNrcyA9IHRyYWNrcy5maWx0ZXIoZnVuY3Rpb24odHJhY2spIHtcbiAgICByZXR1cm4gdHJhY2sua2luZCA9PT0gJ2F1ZGlvJztcbiAgfSk7XG4gIHZhciB2aWRlb1RyYWNrcyA9IHRyYWNrcy5maWx0ZXIoZnVuY3Rpb24odHJhY2spIHtcbiAgICByZXR1cm4gdHJhY2sua2luZCA9PT0gJ3ZpZGVvJztcbiAgfSk7XG4gIHRyYWNrcyA9IFtdO1xuICB3aGlsZSAoYXVkaW9UcmFja3MubGVuZ3RoIHx8IHZpZGVvVHJhY2tzLmxlbmd0aCkge1xuICAgIGlmIChhdWRpb1RyYWNrcy5sZW5ndGgpIHtcbiAgICAgIHRyYWNrcy5wdXNoKGF1ZGlvVHJhY2tzLnNoaWZ0KCkpO1xuICAgIH1cbiAgICBpZiAodmlkZW9UcmFja3MubGVuZ3RoKSB7XG4gICAgICB0cmFja3MucHVzaCh2aWRlb1RyYWNrcy5zaGlmdCgpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRyYWNrcztcbn1cblxuLy8gRWRnZSBkb2VzIG5vdCBsaWtlXG4vLyAxKSBzdHVuOlxuLy8gMikgdHVybjogdGhhdCBkb2VzIG5vdCBoYXZlIGFsbCBvZiB0dXJuOmhvc3Q6cG9ydD90cmFuc3BvcnQ9dWRwXG4vLyAzKSB0dXJuOiB3aXRoIGlwdjYgYWRkcmVzc2VzXG4vLyA0KSB0dXJuOiBvY2N1cnJpbmcgbXVsaXBsZSB0aW1lc1xuZnVuY3Rpb24gZmlsdGVySWNlU2VydmVycyhpY2VTZXJ2ZXJzLCBlZGdlVmVyc2lvbikge1xuICB2YXIgaGFzVHVybiA9IGZhbHNlO1xuICBpY2VTZXJ2ZXJzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpY2VTZXJ2ZXJzKSk7XG4gIHJldHVybiBpY2VTZXJ2ZXJzLmZpbHRlcihmdW5jdGlvbihzZXJ2ZXIpIHtcbiAgICBpZiAoc2VydmVyICYmIChzZXJ2ZXIudXJscyB8fCBzZXJ2ZXIudXJsKSkge1xuICAgICAgdmFyIHVybHMgPSBzZXJ2ZXIudXJscyB8fCBzZXJ2ZXIudXJsO1xuICAgICAgaWYgKHNlcnZlci51cmwgJiYgIXNlcnZlci51cmxzKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignUlRDSWNlU2VydmVyLnVybCBpcyBkZXByZWNhdGVkISBVc2UgdXJscyBpbnN0ZWFkLicpO1xuICAgICAgfVxuICAgICAgdmFyIGlzU3RyaW5nID0gdHlwZW9mIHVybHMgPT09ICdzdHJpbmcnO1xuICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgIHVybHMgPSBbdXJsc107XG4gICAgICB9XG4gICAgICB1cmxzID0gdXJscy5maWx0ZXIoZnVuY3Rpb24odXJsKSB7XG4gICAgICAgIHZhciB2YWxpZFR1cm4gPSB1cmwuaW5kZXhPZigndHVybjonKSA9PT0gMCAmJlxuICAgICAgICAgICAgdXJsLmluZGV4T2YoJ3RyYW5zcG9ydD11ZHAnKSAhPT0gLTEgJiZcbiAgICAgICAgICAgIHVybC5pbmRleE9mKCd0dXJuOlsnKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICFoYXNUdXJuO1xuXG4gICAgICAgIGlmICh2YWxpZFR1cm4pIHtcbiAgICAgICAgICBoYXNUdXJuID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXJsLmluZGV4T2YoJ3N0dW46JykgPT09IDAgJiYgZWRnZVZlcnNpb24gPj0gMTQzOTM7XG4gICAgICB9KTtcblxuICAgICAgZGVsZXRlIHNlcnZlci51cmw7XG4gICAgICBzZXJ2ZXIudXJscyA9IGlzU3RyaW5nID8gdXJsc1swXSA6IHVybHM7XG4gICAgICByZXR1cm4gISF1cmxzLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuLy8gRGV0ZXJtaW5lcyB0aGUgaW50ZXJzZWN0aW9uIG9mIGxvY2FsIGFuZCByZW1vdGUgY2FwYWJpbGl0aWVzLlxuZnVuY3Rpb24gZ2V0Q29tbW9uQ2FwYWJpbGl0aWVzKGxvY2FsQ2FwYWJpbGl0aWVzLCByZW1vdGVDYXBhYmlsaXRpZXMpIHtcbiAgdmFyIGNvbW1vbkNhcGFiaWxpdGllcyA9IHtcbiAgICBjb2RlY3M6IFtdLFxuICAgIGhlYWRlckV4dGVuc2lvbnM6IFtdLFxuICAgIGZlY01lY2hhbmlzbXM6IFtdXG4gIH07XG5cbiAgdmFyIGZpbmRDb2RlY0J5UGF5bG9hZFR5cGUgPSBmdW5jdGlvbihwdCwgY29kZWNzKSB7XG4gICAgcHQgPSBwYXJzZUludChwdCwgMTApO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29kZWNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY29kZWNzW2ldLnBheWxvYWRUeXBlID09PSBwdCB8fFxuICAgICAgICAgIGNvZGVjc1tpXS5wcmVmZXJyZWRQYXlsb2FkVHlwZSA9PT0gcHQpIHtcbiAgICAgICAgcmV0dXJuIGNvZGVjc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIHJ0eENhcGFiaWxpdHlNYXRjaGVzID0gZnVuY3Rpb24obFJ0eCwgclJ0eCwgbENvZGVjcywgckNvZGVjcykge1xuICAgIHZhciBsQ29kZWMgPSBmaW5kQ29kZWNCeVBheWxvYWRUeXBlKGxSdHgucGFyYW1ldGVycy5hcHQsIGxDb2RlY3MpO1xuICAgIHZhciByQ29kZWMgPSBmaW5kQ29kZWNCeVBheWxvYWRUeXBlKHJSdHgucGFyYW1ldGVycy5hcHQsIHJDb2RlY3MpO1xuICAgIHJldHVybiBsQ29kZWMgJiYgckNvZGVjICYmXG4gICAgICAgIGxDb2RlYy5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHJDb2RlYy5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZvckVhY2goZnVuY3Rpb24obENvZGVjKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdGVDYXBhYmlsaXRpZXMuY29kZWNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgckNvZGVjID0gcmVtb3RlQ2FwYWJpbGl0aWVzLmNvZGVjc1tpXTtcbiAgICAgIGlmIChsQ29kZWMubmFtZS50b0xvd2VyQ2FzZSgpID09PSByQ29kZWMubmFtZS50b0xvd2VyQ2FzZSgpICYmXG4gICAgICAgICAgbENvZGVjLmNsb2NrUmF0ZSA9PT0gckNvZGVjLmNsb2NrUmF0ZSkge1xuICAgICAgICBpZiAobENvZGVjLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3J0eCcgJiZcbiAgICAgICAgICAgIGxDb2RlYy5wYXJhbWV0ZXJzICYmIHJDb2RlYy5wYXJhbWV0ZXJzLmFwdCkge1xuICAgICAgICAgIC8vIGZvciBSVFggd2UgbmVlZCB0byBmaW5kIHRoZSBsb2NhbCBydHggdGhhdCBoYXMgYSBhcHRcbiAgICAgICAgICAvLyB3aGljaCBwb2ludHMgdG8gdGhlIHNhbWUgbG9jYWwgY29kZWMgYXMgdGhlIHJlbW90ZSBvbmUuXG4gICAgICAgICAgaWYgKCFydHhDYXBhYmlsaXR5TWF0Y2hlcyhsQ29kZWMsIHJDb2RlYyxcbiAgICAgICAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLCByZW1vdGVDYXBhYmlsaXRpZXMuY29kZWNzKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJDb2RlYyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkockNvZGVjKSk7IC8vIGRlZXBjb3B5XG4gICAgICAgIC8vIG51bWJlciBvZiBjaGFubmVscyBpcyB0aGUgaGlnaGVzdCBjb21tb24gbnVtYmVyIG9mIGNoYW5uZWxzXG4gICAgICAgIHJDb2RlYy5udW1DaGFubmVscyA9IE1hdGgubWluKGxDb2RlYy5udW1DaGFubmVscyxcbiAgICAgICAgICAgIHJDb2RlYy5udW1DaGFubmVscyk7XG4gICAgICAgIC8vIHB1c2ggckNvZGVjIHNvIHdlIHJlcGx5IHdpdGggb2ZmZXJlciBwYXlsb2FkIHR5cGVcbiAgICAgICAgY29tbW9uQ2FwYWJpbGl0aWVzLmNvZGVjcy5wdXNoKHJDb2RlYyk7XG5cbiAgICAgICAgLy8gZGV0ZXJtaW5lIGNvbW1vbiBmZWVkYmFjayBtZWNoYW5pc21zXG4gICAgICAgIHJDb2RlYy5ydGNwRmVlZGJhY2sgPSByQ29kZWMucnRjcEZlZWRiYWNrLmZpbHRlcihmdW5jdGlvbihmYikge1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbENvZGVjLnJ0Y3BGZWVkYmFjay5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGxDb2RlYy5ydGNwRmVlZGJhY2tbal0udHlwZSA9PT0gZmIudHlwZSAmJlxuICAgICAgICAgICAgICAgIGxDb2RlYy5ydGNwRmVlZGJhY2tbal0ucGFyYW1ldGVyID09PSBmYi5wYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZJWE1FOiBhbHNvIG5lZWQgdG8gZGV0ZXJtaW5lIC5wYXJhbWV0ZXJzXG4gICAgICAgIC8vICBzZWUgaHR0cHM6Ly9naXRodWIuY29tL29wZW5wZWVyL29ydGMvaXNzdWVzLzU2OVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGxvY2FsQ2FwYWJpbGl0aWVzLmhlYWRlckV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbihsSGVhZGVyRXh0ZW5zaW9uKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdGVDYXBhYmlsaXRpZXMuaGVhZGVyRXh0ZW5zaW9ucy5sZW5ndGg7XG4gICAgICAgICBpKyspIHtcbiAgICAgIHZhciBySGVhZGVyRXh0ZW5zaW9uID0gcmVtb3RlQ2FwYWJpbGl0aWVzLmhlYWRlckV4dGVuc2lvbnNbaV07XG4gICAgICBpZiAobEhlYWRlckV4dGVuc2lvbi51cmkgPT09IHJIZWFkZXJFeHRlbnNpb24udXJpKSB7XG4gICAgICAgIGNvbW1vbkNhcGFiaWxpdGllcy5oZWFkZXJFeHRlbnNpb25zLnB1c2gockhlYWRlckV4dGVuc2lvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gRklYTUU6IGZlY01lY2hhbmlzbXNcbiAgcmV0dXJuIGNvbW1vbkNhcGFiaWxpdGllcztcbn1cblxuLy8gaXMgYWN0aW9uPXNldExvY2FsRGVzY3JpcHRpb24gd2l0aCB0eXBlIGFsbG93ZWQgaW4gc2lnbmFsaW5nU3RhdGVcbmZ1bmN0aW9uIGlzQWN0aW9uQWxsb3dlZEluU2lnbmFsaW5nU3RhdGUoYWN0aW9uLCB0eXBlLCBzaWduYWxpbmdTdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG9mZmVyOiB7XG4gICAgICBzZXRMb2NhbERlc2NyaXB0aW9uOiBbJ3N0YWJsZScsICdoYXZlLWxvY2FsLW9mZmVyJ10sXG4gICAgICBzZXRSZW1vdGVEZXNjcmlwdGlvbjogWydzdGFibGUnLCAnaGF2ZS1yZW1vdGUtb2ZmZXInXVxuICAgIH0sXG4gICAgYW5zd2VyOiB7XG4gICAgICBzZXRMb2NhbERlc2NyaXB0aW9uOiBbJ2hhdmUtcmVtb3RlLW9mZmVyJywgJ2hhdmUtbG9jYWwtcHJhbnN3ZXInXSxcbiAgICAgIHNldFJlbW90ZURlc2NyaXB0aW9uOiBbJ2hhdmUtbG9jYWwtb2ZmZXInLCAnaGF2ZS1yZW1vdGUtcHJhbnN3ZXInXVxuICAgIH1cbiAgfVt0eXBlXVthY3Rpb25dLmluZGV4T2Yoc2lnbmFsaW5nU3RhdGUpICE9PSAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih3aW5kb3csIGVkZ2VWZXJzaW9uKSB7XG4gIHZhciBSVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBfZXZlbnRUYXJnZXQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgWydhZGRFdmVudExpc3RlbmVyJywgJ3JlbW92ZUV2ZW50TGlzdGVuZXInLCAnZGlzcGF0Y2hFdmVudCddXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgIHNlbGZbbWV0aG9kXSA9IF9ldmVudFRhcmdldFttZXRob2RdLmJpbmQoX2V2ZW50VGFyZ2V0KTtcbiAgICAgICAgfSk7XG5cbiAgICB0aGlzLm5lZWROZWdvdGlhdGlvbiA9IGZhbHNlO1xuXG4gICAgdGhpcy5vbmljZWNhbmRpZGF0ZSA9IG51bGw7XG4gICAgdGhpcy5vbmFkZHN0cmVhbSA9IG51bGw7XG4gICAgdGhpcy5vbnRyYWNrID0gbnVsbDtcbiAgICB0aGlzLm9ucmVtb3Zlc3RyZWFtID0gbnVsbDtcbiAgICB0aGlzLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgIHRoaXMub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgIHRoaXMub25pY2VnYXRoZXJpbmdzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgdGhpcy5vbm5lZ290aWF0aW9ubmVlZGVkID0gbnVsbDtcbiAgICB0aGlzLm9uZGF0YWNoYW5uZWwgPSBudWxsO1xuICAgIHRoaXMuY2FuVHJpY2tsZUljZUNhbmRpZGF0ZXMgPSBudWxsO1xuXG4gICAgdGhpcy5sb2NhbFN0cmVhbXMgPSBbXTtcbiAgICB0aGlzLnJlbW90ZVN0cmVhbXMgPSBbXTtcbiAgICB0aGlzLmdldExvY2FsU3RyZWFtcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNlbGYubG9jYWxTdHJlYW1zO1xuICAgIH07XG4gICAgdGhpcy5nZXRSZW1vdGVTdHJlYW1zID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc2VsZi5yZW1vdGVTdHJlYW1zO1xuICAgIH07XG5cbiAgICB0aGlzLmxvY2FsRGVzY3JpcHRpb24gPSBuZXcgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICB0eXBlOiAnJyxcbiAgICAgIHNkcDogJydcbiAgICB9KTtcbiAgICB0aGlzLnJlbW90ZURlc2NyaXB0aW9uID0gbmV3IHdpbmRvdy5SVENTZXNzaW9uRGVzY3JpcHRpb24oe1xuICAgICAgdHlwZTogJycsXG4gICAgICBzZHA6ICcnXG4gICAgfSk7XG4gICAgdGhpcy5zaWduYWxpbmdTdGF0ZSA9ICdzdGFibGUnO1xuICAgIHRoaXMuaWNlQ29ubmVjdGlvblN0YXRlID0gJ25ldyc7XG4gICAgdGhpcy5pY2VHYXRoZXJpbmdTdGF0ZSA9ICduZXcnO1xuXG4gICAgdGhpcy5pY2VPcHRpb25zID0ge1xuICAgICAgZ2F0aGVyUG9saWN5OiAnYWxsJyxcbiAgICAgIGljZVNlcnZlcnM6IFtdXG4gICAgfTtcbiAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3kpIHtcbiAgICAgIHN3aXRjaCAoY29uZmlnLmljZVRyYW5zcG9ydFBvbGljeSkge1xuICAgICAgICBjYXNlICdhbGwnOlxuICAgICAgICBjYXNlICdyZWxheSc6XG4gICAgICAgICAgdGhpcy5pY2VPcHRpb25zLmdhdGhlclBvbGljeSA9IGNvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3k7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gZG9uJ3Qgc2V0IGljZVRyYW5zcG9ydFBvbGljeS5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51c2luZ0J1bmRsZSA9IGNvbmZpZyAmJiBjb25maWcuYnVuZGxlUG9saWN5ID09PSAnbWF4LWJ1bmRsZSc7XG5cbiAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5pY2VTZXJ2ZXJzKSB7XG4gICAgICB0aGlzLmljZU9wdGlvbnMuaWNlU2VydmVycyA9IGZpbHRlckljZVNlcnZlcnMoY29uZmlnLmljZVNlcnZlcnMsXG4gICAgICAgICAgZWRnZVZlcnNpb24pO1xuICAgIH1cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWcgfHwge307XG5cbiAgICAvLyBwZXItdHJhY2sgaWNlR2F0aGVycywgaWNlVHJhbnNwb3J0cywgZHRsc1RyYW5zcG9ydHMsIHJ0cFNlbmRlcnMsIC4uLlxuICAgIC8vIGV2ZXJ5dGhpbmcgdGhhdCBpcyBuZWVkZWQgdG8gZGVzY3JpYmUgYSBTRFAgbS1saW5lLlxuICAgIHRoaXMudHJhbnNjZWl2ZXJzID0gW107XG5cbiAgICAvLyBzaW5jZSB0aGUgaWNlR2F0aGVyZXIgaXMgY3VycmVudGx5IGNyZWF0ZWQgaW4gY3JlYXRlT2ZmZXIgYnV0IHdlXG4gICAgLy8gbXVzdCBub3QgZW1pdCBjYW5kaWRhdGVzIHVudGlsIGFmdGVyIHNldExvY2FsRGVzY3JpcHRpb24gd2UgYnVmZmVyXG4gICAgLy8gdGhlbSBpbiB0aGlzIGFycmF5LlxuICAgIHRoaXMuX2xvY2FsSWNlQ2FuZGlkYXRlc0J1ZmZlciA9IFtdO1xuXG4gICAgdGhpcy5fc2RwU2Vzc2lvbklkID0gU0RQVXRpbHMuZ2VuZXJhdGVTZXNzaW9uSWQoKTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2VtaXRHYXRoZXJpbmdTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UnKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLm9uaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25pY2VnYXRoZXJpbmdzdGF0ZWNoYW5nZShldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fZW1pdEJ1ZmZlcmVkQ2FuZGlkYXRlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgc2VjdGlvbnMgPSBTRFBVdGlscy5zcGxpdFNlY3Rpb25zKHNlbGYubG9jYWxEZXNjcmlwdGlvbi5zZHApO1xuICAgIC8vIEZJWE1FOiBuZWVkIHRvIGFwcGx5IGljZSBjYW5kaWRhdGVzIGluIGEgd2F5IHdoaWNoIGlzIGFzeW5jIGJ1dFxuICAgIC8vIGluLW9yZGVyXG4gICAgdGhpcy5fbG9jYWxJY2VDYW5kaWRhdGVzQnVmZmVyLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciBlbmQgPSAhZXZlbnQuY2FuZGlkYXRlIHx8IE9iamVjdC5rZXlzKGV2ZW50LmNhbmRpZGF0ZSkubGVuZ3RoID09PSAwO1xuICAgICAgaWYgKGVuZCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHNlY3Rpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKHNlY3Rpb25zW2pdLmluZGV4T2YoJ1xcclxcbmE9ZW5kLW9mLWNhbmRpZGF0ZXNcXHJcXG4nKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHNlY3Rpb25zW2pdICs9ICdhPWVuZC1vZi1jYW5kaWRhdGVzXFxyXFxuJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlY3Rpb25zW2V2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4ICsgMV0gKz1cbiAgICAgICAgICAgICdhPScgKyBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlICsgJ1xcclxcbic7XG4gICAgICB9XG4gICAgICBzZWxmLmxvY2FsRGVzY3JpcHRpb24uc2RwID0gc2VjdGlvbnMuam9pbignJyk7XG4gICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgaWYgKHNlbGYub25pY2VjYW5kaWRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgc2VsZi5vbmljZWNhbmRpZGF0ZShldmVudCk7XG4gICAgICB9XG4gICAgICBpZiAoIWV2ZW50LmNhbmRpZGF0ZSAmJiBzZWxmLmljZUdhdGhlcmluZ1N0YXRlICE9PSAnY29tcGxldGUnKSB7XG4gICAgICAgIHZhciBjb21wbGV0ZSA9IHNlbGYudHJhbnNjZWl2ZXJzLmV2ZXJ5KGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyICYmXG4gICAgICAgICAgICAgIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyLnN0YXRlID09PSAnY29tcGxldGVkJztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb21wbGV0ZSAmJiBzZWxmLmljZUdhdGhlcmluZ1N0YXRlQ2hhbmdlICE9PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSA9ICdjb21wbGV0ZSc7XG4gICAgICAgICAgc2VsZi5fZW1pdEdhdGhlcmluZ1N0YXRlQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl9sb2NhbEljZUNhbmRpZGF0ZXNCdWZmZXIgPSBbXTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0Q29uZmlndXJhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH07XG5cbiAgLy8gaW50ZXJuYWwgaGVscGVyIHRvIGNyZWF0ZSBhIHRyYW5zY2VpdmVyIG9iamVjdC5cbiAgLy8gKHdoaWggaXMgbm90IHlldCB0aGUgc2FtZSBhcyB0aGUgV2ViUlRDIDEuMCB0cmFuc2NlaXZlcilcbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9jcmVhdGVUcmFuc2NlaXZlciA9IGZ1bmN0aW9uKGtpbmQpIHtcbiAgICB2YXIgaGFzQnVuZGxlVHJhbnNwb3J0ID0gdGhpcy50cmFuc2NlaXZlcnMubGVuZ3RoID4gMDtcbiAgICB2YXIgdHJhbnNjZWl2ZXIgPSB7XG4gICAgICB0cmFjazogbnVsbCxcbiAgICAgIGljZUdhdGhlcmVyOiBudWxsLFxuICAgICAgaWNlVHJhbnNwb3J0OiBudWxsLFxuICAgICAgZHRsc1RyYW5zcG9ydDogbnVsbCxcbiAgICAgIGxvY2FsQ2FwYWJpbGl0aWVzOiBudWxsLFxuICAgICAgcmVtb3RlQ2FwYWJpbGl0aWVzOiBudWxsLFxuICAgICAgcnRwU2VuZGVyOiBudWxsLFxuICAgICAgcnRwUmVjZWl2ZXI6IG51bGwsXG4gICAgICBraW5kOiBraW5kLFxuICAgICAgbWlkOiBudWxsLFxuICAgICAgc2VuZEVuY29kaW5nUGFyYW1ldGVyczogbnVsbCxcbiAgICAgIHJlY3ZFbmNvZGluZ1BhcmFtZXRlcnM6IG51bGwsXG4gICAgICBzdHJlYW06IG51bGwsXG4gICAgICB3YW50UmVjZWl2ZTogdHJ1ZVxuICAgIH07XG4gICAgaWYgKHRoaXMudXNpbmdCdW5kbGUgJiYgaGFzQnVuZGxlVHJhbnNwb3J0KSB7XG4gICAgICB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQgPSB0aGlzLnRyYW5zY2VpdmVyc1swXS5pY2VUcmFuc3BvcnQ7XG4gICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0ID0gdGhpcy50cmFuc2NlaXZlcnNbMF0uZHRsc1RyYW5zcG9ydDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRyYW5zcG9ydHMgPSB0aGlzLl9jcmVhdGVJY2VBbmREdGxzVHJhbnNwb3J0cygpO1xuICAgICAgdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0ID0gdHJhbnNwb3J0cy5pY2VUcmFuc3BvcnQ7XG4gICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0ID0gdHJhbnNwb3J0cy5kdGxzVHJhbnNwb3J0O1xuICAgIH1cbiAgICB0aGlzLnRyYW5zY2VpdmVycy5wdXNoKHRyYW5zY2VpdmVyKTtcbiAgICByZXR1cm4gdHJhbnNjZWl2ZXI7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFRyYWNrID0gZnVuY3Rpb24odHJhY2ssIHN0cmVhbSkge1xuICAgIHZhciB0cmFuc2NlaXZlcjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHJhbnNjZWl2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMudHJhbnNjZWl2ZXJzW2ldLnRyYWNrICYmXG4gICAgICAgICAgdGhpcy50cmFuc2NlaXZlcnNbaV0ua2luZCA9PT0gdHJhY2sua2luZCkge1xuICAgICAgICB0cmFuc2NlaXZlciA9IHRoaXMudHJhbnNjZWl2ZXJzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRyYW5zY2VpdmVyKSB7XG4gICAgICB0cmFuc2NlaXZlciA9IHRoaXMuX2NyZWF0ZVRyYW5zY2VpdmVyKHRyYWNrLmtpbmQpO1xuICAgIH1cblxuICAgIHRyYW5zY2VpdmVyLnRyYWNrID0gdHJhY2s7XG4gICAgdHJhbnNjZWl2ZXIuc3RyZWFtID0gc3RyZWFtO1xuICAgIHRyYW5zY2VpdmVyLnJ0cFNlbmRlciA9IG5ldyB3aW5kb3cuUlRDUnRwU2VuZGVyKHRyYWNrLFxuICAgICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0KTtcblxuICAgIHRoaXMuX21heWJlRmlyZU5lZ290aWF0aW9uTmVlZGVkKCk7XG4gICAgcmV0dXJuIHRyYW5zY2VpdmVyLnJ0cFNlbmRlcjtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmIChlZGdlVmVyc2lvbiA+PSAxNTAyNSkge1xuICAgICAgdGhpcy5sb2NhbFN0cmVhbXMucHVzaChzdHJlYW0pO1xuICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgc2VsZi5hZGRUcmFjayh0cmFjaywgc3RyZWFtKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDbG9uZSBpcyBuZWNlc3NhcnkgZm9yIGxvY2FsIGRlbW9zIG1vc3RseSwgYXR0YWNoaW5nIGRpcmVjdGx5XG4gICAgICAvLyB0byB0d28gZGlmZmVyZW50IHNlbmRlcnMgZG9lcyBub3Qgd29yayAoYnVpbGQgMTA1NDcpLlxuICAgICAgLy8gRml4ZWQgaW4gMTUwMjUgKG9yIGVhcmxpZXIpXG4gICAgICB2YXIgY2xvbmVkU3RyZWFtID0gc3RyZWFtLmNsb25lKCk7XG4gICAgICBzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaywgaWR4KSB7XG4gICAgICAgIHZhciBjbG9uZWRUcmFjayA9IGNsb25lZFN0cmVhbS5nZXRUcmFja3MoKVtpZHhdO1xuICAgICAgICB0cmFjay5hZGRFdmVudExpc3RlbmVyKCdlbmFibGVkJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICBjbG9uZWRUcmFjay5lbmFibGVkID0gZXZlbnQuZW5hYmxlZDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGNsb25lZFN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgIHNlbGYuYWRkVHJhY2sodHJhY2ssIGNsb25lZFN0cmVhbSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9jYWxTdHJlYW1zLnB1c2goY2xvbmVkU3RyZWFtKTtcbiAgICB9XG4gICAgdGhpcy5fbWF5YmVGaXJlTmVnb3RpYXRpb25OZWVkZWQoKTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUucmVtb3ZlU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgdmFyIGlkeCA9IHRoaXMubG9jYWxTdHJlYW1zLmluZGV4T2Yoc3RyZWFtKTtcbiAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgIHRoaXMubG9jYWxTdHJlYW1zLnNwbGljZShpZHgsIDEpO1xuICAgICAgdGhpcy5fbWF5YmVGaXJlTmVnb3RpYXRpb25OZWVkZWQoKTtcbiAgICB9XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFNlbmRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2NlaXZlcnMuZmlsdGVyKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICByZXR1cm4gISF0cmFuc2NlaXZlci5ydHBTZW5kZXI7XG4gICAgfSlcbiAgICAubWFwKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICByZXR1cm4gdHJhbnNjZWl2ZXIucnRwU2VuZGVyO1xuICAgIH0pO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRSZWNlaXZlcnMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2NlaXZlcnMuZmlsdGVyKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICByZXR1cm4gISF0cmFuc2NlaXZlci5ydHBSZWNlaXZlcjtcbiAgICB9KVxuICAgIC5tYXAoZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgIHJldHVybiB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcjtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDcmVhdGUgSUNFIGdhdGhlcmVyIGFuZCBob29rIGl0IHVwLlxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2NyZWF0ZUljZUdhdGhlcmVyID0gZnVuY3Rpb24obWlkLFxuICAgICAgc2RwTUxpbmVJbmRleCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgaWNlR2F0aGVyZXIgPSBuZXcgd2luZG93LlJUQ0ljZUdhdGhlcmVyKHNlbGYuaWNlT3B0aW9ucyk7XG4gICAgaWNlR2F0aGVyZXIub25sb2NhbGNhbmRpZGF0ZSA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdpY2VjYW5kaWRhdGUnKTtcbiAgICAgIGV2ZW50LmNhbmRpZGF0ZSA9IHtzZHBNaWQ6IG1pZCwgc2RwTUxpbmVJbmRleDogc2RwTUxpbmVJbmRleH07XG5cbiAgICAgIHZhciBjYW5kID0gZXZ0LmNhbmRpZGF0ZTtcbiAgICAgIHZhciBlbmQgPSAhY2FuZCB8fCBPYmplY3Qua2V5cyhjYW5kKS5sZW5ndGggPT09IDA7XG4gICAgICAvLyBFZGdlIGVtaXRzIGFuIGVtcHR5IG9iamVjdCBmb3IgUlRDSWNlQ2FuZGlkYXRlQ29tcGxldGXigKVcbiAgICAgIGlmIChlbmQpIHtcbiAgICAgICAgLy8gcG9seWZpbGwgc2luY2UgUlRDSWNlR2F0aGVyZXIuc3RhdGUgaXMgbm90IGltcGxlbWVudGVkIGluXG4gICAgICAgIC8vIEVkZ2UgMTA1NDcgeWV0LlxuICAgICAgICBpZiAoaWNlR2F0aGVyZXIuc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGljZUdhdGhlcmVyLnN0YXRlID0gJ2NvbXBsZXRlZCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJUQ0ljZUNhbmRpZGF0ZSBkb2Vzbid0IGhhdmUgYSBjb21wb25lbnQsIG5lZWRzIHRvIGJlIGFkZGVkXG4gICAgICAgIGNhbmQuY29tcG9uZW50ID0gMTtcbiAgICAgICAgZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSA9IFNEUFV0aWxzLndyaXRlQ2FuZGlkYXRlKGNhbmQpO1xuICAgICAgfVxuXG4gICAgICAvLyB1cGRhdGUgbG9jYWwgZGVzY3JpcHRpb24uXG4gICAgICB2YXIgc2VjdGlvbnMgPSBTRFBVdGlscy5zcGxpdFNlY3Rpb25zKHNlbGYubG9jYWxEZXNjcmlwdGlvbi5zZHApO1xuICAgICAgaWYgKCFlbmQpIHtcbiAgICAgICAgc2VjdGlvbnNbZXZlbnQuY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXggKyAxXSArPVxuICAgICAgICAgICAgJ2E9JyArIGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUgKyAnXFxyXFxuJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlY3Rpb25zW2V2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4ICsgMV0gKz1cbiAgICAgICAgICAgICdhPWVuZC1vZi1jYW5kaWRhdGVzXFxyXFxuJztcbiAgICAgIH1cbiAgICAgIHNlbGYubG9jYWxEZXNjcmlwdGlvbi5zZHAgPSBzZWN0aW9ucy5qb2luKCcnKTtcbiAgICAgIHZhciB0cmFuc2NlaXZlcnMgPSBzZWxmLl9wZW5kaW5nT2ZmZXIgPyBzZWxmLl9wZW5kaW5nT2ZmZXIgOlxuICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzO1xuICAgICAgdmFyIGNvbXBsZXRlID0gdHJhbnNjZWl2ZXJzLmV2ZXJ5KGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2NlaXZlci5pY2VHYXRoZXJlciAmJlxuICAgICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIuc3RhdGUgPT09ICdjb21wbGV0ZWQnO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEVtaXQgY2FuZGlkYXRlIGlmIGxvY2FsRGVzY3JpcHRpb24gaXMgc2V0LlxuICAgICAgLy8gQWxzbyBlbWl0cyBudWxsIGNhbmRpZGF0ZSB3aGVuIGFsbCBnYXRoZXJlcnMgYXJlIGNvbXBsZXRlLlxuICAgICAgc3dpdGNoIChzZWxmLmljZUdhdGhlcmluZ1N0YXRlKSB7XG4gICAgICAgIGNhc2UgJ25ldyc6XG4gICAgICAgICAgaWYgKCFlbmQpIHtcbiAgICAgICAgICAgIHNlbGYuX2xvY2FsSWNlQ2FuZGlkYXRlc0J1ZmZlci5wdXNoKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVuZCAmJiBjb21wbGV0ZSkge1xuICAgICAgICAgICAgc2VsZi5fbG9jYWxJY2VDYW5kaWRhdGVzQnVmZmVyLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IEV2ZW50KCdpY2VjYW5kaWRhdGUnKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdnYXRoZXJpbmcnOlxuICAgICAgICAgIHNlbGYuX2VtaXRCdWZmZXJlZENhbmRpZGF0ZXMoKTtcbiAgICAgICAgICBpZiAoIWVuZCkge1xuICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChzZWxmLm9uaWNlY2FuZGlkYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHNlbGYub25pY2VjYW5kaWRhdGUoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29tcGxldGUpIHtcbiAgICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2ljZWNhbmRpZGF0ZScpKTtcbiAgICAgICAgICAgIGlmIChzZWxmLm9uaWNlY2FuZGlkYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHNlbGYub25pY2VjYW5kaWRhdGUobmV3IEV2ZW50KCdpY2VjYW5kaWRhdGUnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmljZUdhdGhlcmluZ1N0YXRlID0gJ2NvbXBsZXRlJztcbiAgICAgICAgICAgIHNlbGYuX2VtaXRHYXRoZXJpbmdTdGF0ZUNoYW5nZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29tcGxldGUnOlxuICAgICAgICAgIC8vIHNob3VsZCBub3QgaGFwcGVuLi4uIGN1cnJlbnRseSFcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogLy8gbm8tb3AuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gaWNlR2F0aGVyZXI7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIElDRSB0cmFuc3BvcnQgYW5kIERUTFMgdHJhbnNwb3J0LlxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2NyZWF0ZUljZUFuZER0bHNUcmFuc3BvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBpY2VUcmFuc3BvcnQgPSBuZXcgd2luZG93LlJUQ0ljZVRyYW5zcG9ydChudWxsKTtcbiAgICBpY2VUcmFuc3BvcnQub25pY2VzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5fdXBkYXRlQ29ubmVjdGlvblN0YXRlKCk7XG4gICAgfTtcblxuICAgIHZhciBkdGxzVHJhbnNwb3J0ID0gbmV3IHdpbmRvdy5SVENEdGxzVHJhbnNwb3J0KGljZVRyYW5zcG9ydCk7XG4gICAgZHRsc1RyYW5zcG9ydC5vbmR0bHNzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5fdXBkYXRlQ29ubmVjdGlvblN0YXRlKCk7XG4gICAgfTtcbiAgICBkdGxzVHJhbnNwb3J0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIG9uZXJyb3IgZG9lcyBub3Qgc2V0IHN0YXRlIHRvIGZhaWxlZCBieSBpdHNlbGYuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZHRsc1RyYW5zcG9ydCwgJ3N0YXRlJyxcbiAgICAgICAgICB7dmFsdWU6ICdmYWlsZWQnLCB3cml0YWJsZTogdHJ1ZX0pO1xuICAgICAgc2VsZi5fdXBkYXRlQ29ubmVjdGlvblN0YXRlKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBpY2VUcmFuc3BvcnQ6IGljZVRyYW5zcG9ydCxcbiAgICAgIGR0bHNUcmFuc3BvcnQ6IGR0bHNUcmFuc3BvcnRcbiAgICB9O1xuICB9O1xuXG4gIC8vIERlc3Ryb3kgSUNFIGdhdGhlcmVyLCBJQ0UgdHJhbnNwb3J0IGFuZCBEVExTIHRyYW5zcG9ydC5cbiAgLy8gV2l0aG91dCB0cmlnZ2VyaW5nIHRoZSBjYWxsYmFja3MuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fZGlzcG9zZUljZUFuZER0bHNUcmFuc3BvcnRzID0gZnVuY3Rpb24oXG4gICAgICBzZHBNTGluZUluZGV4KSB7XG4gICAgdmFyIGljZUdhdGhlcmVyID0gdGhpcy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uaWNlR2F0aGVyZXI7XG4gICAgaWYgKGljZUdhdGhlcmVyKSB7XG4gICAgICBkZWxldGUgaWNlR2F0aGVyZXIub25sb2NhbGNhbmRpZGF0ZTtcbiAgICAgIGRlbGV0ZSB0aGlzLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5pY2VHYXRoZXJlcjtcbiAgICB9XG4gICAgdmFyIGljZVRyYW5zcG9ydCA9IHRoaXMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmljZVRyYW5zcG9ydDtcbiAgICBpZiAoaWNlVHJhbnNwb3J0KSB7XG4gICAgICBkZWxldGUgaWNlVHJhbnNwb3J0Lm9uaWNlc3RhdGVjaGFuZ2U7XG4gICAgICBkZWxldGUgdGhpcy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uaWNlVHJhbnNwb3J0O1xuICAgIH1cbiAgICB2YXIgZHRsc1RyYW5zcG9ydCA9IHRoaXMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmR0bHNUcmFuc3BvcnQ7XG4gICAgaWYgKGR0bHNUcmFuc3BvcnQpIHtcbiAgICAgIGRlbGV0ZSBkdGxzVHJhbnNwb3J0Lm9uZHRsc3N0YXRlY2hhbmdlO1xuICAgICAgZGVsZXRlIGR0bHNUcmFuc3BvcnQub25lcnJvcjtcbiAgICAgIGRlbGV0ZSB0aGlzLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5kdGxzVHJhbnNwb3J0O1xuICAgIH1cbiAgfTtcblxuICAvLyBTdGFydCB0aGUgUlRQIFNlbmRlciBhbmQgUmVjZWl2ZXIgZm9yIGEgdHJhbnNjZWl2ZXIuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fdHJhbnNjZWl2ZSA9IGZ1bmN0aW9uKHRyYW5zY2VpdmVyLFxuICAgICAgc2VuZCwgcmVjdikge1xuICAgIHZhciBwYXJhbXMgPSBnZXRDb21tb25DYXBhYmlsaXRpZXModHJhbnNjZWl2ZXIubG9jYWxDYXBhYmlsaXRpZXMsXG4gICAgICAgIHRyYW5zY2VpdmVyLnJlbW90ZUNhcGFiaWxpdGllcyk7XG4gICAgaWYgKHNlbmQgJiYgdHJhbnNjZWl2ZXIucnRwU2VuZGVyKSB7XG4gICAgICBwYXJhbXMuZW5jb2RpbmdzID0gdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVycztcbiAgICAgIHBhcmFtcy5ydGNwID0ge1xuICAgICAgICBjbmFtZTogU0RQVXRpbHMubG9jYWxDTmFtZSxcbiAgICAgICAgY29tcG91bmQ6IHRyYW5zY2VpdmVyLnJ0Y3BQYXJhbWV0ZXJzLmNvbXBvdW5kXG4gICAgICB9O1xuICAgICAgaWYgKHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMubGVuZ3RoKSB7XG4gICAgICAgIHBhcmFtcy5ydGNwLnNzcmMgPSB0cmFuc2NlaXZlci5yZWN2RW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnNzcmM7XG4gICAgICB9XG4gICAgICB0cmFuc2NlaXZlci5ydHBTZW5kZXIuc2VuZChwYXJhbXMpO1xuICAgIH1cbiAgICBpZiAocmVjdiAmJiB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcikge1xuICAgICAgLy8gcmVtb3ZlIFJUWCBmaWVsZCBpbiBFZGdlIDE0OTQyXG4gICAgICBpZiAodHJhbnNjZWl2ZXIua2luZCA9PT0gJ3ZpZGVvJ1xuICAgICAgICAgICYmIHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnNcbiAgICAgICAgICAmJiBlZGdlVmVyc2lvbiA8IDE1MDE5KSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgZGVsZXRlIHAucnR4O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHBhcmFtcy5lbmNvZGluZ3MgPSB0cmFuc2NlaXZlci5yZWN2RW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgcGFyYW1zLnJ0Y3AgPSB7XG4gICAgICAgIGNuYW1lOiB0cmFuc2NlaXZlci5ydGNwUGFyYW1ldGVycy5jbmFtZSxcbiAgICAgICAgY29tcG91bmQ6IHRyYW5zY2VpdmVyLnJ0Y3BQYXJhbWV0ZXJzLmNvbXBvdW5kXG4gICAgICB9O1xuICAgICAgaWYgKHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnMubGVuZ3RoKSB7XG4gICAgICAgIHBhcmFtcy5ydGNwLnNzcmMgPSB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnNzcmM7XG4gICAgICB9XG4gICAgICB0cmFuc2NlaXZlci5ydHBSZWNlaXZlci5yZWNlaXZlKHBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5zZXRMb2NhbERlc2NyaXB0aW9uID0gZnVuY3Rpb24oZGVzY3JpcHRpb24pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIWlzQWN0aW9uQWxsb3dlZEluU2lnbmFsaW5nU3RhdGUoJ3NldExvY2FsRGVzY3JpcHRpb24nLFxuICAgICAgICBkZXNjcmlwdGlvbi50eXBlLCB0aGlzLnNpZ25hbGluZ1N0YXRlKSkge1xuICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoJ0NhbiBub3Qgc2V0IGxvY2FsICcgKyBkZXNjcmlwdGlvbi50eXBlICtcbiAgICAgICAgICAnIGluIHN0YXRlICcgKyB0aGlzLnNpZ25hbGluZ1N0YXRlKTtcbiAgICAgIGUubmFtZSA9ICdJbnZhbGlkU3RhdGVFcnJvcic7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgdHlwZW9mIGFyZ3VtZW50c1syXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChhcmd1bWVudHNbMl0sIDAsIGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cblxuICAgIHZhciBzZWN0aW9ucztcbiAgICB2YXIgc2Vzc2lvbnBhcnQ7XG4gICAgaWYgKGRlc2NyaXB0aW9uLnR5cGUgPT09ICdvZmZlcicpIHtcbiAgICAgIC8vIEZJWE1FOiBXaGF0IHdhcyB0aGUgcHVycG9zZSBvZiB0aGlzIGVtcHR5IGlmIHN0YXRlbWVudD9cbiAgICAgIC8vIGlmICghdGhpcy5fcGVuZGluZ09mZmVyKSB7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX3BlbmRpbmdPZmZlcikge1xuICAgICAgICAvLyBWRVJZIGxpbWl0ZWQgc3VwcG9ydCBmb3IgU0RQIG11bmdpbmcuIExpbWl0ZWQgdG86XG4gICAgICAgIC8vICogY2hhbmdpbmcgdGhlIG9yZGVyIG9mIGNvZGVjc1xuICAgICAgICBzZWN0aW9ucyA9IFNEUFV0aWxzLnNwbGl0U2VjdGlvbnMoZGVzY3JpcHRpb24uc2RwKTtcbiAgICAgICAgc2Vzc2lvbnBhcnQgPSBzZWN0aW9ucy5zaGlmdCgpO1xuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2RwTUxpbmVJbmRleCkge1xuICAgICAgICAgIHZhciBjYXBzID0gU0RQVXRpbHMucGFyc2VSdHBQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbik7XG4gICAgICAgICAgc2VsZi5fcGVuZGluZ09mZmVyW3NkcE1MaW5lSW5kZXhdLmxvY2FsQ2FwYWJpbGl0aWVzID0gY2FwcztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudHJhbnNjZWl2ZXJzID0gdGhpcy5fcGVuZGluZ09mZmVyO1xuICAgICAgICBkZWxldGUgdGhpcy5fcGVuZGluZ09mZmVyO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb24udHlwZSA9PT0gJ2Fuc3dlcicpIHtcbiAgICAgIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyhzZWxmLnJlbW90ZURlc2NyaXB0aW9uLnNkcCk7XG4gICAgICBzZXNzaW9ucGFydCA9IHNlY3Rpb25zLnNoaWZ0KCk7XG4gICAgICB2YXIgaXNJY2VMaXRlID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgoc2Vzc2lvbnBhcnQsXG4gICAgICAgICAgJ2E9aWNlLWxpdGUnKS5sZW5ndGggPiAwO1xuICAgICAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgICAgdmFyIHRyYW5zY2VpdmVyID0gc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF07XG4gICAgICAgIHZhciBpY2VHYXRoZXJlciA9IHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyO1xuICAgICAgICB2YXIgaWNlVHJhbnNwb3J0ID0gdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0O1xuICAgICAgICB2YXIgZHRsc1RyYW5zcG9ydCA9IHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQ7XG4gICAgICAgIHZhciBsb2NhbENhcGFiaWxpdGllcyA9IHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzO1xuICAgICAgICB2YXIgcmVtb3RlQ2FwYWJpbGl0aWVzID0gdHJhbnNjZWl2ZXIucmVtb3RlQ2FwYWJpbGl0aWVzO1xuXG4gICAgICAgIHZhciByZWplY3RlZCA9IFNEUFV0aWxzLmlzUmVqZWN0ZWQobWVkaWFTZWN0aW9uKTtcblxuICAgICAgICBpZiAoIXJlamVjdGVkICYmICF0cmFuc2NlaXZlci5pc0RhdGFjaGFubmVsKSB7XG4gICAgICAgICAgdmFyIHJlbW90ZUljZVBhcmFtZXRlcnMgPSBTRFBVdGlscy5nZXRJY2VQYXJhbWV0ZXJzKFxuICAgICAgICAgICAgICBtZWRpYVNlY3Rpb24sIHNlc3Npb25wYXJ0KTtcbiAgICAgICAgICB2YXIgcmVtb3RlRHRsc1BhcmFtZXRlcnMgPSBTRFBVdGlscy5nZXREdGxzUGFyYW1ldGVycyhcbiAgICAgICAgICAgICAgbWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCk7XG4gICAgICAgICAgaWYgKGlzSWNlTGl0ZSkge1xuICAgICAgICAgICAgcmVtb3RlRHRsc1BhcmFtZXRlcnMucm9sZSA9ICdzZXJ2ZXInO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghc2VsZi51c2luZ0J1bmRsZSB8fCBzZHBNTGluZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBpY2VUcmFuc3BvcnQuc3RhcnQoaWNlR2F0aGVyZXIsIHJlbW90ZUljZVBhcmFtZXRlcnMsXG4gICAgICAgICAgICAgICAgaXNJY2VMaXRlID8gJ2NvbnRyb2xsaW5nJyA6ICdjb250cm9sbGVkJyk7XG4gICAgICAgICAgICBkdGxzVHJhbnNwb3J0LnN0YXJ0KHJlbW90ZUR0bHNQYXJhbWV0ZXJzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDYWxjdWxhdGUgaW50ZXJzZWN0aW9uIG9mIGNhcGFiaWxpdGllcy5cbiAgICAgICAgICB2YXIgcGFyYW1zID0gZ2V0Q29tbW9uQ2FwYWJpbGl0aWVzKGxvY2FsQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgICAgICByZW1vdGVDYXBhYmlsaXRpZXMpO1xuXG4gICAgICAgICAgLy8gU3RhcnQgdGhlIFJUQ1J0cFNlbmRlci4gVGhlIFJUQ1J0cFJlY2VpdmVyIGZvciB0aGlzXG4gICAgICAgICAgLy8gdHJhbnNjZWl2ZXIgaGFzIGFscmVhZHkgYmVlbiBzdGFydGVkIGluIHNldFJlbW90ZURlc2NyaXB0aW9uLlxuICAgICAgICAgIHNlbGYuX3RyYW5zY2VpdmUodHJhbnNjZWl2ZXIsXG4gICAgICAgICAgICAgIHBhcmFtcy5jb2RlY3MubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmxvY2FsRGVzY3JpcHRpb24gPSB7XG4gICAgICB0eXBlOiBkZXNjcmlwdGlvbi50eXBlLFxuICAgICAgc2RwOiBkZXNjcmlwdGlvbi5zZHBcbiAgICB9O1xuICAgIHN3aXRjaCAoZGVzY3JpcHRpb24udHlwZSkge1xuICAgICAgY2FzZSAnb2ZmZXInOlxuICAgICAgICB0aGlzLl91cGRhdGVTaWduYWxpbmdTdGF0ZSgnaGF2ZS1sb2NhbC1vZmZlcicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Fuc3dlcic6XG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdzdGFibGUnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bnN1cHBvcnRlZCB0eXBlIFwiJyArIGRlc2NyaXB0aW9uLnR5cGUgK1xuICAgICAgICAgICAgJ1wiJyk7XG4gICAgfVxuXG4gICAgLy8gSWYgYSBzdWNjZXNzIGNhbGxiYWNrIHdhcyBwcm92aWRlZCwgZW1pdCBJQ0UgY2FuZGlkYXRlcyBhZnRlciBpdFxuICAgIC8vIGhhcyBiZWVuIGV4ZWN1dGVkLiBPdGhlcndpc2UsIGVtaXQgY2FsbGJhY2sgYWZ0ZXIgdGhlIFByb21pc2UgaXNcbiAgICAvLyByZXNvbHZlZC5cbiAgICB2YXIgaGFzQ2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJlxuICAgICAgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgIHZhciBjYiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYigpO1xuICAgICAgICBpZiAoc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSA9PT0gJ25ldycpIHtcbiAgICAgICAgICBzZWxmLmljZUdhdGhlcmluZ1N0YXRlID0gJ2dhdGhlcmluZyc7XG4gICAgICAgICAgc2VsZi5fZW1pdEdhdGhlcmluZ1N0YXRlQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5fZW1pdEJ1ZmZlcmVkQ2FuZGlkYXRlcygpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgcC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFoYXNDYWxsYmFjaykge1xuICAgICAgICBpZiAoc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSA9PT0gJ25ldycpIHtcbiAgICAgICAgICBzZWxmLmljZUdhdGhlcmluZ1N0YXRlID0gJ2dhdGhlcmluZyc7XG4gICAgICAgICAgc2VsZi5fZW1pdEdhdGhlcmluZ1N0YXRlQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXN1YWxseSBjYW5kaWRhdGVzIHdpbGwgYmUgZW1pdHRlZCBlYXJsaWVyLlxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChzZWxmLl9lbWl0QnVmZmVyZWRDYW5kaWRhdGVzLmJpbmQoc2VsZiksIDUwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHA7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24oZGVzY3JpcHRpb24pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIWlzQWN0aW9uQWxsb3dlZEluU2lnbmFsaW5nU3RhdGUoJ3NldFJlbW90ZURlc2NyaXB0aW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb24udHlwZSwgdGhpcy5zaWduYWxpbmdTdGF0ZSkpIHtcbiAgICAgIHZhciBlID0gbmV3IEVycm9yKCdDYW4gbm90IHNldCByZW1vdGUgJyArIGRlc2NyaXB0aW9uLnR5cGUgK1xuICAgICAgICAgICcgaW4gc3RhdGUgJyArIHRoaXMuc2lnbmFsaW5nU3RhdGUpO1xuICAgICAgZS5uYW1lID0gJ0ludmFsaWRTdGF0ZUVycm9yJztcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMiAmJiB0eXBlb2YgYXJndW1lbnRzWzJdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFyZ3VtZW50c1syXSwgMCwgZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuXG4gICAgdmFyIHN0cmVhbXMgPSB7fTtcbiAgICB2YXIgcmVjZWl2ZXJMaXN0ID0gW107XG4gICAgdmFyIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyhkZXNjcmlwdGlvbi5zZHApO1xuICAgIHZhciBzZXNzaW9ucGFydCA9IHNlY3Rpb25zLnNoaWZ0KCk7XG4gICAgdmFyIGlzSWNlTGl0ZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KHNlc3Npb25wYXJ0LFxuICAgICAgICAnYT1pY2UtbGl0ZScpLmxlbmd0aCA+IDA7XG4gICAgdmFyIHVzaW5nQnVuZGxlID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgoc2Vzc2lvbnBhcnQsXG4gICAgICAgICdhPWdyb3VwOkJVTkRMRSAnKS5sZW5ndGggPiAwO1xuICAgIHRoaXMudXNpbmdCdW5kbGUgPSB1c2luZ0J1bmRsZTtcbiAgICB2YXIgaWNlT3B0aW9ucyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KHNlc3Npb25wYXJ0LFxuICAgICAgICAnYT1pY2Utb3B0aW9uczonKVswXTtcbiAgICBpZiAoaWNlT3B0aW9ucykge1xuICAgICAgdGhpcy5jYW5Ucmlja2xlSWNlQ2FuZGlkYXRlcyA9IGljZU9wdGlvbnMuc3Vic3RyKDE0KS5zcGxpdCgnICcpXG4gICAgICAgICAgLmluZGV4T2YoJ3RyaWNrbGUnKSA+PSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhblRyaWNrbGVJY2VDYW5kaWRhdGVzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgICAgIHZhciBraW5kID0gU0RQVXRpbHMuZ2V0S2luZChtZWRpYVNlY3Rpb24pO1xuICAgICAgdmFyIHJlamVjdGVkID0gU0RQVXRpbHMuaXNSZWplY3RlZChtZWRpYVNlY3Rpb24pO1xuICAgICAgdmFyIHByb3RvY29sID0gbGluZXNbMF0uc3Vic3RyKDIpLnNwbGl0KCcgJylbMl07XG5cbiAgICAgIHZhciBkaXJlY3Rpb24gPSBTRFBVdGlscy5nZXREaXJlY3Rpb24obWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCk7XG4gICAgICB2YXIgcmVtb3RlTXNpZCA9IFNEUFV0aWxzLnBhcnNlTXNpZChtZWRpYVNlY3Rpb24pO1xuXG4gICAgICB2YXIgbWlkID0gU0RQVXRpbHMuZ2V0TWlkKG1lZGlhU2VjdGlvbikgfHwgU0RQVXRpbHMuZ2VuZXJhdGVJZGVudGlmaWVyKCk7XG5cbiAgICAgIC8vIFJlamVjdCBkYXRhY2hhbm5lbHMgd2hpY2ggYXJlIG5vdCBpbXBsZW1lbnRlZCB5ZXQuXG4gICAgICBpZiAoa2luZCA9PT0gJ2FwcGxpY2F0aW9uJyAmJiBwcm90b2NvbCA9PT0gJ0RUTFMvU0NUUCcpIHtcbiAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0gPSB7XG4gICAgICAgICAgbWlkOiBtaWQsXG4gICAgICAgICAgaXNEYXRhY2hhbm5lbDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFuc2NlaXZlcjtcbiAgICAgIHZhciBpY2VHYXRoZXJlcjtcbiAgICAgIHZhciBpY2VUcmFuc3BvcnQ7XG4gICAgICB2YXIgZHRsc1RyYW5zcG9ydDtcbiAgICAgIHZhciBydHBSZWNlaXZlcjtcbiAgICAgIHZhciBzZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgdmFyIHJlY3ZFbmNvZGluZ1BhcmFtZXRlcnM7XG4gICAgICB2YXIgbG9jYWxDYXBhYmlsaXRpZXM7XG5cbiAgICAgIHZhciB0cmFjaztcbiAgICAgIC8vIEZJWE1FOiBlbnN1cmUgdGhlIG1lZGlhU2VjdGlvbiBoYXMgcnRjcC1tdXggc2V0LlxuICAgICAgdmFyIHJlbW90ZUNhcGFiaWxpdGllcyA9IFNEUFV0aWxzLnBhcnNlUnRwUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24pO1xuICAgICAgdmFyIHJlbW90ZUljZVBhcmFtZXRlcnM7XG4gICAgICB2YXIgcmVtb3RlRHRsc1BhcmFtZXRlcnM7XG4gICAgICBpZiAoIXJlamVjdGVkKSB7XG4gICAgICAgIHJlbW90ZUljZVBhcmFtZXRlcnMgPSBTRFBVdGlscy5nZXRJY2VQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbixcbiAgICAgICAgICAgIHNlc3Npb25wYXJ0KTtcbiAgICAgICAgcmVtb3RlRHRsc1BhcmFtZXRlcnMgPSBTRFBVdGlscy5nZXREdGxzUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24sXG4gICAgICAgICAgICBzZXNzaW9ucGFydCk7XG4gICAgICAgIHJlbW90ZUR0bHNQYXJhbWV0ZXJzLnJvbGUgPSAnY2xpZW50JztcbiAgICAgIH1cbiAgICAgIHJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMgPVxuICAgICAgICAgIFNEUFV0aWxzLnBhcnNlUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbik7XG5cbiAgICAgIHZhciBydGNwUGFyYW1ldGVycyA9IFNEUFV0aWxzLnBhcnNlUnRjcFBhcmFtZXRlcnMobWVkaWFTZWN0aW9uKTtcblxuICAgICAgdmFyIGlzQ29tcGxldGUgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sXG4gICAgICAgICAgJ2E9ZW5kLW9mLWNhbmRpZGF0ZXMnLCBzZXNzaW9ucGFydCkubGVuZ3RoID4gMDtcbiAgICAgIHZhciBjYW5kcyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9Y2FuZGlkYXRlOicpXG4gICAgICAgICAgLm1hcChmdW5jdGlvbihjYW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gU0RQVXRpbHMucGFyc2VDYW5kaWRhdGUoY2FuZCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGNhbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBjYW5kLmNvbXBvbmVudCA9PT0gJzEnIHx8IGNhbmQuY29tcG9uZW50ID09PSAxO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAvLyBDaGVjayBpZiB3ZSBjYW4gdXNlIEJVTkRMRSBhbmQgZGlzcG9zZSB0cmFuc3BvcnRzLlxuICAgICAgaWYgKChkZXNjcmlwdGlvbi50eXBlID09PSAnb2ZmZXInIHx8IGRlc2NyaXB0aW9uLnR5cGUgPT09ICdhbnN3ZXInKSAmJlxuICAgICAgICAgICFyZWplY3RlZCAmJiB1c2luZ0J1bmRsZSAmJiBzZHBNTGluZUluZGV4ID4gMCAmJlxuICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdKSB7XG4gICAgICAgIHNlbGYuX2Rpc3Bvc2VJY2VBbmREdGxzVHJhbnNwb3J0cyhzZHBNTGluZUluZGV4KTtcbiAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uaWNlR2F0aGVyZXIgPVxuICAgICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbMF0uaWNlR2F0aGVyZXI7XG4gICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmljZVRyYW5zcG9ydCA9XG4gICAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1swXS5pY2VUcmFuc3BvcnQ7XG4gICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmR0bHNUcmFuc3BvcnQgPVxuICAgICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbMF0uZHRsc1RyYW5zcG9ydDtcbiAgICAgICAgaWYgKHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJ0cFNlbmRlcikge1xuICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJ0cFNlbmRlci5zZXRUcmFuc3BvcnQoXG4gICAgICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzWzBdLmR0bHNUcmFuc3BvcnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5ydHBSZWNlaXZlcikge1xuICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJ0cFJlY2VpdmVyLnNldFRyYW5zcG9ydChcbiAgICAgICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbMF0uZHRsc1RyYW5zcG9ydCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkZXNjcmlwdGlvbi50eXBlID09PSAnb2ZmZXInICYmICFyZWplY3RlZCkge1xuICAgICAgICB0cmFuc2NlaXZlciA9IHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdIHx8XG4gICAgICAgICAgICBzZWxmLl9jcmVhdGVUcmFuc2NlaXZlcihraW5kKTtcbiAgICAgICAgdHJhbnNjZWl2ZXIubWlkID0gbWlkO1xuXG4gICAgICAgIGlmICghdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIpIHtcbiAgICAgICAgICB0cmFuc2NlaXZlci5pY2VHYXRoZXJlciA9IHVzaW5nQnVuZGxlICYmIHNkcE1MaW5lSW5kZXggPiAwID9cbiAgICAgICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbMF0uaWNlR2F0aGVyZXIgOlxuICAgICAgICAgICAgICBzZWxmLl9jcmVhdGVJY2VHYXRoZXJlcihtaWQsIHNkcE1MaW5lSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQ29tcGxldGUgJiYgY2FuZHMubGVuZ3RoICYmXG4gICAgICAgICAgICAoIXVzaW5nQnVuZGxlIHx8IHNkcE1MaW5lSW5kZXggPT09IDApKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0LnNldFJlbW90ZUNhbmRpZGF0ZXMoY2FuZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMgPSB3aW5kb3cuUlRDUnRwUmVjZWl2ZXIuZ2V0Q2FwYWJpbGl0aWVzKGtpbmQpO1xuXG4gICAgICAgIC8vIGZpbHRlciBSVFggdW50aWwgYWRkaXRpb25hbCBzdHVmZiBuZWVkZWQgZm9yIFJUWCBpcyBpbXBsZW1lbnRlZFxuICAgICAgICAvLyBpbiBhZGFwdGVyLmpzXG4gICAgICAgIGlmIChlZGdlVmVyc2lvbiA8IDE1MDE5KSB7XG4gICAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzID0gbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZpbHRlcihcbiAgICAgICAgICAgICAgZnVuY3Rpb24oY29kZWMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29kZWMubmFtZSAhPT0gJ3J0eCc7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VuZEVuY29kaW5nUGFyYW1ldGVycyA9IFt7XG4gICAgICAgICAgc3NyYzogKDIgKiBzZHBNTGluZUluZGV4ICsgMikgKiAxMDAxXG4gICAgICAgIH1dO1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAnc2VuZG9ubHknKSB7XG4gICAgICAgICAgcnRwUmVjZWl2ZXIgPSBuZXcgd2luZG93LlJUQ1J0cFJlY2VpdmVyKHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQsXG4gICAgICAgICAgICAgIGtpbmQpO1xuXG4gICAgICAgICAgdHJhY2sgPSBydHBSZWNlaXZlci50cmFjaztcbiAgICAgICAgICAvLyBGSVhNRTogZG9lcyBub3Qgd29yayB3aXRoIFBsYW4gQi5cbiAgICAgICAgICBpZiAocmVtb3RlTXNpZCkge1xuICAgICAgICAgICAgaWYgKCFzdHJlYW1zW3JlbW90ZU1zaWQuc3RyZWFtXSkge1xuICAgICAgICAgICAgICBzdHJlYW1zW3JlbW90ZU1zaWQuc3RyZWFtXSA9IG5ldyB3aW5kb3cuTWVkaWFTdHJlYW0oKTtcbiAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN0cmVhbXNbcmVtb3RlTXNpZC5zdHJlYW1dLCAnaWQnLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZW1vdGVNc2lkLnN0cmVhbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRyYWNrLCAnaWQnLCB7XG4gICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbW90ZU1zaWQudHJhY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV0uYWRkVHJhY2sodHJhY2spO1xuICAgICAgICAgICAgcmVjZWl2ZXJMaXN0LnB1c2goW3RyYWNrLCBydHBSZWNlaXZlcixcbiAgICAgICAgICAgICAgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV1dKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFzdHJlYW1zLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgc3RyZWFtcy5kZWZhdWx0ID0gbmV3IHdpbmRvdy5NZWRpYVN0cmVhbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyZWFtcy5kZWZhdWx0LmFkZFRyYWNrKHRyYWNrKTtcbiAgICAgICAgICAgIHJlY2VpdmVyTGlzdC5wdXNoKFt0cmFjaywgcnRwUmVjZWl2ZXIsIHN0cmVhbXMuZGVmYXVsdF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzID0gbG9jYWxDYXBhYmlsaXRpZXM7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJlbW90ZUNhcGFiaWxpdGllcyA9IHJlbW90ZUNhcGFiaWxpdGllcztcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIgPSBydHBSZWNlaXZlcjtcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRjcFBhcmFtZXRlcnMgPSBydGNwUGFyYW1ldGVycztcbiAgICAgICAgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVycyA9IHNlbmRFbmNvZGluZ1BhcmFtZXRlcnM7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMgPSByZWN2RW5jb2RpbmdQYXJhbWV0ZXJzO1xuXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBSVENSdHBSZWNlaXZlciBub3cuIFRoZSBSVFBTZW5kZXIgaXMgc3RhcnRlZCBpblxuICAgICAgICAvLyBzZXRMb2NhbERlc2NyaXB0aW9uLlxuICAgICAgICBzZWxmLl90cmFuc2NlaXZlKHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAnc2VuZG9ubHknKTtcbiAgICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb24udHlwZSA9PT0gJ2Fuc3dlcicgJiYgIXJlamVjdGVkKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyID0gc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF07XG4gICAgICAgIGljZUdhdGhlcmVyID0gdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXI7XG4gICAgICAgIGljZVRyYW5zcG9ydCA9IHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydDtcbiAgICAgICAgZHRsc1RyYW5zcG9ydCA9IHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQ7XG4gICAgICAgIHJ0cFJlY2VpdmVyID0gdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXI7XG4gICAgICAgIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnMgPSB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgICBsb2NhbENhcGFiaWxpdGllcyA9IHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzO1xuXG4gICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMgPVxuICAgICAgICAgICAgcmVjdkVuY29kaW5nUGFyYW1ldGVycztcbiAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0ucmVtb3RlQ2FwYWJpbGl0aWVzID1cbiAgICAgICAgICAgIHJlbW90ZUNhcGFiaWxpdGllcztcbiAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0ucnRjcFBhcmFtZXRlcnMgPSBydGNwUGFyYW1ldGVycztcblxuICAgICAgICBpZiAoIXVzaW5nQnVuZGxlIHx8IHNkcE1MaW5lSW5kZXggPT09IDApIHtcbiAgICAgICAgICBpZiAoKGlzSWNlTGl0ZSB8fCBpc0NvbXBsZXRlKSAmJiBjYW5kcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGljZVRyYW5zcG9ydC5zZXRSZW1vdGVDYW5kaWRhdGVzKGNhbmRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWNlVHJhbnNwb3J0LnN0YXJ0KGljZUdhdGhlcmVyLCByZW1vdGVJY2VQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgICAnY29udHJvbGxpbmcnKTtcbiAgICAgICAgICBkdGxzVHJhbnNwb3J0LnN0YXJ0KHJlbW90ZUR0bHNQYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuX3RyYW5zY2VpdmUodHJhbnNjZWl2ZXIsXG4gICAgICAgICAgICBkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAncmVjdm9ubHknLFxuICAgICAgICAgICAgZGlyZWN0aW9uID09PSAnc2VuZHJlY3YnIHx8IGRpcmVjdGlvbiA9PT0gJ3NlbmRvbmx5Jyk7XG5cbiAgICAgICAgaWYgKHJ0cFJlY2VpdmVyICYmXG4gICAgICAgICAgICAoZGlyZWN0aW9uID09PSAnc2VuZHJlY3YnIHx8IGRpcmVjdGlvbiA9PT0gJ3NlbmRvbmx5JykpIHtcbiAgICAgICAgICB0cmFjayA9IHJ0cFJlY2VpdmVyLnRyYWNrO1xuICAgICAgICAgIGlmIChyZW1vdGVNc2lkKSB7XG4gICAgICAgICAgICBpZiAoIXN0cmVhbXNbcmVtb3RlTXNpZC5zdHJlYW1dKSB7XG4gICAgICAgICAgICAgIHN0cmVhbXNbcmVtb3RlTXNpZC5zdHJlYW1dID0gbmV3IHdpbmRvdy5NZWRpYVN0cmVhbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV0uYWRkVHJhY2sodHJhY2spO1xuICAgICAgICAgICAgcmVjZWl2ZXJMaXN0LnB1c2goW3RyYWNrLCBydHBSZWNlaXZlciwgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV1dKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFzdHJlYW1zLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgc3RyZWFtcy5kZWZhdWx0ID0gbmV3IHdpbmRvdy5NZWRpYVN0cmVhbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyZWFtcy5kZWZhdWx0LmFkZFRyYWNrKHRyYWNrKTtcbiAgICAgICAgICAgIHJlY2VpdmVyTGlzdC5wdXNoKFt0cmFjaywgcnRwUmVjZWl2ZXIsIHN0cmVhbXMuZGVmYXVsdF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBGSVhNRTogYWN0dWFsbHkgdGhlIHJlY2VpdmVyIHNob3VsZCBiZSBjcmVhdGVkIGxhdGVyLlxuICAgICAgICAgIGRlbGV0ZSB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5yZW1vdGVEZXNjcmlwdGlvbiA9IHtcbiAgICAgIHR5cGU6IGRlc2NyaXB0aW9uLnR5cGUsXG4gICAgICBzZHA6IGRlc2NyaXB0aW9uLnNkcFxuICAgIH07XG4gICAgc3dpdGNoIChkZXNjcmlwdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdvZmZlcic6XG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdoYXZlLXJlbW90ZS1vZmZlcicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Fuc3dlcic6XG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdzdGFibGUnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bnN1cHBvcnRlZCB0eXBlIFwiJyArIGRlc2NyaXB0aW9uLnR5cGUgK1xuICAgICAgICAgICAgJ1wiJyk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHN0cmVhbXMpLmZvckVhY2goZnVuY3Rpb24oc2lkKSB7XG4gICAgICB2YXIgc3RyZWFtID0gc3RyZWFtc1tzaWRdO1xuICAgICAgaWYgKHN0cmVhbS5nZXRUcmFja3MoKS5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5yZW1vdGVTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdhZGRzdHJlYW0nKTtcbiAgICAgICAgZXZlbnQuc3RyZWFtID0gc3RyZWFtO1xuICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICBpZiAoc2VsZi5vbmFkZHN0cmVhbSAhPT0gbnVsbCkge1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5vbmFkZHN0cmVhbShldmVudCk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZWNlaXZlckxpc3QuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgdmFyIHRyYWNrID0gaXRlbVswXTtcbiAgICAgICAgICB2YXIgcmVjZWl2ZXIgPSBpdGVtWzFdO1xuICAgICAgICAgIGlmIChzdHJlYW0uaWQgIT09IGl0ZW1bMl0uaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHRyYWNrRXZlbnQgPSBuZXcgRXZlbnQoJ3RyYWNrJyk7XG4gICAgICAgICAgdHJhY2tFdmVudC50cmFjayA9IHRyYWNrO1xuICAgICAgICAgIHRyYWNrRXZlbnQucmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICAgICAgICB0cmFja0V2ZW50LnN0cmVhbXMgPSBbc3RyZWFtXTtcbiAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQodHJhY2tFdmVudCk7XG4gICAgICAgICAgaWYgKHNlbGYub250cmFjayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHNlbGYub250cmFjayh0cmFja0V2ZW50KTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBjaGVjayB3aGV0aGVyIGFkZEljZUNhbmRpZGF0ZSh7fSkgd2FzIGNhbGxlZCB3aXRoaW4gZm91ciBzZWNvbmRzIGFmdGVyXG4gICAgLy8gc2V0UmVtb3RlRGVzY3JpcHRpb24uXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIShzZWxmICYmIHNlbGYudHJhbnNjZWl2ZXJzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWxmLnRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICAgIGlmICh0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQgJiZcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5zdGF0ZSA9PT0gJ25ldycgJiZcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5nZXRSZW1vdGVDYW5kaWRhdGVzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignVGltZW91dCBmb3IgYWRkUmVtb3RlQ2FuZGlkYXRlLiBDb25zaWRlciBzZW5kaW5nICcgK1xuICAgICAgICAgICAgICAnYW4gZW5kLW9mLWNhbmRpZGF0ZXMgbm90aWZpY2F0aW9uJyk7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0LmFkZFJlbW90ZUNhbmRpZGF0ZSh7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDQwMDApO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFyZ3VtZW50c1sxXSwgMCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICAvKiBub3QgeWV0XG4gICAgICBpZiAodHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIuY2xvc2UoKTtcbiAgICAgIH1cbiAgICAgICovXG4gICAgICBpZiAodHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0KSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5zdG9wKCk7XG4gICAgICB9XG4gICAgICBpZiAodHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydCkge1xuICAgICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LnN0b3AoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFuc2NlaXZlci5ydHBTZW5kZXIpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRwU2VuZGVyLnN0b3AoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFuc2NlaXZlci5ydHBSZWNlaXZlcikge1xuICAgICAgICB0cmFuc2NlaXZlci5ydHBSZWNlaXZlci5zdG9wKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gRklYTUU6IGNsZWFuIHVwIHRyYWNrcywgbG9jYWwgc3RyZWFtcywgcmVtb3RlIHN0cmVhbXMsIGV0Y1xuICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdjbG9zZWQnKTtcbiAgfTtcblxuICAvLyBVcGRhdGUgdGhlIHNpZ25hbGluZyBzdGF0ZS5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl91cGRhdGVTaWduYWxpbmdTdGF0ZSA9IGZ1bmN0aW9uKG5ld1N0YXRlKSB7XG4gICAgdGhpcy5zaWduYWxpbmdTdGF0ZSA9IG5ld1N0YXRlO1xuICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnc2lnbmFsaW5nc3RhdGVjaGFuZ2UnKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25zaWduYWxpbmdzdGF0ZWNoYW5nZShldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIERldGVybWluZSB3aGV0aGVyIHRvIGZpcmUgdGhlIG5lZ290aWF0aW9ubmVlZGVkIGV2ZW50LlxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX21heWJlRmlyZU5lZ290aWF0aW9uTmVlZGVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0aGlzLnNpZ25hbGluZ1N0YXRlICE9PSAnc3RhYmxlJyB8fCB0aGlzLm5lZWROZWdvdGlhdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5lZWROZWdvdGlhdGlvbiA9IHRydWU7XG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc2VsZi5uZWVkTmVnb3RpYXRpb24gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNlbGYubmVlZE5lZ290aWF0aW9uID0gZmFsc2U7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ25lZ290aWF0aW9ubmVlZGVkJyk7XG4gICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgaWYgKHNlbGYub25uZWdvdGlhdGlvbm5lZWRlZCAhPT0gbnVsbCkge1xuICAgICAgICBzZWxmLm9ubmVnb3RpYXRpb25uZWVkZWQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9O1xuXG4gIC8vIFVwZGF0ZSB0aGUgY29ubmVjdGlvbiBzdGF0ZS5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl91cGRhdGVDb25uZWN0aW9uU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIG5ld1N0YXRlO1xuICAgIHZhciBzdGF0ZXMgPSB7XG4gICAgICAnbmV3JzogMCxcbiAgICAgIGNsb3NlZDogMCxcbiAgICAgIGNvbm5lY3Rpbmc6IDAsXG4gICAgICBjaGVja2luZzogMCxcbiAgICAgIGNvbm5lY3RlZDogMCxcbiAgICAgIGNvbXBsZXRlZDogMCxcbiAgICAgIGRpc2Nvbm5lY3RlZDogMCxcbiAgICAgIGZhaWxlZDogMFxuICAgIH07XG4gICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgc3RhdGVzW3RyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5zdGF0ZV0rKztcbiAgICAgIHN0YXRlc1t0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LnN0YXRlXSsrO1xuICAgIH0pO1xuICAgIC8vIElDRVRyYW5zcG9ydC5jb21wbGV0ZWQgYW5kIGNvbm5lY3RlZCBhcmUgdGhlIHNhbWUgZm9yIHRoaXMgcHVycG9zZS5cbiAgICBzdGF0ZXMuY29ubmVjdGVkICs9IHN0YXRlcy5jb21wbGV0ZWQ7XG5cbiAgICBuZXdTdGF0ZSA9ICduZXcnO1xuICAgIGlmIChzdGF0ZXMuZmFpbGVkID4gMCkge1xuICAgICAgbmV3U3RhdGUgPSAnZmFpbGVkJztcbiAgICB9IGVsc2UgaWYgKHN0YXRlcy5jb25uZWN0aW5nID4gMCB8fCBzdGF0ZXMuY2hlY2tpbmcgPiAwKSB7XG4gICAgICBuZXdTdGF0ZSA9ICdjb25uZWN0aW5nJztcbiAgICB9IGVsc2UgaWYgKHN0YXRlcy5kaXNjb25uZWN0ZWQgPiAwKSB7XG4gICAgICBuZXdTdGF0ZSA9ICdkaXNjb25uZWN0ZWQnO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVzLm5ldyA+IDApIHtcbiAgICAgIG5ld1N0YXRlID0gJ25ldyc7XG4gICAgfSBlbHNlIGlmIChzdGF0ZXMuY29ubmVjdGVkID4gMCB8fCBzdGF0ZXMuY29tcGxldGVkID4gMCkge1xuICAgICAgbmV3U3RhdGUgPSAnY29ubmVjdGVkJztcbiAgICB9XG5cbiAgICBpZiAobmV3U3RhdGUgIT09IHNlbGYuaWNlQ29ubmVjdGlvblN0YXRlKSB7XG4gICAgICBzZWxmLmljZUNvbm5lY3Rpb25TdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdpY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UnKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICBpZiAodGhpcy5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmNyZWF0ZU9mZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9wZW5kaW5nT2ZmZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlT2ZmZXIgY2FsbGVkIHdoaWxlIHRoZXJlIGlzIGEgcGVuZGluZyBvZmZlci4nKTtcbiAgICB9XG4gICAgdmFyIG9mZmVyT3B0aW9ucztcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvZmZlck9wdGlvbnMgPSBhcmd1bWVudHNbMF07XG4gICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICBvZmZlck9wdGlvbnMgPSBhcmd1bWVudHNbMl07XG4gICAgfVxuXG4gICAgdmFyIG51bUF1ZGlvVHJhY2tzID0gdGhpcy50cmFuc2NlaXZlcnMuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiB0LmtpbmQgPT09ICdhdWRpbyc7XG4gICAgfSkubGVuZ3RoO1xuICAgIHZhciBudW1WaWRlb1RyYWNrcyA9IHRoaXMudHJhbnNjZWl2ZXJzLmZpbHRlcihmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdC5raW5kID09PSAndmlkZW8nO1xuICAgIH0pLmxlbmd0aDtcblxuICAgIC8vIERldGVybWluZSBudW1iZXIgb2YgYXVkaW8gYW5kIHZpZGVvIHRyYWNrcyB3ZSBuZWVkIHRvIHNlbmQvcmVjdi5cbiAgICBpZiAob2ZmZXJPcHRpb25zKSB7XG4gICAgICAvLyBSZWplY3QgQ2hyb21lIGxlZ2FjeSBjb25zdHJhaW50cy5cbiAgICAgIGlmIChvZmZlck9wdGlvbnMubWFuZGF0b3J5IHx8IG9mZmVyT3B0aW9ucy5vcHRpb25hbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0xlZ2FjeSBtYW5kYXRvcnkvb3B0aW9uYWwgY29uc3RyYWludHMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgIH1cbiAgICAgIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG51bUF1ZGlvVHJhY2tzID0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBudW1BdWRpb1RyYWNrcyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbnVtQXVkaW9UcmFja3MgPSBvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvID09PSB0cnVlKSB7XG4gICAgICAgICAgbnVtVmlkZW9UcmFja3MgPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvID09PSBmYWxzZSkge1xuICAgICAgICAgIG51bVZpZGVvVHJhY2tzID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudW1WaWRlb1RyYWNrcyA9IG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgaWYgKHRyYW5zY2VpdmVyLmtpbmQgPT09ICdhdWRpbycpIHtcbiAgICAgICAgbnVtQXVkaW9UcmFja3MtLTtcbiAgICAgICAgaWYgKG51bUF1ZGlvVHJhY2tzIDwgMCkge1xuICAgICAgICAgIHRyYW5zY2VpdmVyLndhbnRSZWNlaXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHJhbnNjZWl2ZXIua2luZCA9PT0gJ3ZpZGVvJykge1xuICAgICAgICBudW1WaWRlb1RyYWNrcy0tO1xuICAgICAgICBpZiAobnVtVmlkZW9UcmFja3MgPCAwKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIud2FudFJlY2VpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIE0tbGluZXMgZm9yIHJlY3Zvbmx5IHN0cmVhbXMuXG4gICAgd2hpbGUgKG51bUF1ZGlvVHJhY2tzID4gMCB8fCBudW1WaWRlb1RyYWNrcyA+IDApIHtcbiAgICAgIGlmIChudW1BdWRpb1RyYWNrcyA+IDApIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlVHJhbnNjZWl2ZXIoJ2F1ZGlvJyk7XG4gICAgICAgIG51bUF1ZGlvVHJhY2tzLS07XG4gICAgICB9XG4gICAgICBpZiAobnVtVmlkZW9UcmFja3MgPiAwKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZVRyYW5zY2VpdmVyKCd2aWRlbycpO1xuICAgICAgICBudW1WaWRlb1RyYWNrcy0tO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyByZW9yZGVyIHRyYWNrc1xuICAgIHZhciB0cmFuc2NlaXZlcnMgPSBzb3J0VHJhY2tzKHRoaXMudHJhbnNjZWl2ZXJzKTtcblxuICAgIHZhciBzZHAgPSBTRFBVdGlscy53cml0ZVNlc3Npb25Cb2lsZXJwbGF0ZSh0aGlzLl9zZHBTZXNzaW9uSWQpO1xuICAgIHRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyLCBzZHBNTGluZUluZGV4KSB7XG4gICAgICAvLyBGb3IgZWFjaCB0cmFjaywgY3JlYXRlIGFuIGljZSBnYXRoZXJlciwgaWNlIHRyYW5zcG9ydCxcbiAgICAgIC8vIGR0bHMgdHJhbnNwb3J0LCBwb3RlbnRpYWxseSBydHBzZW5kZXIgYW5kIHJ0cHJlY2VpdmVyLlxuICAgICAgdmFyIHRyYWNrID0gdHJhbnNjZWl2ZXIudHJhY2s7XG4gICAgICB2YXIga2luZCA9IHRyYW5zY2VpdmVyLmtpbmQ7XG4gICAgICB2YXIgbWlkID0gU0RQVXRpbHMuZ2VuZXJhdGVJZGVudGlmaWVyKCk7XG4gICAgICB0cmFuc2NlaXZlci5taWQgPSBtaWQ7XG5cbiAgICAgIGlmICghdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIgPSBzZWxmLnVzaW5nQnVuZGxlICYmIHNkcE1MaW5lSW5kZXggPiAwID9cbiAgICAgICAgICAgIHRyYW5zY2VpdmVyc1swXS5pY2VHYXRoZXJlciA6XG4gICAgICAgICAgICBzZWxmLl9jcmVhdGVJY2VHYXRoZXJlcihtaWQsIHNkcE1MaW5lSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbG9jYWxDYXBhYmlsaXRpZXMgPSB3aW5kb3cuUlRDUnRwU2VuZGVyLmdldENhcGFiaWxpdGllcyhraW5kKTtcbiAgICAgIC8vIGZpbHRlciBSVFggdW50aWwgYWRkaXRpb25hbCBzdHVmZiBuZWVkZWQgZm9yIFJUWCBpcyBpbXBsZW1lbnRlZFxuICAgICAgLy8gaW4gYWRhcHRlci5qc1xuICAgICAgaWYgKGVkZ2VWZXJzaW9uIDwgMTUwMTkpIHtcbiAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzID0gbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZpbHRlcihcbiAgICAgICAgICAgIGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb2RlYy5uYW1lICE9PSAncnR4JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZvckVhY2goZnVuY3Rpb24oY29kZWMpIHtcbiAgICAgICAgLy8gd29yayBhcm91bmQgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3dlYnJ0Yy9pc3N1ZXMvZGV0YWlsP2lkPTY1NTJcbiAgICAgICAgLy8gYnkgYWRkaW5nIGxldmVsLWFzeW1tZXRyeS1hbGxvd2VkPTFcbiAgICAgICAgaWYgKGNvZGVjLm5hbWUgPT09ICdIMjY0JyAmJlxuICAgICAgICAgICAgY29kZWMucGFyYW1ldGVyc1snbGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29kZWMucGFyYW1ldGVyc1snbGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQnXSA9ICcxJztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIGdlbmVyYXRlIGFuIHNzcmMgbm93LCB0byBiZSB1c2VkIGxhdGVyIGluIHJ0cFNlbmRlci5zZW5kXG4gICAgICB2YXIgc2VuZEVuY29kaW5nUGFyYW1ldGVycyA9IFt7XG4gICAgICAgIHNzcmM6ICgyICogc2RwTUxpbmVJbmRleCArIDEpICogMTAwMVxuICAgICAgfV07XG4gICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgLy8gYWRkIFJUWFxuICAgICAgICBpZiAoZWRnZVZlcnNpb24gPj0gMTUwMTkgJiYga2luZCA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4ID0ge1xuICAgICAgICAgICAgc3NyYzogKDIgKiBzZHBNTGluZUluZGV4ICsgMSkgKiAxMDAxICsgMVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRyYW5zY2VpdmVyLndhbnRSZWNlaXZlKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyID0gbmV3IHdpbmRvdy5SVENSdHBSZWNlaXZlcihcbiAgICAgICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LFxuICAgICAgICAgIGtpbmRcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdHJhbnNjZWl2ZXIubG9jYWxDYXBhYmlsaXRpZXMgPSBsb2NhbENhcGFiaWxpdGllcztcbiAgICAgIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnMgPSBzZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgIH0pO1xuXG4gICAgLy8gYWx3YXlzIG9mZmVyIEJVTkRMRSBhbmQgZGlzcG9zZSBvbiByZXR1cm4gaWYgbm90IHN1cHBvcnRlZC5cbiAgICBpZiAodGhpcy5fY29uZmlnLmJ1bmRsZVBvbGljeSAhPT0gJ21heC1jb21wYXQnKSB7XG4gICAgICBzZHAgKz0gJ2E9Z3JvdXA6QlVORExFICcgKyB0cmFuc2NlaXZlcnMubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQubWlkO1xuICAgICAgfSkuam9pbignICcpICsgJ1xcclxcbic7XG4gICAgfVxuICAgIHNkcCArPSAnYT1pY2Utb3B0aW9uczp0cmlja2xlXFxyXFxuJztcblxuICAgIHRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyLCBzZHBNTGluZUluZGV4KSB7XG4gICAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVNZWRpYVNlY3Rpb24odHJhbnNjZWl2ZXIsXG4gICAgICAgICAgdHJhbnNjZWl2ZXIubG9jYWxDYXBhYmlsaXRpZXMsICdvZmZlcicsIHRyYW5zY2VpdmVyLnN0cmVhbSk7XG4gICAgICBzZHAgKz0gJ2E9cnRjcC1yc2l6ZVxcclxcbic7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9wZW5kaW5nT2ZmZXIgPSB0cmFuc2NlaXZlcnM7XG4gICAgdmFyIGRlc2MgPSBuZXcgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICB0eXBlOiAnb2ZmZXInLFxuICAgICAgc2RwOiBzZHBcbiAgICB9KTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChhcmd1bWVudHNbMF0sIDAsIGRlc2MpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRlc2MpO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVBbnN3ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2RwID0gU0RQVXRpbHMud3JpdGVTZXNzaW9uQm9pbGVycGxhdGUodGhpcy5fc2RwU2Vzc2lvbklkKTtcbiAgICBpZiAodGhpcy51c2luZ0J1bmRsZSkge1xuICAgICAgc2RwICs9ICdhPWdyb3VwOkJVTkRMRSAnICsgdGhpcy50cmFuc2NlaXZlcnMubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQubWlkO1xuICAgICAgfSkuam9pbignICcpICsgJ1xcclxcbic7XG4gICAgfVxuICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIsIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgIGlmICh0cmFuc2NlaXZlci5pc0RhdGFjaGFubmVsKSB7XG4gICAgICAgIHNkcCArPSAnbT1hcHBsaWNhdGlvbiAwIERUTFMvU0NUUCA1MDAwXFxyXFxuJyArXG4gICAgICAgICAgICAnYz1JTiBJUDQgMC4wLjAuMFxcclxcbicgK1xuICAgICAgICAgICAgJ2E9bWlkOicgKyB0cmFuc2NlaXZlci5taWQgKyAnXFxyXFxuJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBGSVhNRTogbG9vayBhdCBkaXJlY3Rpb24uXG4gICAgICBpZiAodHJhbnNjZWl2ZXIuc3RyZWFtKSB7XG4gICAgICAgIHZhciBsb2NhbFRyYWNrO1xuICAgICAgICBpZiAodHJhbnNjZWl2ZXIua2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgIGxvY2FsVHJhY2sgPSB0cmFuc2NlaXZlci5zdHJlYW0uZ2V0QXVkaW9UcmFja3MoKVswXTtcbiAgICAgICAgfSBlbHNlIGlmICh0cmFuc2NlaXZlci5raW5kID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgbG9jYWxUcmFjayA9IHRyYW5zY2VpdmVyLnN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbFRyYWNrKSB7XG4gICAgICAgICAgLy8gYWRkIFJUWFxuICAgICAgICAgIGlmIChlZGdlVmVyc2lvbiA+PSAxNTAxOSAmJiB0cmFuc2NlaXZlci5raW5kID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eCA9IHtcbiAgICAgICAgICAgICAgc3NyYzogKDIgKiBzZHBNTGluZUluZGV4ICsgMikgKiAxMDAxICsgMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2FsY3VsYXRlIGludGVyc2VjdGlvbiBvZiBjYXBhYmlsaXRpZXMuXG4gICAgICB2YXIgY29tbW9uQ2FwYWJpbGl0aWVzID0gZ2V0Q29tbW9uQ2FwYWJpbGl0aWVzKFxuICAgICAgICAgIHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgIHRyYW5zY2VpdmVyLnJlbW90ZUNhcGFiaWxpdGllcyk7XG5cbiAgICAgIHZhciBoYXNSdHggPSBjb21tb25DYXBhYmlsaXRpZXMuY29kZWNzLmZpbHRlcihmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiBjLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3J0eCc7XG4gICAgICB9KS5sZW5ndGg7XG4gICAgICBpZiAoIWhhc1J0eCAmJiB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eCkge1xuICAgICAgICBkZWxldGUgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHg7XG4gICAgICB9XG5cbiAgICAgIHNkcCArPSBTRFBVdGlscy53cml0ZU1lZGlhU2VjdGlvbih0cmFuc2NlaXZlciwgY29tbW9uQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgICdhbnN3ZXInLCB0cmFuc2NlaXZlci5zdHJlYW0pO1xuICAgICAgaWYgKHRyYW5zY2VpdmVyLnJ0Y3BQYXJhbWV0ZXJzICYmXG4gICAgICAgICAgdHJhbnNjZWl2ZXIucnRjcFBhcmFtZXRlcnMucmVkdWNlZFNpemUpIHtcbiAgICAgICAgc2RwICs9ICdhPXJ0Y3AtcnNpemVcXHJcXG4nO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGRlc2MgPSBuZXcgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICB0eXBlOiAnYW5zd2VyJyxcbiAgICAgIHNkcDogc2RwXG4gICAgfSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoYXJndW1lbnRzWzBdLCAwLCBkZXNjKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkZXNjKTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24oY2FuZGlkYXRlKSB7XG4gICAgaWYgKCFjYW5kaWRhdGUpIHtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy50cmFuc2NlaXZlcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdGhpcy50cmFuc2NlaXZlcnNbal0uaWNlVHJhbnNwb3J0LmFkZFJlbW90ZUNhbmRpZGF0ZSh7fSk7XG4gICAgICAgIGlmICh0aGlzLnVzaW5nQnVuZGxlKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtTGluZUluZGV4ID0gY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXg7XG4gICAgICBpZiAoY2FuZGlkYXRlLnNkcE1pZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHJhbnNjZWl2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMudHJhbnNjZWl2ZXJzW2ldLm1pZCA9PT0gY2FuZGlkYXRlLnNkcE1pZCkge1xuICAgICAgICAgICAgbUxpbmVJbmRleCA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciB0cmFuc2NlaXZlciA9IHRoaXMudHJhbnNjZWl2ZXJzW21MaW5lSW5kZXhdO1xuICAgICAgaWYgKHRyYW5zY2VpdmVyKSB7XG4gICAgICAgIHZhciBjYW5kID0gT2JqZWN0LmtleXMoY2FuZGlkYXRlLmNhbmRpZGF0ZSkubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICBTRFBVdGlscy5wYXJzZUNhbmRpZGF0ZShjYW5kaWRhdGUuY2FuZGlkYXRlKSA6IHt9O1xuICAgICAgICAvLyBJZ25vcmUgQ2hyb21lJ3MgaW52YWxpZCBjYW5kaWRhdGVzIHNpbmNlIEVkZ2UgZG9lcyBub3QgbGlrZSB0aGVtLlxuICAgICAgICBpZiAoY2FuZC5wcm90b2NvbCA9PT0gJ3RjcCcgJiYgKGNhbmQucG9ydCA9PT0gMCB8fCBjYW5kLnBvcnQgPT09IDkpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElnbm9yZSBSVENQIGNhbmRpZGF0ZXMsIHdlIGFzc3VtZSBSVENQLU1VWC5cbiAgICAgICAgaWYgKGNhbmQuY29tcG9uZW50ICYmXG4gICAgICAgICAgICAhKGNhbmQuY29tcG9uZW50ID09PSAnMScgfHwgY2FuZC5jb21wb25lbnQgPT09IDEpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5hZGRSZW1vdGVDYW5kaWRhdGUoY2FuZCk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHRoZSByZW1vdGVEZXNjcmlwdGlvbi5cbiAgICAgICAgdmFyIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyh0aGlzLnJlbW90ZURlc2NyaXB0aW9uLnNkcCk7XG4gICAgICAgIHNlY3Rpb25zW21MaW5lSW5kZXggKyAxXSArPSAoY2FuZC50eXBlID8gY2FuZGlkYXRlLmNhbmRpZGF0ZS50cmltKClcbiAgICAgICAgICAgIDogJ2E9ZW5kLW9mLWNhbmRpZGF0ZXMnKSArICdcXHJcXG4nO1xuICAgICAgICB0aGlzLnJlbW90ZURlc2NyaXB0aW9uLnNkcCA9IHNlY3Rpb25zLmpvaW4oJycpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoYXJndW1lbnRzWzFdLCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTdGF0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgIFsncnRwU2VuZGVyJywgJ3J0cFJlY2VpdmVyJywgJ2ljZUdhdGhlcmVyJywgJ2ljZVRyYW5zcG9ydCcsXG4gICAgICAgICdkdGxzVHJhbnNwb3J0J10uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICBpZiAodHJhbnNjZWl2ZXJbbWV0aG9kXSkge1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0cmFuc2NlaXZlclttZXRob2RdLmdldFN0YXRzKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIGNiID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICBhcmd1bWVudHNbMV07XG4gICAgdmFyIGZpeFN0YXRzVHlwZSA9IGZ1bmN0aW9uKHN0YXQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluYm91bmRydHA6ICdpbmJvdW5kLXJ0cCcsXG4gICAgICAgIG91dGJvdW5kcnRwOiAnb3V0Ym91bmQtcnRwJyxcbiAgICAgICAgY2FuZGlkYXRlcGFpcjogJ2NhbmRpZGF0ZS1wYWlyJyxcbiAgICAgICAgbG9jYWxjYW5kaWRhdGU6ICdsb2NhbC1jYW5kaWRhdGUnLFxuICAgICAgICByZW1vdGVjYW5kaWRhdGU6ICdyZW1vdGUtY2FuZGlkYXRlJ1xuICAgICAgfVtzdGF0LnR5cGVdIHx8IHN0YXQudHlwZTtcbiAgICB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAvLyBzaGltIGdldFN0YXRzIHdpdGggbWFwbGlrZSBzdXBwb3J0XG4gICAgICB2YXIgcmVzdWx0cyA9IG5ldyBNYXAoKTtcbiAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICByZXMuZm9yRWFjaChmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhyZXN1bHQpLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIHJlc3VsdFtpZF0udHlwZSA9IGZpeFN0YXRzVHlwZShyZXN1bHRbaWRdKTtcbiAgICAgICAgICAgIHJlc3VsdHMuc2V0KGlkLCByZXN1bHRbaWRdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNiLCAwLCByZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiBSVENQZWVyQ29ubmVjdGlvbjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvcnRjcGVlcmNvbm5lY3Rpb25fc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gMTc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG52YXIgZmlyZWZveFNoaW0gPSB7XG4gIHNoaW1PblRyYWNrOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uICYmICEoJ29udHJhY2snIGluXG4gICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSwgJ29udHJhY2snLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29udHJhY2s7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24oZikge1xuICAgICAgICAgIGlmICh0aGlzLl9vbnRyYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYWNrJywgdGhpcy5fb250cmFjayk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHRoaXMuX29udHJhY2twb2x5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29udHJhY2sgPSBmKTtcbiAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHRoaXMuX29udHJhY2twb2x5ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5zdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3RyYWNrJyk7XG4gICAgICAgICAgICAgIGV2ZW50LnRyYWNrID0gdHJhY2s7XG4gICAgICAgICAgICAgIGV2ZW50LnJlY2VpdmVyID0ge3RyYWNrOiB0cmFja307XG4gICAgICAgICAgICAgIGV2ZW50LnN0cmVhbXMgPSBbZS5zdHJlYW1dO1xuICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgc2hpbVNvdXJjZU9iamVjdDogZnVuY3Rpb24od2luZG93KSB7XG4gICAgLy8gRmlyZWZveCBoYXMgc3VwcG9ydGVkIG1velNyY09iamVjdCBzaW5jZSBGRjIyLCB1bnByZWZpeGVkIGluIDQyLlxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50ICYmXG4gICAgICAgICEoJ3NyY09iamVjdCcgaW4gd2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICAvLyBTaGltIHRoZSBzcmNPYmplY3QgcHJvcGVydHksIG9uY2UsIHdoZW4gSFRNTE1lZGlhRWxlbWVudCBpcyBmb3VuZC5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSwgJ3NyY09iamVjdCcsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW96U3JjT2JqZWN0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgICAgICAgIHRoaXMubW96U3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNoaW1QZWVyQ29ubmVjdGlvbjogZnVuY3Rpb24od2luZG93KSB7XG4gICAgdmFyIGJyb3dzZXJEZXRhaWxzID0gdXRpbHMuZGV0ZWN0QnJvd3Nlcih3aW5kb3cpO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnIHx8ICEod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uIHx8XG4gICAgICAgIHdpbmRvdy5tb3pSVENQZWVyQ29ubmVjdGlvbikpIHtcbiAgICAgIHJldHVybjsgLy8gcHJvYmFibHkgbWVkaWEucGVlcmNvbm5lY3Rpb24uZW5hYmxlZD1mYWxzZSBpbiBhYm91dDpjb25maWdcbiAgICB9XG4gICAgLy8gVGhlIFJUQ1BlZXJDb25uZWN0aW9uIG9iamVjdC5cbiAgICBpZiAoIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbikge1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24ocGNDb25maWcsIHBjQ29uc3RyYWludHMpIHtcbiAgICAgICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCAzOCkge1xuICAgICAgICAgIC8vIC51cmxzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gRkYgPCAzOC5cbiAgICAgICAgICAvLyBjcmVhdGUgUlRDSWNlU2VydmVycyB3aXRoIGEgc2luZ2xlIHVybC5cbiAgICAgICAgICBpZiAocGNDb25maWcgJiYgcGNDb25maWcuaWNlU2VydmVycykge1xuICAgICAgICAgICAgdmFyIG5ld0ljZVNlcnZlcnMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGNDb25maWcuaWNlU2VydmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YXIgc2VydmVyID0gcGNDb25maWcuaWNlU2VydmVyc1tpXTtcbiAgICAgICAgICAgICAgaWYgKHNlcnZlci5oYXNPd25Qcm9wZXJ0eSgndXJscycpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzZXJ2ZXIudXJscy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgdmFyIG5ld1NlcnZlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBzZXJ2ZXIudXJsc1tqXVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXIudXJsc1tqXS5pbmRleE9mKCd0dXJuJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2VydmVyLnVzZXJuYW1lID0gc2VydmVyLnVzZXJuYW1lO1xuICAgICAgICAgICAgICAgICAgICBuZXdTZXJ2ZXIuY3JlZGVudGlhbCA9IHNlcnZlci5jcmVkZW50aWFsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbmV3SWNlU2VydmVycy5wdXNoKG5ld1NlcnZlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0ljZVNlcnZlcnMucHVzaChwY0NvbmZpZy5pY2VTZXJ2ZXJzW2ldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGNDb25maWcuaWNlU2VydmVycyA9IG5ld0ljZVNlcnZlcnM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgd2luZG93Lm1velJUQ1BlZXJDb25uZWN0aW9uKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlID1cbiAgICAgICAgICB3aW5kb3cubW96UlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlO1xuXG4gICAgICAvLyB3cmFwIHN0YXRpYyBtZXRob2RzLiBDdXJyZW50bHkganVzdCBnZW5lcmF0ZUNlcnRpZmljYXRlLlxuICAgICAgaWYgKHdpbmRvdy5tb3pSVENQZWVyQ29ubmVjdGlvbi5nZW5lcmF0ZUNlcnRpZmljYXRlKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24sICdnZW5lcmF0ZUNlcnRpZmljYXRlJywge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93Lm1velJUQ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IHdpbmRvdy5tb3pSVENTZXNzaW9uRGVzY3JpcHRpb247XG4gICAgICB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlID0gd2luZG93Lm1velJUQ0ljZUNhbmRpZGF0ZTtcbiAgICB9XG5cbiAgICAvLyBzaGltIGF3YXkgbmVlZCBmb3Igb2Jzb2xldGUgUlRDSWNlQ2FuZGlkYXRlL1JUQ1Nlc3Npb25EZXNjcmlwdGlvbi5cbiAgICBbJ3NldExvY2FsRGVzY3JpcHRpb24nLCAnc2V0UmVtb3RlRGVzY3JpcHRpb24nLCAnYWRkSWNlQ2FuZGlkYXRlJ11cbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgICAgdmFyIG5hdGl2ZU1ldGhvZCA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXTtcbiAgICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFyZ3VtZW50c1swXSA9IG5ldyAoKG1ldGhvZCA9PT0gJ2FkZEljZUNhbmRpZGF0ZScpID9cbiAgICAgICAgICAgICAgICB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlIDpcbiAgICAgICAgICAgICAgICB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKShhcmd1bWVudHNbMF0pO1xuICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZU1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgLy8gc3VwcG9ydCBmb3IgYWRkSWNlQ2FuZGlkYXRlKG51bGwgb3IgdW5kZWZpbmVkKVxuICAgIHZhciBuYXRpdmVBZGRJY2VDYW5kaWRhdGUgPVxuICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZTtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFhcmd1bWVudHNbMF0pIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50c1sxXSkge1xuICAgICAgICAgIGFyZ3VtZW50c1sxXS5hcHBseShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmF0aXZlQWRkSWNlQ2FuZGlkYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIC8vIHNoaW0gZ2V0U3RhdHMgd2l0aCBtYXBsaWtlIHN1cHBvcnRcbiAgICB2YXIgbWFrZU1hcFN0YXRzID0gZnVuY3Rpb24oc3RhdHMpIHtcbiAgICAgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gICAgICBPYmplY3Qua2V5cyhzdGF0cykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgbWFwLnNldChrZXksIHN0YXRzW2tleV0pO1xuICAgICAgICBtYXBba2V5XSA9IHN0YXRzW2tleV07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfTtcblxuICAgIHZhciBtb2Rlcm5TdGF0c1R5cGVzID0ge1xuICAgICAgaW5ib3VuZHJ0cDogJ2luYm91bmQtcnRwJyxcbiAgICAgIG91dGJvdW5kcnRwOiAnb3V0Ym91bmQtcnRwJyxcbiAgICAgIGNhbmRpZGF0ZXBhaXI6ICdjYW5kaWRhdGUtcGFpcicsXG4gICAgICBsb2NhbGNhbmRpZGF0ZTogJ2xvY2FsLWNhbmRpZGF0ZScsXG4gICAgICByZW1vdGVjYW5kaWRhdGU6ICdyZW1vdGUtY2FuZGlkYXRlJ1xuICAgIH07XG5cbiAgICB2YXIgbmF0aXZlR2V0U3RhdHMgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFN0YXRzO1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U3RhdHMgPSBmdW5jdGlvbihcbiAgICAgIHNlbGVjdG9yLFxuICAgICAgb25TdWNjLFxuICAgICAgb25FcnJcbiAgICApIHtcbiAgICAgIHJldHVybiBuYXRpdmVHZXRTdGF0cy5hcHBseSh0aGlzLCBbc2VsZWN0b3IgfHwgbnVsbF0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRzKSB7XG4gICAgICAgICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA0OCkge1xuICAgICAgICAgICAgc3RhdHMgPSBtYWtlTWFwU3RhdHMoc3RhdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDUzICYmICFvblN1Y2MpIHtcbiAgICAgICAgICAgIC8vIFNoaW0gb25seSBwcm9taXNlIGdldFN0YXRzIHdpdGggc3BlYy1oeXBoZW5zIGluIHR5cGUgbmFtZXNcbiAgICAgICAgICAgIC8vIExlYXZlIGNhbGxiYWNrIHZlcnNpb24gYWxvbmU7IG1pc2Mgb2xkIHVzZXMgb2YgZm9yRWFjaCBiZWZvcmUgTWFwXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBzdGF0cy5mb3JFYWNoKGZ1bmN0aW9uKHN0YXQpIHtcbiAgICAgICAgICAgICAgICBzdGF0LnR5cGUgPSBtb2Rlcm5TdGF0c1R5cGVzW3N0YXQudHlwZV0gfHwgc3RhdC50eXBlO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgaWYgKGUubmFtZSAhPT0gJ1R5cGVFcnJvcicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIEF2b2lkIFR5cGVFcnJvcjogXCJ0eXBlXCIgaXMgcmVhZC1vbmx5LCBpbiBvbGQgdmVyc2lvbnMuIDM0LTQzaXNoXG4gICAgICAgICAgICAgIHN0YXRzLmZvckVhY2goZnVuY3Rpb24oc3RhdCwgaSkge1xuICAgICAgICAgICAgICAgIHN0YXRzLnNldChpLCBPYmplY3QuYXNzaWduKHt9LCBzdGF0LCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBtb2Rlcm5TdGF0c1R5cGVzW3N0YXQudHlwZV0gfHwgc3RhdC50eXBlXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN0YXRzO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihvblN1Y2MsIG9uRXJyKTtcbiAgICB9O1xuICB9XG59O1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hpbU9uVHJhY2s6IGZpcmVmb3hTaGltLnNoaW1PblRyYWNrLFxuICBzaGltU291cmNlT2JqZWN0OiBmaXJlZm94U2hpbS5zaGltU291cmNlT2JqZWN0LFxuICBzaGltUGVlckNvbm5lY3Rpb246IGZpcmVmb3hTaGltLnNoaW1QZWVyQ29ubmVjdGlvbixcbiAgc2hpbUdldFVzZXJNZWRpYTogcmVxdWlyZSgnLi9nZXR1c2VybWVkaWEnKVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvZmlyZWZveC9maXJlZm94X3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbnZhciBsb2dnaW5nID0gdXRpbHMubG9nO1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHdpbmRvdykge1xuICB2YXIgYnJvd3NlckRldGFpbHMgPSB1dGlscy5kZXRlY3RCcm93c2VyKHdpbmRvdyk7XG4gIHZhciBuYXZpZ2F0b3IgPSB3aW5kb3cgJiYgd2luZG93Lm5hdmlnYXRvcjtcbiAgdmFyIE1lZGlhU3RyZWFtVHJhY2sgPSB3aW5kb3cgJiYgd2luZG93Lk1lZGlhU3RyZWFtVHJhY2s7XG5cbiAgdmFyIHNoaW1FcnJvcl8gPSBmdW5jdGlvbihlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgSW50ZXJuYWxFcnJvcjogJ05vdFJlYWRhYmxlRXJyb3InLFxuICAgICAgICBOb3RTdXBwb3J0ZWRFcnJvcjogJ1R5cGVFcnJvcicsXG4gICAgICAgIFBlcm1pc3Npb25EZW5pZWRFcnJvcjogJ05vdEFsbG93ZWRFcnJvcicsXG4gICAgICAgIFNlY3VyaXR5RXJyb3I6ICdOb3RBbGxvd2VkRXJyb3InXG4gICAgICB9W2UubmFtZV0gfHwgZS5uYW1lLFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICAnVGhlIG9wZXJhdGlvbiBpcyBpbnNlY3VyZS4nOiAnVGhlIHJlcXVlc3QgaXMgbm90IGFsbG93ZWQgYnkgdGhlICcgK1xuICAgICAgICAndXNlciBhZ2VudCBvciB0aGUgcGxhdGZvcm0gaW4gdGhlIGN1cnJlbnQgY29udGV4dC4nXG4gICAgICB9W2UubWVzc2FnZV0gfHwgZS5tZXNzYWdlLFxuICAgICAgY29uc3RyYWludDogZS5jb25zdHJhaW50LFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgKHRoaXMubWVzc2FnZSAmJiAnOiAnKSArIHRoaXMubWVzc2FnZTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIGdldFVzZXJNZWRpYSBjb25zdHJhaW50cyBzaGltLlxuICB2YXIgZ2V0VXNlck1lZGlhXyA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzLCBvblN1Y2Nlc3MsIG9uRXJyb3IpIHtcbiAgICB2YXIgY29uc3RyYWludHNUb0ZGMzdfID0gZnVuY3Rpb24oYykge1xuICAgICAgaWYgKHR5cGVvZiBjICE9PSAnb2JqZWN0JyB8fCBjLnJlcXVpcmUpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9XG4gICAgICB2YXIgcmVxdWlyZSA9IFtdO1xuICAgICAgT2JqZWN0LmtleXMoYykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3JlcXVpcmUnIHx8IGtleSA9PT0gJ2FkdmFuY2VkJyB8fCBrZXkgPT09ICdtZWRpYVNvdXJjZScpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSBjW2tleV0gPSAodHlwZW9mIGNba2V5XSA9PT0gJ29iamVjdCcpID9cbiAgICAgICAgICAgIGNba2V5XSA6IHtpZGVhbDogY1trZXldfTtcbiAgICAgICAgaWYgKHIubWluICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIHIubWF4ICE9PSB1bmRlZmluZWQgfHwgci5leGFjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVxdWlyZS5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHIuZXhhY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygci5leGFjdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHIuIG1pbiA9IHIubWF4ID0gci5leGFjdDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY1trZXldID0gci5leGFjdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIHIuZXhhY3Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHIuaWRlYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGMuYWR2YW5jZWQgPSBjLmFkdmFuY2VkIHx8IFtdO1xuICAgICAgICAgIHZhciBvYyA9IHt9O1xuICAgICAgICAgIGlmICh0eXBlb2Ygci5pZGVhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIG9jW2tleV0gPSB7bWluOiByLmlkZWFsLCBtYXg6IHIuaWRlYWx9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvY1trZXldID0gci5pZGVhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYy5hZHZhbmNlZC5wdXNoKG9jKTtcbiAgICAgICAgICBkZWxldGUgci5pZGVhbDtcbiAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHIpLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIGNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHJlcXVpcmUubGVuZ3RoKSB7XG4gICAgICAgIGMucmVxdWlyZSA9IHJlcXVpcmU7XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgICB9O1xuICAgIGNvbnN0cmFpbnRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgMzgpIHtcbiAgICAgIGxvZ2dpbmcoJ3NwZWM6ICcgKyBKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgICAgaWYgKGNvbnN0cmFpbnRzLmF1ZGlvKSB7XG4gICAgICAgIGNvbnN0cmFpbnRzLmF1ZGlvID0gY29uc3RyYWludHNUb0ZGMzdfKGNvbnN0cmFpbnRzLmF1ZGlvKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25zdHJhaW50cy52aWRlbykge1xuICAgICAgICBjb25zdHJhaW50cy52aWRlbyA9IGNvbnN0cmFpbnRzVG9GRjM3Xyhjb25zdHJhaW50cy52aWRlbyk7XG4gICAgICB9XG4gICAgICBsb2dnaW5nKCdmZjM3OiAnICsgSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEoY29uc3RyYWludHMsIG9uU3VjY2VzcywgZnVuY3Rpb24oZSkge1xuICAgICAgb25FcnJvcihzaGltRXJyb3JfKGUpKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSByZXN1bHQgb2YgZ2V0VXNlck1lZGlhIGFzIGEgUHJvbWlzZS5cbiAgdmFyIGdldFVzZXJNZWRpYVByb21pc2VfID0gZnVuY3Rpb24oY29uc3RyYWludHMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBnZXRVc2VyTWVkaWFfKGNvbnN0cmFpbnRzLCByZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFNoaW0gZm9yIG1lZGlhRGV2aWNlcyBvbiBvbGRlciB2ZXJzaW9ucy5cbiAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyA9IHtnZXRVc2VyTWVkaWE6IGdldFVzZXJNZWRpYVByb21pc2VfLFxuICAgICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oKSB7IH0sXG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigpIHsgfVxuICAgIH07XG4gIH1cbiAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzID1cbiAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcyB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgICB2YXIgaW5mb3MgPSBbXG4gICAgICAgICAgICB7a2luZDogJ2F1ZGlvaW5wdXQnLCBkZXZpY2VJZDogJ2RlZmF1bHQnLCBsYWJlbDogJycsIGdyb3VwSWQ6ICcnfSxcbiAgICAgICAgICAgIHtraW5kOiAndmlkZW9pbnB1dCcsIGRldmljZUlkOiAnZGVmYXVsdCcsIGxhYmVsOiAnJywgZ3JvdXBJZDogJyd9XG4gICAgICAgICAgXTtcbiAgICAgICAgICByZXNvbHZlKGluZm9zKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNDEpIHtcbiAgICAvLyBXb3JrIGFyb3VuZCBodHRwOi8vYnVnemlsLmxhLzExNjk2NjVcbiAgICB2YXIgb3JnRW51bWVyYXRlRGV2aWNlcyA9XG4gICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcy5iaW5kKG5hdmlnYXRvci5tZWRpYURldmljZXMpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG9yZ0VudW1lcmF0ZURldmljZXMoKS50aGVuKHVuZGVmaW5lZCwgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5uYW1lID09PSAnTm90Rm91bmRFcnJvcicpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbiAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA0OSkge1xuICAgIHZhciBvcmlnR2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEuXG4gICAgICAgIGJpbmQobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyk7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEgPSBmdW5jdGlvbihjKSB7XG4gICAgICByZXR1cm4gb3JpZ0dldFVzZXJNZWRpYShjKS50aGVuKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICAvLyBXb3JrIGFyb3VuZCBodHRwczovL2J1Z3ppbC5sYS84MDIzMjZcbiAgICAgICAgaWYgKGMuYXVkaW8gJiYgIXN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCB8fFxuICAgICAgICAgICAgYy52aWRlbyAmJiAhc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICAgIHRyYWNrLnN0b3AoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKCdUaGUgb2JqZWN0IGNhbiBub3QgYmUgZm91bmQgaGVyZS4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05vdEZvdW5kRXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgICAgfSwgZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoc2hpbUVycm9yXyhlKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIGlmICghKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPiA1NSAmJlxuICAgICAgJ2F1dG9HYWluQ29udHJvbCcgaW4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRTdXBwb3J0ZWRDb25zdHJhaW50cygpKSkge1xuICAgIHZhciByZW1hcCA9IGZ1bmN0aW9uKG9iaiwgYSwgYikge1xuICAgICAgaWYgKGEgaW4gb2JqICYmICEoYiBpbiBvYmopKSB7XG4gICAgICAgIG9ialtiXSA9IG9ialthXTtcbiAgICAgICAgZGVsZXRlIG9ialthXTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIG5hdGl2ZUdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhLlxuICAgICAgICBiaW5kKG5hdmlnYXRvci5tZWRpYURldmljZXMpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oYykge1xuICAgICAgaWYgKHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYy5hdWRpbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYykpO1xuICAgICAgICByZW1hcChjLmF1ZGlvLCAnYXV0b0dhaW5Db250cm9sJywgJ21vekF1dG9HYWluQ29udHJvbCcpO1xuICAgICAgICByZW1hcChjLmF1ZGlvLCAnbm9pc2VTdXBwcmVzc2lvbicsICdtb3pOb2lzZVN1cHByZXNzaW9uJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmF0aXZlR2V0VXNlck1lZGlhKGMpO1xuICAgIH07XG5cbiAgICBpZiAoTWVkaWFTdHJlYW1UcmFjayAmJiBNZWRpYVN0cmVhbVRyYWNrLnByb3RvdHlwZS5nZXRTZXR0aW5ncykge1xuICAgICAgdmFyIG5hdGl2ZUdldFNldHRpbmdzID0gTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUuZ2V0U2V0dGluZ3M7XG4gICAgICBNZWRpYVN0cmVhbVRyYWNrLnByb3RvdHlwZS5nZXRTZXR0aW5ncyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb2JqID0gbmF0aXZlR2V0U2V0dGluZ3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgcmVtYXAob2JqLCAnbW96QXV0b0dhaW5Db250cm9sJywgJ2F1dG9HYWluQ29udHJvbCcpO1xuICAgICAgICByZW1hcChvYmosICdtb3pOb2lzZVN1cHByZXNzaW9uJywgJ25vaXNlU3VwcHJlc3Npb24nKTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKE1lZGlhU3RyZWFtVHJhY2sgJiYgTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUuYXBwbHlDb25zdHJhaW50cykge1xuICAgICAgdmFyIG5hdGl2ZUFwcGx5Q29uc3RyYWludHMgPSBNZWRpYVN0cmVhbVRyYWNrLnByb3RvdHlwZS5hcHBseUNvbnN0cmFpbnRzO1xuICAgICAgTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUuYXBwbHlDb25zdHJhaW50cyA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgaWYgKHRoaXMua2luZCA9PT0gJ2F1ZGlvJyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjKSk7XG4gICAgICAgICAgcmVtYXAoYywgJ2F1dG9HYWluQ29udHJvbCcsICdtb3pBdXRvR2FpbkNvbnRyb2wnKTtcbiAgICAgICAgICByZW1hcChjLCAnbm9pc2VTdXBwcmVzc2lvbicsICdtb3pOb2lzZVN1cHByZXNzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hdGl2ZUFwcGx5Q29uc3RyYWludHMuYXBwbHkodGhpcywgW2NdKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBmdW5jdGlvbihjb25zdHJhaW50cywgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA0NCkge1xuICAgICAgcmV0dXJuIGdldFVzZXJNZWRpYV8oY29uc3RyYWludHMsIG9uU3VjY2Vzcywgb25FcnJvcik7XG4gICAgfVxuICAgIC8vIFJlcGxhY2UgRmlyZWZveCA0NCsncyBkZXByZWNhdGlvbiB3YXJuaW5nIHdpdGggdW5wcmVmaXhlZCB2ZXJzaW9uLlxuICAgIHV0aWxzLmRlcHJlY2F0ZWQoJ25hdmlnYXRvci5nZXRVc2VyTWVkaWEnLFxuICAgICAgICAnbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEnKTtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvZmlyZWZveC9nZXR1c2VybWVkaWEuanNcbi8vIG1vZHVsZSBpZCA9IDE3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0JztcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbnZhciBzYWZhcmlTaGltID0ge1xuICAvLyBUT0RPOiBEckFsZXgsIHNob3VsZCBiZSBoZXJlLCBkb3VibGUgY2hlY2sgYWdhaW5zdCBMYXlvdXRUZXN0c1xuXG4gIC8vIFRPRE86IG9uY2UgdGhlIGJhY2stZW5kIGZvciB0aGUgbWFjIHBvcnQgaXMgZG9uZSwgYWRkLlxuICAvLyBUT0RPOiBjaGVjayBmb3Igd2Via2l0R1RLK1xuICAvLyBzaGltUGVlckNvbm5lY3Rpb246IGZ1bmN0aW9uKCkgeyB9LFxuXG4gIHNoaW1Mb2NhbFN0cmVhbXNBUEk6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0JyB8fCAhd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghKCdnZXRMb2NhbFN0cmVhbXMnIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldExvY2FsU3RyZWFtcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2xvY2FsU3RyZWFtcykge1xuICAgICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbFN0cmVhbXM7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoISgnZ2V0U3RyZWFtQnlJZCcgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U3RyZWFtQnlJZCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fbG9jYWxTdHJlYW1zKSB7XG4gICAgICAgICAgdGhpcy5fbG9jYWxTdHJlYW1zLmZvckVhY2goZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgICAgICBpZiAoc3RyZWFtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBzdHJlYW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3JlbW90ZVN0cmVhbXMpIHtcbiAgICAgICAgICB0aGlzLl9yZW1vdGVTdHJlYW1zLmZvckVhY2goZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgICAgICBpZiAoc3RyZWFtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBzdHJlYW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICghKCdhZGRTdHJlYW0nIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICB2YXIgX2FkZFRyYWNrID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjaztcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgIGlmICghdGhpcy5fbG9jYWxTdHJlYW1zKSB7XG4gICAgICAgICAgdGhpcy5fbG9jYWxTdHJlYW1zID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2xvY2FsU3RyZWFtcy5pbmRleE9mKHN0cmVhbSkgPT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5fbG9jYWxTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgICAgX2FkZFRyYWNrLmNhbGwoc2VsZiwgdHJhY2ssIHN0cmVhbSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjayA9IGZ1bmN0aW9uKHRyYWNrLCBzdHJlYW0pIHtcbiAgICAgICAgaWYgKHN0cmVhbSkge1xuICAgICAgICAgIGlmICghdGhpcy5fbG9jYWxTdHJlYW1zKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NhbFN0cmVhbXMgPSBbc3RyZWFtXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2xvY2FsU3RyZWFtcy5pbmRleE9mKHN0cmVhbSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NhbFN0cmVhbXMucHVzaChzdHJlYW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfYWRkVHJhY2suY2FsbCh0aGlzLCB0cmFjaywgc3RyZWFtKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICghKCdyZW1vdmVTdHJlYW0nIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICBpZiAoIXRoaXMuX2xvY2FsU3RyZWFtcykge1xuICAgICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2xvY2FsU3RyZWFtcy5pbmRleE9mKHN0cmVhbSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbG9jYWxTdHJlYW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHRyYWNrcyA9IHN0cmVhbS5nZXRUcmFja3MoKTtcbiAgICAgICAgdGhpcy5nZXRTZW5kZXJzKCkuZm9yRWFjaChmdW5jdGlvbihzZW5kZXIpIHtcbiAgICAgICAgICBpZiAodHJhY2tzLmluZGV4T2Yoc2VuZGVyLnRyYWNrKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlVHJhY2soc2VuZGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHNoaW1SZW1vdGVTdHJlYW1zQVBJOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcgfHwgIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoISgnZ2V0UmVtb3RlU3RyZWFtcycgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0UmVtb3RlU3RyZWFtcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVtb3RlU3RyZWFtcyA/IHRoaXMuX3JlbW90ZVN0cmVhbXMgOiBbXTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICghKCdvbmFkZHN0cmVhbScgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLCAnb25hZGRzdHJlYW0nLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29uYWRkc3RyZWFtO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICBpZiAodGhpcy5fb25hZGRzdHJlYW0pIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWRkc3RyZWFtJywgdGhpcy5fb25hZGRzdHJlYW0pO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29uYWRkc3RyZWFtcG9seSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignYWRkc3RyZWFtJywgdGhpcy5fb25hZGRzdHJlYW0gPSBmKTtcbiAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYWNrJywgdGhpcy5fb25hZGRzdHJlYW1wb2x5ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIHN0cmVhbSA9IGUuc3RyZWFtc1swXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fcmVtb3RlU3RyZWFtcykge1xuICAgICAgICAgICAgICB0aGlzLl9yZW1vdGVTdHJlYW1zID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fcmVtb3RlU3RyZWFtcy5pbmRleE9mKHN0cmVhbSkgPj0gMCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9yZW1vdGVTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnYWRkc3RyZWFtJyk7XG4gICAgICAgICAgICBldmVudC5zdHJlYW0gPSBlLnN0cmVhbXNbMF07XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgc2hpbUNhbGxiYWNrc0FQSTogZnVuY3Rpb24od2luZG93KSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnIHx8ICF3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHByb3RvdHlwZSA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGU7XG4gICAgdmFyIGNyZWF0ZU9mZmVyID0gcHJvdG90eXBlLmNyZWF0ZU9mZmVyO1xuICAgIHZhciBjcmVhdGVBbnN3ZXIgPSBwcm90b3R5cGUuY3JlYXRlQW5zd2VyO1xuICAgIHZhciBzZXRMb2NhbERlc2NyaXB0aW9uID0gcHJvdG90eXBlLnNldExvY2FsRGVzY3JpcHRpb247XG4gICAgdmFyIHNldFJlbW90ZURlc2NyaXB0aW9uID0gcHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uO1xuICAgIHZhciBhZGRJY2VDYW5kaWRhdGUgPSBwcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlO1xuXG4gICAgcHJvdG90eXBlLmNyZWF0ZU9mZmVyID0gZnVuY3Rpb24oc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgIHZhciBvcHRpb25zID0gKGFyZ3VtZW50cy5sZW5ndGggPj0gMikgPyBhcmd1bWVudHNbMl0gOiBhcmd1bWVudHNbMF07XG4gICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZU9mZmVyLmFwcGx5KHRoaXMsIFtvcHRpb25zXSk7XG4gICAgICBpZiAoIWZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIHByb21pc2UudGhlbihzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjayk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcblxuICAgIHByb3RvdHlwZS5jcmVhdGVBbnN3ZXIgPSBmdW5jdGlvbihzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgdmFyIG9wdGlvbnMgPSAoYXJndW1lbnRzLmxlbmd0aCA+PSAyKSA/IGFyZ3VtZW50c1syXSA6IGFyZ3VtZW50c1swXTtcbiAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlQW5zd2VyLmFwcGx5KHRoaXMsIFtvcHRpb25zXSk7XG4gICAgICBpZiAoIWZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIHByb21pc2UudGhlbihzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjayk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcblxuICAgIHZhciB3aXRoQ2FsbGJhY2sgPSBmdW5jdGlvbihkZXNjcmlwdGlvbiwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgIHZhciBwcm9taXNlID0gc2V0TG9jYWxEZXNjcmlwdGlvbi5hcHBseSh0aGlzLCBbZGVzY3JpcHRpb25dKTtcbiAgICAgIGlmICghZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgcHJvbWlzZS50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9O1xuICAgIHByb3RvdHlwZS5zZXRMb2NhbERlc2NyaXB0aW9uID0gd2l0aENhbGxiYWNrO1xuXG4gICAgd2l0aENhbGxiYWNrID0gZnVuY3Rpb24oZGVzY3JpcHRpb24sIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IHNldFJlbW90ZURlc2NyaXB0aW9uLmFwcGx5KHRoaXMsIFtkZXNjcmlwdGlvbl0pO1xuICAgICAgaWYgKCFmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBwcm9taXNlLnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG4gICAgcHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID0gd2l0aENhbGxiYWNrO1xuXG4gICAgd2l0aENhbGxiYWNrID0gZnVuY3Rpb24oY2FuZGlkYXRlLCBzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgdmFyIHByb21pc2UgPSBhZGRJY2VDYW5kaWRhdGUuYXBwbHkodGhpcywgW2NhbmRpZGF0ZV0pO1xuICAgICAgaWYgKCFmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBwcm9taXNlLnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG4gICAgcHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZSA9IHdpdGhDYWxsYmFjaztcbiAgfSxcbiAgc2hpbUdldFVzZXJNZWRpYTogZnVuY3Rpb24od2luZG93KSB7XG4gICAgdmFyIG5hdmlnYXRvciA9IHdpbmRvdyAmJiB3aW5kb3cubmF2aWdhdG9yO1xuXG4gICAgaWYgKCFuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhKSB7XG4gICAgICBpZiAobmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSkge1xuICAgICAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYS5iaW5kKG5hdmlnYXRvcik7XG4gICAgICB9IGVsc2UgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiZcbiAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICAgICAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oY29uc3RyYWludHMsIGNiLCBlcnJjYikge1xuICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKVxuICAgICAgICAgIC50aGVuKGNiLCBlcnJjYik7XG4gICAgICAgIH0uYmluZChuYXZpZ2F0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2hpbVJUQ0ljZVNlcnZlclVybHM6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIC8vIG1pZ3JhdGUgZnJvbSBub24tc3BlYyBSVENJY2VTZXJ2ZXIudXJsIHRvIFJUQ0ljZVNlcnZlci51cmxzXG4gICAgdmFyIE9yaWdQZWVyQ29ubmVjdGlvbiA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbjtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cykge1xuICAgICAgaWYgKHBjQ29uZmlnICYmIHBjQ29uZmlnLmljZVNlcnZlcnMpIHtcbiAgICAgICAgdmFyIG5ld0ljZVNlcnZlcnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwY0NvbmZpZy5pY2VTZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHNlcnZlciA9IHBjQ29uZmlnLmljZVNlcnZlcnNbaV07XG4gICAgICAgICAgaWYgKCFzZXJ2ZXIuaGFzT3duUHJvcGVydHkoJ3VybHMnKSAmJlxuICAgICAgICAgICAgICBzZXJ2ZXIuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICB1dGlscy5kZXByZWNhdGVkKCdSVENJY2VTZXJ2ZXIudXJsJywgJ1JUQ0ljZVNlcnZlci51cmxzJyk7XG4gICAgICAgICAgICBzZXJ2ZXIgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNlcnZlcikpO1xuICAgICAgICAgICAgc2VydmVyLnVybHMgPSBzZXJ2ZXIudXJsO1xuICAgICAgICAgICAgZGVsZXRlIHNlcnZlci51cmw7XG4gICAgICAgICAgICBuZXdJY2VTZXJ2ZXJzLnB1c2goc2VydmVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3SWNlU2VydmVycy5wdXNoKHBjQ29uZmlnLmljZVNlcnZlcnNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwY0NvbmZpZy5pY2VTZXJ2ZXJzID0gbmV3SWNlU2VydmVycztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgT3JpZ1BlZXJDb25uZWN0aW9uKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKTtcbiAgICB9O1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgPSBPcmlnUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlO1xuICAgIC8vIHdyYXAgc3RhdGljIG1ldGhvZHMuIEN1cnJlbnRseSBqdXN0IGdlbmVyYXRlQ2VydGlmaWNhdGUuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiwgJ2dlbmVyYXRlQ2VydGlmaWNhdGUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gT3JpZ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIEV4cG9zZSBwdWJsaWMgbWV0aG9kcy5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzaGltQ2FsbGJhY2tzQVBJOiBzYWZhcmlTaGltLnNoaW1DYWxsYmFja3NBUEksXG4gIHNoaW1Mb2NhbFN0cmVhbXNBUEk6IHNhZmFyaVNoaW0uc2hpbUxvY2FsU3RyZWFtc0FQSSxcbiAgc2hpbVJlbW90ZVN0cmVhbXNBUEk6IHNhZmFyaVNoaW0uc2hpbVJlbW90ZVN0cmVhbXNBUEksXG4gIHNoaW1HZXRVc2VyTWVkaWE6IHNhZmFyaVNoaW0uc2hpbUdldFVzZXJNZWRpYSxcbiAgc2hpbVJUQ0ljZVNlcnZlclVybHM6IHNhZmFyaVNoaW0uc2hpbVJUQ0ljZVNlcnZlclVybHNcbiAgLy8gVE9ET1xuICAvLyBzaGltUGVlckNvbm5lY3Rpb246IHNhZmFyaVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9zYWZhcmkvc2FmYXJpX3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9