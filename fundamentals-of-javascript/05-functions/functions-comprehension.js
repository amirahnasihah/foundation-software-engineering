// declare a function double that accepts an argument called x and returns the double of x :


function double(x) {
	console.log("function(parameter): ");
	return 2 * x;
}

let y = double(4);
console.log(y);
//Note: the function above may be referenced before it has been defined.



// Functions are also values in JavaScript; they can be stored in variables (just like numbers, strings, etc ...) and given to other functions as arguments :
console.log("var function(parameter): ")

var double = function (x) {
	return 2 * x;
};

let z = double(2)
console.log(z)
// Note: the function above may not be referenced before it is defined, just like any other variable.



// pass-by-reference (changed the function input)

// proper pass-by-reference example of array should be like this:
function test(input){
	console.log("pass-by-reference: ") // just to print out only. can be removed.
	input[0] = 10
}

let arr = [1, 2, 3, 4, 5]
test(arr)

console.log(arr)

/*
- if you try this, you would find that the `arr` after running the function , is actually [10, 2, 3, 4, 5] . This demonstrated that array is pass-by-reference in JavaScript.

- So we need to specify the position of array that we want to change in the function first.
*/