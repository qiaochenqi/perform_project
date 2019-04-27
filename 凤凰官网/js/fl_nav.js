 $(".nav_list_s").mouseenter(function(){
$(this).addClass("nav_list_s01").siblings().removeClass("nav_list_s01");
$(".nav_detailBox").show();
$(".nav_detailBox").children(".nav_detail").eq($(this).index()).show().siblings().hide();
})
$(".nav_detailBox").mouseleave(function(){
$(this).find(".nav_list_s").removeClass("nav_list_s01");
$(".nav_detailBox").stop().hide();
})