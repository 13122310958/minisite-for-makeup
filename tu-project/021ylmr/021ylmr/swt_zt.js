// 商务通：
function onSWT(){
	
	var myDate = new Date();
	var _hours = myDate.getHours();
	var _time  = '';
	var _host  = window.location.host.replace(/\./g,"_");
	if(_hours > 1 && _hours < 8){_time = 'night';}
	
	if(_time == 'night'){
		window.open('http://yuyue.shrose.cn/','new');
	}else{
		var e = arguments.length ? _host+'_' + arguments[0] : _host;
		
		if(typeof openZoosUrl == 'undefined'){
			var url = 'http://shrose.zoossoft.com/LR/Chatpre.aspx?id=LFW47867796&r='+ encodeURIComponent(document.referrer);
			url = url + '&e=' + e +'&p=' + encodeURIComponent(location.href);
			try{
				window.open(url, 'news' + (new Date()).getTime());
			}catch(e){
				location.href = url;
			}
		}else{
			openZoosUrl('chatwin', '&e=' + e);
		}
	}
}
function onQQ(){window.open("http://wpa.qq.com/msgrd?v=3&uin=4006208666&site=shrose.cn&menu=no","new");}

//商务通左侧-中间
function LRfloater0_hd(){$("#LRfloater0").hide();}//左闭
function LRfloater0_hd1(){	$("#LRfloater1").hide();}//右闭


function changeURL(winName, newURL){win = window.open("", winName);win.location.href = newURL;}
function win(val){window.open('http://www.baidu.com/s?wd='+ val +'+site:shrose.cn');}
function online(){changeURL('news', 'http://shrose.zoossoft.com/LR/Chatpre.aspx?id=LFW47867796'+onSWT_hz);}


//商务通：
document.write("<script language=\"javascript\" src=\"http:\/\/shrose.zoossoft.com\/JS\/LsJS.aspx?siteid=LFW47867796\"><\/script>");

//左边
document.write("<div id=\"LRfloater0\" style=\"z-index:10000;width:130px;height:425px;left: 0px; top:120px; position:fixed; _position:absolute;*position:absolute;*bottom:auto;*top:expression(eval(document.documentElement.scrollTop + 100));\"><img id=\"LRfloater0close\" onclick=\"LRfloater0_hd();\" style=\"position:absolute;cursor:pointer; right:0px; top:0px;\" src=\"12.gif\"/*tpa=http://shrose.zoossoft.com/LR/closeimg/12.gif*/><img alt=\"如果您有什么问题,请点击此处进行即时沟通（上海玫瑰医疗美容医院专家团）\" src=\"online_cn.gif\"/*tpa=http://www.021ylmr.com/swt/online_cn.gif*/ style=\"cursor:pointer\" onclick=\"onSWT('swt_left');\"></div>");

//中间
document.write("<div id=\"LRfloater1\" style=\"z-index:10000; position: fixed !important; left: 50%; margin-left: -211px !important; top: 300px; margin-top: -100px !important;_top:expression(offsetParent.scrollTop+300); !important;*position:absolute;*bottom:auto; box-shadow:0px 3px 10px #494949;\"><img src=\"online_swt.gif\"/*tpa=http://www.021ylmr.com/swt/online_swt.gif*/ border=\"0\" usemap=\"#MapLR\"><map name=\"MapLR\"><area shape=\"rect\" coords=\"420,0,440,22\" href=\"javascript:void(0)\" onclick=\"LRfloater0_hd1();\"><area shape=\"rect\" coords=\"205,183,300,217\" href=\"javascript:onSWT('swt_center');\" alt=\"免费咨询\" /><area shape=\"rect\" coords=\"316,184,410,217\" href=\"javascript:onSWT('swt_center');\" alt=\"预约专家\" /><area shape=\"rect\" coords=\"11,25,432,180\" href=\"javascript:onSWT('swt_center');\" /></map></div>");

function chkSWT(){
	if(document.getElementById("LRfloater1")){
		if(document.getElementById("LRfloater1").style.display=="none"){
			document.getElementById("LRfloater1").style.display="block";
		}
	}setTimeout("chkSWT()",25000);
}chkSWT();
function LRfloater0_hd(){	$("#LRfloater0").hide();}
function LRfloater0_hd1(){	$("#LRfloater1").hide();}


