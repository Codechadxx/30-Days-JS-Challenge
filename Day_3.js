// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console. 

let n = 3

if (n == 0 ) {
    console.log(`The number ${n} is equal to 0`);
} else if (n > 0) {
    console.log(`The number ${n} is positive`);
} else{
    console.log(`The number ${n} is negative`);
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 18

if (age >= 18) {
    console.log(`The person is eligible to vote`);
} else{
    console.log(`The person is not eligible to vote`);
}

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let a = 1
let b = 2
let c = 3

if (a > b) {
    if (a > c) {
        console.log(`a is the largest number`);
    } else{
        console.log(`c is the largest number`);
    }
} else{
    if (b > c) {
        console.log(`b is the largest number`);
    } else{
        console.log(`c is the largest number`);
    }
} 

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console. Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let key = 3

switch (key) {
  case 1: console.log(`Monday`);
    break;

  case 2: console.log(`Tuesday`);
  break; 

  case 3: console.log(`Wednesday`);
  break; 

  case 4: console.log(`Thursday`);
  break; 

  case 5: console.log(`Friday`);
  break; 

  case 6: console.log(`Saturday`);
  break; 

  case 7: console.log(`Sunday`);
  break;

  default: console.log(`Wrong input`);
    break;
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let marks = 77

switch (true) {
  case (marks >= 90 && marks < 100): 
    console.log(`Grade A`); 
    break;

    case (marks >= 80 && marks < 90): 
      console.log(`Grade B`); 
    break;

    case (marks >= 70 && marks < 80):
      console.log(`Grade C`); 
    break;

    case (marks >= 60 && marks < 70):
      console.log(`Grade D`); 
    break;

    case (marks >= 50 && marks < 60):
      console.log(`Grade E`); 
    break;

  default: console.log(`Grade F`);
    break;
}


// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let number = 3
let answer = console.log(`The number ${number} is ${number % 2 == 0 ? 'even' : 'odd'}`); 


// Task 7: Write a program to check if a year is a leap year using multiple consitions (divisible by 4, butnot 100 unless also divisible by 400) and log the result to the console.

let year = 2024

if (((year % 4 == 0) &&(year % 100 != 0)) || (year % 400 == 0)) {
        console.log(`${year} is a  leap year`);
}else{
    console.log(`${year} is not a leap year`);
  }

