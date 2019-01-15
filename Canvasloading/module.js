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

var ModuleName = 'loadingAnimation';
var ModuleDefaults = {
	$canvas: null,
	$input: null,
	width: 320,
	height: 320,
	_img: null,
	_imgW: 0,
	_imgH: 0,
	originWidth: 0,
	originHeight: 0
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
		this.readFile = this.readFile.bind(this);
		this.buildBox = this.buildBox.bind(this);
		this.clearCanvas = this.clearCanvas.bind(this);
		this.copy = this.copy.bind(this);
	}

	_createClass(Module, [{
		key: 'init',
		value: function init() {
			this.initCanvas();
		}
	}, {
		key: 'initCanvas',
		value: function initCanvas() {
			console.log('initCanvas....');
			var opt = this.option;
			opt.$canvas.ctx = opt.$canvas[0].getContext('2d');
			opt.$canvas.width = opt.width;
			opt.$canvas.height = opt.height;
			opt.$canvas.attr({
				'width': opt.$canvas.width,
				'height': opt.$canvas.height
			});
			this.readFile();
		}
	}, {
		key: 'readFile',
		value: function readFile() {
			if (typeof FileReader === 'undefined') {
				alert('瀏覽器不支援，請升級版本或更換瀏覽器');
			} else {
				var readFileload = function readFileload() {
					var files = this.files;
					_handleFiles(files);
				};

				var writeTextload = function writeTextload() {
					console.log(self.option.$input[0]);
				};

				var _handleFiles = function _handleFiles(files) {
					for (var i = 0; i < files.length; i++) {
						var file = files[i];
						var imageType = /image.*/;
						if (!file.type.match(imageType)) {
							continue;
						}
						var reader = new FileReader();
						reader.readAsDataURL(file);
						reader.onload = function () {
							var src = this.result;
							self.buildBox(src);
						};
					}
				};

				this.fileUpload = $(fileUpload);
				// this.inputText = this.option.$input;			
				this.fileUpload[0].addEventListener('change', readFileload, false);
				this.option.$input[0].addEventListener('change', writeTextload, false);
				var self = this;
			}
		}
	}, {
		key: 'buildBox',
		value: function buildBox(src) {
			this.option._img = new Image();
			this.option._img.src = src;
			var self = this;
			this.option._img.onload = function () {
				self.option._imgW = this.width;
				self.option._imgH = this.height;
				// 目標尺寸
				var targetWidth = self.option.originWidth;
				var targetHeight = self.option.originHeight;
				// 按照canavs尺寸调整大小
				if (targetWidth > targetHeight) {
					targetWidth = self.option.width;
					targetHeight = targetWidth * (self.option._imgH / self.option._imgW);
				} else {
					targetHeight = self.option.height;
					targetWidth = targetHeight * (self.option._imgW / self.option._imgH);
				}
				self.clearCanvas();
				self.copy(targetWidth, targetHeight);
				// self.option.$canvas.ctx.drawImage(self.option._img, 0, 0, targetWidth, targetHeight);
			};
		}
	}, {
		key: 'clearCanvas',
		value: function clearCanvas() {
			var opt = this.option;
			if (opt.$canvas) {
				opt.$canvas.ctx.clearRect(0, 0, opt.width, opt.height);
			}
		}
	}, {
		key: 'copy',
		value: function copy(targetWidth, targetHeight) {
			var imgData = this.option.$canvas.ctx.getImageData(0, 0, targetWidth, targetHeight);
			var imageBuffer = imgData.data;
			var points = {};
			console.log('imgData', imgData);
			var red = void 0,
			    green = void 0,
			    blue = void 0,
			    alpha = void 0; // 定義各顏色的暫存變數
			var arg = void 0;
			var pos = [];
			var index = 0;
			var x = 0;
			var y = 0;
			var gap = 13;

			// 注意這裡的 i, 每次迭代時為 i += 4, 而非 i++
			for (var i = 0; i < imageBuffer.length; i += 4) {
				// 在imageBuffer之中每4個元素分別代表著每個像素的red, green, blue, alpha數值(0 ~ 255)
				red = imageBuffer[i];
				green = imageBuffer[i + 1];
				blue = imageBuffer[i + 2];
				alpha = imageBuffer[i + 3];

				// 將畫布中每個像素的rgb值設定為rgb平均值，能使圖片灰階化
				arg = (red + green + blue) / 3;
				imageBuffer[i] = arg;
				imageBuffer[i + 1] = arg;
				imageBuffer[i + 2] = arg;
				imageBuffer[i + 3] = alpha;

				pos.push({
					x: x,
					y: y
				});

				index = Math.floor(i / 4);
				x = index % 170;
				y = Math.floor(index / 170);
				if (x >= 170 - gap) {
					i += gap * 4 * 170;
				}
				points = pos;
			}
			this.option.$canvas.ctx.putImageData(imgData, 320, 320);
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