var in_array  = function (_search, _array){
	
	for (_s = 0; _s < _array.length; _s++) {
		thisEntry = _array[_s].toString();
		if (thisEntry == _search) {
			return true;
		}
	}
	return false;
}
function showSWT(){
	var o = '', _argum = arguments.length != 0 ? arguments : ['index', 'l', 'c', 'r', 'f', 'q'];

	if(in_array('pf', _argum)){
		o = 'pf';
	}else if(in_array('wc', _argum)){
		o = 'wc';
	}else if(in_array('yk', _argum)){
		o = 'yk';
	}else{
		o = 'index';
	}

	in_array('l', _argum) ? showSWT_left(o) : null; 
	in_array('c', _argum) ? showSWT_center(o) : null; 
	in_array('r', _argum) ? showSWT_right(o) : null; 
	in_array('f', _argum) ? showSWT_foot(o) : null; 
	in_array('q', _argum) ? showSWT_qq() : null; 
	
}

//商务通中间
function showSWT_center(){
	
	var a = window.location.pathname.split("/");

	var name = a[a.length-2];

	var hasImage = function(imgUrl) {
		var flag = false;
	 
		$.ajax({
		url: imgUrl,
		type:"GET",
		async:false,
		success:function(){flag = true;}
		});
		 
		return flag;
	}

	if(hasImage('http://www.shrose.cn/swt2013/ztimg/' + name + '.jpg') == true ){

		var swt_gs =".jpg";
		var swt_path = "http://www.shrose.cn/swt2013/ztimg/" + name + swt_gs;
	}else if(hasImage('http://www.shrose.cn/swt2013/ztimg/' + name + '.gif') == true ){

		var swt_gs =".gif";
		var swt_path = "http://www.shrose.cn/swt2013/ztimg/" + name + swt_gs;
	}else{
		var swt_path = "/swt2013/swt-center-"+arguments[0]+".gif";
	}

	
	document.write("<style>.swt-center-close{ transition: all 0.5s linear 0s; transform:scale(0,0); -webkit-transform:scale(0,0); -moz-transform:scale(0,0); -o-transform:scale(0,0); -ms-transform:scale(0,0);}</style><div style='display:none; z-index:10000; position: fixed !important; left: 50%; margin-left: -211px !important; top: 40%; margin-top: -100px !important;_top:expression(offsetParent.scrollTop+300); !important;*position:absolute;*bottom:auto; box-shadow:0px 3px 10px #494949;' id='swt-center'><div style='position:absolute; width:60px; height:27px; text-align:center; line-height:27px; color:#fff; font-size:25px;font-weight:bold; right:62px; top:83px; ' id='djs-swt'></div><img src='"+swt_path+"' usemap='#map1' /><map name='map1' id='map1'><area shape='rect' coords='415,2,438,28' href='javascript:closeSWT();' alt='关闭' /><area shape='rect' coords='205,183,300,217' href='javascript:onSWT(\"mfyy\");' alt='免费预约' /><area shape='rect' coords='316,184,410,217' href='javascript:onSWT(\"zxzx\");' alt='在线咨询' /><area shape='rect' coords='10,25,430,185' href='javascript:onSWT();'/></map></div>");
	

}

