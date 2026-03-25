# Control Structures in JavaScript

In JavaScript, **control structures** are used to manage the flow of execution.\
These include **conditional statements** (if, else, switch) and **loops** (for, while, do-while), among others.\
Writing programs using control structures is referred to as **conditional execution**.

**1. if, else**

```javascript
let x = 10;

if (x > 0) {
  console.log('Positive number');
} else if (x === 0) {
  console.log('Zero');
} else {
  console.log('Negative number');
}

```

**2. for**

The for loop is used to repeat a block of code a specified number of times.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

```

**3. while**

The while loop executes as long as the condition evaluates to true.

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

```

**4. do-while**

The do-while loop ensures that the block runs at least once, even if the condition is false.

```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);

```

**5. switch**

```javascript
let day = 'Monday';

switch (day) {
  case 'Monday':
    console.log('Monday');
    break;
  case 'Tuesday':
    console.log('Tuesday');
    break;
  default:
    console.log('Other day');
}


```

## Flow Control Statements**

**1. break**

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;  // Terminates the loop
  }
  console.log(i);
}

```

**2. continue**

Skips the current iteration and proceeds to the next.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;  // Skip this iteration.
  }
  console.log(i);
}


```

**3. return**

Exits a function and optionally returns a value.

```javascript

function getFirstNum() {

for (let i = 0; i < 10; i++) {
    if (i === 0) {
        return 1;  // Exits the loop and returns 1

    }
  }
}


```
