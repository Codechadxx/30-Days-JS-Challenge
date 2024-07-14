// Activity 1: Arithmetic Operations
// Task 1: Write a program to add two numbers and log the result to the console.

let num1 = 3;
let num2 = 6;

console.log(`The sum of ${num1} and ${num2} is ${num1 + num2} `);

// Task 2: Write a program to subtract two numbers and log the result to the console.

num1 = 6
num2 = 3

console.log(`The subtraction of ${num1} and ${num2} is ${num1 - num2} `);

// Task 3: Write a program to multiply two numbers and log the result to the console.

console.log(`The multiplication of ${num1} and ${num2} is ${num1 * num2} `);

// Task 4: Write a program to divide two numbers and log the result to the console.

console.log(`The division of ${num1} and ${num2} is ${num1 / num2} `);

// Write a program to find the remainder when one number is divided by another and log the result to the console.

console.log(`The remainder of ${num1} and ${num2} is ${num1 % num2} `);

// Activity 2: Assignment Operators
// Task 6: Use the += operator to add a number to a variable and log the result to the console.

let x = 3
x += 3
console.log(`The value of x is ${x}` );

// Task 7: Use the -- operator to subtract a number from a variable and log the result to the console.

let x1 = 3
x1--
console.log(`The value of x is ${x1}`);

// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.

x1 = 5
x2 = 3
console.log(`The ${x1} is ${(x1 > x2) ? 'greater than' : 'less than'} ${x2}`);
console.log(`The ${x1} is ${(x1 < x2) ? 'greater than' : 'less than'} ${x2}`);


// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

x1 = 5
x2 = 3
console.log(`The ${x1} ${(x1 >= x2) ? 'is' : 'is not' } greater than or equal to ${x2}`);
x1 = 3
x2 = 5
console.log(`The ${x1} ${(x1 <= x2) ? 'is' : 'is not' } less than or equal to ${x2}`);

// Task 10: Write a program to compare two numbers using == and === and log the result to the

let x3 = 4
let x4 = 4
console.log(`The ${x1} ${(x3 == x4) ? 'is' : 'is not' } equal to ${x2}`); 

let x5 = String(x3);
x4 = 4
console.log(`The ${x1} ${(x5 === x4) ? 'is' : 'is not' } equal to ${x2}`); 

// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console. 

let n = (true && false)
console.log(n);

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

n = (true || false)
console.log(n);

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

n = (true != false)
console.log(n);

// Activity 5: Ternary Operator
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let age = 18;
let Vote = (age >= 18) ? 'vote' : 'not vote';
console.log(`You can ${Vote}`);

// Feature Request

// Question 1

let Num1 = 15;
let Num2 = 10;
console.log(`Num1 + Num2 is: ${num1 + Num2}`);
console.log(`Num1 - Num2 is: ${Num1 - Num2}`);
console.log(`Num1 * Num2 is: ${Num1 * Num2}`);
console.log(`Num1 / Num2 is: ${Num1 / Num2}`);
console.log(`Num1 % Num2 is: ${Num1 % Num2}`);

// Question 2

Num1 = 20;
Num2 = 20;
console.log(
  `Num1 <= Num2 && Num1 == Num2:,
  ${Num1 <= Num2 && Num1 == Num2}`);