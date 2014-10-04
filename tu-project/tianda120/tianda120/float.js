window.onerror=function(){return true;}
var mobileAgent = new Array("iphone", "ipod", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
var browser = navigator.userAgent.toLowerCase();
var isMobile = false;for (var i=0; i<mobileAgent.length; i++){
if (browser.indexOf(mobileAgent[i])!=-1){
isMobile = true;
if ((navigator.userAgent.match(/(iPad)/i))) {}
else{
		   var string;
		   var xiangmu;
           var URLstring;
           URLstring=document.URL;
           string=URLstring.split("/");
		   xiangmu = URLstring.split(".")[0];
		   xiangmu = xiangmu.split("//")[1];
           var dizhi=string[3];
		   if(dizhi=="pinpai"){
			window.location.href="http://wap.tianda120.com/ppgs/?"+location.href+"";
           	}
            else if(xiangmu=="mr"){
			window.location.href="http://wap.tianda120.com/mr/?"+location.href+"";
           	}
            else if(xiangmu=="zx"){
			window.location.href="http://wap.tianda120.com/zx/?"+location.href+"";
           	}
            else if(xiangmu=="kq"){
			window.location.href="http://wap.tianda120.com/yc/?"+location.href+"";
           	}
            else if(xiangmu=="wzx"){
			window.location.href="http://wap.tianda120.com/wzx/?"+location.href+"";
           	}
            else if(dizhi=="zhuanjia"){
			window.location.href="http://wap.tianda120.com/zj/?"+location.href+"";
           	}
			else{
            window.location.href="http://wap.tianda120.com/?"+location.href+"";
			}			  

		   }
        }
}
/*
document.write('<style>html{display:none;}</style>');
if( self == top ) {
          document.documentElement.style.display = 'block' ;
} 
else {
	if (window.location.hash=="#qzone"){
		document.documentElement.style.display = 'block' ;
	}
	else{top.location = self.location+'#iframe';}
}
*/

//document.writeln("<script language=\"javascript\" src=\"http://tida.zoossoft.com/JS/LsJS.aspx?siteid=LMM99108460\"></script>");

function onswt(){javascript:openZoosUrl('chatwin');_gaq.push(['_trackEvent','swt','zixun']);_hmt.push(['_setAutoPageview', false]);_hmt.push(['_trackPageview', '/swt/zixun/']);}
function FloatM(json){
	this.coords_rt=json.coords_rt||'0,0,0,0';//右上角关闭坐标
	this.coords_inline=json.coords_inline||'0,0,0,0';//图片中咨询坐标
	this.coords_inline_rt=json.coords_inline_rt||'0,0,0,0';//图片中咨询坐标
	this.coords_outline=json.coords_out||'0,0,0,0';//图片中关闭坐标
	this.pictype=json.pictype||'jpg';//图片格式
	//中间弹出框
	document.writeln("<img src=\"http://www.tianda120.com/js/swt/images/"+ this.pictype +"\" border=\"0\" usemap=\"#xmswt\">");
	document.writeln("<map name=\"xmswt\" id=\"xmswt\">");
	document.writeln("  <area shape=\"rect\" coords="+ this.coords_rt +" href=\"javascript:Close_online_main();\" target=\"_self\" />");
	document.writeln("  <area shape=\"rect\" coords="+ this.coords_outline +" href=\"javascript:Close_online_main();\" target=\"_self\"/>");
	document.writeln("  <area shape=\"rect\" coords="+ this.coords_inline +" href=\"javascript:openZoosUrl(\'chatwin\');\" target=\"_self\" onclick=\"_gaq.push([\'_trackEvent\',\'swt\',\'zixun\']);_hmt.push([\'_setAutoPageview\', false]);_hmt.push([\'_trackPageview\', \'/swt/zixun/\']);\"/>");
	document.writeln("  <area shape=\"rect\" coords="+ this.coords_inline_rt +" href=\"javascript:openZoosUrl(\'chatwin\');\" target=\"_self\" onclick=\"_gaq.push([\'_trackEvent\',\'swt\',\'zixun\']);_hmt.push([\'_setAutoPageview\', false]);_hmt.push([\'_trackPageview\', \'/swt/zixun/\']);\"/>");
	document.writeln("</map>");
}
function SetLiDivOn1(){
	document.getElementById('zfdcbxli1').className='liOn';
	document.getElementById('zfdcbximg1').style.display='block';
	document.getElementById('zfdcbxli2').className="";
	document.getElementById('zfdcbximg2').style.display="none";
}
function SetLiDivOn2(){
	document.getElementById('zfdcbxli2').className="liOn";
	document.getElementById('zfdcbximg2').style.display="block";
	document.getElementById('zfdcbxli1').className='';
	document.getElementById('zfdcbximg1').style.display='none';
}
function SetDivHidden(){
	document.getElementById('zuofudong').style.display='none';
	document.getElementById('zuoguanbi').style.display='none';
}
document.write('<style>*html{background-image:url(about:blank);background-attachment:fixed;}</style>')
document.writeln("<script type=\"text\/javascript\">");
document.writeln("if(typeof document.compatMode!=\'undefined\'&&document.compatMode!=\'BackCompat\'){");
document.writeln("    cot_t1_DOCtp2=\"_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));}\";");
document.writeln("    cot_t1_DOCtp1=\"_top:expression(document.documentElement.scrollTop+document.documentElement.clientHeight-this.clientHeight);}\";");
document.writeln("    cot_t1_DOCtp=\"_top:expression(document.documentElement.scrollTop+(document.documentElement.clientHeight-this.clientHeight)/2);\"");
document.writeln("    cot_t1_DOCtp+=\"top: 50%; margin-top: -115px ! important;_margin-top: 0px;\"");
document.writeln("    cot_t1_DOCtp+=\"left: 50%; margin-left: -195px ! important;}\";");
document.writeln("}else{");
document.writeln("    cot_t1_DOCtp2=\"_top:expression(document.body.scrollTop+(document.body.clientHeight-this.clientHeight)/2);}\";");
document.writeln("    cot_t1_DOCtp1=\"_top:expression(document.body.scrollTop+document.body.clientHeight-this.clientHeight);}\";");
document.writeln("    cot_t1_DOCtp=\"_top:expression(document.body.scrollTop+(document.body.clientHeight-this.clientHeight)/2);\";");
document.writeln("    cot_t1_DOCtp+=\"top: 50%; margin-top: -115px ! important;_margin-top: 0px;\"");
document.writeln("    cot_t1_DOCtp+=\"left: 50%; margin-left: -195px ! important;}\";");
document.writeln("}");
document.writeln("var fdc_bodyCSS=\'\';");
//document.writeln("var fdcCSS=\'#online_main{width:390px;height:230px;z-index:9999;position:fixed ! important;display:none;\';");
document.writeln("var fdcCSS=\'#online_main a{position:relative;z-index:999999;display:block;}#online_main{z-index:9999;position:fixed ! important;display:none;\';");
document.writeln("var fdcCSS=fdcCSS+\'_position:absolute;\';");
//document.writeln("var fdcCSS=fdcCSS+\'top:180px;\';");
document.writeln("var fdcCSS=fdcCSS+\'clip:rect(0 100% 100% 0);\';");
document.writeln("var fdcCSS=fdcCSS+cot_t1_DOCtp;");
document.writeln("var fdcCSS1=\'#fdc1{width:980px;height:52px;position:fixed;z-index:9999;\';");
document.writeln("var fdcCSS1=fdcCSS1+\'_position:absolute;\';");
document.writeln("var fdcCSS1=fdcCSS1+\'bottom:0px;\';");
document.writeln("var fdcCSS1=fdcCSS1+\'clip:rect(0 100% 100% 0);\';");
document.writeln("var fdcCSS1=fdcCSS1+cot_t1_DOCtp1;");
//document.writeln("var fdcCSS2=\'#online{width:320px;height:210px;position:fixed;z-index:9999;_position:absolute;bottom:0;clip:rect(0 100% 100% 0);right:0px;display:none;\'");
document.writeln("var fdcCSS2=\'#online{width:341px;height:235px;position:fixed;z-index:9999;_position:absolute;bottom:0;clip:rect(0 100% 100% 0);right:0px;display:none;\'");
//document.writeln("var fdcCSS3=\'#online_mini{width:337px;height:197px;position:fixed;z-index:9999;_position:absolute;bottom:0;clip:rect(0 100% 100% 0);right:0px;display:none;\'");
document.writeln("var fdcCSS3=\'#online_mini{width:320px;height:77px;position:fixed;z-index:9999;_position:absolute;bottom:0;clip:rect(0 100% 100% 0);right:0px;display:none;\'");
document.writeln("var fdcCSS2=fdcCSS2+cot_t1_DOCtp2;");
document.writeln("var fdcCSS3=fdcCSS3+cot_t1_DOCtp2;");
document.writeln("document.write(\'<style type=\"text\/css\">\'+fdc_bodyCSS+fdcCSS+fdcCSS1+fdcCSS2+fdcCSS3+\'<\/style>\');");
document.writeln("<\/script>");
document.writeln("<script type=\"text/javascript\" src=\"jquery.js\"/*tpa=http://www.tianda120.com/js/swt/jquery.js*/></script>");/*jquery*/
document.writeln("<script type=\"text/javascript\" src=\"jquery.cookie.js\"/*tpa=http://www.tianda120.com/js/swt/jquery.cookie.js*/></script>");/*jquery cookie*/
document.writeln("<script type=\"text/javascript\" src=\"public.js\"/*tpa=http://www.tianda120.com/js/swt/public.js*/></script>");/*公共函数*/
document.writeln("<script type=\"text/javascript\" src=\"invited.js\"/*tpa=http://www.tianda120.com/js/swt/invited.js*/></script>");/*SWT邀请*/
document.writeln("<script type=\"text/javascript\" src=\"count.js\"/*tpa=http://www.tianda120.com/js/swt/count.js*/></script>");/*SWT邀请*/
document.writeln("<div id=\"online_main\">");
host = window.location.host;
var string;
var URLstring;
URLstring=document.URL;
string=URLstring.split("/");
var xiangmu=string[3];
var zhuanti=string[4];
var wenzhang=string[5];
if(zhuanti=="nenfu"||xiangmu=="nenfu"){
 //new FloatM({coords_rt:'362,4,385,28',coords_inline:'44,165,157,196',pictype:'nenfuswt.jpg'/*tpa=http://www.tianda120.com/js/swt/nenfuswt.jpg*/});
 new FloatM({coords_rt:'376,0,395,19',coords_inline:'142,195,255,226',pictype:'swtnenfu.jpg'/*tpa=http://www.tianda120.com/js/swt/swtnenfu.jpg*/});
}
/*else if(zhuanti=="tdquban"||zhuanti=="quban"){
new FloatM({coords_rt:'362,4,385,28',coords_inline:'40,175,153,206',pictype:'qubanswt.jpg'/*tpa=http://www.tianda120.com/js/swt/qubanswt.jpg*/});
}*/
else if(zhuanti=="tdquban"||zhuanti=="quban"||xiangmu=="quban"){
  new FloatM({coords_rt:'419,1,438,20',coords_inline:'220,198,333,229',pictype:'swtquban.jpg'/*tpa=http://www.tianda120.com/js/swt/swtquban.jpg*/});
}
else if(zhuanti=="tdsplx"||zhuanti=="shuangpai"){
new FloatM({coords_rt:'362,4,385,28',coords_inline:'45,155,157,187',pictype:'longxiongswt.jpg'/*tpa=http://www.tianda120.com/js/swt/longxiongswt.jpg*/});
}
else if(xiangmu=="xiongbu"){
new FloatM({coords_rt:'418,1,438,21',coords_inline:'82,141,186,171',pictype:'imgtdlxzt.jpg'/*tpa=http://www.tianda120.com/js/swt/imgtdlxzt.jpg*/});
}
else if(zhuanti=="tdlxzt"){
new FloatM({coords_rt:'418,1,438,21',coords_inline:'82,141,186,171',pictype:'imgtdlxzt.jpg'/*tpa=http://www.tianda120.com/js/swt/imgtdlxzt.jpg*/});
}
else if(zhuanti=="bzxzt"||zhuanti=="hgzhbzx"){
new FloatM({coords_rt:'362,4,385,28',coords_inline:'34,159,146,189',pictype:'longbiswt.jpg'/*tpa=http://www.tianda120.com/js/swt/longbiswt.jpg*/});
}
else if(zhuanti=="shuangyanpi"){
new FloatM({coords_rt:'362,4,385,28',coords_inline:'198,167,315,204',pictype:'sypswt.jpg'/*tpa=http://www.tianda120.com/js/swt/sypswt.jpg*/});
}
else if(zhuanti=="jgrzs"){
 new FloatM({coords_rt:'362,4,386,27',coords_inline:'36,176,150,207',pictype:'swtxz.jpg'/*tpa=http://www.tianda120.com/js/swt/swtxz.jpg*/});
}
else if(zhuanti=="xizhi"){
 new FloatM({coords_rt:'362,4,386,27',coords_inline:'36,176,150,207',pictype:'swtxz.jpg'/*tpa=http://www.tianda120.com/js/swt/swtxz.jpg*/});
}
else if(xiangmu=="zhengxing"&&zhuanti=="xizhi"){
 new FloatM({coords_rt:'362,4,386,27',coords_inline:'36,176,150,207',pictype:'swtxz.jpg'/*tpa=http://www.tianda120.com/js/swt/swtxz.jpg*/});
}
else if(zhuanti=="tdwzx"){
new FloatM({coords_rt:'362,4,385,28',coords_inline:'53,180,165,210',pictype:'wzxswt.jpg'/*tpa=http://www.tianda120.com/js/swt/wzxswt.jpg*/});
}
else if(zhuanti=="zsmr"){
  new FloatM({coords_rt:'362,4,385,28',coords_inline:'53,180,165,210',pictype:'wzxswt.jpg'/*tpa=http://www.tianda120.com/js/swt/wzxswt.jpg*/});
}
else if(zhuanti=="tdmyz"){
  new FloatM({coords_rt:'362,4,385,28',coords_inline:'53,180,165,210',pictype:'wzxswt.jpg'/*tpa=http://www.tianda120.com/js/swt/wzxswt.jpg*/});
}
else if(xiangmu=="weizhengxing"){
 new FloatM({coords_rt:'356,6,381,31',coords_inline:'62,164,179,199',pictype:'imgjydbzt.jpg'/*tpa=http://www.tianda120.com/js/swt/imgjydbzt.jpg*/});
}
else if(host=="http://www.tianda120.com/js/swt/wzx.tianda120.com"&&URLstring!="http://wzx.tianda120.com/mianbu/1005.html"){
new FloatM({coords_rt:'356,6,381,31',coords_inline:'62,164,179,199',pictype:'imgjydbzt.jpg'/*tpa=http://www.tianda120.com/js/swt/imgjydbzt.jpg*/});
}
else if(xiangmu=="chuzhou"){
 new FloatM({coords_rt:'356,6,381,31',coords_inline:'62,164,179,199',pictype:'imgjydbzt.jpg'/*tpa=http://www.tianda120.com/js/swt/imgjydbzt.jpg*/});
}
else if(xiangmu=="mianbu"&&URLstring!="http://wzx.tianda120.com/mianbu/1005.html"){
 new FloatM({coords_rt:'356,6,381,31',coords_inline:'62,164,179,199',pictype:'imgjydbzt.jpg'/*tpa=http://www.tianda120.com/js/swt/imgjydbzt.jpg*/});
}
else if(URLstring=="http://wzx.tianda120.com/mianbu/1005.html"){
  new FloatM({coords_rt:'362,4,385,28',coords_inline:'209,178,322,212',pictype:'bzxztswt.jpg'/*tpa=http://www.tianda120.com/js/swt/bzxztswt.jpg*/});
}
else if(host=="http://www.tianda120.com/js/swt/wzx.tianda120.com"&&xiangmu=="shoulian"){
  new FloatM({coords_rt:'362,4,385,28',coords_inline:'53,180,165,210',pictype:'wzxswt.jpg'/*tpa=http://www.tianda120.com/js/swt/wzxswt.jpg*/});
}
else if(xiangmu=="bibu"){
  new FloatM({coords_rt:'362,4,385,28',coords_inline:'209,178,322,212',pictype:'bzxztswt.jpg'/*tpa=http://www.tianda120.com/js/swt/bzxztswt.jpg*/});
}
else if(zhuanti=="tdlbzx"){
  new FloatM({coords_rt:'362,4,385,28',coords_inline:'209,178,322,212',pictype:'bzxztswt.jpg'/*tpa=http://www.tianda120.com/js/swt/bzxztswt.jpg*/});
}

