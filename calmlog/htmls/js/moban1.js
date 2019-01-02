//第一步获取html
var aa = function fun(){
	console.log(111)
var my_content_str = $("#my_content").html();
//第二部：生成编译模板
var compiled = _.template(my_content_str);
//第三部：用ajax获取数据
$.ajax({
	url: 'http://cache.video.iqiyi.com/jp/avlist/202861101/1/?callback=?',
	type: 'GET',
	dataType: 'JSONP',
//	jsonpCallback: 'fun', //传回来的方法
	success:function(data) {
		// console.log(data)
		var dateObject=typeof data == "object" ? data : eval("(" + date + ")")
		_.each(dateObject.data.vlist, function(dictionary) {
			var str = compiled(dictionary);
//			console.log(str)
			var dom = $(str);
			dom.appendTo(".cl-artical-content")
		})
	}
});

}