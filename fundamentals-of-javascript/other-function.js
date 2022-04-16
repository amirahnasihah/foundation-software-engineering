
// const prompt = require('prompt-sync')({ sigint: true });

// Random number from 1 - 100
let randomNumber = Math.floor(Math.random() * 100) + 1; 

// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;



let guess;

guessStart = () => {
	while(!foundCorrectNumber) {
	guess = prompt("enter a number from 1 - 100: ");
	
	if (guess < 0 || guess > 100) { // 1-100
		alert("between 1-100 only! ") } else { 
		if (guess == randomNumber) {
		foundCorrectNumber = true;
		alert("Won. The number is " + randomNumber);
			
		} else if (guess < randomNumber) {
		alert("too low")
			
		} else if (guess > randomNumber) {
		alert("too high")
			
		} else { // other than number
		alert("no letter, number only! ")
		}
	}
}
}

alert("one more round? ")


// make a function
resetGame = () => {
	
	
	
}

resetGame();  // calling function
