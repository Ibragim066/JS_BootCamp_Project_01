# Memory Management in JavaScript

In JavaScript, memory management is mostly automatic — however, there are still some techniques for manual control.

JavaScript includes a **Garbage Collection (GC)** mechanism that automatically tracks and removes objects that are no longer used or referenced.\
Garbage collection runs periodically, and its algorithms are optimized for efficient memory release.

However, issues can arise with **circular references** — for example, when object A references object B, and B references A.\
In such cases, it's important to explicitly nullify references or use **weak references** (WeakMap, WeakSet) to avoid memory leaks.

## Garbage Collection Techniques

Garbage collectors use several internal strategies, including:

**Reference Counting**

Counts how many references point to an object.\
When the count reaches zero, the object is destroyed.\
This method is not effective for detecting circular references.

**Mark-and-Sweep**

The most common approach.\
The GC marks all objects reachable from the **root node** (global objects, call stack, closures) as active.\
Then, it removes all unmarked (inaccessible) objects.\
This method **handles circular references** effectively.

## Local Memory Management

- The delete operator can be used to remove **object properties**.\
  However, it does **not free memory** — it only deletes the key-value pair.\
  Avoid using delete for variables — it's not effective or recommended.
- Assigning null or undefined to a variable is a way to manually signal that the object is no longer needed.
- It is technically possible to trigger garbage collection manually, but in practice this is unnecessary and unreliable.\
  The engine decides when to run GC.

## Memory Lifecycle

When a variable is declared or a function is created, memory goes through three phases:

1. **Allocation** — memory is allocated for the created object or value
1. **Usage** — the program reads from and writes to this memory
1. **Release** — memory is freed when it’s no longer needed and can be reused for other operations
**Where Data Lives**

JavaScript stores data in different locations depending on the type and scope:

## Static Memory Allocation (Call Stack)

The **call stack** holds execution contexts for functions.\
When a function is called, its context (including local variables and parameters) is added to the top of the stack.\
Once the function completes, the context is removed.\
This memory is temporary and tied to function execution.

## Dynamic Memory Allocation (Heap)

The **heap** is used for long-lived data like objects and arrays.\
Objects created during program execution are stored in the heap.\
Garbage collection frees heap memory when those objects are no longer needed.

Unlike the stack, the engine cannot predict how much memory each object will need —\
so memory is allocated dynamically as needed.

## Common Causes of Memory Leaks

Memory leaks are one of the more frustrating bugs in development.\
Knowing the most common causes can help avoid them.

## Global Variables

Leaks often happen due to unintentional storage in global variables.\
In browsers, using var in the global scope attaches the variable to the window object.\
The same goes for globally defined functions.

```javascript
user = getUser();
var secondUser = getUser();
function getUser() {
  return 'user';
}

// All three are attached to `window`
```

**Fix:** use strict mode and let / const:

```javascript
'use strict';
user = getUser();
var secondUser = getUser();
function getUser() {
  return 'user';
}
// All three are attached to `window`
```

## Callbacks and Timers

Single-page applications (SPAs) or dynamic UIs often rely on timers and callbacks —\
forgetting to clear them can prevent GC from cleaning up objects.

```javascript
const object = {};
const intervalId = setInterval(function() {
  // GC can't clean up `object` while this interval exists
  doSomething(object);
}, 2000);
// This interval must be cleared
clearInterval(intervalId);
```

Not removing event listeners on DOM elements that are later removed can also cause leaks.

```javascript
const element = document.getElementById('button');
const onClick = () => alert('hi');
element.addEventListener('click', onClick);
//element.removeEventListener('click', onClick);
element.parentNode.removeChild(element);
```

Even after the button is removed, its onClick handler remains in memory —\
remove the event listener explicitly to prevent leaks.

## DOM Elements Stored in Arrays

Storing DOM elements in variables or arrays and not removing them can cause similar problems.

```javascript
const elements = [];
const element = document.getElementById('button');
elements.push(element);
function removeAllElements() {
  elements.forEach((item) => {
    document.body.removeChild(document.getElementById(item.id));
  });
}
```

Better:

```javascript
const elements = [];
const element = document.getElementById('button');
elements.push(element);
function removeAllElements() {
  elements.forEach((item, index) => {
    document.body.removeChild(document.getElementById(item.id));
    elements.splice(index, 1);
  });
}
```
