// JavaScript Document
function count() {
	         //x上限，y下限
			 jq("#ys #zxzx").empty();
			 jq("#ys #mang").empty();
			 jq("#ys #xian").empty();
	        var x1 = 230;
	        var y1 = 180;
            var d1 = 25;
		    var d2 = 20;  

			var jqdate = new Date();
	        var jqhour = jqdate.getHours();
	       
	        if(jqhour >=8 && jqhour < 12)
	        {
	        	x1 = 50;
	        	y1 = 20;
			}
	        else if(jqhour >=12 && jqhour < 18)
	        {	
	        	x1 = 60;
	        	y1 = 30;
			}
	        else if(jqhour >= 18 && jqhour < 23)
	        {
	        	x1 = 80;
	        	y1 = 50;
			}else
	        {	
	        	x1 =0;
	        	y1 = 0;	
			}
	       
	        
			 var rand1 = parseInt(Math.random() * (x1 - y1 + 1) + y1);
			 var rand2 = parseInt(Math.random() * (d1 - d2 + 1) + d2);
			 var rand3 = 25 -rand2;
			 jq("#ys #zxzx").append(rand1);
			 jq("#ys #mang").append(rand2);
			 jq("#ys #xian").append(rand3);
	      }
setTimeout("count()",0);
setInterval("count()", 10000);
		  
