new Marquee({
	MSClass:["sliderbox","slider","btn-slide"],
	Direction:2,
	Step:0.3,
	Width:545,
	Height:417,
	DelayTime:5,
	WaitTime:3,
	AutoStart:1
});
$(document).ready(function(){
	$("http://www.tianda120.com/subject/hansheng/js/.TwoCon ul li .rsp").hide();
	$("http://www.tianda120.com/subject/hansheng/js/.TwoCon ul li .text").hide();
	$(".TwoCon ul li").hover(function(){
		$(this).find(".rsp").stop().fadeTo(500,0.5);
		$(this).find(".text").show();
		//$(this).find(".text").stop().animate({left:'0'}, {duration: 500});
	},function(){
		$(this).find(".rsp").stop().fadeTo(500,0);
		$(this).find(".text").hide();
		//$(this).find(".text").stop().animate({left:'0'}, {duration: "fast"});
		//$(this).find(".text").animate({left:'-400'}, {duration: 0});
	});
	$("http://www.tianda120.com/subject/hansheng/js/.ThreeCon ul li .rsp").hide();
	$("http://www.tianda120.com/subject/hansheng/js/.ThreeCon ul li .text").hide();
	$(".ThreeCon ul li").hover(function(){
		$(this).find(".rsp").stop().fadeTo(500,0.5);
		$(this).find(".text").show();
	},function(){
		$(this).find(".rsp").stop().fadeTo(500,0);
		$(this).find(".text").hide();
	});
	$("http://www.tianda120.com/subject/hansheng/js/.SixCon ul li .rsp").hide();
	$("http://www.tianda120.com/subject/hansheng/js/.SixCon ul li .text").hide();
	$(".SixCon ul li").hover(function(){
		$(this).find(".rsp").stop().fadeTo(500,0.5);
		$(this).find(".text").show();
	},function(){
		$(this).find(".rsp").stop().fadeTo(500,0);
		$(this).find(".text").hide();
	});
	$("http://www.tianda120.com/subject/hansheng/js/.FiveL ul li .rsp").hide();
	$("http://www.tianda120.com/subject/hansheng/js/.FiveL ul li .text").hide();
	$(".FiveL ul li").hover(function(){
		$(this).find(".rsp").stop().fadeTo(500,0.5);
		$(this).find(".text").show();
	},function(){
		$(this).find(".rsp").stop().fadeTo(500,0);
		$(this).find(".text").hide();
	});
});