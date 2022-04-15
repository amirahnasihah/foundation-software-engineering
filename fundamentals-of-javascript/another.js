////////
// multiply the random number by 100 (99.99), but get a number not including 100; Math.floor() usesusesuses to round down all the numbers to nearest integer value.

// uses while as conditional test as while uses is to determine whether to keep looping. here, test to make sure that foundcorrectnumber is still false so user can keep on guessing. set to true when the guess is correct.

// uses `==` because different data types



/*
intro()
while(playing){
guessGame()
playAgain()
}
endGame()
*/ ////////


// const prompt = require('prompt-sync')({ sigint: true });

// Random number from 1 - 100
let numberInMind = Math.floor(Math.random() * 100) + 1; // a number

// This variable is used to determine if the app should continue prompting the user for input
// let foundCorrectNumber = false;


// name
const name = prompt('What is your name? ');
console.log("Hey there " + name + "!");
console.log("Okay " + name + ", let 's playing a guess game to guess a number in my mind. ");


while (foundCorrectNumber == false) {
    // Step 1: Get user input (don't forget that the input is a string)
    
    guess = prompt("In my mind, I have a number. It is between 0-100, guess it? "); // a string

    // Step 2: Compare the guess to the secret answer and
    // let the user know the feedback (too large, too small, correct).
    
    if (guess < numberInMind) {
    	console.log("You guessed is too low. Guess again? ");
    } else if (guess > numberInMind) {
        console.log("You guessed is too high. Guess again? ");
    }
    else if (guess == numberInMind) {
        console.log("That's right. The number is " + numberInMind + " You won!! "); // numberInMind is a string??
}

// Bonus Point: prompt user and provide option for user to start a new game after winning
