# Program Entry Point and Structure

In most programming languages, execution starts with a special function, such as main in C/C++.\
In JavaScript, however, no such function is required — code is executed **as it is read**.\
The **entry point** in JavaScript is simply the beginning of the code.

JavaScript programs are executed **line by line**.\
If the program includes more than one statement, they are executed in sequence from top to bottom — as if following a story.\
This mechanism is called the **control flow**.

However, not all programs are strictly linear.\
For instance, you might want to implement a **branching path**, where the program takes different actions depending on the situation.\
This is known as **conditional execution**.

JavaScript programs are composed of a **sequence of statements**, just like a paragraph is made up of sentences.\
Where sentences end in a period, JavaScript statements typically end in a **semicolon (;)** — although semicolons can sometimes be omitted.

**Example of a single statement**

```javascript

const now = new Date();
 ```
**Multiple statements on the same line must be separated by semicolons:**

```javascript

const now = new Date(); console.log(now);
 ```

**If statements are written on separate lines, semicolons are optional:**

```javascript

const now = new Date()
console.log(now)
 ```


Still, it's a widely accepted best practice to always include semicolons — regardless of line breaks — to reduce the risk of errors.

**In for loops, semicolons are required between the initialization, condition, and increment expressions:**

```javascript
for (initialization; condition; increment) {
 // code
}
 ```

**Semicolons are not used after block-level statements such as `if`, `for`, `do`, `while`, `class`, `switch`, or `function`.**

These block statements are enclosed in **curly braces {}**:

```javascript

function square(number) {
 return Math.pow(number, 2);
}

if (number > 0) {
 square(number);
}

const objectName = {};

const triangle = {
 type: "right",
 angle: 90,
 sides: 3,
};

 ```

**Technically, a complete JavaScript program can be written on a single line.**

However, this quickly becomes unreadable and hard to maintain.\
Instead, **line breaks and indentation** are used to improve clarity:

```javascript

if (x === 1) { /* execute code if true */ } else { /* execute code if false */ }

if (x === 1) {
 // execute code if true
} else {
 // execute code if false
}
 ```
