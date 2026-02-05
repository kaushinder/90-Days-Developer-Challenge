const fs = require('node:fs'); // Built in Module 

const content = fs.readFileSync('notes.txt', 'utf-8');
// console.log(content);

// fs.writeFileSync('copy.txt', 'hey My name is kaushinder', 'utf-8');
// fs.writeFileSync('copy.txt', content, 'utf-8');
// fs.appendFileSync('copy.txt', '\nhey', 'utf-8');



// fs.mkdirSync('games/xyz/a');

// fs.rmdirSync('games/xyz');

fs.unlinkSync('copy.txt');