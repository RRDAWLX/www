var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('ye', function () {
    console.log('ye what?');
});

setTimeout(function () {
    event.emit('ye');
}, 1000);