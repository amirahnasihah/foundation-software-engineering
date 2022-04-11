/*
*  Conditionals
*  ---------------------------------
*  Write a conditional statement that checks if a sentence contains the word "code"
*  - if the sentence contains the word "code" then return true
*  - otherwise return false
*
*  Hint: Google how to check if a string contains a word
*/

sentence1 = "code your future"

// Add your code here
if (sentence1.includes("code", 0)) {
    console.log(sentence1 + ": " + true);
} else {
    console.log(sentence1 + ": " + false);
}

/* 
* EXPECTED RESULT
* ---------------
* code your future: true
*/
