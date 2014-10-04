document.writeln("<style type=\"text/css\">");
document.writeln("	*html, _html {");
document.writeln("	background-image:url(about:blank);");
document.writeln("	background-attachment:fixed;");
document.writeln("}");
document.writeln("body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td, img {");
document.writeln("	border:medium none;");
document.writeln("	margin: 0;");
document.writeln("	padding: 0;");
document.writeln("}");
document.writeln("body, button, input, select, textarea {");
document.writeln("	font: 12px/1.5 \"΢���ź�\", Verdana, Geneva, sans-serif, tahoma, Srial, helvetica, sans-serif;");
document.writeln("}");
document.writeln("body {");
document.writeln("	");
document.writeln("	line-height:22px;");
document.writeln("	color:#343434;");
document.writeln("");
document.writeln("}");
document.writeln("h1, h2, h3, h4, h5, h6 {");
document.writeln("	font-size: 100%;");
document.writeln("}");
document.writeln("em {");
document.writeln("	font-style:normal;");
document.writeln("}");
document.writeln("ul, ol {");
document.writeln("	list-style: none;");
document.writeln("}");
document.writeln("a {");
document.writeln("	text-decoration: none;");
document.writeln("	color:#333;");
document.writeln("}");
document.writeln("a:hover,a:focus {");
document.writeln("	text-decoration: underline;");
document.writeln("	color:#F40;");
document.writeln("	outline:none;");
document.writeln("}");
document.writeln("img {");
document.writeln("	border:0px;");
document.writeln("	vertical-align: middle;");
document.writeln("}");
document.writeln("table {");
document.writeln("	border-collapse: collapse;");
document.writeln("	border-spacing: 0;");
document.writeln("}");
document.writeln(".clearfix:before,.clearfix:after {content:\"\";display:table;}");
document.writeln(".clearfix:after {clear:both;overflow:hidden;}");
document.writeln(".clearfix {zoom:1;}");
document.writeln(".right_slide_swt {width:450px;height:100%;position:fixed;z-index:99999;right:-400px;top:0; background-color:#fff;_position: absolute;_top:expression(offsetParent.scrollTop);_left:expression(eval(document.documentElement.scrollLeft+document.documentElement.clientWidth-this.offsetWidth));");
document.writeln("-webkit-box-shadow: -1px 0px 5px rgba(0, 0, 0, 0.4);-moz-box-shadow: -1px  0px 5px rgba(0, 0, 0, 0.4);");
document.writeln("box-shadow: -1px 0px 5px rgba(0, 0, 0, 0.4);}");
document.writeln(".right_slide_tabs {width:50px;height:100%; background-color:#f8f8f8;position:relative;float:left;}");
document.writeln(".right_slide_tabs .inner {width:50px;height:350px;position:relative;left:0;top:50%;margin-top:-175px;}");
document.writeln(".open_slide {width:50px;height:50px;display:block; background:url(/swt/images/icon.png) no-repeat 0 -110px;position:absolute;left:0;top:0;cursor:pointer;z-index:10;}");
document.writeln(".open_slide:hover { background-position:-81px -110px;}");
document.writeln(".close_slide {width:50px;height:50px;display:block; background:url(/swt/images/icon.png) no-repeat 0 -41px;position:absolute;left:0;top:0;cursor:pointer;}");
document.writeln(".close_slide:hover { background-position:-81px -41px;}");
document.writeln(".right_slide_tabs ul {position:absolute;left:0;top:50px;}");
document.writeln(".right_slide_tabs ul li a{width:50px;height:50px;display:block;}");
document.writeln(".activity { background:url(/swt/images/icon.png) no-repeat 0 -166px;}");
document.writeln(".activity.active,.activity:hover { background-position:-81px -166px;}");
document.writeln(".exports { background:url(/swt/images/icon.png) no-repeat 0 -222px;}");
document.writeln(".exports.active,.exports:hover { background-position:-81px -222px;}");
document.writeln(".onlineChat { background:url(/swt/images/icon.png) no-repeat 0 -278px;position:relative;}");
document.writeln(".onlineChat.active,.onlineChat:hover { background-position:-81px -278px;}");
document.writeln(".freeTell { background:url(/swt/images/icon.png) no-repeat 0 -334px;}");
document.writeln(".freeTell.active,.freeTell:hover { background-position:-81px -334px;}");
document.writeln(".hospitalAddr { background:url(/swt/images/icon.png) no-repeat 0 -390px;}");
document.writeln(".hospitalAddr.active,.hospitalAddr:hover { background-position:-81px -390px;}");
document.writeln(".scrollTop {width:50px;height:50px;position:absolute;top:300px;left:0; background:url(/swt/images/icon.png) no-repeat 0 -446px;}");
document.writeln(".scrollTop:hover { background-position:-81px -446px;}");
document.writeln(".right_slide_contents {width:369px;height:100%;float:left;padding:25px 0 0 0;margin-left:16px;display:inline;}");
document.writeln(".right_slide_content {width:100%;display:none;height:100%;}");
document.writeln(".onlineChat i {");
document.writeln("		background-color: #ff0000;");
document.writeln("		-moz-border-radius:50%;");
document.writeln("		-webkit-border-radius:50%;");
document.writeln("		border-radius: 50%;");
document.writeln("		color: #FFFFFF;");
document.writeln("		display: block;");
document.writeln("		font-family: arial;");
document.writeln("		font-size: 12px;");
document.writeln("		font-style: normal;");
document.writeln("		height: 15px;");
document.writeln("		line-height: 15px;");
document.writeln("		position: absolute;");
document.writeln("		right: 6px;");
document.writeln("		text-align: center;");
document.writeln("		top: 6px;");
document.writeln("		width: 15px;");
document.writeln("		-moz-box-shadow:0 0 5px #0b0205;");
document.writeln("		-webkit-box-shadow:0 0 5px #0b0205;");
document.writeln("		box-shadow:0 0 5px #0b0205;");
document.writeln("	}");
document.writeln(".onlineChat.active i {display:none;}");
document.writeln(".content_title {width:351px;height:35px;line-height:35px;border-bottom:3px solid #dfdfdf;font-size:16px;color:#000;margin:0 auto;font-weight:600;}");
document.writeln(".content_activity dl {width:351px;height:143px;padding:17px 0;border-bottom:1px dashed #dfdfdf;margin:0 auto; }");
document.writeln(".content_activity dd,.content_activity dt {float:left;}");
document.writeln(".content_activity h3 {font-size:14px;line-height:30px;}");
document.writeln(".content_activity dt {margin-left:5px;display:inline;}");
document.writeln(".content_activity .content_title,.content_onlineChat .content_title,.content_freeTell .content_title,.content_hospitalAddr .content_title{margin-bottom:10px;}");
document.writeln(".content_activity dt a {color:#9D0A3A;text-decoration:underline;display:inline-block;margin-right:15px;}");
document.writeln(".content_activity dt a:hover {color:#5D0623;}");
document.writeln(".content_exports ul {width:369px;margin:0 auto;}");
document.writeln(".content_exports li {width:369px;height:115px;float:left;margin-bottom:0px;border-bottom:1px dashed #dfdfdf;position:relative;}");
document.writeln(".content_exports li .inner {width:193px;position:absolute;right:60px;top:10px;}");
document.writeln(".content_exports li .inner h4 {font-size:18px;font-weight:normal;line-height:32px;color:#414141;}");
document.writeln(".content_exports li .inner p {font-size:14px;width:100%;line-height:22px;color:#414141;}");
document.writeln(".content_exports li .inner p span {float:left;display:block;margin-top:5px;}");
document.writeln(".zj_img {display:block;width:84px;height:84px;position:absolute;left:14px;top:15px;}");
document.writeln(".jzsj i{width:16px;height:16px; background:url(/swt/images/icon.png) no-repeat -475px -324px;float:left;display:inline-block;margin-right:5px;margin-top:4px;display:inline;}");
document.writeln(".content_exports li em {display:inline-block;width:31px;height:21px; background:url(/swt/images/icon.png) no-repeat -515px -322px;margin-top:6px;float:right;margin-right:60px;display:inline;}");
document.writeln(".content_onlineChat .inner,.content_freeTell .inner {width:342px;margin:0 auto;}");
document.writeln(".content_onlineChat .zxzx {display:block;width:342px;height:50px; background:url(/swt/images/icon.png) no-repeat -173px 0;position:relative;margin-top:26px;}");
document.writeln(".content_onlineChat .zxzx:hover { background-position:-558px 0;}");
document.writeln(".content_onlineChat .zxzx i {");
document.writeln("		background-color: #ff0000;");
document.writeln("		-moz-border-radius:50%;");
document.writeln("		-webkit-border-radius:50%;");
document.writeln("		border-radius: 50%;");
document.writeln("		color: #FFFFFF;");
document.writeln("		display: block;");
document.writeln("		font-family: arial;");
document.writeln("		font-size: 15px;");
document.writeln("		font-style: normal;");
document.writeln("		height: 19px;");
document.writeln("		line-height: 19px;");
document.writeln("		position: absolute;");
document.writeln("		left: 115px;");
document.writeln("		text-align: center;");
document.writeln("		top: 8px;");
document.writeln("		width: 19px;");
document.writeln("		-moz-box-shadow:0 0 5px #0b0205;");
document.writeln("		-webkit-box-shadow:0 0 5px #0b0205;");
document.writeln("		box-shadow:0 0 5px #0b0205;");
document.writeln("	}");
document.writeln(".content_onlineChat .qqzx {display:block;width:342px;height:50px; background:url(/swt/images/icon.png) no-repeat -173px -68px;position:relative;margin-top:26px;margin-bottom:13px;}");
document.writeln(".content_onlineChat .qqzx:hover { background-position:-558px -68px;}");
document.writeln(".tell_png {width:239px;height:74px; background:url(/swt/images/icon.png) no-repeat -173px -337px;margin:23px 0;}");
document.writeln(".content_onlineChat hr,.content_freeTell hr {width:100%;border-bottom:1px dashed #dfdfdf;}");
document.writeln(".content_onlineChat p,.content_freeTell p {padding:15px 0 15px 10px;line-height:26px;}");
document.writeln(".content_freeTell .inner {padding-top:15px;}");
document.writeln("#tell_con li *{float:left;}");
document.writeln("#slide_num {");
document.writeln("	background: none repeat scroll 0 0 rgba(0, 0, 0, 0);");
document.writeln("    border: 1px solid #dfdfdf;");
document.writeln("    border-radius: 6px;");
document.writeln("    box-shadow: 0 1px rgba(34, 25, 25, 0.15) inset, 0 1px rgba(255, 255, 255, 0.8);");
document.writeln("    display: block;");
document.writeln("    position: relative;");
document.writeln("    transition: all 0.08s ease-in-out 0s;");
document.writeln("    width: 263px;");
document.writeln("	height:35px;");
document.writeln("	line-height:35px;");
document.writeln("    z-index: 3;");
document.writeln("	font-size:14px;");
document.writeln("	}");
document.writeln("#slide_num:focus {");
document.writeln("		border-color: #dfdfdf;");
document.writeln("    box-shadow: 0 1px rgba(34, 25, 25, 0.15) inset, 0 0 7px rgba(95, 95, 95, 0.35);");
document.writeln("	}");
document.writeln(".number {height:35px;line-height:35px;font-size:14px;margin-right:12px;display:inline;margin-left:6px;}");
document.writeln(".warnning {width:100%;color:#f8b551;margin-left:80px;display:inline;}");
document.writeln("#tell_con a {display:block;width:162px;height:39px;line-height:39px;text-align:center;font-size:14px;text-decoration:none;float:left;display:inline;}");
document.writeln("#tell_btn {color:#fff; background:url(/swt/images/icon.png) no-repeat -173px -199px;margin:25px 13px 10px 5px;margin-right:13px;}");
document.writeln("#tell_btn:hover { background-position:-173px -251px;}");
document.writeln("#tell_reset {color:#414141;background:url(/swt/images/icon.png) no-repeat -348px -199px;margin:25px 0 10px 0;}");
document.writeln("#tell_reset:hover { background-position:-348px -251px;}");
document.writeln("");
document.writeln(".content_hospitalAddr .inner {width:351px;margin:0 auto;}");
document.writeln(".content_hospitalAddr .inner div {padding:15px 0 20px 5px;line-height:26px;font-size:14px;}");
document.writeln(".content_hospitalAddr .inner div  span{display:block;float:left;width:100%;}");
document.writeln(".content_hospitalAddr .inner a {display:block;width:345px;height:302px;margin:0 auto;}");
document.writeln("/* ��ʽ�� */");
document.writeln("img { border: none; }");
document.writeln("#LRdiv0,#LRdiv1,#LRdiv2,#LRfloater0,#divM,#LR_Flash,#BDBridgeWrap{ display: none;}");
document.writeln("#divM{position: fixed;z-index: 214748364;}");
document.writeln("/* ��ʽ�� */");
document.writeln("/*  divM  */");
document.writeln("#divM {width: 390px;height: 230px;background:url(/swt/images/gtswt.png) -60px 0 no-repeat; right: 50%;bottom: 50%;margin-right: -195px;margin-bottom: -115px;_position: absolute;_bottom: expression(offsetParent.scrollTop+242);box-shadow: 0 0 35px #000;-webkit-box-shadow: 0 0 35px #000;-moz-box-shadow: 0 0 35px #000;}");
document.writeln("#divM a{position:absolute;display: block; width:95px; height:35px;top:161px;background:url(/swt/images/gtswt.png) -9999px -9999px no-repeat}");
document.writeln("#divM #divMagb{ right:4px;top:4px; width:20px; height:20px}");
document.writeln("#divM #divMa1{left:167px}");
document.writeln("#divM #divMa2{left:271px}");
document.writeln("#divM #divMagb:hover{background:none}");
document.writeln("#divM #divMa1:hover{background-position:-227px -255px}");
document.writeln("#divM #divMa2:hover{background-position:-331px -255px}");
document.writeln("#html_footer_c{height:45px; position:relative;top:122px}");
document.writeln("#html_footer_c1{ position: absolute; left: 8px; top: 10px; width: 120px; height: 22px;border:none; color:#a8a8a8; font-family:\"΢���ź�\", arial; font-size:12px}");
document.writeln("#html_footer_c2{ position: absolute; left: 130px; top: 10px; width: 83px; height: 23px;border:none; background:none}");
document.writeln("#html_footer_c2.html_footer_c2bg,#html_footer_c2:hover{background:url(/swt/images/gtswt2.png) -473px -634px no-repeat;cursor:pointer}");
document.writeln("#html_footer_c1:focus{color:#000}");
document.writeln("/*  divM  */");
document.writeln("</style>");
document.writeln("<div class=\"right_slide_swt\">");
document.writeln("  <div class=\"right_slide_tabs\">");
document.writeln("  	<div class=\"inner\">");
document.writeln("       <span class=\"open_slide\"></span> <span class=\"close_slide\"></span>");
document.writeln("        <ul>");
document.writeln("          <li><a href=\"javascript:void(0)\"  class=\"activity\"></a></li>");
document.writeln("          <li><a href=\"javascript:void(0)\"  class=\"exports\"></a></li>");
document.writeln("          <li><a href=\"javascript:void(0)\"  class=\"onlineChat\"></a></li>");
document.writeln("          <li><a href=\"javascript:void(0)\"  class=\"freeTell\"></a></li>");
document.writeln("          <li><a href=\"javascript:void(0)\"  class=\"hospitalAddr\"></a></li>");
document.writeln("        </ul>");
document.writeln("        <a class=\"scrollTop\" onclick=\"pageScroll()\" title=\"���ض���\" href=\"javascript:void(0)\"></a> ");
document.writeln("     </div>");
document.writeln("    </div>");
document.writeln("  <div class=\"right_slide_contents \">");
document.writeln("    <div class=\"right_slide_content content_activity\">");
document.writeln("      <div class=\"content_title\">���ڻ</div>");
document.writeln("      <dl>");
document.writeln("        <dd><a href=\"/zt/sm/\" target=\"_blank\"><img src=\"/swt/images/activity2.jpg\" width=\"166\" height=\"143\"/></a></dd>");
document.writeln("        <dt>");
document.writeln("          <h3>˫������������Ӽ�</h3>");
document.writeln("          <p>�ʱ�䣺4��18����</p>");
document.writeln("          <p>�ժҪ���������Ӽ�</p>");
document.writeln("          <p>������Ⱥ��������ʿ</p>");
document.writeln("          <p>��ص㣺����΢��������</p>");
document.writeln("          <a href=\"/zt/sm/\" target=\"_blank\">���� ��</a> <a href=\"/call.html\" target=\"_blank\">���� ��</a> </dt>");
document.writeln("      </dl>");
document.writeln("      <dl>");
document.writeln("        <dd><a href=\"/toufazhongzhi/98670412.html\" target=\"_blank\"><img src=\"/swt/images/activity3.jpg\" width=\"166\" height=\"143\"/></a></dd>");
document.writeln("        <dt>");
document.writeln("          <h3>FUE+SHTֲ��12Ԫ/��</h3>");
document.writeln("          <p>�ʱ�䣺5.1����5.31</p>");
document.writeln("          <p>�ժҪ���Ż���12Ԫ/��</p>");
document.writeln("          <p>������Ⱥ��������ʿ</p>");
document.writeln("          <p>��ص㣺����ֲ������</p>");
document.writeln("          <a href=\"/toufazhongzhi/98670412.html\" target=\"_blank\">���� ��</a> <a href=\"/call.html\" target=\"_blank\">���� ��</a> </dt>");
document.writeln("      </dl>");
document.writeln("      <dl style=\"border-bottom:none;\">");
document.writeln("        <dd><a href=\"/zt/tmj/\" target=\"_blank\"><img src=\"/swt/images/activity1.jpg\" width=\"166\" height=\"143\"/></a></dd>");
document.writeln("        <dt>");
document.writeln("          <h3>����������ë��</h3>");
document.writeln("          <p>�ʱ�䣺2014-03-01��ʼ</p>");
document.writeln("          <p>����ʱ�䣺������������</p>");
document.writeln("          <p>������Ⱥ��������ʿ</p>");
document.writeln("          <p>��ص㣺�Ϻ�Դ��·155��</p>");
document.writeln("          <a href=\"/zt/tmj/\" target=\"_blank\">���� ��</a> <a href=\"/call.html\" target=\"_blank\">���� ��</a> </dt>");
document.writeln("      </dl>");

