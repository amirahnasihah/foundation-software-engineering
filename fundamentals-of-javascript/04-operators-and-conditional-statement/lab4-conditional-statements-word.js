// rewrite the code block by using Ternary Operator.

// question 3.1.1
const studentAScore = 72;
const studentBScore = 86;

let bestStudent = studentAScore >= studentBScore ? "a is larger" : "b is larger";

console.log(bestStudent);


// question 3.1.2
const studentAScore2 = 71;
const studentBScore2 = 85;
const studentCScore2 = 22;

let bestStudent1 = studentAScore2 >= studentBScore2 && studentAScore2 >= studentCScore2 ? "A" : "B";

console.log(bestStudent1);


// question 3.1.3
const studentAScore3 = 73;
const studentBScore3 = 87;
const studentCScore3 = 23;

function getGradeFromScore(score){
  return (score > 85 ? "A"
         : score > 70 ? "B"
         : "C");
}

console.log(getGradeFromScore(studentAScore3));
console.log(getGradeFromScore(studentBScore3));
console.log(getGradeFromScore(studentCScore3));
