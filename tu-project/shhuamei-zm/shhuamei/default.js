// JavaScript Document

//绑定事件
function myAddEvent(obj, sEv, fn) {
	if (obj.attachEvent) {
		obj.attachEvent("on" + sEv, fn);
	} else {
		obj.addEventListener(sEv, fn, false);
	}
};
//获取非行间样式
function getStyle(obj, name) {
	if (obj.currentStyle) //IE
	{
		return obj.currentStyle[name];
	} else {
		if (getComputedStyle(obj, false) == null) {
			return;
		} else {
			return getComputedStyle(obj, false)[name]; //chrome , firefox
		}
	}
};
//通过class获取元素
function getByClass(oParent, sClass) {
	var aEle = oParent.getElementsByTagName('*');
	var aResult = [];
	var re = new RegExp('\\b' + sClass + '\\b', 'i');
	var i = 0;

	for (i = 0; i < aEle.length; i++) {
		//if(aEle[i].className==sClass)
		//if(aEle[i].className.search(sClass)!=-1)
		if (re.test(aEle[i].className)) {
			aResult.push(aEle[i]);
		}
	}

	return aResult;
};

//缓冲运动框架
function startMove(obj, json, endFn) {

	clearInterval(obj.timer);

	obj.timer = setInterval(function() {

		var bBtn = true;

		for (var attr in json) {

			var iCur = 0;

			if (attr == 'opacity') {
				if (Math.round(parseFloat(getStyle(obj, attr)) * 100) == 0) {
					iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100);

				} else {
					iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100) || 100;
				}
			} else {
				iCur = parseInt(getStyle(obj, attr)) || 0;
			}

			var iSpeed = (json[attr] - iCur) / 5;
			iSpeed *= 0.7;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			if (iCur != json[attr]) {
				bBtn = false;
			}

			if (attr == 'opacity') {
				obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
				obj.style.opacity = (iCur + iSpeed) / 100;

			} else {
				obj.style[attr] = iCur + iSpeed + 'px';
			}

		}

		if (bBtn) {
			clearInterval(obj.timer);

			if (endFn) {
				endFn.call(obj);
			}
		}

	},
	30);

};
//给元素添加多个样式。
function addStyle(obj, json) {
	for (var attr in json) {
		obj.style[attr] = json[attr];
	}
}
function List(id) { //列表构造函数
	this.oDiv = document.getElementById(id);
	this.oUl = this.oDiv.getElementsByTagName('ul')[0];
	this.aLi = this.oUl.getElementsByTagName('li');
	//alert(this.aLi.length);
	//alert(this.aLi[0].offsetWidth);
};
function FnScroll() { //滚动构造函数
	this.iNow = 0;
	this.timer = null;
	this.oUl.style.width = (this.aLi[0].offsetWidth) * this.aLi.length + 'px';
}
function LsScroll(id) { //带下标索引的图片滚动构造函数
	List.call(this, id); //继承列表构造函数的属性
	FnScroll.call(this);
	var _this = this;
	this.oP = document.createElement('p');
	this.oP.className = 'listIndex';
	for (var i = 0; i < this.aLi.length; i++) {
		this.oA = document.createElement('a');
		this.oP.appendChild(this.oA);
	}
	this.oDiv.appendChild(this.oP);

	//给下标索引添加样式
	addStyle(this.oP, {
		'position': 'absolute',
		'right': 20 + 'px',
		'bottom': 10 + 'px',
		'textAlign': 'right'
	});

	this.aA = this.oP.getElementsByTagName('a');
	for (var i = 0; i < this.aA.length; i++) {
		addStyle(this.aA[i], {
			'display': 'inline-block',
			'marginLeft': 5 + 'px',
			'marginRight': 5 + 'px'
		});
		this.aA[i].index = i;
		this.aA[i].onmouseover = function() {
			_this.iNow = this.index;
			_this.tab(_this.iNow);
		};
	}
	this.aA[this.iNow].className = 'active';
	//自动滚动
	this.timer = setInterval(function() {
		_this.iNow++;
		if (_this.iNow == _this.aA.length) {
			_this.iNow = 0;
		}
		_this.tab(_this.iNow);

	},
	5000);
}
LsScroll.prototype.tab = function(now) { //添加自己（带下表索引图片滚动）的方法
	for (var j = 0; j < this.aA.length; j++) {
		this.aA[j].className = '';
	}
	this.aA[now].className = 'active';
	startMove(this.oUl, {
		left: -now * this.aLi[0].offsetWidth
	});
};

function PicScroll(id) {
	List.call(this, id);
	FnScroll.call(this);
	var _this = this;
	this.oUl.innerHTML += this.oUl.innerHTML;
	this.oUl.style.width = this.aLi[0].offsetWidth  * this.aLi.length + 'px';
	//alert(this.aLi.length);
	this.left = -parseFloat(this.oUl.style.width) / 2;
	this.oUl.style.left = this.left + 'px';
	//自动
	this.timer = setInterval(function() {
		_this.fnNext();
	},
	5000);
	//鼠标移入图片不滚动
	this.oDiv.onmouseover = function() {
		clearInterval(_this.timer);
	};
	//鼠标移出图片滚动
	this.oDiv.onmouseout = function() {
		clearInterval(_this.timer);
		_this.timer = setInterval(function() {
			_this.fnNext();
		},
		5000);
	};
}

