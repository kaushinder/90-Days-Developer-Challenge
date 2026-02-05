const fs = require("node:fs");

// Task : Read the contents of notes.txt and print it to the console

console.log("start of script\n");

// Sync => Blocking Operations
// const content = fs.readFileSync("notes.txt", "utf-8");

// console.log("Contents: \n\n", content);


// Async => Non-Blocking Operations
fs.readFile('notes.txt', 'utf-8', function(error, data) {
    if(error) console.log(error);
    else console.log("Contents: \n\n", data);
});


console.log("\nend of script");
