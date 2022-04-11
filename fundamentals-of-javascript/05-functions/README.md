# functions

- [functions](#functions)
  - [Introduction](#introduction)
  - [Something wrong with the code??](#something-wrong-with-the-code)
  - [Meet functions](#meet-functions)
  - [How function work??](#how-function-work)
  - [But how exactly does it all come together and actually work?](#but-how-exactly-does-it-all-come-together-and-actually-work)
    - [First, have a function](#first-have-a-function)
    - [Calling the function](#calling-the-function)
    - [After call the function, the body of the function does all](#after-call-the-function-the-body-of-the-function-does-all)
    - [And when it's done](#and-when-its-done)
  - [What can you Pass to a function??](#what-can-you-pass-to-a-function)
    - [any value as arguments (string, boolean, number)](#any-value-as-arguments-string-boolean-number)
    - [variables as arguments](#variables-as-arguments)
    - [expressions as arguments](#expressions-as-arguments)
  - [Parameters vs. Arguments](#parameters-vs-arguments)
  - [Pass By Value](#pass-by-value)
    - [EXPERIMENT #1: what happens when we don't pass enough arguments?](#experiment-1-what-happens-when-we-dont-pass-enough-arguments)
    - [EXPERIMENT #2: what happens when we pass too many arguments?](#experiment-2-what-happens-when-we-pass-too-many-arguments)
    - [EXPERIMENT #3: what happens when we have NO parameters?](#experiment-3-what-happens-when-we-have-no-parameters)
  - [The `return` Statement](#the-return-statement)
    - [Anatomy of a Function](#anatomy-of-a-function)
  - [Local Variable Declarations](#local-variable-declarations)
    - [Variable Scope (global & local)](#variable-scope-global--local)
  - [Variable Scope](#variable-scope)
    - [Declare your locals](#declare-your-locals)

## Introduction

It give you a way to take code, write it once, and then reuse it over and over.

Functions are parameterized — each time you use the function, you pass it arguments so it can compute something that’s relevant to what you need.

The key to the JavaScript programming style.

> functions: a set of statements that performs a task or produces a value

[back to top](#functions)

## Something wrong with the code??

Look carefully at the code, what did you notice?

```js
var dogName = "rover";
var dogWeight = 23;
if (dogWeight > 20) {
  console.log(dogName + " says WOOF WOOF");
} else {
  console.log(dogName + " says woof woof");
}
dogName = "spot";
dogWeight = 13;
if (dogWeight > 20) {
  console.log(dogName + " says WOOF WOOF");
} else {
  console.log(dogName + " says woof woof");
}
dogName = "spike";
dogWeight = 53;
if (dogWeight > 20) {
  console.log(dogName + " says WOOF WOOF");
} else {
  console.log(dogName + " says woof woof");
}
dogName = "lady";
dogWeight = 17;
if (dogWeight > 20) {
  console.log(dogName + " says WOOF WOOF");
} else {
  console.log(dogName + " says woof woof");
}
```

These code are some code that got used over and over again. It's tedious to write. The problems will happen if we need to change the code over time.

[back to top](#functions)

## Meet functions

Functions allow to take a bit of code, give it a name, and then refer to it over and over whenever we need it.

Function is defined or declared using the `function` keyword, followed by:

- name of function
- list of parameters (optional) enclosed in parentheses `()`, multiple parameters separated by commas `,`.
- the block of codes or the statements (body of the function) enclosed in curly bracces `{}`.

```js
function functionName(parameter1, parameter2) {
  // codes or statements to be executed
}
```

Let's write a `bark` function same as above but, more functionality.

```js
function bark(name, weight) {
  if (weight > 20) {
    console.log(name + " says WOOF WOOF");
  } else {
    console.log(name + " says woof woof");
  }
}
```

1. need to check the weight and then output the dog's name with WOOF WOOF or woof woof.
2. notice the variable names used in the code match the parameters.

[back to top](#functions)

## How function work??

```js
function bark(name, weight) {
  if (weight > 20) {
    console.log(name + " says WOOF WOOF");
  } else {
    console.log(name + " says woof woof");
  }
}

// ↓ calling the function ↓
bark("rover", 23);
bark("spot", 13);
bark("spark", 53);
bark("lady", 17);
```

Now, all that code becomes just a few calls to the `bark` function, passing it each dog's name and weight. And that's simple and less code.

[back to top](#functions)

## But how exactly does it all come together and actually work?

### First, have a function

```js
function bark(name, weight) {
  if (weight > 20) {
    console.log(name + " says WOOF WOOF");
  } else {
    console.log(name + " says woof woof");
  }
}
```

- We got the `bark` function right at the top of the code.
- The browser reads this code, sees it’s a function and then takes a look at the statements in the body.
- It isn’t executing the function statements now; it’ll wait until the function is called from in the code.
- The function is _parameterized_, meaning it takes a dog’s name and weight when it is called. That allows you to call this function for as many different dogs as you like.
- Each time you do, the logic applies to the name and weight you pass to the function call.

> parameters: they are assigned values when the function is called

[back to top](#functions)

### Calling the function

To call, or _invoke_, a function, just use its name, followed by an open parenthesis, then any values you need to pass it.
The values in the parentheses are arguments.

> “Invoking a function”: just a fancy way of saying “calling a function.”

```js
// ↓↓ function caller || calling function
bark("rover", 23);
```

1. here we’re passing two arguments, the name ("rover") and the weight (23).

```js
function bark(name, weight) {
  if (weight > 20) {
    console.log(name + " says WOOF WOOF");
  } else {
    console.log(name + " says woof woof");
  }
}
```

1. when we call the `bark` function, the arguments are assigned to the parameter names.
2. and any time the parameters appear in the function, the values we passed in are used.

![calling-function](codesnap-functions\call-function.png)

[back to top](#functions)

### After call the function, the body of the function does all

After knowing the value for each parameter — `name` is “rover” and `weight` is 23 — then ready to execute the function body.

Statements in the function body are executed from top to bottom, just like all the other code. The only difference is that the parameter names `name` and `weight` have been assigned the values of the arguments you passed into the function.

![parameter](codesnap-functions\2-parameter-pass.png)

[back to top](#functions)

### And when it's done

The logic of the body has been carried out.

![function-completed](codesnap-functions\3-done.png)

Still confuse?

- : Each parameter acts like a variable throughout the body of the function. When you call the function, each value you pass in is assigned to a corresponding parameter.

And arguments are what?

- : That’s just another name for the values you pass into a function… they’re the arguments of the function call.

[back to top](#functions)

## What can you Pass to a function??

When you call a function you pass it arguments.

And those arguments then get matched up with the parameters in the function definition.

### any value as arguments (string, boolean, number)

Can pass pretty much any JavaScript value as an argument, like a string, a boolean, or a number:

![pass any value as an argument](codesnap-functions\pass-any-value.png)

[back to top](#functions)

### variables as arguments

Can also pass variables as arguments, and that’s often the more common case. Here’s the same function call using variables:

![pass variables as arguments](codesnap-functions\pass-variables.png)

[back to top](#functions)

### expressions as arguments

And, can even use expressions as arguments:

![pass expressions as arguments](codesnap-functions\pass-expression.png)

[back to top](#functions)

## Parameters vs. Arguments

What is the difference between a parameter and an argument — are they just two names for the same thing?

- **No, they’re different**

- When you define a function you can _define_ it with one or more _parameters_

![define function with parameters](codesnap-functions\parameters.png)

- When you call a function, you _call_ it with _arguments_:

![calling the function with arguments](codesnap-functions\arguments.png)

> So you’ll only define parameters once, but probably call your function with many different arguments.

[back to top](#functions)

## Pass By Value

> That means pass-by-copy.

JavaScript passes arguments to a function using _pass-by-value_.
Which mean that each argument is _copied_ into the parameter variable.

- 1. Let’s declare a variable age, and initialize it to the value 7.

```js
var age = 7;
```

![var age = 7](codesnap-functions\1-copy-arg.png)

- 2. Now let’s declare a function addOne, with a parameter named x, that adds 1 to the value of x.

```js
function addOne(x) {
  x = x + 1;
}
```

![parameter x](codesnap-functions\2-copy-arguments.png)

- 3. Now let’s call the function addOne, pass it the variable age as the argument. The value in age is copied into the parameter x.

```js
addOne(age);
```

![value in age is copied into the parameter x](codesnap-functions\3-copy-arguments.png)

- 4. Now the value of x is incremented by one. But remember x is a copy, so only x is incremented, not age.

```js
function addOne(x) {
  x = x + 1;    // incrementing x by one
}
```

![value x is incremented by one, but x is a copy and get incremented](codesnap-functions\4-copy-arguments.png)

**???:** when an argument is passed to a function its value is first _copied_ and then assigned to the corresponding parameter.

**real impact of pass-by-value**: any changes to a parameter’s value within the function will affect only the parameter, not the original variable passed to the function. But of course, there’s an exception to every rule.

> because of pass-by-value, whatever happens to a parameter in the function, stays in the functions

```js
function doIt(param) {
  param = 2;
}
var test = 1;
doIt(test);
console.log(test);
```

[back to top](#functions)

### EXPERIMENT #1: what happens when we don't pass enough arguments?

- each parameter that doesn’t have a matching argument is set to undefined.

```js
function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea);
}
makeTea(3);

// Brewing 3 cups of undefined
```

### EXPERIMENT #2: what happens when we pass too many arguments?

- JavaScript just ignores the extra.
- There's actually a way to get at the extra arguments, but we won't worry about that just now...

```js
function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea);
}
makeTea(3, "Earl Grey", "hey ma!", 42);

// Brewing 3 cups of Earl Grey
```

### EXPERIMENT #3: what happens when we have NO parameters?

- many functions have no parameters!

```js
function barkAtTheMoon() {
  console.log("Woooooooooooooo!");
}
barkAtTheMoon();

// Woooooooooooooo!
```

[back to top](#functions)

## The `return` Statement

Functions can return things too.

To communicate with your functions in one direction; that is, to pass arguments to functions.

But, a function can communicate back with `return` statement.

![return statement](codesnap-functions\return-statement.png)

Let's trace through a function call from start to finish to see what happens:

```js
function calculateArea(r) {
  var area;
  if (r <= 0) {
    return 0;
    } else {
      area = Math.PI * r * r;
      return area;
      }
}

var radius = 5.2;
var theArea = calculateArea(radius);
// or var theArea = calculateArea(5.2)

console.log("The area is: " + theArea);
```

![return statement](codesnap-functions\tracing-trough-func-return-statement.png)

[back to top](#functions)

### Anatomy of a Function

![Anatomy of a Function](codesnap-functions\anatomy-functions.png)

What does a function return if it doesn’t have a return statement?

- A function without a return statement returns `undefined`.

What happens if I use the same name for an argument variable as the parameter? Like if I use the name x for both?

- Changing the value of the parameter x does not change the value of the argument x.

[back to top](#functions)

## Local Variable Declarations

Declaring variables inside the function: these declarations work exactly the same within a function as they do outside a function.

However, the difference between a variable declared _outside a function_ and a variable declared _inside a function_ is where that variable can be used (i.e. where in your JS code you can reference the variable.)

- declared outside a function: can use it _anywhere_ in your code
- declared inside a function: can use it only _within_ that function.

Known as a variable's scope. Two kinds of scope: global and local.

[back to top](#functions)

### Variable Scope (global & local)

know the difference

![global variables vs. local variables](codesnap-functions\variables-scope.png)

variable name i: iteration (can use anything!)

Knowing the scope of local and global variables.

- Where you define your variables determines their scope; that is, where they’re visible to your code and where they aren’t.

![the scope of local and global variables](codesnap-functions\local-global-scope.png)

[back to top](#functions)

## Variable Scope

- Global variables

Globals live as long as the page. A global
variable begins life when its JavaScript is loaded
into the page.

- Local variables

Local variables _typically_ disappear when the function ends. They are created when your function is first called and live until the function returns (with a value or not).

_“typically”_ because there are some advanced ways to retain locals a little longer

[back to top](#functions)

### Declare your locals

If use a variable without declaring it first, that variable will be global.

![declare local variables](codesnap-functions\declare-local-var.png)

**????** if name a local variable the same as an existing global variable.

- local "shadow" the global

```js
var beanCounter = 10;   // this is global var

function getNumberOfItems(ordertype) {
  var beanCounter = 0;  // this is local var
  if (ordertype == "order") {
    // do some stuff with beanCounter...
    }
    return beanCounter;
}
```

- When doing this, any references to `beanCounter` within the function refer to the _local_ variable and NOT the _global_.
- can’t see the global variable because the local version.

> Note: that the local and global variables have no effect on each other: if you change one, it has no effect on the other. They are independent variables.

**????** where to declare our functions? Should just put them all at the top of JavaScript files?

- Can put your functions anywhere in JS file. JS doesn’t care if functions are declared before or after use them.

![function can be placed in anywhere](codesnap-functions/function-placement.png)

[back to top](#functions)

---
end
