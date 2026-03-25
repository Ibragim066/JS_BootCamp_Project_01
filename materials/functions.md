# Functions and Scope in JavaScript

In JavaScript, **functions** are fundamental building blocks.\
They can be defined, invoked, and passed as arguments to other functions.

JavaScript provides several ways to create functions:

**1. Function Declaration**

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5
```

A function declaration creates a function object.\
Each time the function is called, it returns a value specified by the return statement, or `undefined` if none is provided.

**2. Function Expression**

```javascript
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(2, 3));  // Output: 6
```

The main difference between expressions and declarations is that function expressions can be **anonymous** (unnamed), allowing for inline use.

**3. Arrow Function**

```javascript
const divide = (a, b) => a / b;

console.log(divide(6, 2));  // Output: 3
```

Arrow functions offer a shorter syntax and do **not** bind their own this.

**4. Immediately Invoked Function Expression (IIFE)**

```javascript
(function hello() {
  console.log('Hello!');
})();

```

This type of function is executed **immediately after it's defined**.

**Callback Functions and Higher-Order Functions**

- A **callback function** is a function passed as an argument to another function and executed inside that function.
- A **higher-order function** is a function that accepts another function as an argument or returns a function.

```javascript
const value = 1;

function doCallback(callbackFn, num) {

    return callbackFn(num);
}

function add(num) {
    return value + num;
}

const result = doCallback(add, 10);

console.log(result); // 11

```

In this example, `doCallback` receives a reference to add as the first argument and invokes it with the second argument.

**Scope**

A **scope** is the current execution context in which values and expressions are "visible" or accessible.\
If a variable or expression isn’t defined within the current scope, it can't be used.

Scopes can be **nested** — child scopes have access to their parents, but not vice versa.

JavaScript supports the following types of scope:

1. **Global scope** — the default scope for script-level code
1. **Module scope** — scope within an ES6 module
1. **Function scope** — created by a function
1. **Block scope** — created by `{}` braces (e.g., in if, for, let, const)
Functions create their own scope.\
A variable defined inside a function is not accessible outside of it or inside other functions.\
However, a function can retain access to its outer variables even after the outer function has finished — this is called a **closure**.

We say that the variable is **captured**, and the function **closes over** that variable.

```javascript
function outer() {
  var outerVariable = 'Внешняя переменная';

  function inner() {
    console.log(outerVariable);  // Closure: access to outer variable
  }

  return inner;
}

var closureFunction = outer();
closureFunction();  // Output: "Outer variable"
```