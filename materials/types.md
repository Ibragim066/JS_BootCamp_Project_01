# Data Types in JavaScript

JavaScript includes several fundamental data types, which are typically divided into **primitive** and **object** types.

**Primitive Types**

**Primitive types** are those that represent a single, immutable value. The main primitive types in JavaScript include:

- **Number** — a 64-bit floating-point numeric type.\
  Unlike some other languages, JavaScript uses a single Number type for both integers and floating-point values.

```javascript
let integerNumber = 42;
let floatNumber = 3.14;
```

- **String** — a sequence of characters used to represent text.\
  Strings in JavaScript may contain letters, digits, special symbols, and Unicode characters.

```javascript
let greeting = "Hello, World!";
```

- **Boolean** — a logical type that can be either true or false.\
  Used in logical operations and conditional expressions.

```javascript
let isTrue = true;
let isFalse = false;
```

- **Undefined** — automatically assigned to variables that have been declared but not initialized,\
  or to function arguments that were not provided.

```javascript
let undefinedValue;
```

- **BigInt** — used to represent arbitrarily large integers beyond the limits of the Number type.

```javascript
let bigInteger = BigInt(9007199254740991);
```

- **Symbol** — a type representing unique and immutable values.\
  Commonly used to create unique keys for object properties.

```javascript
let uniqueSymbol = Symbol("unique");
```

- **Null** — an intentional absence of any object value; often used to indicate "empty" or "unknown."

```javascript
let emptyValue = null;
```

Primitive values are **immutable**, meaning their content cannot be changed — they can only be replaced with a new value.

**Object Types**

Objects in JavaScript represent more complex data structures and entities.\
They can contain properties (fields) and methods (functions).

- **Object** — the base object type; an unordered collection of key–value pairs.

```javascript
let person = {
  name: "John",
  age: 30,
  gender: "male"
};
```

- **Array** — a special kind of object that stores ordered collections of values.

```javascript
let fruits = ["apple", "banana", "orange"];
```

- **Function** — a callable object used to define reusable code blocks.

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}
```

- **Date** — an object for handling dates and times.

```javascript
let currentDate = new Date();
```

- **RegExp** — an object for working with regular expressions.

```javascript
let pattern = /[a-z]+/;
let pattern2 = new RegExp(/[A-z]+/);
```

- **Map** — a collection of key–value pairs where keys and values can be of any type.

```javascript
let carDetails = new Map();
carDetails.set("brand", "Toyota");
carDetails.set("model", "Camry");
```

- **Set** — a collection of **unique values** of any type.

```javascript
let uniqueNumbers = new Set([1, 2, 3, 3, 4, 5]);
```

- **Promise** — represents the eventual result of an asynchronous operation.

```javascript
let fetchData = new Promise((resolve, reject) => {
  // asyns code
});
```

- **Symbol** — (duplicate mention) also considered a primitive type, but used heavily with objects for unique identifiers.
