$(function () {
        var ie6 = /msie 6/i.test(navigator.userAgent), dv = $('#daohang'), st;
        dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
        $(window).scroll(function () 
		{
            //st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
			st = Math.max(document.body.scrollTop || document.documentElement.scrollTop)-65;
            if (st >= 500) {
                if (ie6) 
				{   
				    //IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
					dv.stop().css({'top':'0'}).animate({top:$(window).scrollTop()-175},0);
                }
                else if (dv.css('position') != 'fixed') dv.css({ 'position':'fixed', 'top':'0px'});
            } 
			else dv.css({ 'position':'absolute', 'top':'500px'});
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

$(function(){
	var xs = $(".c1bj");
	xs.hover(
	function(){
		xs.removeClass("hov");
		$(this).addClass("hov");

	})
})
$(document).ready(function(){
    $("http://www.tianda120.com/subject/wangshoujun/js/.TwoCon li .rsp").hide();
	$("http://www.tianda120.com/subject/wangshoujun/js/.TwoCon li .text").hide();
	$(".TwoCon li").hover(function(){
		$(this).find(".rsp").stop().fadeTo(500,0.7);
		$(this).find(".text").show();
	},function(){
		$(this).find(".rsp").stop().fadeTo(500,0);
		$(this).find(".text").hide();
	});
	$("http://www.tianda120.com/subject/wangshoujun/js/.ThreeCon2 li .rsp").hide();
	$("http://www.tianda120.com/subject/wangshoujun/js/.ThreeCon2 li .text").hide();
	$(".ThreeCon2 li").hover(function(){
		$(this).find(".rsp").stop().fadeTo(500,0.7);
		$(this).find(".text").show();
	},function(){
		$(this).find(".rsp").stop().fadeTo(500,0);
		$(this).find(".text").hide();
	});
	
	$("http://www.tianda120.com/subject/wangshoujun/js/.ThreeCon3 li .rsp").hide();
	$("http://www.tianda120.com/subject/wangshoujun/js/.ThreeCon3 li .text").hide();
	$(".ThreeCon3 li").hover(function(){
		$(this).find(".rsp").stop().fadeTo(500,0.7);
		$(this).find(".text").show();
	},function(){
		$(this).find(".rsp").stop().fadeTo(500,0);
		$(this).find(".text").hide();
	});
	
	$("http://www.tianda120.com/subject/wangshoujun/js/.FourCon li .rsp").hide();
	$("http://www.tianda120.com/subject/wangshoujun/js/.FourCon li .text").hide();
	$(".FourCon li").hover(function(){
		$(this).find(".rsp").stop().fadeTo(500,0.7);
		$(this).find(".text").show();
	},function(){
		$(this).find(".rsp").stop().fadeTo(500,0);
		$(this).find(".text").hide();
	});
	$(".SixConcon").jCarouselLite({
		    btnPrev: ".SixConL",
		    btnNext: ".SixConR",
			auto: 5000,
			speed: 500,
			visible: 1
		});
	$(".EightConcon").jCarouselLite({
		    btnPrev: ".EightConL",
		    btnNext: ".EightConR",
			auto: 3000,
			speed: 500,
			visible: 4
		});
});
//导航跟随页面浮动开始
/*$(function(){
	var bro=$.browser; 
	var binfo="";  
	if(bro.msie) {binfo=bro.version;}  
	//alert(binfo); 
	if(binfo == 6.0){
		$(window).scroll(function(){
			if($(window).scrollTop()>500){
				$("#daoghang").css('display','block');
				$("#daoghang").stop().animate({top:$(window).scrollTop()});
			}
			else{
				$("#daoghang").stop().css("top","500px");
				$("#daoghang").css('display','none');
			}
		});
	}
	else{
		$(window).scroll(function() {
			var w_scrollTop = $(window).scrollTop();
			if(w_scrollTop >500){
				 $("#daoghang").css('display','block');
			}
			else if(w_scrollTop < 500){
				$("#daoghang").css('display','none');
			}
	  	});
	}
})*/
//导航跟随页面浮动结束