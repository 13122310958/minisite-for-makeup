var LR_MCount1=5000;if(LR_GCount<LR_MCount){_lr_issupport_invite=0;}else if (LR_MCount < 50){LR_MCount1 = 5000;}else if (LR_MCount < 90){LR_MCount1 = 7000;}else if (LR_MCount < 200){LR_MCount1 = 9000;}else if (LR_MCount < 300){LR_MCount1 = 11000;}else{LR_MCount1 = 13000;}
function LR_CheckUserUrl(_url)
{
	if(_url==null)
	{
	return '';
	}
	if(_url.indexOf('//')==-1)
	{
	return LR_sysurl+_url;
	}
	if(LR_sysurl.substring(0,LR_sysurl.indexOf('//'))=='http:')
	{
	return _url.replace('https://','http://');
	}
	else
	{
	return _url.replace('http://','https://');
	}
}
var LR_NS = (document.layers) ? true : false;
var LR_IE = (document.all) ? true : false;
var LR_DOM = (document.getElementById) ? true : false;
if (LR_IE)LR_DOM = false;
if (LR_IE)LR_DOM = false;
function LR_checkagent(_lr_na){var _lr_o = _lr_na.split('|');for(_lr_w=0;_lr_w<_lr_o.length;_lr_w++){if(navigator.userAgent.toLowerCase().indexOf(_lr_o[_lr_w])>-1)return true;}return false;}
	function LR_loadingJs(url) {var html_doc = document.getElementsByTagName('head').item(0);var js = document.createElement('script');js.setAttribute('language', 'javascript');js.setAttribute('type', 'text/javascript');js.setAttribute('src', url);html_doc.appendChild(js);}
