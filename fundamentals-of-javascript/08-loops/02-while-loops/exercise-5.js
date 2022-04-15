// Task: Calculate the factorial of the input
// Tips: factorial of 5 = 5*4*3*2*1

const input = 10

// Add your code here

let result = input;
let i = input - 1;
while (i > 0 && i < result){
	result *= i;
	i--;
}


console.log(result)





// Expected Output: 
// 3628800