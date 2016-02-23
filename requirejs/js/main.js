requirejs.config({
	baseUrl: 'js'
});

require(['jquery', 'object', 'cFunction'], function($, obj, func){
	console.log($('*').length);
	console.log(obj);
	func();
	
	$.ajax({
		url: 'http://apis.baidu.com/apistore/weatherservice/citylist',
		type: 'get',
		data: {cityname: '上海'},
		dataType: 'json',
		success: function(res){
			console.log(res);
		},
		error: function(x,s,e){
			console.log(x,s,e);
		}
	});
});