PicScroll.prototype.fnNext = function() {
	this.oUl.insertBefore(this.aLi[this.aLi.length - 1], this.aLi[0]);
	this.oUl.style.left = this.left - this.aLi[0].offsetWidth + 'px';
	startMove(this.oUl, {
		left: this.left
	});
}

function PnScroll(id) { //带左右按钮的图片滚动构造函数
	PicScroll.call(this, id);
	var _this = this;
	this.prev = getByClass(this.oDiv, 'pre_btn')[0];
	this.next = getByClass(this.oDiv, 'next_btn')[0];
	//上一个
	this.prev.onclick = function() {
		_this.fnPrev();
	};
	//下一个
	this.next.onclick = function() {
		_this.fnNext();
	};
}
for (var i in PicScroll.prototype) {
	PnScroll.prototype[i] = PicScroll.prototype[i];
}
PnScroll.prototype.fnPrev = function() {
	this.oUl.appendChild(this.aLi[0]);
	this.oUl.style.left = this.left + this.aLi[0].offsetWidth + 'px';
	startMove(this.oUl, {
		left: this.left
	});
}
new PnScroll("scroll_pic3");
////banner效果封装
//(function($) {
//	$.fn.banner = function(o) {
//		$.extend({
//			time: 400,
//			animStyle: true,
//			addclass:addclass
//		},
//		o || {});
//		var iNow = 0;
//		var timer = null;
//		var oDiv = $(this);
//		var oUl = oDiv.children('ul');
//		var aLi = $('li', oUl);
//		var oneSize = aLi.eq(0).width();
//		var animStyle = o.animStyle ? 'left': 'opacity';
//		var addclass=o.addclass;
//		//alert(oneSize);
//		var time = o.time;
//		oDiv.css({
//			'position': 'relative'
//		});
//		$('<div class="banner_index"><ul></ul></div>').appendTo(oDiv);
//		var bannerIndex = $('.banner_index ul', oDiv);
//
//		aLi.each(function(i) {
//			if (animStyle == 'opacity') {
//				if ($(this).index() == 0) {
//					$(this).css({
//						'opacity': 1
//					});
//				
//				} else {
//					$(this).css({
//						'opacity': 0
//					});
//					
//				}
//				$(this).css({
//					'position': 'absolute',
//					'left': 0,
//					'top': 0
//				});
//			} else {
//				oUl.css({
//					'width': oneSize * aLi.size(),
//					'position': 'absolute',
//					'left': 0
//				});
//			}
//			$('<li></li>').appendTo(bannerIndex);
//			//console.log(oDiv.width() + '||' + $(this).index() + '||' + oneSize);
//
//		});
//
//
//		$('li', bannerIndex).css({
//			'background-image': 'url(images/banner_index_white.png)',
//		});
//
//		$('li', bannerIndex).eq(iNow).css({
//			'background-image': 'url(images/banner_index_red.png)'
//		});
//        			
//		aLi.eq(iNow).addClass(addclass);
//		
//		var _this = aLi;
//		function fnNext(iNow) {
//			_this.eq(iNow).addClass(addclass).siblings('li').removeClass(addclass);
//			
//			$('li', bannerIndex).eq(iNow).css({
//				'background-image': 'url(images/banner_index_red.png)'
//			}).siblings('li').css({
//				'background-image': 'url(images/banner_index_white.png)'
//			});
//			if (!o.animStyle) {
//				for (var i = 0; i < _this.length; i++) {
//					if (i > iNow) {
//						_this.eq(i).stop(true, true).animate({
//							'opacity': 0
//						},
//						time);
//					} else if (i < iNow) {
//						_this.eq(i).stop(true, true).animate({
//							'opacity': 0
//						},
//						time);
//					} else {
//						_this.eq(i).stop(true, true).animate({
//
//							'opacity': 1
//						},
//						time);
//					}
//				}
//			} else {
//				oUl.stop().animate({
//					'left': -iNow * oneSize
//				});
//			}
//
//		}
//
//		timer = setInterval(function() {
//			if (iNow == _this.length - 1) {
//				iNow = 0
//			} else {
//				iNow++;
//
//			}
//			fnNext(iNow);
//		},
//		7000);
//
//		$('li', bannerIndex).each(function() {
//
//			$(this).mouseover(function() {
//				clearInterval(timer);
//				iNow = $(this).index();
//				fnNext(iNow);				
//				
//			});
//			$(this).mouseout(function() {	
//				clearInterval(timer);
//				timer = setInterval(function() {
//					if (iNow == _this.length - 1) {
//						iNow = 0
//					} else {
//						iNow++;
//
//					}
//					fnNext(iNow);
//				},
//				7000);
//			});
//
//		});
//	}
//})(jQuery);
//$('#banner').banner({time:400,animStyle:false,addclass:'bannerdh'});