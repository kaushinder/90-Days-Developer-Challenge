const ChatRoom = require("./chatRoom.js");

const chat = new ChatRoom();

chat.on("join", (user) => console.log(`${user} has joined the chat room`));
chat.on("leave", (user) => console.log(`${user} left the chat room`));
chat.on("message", (user, message) => console.log(`${user}: ${message}`));

// Simulating the chat
chat.join("Kaushinder");
chat.join("xyz");

chat.sendMessage("Kaushinder", "Hello to everyone");
chat.sendMessage("xyz", "Hello to everyone");

chat.leave("Kaushinder");
chat.sendMessage("kaushinder", "This message wont be send");
chat.leave("xyz");