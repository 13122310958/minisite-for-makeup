$(document).ready(function(){
	$("http://www.tianda120.com/subject/tdwzx/js/.highlightsright li .rsp").hide();
	$("http://www.tianda120.com/subject/tdwzx/js/.highlightsright li .text").hide();
	$(".highlightsright li").hover(function(){
	    $(this).stop().fadeTo(900,0.7);
		$(this).find(".rsp").show();
		$(this).find(".text").show();
	},function(){
	    $(this).stop().fadeTo(500,1.0);
		$(this).find(".rsp").hide();
		$(this).find(".text").hide();
	});
	$(".SevenConleft a").each(function(){
		$(".SevenConleft a").hover(function(){
		    $(".SevenConleft a").removeClass('titOn');
			var sindex = $(".SevenConleft a").index(this);
			$(this).addClass('titOn').siblings().removeClass('titOn');	
			$(".SevenConright > dl").eq(sindex).show(600).siblings("dl").hide();
		});
	});
	$(".EightCon ul li.Part1").hover(function(){
		$(".EightCon ul li.Part1").removeClass('sfhover1');
		$(".EightCon ul li.Part2").removeClass('sfhover2');
		$(".EightCon ul li.Part3").removeClass('sfhover3');
		$(".EightCon ul li.Part4").removeClass('sfhover4');
		$(this).addClass('sfhover1').siblings().removeClass('sfhover1');
        $(".EightCon").removeClass('PartCon1');
		$(".EightCon").removeClass('PartCon2');	
		$(".EightCon").removeClass('PartCon3');	
		$(".EightCon").removeClass('PartCon4');
		$(".EightCon").addClass('PartCon1').siblings().removeClass('PartCon1');
		$(".EightConBot > div").eq(0).show().siblings("div").hide();		
	});
	$(".EightCon ul li.Part2").hover(function(){
		$(".EightCon ul li.Part1").removeClass('sfhover1');
		$(".EightCon ul li.Part2").removeClass('sfhover2');
		$(".EightCon ul li.Part3").removeClass('sfhover3');
		$(".EightCon ul li.Part4").removeClass('sfhover4');
		$(this).addClass('sfhover2').siblings().removeClass('sfhover2');
		$(".EightCon").removeClass('PartCon1');
		$(".EightCon").removeClass('PartCon2');	
		$(".EightCon").removeClass('PartCon3');	
		$(".EightCon").removeClass('PartCon4');
		$(".EightCon").addClass('PartCon2').siblings().removeClass('PartCon2');
		$(".EightConBot > div").eq(1).show().siblings("div").hide();		
	});
	$(".EightCon ul li.Part3").hover(function(){
		$(".EightCon ul li.Part1").removeClass('sfhover1');
		$(".EightCon ul li.Part2").removeClass('sfhover2');
		$(".EightCon ul li.Part3").removeClass('sfhover3');
		$(".EightCon ul li.Part4").removeClass('sfhover4');
		$(this).addClass('sfhover3').siblings().removeClass('sfhover3');
		$(".EightCon").removeClass('PartCon1');
		$(".EightCon").removeClass('PartCon2');	
		$(".EightCon").removeClass('PartCon3');	
		$(".EightCon").removeClass('PartCon4');
		$(".EightCon").addClass('PartCon3').siblings().removeClass('PartCon3');
		$(".EightConBot > div").eq(2).show().siblings("div").hide();		
	});
	$(".EightCon ul li.Part4").hover(function(){
		$(".EightCon ul li.Part1").removeClass('sfhover1');
		$(".EightCon ul li.Part2").removeClass('sfhover2');
		$(".EightCon ul li.Part3").removeClass('sfhover3');
		$(".EightCon ul li.Part4").removeClass('sfhover4');
		$(this).addClass('sfhover4').siblings().removeClass('sfhover4');
		$(".EightCon").removeClass('PartCon1');
		$(".EightCon").removeClass('PartCon2');	
		$(".EightCon").removeClass('PartCon3');	
		$(".EightCon").removeClass('PartCon4');
		$(".EightCon").addClass('PartCon4').siblings().removeClass('PartCon4');
        $(".EightConBot > div").eq(3).show().siblings("div").hide();		
	});
	$(".banner6 div").each(function(){
		$(".banner6 div").hover(function(){
			$(this).addClass("hoverOn");
		},function(){
			$(this).removeClass("hoverOn");
		});
	});
    $(".keyword").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
	$(".OneConbtn").hover(function(){
		$(this).addClass("hover1");
	},function(){
		$(this).removeClass("hover1");
	});
	$(".TwoConbtn1").hover(function(){
			$(this).addClass("hover21");
		},function(){
			$(this).removeClass("hover21");
		});
	$(".TwoConbtn2").hover(function(){
			$(this).addClass("hover22");
		},function(){
			$(this).removeClass("hover22");
		});
	$(".ThreeCon .divbotL").hover(function(){
			$(this).addClass("hoverOn");
		},function(){
			$(this).removeClass("hoverOn");
	});
	$(".ThreeCon .divbotR").hover(function(){
			$(this).addClass("hoverOn");
		},function(){
			$(this).removeClass("hoverOn");
	});
	$(".FourConbtn").hover(function(){
			$(this).addClass("hover4");
		},function(){
			$(this).removeClass("hover4");
		});
	$(".SixConbtn").hover(function(){
			$(this).addClass("hover6");
		},function(){
			$(this).removeClass("hover6");
		});
    $(".EightConbtn").hover(function(){
			$(this).addClass("hover8");
		},function(){
			$(this).removeClass("hover8");
		});	
	$(".answer1 li").each(function(i){
	 $(this).click(function(){
	  $(".answer1 li").find(".answer_info").slideUp(300);
	  $(".answer1 li:eq("+i+")").find(".answer_info").slideDown(800);
	 })
	});
	$(".answer2 li").each(function(i){
	 $(this).click(function(){
	  $(".answer2 li").find(".answer_info").slideUp(300);
	  $(".answer2 li:eq("+i+")").find(".answer_info").slideDown(800);
	 })
	});
	$(".answer3 li").each(function(i){
	 $(this).click(function(){
	  $(".answer3 li").find(".answer_info").slideUp(300);
	  $(".answer3 li:eq("+i+")").find(".answer_info").slideDown(800);
	 })
	});
});
/*
$(function(){ 
 $("#daohang").scrollTo(800)
});*/
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
