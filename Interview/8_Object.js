// Object
   
// key value pair


// create
// const user = {
//     name: "kaushider",
//     age: 25,
//     emailId: "ksr@gmail.com",
//     amount: 1000,
//     "home address": "delhi"
// }


// console.log(user["name"]);
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["home address"]);

// console.log(typeof user);

// read
// console.log(user.emailId);

// CRUD operation: create read update delete

// user.aadhar = 123456789;
// console.log(user);

// update
// user.amount = 5000;
// console.log(user);

// delete
// delete user.emailId;
// console.log(user);


// const user = {
//     name: "kaushider",
//     age: 25,
//     emailId: "ksr@gmail.com",
//     amount: 1000,
//     "home address": "delhi"
// }

// copy by reference
// const user2 = user;

// user2.age=20;
// console.log(user);
// console.log(user2);


// Important
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for(let keys in user){
//     console.log(keys,user[keys]);
// }

// user.keys = undefined
// user[keys] = values

// const user = {
//     name: "kaushider",
//     age: 25,
//     emailId: "ksr@gmail.com",
//     amount: 1000,
//     "home address": "delhi"
// }


// for of Loop on Array

// const tempArr = Object.entries(user);
// console.log(tempArr);

// for(let keys of Object.keys(user)){
//     console.log(keys);
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }

// for(let values of Object.entries(user)){
//     console.log(values);
// }

// console.log(Object.entries(user));

// for(let [keys, values] of Object.entries(user)){
//     console.log(keys, values);
// }



// const name = user.name;
// const age = user.age;

// Object destructuring
// const {name, age, amount} =  user;
// console.log(name, age, amount);
// const {name:userName, age:userAge} =  user;
// console.log(userName, userAge);



// Array destructuring
// const arr = [10, 20, 30, 40, 50];
// const [first, second] = arr;
// console.log(first, second);

// const user = {
//     name: "kaushider",
//     age: 25,
//     emailId: "ksr@gmail.com",
//     amount: 1000,
//     "home address": "delhi",
//     greeting: function(){
        // console.log(`My name is ${user.name} and my age is ${user.age}`);
//         console.log(`My name is ${this.name}`);
//         return 20;
//     }
// }

// const val = user.greeting();
// console.log(val);

// const user2 = {
//     name: "Mohan",
//     account:2000,
//      greeting: function(){
//         console.log(`My name is ${this.name} `);
//         return 20;
//     }

// }

// user2.greeting = user.greeting;

// console.log(user2);
// user2.greeting();
// const val = user.greeting();
// console.log(val);

// Nested Objects

// const user = {
//     name: "kaushider",
//     age: 25,
//     emailId: "ksr@gmail.com",
//     amount: 1000,
//     address: {
//         city: "Noida",
//         state: "UP"
//     } 
// }

// creating seperate copy using spread operator (shallow Copy)
// const user2 = {...user};
// user2.name = "Mohan";
// user2.address.city = "Delhi"; // for nested it will not work it will refer to the same object
// console.log(user);
// console.log(user2);

// const user = {
//     name: "kaushider",
//     age: 25,
//     emailId: "ksr@gmail.com",
//     amount: 1000,
//     address: {
//         city: "Noida",
//         state: "UP"
//     } 
// }

// const user2 = structuredClone(user);
// user2.name = "Mohan";
// user2.address.city = "Delhi"; // for nested it will work it will change only user2
// console.log(user);
// console.log(user2);


// console.log(user);
// console.log(user.address.city);
// console.log(user.address["state"]);


// const user = {
//     name: "kaushider",
//     age: 25,
//     0: "ksr@gmail.com",
//     2: 1000
// }
// console.log(user[2]);

// const arr1 = [10, 20, 30, 40];
// const arr2 = {0:10, 1:20, 2:30, 3:40};
// {
//     0: 10,
//     1: 20,
//     2: 30,
//     3: 40
// }
// console.log(arr2);

// keys :String || Symbol

// const sym = Symbol("id");

// const user = {
//     name: "kaushider",
//     age: 25,
//     0: "ksr@gmail.com",
//     2: 1000,
//     [sym] : "hello"
// }

// console.log(user[sym]);