document.writeln("    </div>");
document.writeln("    <div class=\"right_slide_content content_exports\">");
document.writeln("      <div class=\"content_title\">����ר��</div>");
document.writeln("      <div id=\"zjRollerBar\">");
document.writeln("        <ul>");
document.writeln("          <li class=\"xzr_zj\">");
document.writeln("          	<span class=\"zj_img\"><img src=\"/swt/images/xzr.png\" width=\"84\" height=\"84\"/></span>");
document.writeln("          	<div class=\"inner\">");
document.writeln("            	<h4><b>������</b> Ժ��<em></em></h4>");
document.writeln("                <p>���������۲�����ר��</p>");
document.writeln("                <p><span class=\"jzsj\"><i></i>����ʱ�䣺</span><span>5��10-12��<br/>5��22-24��</span></p>");
document.writeln("            </div></li>");
document.writeln("          <li class=\"ltx_zj\">");
document.writeln("          	<span class=\"zj_img\"><img src=\"/swt/images/ltx.png\" width=\"84\" height=\"84\"/></span>");
document.writeln("          	<div class=\"inner\">");
document.writeln("            	<h4><b>��ͥѫ</b> Ժ��<em></em></h4>");
document.writeln("                <p>���������ǲ�����ר��</p>");
document.writeln("                <p><span class=\"jzsj\"><i></i>����ʱ�䣺</span><span>5��16-18��</span></p>");
document.writeln("            </div>");
document.writeln("          </li>");
document.writeln("          <li class=\"jsx_zj\">");
document.writeln("          	<span class=\"zj_img\"><img src=\"/swt/images/jsx.png\" width=\"84\" height=\"84\"/></span>");
document.writeln("          	<div class=\"inner\">");
document.writeln("            	<h4><b>��ʤѫ</b> Ժ��<em></em></h4>");
document.writeln("                <p>���������沿����ר��</p>");
document.writeln("                <p><span class=\"jzsj\"><i></i>����ʱ�䣺</span><span>5��25��</span></p>");
document.writeln("            </div>");
document.writeln("          </li>");
document.writeln("          <li class=\"ydy_zj\">");
document.writeln("          	<span class=\"zj_img\"><img src=\"/swt/images/ydy.png\" width=\"84\" height=\"84\"/>");
document.writeln("            </span>");
document.writeln("          	<div class=\"inner\">");
document.writeln("            	<h4><b>���</b> ����</h4>");
document.writeln("                <p>̨����ϯС����Ů���ר��</p>");
document.writeln("                <p><span class=\"jzsj\"><i></i>����ʱ�䣺</span><span>5��26-27��</span></p>");
document.writeln("            </div>");
document.writeln("          </li>");
document.writeln("          <li class=\"lzh_zj\" style=\"border-bottom:none;\">" );
document.writeln("          	<span class=\"zj_img\"><img src=\"/swt/images/lzh.png\" width=\"84\" height=\"84\"/></span>");
document.writeln("          	<div class=\"inner\">");
document.writeln("            	<h4><b>��־��</b> ��ʿ</h4>");
document.writeln("                <p>����V��С����һ��</p>");
document.writeln("                <p><span class=\"jzsj\"><i></i>����ʱ�䣺</span><span>�ܶ� ���� ����</span></p>");
document.writeln("            </div>");
document.writeln("          </li>");
document.writeln("        </ul>");
document.writeln("      </div>");
document.writeln("    </div>");
document.writeln("    <div class=\"right_slide_content content_onlineChat\">");
document.writeln("      <div class=\"content_title\">������ѯ</div>");
document.writeln("      <div class=\"inner\"> <a href=\"/call.html\" target=\"_blank\" class=\"zxzx\" ><i id=\"random_count\">5</i></a> <a href=\"http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzgwMDAyNTMwN18yMjUzN184MDAwMjUzMDdfMl8\" target=\"_blank\" class=\"qqzx\"></a>");
document.writeln("        <div class=\"tell_png\"></div>");
document.writeln("        <hr/>");
document.writeln("        <p> 1����ԺĿ������Ϊ���ṩ�����ʵķ���<br/>");
document.writeln("          2�����������Ϣ��֤����й¶���ĸ�����Ϣ����˽��<br/>");
document.writeln("          3����Ժ�����ϸ�İ�ȫϵͳ��֤������˽��<br/>");
document.writeln("        </p>");
document.writeln("      </div>");
document.writeln("    </div>");
document.writeln("    <div class=\"right_slide_content content_freeTell\">");
document.writeln("      <div class=\"content_title\">��ѻص�</div>");
document.writeln("      <div class=\"inner\">");
document.writeln("        <ul id=\"tell_con\" class=\" clearfix\">");
document.writeln("          <li>");
document.writeln("            <label class=\"number\">�绰����</label>");
document.writeln("            <input type=\"text\" id=\"slide_num\" value=\"\"/>");
document.writeln("            <label class=\"warnning\">*11λ���ֻ��ţ�����ǰ������š�</label>");
document.writeln("          </li>");
document.writeln("          <li> <a href=\"javascript:void(0)\" id=\"tell_btn\">�ύ</a> <a href=\"javascript:void(0)\" id=\"tell_reset\">����</a> </li>");
document.writeln("        </ul>");
document.writeln("        <div class=\"tell_png\"></div>");
document.writeln("        <hr/>");
document.writeln("        <p> 1����ԺĿ������Ϊ���ṩ�����ʵķ���<br/>");
document.writeln("          2�����������Ϣ��֤����й¶���ĸ�����Ϣ����˽��<br/>");
document.writeln("          3����Ժ�����ϸ�İ�ȫϵͳ��֤������˽��<br/>");
document.writeln("        </p>");
document.writeln("      </div>");
document.writeln("    </div>");
document.writeln("    <div class=\"right_slide_content content_hospitalAddr\">");
document.writeln("      <div class=\"content_title\">ҽԺ��ַ</div>");
document.writeln("      <div class=\"inner\">");
document.writeln("        <div class=\"clearfix\"> <span>����ʱ�� (�޼���ҽԺ) 8:00-21:00</span>");
document.writeln("          <span>�������ߣ�400-8806 580</span>");
document.writeln("          <span>ҽԺ�绰��021-5885 6655</span>");
document.writeln("          <span>E-mail��service@shhuamei.cn</span>");
document.writeln("          <span>ҽԺ��ַ���Ϻ����ֶ�����Դ��·155��</span>");
document.writeln("        </div>");
document.writeln("        <a href=\"\" target=\"_blank\"><img src=\"/swt/images/addr_img.jpg\" width=\"345\" height=\"302\"/></a> </div>");
document.writeln("    </div>");
document.writeln("  </div>");
document.writeln("</div>");



