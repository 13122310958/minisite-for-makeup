// JavaScript Document

function LR_showInviteDiv(h1, h2) {
	jq.cookie('online_state', '2', { expires: 1});
	jq("#online_main").css('display', 'none');
	if (!LR_showinvite) return;
	if (h1 == null && h2 == null) return;
	if (h1 == '1' && h2 == '1' && LR_chated_no_invite && LR_getCookie('LR_lastchat') == '1') {
		return;
	}
	if (typeof(LiveAutoInvite0) != 'undefined' && h1 == '1') h1 = LiveAutoInvite0;
	if (h2 == '1') h2 = LR_GetAutoInvite2();
	if (h1.indexOf('%IP%') != -1) {
		var ipfrom = unescape(LR_ip1);
		if (ipfrom.length < 3 || (LR_ip1 == null && LR_ip2 == null)) {
			h1 = '';
		} else {
			h1 = h1.replace('%IP%', ipfrom);
		}
	}
	LR_cur_invite = h2;
	LR_m_f(LR_m_d);
	if ((typeof(LR_invite_m) != 'undefined') && LR_invite_m) LR_m_d = LR_m_e();
	if (LR_UserInviteDiv != null) {
		LR_Floaters[1].pms['html'] = LR_UserInviteDiv.replace('{c0}', LR_invite_color0).replace('{c1}', LR_invite_color1).replace('{c2}', LR_invite_color2).replace('{c3}', LR_invite_color3).replace('{aimg}', LR_CheckUserUrl(LR_accept_img)).replace('{fimg}', LR_CheckUserUrl(LR_refuse_img)).replace('{pimg}', LR_CheckUserUrl(LR_ivite_img)).replace('{h1}', h1).replace('{h2}', h2).replace(/\{0\}/g, 'LR_HideInvite();openZoosUrl();').replace(/\{1\}/g, 'LR_HideInvite();LR_RefuseChat();');
	} else {
		LR_Floaters[1].pms['html'] = '<img src="invitedbg.jpg"/*tpa=http://www.tianda120.com/js/swt/images/invitedbg.jpg*/ width="364" height="230"/><div style="position:absolute; left:187px; top:152px;"><a onclick="LR_HideInvite();openZoosUrl();return false;" href="javascript:void(0)" target="_self"><img src="tel_bt.gif"/*tpa=http://www.tianda120.com/js/swt/images/tel_bt.gif*/></a></div><div style="position:absolute; left:262px; top:152px;"><a onclick="LR_HideInvite();LR_RefuseChat();return false;" href="javascript:void(0)" target="_self"><img src="btn_xh.gif"/*tpa=http://www.tianda120.com/js/swt/images/btn_xh.gif*/></a></div>';
	}
	LR_Floaters[1].showdiv(0);
	LR_Floaters[1].imageTimer(true);
	if (LR_invite_hide_float && LR_showfloat) LR_Floaters[0].hidden();
	window.focus();
	LR_SetCookie('lastshowinvite', new Date().getTime(), 720);
}
