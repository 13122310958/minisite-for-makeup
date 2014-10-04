window.onerror=function()
{
	return true;//屏蔽系统错误提示事件
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
//首页导航效果
if($("#submenu")){
	var _submenu = $("#submenu").find('.submenu1');
	var _time = 100;
	function autoScrollDown(){
		if($(".nav-submenu").css("height") == '0px'){
			if(!-[1,] && !window.XMLHttpRequest){
				$(".nav-submenu").css({"height":"435px","border-bottom":"0px solid #8c0007"}).find('.submenu1').eq(0).animate({top:'0px'},_time,function(){
					_submenu.eq(1).css("top","0px").animate({top:'109px'},_time,function(){
						_submenu.eq(2).css("top","109px").animate({top:'218px'},_time,function(){
							_submenu.eq(3).css("top","218px").animate({top:'326px'},_time);
						})
					});
				});
			}else{
				$(".nav-submenu").css({"height":"435px","border-bottom":"0px solid #8c0007"}).find('.submenu1').eq(0).animate({bottom:'-109px'},_time,function(){
					_submenu.eq(1).css("bottom","-109px").animate({bottom:'-218px'},_time,function(){
						_submenu.eq(2).css("bottom","-218px").animate({bottom:'-326px'},_time,function(){
							_submenu.eq(3).css("bottom","-326px").animate({bottom:'-435px'},_time);
						})
					});
				
				});
			}
		}
	}

	function autoScrollUp(){
		$(".nav-submenu").css({"height":"0px","border-bottom":"0px solid #8c0007"}).find('.submenu1').stop().css("bottom","0px");
		$(".nav-submenu-xl").hide().children('div').hide();
		_submenu.removeClass('submenu1-hover');
	}
	$(".navL").hover(function(){clearTimeout(_autoscroll);autoScrollDown();},function(){autoScrollUp();});
	var _autoscroll = setTimeout(function(){autoScrollUp();},0);
	_submenu.hover(function(){
		_submenu.removeClass('submenu1-hover').eq($(this).index()).addClass('submenu1-hover');
		$(".nav-submenu-xl").show().children('div').hide().eq($(this).index()).show();
	});
}
$(function(){
	$(".footertop .concon").jCarouselLite({
		    btnPrev: ".footertop .conleft",
		    btnNext: ".footertop .conright", 
			auto: 5000,
			speed: 400,
			visible: 5
	});
	$(".footertop .concon2").jCarouselLite({
		    btnPrev: ".footertop .conleft2",
		    btnNext: ".footertop .conright2", 
			auto: 5000,
			speed: 400,
			visible: 5
	});
	$(".footertopcon > div.content").not(":first").hide();
	$(".footertop .title span").hover(function(){
		var sindex = $(".footertop .title span").index(this);
		$(this).addClass('titOn').siblings().removeClass('titOn');
        $(".footertopcon > div.content").eq(sindex).show().siblings("div.content").hide();		
	});

});
//页面右侧弹出效果
if(document.getElementById('swt-right-index')){
	$("#swt-right-index ul li").hover(function(){
		$(this).children("a").addClass("swt-hover");
		$(this).stop().animate({left:"10px"},200);
	
	},function(){
		$(this).animate({left:"0px"},200,function(){
			$(this).stop().children("a").removeClass("swt-hover");
		});
	});
}
host=window.location.host;
if(host=="http://www.tianda120.com/js/www.tianda120.com"){
  $(".logoleft").html("<a href='http://www.tianda120.com/' title='上海天大医疗美容医院'><img src='logo.gif'/*tpa=http://www.tianda120.com/images/logo.gif*/ alt='上海天大医疗美容医院' /></a>");
}
else if(host=="http://www.tianda120.com/js/www.tidayy.cn"||host=="http://www.tianda120.com/js/zx.tidayy.cn"||host=="http://www.tianda120.com/js/mr.tidayy.cn"||host=="http://www.tianda120.com/js/wzx.tidayy.cn"||host=="http://www.tianda120.com/js/kq.tidayy.cn"){
  $(".logoleft").html("<a href='http://www.tidayy.cn/' title='上海天大医疗美容医院'><img src='404.html'/*tpa=http://www.tidayy.cn/images/tidayylogo.gif*/ alt='上海天大医疗美容医院' /></a>");
}
else if(host=="http://www.tianda120.com/js/www.tiandazhengxing.com"||host=="http://www.tianda120.com/js/zx.tiandazhengxing.com"||host=="http://www.tianda120.com/js/mr.tiandazhengxing.com"||host=="http://www.tianda120.com/js/wzx.tiandazhengxing.com"||host=="http://www.tianda120.com/js/kq.tiandazhengxing.com"){
 $(".logoleft").html("<a href='http://www.tiandazhengxing.com/' title='上海天大医疗美容医院'><img src='tiandazhengxinglog.gif'/*tpa=http://www.tiandazhengxing.com/images/tiandazhengxinglog.gif*/ alt='上海天大医疗美容医院' /></a>");
}
else{
 $(".logoleft").html("<a href='http://www.tianda120.com/' title='上海天大医疗美容医院'><img src='logo.gif'/*tpa=http://www.tianda120.com/images/logo.gif*/ alt='上海天大医疗美容医院' /></a>");
}