//商务通右侧
function showSWT_right(){
	
	var _color = '';
	switch(arguments[0])
	{
		case 'index':
			var _color = '#90243a';break;
		case 'pf':
			var _color = '#03adbf';break;
		case 'wc':
			var _color = '#0066ac';break;
		case 'yk':
			var _color = '#508a23';break;
		default:
			var _color = '#90243a';break;
	}
	var _css = ['<style>',
					'.swt-right-bg{ width:56px; position:fixed; right:0px; top:150px;_position:absolute;_top:expression(eval(document.documentElement.scrollTop+200)); z-index:1000000;}',
					'.swt-right{ position:relative;}',
					'.swt-right ul{ height:303px; background:' + _color + '}',
					'.swt-right li{ width:56px; height:76px; overflow:hidden; background:url(/swt2013/swt-right-' + arguments[0] + '1.jpg) 0px 0px no-repeat;transition: all 0.3s linear 0s; line-height:0px; font-size:0px;}',
					'.swt-right li:hover{ background:url(/swt2013/swt-right-' + arguments[0] + '2.jpg) 0px 0px no-repeat;}',
					'.swt-right li a{ width:56px; height:76px;display:block; background:url(/swt2013/swt-right-' + arguments[0] + '1.jpg) 0px 0px no-repeat;transition: all 0.3s linear 0s;}',
					'.swt-right li:hover a{ background:url(/swt2013/swt-right-' + arguments[0] + '2.jpg) 0px 0px no-repeat;}',
					'#swt-right-a1{ background-position:0px -76px;}',
					'.swt-right li:hover #swt-right-a1{ background-position:0px -76px;}',
					'#swt-right-a2{ background-position:0px -152px;}',
					'.swt-right li:hover #swt-right-a2{ background-position:0px -152px;}',
					'#swt-right-a3{ background-position:0px -228px;}',
					'.swt-right li:hover #swt-right-a3{ background-position:0px -228px;}',
					'#swt-right-a4{width:56px; height:76px;display:block; background:url(/swt2013/swt-right-' + arguments[0] + '1.jpg) 0px -303px no-repeat;transition: all 0.3s linear 0s;}',
					'.swt-right li:hover #swt-right-h{ display:block;}',
					'#swt-right-h{ width:142px; height:335px; background:url(/swt2013/swt-right-' + arguments[0] + '3.png) no-repeat; position:absolute; left:-142px; top:0px; display:none; border-radius:7px;}',
					'#swt-right-h a{ width:142px; height:335px; display:block; background:none; position:absolute; left:0xp; top:0px;}',
				'</style>'].join(''); 
		
	document.write(_css);
	delete _css;
	
	var  o = ['<div class="swt-right-bg">',
					'<div class="swt-right">',
					'<ul>',
						'<li id="swt-right-yhxx">',
							'<div id="swt-right-h">',
								'<div style="position:absolute; width:38px; height:24px; left:56px; top:72px; font-size:20px;text-align:center; line-height:24px; font-size:18px; font-weight:bold; color:#ff0000;" id="djs-swt-right"></div>',
								'<a href="javascript:onSWT(\'ljyy\')"></a>',
							'</div>',
						'</li>',
						'<li><a id="swt-right-a1" href="javascript:onSWT(\'rightzx\');"></a></li>',
						'<li><a id="swt-right-a2" href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODA1NDA4OF85MjM2OV80MDA2MjA4NjY2XzJf" target="_blank"></a></li>',
						'<li><a id="swt-right-a3" href="http://www.shrose.cn/2013/route.html" target="_blank"></a></li>',
					'</ul>',
					'<span><a id="swt-right-a4" href="javascript:scroll(0,0);"></a></span>',
					'</div>',
				'</div>'].join('');
	document.write(o);
	delete o;

	
}

