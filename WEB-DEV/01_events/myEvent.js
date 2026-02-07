const EventEmitter = require("node:events");

const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (username) => {
  console.log(`Hello ${username}, Welcome to events in node.js`);
});
eventEmitter.on("greet", (username) => {
  console.log(`Hey ${username}, Welcome to  node.js`);
});

eventEmitter.once("pushnotify", () => {
  console.log("This event will be run only once");
});


// Emit the event
eventEmitter.emit("greet", "kaushinder");
// eventEmitter.emit("greet", "chai");
// eventEmitter.emit("pushnotify");
// eventEmitter.emit("pushnotify");
// eventEmitter.emit("greet", "xyz");
// eventEmitter.emit("pushnotify");


// const myListener = () => console.log("I am a test listener");
// eventEmitter.on("test", myListener);
// eventEmitter.emit("test");
// eventEmitter.emit("test");
// eventEmitter.removeListener("test", myListener);
// eventEmitter.emit("test");

// console.log(eventEmitter.listeners("test"));


// console.log(eventEmitter.listeners("greet"));