// JavaScript Document
/*
*样式css
*/
document.writeln("<style type=\"text/css\">");
document.writeln(".cxTipBox {");
document.writeln("    bottom: 0;");
document.writeln("    height: 157px;");
document.writeln("    left: 0;");
document.writeln("    position: fixed;");
document.writeln("    width: 321px;");
document.writeln("    z-index: 999999;");
document.writeln("}");
document.writeln(".cxTipBox-cat {");
document.writeln("    float: left;");
document.writeln("    height: 157px;");
document.writeln("    width: 24px;");
document.writeln("}");
document.writeln(".cxTipBox-btn {");
document.writeln("    float: left;");
document.writeln("    height: 157px;");
document.writeln("    position: relative;");
document.writeln("    width: 288px;");
document.writeln("}");
document.writeln(".cxClose {");
document.writeln("    display: block;");
document.writeln("    height: 11px;");
document.writeln("    position: absolute;");
document.writeln("    right: 3px;");
document.writeln("    top: 3px;");
document.writeln("    width: 11px;");
document.writeln("}");
document.writeln(".zx_link {width:96px;height:33px;display:block;position:absolute;right:20px;bottom:0; background: url(\"yuyue_1.png\"/*tpa=http://baidu.shhuamei.cn/js/images/yuyue_1.png*/) no-repeat;}");
document.writeln(".zx_link:hover {background: url(\"yuyue_2.png\"/*tpa=http://baidu.shhuamei.cn/js/images/yuyue_2.png*/) no-repeat;}");
document.writeln(".closeTipBox {");
document.writeln("    float: left;");
document.writeln("    height: 32px;");
document.writeln("    margin-top: 63px;");
document.writeln("    width: 9px;");
document.writeln("}");
document.writeln("</style>");

/*专家就诊时间悬浮弹窗*/
document.writeln("<div class=\"cxTipBox\">");
document.writeln("	<div class=\"cxTipBox-cat\" style=\"display:none;\">");
document.writeln("		<img src=\"zzsj.jpg\"/*tpa=http://baidu.shhuamei.cn/js/images/zzsj.jpg*/ width=\"24\" height=\"157\">");
document.writeln("	</div>");
document.writeln("  <div class=\"cxTipBox-btn\" style=\"display:none;\">");
document.writeln("		<img src=\"zzsj_dt.jpg\"/*tpa=http://baidu.shhuamei.cn/js/images/zzsj_dt.jpg*/ width=\"288\" height=\"157\">");
document.writeln("		<a href=\"javascript:void(0)\" class=\"cxClose\" style=\"display:none;\">");
document.writeln("			<img src=\"close.jpg\"/*tpa=http://baidu.shhuamei.cn/js/images/close.jpg*/ width=\"11\" height=\"11\">");
document.writeln("		</a>");
document.writeln("		<a href=\"call.html\"/*tpa=http://baidu.shhuamei.cn/call.html*/ target=\"_blank\" class=\"zx_link\"></a>");
document.writeln("  </div>");
document.writeln("  <a href=\"javascript:void(0)\" class=\"closeTipBox\" style=\"display:none;\">");
document.writeln("		<img src=\"open.jpg\"/*tpa=http://baidu.shhuamei.cn/js/images/open.jpg*/ width=\"9\" height=\"32\">");
document.writeln("	</a> ");
document.writeln("</div>");

setInterval(openB,5000);

function openB(){
	$(".cxTipBox-btn").show();
	$(".cxClose").show();
	$(".cxTipBox-cat").hide();
	$(".closeTipBox").hide();
}
/*$(".cxTipBox-cat").show();
$(".closeTipBox").show();*/
$(".closeTipBox").click(function(){
	$(this).parent().removeClass("cxSmallTipBox");
	$(".cxTipBox-btn").show();
	$(".cxTipBox-cat").hide();
	$(this).hide();
});
$(".cxClose").click(function(){
	$(".cxTipBox-btn").hide();
	$(".cxTipBox-btn").parent().addClass("cxSmallTipBox");
	$(".closeTipBox").show();
	$(".cxTipBox-cat").show();
})