//商务通左侧
function showSWT_left(){

	var _color = '';
	switch(arguments[0])
	{
		case 'index':
			var _color = '#90243a';break;
		case 'pf':
			var _color = '#03adbf';break;
		case 'wc':
			var _color = '#0066ac';break;
		case 'yk':
			var _color = '#508a23';break;
		default:
			var _color = '#90243a';break;
	}
	
	
	var _style = ['<style type="text/css">.swt-left-bg{ width:39px; position:fixed; left:0px; top:150px;_position:absolute;_top:expression(eval(document.documentElement.scrollTop+200)); z-index:1000000;}',
						'.swt-left-ico{ width:48px; height:46px; padding-top:7px; position:absolute; left:-5px; bottom:5px; background:url(/swt2013/swt-left-ico1.png) -53px no-repeat;}',
						'.swt-left-ico span{ width:41px; height:41px; display:block; float:right; margin-right:4px;cursor:pointer; background:url(/swt2013/swt-left-ico2-' + arguments[0] + '.png) no-repeat;-webkit-transition:0.4s linear;transition:0.4s ease-in;}',
						'.swt-left-ico .hover{-webkit-transform:rotate(135deg);transform:rotate(135deg);}',
						'.swt-left-ico .leave{-webkit-transform:rotate(0deg);transform:rotate(0deg);}',
						'.swt-left-menu{ width:39px; height:454px; background:url(/swt2013/swt-left-' + arguments[0] + '1.png) no-repeat; position:relative;}',
						'.swt-left-menu span{ height:90px; padding-top:28px; display:block;}',
						'.swt-left-menu span a{ width:39px; height:66px; display:block;}',
						'#swt-left-menu-a1{ width:39px; height:73px; background:url(/swt2013/swt-left-' + arguments[0] + '1.png) 0px -118px no-repeat;}',
						'#swt-left-menu-a1:hover{ background:url(/swt2013/swt-left-' + arguments[0] + '2.png) 0px -118px no-repeat; transition: all 0.3s linear 0s;}',
						'#swt-left-menu-a2{ width:39px; height:55px; display:block; background:url(/swt2013/swt-left-' + arguments[0] + '1.png) 0px -191px no-repeat;}',
						'#swt-left-menu-a2:hover{ background:url(/swt2013/swt-left-' + arguments[0] + '2.png) 0px -191px no-repeat; transition: all 0.3s linear 0s;}',
						'#swt-left-menu-a3{ width:39px; height:55px; display:block; background:url(/swt2013/swt-left-' + arguments[0] + '1.png) 0px -246px no-repeat;}',
						'#swt-left-menu-a3:hover{ background:url(/swt2013/swt-left-' + arguments[0] + '2.png) 0px -246px no-repeat; transition: all 0.3s linear 0s;}',
						'#swt-left-menu-a4{ width:39px; height:55px; display:block; background:url(/swt2013/swt-left-' + arguments[0] + '1.png) 0px -301px no-repeat;}',
						'#swt-left-menu-a4:hover{ background:url(/swt2013/swt-left-' + arguments[0] + '2.png) 0px -301px no-repeat; transition: all 0.3s linear 0s;}',
						'.swt-left-menu i{ width:39px; height:18px; margin-top:62px; display:block; text-align:center;cursor:pointer;}',
						'.swt-left-c{ width:220px; height:455px; position:absolute; left:0px; top:0px;}',
						'.swt-left-c-bg{ width:0px; height:442px; background:url(/swt2013/swt-left-c-bg.jpg); position:absolute; left:39px; top:6px; overflow:hidden;}',
						'.swt-left-c2{ padding-top:25px; width:170px;}',
						'.swt-left-c-t{ width:160px; padding-left:10px; height:40px; line-height:25px; overflow:hidden;}',
						'.swt-left-c-t h3{ width:120px; font-family:"微软雅黑","黑体"; font-size:18px; float:left; color:#262626; font-weight:normal;}',
						'.swt-left-c-t span{ width:20px; height:20px; padding-top:4px; display:block; float:left; cursor:pointer; background:url(/swt2013/swt-left-c1-t-' + arguments[0] + '.jpg) 0px 2px no-repeat;}',
						'.swt-left-c-c{ height:335px;}',
						'.swt-left-c-c dl{ width:70px; float:left; margin-left:10px; margin-bottom:10px; display:inline;}',
						'.swt-left-c-c dd{ width:68px; height:68px; border:1px solid #cfcfce; overflow:hidden;}',
						'.swt-left-c-c dt{ height:27px; padding-top:5px; text-align:center;}',
						'.swt-left-c-c dt a{ padding:4px 5px; transition: all 0.3s linear 0s;border-radius:2px; font-size:12px;}',
						'.swt-left-c-c dl:hover dt a{color:#fff; background:' + _color + ' ;text-decoration:none;}',
						'.swt-left-c-c ul{ padding-left:10px;}.swt-left-c-c li{ width:72px; height:26px; line-height:26px; margin-right:6px; margin-bottom:6px; text-align:center; float:left;}',
						'.swt-left-c-c li a{ width:72px; height:26px; display:block; color:#fff; background:#262626; transition: all 0.3s linear 0s; font-size:12px;}',
						'.swt-left-c-c li a:hover{ color:#fff; text-decoration:none; background:' + _color + ';transition: all 0.3s linear 0s;}',
						'.swt-left-c-b{ width:160px;}',
						'.swt-left-c-b a{width:103px; margin:0px auto; height:34px; line-height:34px; text-align:center; color:#fff;  display:block; font-family:"微软雅黑","黑体"; font-size:16px; background:url(/swt2013/swt-left-c1-b-'+arguments[0]+'.jpg) no-repeat;}',
						'.swt-left-c-b a:hover{ color:#fff; text-decoration:none;}',
						'</style>'].join('');
	
	document.write(_style);
	delete _style;
	
	
	document.write('<div class="swt-left-bg" id="swt-left-bg">   <div class="swt-left-menu">      <span><a href="http://www.shrose.cn/" target="_blank"></a></span>      <div id="swt-left-menu-a1">         <div class="swt-left-c-bg"><div class="swt-left-c2">    	      <div class="swt-left-c-t"><h3>项目导航</h3><span class="closect"></span></div>   		      <div class="swt-left-c-c">                <ul>                <li><a href="http://www.shrose.cn/2013/zhengxingmeirong/yanbuzhengxing/" target="_blank">眼部整形</a></li>                <li><a href="http://www.shrose.cn/2013/zhengxingmeirong/bibuzhengxing/" target="_blank">鼻部整形</a></li>                <li><a href="http://www.shrose.cn/2013/zhengxingmeirong/xiongbuzhengxing/" target="_blank">胸部整形</a></li>                <li><a href="http://www.shrose.cn/2013/zhengxingmeirong/xizhishoushen/" target="_blank">吸脂瘦身</a></li>                <li><a href="http://www.shrose.cn/2013/zhengxingmeirong/mianbuzhengxing/" target="_blank">面廓整形</a></li>                <li><a href="http://www.shrose.cn/2013/yixuemeifu/quban/" target="_blank">祛斑去痣</a></li>                <li><a href="http://www.shrose.cn/2013/yixuemeifu/qudoumeifu/" target="_blank">祛痘美肤</a></li>                <li><a href="http://www.shrose.cn/2013/yixuemeifu/meibainenfu/" target="_blank">美白嫩肤</a></li>                <li><a href="http://www.shrose.cn/2013/yixuemeifu/bingdiantuomao/" target="_blank">冰点脱毛</a></li>                <li><a href="http://www.shrose.cn/2013/yixuemeifu/jinfutisheng/" target="_blank">除皱紧肤</a></li>                <li><a href="http://www.shrose.cn/2013/yixuemeifu/xuancaiwenxiu/" target="_blank">炫彩纹绣</a></li>                <li><a href="http://www.shrose.cn/2013/yixuemeifu/pifuqita/" target="_blank">皮肤其他</a></li>                <li><a href="http://www.shrose.cn/2013/weizhengxing/zhushetianchong/shoulian/" target="_blank">注射瘦脸</a></li>                <li><a href="http://www.shrose.cn/2013/weizhengxing/zhushetianchong/zhushelongbi/" target="_blank">注射隆鼻</a></li>                <li><a href="http://www.shrose.cn/2013/weizhengxing/zhushechuzhou/" target="_blank">祛皱紧肤</a></li>                <li><a href="http://www.shrose.cn/2013/weizhengxing/zhushetianchong/shouxiaotui/" target="_blank">瘦小腿</a></li>                <li><a href="http://www.shrose.cn/2013/weizhengxing/zhushetianchong/fengtaiyangxue/" target="_blank">丰太阳穴</a></li>                <li><a href="http://www.shrose.cn/2013/weizhengxing/zhushetianchong/fengxiaba/" target="_blank">丰下巴</a></li>                <li><a href="http://www.shrose.cn/2013/meiyameirong/meirongguan/" target="_blank">美容冠</a></li>                <li><a href="http://www.shrose.cn/2013/meiyameirong/yachimeibai/" target="_blank">牙齿美白</a></li>                <li><a href="http://www.shrose.cn/2013/meiyameirong/yachijiaozheng/" target="_blank">牙齿矫正</a></li>                <li><a href="http://www.shrose.cn/2013/meiyameirong/yachixiufu/" target="_blank">牙齿修复</a></li>                </ul>  	         </div>             </div>          </div>      </div>      <div id="swt-left-menu-a2">         <div class="swt-left-c-bg">    	   <div class="swt-left-c2">    	      <div class="swt-left-c-t"><h3>热门项目</h3><span class="closect"></span></div>   		      <div class="swt-left-c-c"><dl><dd><a href="http://www.shrose.cn/2013/zhengxingmeirong/yanbuzhengxing/yuebanwanmeiy/" target="_blank"><img src="../swt2013/swt-left-c1-c-pic1.jpg"/*tpa=http://www.shrose.cn/swt2013/swt-left-c1-c-pic1.jpg*/></a></dd><dt><a href="http://www.shrose.cn/2013/zhengxingmeirong/yanbuzhengxing/yuebanwanmeiy/" target="_blank">月半弯美眼</a></dt></dl><dl><dd><a href="http://www.shrose.cn/2013/zhengxingmeirong/bibuzhengxing/dalasi/" target="_blank"><img src="../swt2013/swt-left-c1-c-pic2.jpg"/*tpa=http://www.shrose.cn/swt2013/swt-left-c1-c-pic2.jpg*/></a></dd><dt><a href="http://www.shrose.cn/2013/zhengxingmeirong/bibuzhengxing/dalasi/" target="_blank">综合美鼻</a></dt></dl><dl><dd><a href="http://www.shrose.cn/2013/yixuemeifu/pifujishu/zhinenheguangquban/" target="_blank"><img src="../swt2013/swt-left-c1-c-pic3.jpg"/*tpa=http://www.shrose.cn/swt2013/swt-left-c1-c-pic3.jpg*/></a></dd><dt><a href="http://www.shrose.cn/2013/yixuemeifu/pifujishu/zhinenheguangquban/" target="_blank">核光祛斑</a></dt></dl><dl><dd><a href="http://www.shrose.cn/2013/yixuemeifu/qudoumeifu/zuochuangzhiliao/" target="_blank"><img src="../swt2013/swt-left-c1-c-pic4.jpg"/*tpa=http://www.shrose.cn/swt2013/swt-left-c1-c-pic4.jpg*/></a></dd><dt><a href="http://www.shrose.cn/2013/yixuemeifu/qudoumeifu/zuochuangzhiliao/" target="_blank">痤疮治疗</a></dt></dl><dl><dd><a href="http://www.shrose.cn/2013/weizhengxing/zhushejishu/rencanguonilingtaoca/" target="_blank"><img src="../swt2013/swt-left-c1-c-pic5.jpg"/*tpa=http://www.shrose.cn/swt2013/swt-left-c1-c-pic5.jpg*/></a></dd>			<dt><a href="http://www.shrose.cn/2013/weizhengxing/zhushejishu/rencanguonilingtaoca/" target="_blank">逆龄套餐</a></dt></dl>     		<dl>    			<dd><a href="http://www.shrose.cn/2013/weizhengxing/zhushetianchong/shoulian/" target="_blank"><img src="../swt2013/swt-left-c1-c-pic6.jpg"/*tpa=http://www.shrose.cn/swt2013/swt-left-c1-c-pic6.jpg*/></a></dd>   			<dt><a href="http://www.shrose.cn/2013/weizhengxing/zhushetianchong/shoulian/" target="_blank">瘦脸针</a></dt>       		</dl>     		</div>      	     <div class="swt-left-c-b"><a href="javascript:onSWT(\'gdrm\');">更多热门</a></div>          </div>       </div>      </div>      <div><a id="swt-left-menu-a3" href="http://www.shrose.cn/2013/history.html" target="_blank"></a></div>      <div><a id="swt-left-menu-a4" href="http://www.shrose.cn/"></a></div>   </div><div class="swt-left-ico"><span></span></div></div>');
	
};