//右侧漂浮
document.writeln("<style type=\"text\/css\">");
document.writeln(".wx-swt{ width:85px;text-align:right;padding:1px 1px 0px 1px; right: 0px; top:80px;z-index:300; overflow:hidden;  position:fixed; _position:absolute; _top:expression(offsetParent.scrollTop+100);}");
document.writeln(".wx-swt ul{ width:85px; height:335px; background:url(http://www.shrose.cn/swt/wx-swt2-bg.gif) no-repeat;}");
document.writeln(".wx-swt li{ width:85px;}");
document.writeln(".wx-swt li a{ width:85px; height:67px; display:block;}");
document.writeln(".wx-swtli1:hover{ background:url(http://www.shrose.cn/swt/wx-swt2-pic.gif-01.gif)}");
document.writeln(".wx-swtli2:hover{ background:url(http://www.shrose.cn/swt/wx-swt2-pic.gif-02.gif)}");
document.writeln(".wx-swtli3:hover{ background:url(http://www.shrose.cn/swt/wx-swt2-pic.gif-03.gif)}");
document.writeln(".wx-swtli4:hover{ background:url(http://www.shrose.cn/swt/wx-swt2-pic.gif-04.gif)}");
document.writeln(".wx-swtli5:hover{ background:url(http://www.shrose.cn/swt/wx-swt2-pic.gif-05.gif)}");
document.writeln("</style>");
document.writeln("<div class=\"wx-swt\">");
document.writeln("  <ul>");
document.writeln("   <li><a class=\"wx-swtli1\" href=\"http://qq.shrose.com.cn/tel/?=021ylmr_com_dd\" target=\"_blank\"></a></li>");
document.writeln("   <li><a class=\"wx-swtli2\" href=\"javascript:onSWT('swt_right')\"></a></li>");
document.writeln("   <li><a class=\"wx-swtli3\" href=\"http://wpa.qq.com/msgrd?v=3&uin=4006208666&e=shrose_cn\" target=\"_blank\"></a></li>");
document.writeln("   <li><a class=\"wx-swtli4\" href=\"http://t.qq.com/meiguizhengxing\" target=\"_blank\"></a></li>");
document.writeln("   <li><a class=\"wx-swtli5\" href=\"http://e.weibo.com/2424808524\" target=\"_blank\"></a></li>");
document.writeln("   </ul>");
document.writeln("   <span><a href=\"javascript:scroll(0,0);\"><img src=\"wx-swt2-pic.gif-06.gif\"/*tpa=http://www.shrose.cn/swt/wx-swt2-pic.gif-06.gif*/></a></span>");
document.writeln("</div>");



