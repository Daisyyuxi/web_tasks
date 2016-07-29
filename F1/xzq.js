$(function(){
	    		var size = $(".img li").size(); 
                size = 5; //得到图片的总个数为5
	    		
	    		/*自动播放图片*/
	    		var i = 0;  //初始i=0，从第一张图片开始播放
	    		var t = setInterval(move,3000);  //设置定时器，每三秒切换一张图片
				
				/*手动控制*/
	    		$(".img li").eq(0).show();	//显示第一张图片
	    		$(".num li").eq(0).addClass("active");	//第一张图片底部相对应的数字列表添加active类
	    		$(".num li").mouseover(function(){
	    			$(this).addClass("active").siblings().removeClass("active");  //只要鼠标覆盖数字就添加一个active类
	    			var index=$(this).index();  //定义底部数字索引值
	    			i=index;  //图片
	    			$(".img li").eq(index).stop().slideDown(1000).siblings().stop().slideUp(1000);	//鼠标覆盖数字标签便停止自动播放，选中当前图片
					                                                                                //（以上一张图片滑出，下一张图片滑入的形式）
	    		})
				
	    		//向左切换函数
	    		function moveL(){
	    			i--;
	    			if(i == -1){
	    				i = size-1;  //如果当前是第一张图片再按左箭头则直接跳转到最后一张图
	    			}
	    			$(".num li").eq(i).addClass("active").siblings().removeClass("active");  //对应数字标签的背景变换颜色
					$(".img li").eq(i).slideDown(1000).siblings().slideUp(1000);  //对应图片切换
	    		}
				
	    		//向右切换函数
	    		function move(){
	    			i++;
	    			if(i == size){
	    				i = 0;  //如果当前是最后一张图片再按右箭头则直接跳转到第一张图
	    			}
	    			$(".num li").eq(i).addClass("active").siblings().removeClass("active");  //对应数字标签的背景变换颜色
					$(".img li").eq(i).slideDown(1000).siblings().slideUp(1000);  //对应图片切换
	    		}
	    		
	    		$(".out .left").click(function(){
	    			moveL();	//点击左箭头调用向左切换函数
	    		})
	    		
	    		$(".out .right").click(function(){
	    			move();    //点击右箭头调用向右切换函数
	    		})
	   
	    		$(".out").hover(function(){
	    			clearInterval(t);	//鼠标放在轮播区域上时，暂时清除定时器
	    		},function(){
	    			t=setInterval(move,3000);  //鼠标移开时定时器继续生效
	    		})
	    	})