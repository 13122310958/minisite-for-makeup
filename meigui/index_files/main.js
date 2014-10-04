// JavaScript Document
$(document).ready(function(){
//banner text_say hied or show <span>
	$("#ba_show").click(function(){
		$("#ba_hide").fadeIn("slow");
		$(this).siblings("span").fadeIn("slow");
		});
	$("#ba_hide").click(function(){
		$("#ba_hide").fadeOut("slow");
		$(this).siblings("span").fadeOut("slow");
		});
		
	$("#ba_show2").click(function(){
		$("#ba_hide2").fadeIn("slow");
		$(this).siblings("span").fadeIn("slow");
		});
	$("#ba_hide2").click(function(){
		$("#ba_hide2").fadeOut("slow");
		$(this).siblings("span").fadeOut("slow");
		})
		
		$("#ba_show3").click(function(){
		$("#ba_hide3").fadeIn("slow");
		$(this).siblings("span").fadeIn("slow");
		});
	$("#ba_hide3").click(function(){
		$("#ba_hide3").fadeOut("slow");
		$(this).siblings("span").fadeOut("slow");
		})
		
		$("#ba_show4").click(function(){
		$("#ba_hide4").fadeIn("slow");
		$(this).siblings("span").fadeIn("slow");
		});
	$("#ba_hide4").click(function(){
		$("#ba_hide4").fadeOut("slow");
		$(this).siblings("span").fadeOut("slow");
		})
		
		$("#ba_show5").click(function(){
		$("#ba_hide5").fadeIn("slow");
		$(this).siblings("span").fadeIn("slow");
		});
	$("#ba_hide5").click(function(){
		$("#ba_hide5").fadeOut("slow");
		$(this).siblings("span").fadeOut("slow");
		});
		
/*最后一个切换*/
	$(".b9con ul li").hover(function(){
		$(this).children("div").fadeIn("slow")
		},
		function(){
		$(this).children("div").fadeOut("slow")	
			}
		);
//右边导航滚动条滑动切换	
function Rnav_ani(){
			$("#Rnav ul").animate({marginTop:'-87px'},function(){
				$(this).children("li").eq(0).remove().appendTo($(this));
				$(this).css("margin-top","0px");
			});	
		}		
var Rnav_ani_val = setInterval(Rnav_ani,4000);		
$("#Rnav ul li").hover(function(){
			clearInterval(Rnav_ani_val);
		},function(){
				Rnav_ani_val = setInterval(Rnav_ani,4000);
				});		
				
				
//右边项目图片红色覆盖层滑动效果
//眼睛的
$("#right_yanlist ul li").hover(function(){
		$(this).children(".yan_zhezhao").stop().animate({bottom:"0px"},200);
		$(this).find("span").html("-")
},function(){
		$(this).children(".yan_zhezhao").stop().animate({bottom:"-75px"},200);
		$(this).find("span").html("+")
})			
		
})
////////
function showH(id){
	var _id = $("#"+id); 
	_id.stop().animate({bottom:"0px"},200);
}

function hideH(id){
	var _id = $("#"+id); 
	_id.stop().animate({bottom:"-87px"},200);
	}
	
	
/*PNG透明*/
function correctPNG() // correctly handle PNG transparency in Win IE 5.5 & 6. 
{ 
    var arVersion = navigator.appVersion.split("MSIE") 
    var version = parseFloat(arVersion[1]) 
    if ((version >= 5.5) && (document.body.filters)) 
    { 
       for(var j=0; j<document.images.length; j++) 
       { 
          var img = document.images[j] 
          var imgName = img.src.toUpperCase() 
          if (imgName.substring(imgName.length-3, imgName.length) == "PNG") 
          { 
             var imgID = (img.id) ? "id='" + img.id + "' " : "" 
             var imgClass = (img.className) ? "class='" + img.className + "' " : "" 
             var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' " 
             var imgStyle = "display:inline-block;" + img.style.cssText 
             if (img.align == "left") imgStyle = "float:left;" + imgStyle 
             if (img.align == "right") imgStyle = "float:right;" + imgStyle 
             if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle 
             var strNewHTML = "<span " + imgID + imgClass + imgTitle 
             + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";" 
             + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" 
             + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>" 
             img.outerHTML = strNewHTML 
             j = j-1 
          } 
       } 
    }     
} 
window.attachEvent("onload", correctPNG); 
