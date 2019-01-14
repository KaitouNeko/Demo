const ModuleName = 'imgupload';
const ModuleDefaults =  {
		imgBoxSizeW : 0,
		imgBoxSizeH : 0,
		imgCropSizeW : 0,
		imgCropSizeH : 0,
		imgBox: '#imgbox',

		originWidth: 0,  // 圖片原始尺寸寬
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
const ModuleReturns = ['output', 'methods'];

class Module {
	constructor ( ele, options ) {
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
	init () {
		let self = this;
		this.initCanvas();
		// this.setGesture();
		this.readFile();
	}
	initCanvas () {	
		console.log('initCanvas Start...')
		const opt = this.option;
		this.option.$canvasW = opt.imgBoxSizeW;
		this.option.$canvasH = opt.imgBoxSizeH;
		this.imgbox.css({
			'width': opt.imgBoxSizeW,
			'height': opt.imgBoxSizeH
		})
		opt.$canvas = $('<canvas width="' + opt.$canvasW + '" height="' + opt.$canvasH + '"></canvas>');
		this.imgbox.append(opt.$canvas);
		opt.$canvas.ctx = opt.$canvas[0].getContext('2d');
		this.drawShae(opt.$canvas, "rgba(0,0,0,0.3)", opt.$canvasW, opt.$canvasH);

		// 剪裁框
		if (opt.imgCropSizeW == 0 || opt.imgCropSizeH == 0) {
			opt.imgCropSizeW = Math.round(opt.imgBoxSizeW * 0.7 * 3 / 4);
			opt.imgCropSizeH = Math.round(opt.imgBoxSizeH * 0.7 * 3 / 4);
		}
		$('#p3').append('<b>裁切大小: ' + opt.imgCropSizeW + "x" + opt.imgCropSizeH + '</b>')
		opt.$canvasCrop = $('<canvas width="' + opt.imgCropSizeW + '" height="' + opt.imgCropSizeH + '"></canvas>');
		this.imgbox.append(opt.$canvasCrop);
		opt.$canvasCrop.ctx = opt.$canvasCrop[0].getContext('2d');
		this.drawShae(opt.$canvasCrop, '#e8e8e8', opt.imgCropSizeW, opt.imgCropSizeH);
	}
	drawShae(self, color, width, height) {
		self.ctx.beginPath();
		self.ctx.fillStyle = color;
		self.ctx.fillRect(0, 0, width, height);
	}
	readFile(){
		console.log('readFile Start...')
		const self = this;
		if (typeof FileReader === 'undefined'){
			alert('瀏覽器不支援，請升級版本或更換瀏覽器')
		}else{
			this.fileUpload = $(fileUpload);
			this.fileUpload[0].addEventListener('change', readFileload, false)
			this.fileUpload[0].addEventListener("dragenter", dragenter, false);
			this.fileUpload[0].addEventListener("dragover", dragover, false);
			this.fileUpload[0].addEventListener("drop", drop, false);
		}
		function readFileload() {
			let files = this.files;
			$("#save").click(function () {
				self.save();
			});
			$(".alink").click(function () {
				let _this = this;
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
			let dt = this.dataTransfer;
			let files = this.files;			
			handleFiles(files);
		}
		function handleFiles(files) {
			console.log('handleFiles', files)
			for(let i = 0; i < files.length;i++){
				let file = files[i];
				let imageType = /image.*/;
				if (!file.type.match(imageType)) {
					continue;
				}
				let reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = function () {
					let src = this.result;			
					self.buildBox(src);
					//绑定Canvas事件
					self.eventCanvas(); 
				}
			}
		}
	}
	// 生成預覽圖
	buildBox(src){
		this.option._img = new Image();
		this.option._img.src = src;
		let self = this;
		this.option._img.onload = function () {
			// 圖片原始尺寸
			self.option.originWidth = this.width;
			self.option.originHeight = this.height;
			self.option.imgScale = $(this)[0].width / $(this)[0].height;
			drawImg(self);
		}
		function drawImg(self) {
			console.log('圖片原始尺寸 drawImg Start...', self.option.originWidth + "x" + self.option.originHeight)
			let originWidth = self.option.originWidth;
			let originHeight = self.option.originHeight;
			if (self.option._img.width < self.imgCropSizeW) {
				alter('圖片長不可小於剪裁區 ' + imgCropSizeW + 'px');
				return false
			}
			if (self.option._img.height < self.imgCropSizeH) {
				alter('圖片高不可小於剪裁區 ' + imgCropSizeH + 'px');
				return false
			}
			if (self.option.imgScale > 1) {
				if (self.option._img.width > self.option.imgBoxSizeW) {
					self.option._img.width = self.option.imgBoxSizeW;
					self.option._img.height = self.option._img.width / self.option.imgScale;
				}
			}else{
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
			self.clearCanvas()
			//顯示imgbox圖
			self.option.$canvas.ctx.drawImage(self.option._img, self.option.imgSx, self.option.imgSy, self.option._img.width, self.option._img.height);
			self.drawShae(self.option.$canvas, "rgba(0,0,0,0.3)", self.option.$canvasW, self.option.$canvasH);
			//剪裁區
			self.drawCanvasCrop();
		}
	}
	clearCanvas(){
		// console.log('clearCanvas Start...')
		if (this.option.$canvas) {
			this.option.$canvas.ctx.clearRect(0, 0, this.option.$canvasW, this.option.$canvasH);
		}
		if (this.option.$canvasCrop) {
			this.option.$canvasCrop.ctx.clearRect(0, 0, this.option.imgCropSizeW, this.option.imgCropSizeH);
		}
	}
	drawCanvasCrop(){
		// console.log('drawCanvasCrop Start...')
		let opt = this.option;
		opt.imgCropSx = -((opt.$canvasW - opt.imgCropSizeW) / 2 - opt.imgSx);
		opt.imgCropSy = -((opt.$canvasH - opt.imgCropSizeH) / 2 - opt.imgSy);
		if (opt.imgSx < 0) {
			opt.imgCropSx = -((opt.$canvasW - opt.imgCropSizeW) / 2 - opt.imgSx)
		}
		if (opt.imgSy < 0) {
			opt.imgCropSy = -((opt.$canvasH - opt.imgCropSizeH) / 2 - opt.imgSy);
		}
		opt.$canvasCrop.ctx.drawImage(opt._img, opt.imgCropSx, opt.imgCropSy, opt._img.width, opt._img.height);
	}
	checkCanvasXY(e){
		// if (this.option._img.width > this.option.imgBoxSizeW) {// 框小於圖}
		// if (this.option._img.width < this.option.imgBoxSizeW) { // 框大於圖}
		if (this.option.imgSx >= this.option.imgBoxSizeW - (this.option.imgBoxSizeW - this.option.imgCropSizeW) / 2) {
			this.option.imgSx = this.option.imgBoxSizeW - (this.option.imgBoxSizeW - this.option.imgCropSizeW) / 2
		}
		if (this.option.imgSy >= this.option.imgCropSizeH) {
			this.option.imgSy = this.option.imgCropSizeH;			
		}
		if (this.option.imgSy <= 0) {
			this.option.imgSy = 0;
		}
		if (this.option.imgSx <= -(this.option.imgBoxSizeW) * 0.4) {
			this.option.imgSx = -(this.option.imgBoxSizeW) * 0.4;
		}		
	}
	resizeCanvas(){
		let opt = this.option;
		this.clearCanvas();
		opt.$canvas.ctx.drawImage(opt._img, opt.imgSx, opt.imgSy, opt.imgW, opt.imgH);
		this.drawShae(opt.$canvas, "rgba(0,0,0,0.3)", opt.$canvasW, opt.$canvasH);
		this.drawCanvasCrop();
	}
	eventCanvas(){
		console.log('Event Start...')
		let zoomSize = 10;
		let thisbox = null;
		let self = this;
		let opt = this.option;
		let mouseTag = opt.mouseTag;
		let prevX = 0;
		let prevY = 0;
		let box = document.querySelector("#imgBox");

		box.addEventListener('touchstart', touch, false);
		box.addEventListener('touchmove', touch, false);
		box.addEventListener('touchend', touch, false);
		box.addEventListener('gesturestart', touch, false);
		function touch(e) {
			if (e.touches[0] != undefined) {
				let touch = e.touches[0];
				let u = navigator.userAgent;
				$(self.imgbox).on('touchstart', function (e) {
					mouseTag = true;			
				})
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
					let mX = touch.pageX - prevX;
					let mY = touch.pageY - prevY;
					prevX = touch.pageX;
					prevY = touch.pageY;

					opt.imgSx += mX;
					opt.imgSy += mY;
					self.checkCanvasXY(e)
					self.resizeCanvas();
				})
				$(self.imgbox).on('touchend', function (e) {
					mouseTag = false;
				})
			}
		}		
		function zoomInOut(setSize, zoomFlag) {
			let size;
			if(zoomFlag === true){
				size = setSize;
				opt.imgSx = opt.imgSx - setSize / 2;
				opt.imgSy = opt.imgSy - setSize / 2;
			}else{
				if (opt.imgSx >= opt.imgCropSizeW-(opt.imgCropSizeW) / 3) {
					return false
				}
				if (opt.imgSy >= opt.imgCropSizeH - (opt.imgCropSizeH) / 3) {
					return false
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
		if (this.imgbox[0].id){
			thisbox = "#"+this.imgbox[0].id;
		}		
		$(document).on("mousewheel DOMMouseScroll", thisbox, function (e) {
			let delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
				(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
			if (delta > 0) {

				zoomInOut(zoomSize, true); // 向上滚
			} else if (delta < 0) {
				zoomInOut(zoomSize, false); // 向下滚
			}
			return false;
		})

		//綁定事件
		this.imgbox.on({
			mousedown: function (e) {
				mouseTag = true;
				prevX = e.pageX;
				prevY = e.pageY;
			},
			mouseup: function () {
				mouseTag = false;
			},
			mouseleave: function () {
				mouseTag = false;
			},
			mousemove: function (e) {
				if(!mouseTag) return false;
				let mX = e.pageX - prevX;
				let mY = e.pageY - prevY;
				prevX = e.pageX;
				prevY = e.pageY;
				opt.imgSx += mX;
				opt.imgSy += mY;

				self.checkCanvasXY(e)
				self.resizeCanvas();
			},
		})
	}
	save() {
		let base64Url = this.option.$canvasCrop[0].toDataURL('image/png');
		$("#base64 img").attr("src", base64Url);
	}
	download(_this) {
		let base64Url = this.option.$canvasCrop[0].toDataURL('image/png', 0.95);
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
};

export { ModuleName, ModuleDefaults, ModuleReturns, Module };