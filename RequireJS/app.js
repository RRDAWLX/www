requirejs.config({
	baseUrl: 'RequireJS/lib',
	paths: {
		app: '../app'
	}
});

requirejs(['app/shirt'], function(shirt){
	console.log(shirt);
});
