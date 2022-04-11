// functions-revisited question 1.1

const functionA = function(inputArray, handlingFunction) {
    console.log("Running Function A");
    handlingFunction(inputArray);
}

const functionB = function(inputArray) {
    console.log("Running Function A");
    console.log(inputArray.length);
    return inputArray[0];
}

const array1 = [1, 3, 5, 7, 9]
const result1 = functionB(array1) // calling functionB, pass one argument into functionB

const hFunction = (inputArray) => {
    console.log(inputArray[inputArray.length - 1])
}

functionA(array1, hFunction) // calling functionA, pass two arguments into functionA, hFunction argument is a Function input

const array2 = [2, 4, 6, 8, 10]
functionA(array2, functionB)

/*
Running Function B
5
Running Function A
9
Running Function A
Running Function B
5
*/