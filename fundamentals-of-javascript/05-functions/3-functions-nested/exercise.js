// In `exercise.js` you have been provided with list of names.
// Write a program that logs a shouty greeting to each one.
// Your program should include a function that spells their name in uppercase,
// and a function that creates a shouty greeting.
// Log each greeting to the console.

// Add your code here

// Step1: create the "convertToUpperCase" function which takes a name as input
// The function would convert the input to all upper case
// You might want to search on Google on how to convert a string to all upper case

function convertToUpperCase(inputName){
    return inputName.toUpperCase();
}


// Step 2, create an "greeting" function.
// This function should shout out greeting each of the name in all upper case
// Leverage the "convertToUpperCase" function to help you in converting the names to upper case

function greeting(inputName){
    console.log("HELLO " + convertToUpperCase(inputName));
}


// Testing Code
const user1 = "Daniel";
const user2 = "Irina";
const user3 = "Mimi";
const user4 = "Rob";
const user5 = "Yohannes";

greeting(user1)
greeting(user2)
greeting(user3)
greeting(user4)
greeting(user5)


// Expected Output
// HELLO DANIEL
// HELLO IRINA
// HELLO MIMI
// HELLO ROB
// HELLO YOHANNES