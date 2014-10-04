jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
$(document).ready(function(){
	$(".anlicon").jCarouselLite({
		    btnPrev: ".anliL",
		    btnNext: ".anliR",
			auto: 4000,
			speed: 500,
			visible: 3
		});
	$(".tmffCon li .rsp11").hide();
	$("http://www.tianda120.com/subject/tdtuomao/js/.tmffCon li .text").hide();
	$(".tmffCon li").hover(function(){
		$(this).find(".rsp11").show();
		$(this).find(".text").show();
		
	 },function(){
		$(this).find(".rsp11").hide();
		$(this).find(".text").hide();
	});	
   $(".SevenLtop span").hover(function(){
			var sindex = $(".SevenLtop span").index(this);
			$(".SevenLtop span").removeClass('titOn');
			$(this).addClass('titOn').siblings().removeClass('titOn');		
			$(".Sconcon > div").eq(sindex).show().siblings("div").hide();
	 });
	$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T01 .tit1").hover(function(){
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T01").find(".p2").hide();
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T01").find(".p1").show();
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T01").removeClass('titOn');
		
	 });
    $("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T01 .tit2").hover(function(){
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T01").find(".p1").hide();
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T01").find(".p2").show();
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T01").addClass('titOn');
		
	 });
    $("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T02 .tit1").hover(function(){
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T02").find(".p2").hide();
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T02").find(".p1").show();
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T02").removeClass('titOn');
		
	 });
    $("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T02 .tit2").hover(function(){
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T02").find(".p1").hide();
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T02").find(".p2").show();
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T02").addClass('titOn');
		
	 });
    $("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T03 .tit1").hover(function(){
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T03").find(".p2").hide();
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T03").find(".p1").show();
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T03").removeClass('titOn');
		
	 });
    $("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T03 .tit2").hover(function(){
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T03").find(".p1").hide();
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T03").find(".p2").show();
		$("http://www.tianda120.com/subject/tdtuomao/js/.tmwdCon li.T03").addClass('titOn');
		
	 });
	$(".tmsbImg1").hover(
	function(){
		$(this).addClass("titOn1");

	},function(){
		$(this).removeClass("titOn1");
	});
	$(".tmsbImg2").hover(
	function(){
		$(this).addClass("titOn2");

	},function(){
		$(this).removeClass("titOn2");
	});
	$(".tmsbImg3").hover(
	function(){
		$(this).addClass("titOn3");

	},function(){
		$(this).removeClass("titOn3");
	});
	$(".tmsbImg4").hover(
	function(){
		$(this).addClass("titOn4");

	},function(){
		$(this).removeClass("titOn4");
	});
	 
});
//导航跟随页面浮动开始
$(function () {
        var ie6 = /msie 6/i.test(navigator.userAgent), dv = $('#daohang'), st;
        dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
        $(window).scroll(function () 
		{
            //st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
			st = Math.max(document.body.scrollTop || document.documentElement.scrollTop)-65;
            if (st >= 458) {
                if (ie6) 
				{   
				    //IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
					dv.stop().css({'top':'0'}).animate({top:$(window).scrollTop()-175},0);
                }
                else if (dv.css('position') != 'fixed') dv.css({ 'position':'fixed', 'top':'0px'});
            } 
			else dv.css({ 'position':'absolute', 'top':'458px'});
        });
});

/*解决 IE6 不支持 li:hover 的方法*/
sfHover = function() {  
    var sfEls = document.getElementsByTagName("li");  
    for (var i = 0; i < sfEls.length; i++) {  
        sfEls[i].onmouseover = function() {  
            this.className += " sfhover"  
        }  
        sfEls[i].onmouseout = function() {  
            this.className = this.className.replace(new RegExp(" sfhover\\b"), "")  
        }  
    }  
}  
if (window.attachEvent) window.attachEvent("onload", sfHover);