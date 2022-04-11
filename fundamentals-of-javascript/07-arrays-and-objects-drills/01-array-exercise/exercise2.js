// Task: Write a JavaScript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array.
// Hint: You might want to check the documentation of array.slice() function

const first = (input_array, number_of_elements) => {
    // Add your code here
    return input_array.slice(0, number_of_elements);
}


// DO NOT EDIT CODE BELOW
// Test Cases :
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2, 9], 4));


// Expected Results
// [7, 9, 0]
// [7, 9, 0, -2]