
// const prompt = require('prompt-sync')({ sigint: true });

// Random number from 1 - 100
let randomNumber = Math.floor(Math.random() * 100) + 1; 

// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;




while(!foundCorrectNumber) {
	guess = prompt("enter a number from 1 - 100: ");
	
	if (guess == randomNumber) {
		
	}
}