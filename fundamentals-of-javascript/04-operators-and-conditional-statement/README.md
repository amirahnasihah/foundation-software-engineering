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