var LR_cid=null;var LR_sid=null;var LR_fistvisitetime=null;var LR_visitetime=new Date().getTime();var LR_lastvisitetime=null;var LR_visitecounts=0;LR_visitepages=0;var LR_ip=null;var LR_ip1=null;var LR_ip2=null;var LR_showinvite=1;var LR_invite0='';var LR_invite1=null;var LR_sidexists=-1;var LR_lastinvite=new Date().getTime();var checkcount=0;var lr_refer5237 = escape(document.referrer);if(typeof(lr_refer5236)!='undefined')lr_refer5237=lr_refer5236;var LR_cname=null;var LR_ccolor=null;var LR_lastoname=null;var LR_nexttimerID=null;var LR_istate=0,LR_gstate=0;var LR_skey=null;var LR_surl=null;var LR_ClientEnd=1;var LR_cur_invite=null;
function LR_GetObj(id,theDoc){if(!theDoc){theDoc = document;}if (theDoc.getElementById){return theDoc.getElementById(id);}else if (document.all){return theDoc.all(id);}}var LR_m_d=null;
function LR_m_e(p1,p2,p3)
{
	if(LR_m_d!=null)return null;
	var div=document.createElement('DIV');
	div.id='LR_m_h_'+new Date().getTime();
	with(div.style)
	{
		zIndex=8998;
		top='0px';
		left='0px';
		width='100%';
		height='100%';
		border='none';
		margin=padding=0;
		position='absolute';
		backgroundColor='#000';
		opacity='0.2';
		filter='alpha(opacity=20)';
		duration=1000;
	}
	document.body.insertBefore(div,document.body.firstChild);
	if(!p3)LR_m_a('SELECT');
	if(!p2)LR_m_a('OBJECT');
	if(!p1)LR_m_a('IFRAME');
	LR_m_c(div);
	return div;
}
function LR_m_c(obj)
{
	obj.style.width='100%';
	obj.style.height='100%';
	var bodyCW=0,bodyCH=0;
	if(document.documentElement&&document.documentElement.clientWidth)
	{
		bodyCW=document.documentElement.clientWidth;
	}
	else if(window.innerWidth)
	{
		bodyCW=window.innerWidth;
	}
	else if(document.body)
	{
		bodyCW=document.body.clientWidth;
	}
	if(window.innerHeight)bodyCH=window.innerHeight;
	else if(document.documentElement&&document.documentElement.clientHeight)
		bodyCH=document.documentElement.clientHeight;
	else if(document.body)bodyCH=document.body.clientHeight;
	setTimeout(function()
	{
		bodyCW=Math.max(document.body.scrollWidth,bodyCW);
		bodyCH=Math.max(document.body.scrollHeight,bodyCH);
		obj.style.width=bodyCW+'px';
		obj.style.height=bodyCH+'px';
	},1);
}
function LR_m_b(TagName)
{
	var   s=document.getElementsByTagName(TagName);
	for(var i=0,n=s.length;i<n;i++)
	{
		if(s[i].id=='LR_Flash')continue;s[i].style.visibility=s[i].getAttribute('LR_m_g');
		s[i].removeAttribute('LR_m_g');
	}
};
function LR_m_a(TagName)
{
	var   s=document.getElementsByTagName(TagName);
	for(var i=0,n=s.length;i<n;i++)
	{
		if(s[i].id=='LR_Flash')continue;s[i].setAttribute('LR_m_g',s[i].style.visibility,0);
		s[i].style.visibility='hidden';
	}
};
function LR_m_f(obj,p1,p2,p3){
	if(LR_m_d==null)return;
	try{
		if(obj){document.body.removeChild(obj);LR_m_d=null;
	if(!p3)LR_m_b('SELECT');
	if(!p2)LR_m_b('OBJECT');
	if(!p1)LR_m_b('IFRAME');
	}}catch(e){}
};
if(LR_auto_pagetitle && typeof(LR_pagetitle)=='undefined'){var LR_pagetitle= document.title;}
if(typeof(LiveReceptionCode_need_help_html) != 'undefined')LR_showfloat = 1;
if(typeof(LR_explain) == 'undefined')
{
	LR_explain='';
	if(typeof(LiveReception_explain) != 'undefined')
	{
		LR_explain=unescape(LiveReception_explain);
	}
	if(typeof(LiveReceptionCode_chatexplain_online) != 'undefined')
	{
		LR_explain=unescape(LiveReceptionCode_chatexplain_online);
	}
}
function LR_Check_region()
{
	if(LR_defineregion)
	{
		var invitec0=unescape(LR_ip1)+' '+unescape(LR_ip2);
		if(typeof(only_invite_list) != 'undefined')
		{
			LR_showinvite=0;
			var invitec1=only_invite_list.split('|');
			for(w=0;w<invitec1.length;w++)
			{
				if (invitec1[w].length == 0)continue;
				if(invitec0.indexOf(invitec1[w])!=-1)
				{
					LR_showinvite=1;
					break;
				}
			}
		}
		else if(typeof(never_invite_list) != 'undefined')
		{
			var invitec1=never_invite_list.split('|');
			for(w=0;w<invitec1.length;w++)
			{
				if (invitec1[w].length == 0)continue;
				if(invitec0.indexOf(invitec1[w])!=-1)
				{
					LR_showinvite=0;
					break;
				}
			}
		}
	}
	if(LR_hidden_region!='')
	{
		var lrhgs=LR_hidden_region.split(",");		var ipfrom = unescape(LR_ip1)+' '+unescape(LR_ip2);
		for(w=0;w<lrhgs.length;w++)
		{
			if(lrhgs[w]=='')continue;
			if(ipfrom.indexOf(lrhgs[w])!=-1){LR_showinvite=0;return;};
		}
		 if (LR_showfloat) LR_Floaters[0].showdiv(1);
	}
}
function LR_buildfloat()
{
	return (typeof(LiveReceptionCode_need_help_html) != 'undefined')?LiveReceptionCode_need_help_html:'<img '+(LiveReceptionCode_isonline?'title="'+_lr_helpalt_on+'" alt="'+_lr_helpalt_on+'" src="'+LR_CheckUserUrl(_lr_helpsrc_on)+'"':'title="'+_lr_helpalt_of+'" alt="'+_lr_helpalt_of+'" src="'+LR_CheckUserUrl(_lr_helpsrc_of)+'"')+'  style="cursor:pointer" onclick="openZoosUrl(\'chatwin\');">';
}
function LR_check_block(lrobjinner){return ((lrobjinner.indexOf('.gif')==-1 &&  lrobjinner.indexOf('.jpg')==-1 &&  lrobjinner.indexOf('.png')==-1 && lrobjinner.indexOf('.swf')==-1) || lrobjinner.indexOf(' Blocked_')!=-1);}
var LR_Floaters=new Array();
if (typeof(LR_Fid)=='undefined')
{
	var LR_Fid=0;
	var LR_invitew=(LR_UserInviteDiv!=null && LR_isMobile)?120:211;
	var LR_inviteh=(LR_UserInviteDiv!=null && LR_isMobile)?60:110;
	var LR_inviteim=new Image;LR_inviteim.src=LR_CheckUserUrl(_lr_mobileinviteimgsrc);
	eval("function OnlinerIcon(){this.pms=new Array();this.LR_scrollTimer=null;this.autoScroll=LR_autoScroll;this.get_tip_str=onliner_get_tip_str;this.start=onliner_start;this.imageTimer=onliner_imageTimer;this.get_close_str=onliner_get_close_str;this.hidden=hidden_div;this.showdiv=show_div;}function LR_autoScroll(){this.imageTimer();}function onliner_get_tip_str(){  var tt = 'z-index:2147483647;position:fixed!important;'+((this.pms['xCenter']==1)?'left:50%;margin-left:-'+(typeof (lr_xCenter) != 'undefined'?lr_xCenter:LR_invitew)+'px!important;':((this.pms['alignx']==1)?'right':'left')+':'+this.pms['alignW']+'px;')+((this.pms['yCenter']==1)?'top:50%;margin-top:-'+(typeof (lr_yCenter) != 'undefined'?lr_yCenter:LR_inviteh)+'px!important;':((this.pms['aligny']==1)?'bottom':'top')+':'+this.pms['alignH']+'px;')+'_position:absolute;_margin-left:0px;_margin-top:0px;_top:expression(eval(document.compatMode && document.compatMode==\\'CSS1Compat\\')?(documentElement.scrollTop + '+((this.pms['yCenter']==1)?'(document.documentElement.clientHeight-this.offsetHeight)/2':((this.pms['aligny']==1)?'document.documentElement.clientHeight-this.offsetHeight-':'')+this.pms['alignH'])+'):(document.body.scrollTop + '+((this.pms['yCenter']==1)?'(document.body.clientHeight - this.clientHeight)/2':((this.pms['aligny']==1)?'document.body.clientHeight - this.clientHeight-':'')+this.pms['alignH'])+'));_left:expression(eval(document.compatMode && document.compatMode==\\'CSS1Compat\\')?(documentElement.scrollLeft + '+((this.pms['xCenter']==1)?'(document.documentElement.clientWidth-this.offsetWidth)/2':((this.pms['alignx']==1)?'document.documentElement.clientWidth-this.offsetWidth-':'')+this.pms['alignW'])+'):(document.body.scrollLeft + '+((this.pms['xCenter']==1)?'(document.body.clientWidth - this.clientWidth)/2':((this.pms['alignx']==1)?'document.body.clientWidth - this.clientWidth-':'')+this.pms['alignW'])+'));';return tt;}function onliner_get_close_str(){if(this.pms['closer_show']==1) return '<div id=\"swtColse\" style=\"width:20px; height:15px; top:0px; right:0px; position:absolute;background-image: url('+this.pms['closer_img']+');background-repeat: no-repeat;background-position: right top;cursor:pointer;\" onclick=\"LR_Hidemobileinvite('+this.pms['LR_Fid']+');onlinerIcon'+this.pms['LR_Fid']+'.hidden();\"></div>'; return '';}function hidden_div(){this.pms['show']='none';LR_GetObj(this.pms['LRdiv']).style.display='none';}function show_div(showclose){this.pms['show']='block';LR_GetObj(this.pms['LRdiv']).style.display='block';if(LR_GetObj(this.pms['LRfloater']+'close')!=null)LR_GetObj(this.pms['LRfloater']+'close').style.display=showclose?'block':'none';}function onliner_imageTimer(hand){ var _lrobj0=LR_GetObj(this.pms['LRfloater']+'_if');if(_lrobj0!=null){_lrobj0.style.width = _lrobj0.nextSibling.clientWidth+'px';_lrobj0.style.height = _lrobj0.nextSibling.clientHeight+'px';}var _lrobj=LR_GetObj(this.pms['LRdiv']); if(hand || (this.pms['show']=='block' && _lrobj!=null && LR_check_block(_lrobj.innerHTML) && !LR_check_block(this.pms['html']))){var con_img=this.pms['html'];var tt='';if((typeof(LR_above_flash) != 'undefined') && LR_above_flash)tt+='<iframe s'+'r'+'c=\"'+LR_sysurl+'JS/im.aspx\" id=\"'+this.pms['LRfloater']+'_if\" style=\"position:absolute;z-index:2147483647;top:expression(this.nextSibling.offsetTop);left:expression(this.nextSibling.offsetLeft);width:1px;\" frameborder=\"0\" allowtransparency=\"true\" ></iframe>';tt+='<DIV id=\"'+this.pms['LRfloater']+'\" >'+this.get_close_str()+con_img+'</div>';  _lrobj.innerHTML=tt; LR_GetObj(this.pms['LRfloater']).style.cssText=this.get_tip_str();var _lrobj1=LR_GetObj(this.pms['LRfloater']+'_if');if(_lrobj1!=null){_lrobj1.style.cssText=this.get_tip_str()+'z-index:2147483647;width:expression(this.nextSibling.clientWidth);height:expression(this.nextSibling.clientHeight);';}LR_GetObj(this.pms['LRdiv']).style.display=this.pms['show'];}	}function onliner_start(){	document.write('<div id=\"'+this.pms['LRdiv']+'\" style=\"display:none;\"></div>');}");
}
else
{
	LR_Fid++;
}
eval('var onlinerIcon'+LR_Fid+'=new OnlinerIcon();');
eval('onlinerIcon'+LR_Fid+'.pms[\'LR_Fid\']=LR_Fid;');
eval('onlinerIcon'+LR_Fid+'.pms[\'show\']=(LR_showfloat && LR_hidden_region.length==0)?\'block\':\'none\';');
eval('onlinerIcon'+LR_Fid+'.pms[\'aligny\']=_lr_tobottom;');
eval('onlinerIcon'+LR_Fid+'.pms[\'alignx\']=_lr_toright;');
eval('onlinerIcon'+LR_Fid+'.pms[\'alignW\']=_lr_left;');
eval('onlinerIcon'+LR_Fid+'.pms[\'alignH\']=_lr_top;');
eval('onlinerIcon'+LR_Fid+'.pms[\'html\']=LR_buildfloat();');
eval('onlinerIcon'+LR_Fid+'.pms[\'closer_show\']=(_lr_closesrc0==\'\')?0:1;');
eval('onlinerIcon'+LR_Fid+'.pms[\'closer_img\']="'+LR_sysurl+'LR/closeimg/'+_lr_closesrc0+'";');
eval('onlinerIcon'+LR_Fid+'.pms[\'LRfloater\']=\'LRfloater'+LR_Fid+'\';');
eval('onlinerIcon'+LR_Fid+'.pms[\'LRdiv\']=\'LRdiv'+LR_Fid+'\';');
eval('onlinerIcon'+LR_Fid+'.start();');
eval('onlinerIcon'+LR_Fid+'.LR_scrollTimer = window.setInterval(\'onlinerIcon'+LR_Fid+'.autoScroll()\', 200); ');
eval('LR_Floaters.push(onlinerIcon'+LR_Fid+');');
if(document.body)document.body.appendChild(LR_GetObj('LRdiv'+LR_Fid));
LR_Fid++;
eval('var onlinerIcon'+LR_Fid+'=new OnlinerIcon();');
eval('onlinerIcon'+LR_Fid+'.pms[\'LR_Fid\']=LR_Fid;');
eval('onlinerIcon'+LR_Fid+'.pms[\'show\']=\'none\';');
if((typeof(Invite_ToBottom) != 'undefined') && (typeof(Invite_ToRight) != 'undefined') && (typeof(Invite_left) != 'undefined') && (typeof(Invite_top) != 'undefined'))
{
	eval('onlinerIcon'+LR_Fid+'.pms[\'aligny\']=Invite_ToBottom;');
	eval('onlinerIcon'+LR_Fid+'.pms[\'alignx\']=Invite_ToRight;');
	eval('onlinerIcon'+LR_Fid+'.pms[\'alignW\']=Invite_left;');
	eval('onlinerIcon'+LR_Fid+'.pms[\'alignH\']=Invite_top;');
}
else
{
	eval('onlinerIcon'+LR_Fid+'.pms[\'xCenter\']=1;');
	eval('onlinerIcon'+LR_Fid+'.pms[\'yCenter\']=1;');
}
eval('onlinerIcon'+LR_Fid+'.pms[\'html\']=\'\';');
eval('onlinerIcon'+LR_Fid+'.pms[\'closer_show\']=0;');
eval('onlinerIcon'+LR_Fid+'.pms[\'closer_img\']="'+LR_sysurl+'LR/closeimg/'+_lr_closesrc1+'";');
eval('onlinerIcon'+LR_Fid+'.pms[\'LRfloater\']=\'LRfloater'+LR_Fid+'\';');
eval('onlinerIcon'+LR_Fid+'.pms[\'LRdiv\']=\'LRdiv'+LR_Fid+'\';');
eval('onlinerIcon'+LR_Fid+'.start();');
eval('onlinerIcon'+LR_Fid+'.LR_scrollTimer = window.setInterval(\'onlinerIcon'+LR_Fid+'.autoScroll()\', 200); ');
eval('LR_Floaters.push(onlinerIcon'+LR_Fid+');');
LR_Fid++;
eval('var onlinerIcon'+LR_Fid+'=new OnlinerIcon();');
eval('onlinerIcon'+LR_Fid+'.pms[\'LR_Fid\']=LR_Fid;');
eval('onlinerIcon'+LR_Fid+'.pms[\'show\']=\'none\';');
if(typeof(Invite_ToBottom) == 'undefined')
{
	eval('onlinerIcon'+LR_Fid+'.pms[\'aligny\']=1;');
	eval('onlinerIcon'+LR_Fid+'.pms[\'alignx\']=1;');
	eval('onlinerIcon'+LR_Fid+'.pms[\'alignW\']=0;');
	eval('onlinerIcon'+LR_Fid+'.pms[\'alignH\']=0;');
}
else
{
	eval('onlinerIcon'+LR_Fid+'.pms[\'xCenter\']=1;');
	eval('onlinerIcon'+LR_Fid+'.pms[\'yCenter\']=1;');
}
eval('onlinerIcon'+LR_Fid+'.pms[\'html\']=\'\';');
eval('onlinerIcon'+LR_Fid+'.pms[\'closer_show\']=0;');
eval('onlinerIcon'+LR_Fid+'.pms[\'LRfloater\']=\'LRfloater'+LR_Fid+'\';');
eval('onlinerIcon'+LR_Fid+'.pms[\'LRdiv\']=\'LRdiv'+LR_Fid+'\';');
eval('onlinerIcon'+LR_Fid+'.start();');
eval('onlinerIcon'+LR_Fid+'.LR_scrollTimer = window.setInterval(\'onlinerIcon'+LR_Fid+'.autoScroll()\', 200); ');
eval('LR_Floaters.push(onlinerIcon'+LR_Fid+');');
function LR_SetOpacity(ev, v) {ev.filters ? ev.style.filter = 'alpha(opacity=' + v + ')' : ev.style.opacity = v / 100;}
function LR_fadeIn(elem) {if(LR_GetObj(elem)==null){return;}speed = 120;opacity = 100;LR_GetObj(elem).style.display = 'block';LR_SetOpacity(LR_GetObj(elem), 0);var val = 0;(function() {LR_SetOpacity(LR_GetObj(elem), val);val += 5;if (val <= opacity) {setTimeout(arguments.callee, speed)}})();}
function LR_fadeOut(elem) {if(LR_GetObj(elem)==null){return;} speed = 50;opacity = 0;var val = 100;(function() {LR_SetOpacity(LR_GetObj(elem), val);val -= 5;if (val >= opacity) {setTimeout(arguments.callee, speed);} else if (val <= 0) {LR_GetObj(elem).style.display = 'none';}})();}
function LR_showInviteDiv(h1,h2)
{
	if(!LR_showinvite) return;
	if (h1==null && h2==null) return;
	if (h1=='1' && h2=='1' && LR_chated_no_invite && LR_getCookie('LR_lastchat')=='1') {return;}
	var LR_ikind1=(!LR_invite_display_kind || h2=='1');if(typeof(LiveAutoInvite0) != 'undefined' && h1=='1')h1=LiveAutoInvite0;if(h2=='1')h2=LR_GetAutoInvite2();
	if(h1.indexOf('%IP%')!=-1)
	{
		var ipfrom=unescape(LR_ip1);
		if(ipfrom.length<3 || (LR_ip1==null && LR_ip2==null))
		{h1='';}
		else
		{h1=h1.replace('%IP%',ipfrom);}
	}
	LR_cur_invite=h2;	LR_m_f(LR_m_d);	if((typeof(LR_invite_m) != 'undefined') && LR_invite_m)LR_m_d = LR_m_e();
	if(LR_UserInviteDiv!=null && LR_ikind1)
	{
		LR_Floaters[1].pms['html']=LR_UserInviteDiv.replace('{c0}',LR_invite_color0).replace('{c1}',LR_invite_color1).replace('{c2}',LR_invite_color2).replace('{c3}',LR_invite_color3).replace('{aimg}',LR_CheckUserUrl(LR_accept_img)).replace('{fimg}',LR_CheckUserUrl(LR_refuse_img)).replace('{pimg}',LR_CheckUserUrl(LR_ivite_img)).replace('{h1}',h1).replace('{h2}',h2).replace(/\{0\}/g,'openZoosUrl();LR_HideInvite();').replace(/\{1\}/g,'LR_RefuseChat();LR_HideInvite();');
	}
	else
	{
		onlinerIcon1.pms['closer_show']=(!LR_isMobile)?0:(_lr_closesrc1==''?0:1);
		if(LR_isMobile && (LR_inviteim.readyState=='complete' || (LR_inviteim.readyState!='undefined' && LR_inviteim.complete))){LR_invitew=LR_inviteim.width/2;LR_inviteh=LR_inviteim.height/2;}
		LR_Floaters[1].pms['html']=LR_isMobile?'<img  src="'+LR_CheckUserUrl(_lr_mobileinviteimgsrc)+'" style="cursor:pointer" onclick="openZoosUrl();LR_HideInvite();">':'<table ID="LR_Tb2" style="BORDER-COLLAPSE: collapse; background-color: '+LR_invite_color1+';border: '+LR_invite_color0+' 2px solid;margin:2px;padding:0;WIDTH: 420px;" align=center><tr><td style="HEIGHT: 20px;margin:0; padding:0;" width="400" valign="bottom">'+((h1=='')?'':'<font style="margin-LEFT: 12px;FONT-WEIGHT: bold; FONT-SIZE: 12px;COLOR: #000000;">'+h1+'</font>')+'</td><TD width="20" align="right" style="PADDING-RIGHT: 0px; PADDING-LEFT: 0px; PADDING-BOTTOM: 0px; MARGIN: 0px; PADDING-TOP: 0px;"><a href="javascript:void(0)" onclick="LR_HideInvite();LR_RefuseChat();return false;"><img src="'+LR_CheckUserUrl(LR_close_img)+'" border="0"></a>&nbsp;</TD></tr><TR><TD colspan="2"><table ID="LR_Tb3" style="BORDER-COLLAPSE: collapse;border: '+LR_invite_color2+' 1px solid; background-color: #FFFFFF;margin-left:7px;margin-right:7px;margin-bottom:7px;margin-top:0;WIDTH: 400px;" align=center><tr><td><table cellspacing=0 cellpadding=0 ID="LR_Tb4" align=center style="WIDTH: 400px; HEIGHT: 104px;border:0;margin:0; padding:0;"><tr><td rowspan="2" style="WIDTH: 110px" align=center><img src="'+LR_CheckUserUrl(LR_ivite_img)+'"></td><td style="PADDING-RIGHT: 10px; PADDING-LEFT: 10px; PADDING-BOTTOM: 2px; PADDING-TOP: 19px;FONT-SIZE: 12px;color:'+LR_invite_color3+';" align=left valign=top>'+h2+'</td></tr><tr><td align=right height=30><table border=0 style="margin:0; padding:0;WIDTH: 180px;"><tr><td><img src="'+LR_CheckUserUrl(LR_accept_img)+'" border=0 usemap="#Map93LR" /><map name="Map93LR"><area shape="rect" coords="1,1,78,22"  href="javascript:void(0)" onclick="openZoosUrl();LR_HideInvite();return false;"></map></td><td width=20></td><td><a href="javascript:void(0)" onclick="LR_HideInvite();LR_RefuseChat();return false;"><img src="'+LR_CheckUserUrl(LR_refuse_img)+'" border=0></a></td><td width=20></td></tr></table></td></tr></table></td></tr></table></td></tr></table>';
	}
	LR_Floaters[1].showdiv(0);LR_Floaters[1].imageTimer(true);if(LR_fade_invite)LR_fadeIn('LRfloater1');if(document.body){document.body.appendChild(LR_GetObj('LRdiv0'));document.body.appendChild(LR_GetObj('LRdiv1'));}
	if(LR_invite_hide_float && LR_showfloat)LR_Floaters[0].hidden();
	window.focus();LR_SetCookie('lastshowinvite',new Date().getTime(),720);
}
function LR_HideInvite()
{
			LR_m_f(LR_m_d);
			if(LR_fade_invite){if(LR_GetObj('LRfloater1')==null)return;LR_fadeOut('LRfloater1');}else{LR_Floaters[1].hidden();}
			if(LR_invite_hide_float && LR_showfloat){LR_Floaters[0].showdiv(1);if(document.body)document.body.appendChild(LR_GetObj('LRdiv0'));}
			if(LR_istate==1){LR_istate=0;}
}
function minichathtml() {
var LR_mini_title = '';
return '<div style="width:381px;"><table width="381" height="290" border="0" cellpadding="0" cellspacing="0"><tr><td width="13" height="59" valign="bottom"><img src="' + LR_sysurl + 'LR/miniimg/img_r2_c2.gif" width="13" height="27" /></td><td width="352" height:"59"><table width="352" height="59" border="0" cellpadding="0" cellspacing="0"><tr><td width="68" height="59" align="left" valign="bottom"><a href="#" onclick="openZoosUrl();lr_hidemini();return false;"><img src="' + LR_sysurl + 'LR/miniimg/img_r1_c3.gif" width="68" height="59" border="0" /></a></td><td width="284" height="59" align="left" valign="bottom"><table width="284" height="27" border="0" cellpadding="0" cellspacing="0"><tr><td width="221" height="27" background="' + LR_sysurl + 'LR/miniimg/close_r1_c1.gif"><div style="width: 170px;font-size: 12px;font-weight: bold;color: #266598;line-height: 25px;overflow: hidden;height: 26px;margin-left:5px;" nowrap="nowrap">' + LR_mini_title + '</div></td><td width="32" height="27"><a href="#" onclick="openZoosUrl();lr_hidemini();return false;"><img src="' + LR_sysurl + 'LR/miniimg/close_r1_c3.gif" width="32" height="27" border="0"></a></td><td width="31" height="27"><a href="#" onclick="lr_closemini();return false;"><img src="' + LR_sysurl + 'LR/miniimg/close_r1_c4.gif" width="31" height="27" border="0"></a></td></tr></table></td></tr></table></td><td width="16" height="59" valign="bottom"><img src="' + LR_sysurl + 'LR/miniimg/img_r2_c5.gif" width="16" height="27" /></td></tr><tr><td width="13" height="219"><img src="' + LR_sysurl + 'LR/miniimg/img_r3_c2.gif" width="13" height="219" /></td><td valign="top" background="' + LR_sysurl + 'LR/miniimg/middle_r4_c3.jpg" style="background-repeat: no-repeat;background-position: left bottom;"><table width="352" height="26" border="0" cellpadding="0" cellspacing="0"><tr><td width="352" height="13"><img src="' + LR_sysurl + 'LR/miniimg/img_r3_c3.gif" width="352" height="13" /></td></tr><tr><td width="352" height="206"><iframe id="LR_miniframe" name="LR_miniframe" width="352px" height="206px" frameborder="0" scrolling="No" src="' + LR_sysurl + 'LR/minichat2.aspx?id=' + LR_websiteid + '&cid=' + LR_cid + '&lng=' + LR_lng + '&sid=' + LR_sid + '&p=' + escape(location.href) + '&r=' + lr_refer5237 + '"></iframe></td></tr></table></td><td width="16" height="219"><img src="' + LR_sysurl + 'LR/miniimg/img_r3_c5.gif" width="16" height="219" /></td></tr><tr><td height="12" colspan="3"><img src="' + LR_sysurl + 'LR/miniimg/img_r7_c2.gif" width="381" height="12" /></td></tr></table></div>';
 }
