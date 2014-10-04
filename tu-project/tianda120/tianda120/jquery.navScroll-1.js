/*
 *      导航滚动插件
 *      wirter:大树
 *      QQ：510036379
 *      用法：
		$('.navm li a').navScroll({
			navAddClass: 'cur',  
			conAddClass: 'posi',
			navH: 55,
			speedArg: 7
		});        
 */
(function($) {
	$.fn.navScroll = function(o) {
		o = $.extend({
			navAddClass: 'cur',
			conAddClass: 'posi',
			navH: 66,
			speedArg: 7
		}, o || {});
		var navAdd = o.navAddClass,conAdd = o.conAddClass,navH = o.navH,speedArg = o.speedArg;
		var _el = $(this),arrPos = [],timer = null;

		$('.' + conAdd + '').each(function() {
			arrPos.push($(this).offset().top);
		});
		_el.each(function(index) {
			$(this).attr('index', index);
			$(this).bind('click',
			function() {
				$(window).unbind('scroll', WinScroll);

				_el.each(function() {
					$(this).removeClass(navAdd);
				});

				$(this).addClass(navAdd);

				fnScroll($(this));
			});
		});
		function fnScroll(obj) {
			var iSpeed = 0;
			var iTarget = arrPos[obj.attr('index')]-navH;
			clearInterval(timer);		
			timer = setInterval(function() {			
				var cur = $(document).scrollTop(),clientH = $(window).height(),docH = $(document).height();
				if((cur+clientH-navH)>docH){
					iTarget=docH;
				}
				iSpeed = (iTarget - cur) / speedArg;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed)

				if (Math.abs(iTarget - cur) < 1) {
					clearInterval(timer);
					window.scrollTo(0, iTarget);
					$(window).bind('scroll', WinScroll);
				} else {					
					window.scrollTo(0, cur + iSpeed);
				}
			},
			30);
		}
		function WinScroll() {
			var cur = $(document).scrollTop();
			$.each(arrPos,
			function(i) {		
				if (cur >= arrPos[i]) {
					if (cur < arrPos[i + 1]) {
						_el.each(function() {
							if ($(this).attr('index') == i) {
								$(this).addClass(navAdd);
							} else {
								$(this).removeClass(navAdd);
							}
						});
					} else {
						_el.each(function() {

							if ($(this).attr('index') == arrPos.length - 1) {
								$(this).addClass(navAdd);
							} else {
								$(this).removeClass(navAdd);
							}
						});
					}
				}
			});

		};
		$(window).bind('scroll', WinScroll);
	};
})(jQuery);
$('#daohang a').navScroll({
			navAddClass: 'active',  
			conAddClass: 'scroll_a',
			navH: 41,
			speedArg: 7
});
//导航跟随页面浮动开始
$(function () {
        var ie6 = /msie 6/i.test(navigator.userAgent), dv = $('#daohang'), st;
        dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
        $(window).scroll(function () 
		{
            //st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
			st = Math.max(document.body.scrollTop || document.documentElement.scrollTop)-65;
            if (st >= 492) {
                if (ie6) 
				{   
				    //IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
					dv.stop().css({'top':'0'}).animate({top:$(window).scrollTop()-175},0);
                }
                else if (dv.css('position') != 'fixed') dv.css({ 'position':'fixed', 'top':'0px'});
            } 
			else dv.css({ 'position':'absolute', 'top':'492px'});
        });
}); 