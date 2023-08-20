const EventEmitter = require('events');

const event = new EventEmitter();

event.on("sayMyName",()=>{
    console.log("Event Emmited"); // Always define event becore emmitting it
});

event.emit("sayMyName");