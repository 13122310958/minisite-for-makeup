//关闭弹出窗口
var jq = jQuery.noConflict();
jq(function(){setTimeout("InviteBox()", 3000);})
jq.cookie('online_state', '1');
function Close_fast()
{	
	jq("#online_main").fadeOut("fast");
	jq("#online").fadeIn("slow");
}
/*主窗口*/
function Close_online_main()
{	
	jq.cookie('online_state', '2', { expires: 1});
	jq("#online_main").fadeOut("slow");
	setTimeout("jq('#online_main').fadeIn('slow');", 30000);
}

/*副窗口*/
function Close_online()
{
	jq.cookie('online_state', '3', { expires: 1});
	jq("#online").fadeOut("slow");
	jq("#online_mini").fadeIn("slow");
}
/*迷你窗口*/
function Close_online_mini()
{
	jq.cookie('online_state', '2', { expires: 1});
	jq("#online_mini").fadeOut("slow");
	jq("#online").fadeIn("slow");
}
function InviteBox()
{
	$current_state = jq.cookie('online_state');
	if($current_state == 2)
	{
		jq("#online_main").css('display', 'none');		
		return;
	}
	else if($current_state == 3)
	{
		jq("#online").css('display', 'none');
		jq("#online_mini").fadeIn("slow");
		return;
	}
	jq("#online_main").fadeIn("slow");
//var string;
//var URLstring;
//URLstring=document.URL;
//string=URLstring.split("/");
//var dizhi=string[4];
//	if(dizhi=="ceremony3"){
//    jq("#online").css("display","none");
//     }
//	else{
	jq("#online").css('display', 'block');
//	}
	if(jq("#LRdiv1").css("display")=="block"){$("#fdc2").hide();
		jq("#fdc").fadeIn("slow");}setTimeout("InviteBox()", 500);
}
jq(function(){
	jq("#zuoguanbi").click(function(){
		jq("#zuofudong").fadeOut("slow");
		jq("#zuoguanbi").fadeOut("slow");
		});
	});

jq(function(){
	jq("#youguanbi").click(function(){
		jq("#youfudong").fadeOut("slow");
		jq("#youguanbi").fadeOut("slow");
		});
	});

jq(function(){
var brc_tp=jq("#top_btn");
var btn=jq("#brc").find(".onli");
btn.find(".btn").css({"opacity":".6"});
btn.find(".QR_btn").css({"opacity":"1"}).next(".bx").addClass("show");

jq(window).scroll(function(){
var scrolltop=jq(this).scrollTop();
if(scrolltop>=200){ jq("#brc").fadeIn("slow");}
else{jq("#brc").fadeOut("slow");}
})

brc_tp.click(function(){if(scroll=="off") return;jq("html,body").animate({scrollTop: 0}, 1000);});
btn.hover(function(){jq(this).find(".wb_btn").css({"opacity":"1"}).next(".bx").addClass("show");btn.find(".QR_btn").css({"opacity":".6"}).next(".bx").removeClass("show");jq(this).find(".QR_btn").css({"opacity":"1"}).next(".bx").addClass("show");jq(this).find(".top_btn").css({"opacity":"1"})},function(){jq(this).find(".btn").css({"opacity":".6"}).next(".bx").removeClass("show");btn.find(".QR_btn").css({"opacity":"1"}).next(".bx").addClass("show");})
})

jq(function(){
	var _wrap=jq('#ys ul');//定义滚动区域
	var _interval=5000;//定义滚动间隙时间
	var _moving;//需要清除的动画
	_wrap.hover(function(){
		clearInterval(_moving);//当鼠标在滚动区域中时,停止滚动
	},function(){
		_moving=setInterval(function(){
			var _field=_wrap.find('li:first');//此变量不可放置于函数起始处,li:first取值是变化的
			var _h=_field.height();//取得每次滚动高度(多行滚动情况下,此变量不可置于开始处,否则会有间隔时长延时)
			_field.animate({marginTop:-_h+'px'},600,function(){//通过取负margin值,隐藏第一行
				_field.css('marginTop',0).appendTo(_wrap);//隐藏后,将该行的margin值置零,并插入到最后,实现无缝滚动
			})
		},_interval)//滚动间隔时间取决于_interval
	}).trigger('mouseleave');//函数载入时,模拟执行mouseleave,即自动滚动
});