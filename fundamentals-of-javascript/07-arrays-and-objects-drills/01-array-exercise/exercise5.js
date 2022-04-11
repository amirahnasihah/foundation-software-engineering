// Task: Write a JavaScript function to find an array contains a specific element.
// Hint: You should leverage the array.indexOf() function and if else statement

const contains = (array, target) => {
    // Add your code here
    let i = array.indexOf(target);
    if (array[i] === target){
      return true;
    }
    else {
      return false;
    }
}


// DO NOT EDIT CODE BELOW
// Test Case
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));

// Expected Output
// true