//底部浮动
document.write("<style type=\"text\/css\">#ft_swt{height:50px;width:100%;margin:0 auto;background:url(http:\/\/www.shrose.com.cn\/swt\/foot\/ft_swt_bg.png) repeat-x;z-index: 9000;bottom: 0px;top: auto;position: fixed;_position:absolute;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,2)||0)-(parseInt(this.currentStyle.marginBottom,2)||0)));}.ft_swt_c{height:50px;width:970px;margin:0 auto;}.ft_swt_txt{width:248px;height:31px;margin-top:8px;background:url(http:\/\/www.shrose.com.cn\/swt\/foot\/ft_swt_hot.png) left top no-repeat;float:left;}.ft_swt_txt div{margin:5px 0 0 31px;line-height:26px;height:26px;overflow:hidden;}.ft_swt_txt div a{display:block;line-height:26px;height:26px;color:#922e45;}.ft_swt_jpxm{padding-top:13px;float:left;position:relative;}#ft_bigxm{width:347px;height:221px;background:url(http:\/\/www.shrose.com.cn\/swt\/foot\/ft_swt_big.png) no-repeat;position:absolute;left:-83px;top:-221px;}#ft_bigxm .u1,#ft_bigxm .u3{width:118px;height:26px;float:left;dispaly:inline;}#ft_bigxm .u2,#ft_bigxm .u4{width:120px;height:26px;float:left;dispaly:inline;}#ft_bigxm .u1{padding:17px 0 0 12px;}#ft_bigxm .u2{padding:17px 0 0 90px;}#ft_bigxm .u3{padding:18px 0 0 12px;}#ft_bigxm .u4{padding:18px 0 0 100px;}#ft_bigxm ul span{color:#726831;}#ft_bigxm ul .li1{font:10px\/12px \"微软雅黑\", \"宋体\";}#ft_bigxm ul .li2{font:14px\/16px \"微软雅黑\", \"宋体\";}#ft_bigxm ul .li2 a{color:#922e45;}#ft_bigxm div{width:320px;padding:21px 0 0 12px;line-height:22px;clear:left;color:#695725;}#ft_bigxm div a.ft_yy1{color:#695725;}#ft_bigxm div a.ft_yy2{width:89px;height:16px;line-height:16px;color:#FFF;background:url(http:\/\/www.shrose.com.cn\/swt\/foot\/ft_yy2.png) no-repeat; text-align:center;float:right;margin-top:4px;}.ft_swt_lylx{padding-top:13px;padding-left:23px;float:left;display:inline;position:relative;}#ft_bigxm2{width:347px;height:221px;background:url(http:\/\/www.shrose.com.cn\/swt\/foot\/ft_swt_big2.png) no-repeat;position:absolute;left:-100px;top:-221px;}#ft_lx1{width:329px;height:163px;margin:8px 0 0 9px;}.ft_lx1n .ml14{height:30px;}.ft_lx1n .ft_p{font-family: '宋体';line-height:18px;padding:0 1px 0 4px;clear:left;}#ft_lx1 .s1{font:18px\/30px \"微软雅黑\", \"宋体\";color:#922e45;display:block;float:left;}#ft_lx1 .s2{font-size:18px;font-family:\"Simplified Arabic\", \"宋体\";margin-top:2px;color:#b2b2b2;display:block;float:left;}.mt5{margin-top:5px;}.mt10{margin-top:10px;}.ml14{margin-left:14px;}.ml16{margin-left:16px;}#ft_lx2{height:20px;line-height:20px;margin-left:9px;}#ft_lx2 ul li{width:54px;height:20px;float:left;display:inline;text-align:center;background:#a27948;color:#FFF;cursor:pointer;}#ft_lx2 ul li.li1{margin-right:1px;}#ft_lx2 ul li.focus{background:#922e45;}#ft_lx2 ul li.special{}#ft_lx3{width:341px;height:22px;margin:2px 0 0 3px;line-height:22px;border-top:1px solid #c3c3c3;}.ft_swt_qqzx{margin-top:13px;margin-left:23px;float:left;display:inline;}.ft_swt_zxzx{margin-top:13px;margin-left:20px;float:left;display:inline;}.ft_swt_yy{width:166px;height:26px;line-height:26px;margin-top:13px;margin-left:2px;float:left;display:inline;overflow:hidden;}.ft_swt_yy span{color:#922e45;}<\/style><div id=\"ft_swt\"><div class=\"ft_swt_c\">	<div class=\"ft_swt_txt\">	<div id=\"xswt_txt1\"><a href=\"javascript:onSWT('swt_foot');\">柏万青、汤宝如等众多明星首荐医院<\/a><a href=\"javascript:onSWT('swt_foot');\">汇聚韩、美、台等全球医学大师医院<\/a><a href=\"javascript:onSWT('swt_foot');\">cctv、东方卫视、大申网联合力荐医院<\/a><\/div><\/div><div class=\"ft_swt_jpxm\" id=\"xswtbt1\" onmouseover=\"document.getElementById('ft_bigxm').style.display='';\" onmouseout=\"document.getElementById('ft_bigxm').style.display='none';\"><a href=\"javascript:onSWT('swt_foot');\"><img src=\"http:\/\/www.shrose.com.cn\/swt\/foot\/ft_swt_jpxm.png\" \/><\/a><div id=\"ft_bigxm\" style=\"display:none;\" onmouseover=\"this.style.display='';\" onmouseout=\"this.style.display='none';\">	<ul class=\"u1\">	<li class=\"li1\">已开展 <span>26,500<\/span> 例<\/li><li class=\"li2\"><a href=\"http:\/\/www.shrose.cn\/baidu\/feng-xiong\/\" target=\"_blank\">大·自然动感丰胸<\/a><\/li><\/ul>	<ul class=\"u2\">	<li class=\"li1\">已开展 <span>42,316<\/span> 例<\/li><li class=\"li2\"><a href=\"http:\/\/www.shrose.cn\/baidu\/long-bi\/\" target=\"_blank\">R达拉斯综合美鼻<\/a><\/li><\/ul>	<ul class=\"u1\">	<li class=\"li1\">已开展 <span>34,601<\/span> 例<\/li><li class=\"li2\"><a href=\"http:\/\/www.shrose.cn\/baidu\/shuang-yan-pi\/\" target=\"_blank\">韩式翘睫双眼皮<\/a><\/li><\/ul>	<ul class=\"u2\">	<li class=\"li1\">已开展 <span>19,562<\/span> 例<\/li><li class=\"li2\"><a href=\"http:\/\/www.shrose.cn\/baidu\/chu-zhou\/\" target=\"_blank\">\"针功夫\"非手术<\/a><\/li><\/ul>	<ul class=\"u1\">	<li class=\"li1\">已开展 <span>32,136<\/span> 例<\/li><li class=\"li2\"><a href=\"http:\/\/www.shrose.cn\/baidu\/ji-guang-qu-ban\/\" target=\"_blank\">智能核光祛斑<\/a><\/li><\/ul>	<ul class=\"u2\">	<li class=\"li1\">已开展 <span>12,635<\/span> 例<\/li><li class=\"li2\"><a href=\"http:\/\/www.shrose.cn\/baidu\/gai-lian-xing\/\" target=\"_blank\">V-line精细改脸型<\/a><\/li><\/ul>	<ul class=\"u3\">	<li class=\"li1\">已开展 <span>31,200<\/span> 例<\/li><li class=\"li2\"><a href=\"http:\/\/www.shrose.cn\/baidu\/xi-zhi\/\" target=\"_blank\">S型多维分层吸脂<\/a><\/li><\/ul>	<ul class=\"u2\">	<li class=\"li1\">已开展 <span>52,134 例<\/li><li class=\"li2\"><a href=\"http:\/\/www.shrose.cn\/baidu\/tuo-mao\/\" target=\"_blank\">华尔兹冰点脱毛<\/a><\/li><\/ul><div><a href=\"javascript:onSWT('swt_foot');\" class=\"ft_yy2\">立即预约<\/a>现在【<a href=\"javascript:onSWT('swt_foot');\" class=\"ft_yy1\">预约<\/a>】将为您保留国际专家号一周 <\/div><\/div><\/div><div class=\"ft_swt_lylx\" onmouseover=\"document.getElementById('ft_bigxm2').style.display='';\" onmouseout=\"document.getElementById('ft_bigxm2').style.display='none';\"><a href=\"http:\/\/www.shrose.com.cn\/charm\/index_line.htm\" target=\"_blank\"><img src=\"http:\/\/www.shrose.com.cn\/swt\/foot\/ft_swt_lylx.png\" \/><\/a><div id=\"ft_bigxm2\" style=\"display:none;\" onmouseover=\"this.style.display='';\" onmouseout=\"this.style.display='none';\">	<div id=\"ft_lx1\">	<div id=\"ft_lx_1_0\" class=\"ft_lx1n\"><div class=\"ml14\"><span class=\"s1\">公交线路<\/span><span class=\"s2\">BUS<\/span><\/div><div class=\"ft_p\">·41、104、109、113、301、302、308、315、322、324、328<br\/>　329、506、584、64、802、822、837、844、929、930、<br\/>　941、955、申川专线、隧道3线、隧道夜宵线至上海火车站<br\/>　南广场下<br\/>·948、63、837、13至天目西路恒丰路下，下车后过马路可看<br\/>　见蓝与白再向前行走100米即到医院。<\/div><\/div>	<div id=\"ft_lx_1_1\" class=\"ft_lx1n\" style=\"display:none;\"><div class=\"ml14\"><span class=\"s1\">地铁<\/span><span class=\"s2\">SUBWAY<\/span><\/div><div class=\"ft_p\">·乘轨道<b>一号线<\/b>至上海火车站。（3号口出站）<br\/>·乘轨道<b>三号线<\/b>至上海火车站 北广场过地道至南广场。<br\/>　（3号口出站）<br\/>·乘轨道<b>四号线<\/b>至上海火车站 北广场过地道至南广场。<br\/>　（3号口出站）<br\/>·其他轨道线路换乘一号线或三号线或四号线至上海火车站<br\/>　下即可<\/div><\/div>	<div id=\"ft_lx_1_2\" class=\"ft_lx1n\" style=\"display:none;\"><div class=\"ml14\"><span class=\"s1\">飞机场<\/span><span class=\"s2\">ARIPORT<\/span><\/div><div class=\"ft_p mt5\"><b>·上海虹桥国际机场1号航站楼\/2号航站楼<\/b><br\/>　乘941路(友乐路迎宾一路站)上车到上海火车站南广场下车<br\/>　乘地铁10号线至陕西南路换乘1号线至上海火车站。（3号口<br\/>　出站）<br\/><b>·从上海浦东机场出发<\/b><br\/>　乘机场五线上车至上海火车站下车<\/div><\/div>	<div id=\"ft_lx_1_3\" class=\"ft_lx1n\" style=\"display:none;\"><div class=\"ml14\"><span class=\"s1\">火车站<\/span><span class=\"s2\">Railway station<\/span><\/div><div class=\"ft_p mt10\"><b>·从上海虹桥火车站出发（含高铁）<\/b><br\/>　乘941路（虹桥东交通中心站)上车至上海火车站南广场下车<br\/>　乘地铁2号线至人民广场换乘1号线至上海火车站。（3号口 <br\/>　出站）<br\/><b>·从上海南站出发<\/b><br\/>　乘地铁一号线至上海火车站。（3号口出站）<\/div><\/div>	<div id=\"ft_lx_1_4\" class=\"ft_lx1n\" style=\"display:none;\"><div class=\"ml14\"><span class=\"s1\">自驾车或打车<\/span><span class=\"s2\">SELF-DRIVING<\/span><\/div><div class=\"ft_p mt15\">·请直接开至上闸北区长安路1138号（近恒丰路），如中途<br\/>　路线不清楚，可电话咨询021-36365666，医院有免费停车<br\/>　场，方便您停车。<\/div><\/div>	<div id=\"ft_lx_1_5\" class=\"ft_lx1n\" style=\"display:none;\"><div class=\"ml14\"><span class=\"s1\">高铁<\/span><span class=\"s2\">High Speed Rail<\/span><\/div><div class=\"ft_p mt10\"><b>　高铁至上海虹桥火车站出发<\/b><br\/>·乘941路（虹桥东交通中心站)上车至上海火车站南广场下车<br\/>·乘地铁2号线至人民广场换乘1号线至上海火车站。（3号口<br\/>　出站）<\/div><\/div><\/div>	<div id=\"ft_lx2\">	<ul>	<li class=\"li1 focus\">公 交<\/li>	<li class=\"li1\">地 铁<\/li>	<li class=\"li1\">飞机场<\/li>	<li class=\"li1\">火车站<\/li>	<li class=\"li1\">自驾车<\/li>	<li>高 铁<\/li><\/ul><\/div>	<div id=\"ft_lx3\">　医院地址：上海市闸北区长安路1138号（火车站南广场西侧）<\/div><\/div><\/div><div class=\"ft_swt_qqzx\"><a href=\"http:\/\/wpa.qq.com\/msgrd?v=3&uin=4006208666&site=shrose.com.cn&menu=no&e=shrose_cn_ft\" target=\"_blank\"><img src=\"http:\/\/www.shrose.com.cn\/swt\/foot\/ft_swt_qqzx.png\" \/><\/a><\/div><div class=\"ft_swt_zxzx\"><a href=\"javascript:onSWT('swt_foot');\"><img src=\"http:\/\/www.shrose.com.cn\/swt\/foot\/ft_swt_zxzx.png\" \/><\/a><\/div><div class=\"ft_swt_yy\" id=\"ft_swt_yy\"><div onmouseover=\"javascript:clearInterval(xswt_scroll_txts);\" onmouseout=\"javascript:ft_swt_yys=setInterval('ft_swt_yy()\"\",4000);\"><span>大自然动感丰胸<\/span> 已预约<span id=\"ft_yy_01\">66<\/span>人<\/div><div onmouseover=\"javascript:clearInterval(xswt_scroll_txts);\" onmouseout=\"javascript:ft_swt_yys=setInterval('ft_swt_yy()\"\",4000);\"><span>达拉斯综合美鼻<\/span> 已预约<span id=\"ft_yy_02\">66<\/span>人<\/div><div onmouseover=\"javascript:clearInterval(xswt_scroll_txts);\" onmouseout=\"javascript:ft_swt_yys=setInterval('ft_swt_yy()\"\",4000);\"><span>华尔兹冰点脱毛<\/span> 已预约<span id=\"ft_yy_03\">66<\/span>人<\/div><div onmouseover=\"javascript:clearInterval(xswt_scroll_txts);\" onmouseout=\"javascript:ft_swt_yys=setInterval('ft_swt_yy()\"\",4000);\"><span>多维分层吸脂<\/span> 已预约<span id=\"ft_yy_04\">66<\/span>人<\/div><div onmouseover=\"javascript:clearInterval(xswt_scroll_txts);\" onmouseout=\"javascript:ft_swt_yys=setInterval('ft_swt_yy()\"\",4000);\"><span>V-line改脸型<\/span> 已预约<span id=\"ft_yy_05\">66<\/span>人<\/div><div onmouseover=\"javascript:clearInterval(xswt_scroll_txts);\" onmouseout=\"javascript:ft_swt_yys=setInterval('ft_swt_yy()\"\",4000);\"><span>智能核光祛斑<\/span> 已预约<span id=\"ft_yy_06\">66<\/span>人<\/div><div onmouseover=\"javascript:clearInterval(xswt_scroll_txts);\" onmouseout=\"javascript:ft_swt_yys=setInterval('ft_swt_yy()\"\",4000);\"><span>\"针功夫\"非手术<\/span> 已预约<span id=\"ft_yy_07\">66<\/span>人<\/div><\/div><\/div><\/div><script type=\"text\/javascript\">function xswt_scroll_txt(){$(\"#xswt_txt1 a\").eq(0).animate({marginTop:-26},function(){$(this).clone().appendTo($(this).parent()).css(\"margin-top\",\"0\");$(this).remove();});}var xswt_scroll_txts=setInterval(\"xswt_scroll_txt()\",4000);function ft_swt_yy(){$(\"#ft_swt_yy div\").eq(0).animate({marginTop:-26},function(){$(this).clone().appendTo($(this).parent()).css(\"margin-top\",\"0\");$(this).remove();});}var ft_swt_yys=setInterval(\"ft_swt_yy()\",4000);$(function(){$(\"#ft_lx2 ul li\").hover(function(){$(\"#ft_lx2 ul li\").removeClass(\"focus\");var idx=$(\"#ft_lx2 ul li\").index(this);$(\"#ft_lx2 ul li\").eq(idx).addClass(\"focus\");$(\".ft_lx1n\").hide();$(\"#ft_lx_1_\"+idx).show();});var newDs=new Date();var hs=newDs.getHours();var ms=newDs.getMinutes();ms = ms>30 ? 1: 0;var ft_yy_01=6+6*hs+ms;var ft_yy_02=5+5*hs+ms;var ft_yy_03=4+4*hs+ms;var ft_yy_04=3+3*hs+ms;var ft_yy_05=5+5*hs+ms;var ft_yy_06=2+2*hs+ms;var ft_yy_07=4+4*hs+ms;$(\"#ft_yy_01\").html(ft_yy_01);$(\"#ft_yy_02\").html(ft_yy_02);$(\"#ft_yy_03\").html(ft_yy_03);$(\"#ft_yy_04\").html(ft_yy_04);$(\"#ft_yy_05\").html(ft_yy_05);$(\"#ft_yy_06\").html(ft_yy_06);$(\"#ft_yy_07\").html(ft_yy_07);});<\/script>");