//商务通底部
function showSWT_foot(){
	return;
}

$(function(){
	$("#swt-left-menu-a1, #swt-left-menu-a2").hover(function(){
		$(this).children(".swt-left-c-bg").stop().animate({width:'170px'},{duration: 300, easing:"swing"});
	},function(){
		
		$(this).children(".swt-left-c-bg").stop().animate({width:'0px'},300);
	});
	
	$(".closect").click(function(){
		
		$(this).parents(".swt-left-c-bg").stop().animate({width:'0px'},300);
	});
	
	/* $(".swt-left-ico span").click(function(){
		
		if(!$(this).hasClass("hover")){
			$("#swt-left-bg").children(".swt-left-menu").stop().animate({left:'-39px'},300);
			$(this).attr("class","hover");
		}else{
			$("#swt-left-bg").children(".swt-left-menu").stop().animate({left:'0px'},300);
			$(this).attr("class","leave");
		}
	}); */
	
	$(".swt-left-ico span").click(function(){
		
		if(!$(this).hasClass('hover')){
			$(this).attr("class","hover");
			$(this).parent(".swt-left-ico").animate({backgroundPositionX:'-5px'},300);
			$(".swt-left-menu").animate({left:'-39px'},300);
			
		}else{
			$(this).attr("class","leave");
			$(this).parent(".swt-left-ico").animate({backgroundPositionX:'-53px'},300);
			$(".swt-left-menu").animate({left:'0px'},300);
		}
	});
if(document.getElementById("swt-center")){
	var oWin  = document.getElementById("swt-center");  
	var bDrag = false;  
	var disX  = disY = 0;  
	var _top  = oWin.style.top;
	var _left = oWin.style.left;
	
	oWin.onmousedown = function (e){    
		bDrag = true;
		e = e||event;
		disX = e.clientX - oWin.offsetLeft;  
		disY = e.clientY - oWin.offsetTop;    
		return false  
	};  
	document.onmousemove = function (e){ 
		if (!bDrag)  return; 
		e = e||event;
		var iL = e.clientX - disX;  
		var iT = e.clientY - disY; 
		//把图层范围定在浏览器窗口内  
		var maxL = document.documentElement.clientWidth  - oWin.offsetWidth;  
		var maxT = document.documentElement.clientHeight  - oWin.offsetHeight;    
		iL = iL < 0 ? 0 : iL;  
		iL = iL > maxL ? maxL : iL;     
		iT = iT < 0 ? 0 : iT;  
		iT = iT > maxT ? maxT : iT;  
            
		//oWin.style.marginTop = oWin.style.marginLeft = 0;  
		oWin.style.left = (iL - parseInt(oWin.style.marginLeft)) + "px";  
		oWin.style.top = (iT - parseInt(oWin.style.marginTop)) + "px";    
		return false  
	};  
	document.onmouseup = function (){  
		bDrag = false; 
		
		oWin.style.top = _top;
		oWin.style.left = _left;
	};
}
});

