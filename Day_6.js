// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console. 

const myArr = new Array(1, 2, 3, 4, 5)

console.log(myArr);

// Task 2: Access the first and last elements of the array and log them to the console.

console.log(myArr[1]);

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

myArr.push(2);
console.log(myArr);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.

myArr.pop();
console.log(myArr);

// • Task 5: Use the shift method to remove the first element from the array and log the updated array.

myArr.shift();
console.log(myArr);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

myArr.unshift(6);
console.log(myArr);

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

const numbers = [1, 2, 3, 4]

const ans = numbers.map((x) => x*2)

console.log(ans);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

const words = ["Rachit", "Kumar", "Hitesh", "Chaudhary"]

const result = words.filter((n) => n.length > 7)

console.log(result);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const array2 = [1, 3, 4, 6]

const sum = array2.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(sum);

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.

const num3 = [10, 9, 8, 7, 6]

for (let i = 0; i < num3.length; i++) {
  console.log(num3[i]);  
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.

num3.forEach(element => {
  console.log(` the elements of array is ${element}`);
});

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

const array3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(array3);


// Task 13: Access and log a specific element from the two-dimensional array.

console.log(array3[1][2]);