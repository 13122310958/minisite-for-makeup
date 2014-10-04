var LR_sysurl = 'http://pct.zoosnet.net/';
var LR_websiteid = 'PCT38188527';
var LR_siteid = '38188527';
var LR_lng = 'cn';
var LR_isMobile = 0;
var LiveReceptionCode_isonline = 1;
if(typeof(LR_showfloat)=='undefined' || LR_showfloat!=1)var LR_showfloat = 1;
var LR_Tick=new Date().getTime().toString()+parseInt(Math.random()*499999999+Math.random()*400000000+100000000).toString();
var LR_MCount=93;
if(typeof(LR_cid) == 'undefined')
{
	var _lr_helpalt_on=unescape(LR_isMobile?"":"%u5982%u679c%u60a8%u6709%u4ec0%u4e48%u95ee%u9898%2c%u8bf7%u70b9%u51fb%u6b64%u5904%u8fdb%u884c%u5373%u65f6%u6c9f%u901a%3b");
	var _lr_helpsrc_on=unescape(LR_isMobile?"js%2fm_blue%2f1.gif":"http%3a%2f%2fpct.zoosnet.net%2fsite%2f38188527%2fonline_cn.gif");
	var _lr_helpalt_of=unescape(LR_isMobile?"":"%u6ca1%u6709%u5ba2%u670d%u4eba%u5458%u5728%u7ebf%2c%u8bf7%u70b9%u51fb%u6b64%u5904%u7559%u8a00!%u6211%u4eec%u4f1a%u5c3d%u5feb%u7b54%u590d%3b");
	var _lr_helpsrc_of=unescape(LR_isMobile?"js%2fm_blue%2f1.gif":"http%3a%2f%2fpct.zoosnet.net%2fsite%2f38188527%2foffline_cn.gif");
	var _lr_closesrc0=LR_isMobile?'7.gif':'spacer.gif';
	var _lr_closesrc1='spacer.gif';
	var _lr_toright=LR_isMobile?1:((typeof(LiveReceptionCode_ToRight)!='undefined')?LiveReceptionCode_ToRight:1);
	var _lr_tobottom=LR_isMobile?0:((typeof(LiveReceptionCode_ToBottom)!='undefined')?LiveReceptionCode_ToBottom:0);
	var _lr_left=LR_isMobile?5:((typeof(LiveReceptionCode_helpimgleft)!='undefined')?LiveReceptionCode_helpimgleft:10);
	var _lr_top=LR_isMobile?60:((typeof(LiveReceptionCode_helpimgtop)!='undefined')?LiveReceptionCode_helpimgtop:50);
	var _lr_issupport_track=1;
	var _lr_issupport_invite=1;
	var LR_ivite_img='http://lkt.zoosnet.net/site/38188527/invite_share.gif';
	var LR_invite_color0='#8DC4EB';
	var LR_invite_color1='#E1EFFC';
	var LR_invite_color2='#A7C5E3';
	var LR_invite_color3='#000000';
	var LR_accept_img='js/tj_blue/a_cn.gif';
	var LR_refuse_img='js/tj_blue/r_cn.gif';
	var LR_close_img='js/tj_blue/close.gif';
	var _lr_invitetitle=unescape("%u60a8%u597d%uff0c%u6765%u81ea%25IP%25%u7684%u670b%u53cb");
	var _lr_invitestring=unescape("%3cP style%3d%22FONT-SIZE%3a 9pt%22%3e%u60a8%u597d%uff0c%u6b22%u8fce%u60a8%uff01%3cBR%3e%3cBR%3e%u5982%u679c%u60a8%u6709%u4efb%u4f55%u95ee%u9898%uff0c%u8bf7%u63a5%u53d7%u6b64%u9080%u8bf7%uff0c%u6211%u4f1a%u7ed9%u4f60%u66f4%u591a%u66f4%u597d%u7684%u534f%u52a9%uff01%3c%2fP%3e");
	var _lr_invite_interval=15;
	var offline_invite_hidden=1;
	if(LR_isMobile){if('0'=='1')LR_showfloat=0;}else if('0'=='1'){LR_showfloat=0;}
	var LR_invite_hide_float=1;
	var LR_UserInviteDiv=null;
	var LR_GCount=400;
	var LR_hidden_region='';
	var LR_repeatinvite=1;
	var LR_defineregion=0;
	var LR_invitesearchkey=0;
	var LR_invitestring1_auto=unescape("");
	var LR_auto_pagetitle=0;
	var LR_issupport_feydj=1;
	var LR_chated_no_invite=0;
	var ykt_location=unescape("");
	var LR_userurl0=0;
	var LR_invite_display_kind=0;
	var LR_fade_invite=0;
	var LR_confirm_closechat=unescape("%u60a8%u6b63%u5728%u8fdb%u884c%u5728%u7ebf%u5bf9%u8bdd%uff0c%u786e%u5b9a%u8981%u7ed3%u675f%u5bf9%u8bdd%u5417%uff1f");
	var _lr_mobileinviteimgsrc=unescape("js%2fm_blue%2f2.gif");
function LR_SetCookie(name,value,minutes)
{
	var exp  = new Date();
	exp.setTime(exp.getTime() + minutes*60*1000);
	document.cookie = name + '='+ escape (value) + ';path=/;expires=' + exp.toGMTString();
}
function LR_getCookie(name)
{
	var arr = document.cookie.match(new RegExp('(^| )'+name+'=([^;]*)(;|$)'));
	if(arr != null) return unescape(arr[2]);
	if(name=='LiveWS'+LR_websiteid)
	{
		LR_SetCookie(name,LR_Tick,2628000);
		return LR_Tick;
	}
	if(name=='LiveWS'+LR_websiteid+'sessionid')
	{
		LR_SetCookie(name,LR_Tick,720);
		return LR_Tick;
	}
	return null;
}
if(typeof(LR_hasInstall) == 'undefined')
{
	var LR_hasInstall=0;
	var MM_contentVersion = 8;
	var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
	if (plugin)
	{
		var words = navigator.plugins["Shockwave Flash"].description.split(" ");
		for (var i = 0; i < words.length; ++i)
		{
			if (isNaN(parseInt(words[i])))
				continue;
			var MM_PluginVersion = words[i];
		}
		if(MM_PluginVersion >= MM_contentVersion)LR_hasInstall = 1;
	}
	else if( navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && (navigator.appVersion.indexOf("Win") != -1) )
	{
		document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n');
		document.write('on error resume next \n');
		document.write('LR_hasInstall = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & MM_contentVersion)))\n');
		document.write('</SCR' + 'IPT\> \n');
		if(LR_hasInstall)LR_hasInstall=2;
	}
	if(window.location.protocol!='http:' && window.location.protocol!='https:')LR_hasInstall=0;
	LR_SetCookie('LR_hasInstall_test',1,60);
	if(LR_getCookie('LR_hasInstall')=='0' || LR_getCookie('LR_hasInstall_test')==null){LR_hasInstall=0;}

}
		document.write('<scr'+'ipt language="javascript" src="http://pct.zoosnet.net/js/JS3.aspx"></scr');document.write('ipt>');
}
