window.onerror=function(){return true;}
$(function () {
        var ie6 = /msie 6/i.test(navigator.userAgent), dv = $('#daohang'), st;
        dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
        $(window).scroll(function () 
		{
            //st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
			st = Math.max(document.body.scrollTop || document.documentElement.scrollTop)-65;
            if (st >= 483) {
                if (ie6) 
				{   
				    //IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
					dv.stop().css({'top':'0'}).animate({top:$(window).scrollTop()-175},0);
                }
                else if (dv.css('position') != 'fixed') dv.css({ 'position':'fixed', 'top':'0px'});
            } 
			else dv.css({ 'position':'absolute', 'top':'483px'});
        });
});

$(document).ready(function(){
	$(".menu a").each(function(){
		$(".menu a").hover(function(){
			$(".menu a").addClass(' ');
			$(this).addClass('titOn').siblings().removeClass('titOn');		
	   })	
    });
});
$(document).ready(function(){
	$('.One1').hover(function(){
		$('.trans', this).stop().animate({top:'0px'},{queue:false,duration:160});
	}, function() {
		$('.trans', this).stop().animate({top:'195px'},{queue:false,duration:160});
	});
	
	$('.One2').hover(function(){
		$('.trans', this).stop().animate({top:'0px'},{queue:false,duration:160});
	}, function() {
		$('.trans', this).stop().animate({top:'195px'},{queue:false,duration:160});
	});
	
	$('.One3').hover(function(){
		$('.trans', this).stop().animate({top:'0px'},{queue:false,duration:160});
	}, function() {
		$('.trans', this).stop().animate({top:'196px'},{queue:false,duration:160});
	});
	
	$('.One4').hover(function(){
		$('.trans', this).stop().animate({top:'0px'},{queue:false,duration:160});
	}, function() {
		$('.trans', this).stop().animate({top:'195px'},{queue:false,duration:160});
	});
	$('.One5').hover(function(){
		$('.trans', this).stop().animate({top:'0px'},{queue:false,duration:160});
	}, function() {
		$('.trans', this).stop().animate({top:'195px'},{queue:false,duration:160});
	});
	$('.One6').hover(function(){
		$('.trans', this).stop().animate({top:'0px'},{queue:false,duration:160});
	}, function() {
		$('.trans', this).stop().animate({top:'195px'},{queue:false,duration:160});
	});
	
    $(".TwoCon9left a").each(function(){
		$(".TwoCon9left a").hover(function(){
			var sindex = $(".TwoCon9left a").index(this);
			$(this).addClass('titOn').siblings().removeClass('titOn');		
			$(".TwoCon9right > div").eq(sindex).show().siblings("div").hide();
	   })	
	});
}); 
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