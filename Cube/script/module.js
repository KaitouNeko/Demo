const ModuleName = 'sceneCube';
const ModuleDefaults =  {		
	arrangement: {
		0:['s-n','s-rb','b-r'], //S是小正方體 b是大正方體 有b時會佔兩列
		1:['s-n','s-t','s-l','s-lt'] // right:-r left:-l bottom:-b top:-t noAnimation: -n
	},
	bigSide: 400, // 高度
	smallSide: 200, // 高度
	cubeClass:{
		Parent: 'cube',
		Front: 'cube__face cube__face--front',
		Back: 'cube__face cube__face--back',
		Right: 'cube__face cube__face--right',
		Left: 'cube__face cube__face--left',
		Top: 'cube__face cube__face--top',
		Bottom: 'cube__face cube__face--bottom'
	},
	turnClass:{
		'r': 'show-right',
		'l': 'show-left',
		't': 'show-top',
		'b': 'show-bottom',
		'rb': 'show-rb',
		'lt': 'show-lt'
	},
	afterCreateCube:function($ele){},
};
const ModuleReturns = ['output', 'methods'];

class Module {
	constructor ( ele, options ) {
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
		this.num = parseInt(options.smallSide)/parseInt(options.bigSide);
	}
	init () {
		console.log('Init....')
		this.cubeInit()
	}
	sizeArr(cubetype){
		this.newsizeArr = Object.keys(cubetype).map(function(ele, key) {
			let re = /-+\w+/g
			let str = cubetype[key];
			let newstr = str.replace(re, '');
			return newstr
		}, []);
	}
	turnArr(cubetype){
		this.newturnArr = Object.keys(cubetype).map(function(ele, key) {
			let re = /\w+-/g;
			let str = cubetype[key];
			let newstr = str.replace(re, '');
			return newstr
		}, []);
	}
	cubeInit (){
		console.log('sceneCube Init....')
		let opt = this.option;
		let arr = this.option.arrangement;
		let $ele = this.ele;
		let self = this;
		let cubeStyle = this.option.cubeClass;
		$.each(arr,function(idx,cubetype){
			self.sizeArr(cubetype);
			self.turnArr(cubetype);
			$.each(self.newsizeArr,function(index,item){
				let size = 'small';
				if(item == 'b'){
					size = 'big';
				}
				let setAnimation = opt.turnClass[self.newturnArr[index]]
				let html = self.createlCube(size,cubeStyle,setAnimation)				
				if(self.newsizeArr.indexOf('b') != -1){
					// if大方塊存在
					let cubeIndex = self.newsizeArr.indexOf('b');					
					// 補足前後的小cube
					if(index != cubeIndex){					
						for(let i =0;i<self.num;i++){
							html+=html
						}					
						$($ele).append("<div class='makeup' style='width:"+self.option.smallSide+"px;height: "+self.option.bigSide+"px;'>"+html+"</div>")
					}else{
						$($ele).append(html)
					}
				}else{
					$($ele).append(html)
				}				
			})
		})
		this.option.afterCreateCube($($ele))
	}
	createlCube(size,cubeStyle,setAnimation) {
		if (!setAnimation){setAnimation=''}
		let strHtml = "<div class='sceneCube "+size+"'>"
		strHtml += "<div class='"+cubeStyle.Parent+" "+setAnimation+"'>"
		strHtml += "<div class='"+cubeStyle.Front+"'>front</div>"
		strHtml += "<div class='"+cubeStyle.Back+"'>back</div>"
		strHtml += "<div class='"+cubeStyle.Right+"'>right</div>"
		strHtml += "<div class='"+cubeStyle.Left+"'>left</div>"
		strHtml += "<div class='"+cubeStyle.Top+"'>top</div>"
		strHtml += "<div class='"+cubeStyle.Bottom+"'>bottom</div>"
		strHtml += "</div></div>"
		return strHtml
	}
};

export { ModuleName, ModuleDefaults, ModuleReturns, Module };