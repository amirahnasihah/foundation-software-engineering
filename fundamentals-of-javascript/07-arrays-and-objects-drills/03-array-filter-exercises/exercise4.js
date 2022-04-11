// Task: Given an array of people objects, return a new array that has filtered out all those who are not a student.

const peopleWhoAreTalentLabsStudents = (arr) => {
  // Add your code here

}

// DO NOT EDIT CODE BELOW
// Test Cases
console.log(JSON.stringify(peopleWhoAreTalentLabsStudents([
    { name: "Peter Chan", student: true },
    { name: "Darren Chiu", student: false },
    { name: "Paul Lau", student: true },
    { name: "Erika Lee", student: false },
    { name: "Anthony Wong", student: true }
])));

// Expected Output
// [ { name: 'Peter Chan', member: true },
//  { name: 'Paul Lau', member: true },
//  { name: 'Anthony Wong', member: true } ]