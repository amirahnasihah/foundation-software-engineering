const prompt = require('prompt-sync')({sigint: true});
 
// Random number from 1 - 100
let numberInMind = Math.floor(Math.random() * 100) + 1;

// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;

 
while (!foundCorrectNumber) {
  // Step 1: Get user input (don't forget that the input is a string)

  

  // Step 2: Compare the guess to the secret answer and
  // let the user know the feedback (too large, too small, correct).

  
}

// Bonus Point: prompt user and provide option for user to start a new game after winning