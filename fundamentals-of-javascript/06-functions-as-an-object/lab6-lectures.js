/* function is a type of 'data' or object:
represent a data structure
- which can be stored in variable.
- can be passed into a function as an input
*/

let minus = function (sub1,sub2){
    return sub1 - sub2;
}

console.log(minus(10,2));  // 8


// using the function variable (like in python)
let add = function(a,b){
    return a + b;
}

let addResult = add(1, 2); // function var
console.log(addResult); // 3

console.log(add(1,2));   // 3 (no var)


// Passing Functions As Function Input:
// when we want some part of the function logic to be defined by an input. the function caller can decide which part of the function logic.

let greeting = function (greetingMethod, name){
    greetingMethod(name); // parameter inside parameter, name been passed as function input
}

let sayHello = function (name){ 
    console.log("Hello " + name);   // passing function input
}

let sayGoodMorning = function(name) {
    console.log("Good Morning " + name); // parameter as input
}

var user1 = "Peter";    // declare var
var time = 9; 

if (time < 12){ // 9 < 12
    greeting(sayGoodMorning, user1);    // main function
}
else {
    greeting(sayHello, user1);  // main function
}

// main function: (before noon 9 < 12)
// greeting(sayGoodMorning, user1) | greeting(sayHello, user1)

// inside greeting function:
// input parameter: name | value: Peter
// input parameter: greetingMethod | value: sayGoodMorning, say Hello


// actual executed order inside greeting Function:
// sayGoodMorning(name) | sayHello(name)
// Good Morning Peter

/*
Why do we want to have functions as input?:
- To have different handling after executing the main logic in a function.
*/



// Why do we want to have functions as input?
let printResult = function(result) {
    console.log(result);
}

let saveToFile = function (result) {
    // logic to save in file;
}

let sendEmail = function (result){
    // logic to send inputs in email;
}

let add1 = function(a1, b1, handling){
    let sum = a1 + b1;
    handling(sum)
}

// different use case scenarios:
add1(1, 2, sendEmail);
add1(1, 2, saveToFile);
add1(1, 2, printResult);
// 3