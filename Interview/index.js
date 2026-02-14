// Execution Context(Memory and Code Execution) - Using Function Invokation
// var n = 2;
// function square(num) {
//     var ans = num * num;
//     return ans;
// }
// var square2 = square(n);
// var square4 = square(4);
// console.log(square2);
// console.log(square4);

// Hoisting
// getName();
// getName2();
// console.log(x);
// console.log(getName);
// console.log(getName2);

// var x = 7;

// function getName(){
//     console.log("Namaste Js");
// }

// var getName2 = () => {
//     console.log("Namaste Js");
// }

// getName();
// getName2();
// console.log(x);
// console.log(getName);
// console.log(getName2);

// functions work - Call Stack(Global Execution Context)

// var x = 1;
// a();
// b();
// console.log(x);
// function a(){
//     var x = 10;
//     console.log(x);
// }
// function b(){
//     var x = 100;
//     console.log(x);
// }

// Window and This Keyword

// window(global object)
// this(global object)

// this === window; (true)
// console.log(this === window);

// var a = 10;
// function b() {
//   var x = 10;
//   console.log(this.x);
//   console.log(window.x);
// }
// console.log(window.a);
// console.log(a);
// console.log(this.a);
// b();

// Undefined vs Not defined

// console.log(a);
// var a;
// var a = 7;
// console.log(a);
// a = 10;
// console.log(x);
// if(a === undefined){
//     console.log("a is undefined");
// }else{
//     console.log("a is defined");
// }

// var a;
// console.log(a);
// a=10;
// console.log(a);
// a = "Hello World";
// console.log(a);

// Scope Chain (Scope & Lexical environment)
// Global {
//     outer {
//         inner
//     }
// }

// function a(){
//     var b=10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// a();
// var b=10;
// console.log(b);

// let, var & const  (Temporal Dead Zone)

// console.log(a);  (gives error, let can not be accessed before initialization and cannot be redeclared and cannot be used by window and this and cannot use the same name in same scope)
// console.log(b);
// console.log(x);
// let a = 10;
// var b = 100;  (can be accessed before initialization in global object and can be redeclared and used by window and this and can use the same name in same scope)
// console.log(a);

// let a;
// const b = 100;
// a=10;
// console.log(a);
// console.log(b);

// Block Scope & Shaddowing

// {
// compound statements
//     var a = 10;
//     console.log(a);
// }
// if(true){
//     var a = 10;
//     console.log(a);
// }

// var a = 100; //(shaddowing)
// console.log(a);
// let b = 100;
// const c = 200;
// {
//     var a = 10; // global scope
//     let b = 20; // block scope
//     const c = 30; // block scope
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// const c = 100;
// function x(){
//     var a = 30;
//     let b = 40;
//     const c = 50;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// console.log(window.c);
// window.c = 200;
// }
// x();
// console.log(a);
// console.log(b);
// console.log(c);

// Closuers

// function x(){
//     var a=7;
//     return function y(){
//         console.log(a);
//     }
//     // y();
//     // return y;
// }
// var z = x();
// console.log(z);
// z();

// function z(){
//     var b= 900;
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();

// setTimeout & closure question

// function x(){
//      var i = 1;
//     for(var i=1; i<=5; i++){
//         setTimeout(function(){
//         console.log(i);
//     }, i * 1000);
//     }
//     console.log("Js");
// }
// x();

// function x(){
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//         console.log(i);
//     }, i * 1000);
//     }
//     console.log("Js");
// }
// x();

// function x(){
//     for(var i=1; i<=5; i++){
//         function close(a){
//             setTimeout(function(){
//                 console.log(a);
//             }, a * 1000);
//         }
//         close(i);
//     }
//     console.log("Js");
// }
// x();

// Interview Questions
// closure & its advantages , disadvantages

// function outest() {
//   var c = 20;
//   function outer(b) {
//     // var a = 10;
//     function inner() {
//       console.log(a, b, c);
//     }
//     // var a = 10;
//     let a = 10;
//     return inner;
//   }
//   return outer;
// }
// // let a = 100;
// // outer()();
// var close = outest()("hello world");
// close();

// function counter() {
//   var count = 0;
//   return function incrementCounter() {
//     count++;
//     console.log(count);
//   }
// }
// var counter1 = counter();
// counter1();
// counter1();

// var counter2 = counter();
// counter2();
// counter2();

// forming closure using counter by constructor
// function Counter(){
//     var count = 0;
//     this.incrementCounter = function(){
//         count++;
//         console.log(count);
//     }
//     this.decrementCounter = function(){
//         count--;
//         console.log(count);
//     }
// }
// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.decrementCounter();

// Garbage Collection
// function a(){
//     var x = 0, z= 10;
//     return function b(){
//         console.log(x);
//     }
// }
// // a();
// var y = a();
// y();


// function statement aka function declaration
// a();
// function a(){
//     console.log("a is called");
// }
// a();

// function expression
// b();
// var b = function(){
//     console.log("b is called");
// }
// b();

// anonymous function
// function (){

// }

// Named function expression
// var b = function a(){
//     console.log("b is called");
// }
// b();

// Difference btw Parameters & Arguments
// function x(param1, param2, param3){
//     console.log(param1, param2, param3);
// }
// x(arg1, arg2, arg3);
// x(1, 2, 3);

// First Class Function(ability to use like values) & first class citizen
// var b = function(param1){
//     return function xyz(){

//     }
// }
// console.log(b());

// Arrow Function
// var a = () => {
//     console.log("a is called");
// }
// a();


// callback function

// setTimeout(function() {
//     console.log("timer");
// }, 3000);
// function x(y){
//     console.log("x is called");
//     y();
// }
// x(function y(){
//     console.log("y is called");
// })

// let count = 0;
// document.getElementById("clickMe").addEventListener("click", function xyz(){
//     console.log("button clicked", ++count);
// })

// function  attachEventListener(){
//     let count = 0;
// document.getElementById("clickMe").addEventListener("click", function xyz(){
//     console.log("button clicked", ++count);
// })
// }
// attachEventListener();