document.title="�Ϻ�����ҽ������ҽԺ"
//��������ͨ
document.writeln("<script language=\"javascript\" src=\"http://pct.zoosnet.net/JS/LsJS.aspx?siteid=PCT38188527&float=1\"></script>");
function swt_hm(obj){
var ins=$(obj).parents("div").attr("id");
var swt="http://pct.zoosnet.net/LR/Chatpre.aspx?id=PCT38188527&r="+document.referrer+ins+"&p="+window.location.href;
window.open(swt);
}//���ý���
/************************�Ҳ�***********************/
/*���ض���*/
function pageScroll(){
    //�����ݹ���ָ��������������һ�����������ҹ��������������ڶ������������¹�������������
    window.scrollBy(0,-100);
    //��ʱ�ݹ���ã�ģ���������Ч���ٶ�
    scrolldelay = setTimeout('pageScroll()',10);
//��ȡscrollTopֵ��������DTD�ı�׼��ҳȡdocument.documentElement.scrollTop������ȡdocument.body.scrollTop����Ϊ����ֻ��һ������Ч����һ���ͺ�Ϊ0������ȡ��ֵ���Եõ���ҳ��������scrollTopֵ
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
    //�жϵ�ҳ�浽�ﶥ����ȡ����ʱ���루����ҳ��������������޷��������������ҳ�棩
    if(sTop==0) clearTimeout(scrolldelay);
}
/*�����*/
function GetRandomNum(Min,Max)
{   
var Range = Max - Min;   
var Rand = Math.random();   
return(Min + Math.round(Rand * Range));   
}   
var num = GetRandomNum(1,9);
$(document).ready(function() { 
	
	document.getElementById("random_count").innerHTML=num;
});
document.writeln("<div id=\"divRsjs2\" style=\"display:none\"></div>"); 
window.onerror=function(){return true;};
document.ondragstart=function (){return false;};
/************************�м�***********************/
/*�м䵯�������½�*/
document.writeln("<div id=\"divM\">");
document.writeln("     <a id=\"divMagb\" href=\"javascript:void(0)\" target=\"_self\" title=\"�ر�\"></a>");
document.writeln("     <a id=\"divMa1\" href=\"javascript:void(0)\" onclick=\"swt_hm(this)\" target=\"_self\" title=\"������ѯ\"></a>");
document.writeln("     <a id=\"divMa2\" href=\"javascript:void(0)\" target=\"_self\" title=\"�Ժ���ϵ\"></a>");
document.writeln("</div>");
/*******HTML�ײ�********/
	/*���õ绰JS*/
