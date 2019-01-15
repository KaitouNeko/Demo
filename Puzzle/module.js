/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _module = __webpack_require__(4);

var root = function (root) {
	if ((typeof root === 'undefined' ? 'undefined' : _typeof(root)) === 'object' && (root.self === root || root.global === global) && root) {
		return root;
	}
}(self || global || {});

var $ = function ($) {
	if (typeof $ === 'function') {
		return $;
	} else {
		throw 'You must import jQuery';
	}
}(root.jQuery);

$.fn[_module.ModuleName] = function () {
	var module = void 0;
	var args = Array.prototype.slice.call(arguments, 0);
	var method = args[0];
	var options = args.slice(1).length <= 0 ? undefined : args.slice(1, args.length);;
	var isReturnMethod = this.length === 1 && typeof method === 'string' && _module.ModuleReturns.indexOf(method) !== -1;
	var methodRunner = function methodRunner(method, options, uesReturn) {
		var $this = $(this);
		var module = $this.data(_module.ModuleName);
		if (!!module) {
			if (typeof method == 'string' && !uesReturn) {
				module[method].apply(module, options);
			} else if (typeof method == 'string' && !!uesReturn) {
				return module[method].apply(module, options);
			} else {
				throw 'unsupported options!';
			}
		} else {
			throw 'You must run first this plugin!';
		}
	};
	if (isReturnMethod) {
		return methodRunner.call(this, method, options, isReturnMethod);
	} else {
		return this.each(function () {
			var $this = $(this);
			var module = $this.data(_module.ModuleName);
			var opts = null;
			if (!!module) {
				methodRunner.call(this, method, options);
			} else {
				opts = $.extend(true, {}, _module.ModuleDefaults, (typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' && method, (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options);
				module = new _module.Module(this, opts);
				$this.data(_module.ModuleName, module);
				module.init();
			}
		});
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleName = 'puzzle';
var ModuleDefaults = {
	$canvas: null,
	$gameBox: null,
	$imglist: null,
	_img: null,
	_src: null,
	_column: 4,
	_row: 4,
	_total: 0,
	_bas64list: []
};
var ModuleReturns = ['output', 'methods'];

var Module = function () {
	function Module(ele, options) {
		_classCallCheck(this, Module);

		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
		this.init = this.init.bind(this);
		this.initCanvas = this.initCanvas.bind(this);
		this.setGamebox = this.setGamebox.bind(this);
		this.createHtml = this.createHtml.bind(this);
		this.hideCanvas = this.hideCanvas.bind(this);
		this.addEvent = this.addEvent.bind(this);
	}

	_createClass(Module, [{
		key: 'init',
		value: function init() {
			this.initCanvas();
		}
	}, {
		key: 'initCanvas',
		value: function initCanvas() {
			var opt = this.option;
			opt.$canvas.ctx = opt.$canvas[0].getContext('2d');
			this.setGamebox();
		}
	}, {
		key: 'setGamebox',
		value: function setGamebox() {
			var opt = this.option;
			var self = this;
			opt._img = new Image();
			opt._img.onload = function () {
				opt.$canvas[0].width = opt._img.width / opt._column;
				opt.$canvas[0].height = opt._img.height / opt._row;
				for (var i = 0; i < parseInt(opt._column); i++) {
					for (var j = 0; j < parseInt(opt._row); j++) {
						opt.$canvas.ctx.drawImage(this, opt.$canvas[0].width * j, opt.$canvas[0].height * i, opt.$canvas[0].width, opt.$canvas[0].height, 5, 5, opt.$canvas[0].width, opt.$canvas[0].height);
						var base64Url = opt.$canvas[0].toDataURL('image/png');
						opt._bas64list.push(base64Url);
					}
				}
				self.createHtml(opt);
				self.hideCanvas();
				self.addEvent();
			};
			opt._img.crossOrigin = 'anonymous';
			opt._img.src = opt._src;
		}
	}, {
		key: 'createHtml',
		value: function createHtml(opt) {
			var num = opt._bas64list.length;
			var numList = [];
			// let wdth = parseInt($(window).width() / opt._column);
			// let wdthtext = 'width:' + wdth + 'px';
			for (var i = 0; i < num; i++) {
				var rnd = Math.floor(Math.random() * num);
				if (numList.indexOf(rnd) === -1) {
					numList.push(rnd);
					opt.$gameBox.append($('<img/>', {
						src: opt._bas64list[rnd],
						alt: rnd
					}));
				} else {
					i -= 1;
				}
			}
		}
	}, {
		key: 'hideCanvas',
		value: function hideCanvas() {
			this.option.$canvas.hide();
		}
	}, {
		key: 'addEvent',
		value: function addEvent() {
			var isclick = false;
			var firstclick = null;
			var self = this;
			$('body').on('touchstart', function (e) {
				if (e.cancelable) {
					if (!e.defaultPrevented) {
						e.preventDefault();
					}
				}
			}, false);

			$("img").on("click", function (e) {
				var $this = $(this);
				if (e.cancelable) {
					if (!e.defaultPrevented) {
						e.preventDefault();
					}
				}
				toggle(self);
				function toggle(self) {
					if (isclick == true) {
						var firstUrl = firstclick[0].src;
						var secondUrl = $this[0].src;
						$this[0].src = firstUrl;
						firstclick[0].src = secondUrl;
						firstclick.css('opacity', 1);
						isclick = false;
					} else {
						firstclick = $this;
						isclick = true;
						$this.css('opacity', 0.2);
					}
				}
			});
			// $(window).resize(function () {
			// 	let wdth = parseInt($(window).width() / self.option._column);
			// 	let wdthtext = 'width:' + wdth + 'px';
			// 	console.log(wdth)
			// 	$("img").attr('style', wdthtext)
			// });
		}
	}]);

	return Module;
}();

;

exports.ModuleName = ModuleName;
exports.ModuleDefaults = ModuleDefaults;
exports.ModuleReturns = ModuleReturns;
exports.Module = Module;

/***/ })
/******/ ]);