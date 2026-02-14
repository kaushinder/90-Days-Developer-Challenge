// Array

// let marks1 = 10;
// let marks2 = 20;
// let marks3 = 30;
// let marks4 = 40;
// let marks5 = 50;

// let marks = [10, 20, 30, 40, 50];

// console.log(marks);
// console.log(marks.length);

// arrays are mutable(can be changed)

// let arr = [100, 30, "Hello", true, 'e'];
// console.log(arr);
// console.log(arr[1]);

// console.log(typeof arr);

// change values
// arr[1] = 90;
// console.log(arr);

// push : insert at end
// let arr = [100, 30, "Hello", true, 'e'];
// arr.push(90);
// arr.push("strike");
// console.log(arr);

// Pop : delete from end
// let arr = [100, 30, "Hello", true, 'e'];
// arr.pop();
// arr.pop();
// console.log(arr);

// Unshift : Add at start
// let arr = [100, 30, "Hello", true, 'e'];
// arr.unshift(10);
// console.log(arr);

// shift : delete from start
// let arr = [100, 30, "Hello", true, 'e'];
// arr.shift(10);
// console.log(arr);

// let arr = [10, 20, 50, 90, 11];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for(let num of arr){
//     console.log(num);
// }

// let arr = [10, 20, 50, 90, 11];
// let arr2 = arr; // arr(object) copy by reference

// arr2.push(30);
// console.log(arr);
// console.log(arr2);

// Object:Non-primitive-copy by reference
// primitive: copy by value

// const arr = [10, 20, 50, 90, 11];
// arr[2]= 30;

// console.log(arr);


// let arr = [10, 20, 50, 90, 11];

// slice (copy original array)
// const arr2 = arr.slice(1, 3); 
// console.log(arr2);
// console.log(arr);

// splice (change original array)
// const arr3 = arr.splice(1, 3);
// console.log(arr3);
// console.log(arr);
// console.log(arr.splice(1, 3, "ksr", 200, 300));
// console.log(arr);


// Spread operator

// let arr = [10, 20, 50, 90, 11];
// const arr2 = ["Ksr", true, 300];
// const arr3 = [90, 4, false];

// const arr4 = [...arr, ...arr2, ...arr3];
// console.log(arr4);


// push - change original array
// arr.push(arr2);

// concat - retrun a new array
// const arr4 = arr.concat(arr2);
// const arr5 = arr.concat(arr2, arr3);
// console.log(arr5);


// const names = ["Ksr", "Mohan", "Rohan", "Rahul", "Ramesh","Mohan"];

// console.log(names.toString());
// console.log(typeof names.toString());

// console.log(names.join(" "));
// console.log(names.join("-"));

// console.log(names.indexOf("Mohan"));
// console.log(names.lastIndexOf("Mohan"));

// console.log(names.includes("Rahul"));


// sort

// const names = ["Ksr", "Mohan", "Rohan", "Rahul", "Ramesh","Mohan"];
// names.sort();
// names.reverse();
// console.log(names);


// const arr = [101, 20, 50, 90, 11];
// const arr = ["ksr","e", "rohit", true, 90, 11];
// arr.sort();
// console.log(arr);


// const arr = [10,50, 90, 11, 20, 30];
// arr.sort((a, b) => a - b); //ascending  order
// arr.sort((a, b) => b - a); //descending order
// console.log(arr);

// flattening

// const arr = [10, 20, 300, [10,20,[40, 50],11], 50, [60, 70, 80]];
// console.log(arr);
// console.log(arr[4]);
// console.log(arr[3][1]);
// console.log(arr.flat());
// console.log(arr.flat(2));
// console.log(arr.flat(Infinity));

// const arr = ["ksr", true, 90];
// arr.name = "rahul";
// console.log(arr);