document.write('<script type="text/javascript"  data-lxb-uid="482950" data-lxb-gid="68023" src="http://lxbjs.baidu.com/api/asset/api.js?t=' + new Date().getTime() + '" charset="utf-8"><\/script>' );
document.writeln("<script>");
document.writeln("document.getElementById(\"tell_btn\").onclick = function () { ");
document.writeln("lxb.call(document.getElementById(\"slide_num\"));");
document.writeln("};");
document.writeln("document.getElementById(\"tell_reset\").onclick = function () { ");
document.writeln("document.getElementById(\"slide_num\").value='';");
document.writeln("};");
document.writeln("</script>");
/*******HTML�ײ�����********/

//�м䵯���һ�ε���ʱ��
setTimeout("openM()",10000);//10000
function openM(){
	$("#divM").fadeIn(1000);
}
$(function(){
	$("#divMagb,#divMa2").click(function(){
		$('#divM').fadeOut(800).delay(75000).fadeIn(1000);
		//setTimeout("openM()",75000);//75����ٴε���
		})
	})




/* �ж��û�ʹ�õ��Ƿ���ƽ��ipad����iopd*/
//�ƶ��豸������ת
function is_mobile() {
 var regex_match = /(ipad|ipod)/i;
 var u = navigator.userAgent;
 var result = regex_match.exec(u);
 if (null == result) {
  return false;
 } else {
  return true;
 }
}
//alert(is_mobile());
if (is_mobile()) {
 document.getElementsByTagName('body')[0].className='active';
 $('body.active').css({'margin':'0 auto','minWidth':'1366px'});
}




