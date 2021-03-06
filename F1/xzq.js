$(function(){
  $(".img li").eq(0).show(); //打开页面显示第一张图片
  $(".num li").eq(0).addClass("color"); //为数字标签添加一个color类
	 
  /*手动通过数字标签选择图片*/
  $(".num li").mouseover(function(){
    var index=$(this).index();
    currentIndex = index;
    $(".img li").eq(index).stop().slideDown(1000).siblings().stop().slideUp(1000);
    $(this).addClass("color").siblings().removeClass("color");  //所有数字标签都添加color类
  })
		
  /*自动播放图片*/
  var currentIndex = 0; //从第一张图片开始播放
  var t = setInterval(moveRight,3000); //设置定时器，以每三秒切换的速度变化
  var sum = $(".img li").size(); //调用size()函数获得图片的总数
  function moveRight(){
    currentIndex++; //向右切换，图片标号+1
	if(currentIndex == sum){
      currentIndex = 0;
    } //当图片切换后已经是最后一张，则向右直接跳到第一张图片
    $(".num li").eq(currentIndex).addClass("color").siblings().removeClass("color");
    $(".img li").eq(currentIndex).slideDown(1000).siblings().slideUp(1000);
  } //自动播放顺序是从左到右
		   
  $(".pic").hover(function(){
	clearInterval(t);	//调用hover函数，当鼠标悬停在图片上时，清除定时器
	},function(){
	  t=setInterval(moveRight,3000);  //鼠标移开时定时器继续生效
  })
				
	  /*点击箭头切换图片*/
  function moveLeft(){
	currentIndex--; //向左切换，图片标号-1
    if(currentIndex == -1){
      currentIndex = sum-1;
	} //当图片本是第一张，则向左直接跳到最后一张
    $(".num li").eq(currentIndex).addClass("color").siblings().removeClass("color");
    $(".img li").eq(currentIndex).slideDown(1000).siblings().slideUp(1000);		 
  }
	$(".pic .L").click(function(){moveLeft();})
	$(".pic .R").click(function(){moveRight();}) //鼠标点击左右箭头调用moveL或moveR函数
})