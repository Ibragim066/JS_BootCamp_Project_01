# Compilation / Interpretation

JavaScript is both an interpreted and a compiled programming language. It runs inside web browsers or on the server using a runtime environment such as Node.js.

The following steps can be identified:

**1. Parsing**

The browser receives the JavaScript source code.\
During the **parsing phase**, the source code is broken down into **tokens** (lexical analysis) and a **syntax tree** is built (syntactic analysis).

**2. Interpretation**

The browser’s interpreter (or JavaScript engine, like **V8** in Chrome) executes the code produced during parsing.\
The interpreter runs the instructions step by step, converting them to machine code on the fly.

**Bytecode compilation (optional):**\
Some JavaScript engines, such as V8, introduce an intermediate compilation step into **bytecode** before executing machine code.\
This bytecode may be cached and reused to improve performance.

**Runtime optimization (optional):**\
Some JavaScript engines perform **runtime optimizations**, adapting to the behavior of the executed code.\
Examples include **function inlining**, **loop unrolling**, and other techniques.

**3. Execution**

The compiled or interpreted code is executed in the order defined in the source code.\
During execution, events may occur such as function calls, event handling, DOM manipulation, etc.

**4. Garbage Collection**

During execution, the JavaScript environment manages memory, freeing up resources that are no longer in use.\
The **garbage collector** deletes objects that are no longer referenced, reclaiming memory.

**5. Error Handling**

If an error occurs, the interpreter throws an exception.\
**Error handlers** can be set up to prevent the program from crashing.

**6. End of Execution**

The program finishes executing when all code has been run or when execution is terminated explicitly.

## Optimization Strategies

Modern JavaScript engines implement a variety of **optimization strategies** to improve runtime performance.\
These optimizations happen dynamically, at runtime.

**Just-in-Time (JIT) Compilation**

JIT is a process in which JavaScript code is compiled into machine code just before it is executed.\
It combines **interpretation and compilation** to boost the performance of web applications.\
This method compiles the entire code to machine code and executes it simultaneously.

**Inlining**

Inlining is another optimization technique used to boost speed and performance.\
Here’s an example:

```javascript
function add(a, b) {
  return a + b;
}

let result = 0;
result = result + 5;
result = result + 3;

console.log(result); //
```

In this snippet, the `add()` function is not explicitly called.\
Instead, the engine may **inline** the function — that is, replace the function call with the actual code from the function body: `a + b`.

This is especially useful for functions that are called frequently.\
Rather than incurring the overhead of calling the function multiple times, the JavaScript engine substitutes the call with its actual logic — improving performance by eliminating redundant calls.