//�ٶ�ͳ�ƴ���
document.writeln("<script type=\"text/javascript\">var _bdhmProtocol = ((\"https:\" == document.location.protocol) ? \" https://\" : \" http://\");document.write(unescape(\"%3Cscript src='\" + _bdhmProtocol + \"hm.baidu.com/h.js%3Fd916346136de55e11bc6659615316de1' type='text/javascript'%3E%3C/script%3E\"));</script>");

//���Ŵ���
/*document.writeln("<script type=\"text/javascript\"> var _bdhmProtocol = ((\"https:\" == document.location.protocol) ? \" https://\" : \" http://\"); document.write(unescape(\"%3Cscript src='\" + _bdhmProtocol + \"hm.baidu.com/h.js%3F029f24026f94849a03fdfb06c34e2539' type='text/javascript'%3E%3C/script%3E\")) </script>");*/

document.writeln("<script>");
document.writeln("	$(function(){");
document.writeln("					");
document.writeln("			var win = $(window);			");
document.writeln("			var winHeight;");
document.writeln("			var isOpen=true;");
document.writeln("			var curIndex = -1;");
document.writeln("			var right_slide_swt = $(\'.right_slide_swt\');");
document.writeln("			var open_slide = $(\'.open_slide\');");
document.writeln("			var close_slide = $(\'.close_slide\');");
document.writeln("			var tabsNavs = $(\'.right_slide_tabs ul li\');");
document.writeln("			var right_slide_contents = $(\'.right_slide_contents > div\');");
document.writeln("			var totalzjHeight ;");
document.writeln("			var mv = {");
document.writeln("					init:function(){");
document.writeln("					right_slide_swt.css({\'height\':\'100%\'});");
document.writeln("					$(\'.right_slide_tabs\').css({\'height\':\'100%\'})");
document.writeln("					$(\'.right_slide_tabs .inner\').css({\'top\':\'50%\'})");
document.writeln("				}");
document.writeln("				}			");
document.writeln("			mv.init();");
document.writeln("			win.resize(function(e) {");
document.writeln("                mv.init();");
document.writeln("            });");
document.writeln("					var arr = [];");
document.writeln("					for(var i = 0;i<tabsNavs.length;i++){");
document.writeln("							arr.push(i);");
document.writeln("						}");
document.writeln("				tabsNavs.each(function(index, element) {");
document.writeln("					");
document.writeln("                    $(this).click(function(){");
document.writeln("						var now = $(this).index();");
document.writeln("						tabsNavs.find(\'a\').removeClass(\'active\');						");
document.writeln("						open_slide.hide();");
document.writeln("						if(isOpen){	");
document.writeln("							tabsNavs.eq(now).find(\'a\').addClass(\'active\');");
document.writeln("							right_slide_swt.stop(true,false).animate({\'right\':\'0px\'},400);	");
document.writeln("							isOpen = false;");
document.writeln("						}");
document.writeln("						if(curIndex!=arr[now]){");
document.writeln("							$(this).find(\'a\').addClass(\'active\');");
document.writeln("							right_slide_contents.hide();");
document.writeln("							right_slide_contents.eq(now).show();");
document.writeln("							curIndex = now;");
document.writeln("						}");
document.writeln("						else {");
document.writeln("							right_slide_swt.stop(true,false).animate({\'right\':\'-400px\'},400);	");
document.writeln("							$(this).find(\'a\').removeClass(\'active\');");
document.writeln("							open_slide.show();	");
document.writeln("							curIndex= -1;					");
document.writeln("							isOpen = true;	");
document.writeln("							}");
document.writeln("						return false;");
document.writeln("					});");
document.writeln("                });");
document.writeln("			open_slide.bind(\'click\',function(){");
document.writeln("					$(this).hide();");
document.writeln("					tabsNavs.eq(0).find(\'a\').addClass(\'active\');");
document.writeln("					right_slide_contents.eq(0).show();		");
document.writeln("					right_slide_swt.stop(true,false).animate({\'right\':\'0px\'},400);	");
document.writeln("					isOpen = false;");
document.writeln("					curIndex = 0;");
document.writeln("					return false;			");
document.writeln("				});");
document.writeln("			close_slide.bind(\'click\',function(){");
document.writeln("					open_slide.show();");
document.writeln("					//tabsNavs.find(\'a\').removeClass(\'active\');");
document.writeln("					right_slide_swt.stop(true,false).animate({\'right\':\'-400px\'},400,function(){");
document.writeln("							tabsNavs.find(\'a\').removeClass(\'active\');");
document.writeln("							right_slide_contents.hide();");
document.writeln("							right_slide_contents.eq(0).show();");
document.writeln("						});");
document.writeln("					curIndex = -1;");
document.writeln("					isOpen = true;");
document.writeln("					return false;");
document.writeln("				});");
document.writeln("				});");
document.writeln("</script>");