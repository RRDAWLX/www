'use strict';

var promise = new Promise(function (resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function () {
  console.log('Resolved.');
});

console.log('Hi!');

var fn = function fn() {
  var a = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
  var b = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

  console.log(a, b);
};