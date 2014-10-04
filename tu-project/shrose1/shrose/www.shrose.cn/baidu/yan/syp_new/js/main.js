// JavaScript Document
$(function(){
	
	var exp_con = new ScrollPic();
exp_con.scrollContId = "exp_con_c";
exp_con.arrLeftId = "exp_con_l";
exp_con.arrRightId = "exp_con_r";
exp_con.frameWidth = 873;
exp_con.pageWidth = 291;
exp_con.speed = 30;
exp_con.space = 30;
exp_con.autoPlay = true;
exp_con.autoPlayTime = 2;
exp_con.initialize();
if (!- [1, ]) {
$('#exp_con_c > div > div').attr('style', 'float:left;')
};

	var exp_con = new ScrollPic();
exp_con.scrollContId = "exp_con_c1";
exp_con.arrLeftId = "exp_con_l1";
exp_con.arrRightId = "exp_con_r1";
exp_con.frameWidth = 1000;
exp_con.pageWidth = 1000;
exp_con.speed = 30;
exp_con.space = 30;
exp_con.autoPlay = true;
exp_con.autoPlayTime = 2;
exp_con.initialize();
if (!- [1, ]) {
$('#exp_con_c1 > div > div').attr('style', 'float:left;')
};

//问答JS
$(".pl_cleft").hover(
function(){
	$(this).find(".pl_cleftbm").show()
	},
function(){
	$(this).find(".pl_cleftbm").hide();
	}
)



//常见问题JS
$("#c10_lc li").hover(
		function(){
		$("#c10_lc li").children("div").hide();
		$(this).children("div").show();
		$(this).addClass("qa");
					},
		function(){
		$(this).removeClass("qa")
			}
	);
$(".huida .hd_close").click(function(){
		$(".huida").hide()
	
	});
	
//头部悬浮菜单
$(window).scroll(function(){
if($(document).scrollTop() > 500){
	$("#fdnav").addClass("fdnav_fd")
	}else if($(document).scrollTop() < 500){
		$("#fdnav").removeClass("fdnav_fd")
		}
		
	
	});
	$("#fdnavc li").hover(function(){
		$("#fdnavc li").removeClass("fdhover").eq($("#fdnavc li").index(this)).addClass("fdhover");
		
		})


});