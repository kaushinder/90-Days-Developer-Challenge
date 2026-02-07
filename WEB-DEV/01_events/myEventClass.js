const EventEmitter = require("node:events");

class Chat extends EventEmitter {
    sendMessage(msg) {
        console.log(`Message sent: ${msg}`);
        this.emit("messageRecieved", msg);
    }
}

const chat = new Chat();

chat.on("messageRecieved", (msg) => {
    console.log(`New Message: ${msg}`);
})

//  trigger the event
chat.sendMessage("Hello Kaushinder");