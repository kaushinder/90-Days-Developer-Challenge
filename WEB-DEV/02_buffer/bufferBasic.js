const { Buffer }  = require("node:buffer");

// const buf = Buffer.alloc(4);
// console.log(buf);
// console.log(buf[0]);

// const buf = Buffer.from("Hello Kaushinder");
// console.log(buf);
// console.log(buf.toString());


// const buf2 = Buffer.allocUnsafe(110);
// console.log(buf2);
// console.log(buf2[4]);

// const buf = Buffer.alloc(18);
// buf.write("Hello Kaushinder");
// console.log(buf);
// console.log(buf.toString());


// const buf = Buffer.from("Chai Aur Code");
// console.log(buf);
// console.log(buf.toString());
// console.log(buf.toString("utf-8", 0, 4));


// const buf = Buffer.from("Chai");
// console.log(buf);
// buf[0] = 0x4A;
// console.log(buf);
// console.log(buf.toString());
// const buf2 = Buffer.from("chai");
// console.log(buf2);


const buf1 = Buffer.from("Chai Aur");
const buf2 = Buffer.from(" Code");
const merged = Buffer.concat([buf1, buf2]);
console.log(merged);
console.log(merged.toString());
console.log(merged.length);