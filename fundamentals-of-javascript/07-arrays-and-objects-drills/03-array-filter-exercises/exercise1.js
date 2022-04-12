// Task: Given an array of numbers, return a new array that has only the numbers that are 10 or greater.

const tenAndGreaterOnly = (arr) => {
  // Add your code here
  arr.filter(function(value)){
    return value >= 10;
  }
}

  // DO NOT EDIT CODE BELOW
  // Test Case
  console.log(tenAndGreaterOnly([10, 2, 3, 8, 4, 13, 22]));
  
  // Expected Output
  // [10, 13, 22]