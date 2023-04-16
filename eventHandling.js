const EventEmitter = require ("events");

const myCustomeEvent = new EventEmitter();

const eventName = "fileRead"
function subscribeEvent(callback)
{
    //myCustomeEvent.on(eventName, callback)
    myCustomeEvent.once(eventName, callback);
}
function eventEmit(fileName, content){
    myCustomeEvent.emit(eventName, fileName, content);
}

module.exports={subscribeEvent,eventEmit}