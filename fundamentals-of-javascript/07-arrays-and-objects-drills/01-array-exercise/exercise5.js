// Task: Write a JavaScript function to find an array contains a specific element.
// Hint: You should leverage the array.indexOf() function and if else statement

const contains = (array, target) => {
    // Add your code here
    var index = array.indexOf(target);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
    if (array == target)
        return true;
    return false
}


// DO NOT EDIT CODE BELOW
// Test Case
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));

// Expected Output
// true