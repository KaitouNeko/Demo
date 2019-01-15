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

var ModuleName = 'sceneCube';
var ModuleDefaults = {
	arrangement: {
		0: ['s-n', 's-rb', 'b-r'], //S是小正方體 b是大正方體 有b時會佔兩列
		1: ['s-n', 's-t', 's-l', 's-lt'] // right:-r left:-l bottom:-b top:-t noAnimation: -n
	},
	bigSide: 400, // 高度
	smallSide: 200, // 高度
	cubeClass: {
		Parent: 'cube',
		Front: 'cube__face cube__face--front',
		Back: 'cube__face cube__face--back',
		Right: 'cube__face cube__face--right',
		Left: 'cube__face cube__face--left',
		Top: 'cube__face cube__face--top',
		Bottom: 'cube__face cube__face--bottom'
	},
	turnClass: {
		'r': 'show-right',
		'l': 'show-left',
		't': 'show-top',
		'b': 'show-bottom',
		'rb': 'show-rb',
		'lt': 'show-lt'
	},
	afterCreateCube: function afterCreateCube($ele) {}
};
var ModuleReturns = ['output', 'methods'];

var Module = function () {
	function Module(ele, options) {
		_classCallCheck(this, Module);

		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
		this.init = this.init.bind(this);
		this.cubeInit = this.cubeInit.bind(this);
		this.createlCube = this.createlCube.bind(this);
		this.sizeArr = this.sizeArr.bind(this);
		this.turnArr = this.turnArr.bind(this);

		this.newsizeArr = null;
		this.newturnArr = null;
		this.num = parseInt(options.smallSide) / parseInt(options.bigSide);
	}

	_createClass(Module, [{
		key: 'init',
		value: function init() {
			console.log('Init....');
			this.cubeInit();
		}
	}, {
		key: 'sizeArr',
		value: function sizeArr(cubetype) {
			this.newsizeArr = Object.keys(cubetype).map(function (ele, key) {
				var re = /-+\w+/g;
				var str = cubetype[key];
				var newstr = str.replace(re, '');
				return newstr;
			}, []);
		}
	}, {
		key: 'turnArr',
		value: function turnArr(cubetype) {
			this.newturnArr = Object.keys(cubetype).map(function (ele, key) {
				var re = /\w+-/g;
				var str = cubetype[key];
				var newstr = str.replace(re, '');
				return newstr;
			}, []);
		}
	}, {
		key: 'cubeInit',
		value: function cubeInit() {
			console.log('sceneCube Init....');
			var opt = this.option;
			var arr = this.option.arrangement;
			var $ele = this.ele;
			var self = this;
			var cubeStyle = this.option.cubeClass;
			$.each(arr, function (idx, cubetype) {
				self.sizeArr(cubetype);
				self.turnArr(cubetype);
				$.each(self.newsizeArr, function (index, item) {
					var size = 'small';
					if (item == 'b') {
						size = 'big';
					}
					var setAnimation = opt.turnClass[self.newturnArr[index]];
					var html = self.createlCube(size, cubeStyle, setAnimation);
					if (self.newsizeArr.indexOf('b') != -1) {
						// if大方塊存在
						var cubeIndex = self.newsizeArr.indexOf('b');
						// 補足前後的小cube
						if (index != cubeIndex) {
							for (var i = 0; i < self.num; i++) {
								html += html;
							}
							$($ele).append("<div class='makeup' style='width:" + self.option.smallSide + "px;height: " + self.option.bigSide + "px;'>" + html + "</div>");
						} else {
							$($ele).append(html);
						}
					} else {
						$($ele).append(html);
					}
				});
			});
			this.option.afterCreateCube($($ele));
		}
	}, {
		key: 'createlCube',
		value: function createlCube(size, cubeStyle, setAnimation) {
			if (!setAnimation) {
				setAnimation = '';
			}
			var strHtml = "<div class='sceneCube " + size + "'>";
			strHtml += "<div class='" + cubeStyle.Parent + " " + setAnimation + "'>";
			strHtml += "<div class='" + cubeStyle.Front + "'>front</div>";
			strHtml += "<div class='" + cubeStyle.Back + "'>back</div>";
			strHtml += "<div class='" + cubeStyle.Right + "'>right</div>";
			strHtml += "<div class='" + cubeStyle.Left + "'>left</div>";
			strHtml += "<div class='" + cubeStyle.Top + "'>top</div>";
			strHtml += "<div class='" + cubeStyle.Bottom + "'>bottom</div>";
			strHtml += "</div></div>";
			return strHtml;
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