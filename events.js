const { EventEmitter } = require("events");

const eventEmitter = new EventEmitter();

// Listen to the event, Listner should be use before then emit other wise it will not call
eventEmitter.on('customEvent',(...eventParameter)=>{
    console.log(eventParameter)
})
eventEmitter.emit('customEvent','this is custom data','first data','second data');