else if(xiangmu=="kouqiang"||zhuanti=="yachi2"||zhuanti=="ycmb2"||zhuanti=="kaociya"){
new FloatM({coords_rt:'362,4,385,28',coords_inline:'198,168,310,198',pictype:'ykswt.jpg'/*tpa=http://www.tianda120.com/js/swt/ykswt.jpg*/});
}
else{
document.writeln("<script type=\"text/javascript\" data-lxb-uid=\"709563\" data-lxb-gid=\"46529\" src=\"http://lxbjs.baidu.com/api/asset/api.js?t=\' + new Date().getTime() + \'\" charset=\"utf-8\"></script>");
document.writeln("<div style=\"width:420px;height:290px;_height:270px;padding-top:22px;_padding-top:22px;background:url(http://www.tianda120.com/js/swt/images/swtbg-1.png) no-repeat;_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true', sizingMethod='scale', src='swtbg-1.png'/*tpa=http://www.tianda120.com/js/swt/images/swtbg-1.png*/);_background:none;dsiplay:block;overflow:hidden;z-index:99999;\"><div style=\"z-index:999999;width:390px;height:217px;margin:0 auto;padding:0;background:url(http://www.tianda120.com/js/swt/images/swtbg111.gif) top no-repeat;\"><div style=\"float:right;margin:3px;display:inline;z-index:99999;\"><a style=\"position:relative;z-index:999999;display:block;\" href=\"javascript:Close_online_main();\" target=\"_self\"><img src=\"close.gif\"/*tpa=http://www.tianda120.com/js/swt/images/close.gif*/ width=\"22\" height=\"22\" /></a></div><div style=\"position:relative;width:222px;height:20px;float:left;margin:100px 0 0 145px;display:inline;overflow:hidden;\"><input type=\"text\" style=\"position:relative;float:left;width:158px;height:18px;line-height:18px;border:1px solid #f8f0f0;font-size:12px;color:#afb0b2;background:#fff;padding:0 0 0 5px;margin:0;\" id=\"telinput\" value=\"请输入你的电话号码\" onclick=\"if(this.value=='请输入你的电话号码'){this.value='';}\" onblur=\"if(this.value==''){this.value='请输入你的电话号码';}\" /><input type=\"button\" value=\"给您回电\" style=\"position:relative;float:left;background:url(http://www.tianda120.com/js/swt/images/callbtn.jpg) no-repeat;font-size:12px;line-height:50px;height:19px;width:54px;text-indent:9999px;overflow:hidden;border:0;display:inline;cursor:pointer;padding:0 0 0 0;margin:0 auto;\" id=\"callbtn\" /></div><div style=\"position:relative;width:222px;float:left;display:inline;margin:20px 0 0 145px;\"><a style=\"position:relative;z-index:999999;display:block;\" onclick=\"_gaq.push([\'_trackEvent\',\'swt\',\'zixun\']);_hmt.push([\'_setAutoPageview\', false]);_hmt.push([\'_trackPageview\', \'/swt/zixun/\']);\" href=\"javascript:openZoosUrl(\'chatwin\');\" target=\"_self\"><img src=\"zixun.jpg\"/*tpa=http://www.tianda120.com/js/swt/images/zixun.jpg*/ width=\"106\" height=\"34\" style=\"float:left;\"/></a><a style=\"position:relative;z-index:999999;display:block;\" onclick=\"_gaq.push([\'_trackEvent\',\'swt\',\'zixun\']);_hmt.push([\'_setAutoPageview\', false]);_hmt.push([\'_trackPageview\', \'/swt/zixun/\']);\" href=\"javascript:openZoosUrl(\'chatwin\');\" target=\"_self\"><img src=\"yuyue.jpg\"/*tpa=http://www.tianda120.com/js/swt/images/yuyue.jpg*/ width=\"106\" height=\"34\" style=\"margin-left:10px;float:left;\"/></a></div></div><div id=\"ys\" style=\"width:366px;height:24px;margin:0 auto;padding:0;background:#380000;overflow:hidden;filter:alpha(opacity=95);opacity:0.95;\"><ul style=\"background:none;list-style:none;padding:0;margin:0;font-size:12px;color:#fff\"><li style=\"width:360px;line-height:24px;height:24px;list-style:none;padding:0 0 0 5px;margin:0;\"><div style=\"width:180px;float:left\">优势1：沪上皮肤美容优势专科医院</div><div style=\"width:180px;float:left\">优势2：中韩合作整形医院</div></li><li style=\"width:360px;line-height:24px;height:24px;list-style:none;padding:0 0 0 5px;margin:0;float:left\"><div style=\"width:180px;float:left\">优势3：中华见义勇为容貌救护站</div><div style=\"width:179px;float:left\">优势4：妙桃隆胸5S特约整形机构</div></li><li style=\"width:360px;line-height:24px;height:24px;list-style:none;padding:0 0 0 5px;margin:0;float:left\"><div style=\"width:180px;float:left\">优势5：全国6项整形专利技术医院</div><div style=\"width:180px;float:left\">优势6：世界小姐大赛指定整形基地</div></li><li style=\"width:360px;line-height:24px;height:24px;list-style:none;padding:0 0 0 5px;margin:0;float:left\">当前有<span id=\"zxzx\" style=\"color:#C00\"></span>位客人正在咨询中，<span id=\"mang\" style=\"color:#C00\"></span>位专家<span style=\"color:#C00\">繁忙</span>，<span id=\"xian\" style=\"color:#C00\"></span>位专家<span style=\"color:#093\">空闲</span></li></ul></div></div>");
document.writeln("<script>");
document.writeln("document.getElementById(\"callbtn\").onclick = function () {");
document.writeln("lxb.call(document.getElementById(\"telinput\"));");
document.writeln("};");
document.writeln("</script>");
}
document.writeln("</div>");

