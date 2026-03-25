# Exception Handling

In JavaScript, error handling is implemented through the **exception mechanism**.\
Exceptions occur when code encounters an error or an unexpected condition.\
When this happens, execution is interrupted and the error is logged in the console.

To handle exceptions, the language provides the following constructs: try, catch, throw, and finally.

**1. try...catch**

This construct consists of two main blocks: `try` and `catch`.

```javascript
try {
    // Code
} catch (err) { // <- Error object
    // Exception handling
} finally {
    // Code that runs regardless of error
}
```

**How it works:**

1. The code inside the try { ... } block is executed first.
1. If no errors occur, the catch(err) block is skipped entirely — execution continues past the end of try.
1. If an error occurs, execution of try is halted, and control jumps to the beginning of the catch(err) block.

The variable err (you can name it anything) contains the **error object**, which provides detailed information about what went wrong.

The code inside the `finally` block is always executed, **regardless of whether an error occurred or not**.

**2. Throwing custom errors**

The throw statement allows you to create your own exceptions.

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

try {
  console.log(divide(10, 2));  
  console.log(divide(10, 0));  Error: division by zero
} catch (error) {
  console.error(error.message);
}
```

In the example above, if the second parameter is 0, we throw an exception using the `throw` keyword.\
An Error object is created with a custom message, which we can handle inside the `catch` block.

