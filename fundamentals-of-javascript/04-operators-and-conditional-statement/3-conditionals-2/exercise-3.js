/*
 *  Conditionals
 *  ---------------------------------
 *  Write a conditional statement that checks if a student has passed
 *  - if the mark is 80 or higher then the grade is "A"
 *  - if the mark is lower than 80 and greater than 60 then the grade is "B"
 *  - if the mark is 60 or lower but no lower than 50 then the grade is "C"
 *  - Otherwise the grade is "F"
 */


grade = 49

// Add your code here
if (grade > 80) {
    console.log(grade + ": A");
} else if (grade < 80 && grade > 60) {
    console.log(grade + ": B");
} else if (grade <= 60 && grade >= 50) {
    console.log(grade + ": C");
} else {
    console.log(grade + ": F")
}

/*
 *  EXPECTED RESULT
 *  ---------------
 *  49: F
 */
