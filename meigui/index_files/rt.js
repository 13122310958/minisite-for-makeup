(function(){var a=function(i){var e=new Image();var l="mini_tangram_log_"+Math.floor(Math.random()*2147483648).toString(36);window[l]=e;e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=null;window[l]=null;e=null};e.src=i};var c=(new Date()).getTime();var m="";var n="";var k="";try{top.location.toString();n=encodeURIComponent(top.location.href);var h=top.document.referrer||"";if(h.indexOf("cpro.baidu.com/cpro/ui/uijs.php")>-1){m=h.match(/word=(.*?)&/g)[0];m=m.substring(5,m.length-1)}else{m=encodeURIComponent(h)}k=h}catch(j){n=encodeURIComponent(location.href);m=encodeURIComponent(document.referrer);k=document.referrer}if(k!=""){k=encodeURIComponent(k.match(/^(\w*:\/\/)?(\w*\.)?(\w*\.\w*(\.\w*)?)/)[3])}if(typeof bd_cpro_rtid=="object"){var b=[];for(var g=0,f=bd_cpro_rtid.length;g<f;g++){b.push(bd_cpro_rtid[g].id)}bd_cpro_rtid=b.join(",")}var d=("https:"==document.location.protocol?"https://":"http://")+"eclick.baidu.com/rt.jpg?t=script&rtid="+bd_cpro_rtid+"&stamp="+c+"&refer="+m+"&word="+n+"&origin="+k;if(!window.bd_orpc_rtidIssend){a(d);window.bd_orpc_rtidIssend=true}})();