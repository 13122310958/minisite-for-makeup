// JavaScript Document
//bannerÐ§¹û·â×°

(function($) {
	$.fn.banner = function(o) {
		$.extend({
			time: 400,
			animStyle: true,
			addclass:addclass,
			isAllScreen:false
		},
		o || {});
		var iNow = 0;
		var timer = null;
		var oDiv = $(this);
		var oUl = oDiv.find('ul');
		var aLi = $('li', oUl);		
		var oneSize = aLi.eq(0).outerWidth();
		var animStyle = o.animStyle ? 'left': 'opacity';
		var addclass=o.addclass;
		var time = o.time;
		oDiv.css({
			'position': 'relative'
		});
		$('<a href="javascript:void(0)" class="pre_btn"></a><a href="javascript:void(0)" class="next_btn"></a>').appendTo(oDiv);
		function _winCenter(){
				if($(window).width()>1024){
				oDiv.width($(window).width());
				}
				else {
						oDiv.width(1180);
				}
		};
		_winCenter();
		$(window).resize(function(){
				_winCenter();
				aLi.css("width",$(window).width());
				oneSize=$(window).width();
		});
		if(!o.isAllScreen){
				aLi.css("width",$(window).width());
		}

		aLi.each(function(i) {
			
			$(this).index=i;
			if (animStyle == 'opacity') {
				if ($(this).index() == 0) {
					$(this).css({
						'opacity': 1
					});
				
				} else {
					$(this).css({
						'opacity': 0
					});
					
				}
				$(this).css({
					'position': 'absolute',
					'left': 0,
					'top': 0
				});
			} else {
				oUl.css({
					'width': oneSize * aLi.size(),
					'position': 'absolute',
					'left': 0
				});
			}

		});    			
		aLi.eq(iNow).addClass(addclass);
		
		var _this = aLi;
		function fnNext(iNow) {
			_this.eq(iNow).addClass(addclass).siblings('li').removeClass(addclass);
			if (!o.animStyle) {
				for (var i = 0; i < _this.length; i++) {
					if (i > iNow) {
						_this.eq(i).stop(true, true).animate({
							'opacity': 0,
							'zIndex':1
						},
						time);
					} else if (i < iNow) {
						_this.eq(i).stop(true, true).animate({
							'opacity': 0,
							'zIndex':1
						},
						time);
					} else {
						_this.eq(i).stop(true, true).animate({

							'opacity': 1,
							'zIndex':2
						},
						time);
					}
				}
			} else {
				oUl.stop().animate({
					'left': -iNow * oneSize
				});
			}

		};

		timer=setInterval(toRun,5000);
		function toRun() {
			iNow == _this.length - 1?iNow = 0:iNow++;
			fnNext(iNow);
		};
	_this.mouseover(function(e) {
        clearInterval(timer);
    });
	_this.mouseover(function(e) {
        timer=setInterval(toRun,5000);
    });
	$(".pre_btn").click(function(e) {
			clearInterval(timer);
			iNow==0?iNow=_this.length - 1:iNow--;
			fnNext(iNow);
			timer=setInterval(toRun,5000);
        });
	$(".next_btn").click(function(e) {
			clearInterval(timer);
			iNow == _this.length - 1?iNow = 0:iNow++;
			fnNext(iNow);
			timer=setInterval(toRun,5000);
        });
	}
})(jQuery);
$('#scroll_pic').banner({time:400,animStyle:true,addclass:'bannerdh',isAllScreen:false});
$('#scroll_pic1').banner({time:400,animStyle:true,addclass:'bannerdh',isAllScreen:false});
$('#scroll_pic4').banner({time:400,animStyle:true,addclass:'bannerdh',isAllScreen:true});
$(function(){
		
		
	$(".box8_1_r li").each(function(i){
		$(this).mouseover(function(){
				$(".box8_1_r li a").removeClass("active");
				$(".box8_1_r li a").eq(i).addClass("active");
				$(".box8_1_m li").removeClass("active");
				$(".box8_1_m li").css("zIndex",1);
				$(".box8_1_m li").eq(i).css("zIndex",2);
				$(".box8_1_m li").eq(i).addClass("active");
				$(".box8_1_l h3").hide();
				$(".box8_1_l h3").eq(i).show();
				$(".box8_1_l p").hide();
				$(".box8_1_l p").eq(i).show();
			})
	});
		var $botox2=$(".botox2");
		var $botox1=$(".botox1");
		var $botox1_li=$("li",$botox1);
		var $botox2_li=$("li",$botox2);
		var oneWidth=$botox1_li.width();
		var duration=400;
		var iNow=0;
		$botox2_li.each(function(i) {
            $botox1_li.css({"left":oneWidth});
			$botox1_li.eq(0).css({"left":0});
			$(this).click(function(e) {
                if(iNow<i){
					$botox1_li.eq(i).css("left",oneWidth);
					$botox1_li.eq(iNow).animate({"left":-oneWidth},duration);
					}
				else if(iNow>i){
						$botox1_li.eq(i).css("left",-oneWidth);
					$botox1_li.eq(iNow).animate({"left":oneWidth},duration);
					}
				$botox1_li.eq(i).animate({"left":0},duration);
				iNow=i;
            });
        });
		
	
	})




