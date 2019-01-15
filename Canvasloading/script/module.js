const ModuleName = 'loadingAnimation';
const ModuleDefaults =  {		
	$canvas: null,
	$input: null,
	width: 320,
	height: 320,
	_img: null,
	_imgW: 0,
	_imgH: 0,
	originWidth: 0,
	originHeight: 0,
};
const ModuleReturns = ['output', 'methods'];

class Module {
	constructor ( ele, options ) {
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
	init () {
		this.initCanvas();
	}
	initCanvas() {
		console.log('initCanvas....')
		let opt = this.option;
		opt.$canvas.ctx = opt.$canvas[0].getContext('2d');
		opt.$canvas.width = opt.width;
		opt.$canvas.height = opt.height;
		opt.$canvas.attr({
			 'width':opt.$canvas.width,
			 'height':opt.$canvas.height,
		})
		this.readFile()
	}
	readFile(){
		if (typeof FileReader === 'undefined'){
			alert('瀏覽器不支援，請升級版本或更換瀏覽器')
		}else{
			this.fileUpload = $(fileUpload);
			// this.inputText = this.option.$input;			
			this.fileUpload[0].addEventListener('change', readFileload, false);
			this.option.$input[0].addEventListener('change',writeTextload, false);
			let self = this;
			function readFileload() {
				let files = this.files;
				handleFiles(files);
			}
			function writeTextload(){
				console.log(self.option.$input[0])
			}
			function handleFiles(files){
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
						self.buildBox(src)
					}
				}				
			}
		}		
	}
	buildBox(src){
		this.option._img = new Image();
		this.option._img.src = src;
		let self = this;
		this.option._img.onload = function(){
			self.option._imgW = this.width;
			self.option._imgH = this.height;
			// 目標尺寸
			let targetWidth = self.option.originWidth;
			let targetHeight = self.option.originHeight;
			// 按照canavs尺寸调整大小
			if (targetWidth > targetHeight)  {
				targetWidth = self.option.width;
				targetHeight = targetWidth * (self.option._imgH / self.option._imgW);
			} else {
				targetHeight = self.option.height;
				targetWidth = targetHeight * (self.option._imgW / self.option._imgH);
			}
			self.clearCanvas();
			self.copy(targetWidth,targetHeight);
			// self.option.$canvas.ctx.drawImage(self.option._img, 0, 0, targetWidth, targetHeight);
		}
	}
	clearCanvas(){
		let opt = this.option;
		if (opt.$canvas) {
			opt.$canvas.ctx.clearRect(0, 0, opt.width, opt.height);
		}		
	}
	copy(targetWidth,targetHeight){
		let imgData = this.option.$canvas.ctx.getImageData(0, 0, targetWidth, targetHeight);
		let imageBuffer = imgData.data;
		let points = {};
		console.log('imgData',imgData)
	    let red, green, blue, alpha;    // 定義各顏色的暫存變數
	    let arg
	    let pos = [];
	    let index = 0;
	    let x = 0;
	    let y = 0;
	    let gap = 13;
	  
	    // 注意這裡的 i, 每次迭代時為 i += 4, 而非 i++
	    for (let i = 0; i < imageBuffer.length; i += 4) {
	        // 在imageBuffer之中每4個元素分別代表著每個像素的red, green, blue, alpha數值(0 ~ 255)
	        red   = imageBuffer[i]
	        green = imageBuffer[i + 1]
	        blue  = imageBuffer[i + 2]
	        alpha = imageBuffer[i + 3]    

	        // 將畫布中每個像素的rgb值設定為rgb平均值，能使圖片灰階化
	        arg = (red + green + blue) / 3
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
};

export { ModuleName, ModuleDefaults, ModuleReturns, Module };