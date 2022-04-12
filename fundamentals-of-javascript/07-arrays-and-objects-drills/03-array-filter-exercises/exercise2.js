// Task: Given an array of numbers, return a new array that only includes the even numbers.

const evensOnly = (arr) => {
  // Add your code here
  return arr.filter(even => even % 2 == 0)  // even numbers
}

// DO NOT EDIT CODE BELOW
// Test Case
console.log(evensOnly([3, 2, 8, 9, 11])); 

// Expected Output
// [2, 8]


// odd numbers [3,9,11]
// return arr.filter(even => odd % 2)