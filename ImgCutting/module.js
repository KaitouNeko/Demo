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

var ModuleName = 'imgupload';
var ModuleDefaults = {
	imgBoxSizeW: 0,
	imgBoxSizeH: 0,
	imgCropSizeW: 0,
	imgCropSizeH: 0,
	imgBox: '#imgbox',

	originWidth: 0, // 圖片原始尺寸寬
	originHeight: 0, // 圖片原始尺寸高
	$canvas: null,
	$canvasW: 0,
	$canvasH: 0,
	$canvas2d: null,

	$canvasCrop: null,
	fileUpload: '#fileUpload',
	_img: null,
	imgH: 0,
	imgW: 0,
	imgScale: 0,
	imgSx: 0,
	imgSy: 0,

	gesturestart: new CustomEvent('gesturestart'),
	gesturechange: new CustomEvent('gesturestart'),
	gestureend: new CustomEvent('gesturestart'),
	start: [],
	mouseTag: false
};
var ModuleReturns = ['output', 'methods'];

var Module = function () {
	function Module(ele, options) {
		_classCallCheck(this, Module);

		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
		//Api接口設定
		this.imgbox = $(imgBox);
		//function綁定
		this.init = this.init.bind(this);
		this.initCanvas = this.initCanvas.bind(this);
		this.drawShae = this.drawShae.bind(this);
		this.readFile = this.readFile.bind(this);
		this.buildBox = this.buildBox.bind(this);
		this.clearCanvas = this.clearCanvas.bind(this);
		this.drawCanvasCrop = this.drawCanvasCrop.bind(this);
		this.eventCanvas = this.eventCanvas.bind(this);
		this.checkCanvasXY = this.checkCanvasXY.bind(this);
		this.resizeCanvas = this.resizeCanvas.bind(this);
		this.save = this.save.bind(this);
		// this.setGesture = this.setGesture.bind(this);
	}

	_createClass(Module, [{
		key: 'init',
		value: function init() {
			var self = this;
			this.initCanvas();
			// this.setGesture();
			this.readFile();
		}
	}, {
		key: 'initCanvas',
		value: function initCanvas() {
			console.log('initCanvas Start...');
			var opt = this.option;
			this.option.$canvasW = opt.imgBoxSizeW;
			this.option.$canvasH = opt.imgBoxSizeH;
			this.imgbox.css({
				'width': opt.imgBoxSizeW,
				'height': opt.imgBoxSizeH
			});
			opt.$canvas = $('<canvas width="' + opt.$canvasW + '" height="' + opt.$canvasH + '"></canvas>');
			this.imgbox.append(opt.$canvas);
			opt.$canvas.ctx = opt.$canvas[0].getContext('2d');
			this.drawShae(opt.$canvas, "rgba(0,0,0,0.3)", opt.$canvasW, opt.$canvasH);

			// 剪裁框
			if (opt.imgCropSizeW == 0 || opt.imgCropSizeH == 0) {
				opt.imgCropSizeW = Math.round(opt.imgBoxSizeW * 0.7 * 3 / 4);
				opt.imgCropSizeH = Math.round(opt.imgBoxSizeH * 0.7 * 3 / 4);
			}
			$('#p3').append('<b>裁切大小: ' + opt.imgCropSizeW + "x" + opt.imgCropSizeH + '</b>');
			opt.$canvasCrop = $('<canvas width="' + opt.imgCropSizeW + '" height="' + opt.imgCropSizeH + '"></canvas>');
			this.imgbox.append(opt.$canvasCrop);
			opt.$canvasCrop.ctx = opt.$canvasCrop[0].getContext('2d');
			this.drawShae(opt.$canvasCrop, '#e8e8e8', opt.imgCropSizeW, opt.imgCropSizeH);
		}
	}, {
		key: 'drawShae',
		value: function drawShae(self, color, width, height) {
			self.ctx.beginPath();
			self.ctx.fillStyle = color;
			self.ctx.fillRect(0, 0, width, height);
		}
	}, {
		key: 'readFile',
		value: function readFile() {
			console.log('readFile Start...');
			var self = this;
			if (typeof FileReader === 'undefined') {
				alert('瀏覽器不支援，請升級版本或更換瀏覽器');
			} else {
				this.fileUpload = $(fileUpload);
				this.fileUpload[0].addEventListener('change', readFileload, false);
				this.fileUpload[0].addEventListener("dragenter", dragenter, false);
				this.fileUpload[0].addEventListener("dragover", dragover, false);
				this.fileUpload[0].addEventListener("drop", drop, false);
			}
			function readFileload() {
				var files = this.files;
				$("#save").click(function () {
					self.save();
				});
				$(".alink").click(function () {
					var _this = this;
					self.download(_this);
				});
				handleFiles(files);
			}
			function dragenter(e) {
				e.stopPropagation();
			}
			function dragover(e) {
				e.stopPropagation();
				e.preventDefault();
			}
			function drop(e) {
				var dt = this.dataTransfer;
				var files = this.files;
				handleFiles(files);
			}
			function handleFiles(files) {
				console.log('handleFiles', files);
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
						//绑定Canvas事件
						self.eventCanvas();
					};
				}
			}
		}
		// 生成預覽圖

	}, {
		key: 'buildBox',
		value: function buildBox(src) {
			this.option._img = new Image();
			this.option._img.src = src;
			var self = this;
			this.option._img.onload = function () {
				// 圖片原始尺寸
				self.option.originWidth = this.width;
				self.option.originHeight = this.height;
				self.option.imgScale = $(this)[0].width / $(this)[0].height;
				drawImg(self);
			};
			function drawImg(self) {
				console.log('圖片原始尺寸 drawImg Start...', self.option.originWidth + "x" + self.option.originHeight);
				var originWidth = self.option.originWidth;
				var originHeight = self.option.originHeight;
				if (self.option._img.width < self.imgCropSizeW) {
					alter('圖片長不可小於剪裁區 ' + imgCropSizeW + 'px');
					return false;
				}
				if (self.option._img.height < self.imgCropSizeH) {
					alter('圖片高不可小於剪裁區 ' + imgCropSizeH + 'px');
					return false;
				}
				if (self.option.imgScale > 1) {
					if (self.option._img.width > self.option.imgBoxSizeW) {
						self.option._img.width = self.option.imgBoxSizeW;
						self.option._img.height = self.option._img.width / self.option.imgScale;
					}
				} else {
					if (self.option._img.height > self.option.imgBoxSizeH) {
						self.option._img.height = self.option.imgBoxSizeH;
						self.option._img.width = self.option._img.height * self.option.imgScale;
					}
				}
				//剪裁框的初始座標(Sx,Sy) 
				self.option.imgSx = self.option.$canvasW / 2 - self.option._img.width / 2;
				self.option.imgSy = self.option.$canvasW / 2 - self.option._img.height / 2;
				//原始圖初始長高
				self.option.imgW = self.option._img.width;
				self.option.imgH = self.option._img.height;
				//清除畫布
				self.clearCanvas();
				//顯示imgbox圖
				self.option.$canvas.ctx.drawImage(self.option._img, self.option.imgSx, self.option.imgSy, self.option._img.width, self.option._img.height);
				self.drawShae(self.option.$canvas, "rgba(0,0,0,0.3)", self.option.$canvasW, self.option.$canvasH);
				//剪裁區
				self.drawCanvasCrop();
			}
		}
	}, {
		key: 'clearCanvas',
		value: function clearCanvas() {
			// console.log('clearCanvas Start...')
			if (this.option.$canvas) {
				this.option.$canvas.ctx.clearRect(0, 0, this.option.$canvasW, this.option.$canvasH);
			}
			if (this.option.$canvasCrop) {
				this.option.$canvasCrop.ctx.clearRect(0, 0, this.option.imgCropSizeW, this.option.imgCropSizeH);
			}
		}
	}, {
		key: 'drawCanvasCrop',
		value: function drawCanvasCrop() {
			// console.log('drawCanvasCrop Start...')
			var opt = this.option;
			opt.imgCropSx = -((opt.$canvasW - opt.imgCropSizeW) / 2 - opt.imgSx);
			opt.imgCropSy = -((opt.$canvasH - opt.imgCropSizeH) / 2 - opt.imgSy);
			if (opt.imgSx < 0) {
				opt.imgCropSx = -((opt.$canvasW - opt.imgCropSizeW) / 2 - opt.imgSx);
			}
			if (opt.imgSy < 0) {
				opt.imgCropSy = -((opt.$canvasH - opt.imgCropSizeH) / 2 - opt.imgSy);
			}
			opt.$canvasCrop.ctx.drawImage(opt._img, opt.imgCropSx, opt.imgCropSy, opt._img.width, opt._img.height);
		}
	}, {
		key: 'checkCanvasXY',
		value: function checkCanvasXY(e) {
			// if (this.option._img.width > this.option.imgBoxSizeW) {// 框小於圖}
			// if (this.option._img.width < this.option.imgBoxSizeW) { // 框大於圖}
			if (this.option.imgSx >= this.option.imgBoxSizeW - (this.option.imgBoxSizeW - this.option.imgCropSizeW) / 2) {
				this.option.imgSx = this.option.imgBoxSizeW - (this.option.imgBoxSizeW - this.option.imgCropSizeW) / 2;
			}
			if (this.option.imgSy >= this.option.imgCropSizeH) {
				this.option.imgSy = this.option.imgCropSizeH;
			}
			if (this.option.imgSy <= 0) {
				this.option.imgSy = 0;
			}
			if (this.option.imgSx <= -this.option.imgBoxSizeW * 0.4) {
				this.option.imgSx = -this.option.imgBoxSizeW * 0.4;
			}
		}
	}, {
		key: 'resizeCanvas',
		value: function resizeCanvas() {
			var opt = this.option;
			this.clearCanvas();
			opt.$canvas.ctx.drawImage(opt._img, opt.imgSx, opt.imgSy, opt.imgW, opt.imgH);
			this.drawShae(opt.$canvas, "rgba(0,0,0,0.3)", opt.$canvasW, opt.$canvasH);
			this.drawCanvasCrop();
		}
	}, {
		key: 'eventCanvas',
		value: function eventCanvas() {
			console.log('Event Start...');
			var zoomSize = 10;
			var thisbox = null;
			var self = this;
			var opt = this.option;
			var mouseTag = opt.mouseTag;
			var prevX = 0;
			var prevY = 0;
			var box = document.querySelector("#imgBox");

			box.addEventListener('touchstart', touch, false);
			box.addEventListener('touchmove', touch, false);
			box.addEventListener('touchend', touch, false);
			box.addEventListener('gesturestart', touch, false);
			function touch(e) {
				if (e.touches[0] != undefined) {
					var _touch = e.touches[0];
					var u = navigator.userAgent;
					$(self.imgbox).on('touchstart', function (e) {
						mouseTag = true;
					});
					$(self.imgbox).on('touchmove', function (e) {
						if (e.cancelable) {
							if (!e.defaultPrevented) {
								e.preventDefault();
							}
						}
						if (!mouseTag) return false;
						if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 === true) {
							//Android
						} else {
								//IOS
							}
						var mX = _touch.pageX - prevX;
						var mY = _touch.pageY - prevY;
						prevX = _touch.pageX;
						prevY = _touch.pageY;

						opt.imgSx += mX;
						opt.imgSy += mY;
						self.checkCanvasXY(e);
						self.resizeCanvas();
					});
					$(self.imgbox).on('touchend', function (e) {
						mouseTag = false;
					});
				}
			}
			function zoomInOut(setSize, zoomFlag) {
				var size = void 0;
				if (zoomFlag === true) {
					size = setSize;
					opt.imgSx = opt.imgSx - setSize / 2;
					opt.imgSy = opt.imgSy - setSize / 2;
				} else {
					if (opt.imgSx >= opt.imgCropSizeW - opt.imgCropSizeW / 3) {
						return false;
					}
					if (opt.imgSy >= opt.imgCropSizeH - opt.imgCropSizeH / 3) {
						return false;
					}
					size = -setSize;
					opt.imgSx = opt.imgSx + setSize / 2;
					opt.imgSy = opt.imgSy + setSize / 2;
				}
				opt.imgW = opt._img.width + size;
				opt.imgH = opt.imgW / opt.imgScale;
				opt._img.width = opt.imgW;
				opt._img.height = opt.imgH;
				self.resizeCanvas();
			}

			//因為firefox滾動與其他瀏覽器數值相反需另外做處理
			if (this.imgbox[0].id) {
				thisbox = "#" + this.imgbox[0].id;
			}
			$(document).on("mousewheel DOMMouseScroll", thisbox, function (e) {
				var delta = e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1) || // chrome & ie
				e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1); // firefox
				if (delta > 0) {

					zoomInOut(zoomSize, true); // 向上滚
				} else if (delta < 0) {
					zoomInOut(zoomSize, false); // 向下滚
				}
				return false;
			});

			//綁定事件
			this.imgbox.on({
				mousedown: function mousedown(e) {
					mouseTag = true;
					prevX = e.pageX;
					prevY = e.pageY;
				},
				mouseup: function mouseup() {
					mouseTag = false;
				},
				mouseleave: function mouseleave() {
					mouseTag = false;
				},
				mousemove: function mousemove(e) {
					if (!mouseTag) return false;
					var mX = e.pageX - prevX;
					var mY = e.pageY - prevY;
					prevX = e.pageX;
					prevY = e.pageY;
					opt.imgSx += mX;
					opt.imgSy += mY;

					self.checkCanvasXY(e);
					self.resizeCanvas();
				}
			});
		}
	}, {
		key: 'save',
		value: function save() {
			var base64Url = this.option.$canvasCrop[0].toDataURL('image/png');
			$("#base64 img").attr("src", base64Url);
		}
	}, {
		key: 'download',
		value: function download(_this) {
			var base64Url = this.option.$canvasCrop[0].toDataURL('image/png', 0.95);
			_this.href = base64Url;
		}
		// setGesture(){
		// 	let u = navigator.userAgent;
		// 	if(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 === true){
		// 		let self = this;
		// 		document.addEventListener("touchstart", function (e) {
		// 			if (e.touches.length >= 2) {
		// 				self.option.mouseTag = true;
		// 				self.option.start = e.touches; //得到第一组两个点
		// 				e.target.dispatchEvent(self.option.gesturestart);
		// 				$('#p1').text('touchstart', self.option.gesturestart)
		// 			}
		// 		}, false);
		// 		document.addEventListener("touchmove", function (e) {
		// 			if (e.cancelable) {
		// 				if (!e.defaultPrevented) {
		// 					e.preventDefault();
		// 				}
		// 			}
		// 			if (e.touches.length >= 2 && self.option.mouseTag) {
		// 				let now = e.touches; //得到第二组两个点
		// 				let scale = getDistance(now[0], now[1]) / getDistance(self.option.start[0], self.option.start[1]); //得到缩放比例
		// 				let rotation = getAngle(now[0], now[1]) - getAngle(self.option.start[0], self.option.start[1]); //得到旋转角度差
		// 				self.option.gesturechange.scale = scale.toFixed(2);
		// 				self.option.gesturechange.rotation = rotation.toFixed(2);
		// 				e.target.dispatchEvent(self.option.gesturechange);
		// 			};
		// 		}, false);
		// 		document.addEventListener("touchend", function (e) {
		// 			if (self.option.mouseTag) {
		// 				self.option.mouseTag = false;
		// 				e.target.dispatchEvent(self.option.gestureend);
		// 			};
		// 		}, false);

		// 		function getDistance(p1, p2) {
		// 			let x = p2.pageX - p1.pageX;
		// 			let	y = p2.pageY - p1.pageY;
		// 			return Math.sqrt((x * x) + (y * y));
		// 		};
		// 		function getAngle(p1, p2) {
		// 			let x = p1.pageX - p2.pageX;
		// 			let y = p1.pageY - p2.pageY;
		// 			return Math.atan2(y, x) * 180 / Math.PI;
		// 		};
		// 	}else{
		// 		return
		// 	}
		// }

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