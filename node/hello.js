/*exports.world = function () {
	console.log('hello world');
}*/

/*function Hello () {
	var name;
	this.setName = function (thyName) {
		name = thyName;
	};
	this.sayHello = function () {
		console.log("hello " + name);
	}
}

module.exports = Hello;*/

module.exports = {
	name: 'wlx',
	sayHello: function () {
		console.log('Hello ' + this.name);
	}
}