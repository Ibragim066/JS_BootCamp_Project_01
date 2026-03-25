# Input/Output Handling

To handle input and output in the browser, external application interfaces are used.\
For example, the **Console API** is provided as a built-in object that gives access to the developer console.\
The specifics of how it works may vary between browsers or server-side environments at runtime.

The most commonly used feature of the console is logging text and other data.\
There are several output categories you can use via methods like:

- `console.log()`
- `console.info()`
- `console.warn()`
- `console.error()`
- `console.debug()`

Each of these methods produces output with different formatting in the browser’s console,\
and you can use your browser’s filtering tools to view only the output types that interest you.

There are two main ways to use each of these console output methods:

1. Pass a list of objects — their string representations are concatenated into a single string and printed to the console.
1. Pass a format string with zero or more **substitution patterns**, followed by a list of objects to insert into those placeholders.

## Examples

**1. console.log()**

Logs a message to the console.\
The message can be a plain string (optionally with substitution patterns) or one or more JavaScript objects.

```javascript
console.log('Hello!')
```

**2. Logging an object**

```javascript
const someObject = { str: "Some text", id: 5 };
console.log(someObject);

// {str:"Some text", id:5}

```

**3. Logging multiple objects**

```javascript
const car = "Dodge Charger";
const someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", someObject);

// My first car was a Dodge Charger. The object is: {str:"Some text", id:5}

```