function LR_showminiDiv()
{
	if(LR_Floaters[2].pms['html']=='')
	{
		var lr_winunload=window.onunload;
		function lr_winunload1()
		{
			if(LR_Floaters[2].pms['show']!='none' && LR_Floaters[2].pms['html']!='')lr_closemini1();
			if(typeof(lr_winunload)=='function')
			{
				lr_winunload();
			}
		}
		window.onunload=lr_winunload1;
		var lr_winonbeforeunload=window.onbeforeunload;
		function lr_winonbeforeunload1()
		{
			if(LR_Floaters[2].pms['show']!='none')return LR_confirm_closechat;
			if(typeof(lr_winonbeforeunload)=='function')
			{
				lr_winonbeforeunload();
			}
		}
		window.onbeforeunload=lr_winonbeforeunload1;
	}
		LR_Floaters[2].pms['html']=minichathtml();
	LR_Floaters[2].showdiv(0);LR_Floaters[1].hidden();LR_Floaters[0].hidden();if(document.body){document.body.appendChild(LR_GetObj('LRdiv2'));}LR_Floaters[2].imageTimer(true);if(LR_fade_invite)LR_fadeIn('LRfloater2');window.focus();
}
function lr_hidemini()
{
		LR_Floaters[2].hidden();
}
function lr_closemini()
{
		if(confirm(LR_confirm_closechat))
		{
		if(LR_showfloat){LR_Floaters[0].showdiv(1);if(document.body)document.body.appendChild(LR_GetObj('LRdiv0'));}lr_closemini1();
		}
}
function lr_closemini1()
{
		LR_Floaters[2].pms['html']='';lr_hidemini();var t_img=new Image;t_img.src =LR_sysurl + 'LR/CdEnd.aspx?id=' + LR_siteid + '&m=1&lng=' + LR_lng + '&sid=' + LR_sid+'&d='+new Date().getTime();if(LR_istate==1){LR_istate=0;}
}
function LR_Hidemobileinvite(lid)
{
		if(lid!=1)return;LR_RefuseChat();LR_HideInvite();
}
function getFlashMovieObject(movieName)
{
	if (window.document[movieName])
	{
		return window.document[movieName];
	}
	if (navigator.appName.indexOf('Microsoft Internet')==-1)
	{
		if (document.embeds && document.embeds[movieName])
			return document.embeds[movieName];
	}
	else
	{
		return document.getElementById(movieName);
	}
}

