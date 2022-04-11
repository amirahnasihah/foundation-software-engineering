// Task: Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
// Hint: You might want to check the documentation of array.join() function

const array_join = (input_array, delimiter) => {
    // Add your code here
    return input_array.join(delimiter);
}


// DO NOT EDIT CODE BELOW
// Test Case :
myColor = ["Red", "Green", "White", "Black"];
console.log(array_join(myColor, ","))
console.log(array_join(myColor, "+"))

// Expected Output :
// "Red,Green,White,Black"
// "Red+Green+White+Black"