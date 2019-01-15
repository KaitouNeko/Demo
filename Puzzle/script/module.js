const ModuleName = 'puzzle';
const ModuleDefaults =  {
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
const ModuleReturns = ['output', 'methods'];

class Module {
	constructor ( ele, options ) {
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
	init () {
		this.initCanvas();
	}
	initCanvas () {
		let opt = this.option;
		opt.$canvas.ctx = opt.$canvas[0].getContext('2d');
		this.setGamebox();
	}
	setGamebox (){
		let opt = this.option;
		let self = this;
		opt._img = new Image();
		opt._img.onload = function () {
			opt.$canvas[0].width = opt._img.width / opt._column;
			opt.$canvas[0].height = opt._img.height / opt._row;
			for (let i = 0; i < parseInt(opt._column); i++) {
				for (let j = 0; j < parseInt(opt._row); j++) {
					opt.$canvas.ctx.drawImage(this, opt.$canvas[0].width * j, opt.$canvas[0].height * i, opt.$canvas[0].width, opt.$canvas[0].height, 5, 5, opt.$canvas[0].width, opt.$canvas[0].height);
					let base64Url = opt.$canvas[0].toDataURL('image/png');
					opt._bas64list.push(base64Url)
				}
			}
			self.createHtml(opt);
			self.hideCanvas();
			self.addEvent();
		}
		opt._img.crossOrigin = 'anonymous';
		opt._img.src = opt._src;
	}
	createHtml(opt) {
		let num = opt._bas64list.length;
		let numList = [];
		// let wdth = parseInt($(window).width() / opt._column);
		// let wdthtext = 'width:' + wdth + 'px';
		for (let i = 0; i < num; i++){
			let rnd = Math.floor((Math.random() * num));
			if(numList.indexOf(rnd) === -1){
				numList.push(rnd)
				opt.$gameBox.append($('<img/>', {
					src: opt._bas64list[rnd],
					alt: rnd
				}));
			}else{
				i -=1;
			}
		}
		
	}
	hideCanvas(){
		this.option.$canvas.hide();
	}
	addEvent() {
		let isclick = false;
		let firstclick = null;
		let self = this;
		$('body').on('touchstart', function (e) {
			if (e.cancelable) {
				if (!e.defaultPrevented) {
					e.preventDefault();
				}
			}
		},false);
		
		$("img").on("click", function (e) {
			let $this = $(this);		
			if (e.cancelable) {
				if (!e.defaultPrevented) {
					e.preventDefault();
				}
			}
			toggle(self)
			function toggle(self) { 
				if (isclick == true) {
					let firstUrl = firstclick[0].src;
					let secondUrl = $this[0].src;
					$this[0].src = firstUrl;
					firstclick[0].src = secondUrl;
					firstclick.css('opacity', 1);
					isclick = false;
				}else{
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
};

export { ModuleName, ModuleDefaults, ModuleReturns, Module };