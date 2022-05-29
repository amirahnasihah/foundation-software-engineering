# data types

## Part 1 Data Types Exercises

1. typeof("Hello World")
// string

2. typeof(28)
// number

3. typeof(3.4)
// number

4. typeof(NaN)
// number

5. typeof("peter")
// string

6. typeof(false)
// boolean

7. typeof("false")
// string

8. typeof(2 != 3)
// boolean

9. "hamburger" + "s"
// string

10. "hamburgers" - "s"
// number

11. "1" + "3"
// string

12. "1" - "3"
// number

13. "johnny" + 5
// string

14. "johnny" - 5
// number

15. 99 * "luftballons"
// number

## Part 2 Array Exercises

### Task 2.1 Array Operations Exercises

Let’s start with
```js
let testArray = [1,2,3,4,5]
```

1. Add 6 to the back of testArray.
```js
testArray.push(6);
console.log(testArray);
```

2. Remove the 6 from the new array that you created.
```js
testArray.pop();
console.log(testArray);
```

3. Add an 0 to the front of testArray.
```js
testArray.unshift(0);
console.log(testArray);
```

4. Remove 3 from the testArray (after finishing step 1-3). (Tips: You might want to use the array.splice function)
```js
testArray.splice(3, 1);
console.log(testArray);
```

5. Concatenates all the elements in testArray into a string (i.e. the expected output is a string of “01245”). (Tips: You might want to use the array.join function)
```js
console.log(testArray.join("")
```

### Task 2.2 Code Dry-running

1. What is the content of “numbers” after the code is executed? (Run the code in your mind, not with repl.it)
```js
let numbers = [1, 3, 5, 7]
numbers.pop()
numbers.push(10)
numbers.unshift(3)
```

Answer:
```js
[1, 3, 5]
[1, 3, 5, 10]
[3, 1, 3, 5, 10]
```

2. List out the content of each of the arrays in the code below. (Run the code in your mind, not with repl.it)
```js
let allTeams = []
let team1 = ["Peter", "Paul", "Mary", "Betty"]
let team2 = ["Tom", "Mike", "Trump", "Stephen", "Billy"]
team1.push("Anthony")
team1.unshift("Mandy")
team2.pop()
team2[3] = "Louis"
```

Answer:
```js
team1: [“Mandy”, "Peter", "Paul", "Mary", "Betty", “Anthony”]
team2: ["Tom", "Mike", "Trump", "Stephen"]
       ["Tom", "Mike", "Trump", "Louis"]
```

3. List out the content of the "studentList” after the code is executed.
```js
let studentList = [
  {firstName: "Peter", age: 12},
  {firstName: "Anthony", age: 24},
  {firstName: "Louis", age: 18},
]
studentList[2].name = "Mary"
studentList[1].ago = 16
```

Answer:
```js
[
  {firstName: "Peter", age: 12},
  {firstName: "Anthony", age: 16},
  {firstName: "Louis", age: 18, name: “Mary”},
]
```
