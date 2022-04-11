// Task: Write a JavaScript function to merge two arrays
// Hint: You might want to check the documentation of array.concat() function

const merge_array = (arr1, arr2) => {
    // Add your code here
    return arr1.concat(arr2);
}

// DO NOT EDIT CODE BELOW
// Test Case :
const array1 = [1, 2, 3];
const array2 = [2, 30, 1];
console.log(merge_array(array1, array2));

// Expected Output
// [1, 2, 3, 2, 30, 1]