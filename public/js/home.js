// 下拉列表
$('.main-right .my').mouseenter(function() {
	$(this)
		.find('.xiantaotop')
		.css({ background: '#fff' })
	$(this).find('.mydropdown').show()
})
$('.main-right .my').mouseleave(function() {
	$(this)
		.find('.xiantaotop')
		.css({ background: '#f2f2f2' })
	$(this)
		.find('.mydropdown')
		.hide()
});
//左侧导航弹出
$('.div3 li').mouseenter(function(){
	$(this).css({'background':'#eee'});
	$(this).find('span').css({'color':'#b61d1d'});
	$(this).find('.categoryCon a').css({'color':'#000'});
	$(this).find('.categoryCon a.on').css({'color':'#fff'});
	$('.div3 li').not($(this)).css({'background':'#b61d1d'});
	$(this).find('.right').show();
	$('.right').not($(this).find('.right')).hide();
});

$('.div3 li').mouseleave(function(){
	$(this).find('.right').hide();		
	$(this).find('span').css({'color':'#fff'});
	$(this).find('.categoryCon a.on').css({'color':'#fff'});
	$(this).css({'background':'#b61d1d'});
});

//banner轮播图
var count = 0 ; //定义全局变量count来表示当前图片
function run(){
	count++;
	count = count ==5?0:count;
$('#flash img').eq(count).fadeIn(1500).siblings('img').fadeOut(100); //利用eq来遍历img，并将count位图片显示，其他兄弟元素隐藏，fadeIN位淡入显示，fadeOut为淡出
$('#flash ul li').eq(count).css('background','#f40').siblings('li').css('background','#000'); 
}
function reverserun(){
	count--;
	count = count == -1?4:count;
	$('#flash img').eq(count).fadeIn(1500).siblings('img').fadeOut(100);
	$('#flash ul li').eq(count).css('background','#f40').siblings('li').css('background','#000');
}
var timer = setInterval(run,5000); //设置定时器
$('#flash').hover(function(){ //设置鼠标移入移出事件
	clearInterval(timer);
},function(){
	timer = setInterval(run,5000);
})
$('#flash ul li').mouseenter(function(){ //设置移入圆点事件
count = $(this).index();
count = count ==5?0:count;
$('#flash img').eq(count).fadeIn(1500).siblings('img').fadeOut(100);
$('#flash ul li').eq(count).css('background','#f40').siblings('li').css('background','#000');
})