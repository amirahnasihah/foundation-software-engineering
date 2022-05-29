# operators and conditional statement

## Part 1 Logical Operators

![image](https://user-images.githubusercontent.com/89834315/170851709-c89d2ae2-298d-411b-8680-049919b6de79.png)

Question 1.1 What’s the output of the following statements? (Hint: the results might be more than 1 line)

Question 1.1.1
Statement: `console.log(a && b)`
```js
false
```

Question 1.1.2
Statement: `console.log(b || c)`
```
true
```

Question 1.1.3
Statement: `console.log(a || b || c)`
```js
true
```

Question 1.1.4
Statement: `console.log(a || b && c)`
```js
b && c: false -> true || false
Result: true
```

Question 1.1.5
Statement: console.log(a || b && !c || !e)
```js
Execute b && !c first (BODMAS method): true || false || false
Result: true
```

Question 1.1.6
Statement: console.log(a && !b && !(c || d))
```js
Parentheses first: true && !true
Result: false
```

Question 1.1.7
Statement: console.log(e && b || !(a && c))
```js
Parentheses first: false && !true
Result: false
```

Question 1.1.8
Statement: console.log(a && !b && !(a || d))
```js
Parentheses first: true && !true
Result: false
```

### Null

![image](https://user-images.githubusercontent.com/89834315/170851802-b6c0c447-4f60-480f-98fc-e20ba614e615.png)

## Part 2 Conditional Statements (if, else if, else)

![image](https://user-images.githubusercontent.com/89834315/170851821-c4e7f534-3661-453d-a291-a70f6e558f74.png)

## Part 3 Ternary Operator

Question 3.1.1

Original Code:
```js
const studentAScore = 72;
const studentBScore = 86;
let bestStudent;
if (studentAScore >= studentBScore){
bestStudent = "A";
} else {
bestStudent = "B";
}
```

Rewritten Code:
```js
const studentAScore = 72;
const studentBScore = 86;
let bestStudent = studentAScore >= studentBScore ? "a is larger" : "b is larger";
console.log(bestStudent); // b is larger
```

Question 3.1.2
Original Code:
```js
const studentAScore = 72;
const studentBScore = 86;
const studentCScore = 22;
let bestStudent;
if (studentAScore >= studentBScore && studentAScore >= studentCScore){
bestStudent = "A";
} else if (studentBScore >= studentAScore && studentBScore >= studentCScore){
bestStudent = "B";
} else {
bestStudent = "C";
}
console.log(bestStudent);
```

Rewritten Code:
```js
const studentAScore = 72;
const studentBScore = 86;
const studentCScore = 22;
let bestStudent = studentAScore >= studentBScore && studentAScore >= studentCScore ? "A" : studentBScore >= studentAScore && studentBScore >= studentCScore ? "B" : "C";
console.log(bestStudent); // B
```

Question 3.1.3
Original Code:
```js
const studentAScore = 72;
const studentBScore = 86;
const studentCScore = 22;
function getGradeFromScore(score){
if (score > 85){
return "A";
} else if (score > 70){
return "B";
} else {
return "C"
}
}
console.log(getGradeFromScore(studentAScore));
console.log(getGradeFromScore(studentBScore));
console.log(getGradeFromScore(studentCScore));
```

Rewritten Code:
```js
const studentAScore = 72;
const studentBScore = 86;
const studentCScore = 22;
function getGradeFromScore(score){
return (score > 85 ? "A"
: score > 70 ? "B"
: "C");
}
console.log(getGradeFromScore(studentAScore));
console.log(getGradeFromScore(studentBScore));
console.log(getGradeFromScore(studentCScore));
// B
// A
// C
```
