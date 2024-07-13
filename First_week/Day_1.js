// Activity 1: variable Declaration
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var num = 30
console.log(num);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let name = "Rachit"
console.log(name);

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const isBoolean = true
console.log(isBoolean);

// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let num1 = 31
let state = "Haryana"
let isstate = true
let myobj = {
    gender: "White Male",
    age: 50,
}

let array = ["One", 2, "Three"]

console.log(typeof state);
console.log(typeof num1);
console.log(typeof isstate);
console.log(typeof myobj);
console.log(typeof array);

// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let fr = "Thomas Shelby"
fr = "Author Shelby"
console.log(fr);

// Task 6: Try reassigning a variable declared with const and observe the error.

const Damm = 33
// Damm = 34
// console.log(Damm);

// TypeError: Assignment to constant variable.

//  node First_week/Day_1.js

// Question 1: Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

const numvalue = 100
console.log(numvalue,typeof numvalue);

const stringvalue = "Hello world"
console.log(stringvalue, typeof stringvalue);

const booleanvalue = true
console.log(booleanvalue, typeof booleanvalue);

const  arrayvalue = ["Hi", "Bro"]
console.log(arrayvalue, typeof arrayvalue);

const obj = { car: "Bentaly", prize: "3.4 millon"}
console.log(obj, typeof obj);

// Question 2: Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let reassignValue = "I am Batman";
reassignValue = "I am shaktimaan"; 
console.log(reassignValue);

const assign = "I live in Rohatk";
assign = "I live in NY";  
console.log(assign);