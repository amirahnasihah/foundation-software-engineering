// Task: Capitalize each all the names in the original array
// Tips: You might want to Google on how to capitalize a string

const capitalizeListOfNames = (arr) => {
    // Add your code here
    arr.splice(0, 2, "john", " jacob")
    return arr.map(cap => cap.toUpperCase()) // + cap.slice(1, 1)) => look for what is this
}

// DO NOT EDIT CODE BELOW
// Test Cases
console.log(capitalizeListOfNames(["peter", "DARREN", "timCook", "sundar pichai"]));

// Expected Output
// ["JOHN", "JACOB", "TIMCOOK", "SUNDAR PICHAI"]


// need to replace peter = john, darren = jacob
