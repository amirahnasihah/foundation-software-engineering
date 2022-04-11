// Task: Write a JavaScript program to list the properties(all the keys, not the values) of a JavaScript object.
// Hint: You can check the documentation of "Object.keys()" function.
// To make it output the same format of the expected output, you might want to use array.join() function too.

const getAllKeys = (inputObject) => {
    // Add your code here
    let objKeys = Object.keys(inputObject)
    return objKeys.join(",")
}


// DO NOT EDIT CODE BELOW
// Test Case：
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 }

console.log(getAllKeys(student))

// Expected Output:
// name,sclass,rollno