//左浮动
document.writeln("<style type=\'text/css\'>");
document.writeln("#zfdc{position:absolute;left:3px;top:275px;width:131px;height:160px;display:block;}");
document.writeln("#zfdc a{display:block;cursor:pointer;}");
document.writeln("#zfdc .zfdcbx{width:125px;height:127px;margin:0 auto;background:#fff;display:block;}");
document.writeln("#zfdc .zfdcbx img{width:125px;height:105px;margin:0 auto;border:0;cursor:pointer;}");
document.writeln("#zfdc .zfdcbx h3{width:125px;height:20px;line-height:20px;margin:0 auto;display:block;overflow:hidden;color:#262626;text-align:center;font-weight:normal;font-size:12px;}");
document.writeln("</style>");
document.writeln("<div id=\'zuofudong\' style=\'width:137px;height:475px;background:url(http://www.tianda120.com/js/swt/images/ZLfudong.gif) no-repeat;z-index:10000;position:fixed;left:10px;top:60px;_position:absolute;_top:expression(eval(document.documentElement.scrollTop+50));_left:expression(eval(document.documentElement.scrollLeft)););\'>");
document.writeln("<a style=\'z-index:10000;width:137px;height:200px;position:absolute;left:0px;top:75px;display:block;\' href=\'javascript:onswt()\' target=\'_self\'></a>");
document.writeln("<div id=\'zfdc\'>");
document.writeln("	<div class=\'zfdcbx\'>");
document.writeln("	      <h3>扫微信，优惠随时掌握</h3>");
document.writeln("		  <img id=\'zfdcbximg1\' style=\'display:block\' src=\'ZLfdewm_02.gif\'/*tpa=http://www.tianda120.com/js/swt/images/ZLfdewm_02.gif*/ alt=\'扫微信二维码，优惠随时掌握\' />");
document.writeln("	</div>");
document.writeln("</div>");
document.writeln("<a style=\'z-index:10000;width:118px;height:30px;position:absolute;left:11px;top:410px;display:block;\' href=\'javascript:onswt()\' target=\'_self\'></a>");
document.writeln("</div>");
document.writeln("<div id=\'zuoguanbi\' style=\'z-index:10000;position:fixed;left:133px;top:47px;cursor:pointer;_position:absolute;_top:expression(eval(document.documentElement.scrollTop+40));_left:expression(eval(document.documentElement.scrollLeft)););\'><a href=\'javascript:SetDivHidden();\' onclick=\'SetDivHidden();\' target=\'_self\' ><img src=\'ico_close.gif\'/*tpa=http://www.tianda120.com/js/swt/images/ico_close.gif*//></a></div>");//右浮动

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "hm.js-f210b30f28be6bd7de6414242eb63a13"/*tpa=http://hm.baidu.com/hm.js?f210b30f28be6bd7de6414242eb63a13*/;
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();