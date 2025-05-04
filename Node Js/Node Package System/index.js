const logEvents = require('./LogEvents');

const EventEmitter = require('events');
class MyEmitterClass extends EventEmitter {}
const myEmitter = new MyEmitterClass();

// Listener for 'log' event
myEmitter.on('log', (msg) => {
    logEvents(msg);
});

// Emit the 'log' event with a message
myEmitter.emit('log', 'Server started.');
