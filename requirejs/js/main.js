requirejs.config({
	baseUrl: 'js'
});

/*require(['jquery', 'object', 'cFunction'], function($, obj, func){
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
});*/

requirejs(['JSON'], function (json) {

	console.log('Number');
	var number = json.stringify(8);
	console.log('stringify:', typeof number, number);
	console.log(JSON.parse(number));
	console.log(number === JSON.stringify(8));
	console.log('-----------------------');

	console.log('Boolean');
	var boolean = json.stringify(true);
	console.log('stringify:', typeof boolean, boolean);
	console.log(JSON.parse(boolean));
	console.log(boolean === JSON.stringify(true));
	console.log('-----------------------');

	console.log('Null');
	var _null = json.stringify(null);
	console.log('stringify:', typeof _null, _null);
	console.log(JSON.parse(_null));
	console.log(_null === JSON.stringify(null));
	console.log('-----------------------');

	console.log('Undefined');
	var _undefined = json.stringify(undefined);
	console.log('stringify:', typeof _undefined, _undefined);
	//console.log(JSON.parse(_undefined));
	console.log(_undefined === JSON.stringify(undefined));
	console.log('-----------------------');

	console.log('String');
	var string = json.stringify('abc123');
	console.log('stringify:', typeof string, string);
	console.log(JSON.parse(string));
	console.log(string === JSON.stringify('abc123'));
	console.log('-----------------------');

	console.log('Array');
	var theArray = [1, undefined, function () {}, 'a'];
	var array = json.stringify(theArray);
	console.log('stringify:', typeof array, array);
	console.log(JSON.parse(array));
	console.log(array === JSON.stringify(theArray));
	console.log('-----------------------');

	console.log('Function');
	function fnTest() {
		console.log('function stringify');
	}
	var func = json.stringify(fnTest);
	console.log('stringify:', typeof func, func);
	//  console.log(JSON.parse(func));
	console.log(func === JSON.stringify(fnTest));
	console.log('-----------------------');

	console.log('Object');
	var objTest = json.stringify({
		a: 1
	});
	console.log('stringify', typeof objTest, objTest);
	console.log(objTest === JSON.stringify({
		a: 1
	}));
	console.log('-----------------------');

	console.log('RegExp');
	var RegExp = json.stringify(/^a$/g);
	console.log('stringify', typeof RegExp, RegExp);
	console.log(RegExp === JSON.stringify(/^a$/g));
	console.log('-----------------------');

	console.log('Date');
	var theDate = new Date();
	var date = json.stringify(theDate);
	console.log('stringify', typeof date, date);
	console.log(date === JSON.stringify(theDate));
	console.log('-----------------------');


});