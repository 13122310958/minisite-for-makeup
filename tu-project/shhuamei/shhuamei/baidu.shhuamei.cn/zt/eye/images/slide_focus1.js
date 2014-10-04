// JavaScript Document
// JavaScript Document
/*
顶部大图滚动
*/
var slide1 = (function() {
	var quadEaseOut;
    var doc = document;

	var $ = function(s){
		return document.getElementById(s);
	}
	/**
	 获取索引值，工具类
	 @param {Element} current 当前元素
	 @param {Object} obj 元素集合
	**/
	var getIndex1 = function(current, obj) {
		for (var i=0; i<obj.length; i++) {
			if (obj[i] == current) {
				return i;
			}
		}
	};

	/**
	 @param {Element} el 目标元素
	**/
	var siblings1 = function(el) {
		var r = [],
			n = el.parentNode.firstChild;
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== el ) {
				r.push( n );
			}
		}
		return r;
	};
	
	/**
	 设置 Slide 宽高
	 @param {Element} el Slide 元素
	 @param {Number} width Slide 宽度
	 @param {Number} height Slide 高度
	**/
	var setSlideWH1 = function(el, width, height) {
		var styleW,
			styleH;
		if (width == '100%') {		// 自适应宽度
			styleW = '100%';
		} else {					// 定宽
			styleW = width + 'px';
		}
		
		if (height == '100%') {		// 自适应高度
			styleH = '100%';
		} else {					// 定高
			styleH = height + 'px';
		}
		
		el.style.width = styleW;
		el.style.height = styleH;

		
	};
	
	var readStyle1 = function(obj, name){
		if(obj.style[name]){
			return obj.style[name];
		}else if(obj.currentStyle){
			return obj.currentStyle[name]
		}else if(document.defaultView && document.defaultView.getComputedStyle){
			var d=document.defaultView.getComputedStyle(obj,null);
			return d.getPropertyValue(name)
		}else{
			return null
		}
	};
	var style1 = {
		setOpacity1 : function(obj,opacity){
			if(typeof(obj.style.opacity) != 'undefined'){
				obj.style.opacity = opacity;
			}else{
				obj.style.filter = 'Alpha(Opacity=' + (opacity*100) + ')';
			};
		}
	};
	/* 动画 */
	var extend = {
		/**
		 渐显元素
		 @param {Element} target 目标元素
		**/
		fadeIn : function(obj,time){
			if(readStyle1(obj, 'display') == 'none'){
				obj.style.display = 'block';
			};
			style1.setOpacity1(obj,0);
			time = time || 200;
			var opacity = 0,step = time / 20;
			clearTimeout(obj.showT);
			obj.showT = setTimeout(function(){
				if(opacity >= 1) { style1.setOpacity1(obj,1); return; }
				opacity +=1/step;
				style1.setOpacity1(obj,opacity);
				obj.showT = setTimeout(arguments.callee,20);
			},20);
		},
		
		/**
		 渐隐元素
		 @param {Element} target 目标元素
		**/
		fadeOut : function(obj,time){
			time = time || 200;
			style1.setOpacity1(obj,1);
			var opacity = 1,step = time / 20;
			clearTimeout(obj.showT);
			obj.showT = setTimeout(function(){
				if(opacity <= 0){
					obj.style.display = 'none';	
					style1.setOpacity1(obj,0);
					return;
				};
				opacity -= 1/step;
				obj.showT = setTimeout(arguments.callee,20);
			},20);
		},
		/**
		 动画元素
		 @param {Element} target 目标元素
		 @param {String} key target样式
		 @param {Number} start key初始值
		 @param {Number} end key结束值
		 @param {Number} speed 速度
		 @param {Function} endFn 结束时的回调
		 @param {String} u 样式单位
		**/
		actPX : function(obj,key,start,end,speed,endFn,u){
		  if(typeof(u) == 'undefined'){u = 'px'};
		  clearTimeout(obj['_extend_actPX' + key.replace(/\-\.\=/,'_') + '_timeOut']);
		  if(start > end){
			speed = - Math.abs(speed);
		  }else{
			speed = Math.abs(speed);
		  };
		  var now = start;
		  var length = end - start;
		  obj['_extend_actPX' + key.replace(/\-\.\=/,'_') + '_timeOut'] = setTimeout(function(){
			now += speed;
			var space = end - now;
			if(start < end){
			  if(space < length/3){
				speed = Math.ceil(space/3);
			  };
			  if(space <= 0){ 
				obj[key] = end + u;
				if(endFn){endFn()};
				return;
			  };
			}else{
			  if(space > length/3){
				speed = Math.floor(space/3);
			  };
			  if(space >= 0){ 
				obj[key] = end + u;
				if(endFn){endFn()};
				return;
			  };
			};
			
			obj[key] = now + u;
			obj['_extend_actPX' + key.replace(/\-\.\=/,'_') + '_timeOut'] = setTimeout(arguments.callee,20);
			
		  },20);
		}
	}

	/**
	 配置
	**/
	var config1 = {
		imgData: [],					// 初使化图片信息
		imgTargetId: '',				// 初使化 Slide 目标 ID
		imgWidth: '100%',				// 初使化图片宽度
		imgHeight: '100%',				// 初使化图片高度
		imgAuto: false,					// 初使化自动播放
		imgInterval: 3000,				// 初使化间隔时间
		imgDataLen: 0,					// 初使化图片数量
		goSwitch: true,					// 鼠标悬停时切换状态
		index: 4,						// 焦点所在索引值
		_index: 0,
		curImg: 5,
		indexShow : 5
	};

	/**
	 生成并插入 Slide 结构
	**/
	

	var buildSlide1 = function() {
		// 注入 Slide 结构
        var panelHtml1  = $('_slide1').getElementsByTagName('ul')[0].innerHTML;
        var aLi1 = $('_slide1').getElementsByTagName('ul')[0].getElementsByTagName('li');
		$('_slide1').getElementsByTagName('ul')[0].innerHTML = panelHtml1 + panelHtml1;
		
		// 设置宽高
		setSlideWH1($(config1.imgTargetId), config1.imgWidth, config1.imgHeight);
		$('_slide1').getElementsByTagName('ul')[0].style.left = '-' + aLi1[0].offsetWidth * 4 + 'px';
	};

    quadEaseOut = function (t, b, c, d, s) {
       return -c *(t/=d)*(t-2) + b;
    };
	var move1 = function(){
		//var e = this;
		clearTimeout(config1.timer),
		config1.t < 50 ? (boxMoveTo1(Math.round(quadEaseOut(config1.t += 3, config1.b, config1.c, 50))), config1.timer=setTimeout(function(){move1()}, 30)) : boxMoveTo1(config1.target)
	}
	var boxMoveTo1 = function(e){
		$('slide_list1').style.left = e+"px"
	}


    //var dotNum = 0;
    var d  = false;
	var run1 = function(e, t){
		
		var slideList1 = $('slide_list1').getElementsByTagName('li');
        dotList1 = $("focus_dot1").getElementsByTagName('li');
        
			slideList1[config1._index].className = '';
			for(var i=0; i<config1.imgData*2; i++){
				slideList1[i].className = '';
				//slideList[i].getElementsByTagName("p")[0].style.display = 'none';
				}

			//for(var i=0; i<config1.imgData; i++){
				//dotList[i].className = '';
				//}
		e = e < 0 ? config1.imgData - 1 : e > config1.imgData ? 1 : e,
		config1.target = -Math.abs(slideList1[0].offsetWidth)*(config1.index = e),
		config1.t = 0,
		config1.b = t ? config1.target - slideList1[0].offsetWidth : config1.target + slideList1[0].offsetWidth,
		config1.c = config1.target - config1.b,
		
		move1();
		
		config1.curImg = config1.index + 1 > 6 ? 1 : (config1.index + 1);
		slideList1[config1.curImg].className = 'cur';
        var dotN = 0;
        if(config1.index >= 4){
	        dotN = config1.index - 4;
        }else{
	        dotN = config1.curImg;
        }
        //dotList[dotN].className = "current";
		//slideList[config1.curImg].getElementsByTagName("p")[0].style.display = 'block';
		config1._index = config1.curImg;
	}


	
	/**
	 自动切换
	**/
	var b = false, c = false, timerB = null;
	var autoSwitch1 = function() {
		var slideList1 = $('slide_list1').getElementsByTagName('li');
		// 遍历触发器
		for (var i=0; i<config1.imgDataLen; i++) {
			// 找到当前触发器
			if (slideList1[i].className == 'cur') {
				// 获得当前触发器的索引
				config1.index = getIndex1(slideList1[i], slideList1);
			}
		}

		var autoFun1 = function() {
			if (config1.goSwitch) {
				
				config1.index = config1.index == 5 ? 0 : config1.index;

				if(!b){
					b = true;
					config1.index = 0;
				}

				if(config1.index == 3 && !c){
					clearInterval(timerB);
					timerB = setInterval(autoFun1, 10000);
					c = true;
				}else if(c){
					c = false;
					clearInterval(timerB);
					timerB = setInterval(autoFun1, config1.imgInterval);
				}
				
				//console.log(config1.index);				
				run1(config1.index, !1);				
				config1.index += 1;
			}
			
		};
		
		timerB = setInterval(autoFun1, config1.imgInterval);
	};
	/**
	 手指事件
	**/
	var touchFun11 = function(evt){
		var $ = function(o){ return document.querySelector(o)}, $$ = function(o){ return document.querySelectorAll(o)}, touchInfo = {startX:0, endX:0}, slide1 = $('#slide1'), btn_L = $('#slider_L'), btn_R = $('#slider_R');
		slide1.addEventListener('touchstart', function(evt) {
			   evt.preventDefault();	   
               if(evt.changedTouches.length == 0)  return;
               touchInfo.startX = evt.changedTouches[0].pageX;
        }, false);
		slide1.addEventListener('touchend', function(evt) {
			   evt.preventDefault();
               if(evt.changedTouches.length == 0) return;
               touchInfo.endX = evt.changedTouches[0].pageX; 
               var offset = touchInfo.endX - touchInfo.startX; 

               if(offset < 0) {
					run1(++config1.index, !1)
               } else if(offset > 0) {
                   run1(--config1.index, !0)
               }else{
					if(evt.target.parentNode.parentNode.className == 'cur'){
						window.open(evt.target.parentNode.getAttribute('href'), '_blank');
					}else{
						return;
					}
			   }
        },false);
		
		
		btn_L.addEventListener('touchend', function() {run1(++config1.index, !1)}, false)
		btn_R.addEventListener('touchend', function() {run1(--config1.index, !0)}, false)
	};
	
	return {
		init1: function(obj, e) {
			// 获取配置信息
			config1.imgData = obj.data;								// 设置图片信息
			config1.imgTargetId = obj.targetId;						// 设置 Slide 目标 ID
			config1.imgWidth = obj.width || config1.imgWidth;			// 设置图片宽度
			config1.imgHeight = obj.height || config1.imgHeight;		// 设置图片高度
			config1.imgAuto = obj.auto || config1.imgAuto;			// 设置自动播放
			config1.imgInterval = obj.interval || config1.imgInterval;// 设置间隔时间
			//config1.imgDataLen = config1.imgData.length;				// 设置图片数量
			
			// 生成 Slide 结构
			buildSlide1();
			var slideList1 = $('slide_list1').getElementsByTagName('li');
			$('slide_list1').style.width = slideList1[0].offsetWidth*slideList1.length + 'px';
			slideList1[config1.curImg].className = 'cur';
			var btn_L = $('slider_L'), btn_R = $('slider_R'), btnClose = $('slidClosed');
			btn_R.onclick = function(){	
				clearInterval(timerB);
				config1.index += 1;
				run1(config1.index, !1)
			}
		
			btn_L.onclick = function(){ 
				clearInterval(timerB);
				config1.index -= 1;
				run1(config1.index, !0)
			}
			$('slide1').onmouseover = function(event){
				config1.index = Math.ceil(Math.abs(parseInt($('_slide1').getElementsByTagName('ul')[0].style.left)/slideList1[0].offsetWidth));
				clearInterval(timerB);
				timerB = null;
				event.stopPropagation();
			}
			$('slide1').onmouseout = function(event){
				if (config1.imgAuto) {
					
					autoSwitch1();
				}
				config1.index = config1.curImg;
				event.stopPropagation();
			}
			if(/ipad;/i.test(navigator.userAgent.toLowerCase())){
				touchFun1(e);
			}
			// 自动切换
			if (config1.imgAuto) {
				autoSwitch1();
			}

			   dotList1 = $("focus_dot1").getElementsByTagName('li');
        
				var n;
			    for(n = 0; n < dotList1.length; n++ ){
				    	dotList1[n].index = n;
						dotList1[n].onclick = function() {	
							if(config1.curImg == this.index || config1.curImg == this.index + 5) return;
							var n = 0;
							n = config1.curImg > 4 ? 0 : config1.curImg;
							
							if(this.index > n){
								run1(this.index-1, !1);
							}else{
								run1(this.index-1, !0)
							}
							config1.curImg = this.index;
						}
				    
			    }
		}
	}
})();

/*  |xGv00|97a550a6ed55700655a1f7494f6971ad */