/*qq弹框*/
document.write('<style>#right_float_qq{bottom: 0px;right: 0px;z-index: 10000;position: fixed;_position:absolute;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,2)||0)-(parseInt(this.currentStyle.marginBottom,2)||0)));}</style><div id="right_float_qq"><a href="javascript:onSWT(\'swt_foot\');"><img src="qqnews.gif"/*tpa=http://www.shrose.cn/swt/qqnews.gif*/ /></a></div>');


// 图片全部替换 
var _url = window.location.pathname;//获取完整URL	
	var tmp = new Array();//临时变量，保存分割字符串
	var check = new Array();
	tmp = _url.split("/");//按照"/"分割
	var pp = tmp[tmp.length-1];//获取最后一部分，即文件名和参数  
    tmp=pp.split("?");//把参数和文件名分割开    
	check = tmp[0].split(".");
    if(/^\d+$/.test(check[0]) && check[0] < 8720){
	if($("div").hasClass("wznr")){
	if($(".wznr img").eq(0).attr("src").indexOf("bt3.png"/*tpa=http://www.021ylmr.com/js_new/bt3.png*/)==-1 && $(".wznr img").eq(0).attr("src").indexOf("bt4.png"/*tpa=http://www.021ylmr.com/js_new/bt4.png*/)==-1 && $(".wznr img").eq(0).attr("src").indexOf("alt_pc.png"/*tpa=http://www.021ylmr.com/js_new/alt_pc.png*/)==-1){
		$(".wznr img").eq(0).attr("src","http://www.shrose.cn/images/bm/bm"+Math.ceil(Math.random()*10)+".jpg");
		$(".wznr img").eq(0).attr("width","264");
		$(".wznr img").eq(0).attr("height","392");
	}
}
}

//2013.10.19
document.write('<script type="text/javascript" src = "g.js"/*tpa=http://static.gangtai.org/g.js*/ ></script>');
