!function(e){function t(e){var t=!0;return/^\d{11,12}$/.test(e)||(t=!1,alert(b.ERROR_PHONE)),t}function n(e){alert(e)}function r(e){var t=e.msg||b.ERROR_FAIL;alert(t+" ( code: "+e.status+" )")}function a(e,t){var n="_lxb_jsonp_"+(new Date).getTime()+"_",r=document.getElementsByTagName("head")[0];window[n]=function(){window[n]=null;try{delete window[n]}catch(e){}t.apply(null,Array.prototype.slice.call(arguments));var r=document.getElementById(n);r&&r.parentNode.removeChild(r)};var a=document.createElement("script");a.setAttribute("type","text/javascript"),a.setAttribute("id",n),a.setAttribute("charset","utf-8"),e+=e.indexOf("?")>=0?"&":"?",e+="callback="+n,a.setAttribute("src",e),r.appendChild(a)}function o(e,t,n,r){var a=e+"="+t;if(n&&(a+="; path="+n),r){var o=new Date;o.setTime(o.getTime()+24*r*3600*1e3),a+="; expires="+o.toGMTString()}document.cookie=a}function i(e){var t=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),n=t.exec(document.cookie);return n?n[2]||null:null}function u(e){return e=e.replace(/^https?:\/\//,"").split("/"),e[0].replace(/:.*$/,"")}function d(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);128>r?t+=String.fromCharCode(r):r>127&&2048>r?(t+=String.fromCharCode(r>>6|192),t+=String.fromCharCode(63&r|128)):(t+=String.fromCharCode(r>>12|224),t+=String.fromCharCode(r>>6&63|128),t+=String.fromCharCode(63&r|128))}return t}function c(e){var t,n,r,a,o,i,u,c="",l=0;for(e=d(e);l<e.length;)t=e.charCodeAt(l++),n=e.charCodeAt(l++),r=e.charCodeAt(l++),a=t>>2,o=(3&t)<<4|n>>4,i=(15&n)<<2|r>>6,u=63&r,isNaN(n)?i=u=64:isNaN(r)&&(u=64),c=c+_keyStr.charAt(a)+_keyStr.charAt(o)+_keyStr.charAt(i)+_keyStr.charAt(u);return c}function l(){if(-1!==y)return y;var e=u(window.location.href),t=u(document.referrer);return document.referrer?y=e===t?!1:!0:"loaded"===i("isLoadPage")?y=!1:(o("isLoadPage","loaded","/"),y=!0)}function s(e,t){var n=512,r=g+"/vt/lxb.gif",a=(document.title||"").substr(0,n),o=(document.referrer||"").substr(0,n),i=(document.URL||"").substr(0,n),u=p.BDCBID,d=[];d.push(encodeURIComponent(e||"")),d.push(encodeURIComponent(a||"")),d.push(encodeURIComponent(o||"")),d.push(encodeURIComponent(i||"")),d.push(+l());var s=c(d.join(",")),m=function(){E||(E=document.createElement("div"),E.style.display="none"),E.innerHTML='<form action="'+r+'" method="post" target="lxbHideIframe"><input name="p" value="'+s+'"/><input name="uid" value="'+t+'"/><input name="bdcbid" value="'+u+'"/><input name="t" value="'+(new Date).valueOf()+'"/></form><iframe id="lxbHideIframe" name="lxbHideIframe" src="about:blank"></iframe>',document.body&&(document.body.appendChild(E),form=E.getElementsByTagName("form")[0],form.submit())};document.body?m():window.onload=m}function m(e,o,i){if("[object String]"!=Object.prototype.toString.call(e)&&(e=e.value),f.token&&!f.status&&t(e)){var u=[];u.push("uid="+f.uid),u.push("g="+f.gid),u.push("tk="+f.token),u.push("vtel="+e),f.status=1;var d=setTimeout(function(){f.status=0},5e3);a(h.CALL+"?"+u.join("&"),function(e){d&&clearTimeout(d),f.status=0,e.status?(i=i||r,i.call(null,e)):(o=o||n,o.call(null,e.msg||b.SUCCESS))}),"1"==p.LXBVT&&s(2,f.uid)}}var f={status:0},p={BDCBID:'dc24b35c-cb9e-452f-ae93-775823671b37',LXBVT:1},g="http://lxbjs.baidu.com",h={GET_TOKEN:g+"/cb/user/check",CALL:g+"/cb/call"},b={SUCCESS:"\u56de\u547c\u6210\u529f\uff01",ERROR_FAIL:"\u7cfb\u7edf\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5",ERROR_PHONE:"\u8bf7\u60a8\u8f93\u5165\u6b63\u786e\u7684\u53f7\u7801\uff0c\u624b\u673a\u53f7\u7801\u8bf7\u76f4\u63a5\u8f93\u5165\uff0c\u5ea7\u673a\u8bf7\u52a0\u533a\u53f7"};_keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var v=e.lxb||{};if(!v.call){v.call=m,e.lxb=v;for(var C,E=null,y=-1,A=document.getElementsByTagName("script"),S=0;C=A[S];S++)if(gid=C.getAttribute("data-lxb-gid"),C=C.getAttribute("data-lxb-uid"),gid&&!f.gid&&(f.gid=gid),C&&!f.uid){f.uid=C;break}if(f.uid){var T=[];T.push("uid="+f.uid),T.push("g="+f.gid),T.push("t="+(new Date).getTime()),T.push("f=4"),T.push("r="+document.referrer),a(h.GET_TOKEN+"?"+T.join("&"),function(e){e&&0==e.status&&e.data.tk&&(f.token=e.data.tk,"1"==p.LXBVT&&s(1,f.uid))})}}}(window);