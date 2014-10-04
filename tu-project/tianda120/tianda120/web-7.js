$(function () {
        var ie6 = /msie 6/i.test(navigator.userAgent), dv = $('#daohang'), st;
        dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
        $(window).scroll(function () 
		{
            //st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
			st = Math.max(document.body.scrollTop || document.documentElement.scrollTop)-65;
            if (st >= 748) {
                if (ie6) 
				{   
				    //IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
					//dv.css({position: 'absolute', top: st });
					dv.stop().css({'top':'0'}).animate({top:$(window).scrollTop()-175},0);
                }
                else if (dv.css('position') != 'fixed') dv.css({ 'position':'fixed', 'top':'0px'});
            } 
			else dv.css({ 'position':'absolute', 'top':'748px'});
        });
});
$(document).ready(function(){

    $("http://www.tianda120.com/subject/zhangjingtao/js/.TwoConcon li .rsp").hide();
	$("http://www.tianda120.com/subject/zhangjingtao/js/.TwoConcon li .text").hide();
	$(".TwoConcon li").hover(function(){
		$(this).find(".rsp").stop().fadeTo(500,0.5);
		$(this).find(".text").show();
	},function(){
		$(this).find(".rsp").stop().fadeTo(500,0);
		$(this).find(".text").hide();
	});
	
	$("http://www.tianda120.com/subject/zhangjingtao/js/.ThreeConcon .T04 .rsp").hide();
	$("http://www.tianda120.com/subject/zhangjingtao/js/.ThreeConcon .T04 .text").hide();
	$("http://www.tianda120.com/subject/zhangjingtao/js/.ThreeConcon .T04").hover(function(){
		$(this).find(".rsp").stop().fadeTo(500,0.5);
		$(this).find(".text").show();
	},function(){
		$(this).find(".rsp").stop().fadeTo(500,0);
		$(this).find(".text").hide();
	});
	
	$("http://www.tianda120.com/subject/zhangjingtao/js/.FourConcon li .rsp").hide();
	$("http://www.tianda120.com/subject/zhangjingtao/js/.FourConcon li .text").hide();
	$(".FourConcon li").hover(function(){
		$(this).find(".rsp").stop().fadeTo(500,0.5);
		$(this).find(".text").show();
	},function(){
		$(this).find(".rsp").stop().fadeTo(500,0);
		$(this).find(".text").hide();
	});
	
	$("http://www.tianda120.com/subject/zhangjingtao/js/.FiveConcon li .rsp").hide();
	$("http://www.tianda120.com/subject/zhangjingtao/js/.FiveConcon li .text").hide();
	$(".FiveConcon li").hover(function(){
		$(this).find(".rsp").stop().fadeTo(500,0.5);
		$(this).find(".text").show();
	},function(){
		$(this).find(".rsp").stop().fadeTo(500,0);
		$(this).find(".text").hide();
	});
	
	$("http://www.tianda120.com/subject/zhangjingtao/js/.SixConcon li .rsp").hide();
	$("http://www.tianda120.com/subject/zhangjingtao/js/.SixConcon li .text").hide();
	$(".SixConcon li").hover(function(){
		$(this).find(".rsp").stop().fadeTo(500,0.5);
		$(this).find(".text").show();
	},function(){
		$(this).find(".rsp").stop().fadeTo(500,0);
		$(this).find(".text").hide();
	});
	
});
$(".menu a").each(function(){
		$(".menu a").hover(function(){
			$(".menu a").addClass('titOff');
			$(this).addClass('titOn').siblings().removeClass('titOn');		
	   })	
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

/*sfHover2 = function() {  
    var sfEls = document.getElementById("slider").getElementsByTagName("li");  
    for (var i = 0; i < sfEls.length; i++) {  
        sfEls[i].onmouseover = function() {  
            this.className += " sfhover"  
        }  
        sfEls[i].onmouseout = function() {  
            this.className = this.className.replace(new RegExp(" sfhover\\b"), "")  
        }  
    }  
}  
if (window.attachEvent) window.attachEvent("onload", sfHover2);*/