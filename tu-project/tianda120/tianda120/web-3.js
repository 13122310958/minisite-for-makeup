$(document).ready(function(){
		$(".alzxcon").jCarouselLite({
		    btnPrev: ".alzxleft",
		    btnNext: ".alzxright",
			auto: 5000,
			speed: 500,
			visible: 3
		});
});
$(function () {
        var ie6 = /msie 6/i.test(navigator.userAgent), dv = $('#daohang'), st;
        dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
        $(window).scroll(function () 
		{
            //st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
			st = Math.max(document.body.scrollTop || document.documentElement.scrollTop)-65;
            if (st >= 438) {
                if (ie6) 
				{   
				    //IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
					//dv.css({position: 'absolute', top: st });
					dv.stop().css({'top':'0'}).animate({top:$(window).scrollTop()-180},0);
                }
                else if (dv.css('position') != 'fixed') dv.css({ 'position':'fixed', 'top':'0px'});
            } 
			else dv.css({ 'position':'absolute', 'top':'438px'});
        });
});
(function($){
	$.fn.Xs = function(options){var settings ={
			affect: 'scrollx', //效果  有scrollx|scrolly|fade|none
			speed: 1000, //动画速度
			space: 5000, //时间间隔
			auto: true, //自动滚动
			trigger: 'mouseover', //触发事件 注意用mouseover代替hover
			conbox: '.conbox', //内容容器id或class
			ctag: 'a', //内容标签 默认为<a>
			switcher: '.switcher', //切换触发器id或class
			stag: 'a', //切换器标签 默认为a
			current:'cur', //当前切换器样式名称
			rand:false, //是否随机指定默认幻灯图片
			prev:'#ban_prev',//切换上一张 id或class
			next:'#ban_next'//切换下一张	id或class
		};
		settings = $.extend({}, settings, options);
		var index = 1;
		var last_index = 0;
		var $prev=$(this).find(settings.prev);
		var $next=$(this).find(settings.next);
		var $conbox = $(this).find(settings.conbox),$contents = $conbox.find(settings.ctag);
		var $switcher = $(this).find(settings.switcher),$stag = $switcher.find(settings.stag);
		if(settings.rand) {index = Math.floor(Math.random()*$contents.length);slide();}
		if(settings.affect == 'fade'){$.each($contents,function(k, v){(k === 0) ? $(this).css({'position':'absolute','z-index':9}):$(this).css({'position':'absolute','z-index':1,'opacity':0});
			});
		}
		function slide(){if (index >= $contents.length) index = 0;if(index<0) index=$contents.length-1;
			$stag.removeClass(settings.current).eq(index).addClass(settings.current);
			switch(settings.affect){case 'scrollx':
					$conbox.width($contents.length*$contents.width());
					$conbox.stop().animate({left:-$contents.width()*index},settings.speed);
					break;
				case 'scrolly':
					$contents.css({display:'block'});
					$conbox.stop().animate({top:-$contents.height()*index+'px'},settings.speed);
					break;
				case 'fade':
					$contents.eq(last_index).stop().animate({'opacity': 0}, settings.speed/2).css('z-index',1)
							 .end()
							 .eq(index).css('z-index',9).stop().animate({'opacity': 1}, settings.speed/2)
					break;
				case 'none':
					$contents.hide().eq(index).show();
					break;
			}
			last_index = index;
			index++;
		};
		if(settings.auto) var Timer = setInterval(slide, settings.space);
		$stag.bind(settings.trigger,function(){_pause()
			index = $(this).index();
			slide();
			_continue()
		});
		$prev.bind("click",function(){_pause()
			index =last_index-1;
			slide();
			_continue()
		});
		
		$next.bind("click",function(){_pause()
			index =last_index+1;
			slide();
			_continue()
		});
		$("#tab1").mouseover(function(){
			    _pause()
                index =0;
                slide();
                _continue();
		});
        $("#tab2").mouseover(function(){
			    _pause()
                index =3;
                slide();
                _continue();
		});
		$("#tab3").mouseover(function(){
			    _pause()
                index =6;
                slide();
                _continue();
		});
		$conbox.hover(_pause,_continue);
		function _pause(){
			clearInterval(Timer);
		}
		function _continue(){
			if(settings.auto)Timer = setInterval(slide, settings.space);
		}	
	}
})(jQuery);
$(document).ready(function(){
	  $("#banC").Xs({
		affect:'fade',
		auto:true,
		trigger:'mouseover',
		conbox:'.ul_img',
		ctag:'li'
	  });
});
function switchtab(id,n,m)
{
  for(i=1;i<=m;i++){
    if(i==n){
		//document.getElementById(id+i).className="titOn";
		document.getElementById(id+i).style.display="block";
	 }
	 else{
	   //document.getElementById(id+i).className="titOff";
	   document.getElementById(id+i).style.display="none";
	 }
  }
}
function SetTabOn(ID1,ID2,Index,Count){
 for(i=1;i<=Count;i++){
    if(i==Index){
		document.getElementById(ID1+i).className="titOn";
		document.getElementById(ID2+i).style.display="block";
	 }
	 else{
	   document.getElementById(ID1+i).className="titOff";
	   document.getElementById(ID2+i).style.display="none";
	 }
 }
}