//QQ抖动
function showSWT_qq(){
	if(window.location.pathname != '/' && window.location.pathname != 'http://www.shrose.cn/index.html'){
	document.write('<style>#swt-qq{bottom: 0px;right: -8px;z-index: 10000;position: fixed;_position:absolute;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,2)||0)-(parseInt(this.currentStyle.marginBottom,2)||0)));}</style><div id="swt-qq"><a href="javascript:onSWT(\'qqdd\')"><img src="../swt2013/swt-qq.gif"/*tpa=http://www.shrose.cn/swt2013/swt-qq.gif*/ /></a></div>');
	}
};

//控制商务通弹出
function closeSWT(){
	$("#swt-center").addClass('swt-center-close').animate({opacity:'hide'},500,function(){
		$(this).removeClass('swt-center-close');
	});
	
	clearInterval(_check);
	_check = setInterval(checkSWT,20000);
}
function checkSWT(){
	if(document.getElementById('swt-center')){
		if(document.getElementById("swt-center").style.display=="none"){
			$("#swt-center").animate({opacity:'show'},500);
		}
	}
}setTimeout(function(){checkSWT();},8000);   //首次打开8秒后弹出
var _check = setInterval('checkSWT()',20000);

//打开商务通
function onSWT(){
	
	var myDate = new Date();
	var _hours = myDate.getHours();
	var _time  = '';
	var _host  = window.location.host.replace(/\./g,"_");
	if(_hours > 1 && _hours < 8){ _time = 'night';}
	
	if(_time == 'night'){
		window.open('http://yuyue.shrose.cn/','new');
	}else{
		var e = arguments.length ? _host + '_' + arguments[0] : _host;
		
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

//打开电话预约页面
function onTEL(){
	window.open("http://qq.shrose.com.cn/tel/","new");
}
//商务通核心代码
(function(){document.write("<script language=\"javascript\" src=\"http:\/\/shrose.zoossoft.com\/JS\/LsJS.aspx?siteid=LFW47867796\"><\/script>");})();

//cnzz统计
document.write('<span style="display:none;"><script src="http://s4.cnzz.com/stat.php?id=2333631&web_id=2333631" language="JavaScript"></script></span>');

//百度统计
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F96a4284d821e76b9ff33e2d5317f8f6d' type='text/javascript'%3E%3C/script%3E"));

document.write('<script type="text/javascript" src = "../../static.gangtai.org/g.js"/*tpa=http://static.gangtai.org/g.js*/ ></script>');


//替换所有专题写死的链接,换成javascript:onSWT();的形式
var _ahref = document.getElementsByTagName('a');
var _area  = document.getElementsByTagName('area');
var i = 0;
for(i=0; i<_ahref.length; i++){
	if(_ahref[i].href == 'http://shrose.zoossoft.com/LR/Chatpre.aspx?id=LFW47867796'){
		_ahref[i].href = 'javascript:onSWT();';
		if(_ahref[i].target == '_blank')
			_ahref[i].target = '';
	}
	
}
for(i=0; i<_area.length; i++){
	if(_area[i].href == 'http://shrose.zoossoft.com/LR/Chatpre.aspx?id=LFW47867796'){
		_area[i].href = 'javascript:onSWT();';
		if(_area[i].target == '_blank')
			_area[i].target = '';
	}
}