// question 1.2

const functionA = function(input1, input2, handlingFunction) {
    console.log(input1)
    console.log(input2)
    const result = handlingFunction(input1, input2) // calling function
    console.log(result)
}

const functionB = function(input1, input2, handlingFunction) {
    console.log(input2)
    console.log(input1)
    handlingFunction(input1, input2, x => x * 2) // function as function input; x => x * 2 , x is a parameter for handlingFunction inside the functionB
    return input1 + input2
}

const functionC = function(input1, input2) {
    return input1 * input2 * (input1 + input2)
}

// calling the function, passing 3 arguments into the function corresponding parameter
functionA(3, 5, functionC)
functionB(6, 9, functionA)