function lr_refer5238() {if (typeof (lr_refer5236) != 'undefined') {return lr_refer5236;}var ur = document.referrer;var i = ur.lastIndexOf('.');return '&rf1=' + escape(ur.substring(0, i)) + '&rf2=' + escape(ur.substr(i));}
function openZoosUrl(url,data)
{
if (typeof(openZoosUrl_UserDefine) == 'function'){if(openZoosUrl_UserDefine())return;};
if (typeof (LR_istate) != 'undefined') {LR_istate=3;}
var lr_url1=url;
if (typeof (LR_opentimeout) != 'undefined' && typeof (LR_next_invite_seconds) != 'undefined')LR_next_invite_seconds=999999;
	if(url=='sendnote')
	{
		url=LR_sysurl+'LR/Chatwin2.aspx?siteid='+LR_websiteid+'&cid='+LR_cid+'&sid='+LR_sid+'&lng='+LR_lng+'&p='+escape(location.href)+lr_refer5238();
	}
	else
	{
		url=((LR_userurl0 && typeof (LR_userurl) != 'undefined')?LR_userurl:(LR_sysurl+'LR/Chatpre.aspx'))+'?id='+LR_websiteid+'&cid='+LR_cid+'&lng='+LR_lng+'&sid='+LR_sid+'&p='+escape(location.href)+lr_refer5238();
	}
	if(typeof(LR_UserSSL) != 'undefined' && LR_UserSSL && url.charAt(4)==':')url=url.substring(0,4)+'s'+url.substring(4,url.length);
	if(!data){if(typeof(LR_explain)!='undefined' && LR_explain!=''){url+='&e='+escape(escape(LR_explain));}else if(typeof(LiveAutoInvite1)!='undefined'){url+='&e='+escape(escape(LiveAutoInvite1));}}
	if(typeof(LR_username)!='undefined'){url+='&un='+escape(LR_username);}
	if(typeof(LR_userdata)!='undefined'){url+='&ud='+escape(LR_userdata);}
	if(typeof(LR_ucd)!='undefined'){url+='&ucd='+escape(LR_ucd);}
	if(data)url+=data;url+='&d='+new Date().getTime();
	if(lr_url1=='fchatwin')
	{
		LR_ClientEnd=0;window.location=url+'&f=1';return;
	}
	var oWindow;
	try
	{
		if (LR_isMobile)
		{
			window.location=url;
		}
		else if (LR_checkagent('opera|safari|se 2.x'))
		{
			oWindow=window.open(url);
		}
		else
		{
			oWindow=window.open(url,'LRWIN_'+LR_websiteid, 'toolbar=no,width=630,height=435,resizable=yes,location=no,scrollbars=no,left='+((screen.width  - 630) / 4)+',top='+((screen.height - 435) / 4));
		}
		if(oWindow==null)
		{
			LR_ClientEnd=0;window.location=url;
			return;
		}
		oWindow.focus();
	}
	catch(e){
		if(oWindow==null){LR_ClientEnd=0;window.location=url;}
	}
}
if(LR_hasInstall>0 && typeof(LR_swfok) == 'undefined')
{
	var LR_swfok = 1;
	document.write('<script language=\"VBScript\"\>\n');
	document.write('On Error Resume Next\n');
	document.write('Sub LR_Flash_FSCommand(ByVal command, ByVal args)\n');
	document.write('	Call LR_Flash_DoFSCommand(command, args)\n');
	document.write('End Sub\n');
	document.write('</SCRIPT\>');
	var LR_SaveTime=null;
	function LR_savedata(data,name)
	{
		if(LR_swfok)
		{
			LR_SaveTime=setTimeout('LR_savedata("'+data+'","'+name+'")',50);
			return;
		}
		LR_swfok=1;
		try
		{
			getFlashMovieObject('LR_Flash').SetVariable('send_type', 'SAVEDATA');
			getFlashMovieObject('LR_Flash').SetVariable('send_name', 'save');
			getFlashMovieObject('LR_Flash').SetVariable('send_vars', data);
			getFlashMovieObject('LR_Flash').SetVariable('obname', name);
			getFlashMovieObject('LR_Flash').SetVariable('send_go', 'true');
		}
		catch(e)
		{
		}
	}
	var LR_ReadTime=null;
	function LR_readdata(name)
	{
		if(LR_swfok)
		{
			LR_ReadTime=setTimeout('LR_readdata("'+name+'")',50);
			return;
		}
		LR_swfok=1;
		try
		{
			getFlashMovieObject('LR_Flash').SetVariable('send_type', 'READDATA');
			getFlashMovieObject('LR_Flash').SetVariable('send_name', 'read');
			getFlashMovieObject('LR_Flash').SetVariable('obname', name);
			getFlashMovieObject('LR_Flash').SetVariable('send_go', 'true');
		}
		catch(e)
		{
		}
	}
	function LR_send2flash(postdata,url)
	{
		if(LR_swfok)
		{
			setTimeout('LR_send2flash("'+postdata+'","'+url+'")',50);
			return;
		}
		LR_swfok=1;
		try
		{
			getFlashMovieObject('LR_Flash').SetVariable('send_type', 'SENDVARS');
			getFlashMovieObject('LR_Flash').SetVariable('send_name', '2java');
			getFlashMovieObject('LR_Flash').SetVariable('send_url', LR_sysurl+url);
			getFlashMovieObject('LR_Flash').SetVariable('send_vars', postdata);
			getFlashMovieObject('LR_Flash').SetVariable('send_go', 'true');
		}
		catch(e)
		{
		}
	}
	document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+LR_sysurl.substring(0,LR_sysurl.indexOf('//'))+'//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width=0 height=0 id="LR_Flash" class="noswap"><param name=movie value="'+LR_sysurl+'js/lrfla.swf"><PARAM NAME="BGColor" VALUE="FFFFFF"><param name=quality value=high><PARAM NAME="Scale" VALUE="NoBorder"><param name="allowScriptAccess" value="always" />'+(LR_hasInstall>1?'':'<embed src="'+LR_sysurl+'js/lrfla.swf" quality=high width=0 height=0 type="application/x-shockwave-flash" pluginspage="'+LR_sysurl.substring(0,LR_sysurl.indexOf('//'))+'//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" name="LR_Flash" allowScriptAccess="always"></embed>')+'</object>');
	var LR_swfloadok=1;var LR_testload=0;
	function LR_loadok()
	{
		if(LR_swfloadok)
		{
			LR_testload++;
			if(LR_testload==200)
			{
	LR_SetCookie('LR_hasInstall',0,60);
	LR_hasInstall=0;LR_useCookie();
				if(LR_swf_timeid!=null){clearInterval(LR_swf_timeid);LR_swf_timeid=null;}return;
			}
			try
			{
				getFlashMovieObject('LR_Flash').SetVariable('send_type', 'LOADOK');
				getFlashMovieObject('LR_Flash').SetVariable('send_go', 'true');
			}
			catch(e)
			{
			}
		}
		else
		{
			if(LR_swf_timeid!=null){clearInterval(LR_swf_timeid);LR_swf_timeid=null;}
		}
	}
	var LR_swf_timeid=setInterval('LR_loadok();',10);
}
if(typeof(LR_Flash_DoFSCommand) != 'function')
{
	function floatdata_append(_data,add){if(_data!=''){_data+='|';}return _data+=add;}
	function LR_Flash_DoFSCommand(command, args)
	{
		if(command=="LOADOK")
		{
			if(!LR_swfloadok)return;
			LR_swfloadok=0;LR_swfok=0;return;
		}
		var lrdata='';
		if(command=="2java")
		{
			if(args=='undefined')
			{
			}
			else
			{
				var oo = args.split('|');
				for(o=0;o<oo.length;o++)
				{
					var oo1=oo[o].split(',');
					if(oo1.length==2)
					{
						switch(oo1[0])
						{
							case 'invitewords': 
								var oo2=oo1[1].split('/');LR_invite0=unescape(oo2[0]);LR_invite1=unescape(oo2[1]);
								break;
							case 'sidexists': 
								if(oo1[1]=='1'){LR_sidexists=1;}else{LR_sidexists=0;}
								break;
							case 'checkinvite': 
								checkcount=2;var oo3=oo1[1].split('/');LR_invite0=unescape(oo3[0]);LR_invite1=unescape(oo3[1]);LR_invitef();
								break;
							case 'ip': 
								LR_ip=oo1[1];
								break;
							case 'ip1': 
								LR_ip1=oo1[1];
								break;
							case 'ip2': 
								LR_ip2=oo1[1];
								break;
							case 'sKey': 
								LR_skey=oo1[1];
								break;
							case 'LR_surl': 
								LR_surl=oo1[1];
								break;
						}
					}
				}
			}
		}
		if(command=="save")
		{
			if(args=='true')
			{
				LR_swfok=0;return;
			}
			else
			{
			}
		}
		if(command=="read")
		{
			if(args=='')
			{LR_readdata(LR_websiteid);LR_swfok=0;return;}
			else if(args=='|')
			{
			}
			else
			{
				var oo = args.split('|');
				for(o=0;o<oo.length;o++)
				{
					var oo1=oo[o].split(',');
					if(oo1.length==2)
					{
						if(isNaN(oo1[1]))
						{
							var v='if(typeof(LR_'+oo1[0]+') != "undefined"){LR_'+oo1[0]+'=unescape(oo1[1]);}';
							eval(v);
						}
						else
						{
							eval('if(typeof(LR_'+oo1[0]+') != "undefined"){LR_'+oo1[0]+'=oo1[1];}');
						}
					}
				}
			}
				if(LR_cid=='' || LR_cid=='null')LR_cid=null;
				if(LR_sid=='' || LR_sid=='null')LR_sid=null;
			if(LR_cid==null || LR_sid==null)
			{
				LR_cid=LR_getCookie('LiveWS'+LR_websiteid);
				LR_sid=LR_getCookie('LiveWS'+LR_websiteid+'sessionid');
				lrdata=floatdata_append(lrdata,'cid,'+LR_cid+'|sid,'+LR_sid+'|fistvisitetime,'+new Date().getTime()+'|lastvisitetime,'+new Date().getTime()+'|visitecounts,1|visitepages,1');
			}
			else
			{
				lrdata=floatdata_append(lrdata,'lastvisitetime,'+new Date().getTime()+'|visitepages,'+(parseInt(LR_visitepages)+1));
				if((new Date().getTime()-parseInt(LR_lastvisitetime))>43200000)
				{
					LR_sid=LR_getCookie('LiveWS'+LR_websiteid+'sessionid');
					lrdata=floatdata_append(lrdata,'sid,'+LR_sid+'|visitecounts,'+(parseInt(LR_visitecounts)+1));
				}
			}
				if(_lr_issupport_track)
				{
					var data='';
					data=floatdata_append(data,'p,'+escape(location.href)+'|r,'+lr_refer5237+'|e,'+escape(LR_explain));
					data=floatdata_append(data,'id,'+LR_siteid+'|sid,'+LR_sid+'|cid,'+LR_cid+'|lng,'+LR_lng);
	if(typeof(LR_username)!='undefined'){data+='|un,'+escape(LR_username);}
	if(typeof(LR_userdata)!='undefined'){data+='|ud,'+escape(LR_userdata);}
	if(typeof(LR_pagetitle)!='undefined'){data+='|pt,'+escape(LR_pagetitle);}
	if(LR_issupport_feydj){data+='|f,1';}
					LR_send2flash(data,'js/JS_Float1.aspx');
				}
				else
				{
					LR_sidexists=2;
				}
		}
		if(lrdata!=''){LR_savedata(lrdata,LR_websiteid);}
		LR_swfok=0;
	}
}
function LR_useCookie(){
LR_cid=LR_getCookie('LiveWS'+LR_websiteid);
LR_sid=LR_getCookie('LiveWS'+LR_websiteid+'sessionid');
LR_fistvisitetime=LR_getCookie('fistvisitetime');
LR_lastvisitetime=LR_getCookie('lastvisitetime');
LR_visitecounts=LR_getCookie('visitecounts');
LR_visitepages=LR_getCookie('visitepages');
LR_cname=LR_getCookie('cname');
LR_ccolor=LR_getCookie('ccolor');
if(LR_fistvisitetime==null)
{
	LR_SetCookie('fistvisitetime',new Date().getTime(),2628000);
	LR_SetCookie('lastvisitetime',new Date().getTime(),2628000);
	LR_SetCookie('visitecounts',1,2628000);
	LR_SetCookie('visitepages',1,2628000);
}
else
{
	LR_SetCookie('lastvisitetime',new Date().getTime(),2628000);
	if((new Date().getTime()-parseInt(LR_lastvisitetime))>43200000){LR_SetCookie('visitecounts',(parseInt(LR_visitecounts)+1),2628000);}
	LR_SetCookie('visitepages',(parseInt(LR_visitepages)+1),2628000);
}
if(_lr_issupport_track)
{
var data='id='+LR_siteid+'&sid='+LR_sid+'&cid='+LR_cid+'&lng='+LR_lng;
	data+='&p='+escape(location.href)+'&r='+lr_refer5237+'&e='+escape(LR_explain);
	if(typeof(LR_username)!='undefined'){data+='&un='+escape(LR_username);}
	if(typeof(LR_userdata)!='undefined'){data+='&ud='+escape(LR_userdata);}
	if(typeof(LR_pagetitle)!='undefined'){data+='&pt='+escape(LR_pagetitle);}
	if(LR_issupport_feydj){data+='&f=1';}
LR_loadingJs(LR_sysurl+'js/JS_Float.aspx?'+data+'&d='+new Date().getTime());
}else{LR_sidexists=2;}
}
if (LR_hasInstall>0){LR_readdata(LR_websiteid)}else{LR_useCookie();};
function LiveReceptionCode_BuildChatWin(_lrchatexplain,_lrhelpalt)
{
	return ' href="javascript:void(0)"  onclick="openZoosUrl(\'chatwin\',\'&e='+escape(escape(_lrchatexplain))+'\');return false;" title="'+unescape(_lrhelpalt)+'" target="_self" ';
}
function LR_GetAutoInvite2()
{
if(LR_invitesearchkey && LR_skey!=null && typeof(LiveAutoInvite3) != 'undefined'){return LiveAutoInvite3.replace('%SKEY%',unescape(LR_skey));}else if(LR_invitestring1_auto!=''){return LR_invitestring1_auto;}else{return LiveAutoInvite2.replace(/\\"/g, '"');}
}
function clearinviteTimeout(){if(LR_nexttimerID != null){clearTimeout(LR_nexttimerID); LR_nexttimerID = null; }LR_HideInvite();}
function LR_invitef()
	{
		if(LR_invite0=='fopenchatwin'){LR_gstate=1;if(LR_istate<2){clearinviteTimeout();LR_istate=2;window.focus();openZoosUrl('fchatwin');lr_hidemini();}}
		else if(LR_invite0=='no'){LR_gstate=2;clearinviteTimeout();if(LR_istate>0){LR_istate=0;}}
		else if(LR_invite0=='openchatwin'){LR_gstate=1;if(LR_istate>-1){clearinviteTimeout();LR_istate=1;LR_showminiDiv();}}
		else if(LR_invite0!=''){LR_gstate=1;if(LR_istate>-1){clearinviteTimeout();LR_istate=1;LR_showInviteDiv(LR_invite0,LR_invite1);}}
	}
function LR_LS()
{
	if(LR_sidexists==-1)
	{
		setTimeout('LR_LS()',100);return;
	}
	LR_Check_region();
		if(LR_invite0=='alerturl'){var oo5=LR_invite1.split(',');alert(unescape(oo5[1]));window.location=oo5[0];}else if(LR_invite0=='url'){window.location=LR_invite1;}else if(LR_invite0=='alert'){alert(LR_invite1);LR_gstate=-2;}
	if(_lr_issupport_track)
	{
		if(LR_sidexists==0)
		{
			var LR_Color=16;
			if(navigator.appName!='Netscape'){LR_Color=screen.colorDepth;}
			else{LR_Color=screen.pixelDepth;}
			var LR_sSize = screen.width + '*' + screen.height;
			if (LR_hasInstall>0)
			{
			var data='id,'+LR_siteid+'|sid,'+LR_sid+'|s,'+LR_sSize+'|ft,'+LR_fistvisitetime+'|fl,'+LR_lastvisitetime+'|vc,'+LR_visitecounts+'|vp,'+LR_visitepages+'|c,'+LR_Color+'|lng,'+LR_lng+'|cid,'+LR_cid+'|z,'+(new Date()).getTimezoneOffset()/60;
	data+='|cn,'+escape(LR_cname)+'|co,'+escape(LR_ccolor)+'|lo,'+escape(LR_lastoname);
			LR_send2flash(data,'ls/newsid.aspx');
			}
			else
			{
			var LR_image = new Image;
			var data='id='+LR_siteid+'&sid='+LR_sid+'&s='+LR_sSize+'&ft='+LR_fistvisitetime+'&fl='+LR_lastvisitetime+'&vc='+LR_visitecounts+'&vp='+LR_visitepages+'&c='+LR_Color+'&lng='+LR_lng+'&cid='+LR_cid+'&z='+(new Date()).getTimezoneOffset()/60;
	data+='&cn='+escape(LR_cname)+'&co='+escape(LR_ccolor);
			LR_image.src = LR_sysurl+'LS/newsid0.aspx?'+data;
			}
		}
	}
	if(!LiveReceptionCode_isonline && offline_invite_hidden)return;
	if(typeof(LrinviteTimeout) == 'undefined' || isNaN(LrinviteTimeout) || LrinviteTimeout<1)
	{
		LrinviteTimeout=1;
	}
LR_invitef();
	LR_nextinvite(1);
	if(LiveReceptionCode_isonline && _lr_issupport_invite){LR_hcloop();}
}
LR_LS();
	var lronunload0=window.onunload;
		window.onunload=lronunload1;
	function lronunload1()
	{
		if(!LR_ClientEnd)return;LR_ClientEnd=0;var LR_img = new Image;
		LR_img.src = LR_sysurl+'LR/ClientEnd.aspx?id='+LR_siteid+'&lng='+LR_lng+'&sid='+LR_sid+'&d='+new Date().getTime();
		try{if (typeof(lronunload0) == 'function')lronunload0();}catch(e){}
	}
function LR_RefuseChat()
{
	if(LR_gstate==1){LR_invite0='';LR_istate=-1;}LR_nextinvite();
}
function LR_nextinvite(fic)
{
	if(LR_gstate<1 && LR_istate==0 && typeof(LiveAutoInvite0) != 'undefined'){
		if(!fic && (!LR_repeatinvite || typeof(LR_next_invite_seconds) == 'undefined'))return;
		var lastshowinvite=parseInt(LR_getCookie('lastshowinvite'));if(isNaN(lastshowinvite)){lastshowinvite=0;}
		var intimeout=_lr_invite_interval*1000-(new Date().getTime()-lastshowinvite);var intimeout1=(fic?LrinviteTimeout:LR_next_invite_seconds)*1000;if(intimeout>0){intimeout1+=intimeout;}
		LR_istate=1;LR_nexttimerID=setTimeout('LR_showInviteDiv("1","1")',intimeout1);
	}
}
var LR_inviteimgJS;
function LR_hcloopJS(url, param) {
    var me = arguments.callee;
    var src = url.indexOf('?') == '-1' ? url + '?' : url;
    src += param + '&d=' + new Date().getTime();
    me.Script && me.Script.parentNode.removeChild(me.Script);
    me.Script = document.createElement('script');
    me.Script.setAttribute('type', 'text/javascript');
    me.Script.src = src;
    document.getElementsByTagName('head')[0].appendChild(me.Script);
}

function LR_CheckImgJS(w,w1,w2)
{
	if(checkcount==-1 && w!=6)return false;
	if(LR_inviteimgJS==null || LR_inviteimgJS==1)return true;
	if(!w){return false;}else{LR_inviteimgJS=1;}if(w==28){return true;}
	if(w>0)
	{
		if(w==3){LR_gstate=1;if(LR_istate>0 && LR_cur_invite==_lr_invitestring){return false;}if(LR_istate>-1){clearinviteTimeout();LR_istate=1;LR_showInviteDiv(_lr_invitetitle,_lr_invitestring);}}
		else if(w==2){LR_gstate=1;if(LR_istate<2){clearinviteTimeout();LR_istate=2;window.focus();openZoosUrl('fchatwin');lr_hidemini();}}
		else if(w==8){LR_gstate=1;if(LR_istate>-1){clearinviteTimeout();LR_istate=1;LR_showminiDiv();}}
		else if(w==4){LR_gstate=0;if(LR_istate>1){LR_istate=0;}LR_nextinvite();}
		else if(w==5){if(LR_gstate!=2){LR_gstate=2;LR_SetCookie('LR_lastchat','1',720);}clearinviteTimeout();if(LR_istate>0){LR_istate=0;}}
		else if(w==6){checkcount=2;if(LR_istate==-2){LR_istate=0;}LR_nextinvite();}
		else if(w==7){LR_gstate=-1;if(LR_istate>1){LR_istate=0;}LiveReceptionCode_isonline=0;if(typeof(LR_offline)=='function')LR_offline();LR_Floaters[0].pms['html']=LR_buildfloat();LR_Floaters[0].imageTimer(true);return false;}
		else if(w==1)
		{
			if(LR_gstate==1)return;
			checkcount=2;LR_invite0=w1;LR_invite1=w2;LR_invitef();
		}
	}
	else
	{
		return false;
	}
	return true;
}
function LR_hcloop()
{
	if (!LiveReceptionCode_isonline || (LR_visitetime+1800000)<new Date().getTime())return;
	if (!LR_CheckImgJS())
	{
		setTimeout('LR_hcloop()', 500);return;
	}
	if (LR_istate==-1)
	{
		LR_istate=-2;checkcount=-1;LR_inviteimgJS=0;LR_hcloopJS(LR_sysurl+'JS/RefuseChatjs.aspx','id='+LR_siteid+'&sid='+LR_sid+'&lng='+LR_lng);
		setTimeout('LR_hcloop()', 500);return;
	}
	if(LR_getCookie('lastinvite')!=null)LR_lastinvite=LR_getCookie('lastinvite');
	if(LR_lastinvite!=null)
	{
		if (LR_MCount1<5000)LR_MCount1=5000;
		if ((new Date().getTime() - parseInt(LR_lastinvite)) > LR_MCount1)
		{
			LR_lastinvite=new Date().getTime();
			LR_SetCookie('lastinvite',LR_lastinvite,720);
			LR_inviteimgJS=0;LR_hcloopJS(LR_sysurl+'js/CheckInvitejs.aspx','id='+LR_siteid+'&sid='+LR_sid+'&lng='+LR_lng);
		}
		else
		{
		}
	}
	setTimeout('LR_hcloop()', 2000);
}
