# Project 01 — JavaScript\_Bootcamp

  - [Chapter I](#chapter-i)
  - [Task 0. Creating a Project](#task-0-creating-a-project)
  - [Task 1. Creating a Range](#task-1-creating-a-range)
  - [Task 2. Finding Two Numbers That Add Up to a Given Sum](#task-2-finding-two-numbers-that-add-up-to-a-given-sum)
  - [Task 3. Finding the GCD](#task-3-finding-the-gcd)
  - [Task 4. Finding Prime Numbers](#task-4-finding-prime-numbers)
  - [Task 5. Scheduled Meeting](#task-5-scheduled-meeting)
  - [Task 6. Caesar Cipher](#task-6-caesar-cipher)
  - [Task 7. Simple Moving Average](#task-7-simple-moving-average)
  - [Task 8. Merge Sort](#task-8-merge-sort)
  - [Task 9. Binary Search](#task-9-binary-search)
  - [Task 10. Finding the Longest Sequence of Zeros](#task-10-finding-the-longest-sequence-of-zeros)

## Chapter I

## Task 0. Creating a Project

To run the script files, you'll need any browser and any integrated development environment (IDE).
For example, in this guide, we'll be using **Chrome** as the browser and **Visual Studio Code** as the IDE.

1. Inside the `src` directory, create a folder for the project.
1. Create an HTML file (index.html) and fill it with the following basic structure:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript introduction</title>
</head>
<body>
    
</body>
</html>

```

3. Inside the directory, create a basic script file (`javascript-introduction/src/script.js`) and add the following content:

javascript

console.log(`%c${document.title} says to you Hello!`, 'background-color: yellow; font-size: larger');

4. To run the script file, connect it to the HTML file by adding the `<script src="src/script.js"></script>` tag **above** the closing `</head>` tag:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript introduction</title>
    <script src="src/script.js"></script>
</head>
<body></body>
</html>

```

5. To view the result, open the browser's developer tools:
- Press the **`F12`** key.
- Or right-click anywhere on the page and select **`"Inspect"`** from the context menu.

## Task 1. Creating a Range

Complete the range function that generates a range of natural whole numbers.

- The function takes two arguments:
  the first — the starting number of the range,
  the second — the ending number of the range.
- The function returns the result as an array of the generated numbers.
- It is guaranteed that the arguments will be zero or positive integers.

```javascript

function range(start, end) {
    // Твой код
}

```

|**Input**|**Output**|
|--------------------------------------------------------------|-------------------|
|  0 5                                                         | [0,1,2,3,4,5]     |
|  3 3                                                         | [3]               |
|  8 0                                                         | []                |
|  0 0                                                         | [0]               |

## Task 2. Finding two numbers that sum to a target

Write a function that takes an array of natural integers as the first argument and a target number as the second argument — a sum that can potentially be formed by adding some of the numbers from the array.

- The function should return an array with the two indices of the numbers that make up the target sum.
  If no such pair exists, the function should return null.
- The sum can be formed by **any combination** of numbers in the array.
- It is guaranteed that the array will contain more than one element.

```javascript

function getNumbersIdBySum(arrayOfNumbers, sum) {
    // Твой код
}

```

|**Input**|**Output**|
|--------------------------------------------------------------|-------------------|
|  [1,2,3,4,5]  6                                              | [0, 4] / [1, 3]   |
|  [1,0,5] 2                                                   | null              |
|  [1, 0] 1                                                    | [0, 1]            |
|  [1,2,3,4,5] 0                                               | null              |


## Task 3. Finding the GCD

Write a function that finds the Greatest Common Divisor (GCD) of two non-negative natural integers passed as the first and second parameters, using **Euclid’s algorithm**.

```javascript

function getNOD(first, second) {
    // Твой код
}

```

|**Input**|**Output**|
|--------------------------------------------------------------|-------------------|
|  3 6                                                         | 3                 |
|  0 2                                                         | 2                 |
|  5 5                                                         | 5                 |
|  1 3                                                         | 1                 |
|  0 0                                                         | 0                 |

## Task 4. Finding Prime Numbers 

Write a function that finds all natural prime integers using the **Sieve of Eratosthenes** algorithm.

- The function takes a tuple as its argument, where the first element is the start of the range (no less than 2), and the second is the end of the range (also no less than 2).
- The function returns a new array of prime numbers.

```javascript

function getSimpleNumbers(touple) {
    // Твой код
}

```

|**Input**|**Output**|
|--------------------------------------------------------------|-------------------|
|  [2, 10]                                                     | [2, 3, 5, 7]      |
|  [2, 2]                                                      | [2]               |


## Task 5. Scheduled Meeting

Write a function that receives a meeting start time in 24-hour format as the first argument (as a string), and the meeting duration in minutes as the second argument.

- The function should return true if the meeting falls entirely within the working day.
  If the meeting exceeds working hours, return false.
- Working hours are defined arbitrarily as follows:

```javascript

const dayStart = "07:30" // начало дня
const dayEnd = "17:45" // конец дня;

function scheduleMeeting(startTime, durationMinutes) {
    // Твой код
}

```

|**Input**|**Output**|
|--------------------------------------------------------------|-------------------|
|  "07:30" 15                                                  | true              |
|  "07:15" 30                                                  | false             |
|  "7:30"  30                                                  | true              |
|  "11:30" 60                                                  | true              |
|  "17:00" 45                                                  | true              |
|  "17:30" 30                                                  | false             |
|  "18:00" 15                                                  | false             |


## Task 6. Caesar Cipher

There is an alphabet consisting of: a, b, c, d, e, f.
Each character from the alphabet can be replaced according to the following rule:
a = def, b = efc, c = abe, d = cba, e = fba, f = dcb.

Write a function that takes a string (consisting of this alphabet) as the first argument and a number (how many times to apply the transformation) as the second.

- The function returns the string after applying the transformations.

```javascript


function alphabetMap(rawString, mapCount) {
    // Твой код
}

```

|**Input**|**Output**|
|--------------------------------------------------------------|-------------------|
|  "abcdef" 1                                                  |defefcabecbafbadcb |
|  "aa" 2                                                      |cbafbadcbcbafbadcb |
|  "bad"  1                                                    |efcdefcba          |

## Task 7. Simple Moving Average

Write a function to calculate the simple moving average.

- The first argument is an array of non-negative integers.
- The second argument is the period n to be considered, where n > 0.
- The function should return an array of simple moving averages at each point.
- When a shorter period n' < n is encountered, only the available elements should be used in the average.

```javascript


function sma(arrayOfNumbers, period) {
    // Твой код
}

```

|**Input**|**Output**|
|--------------------------------------------------------------|-------------------|
|  [1,2,3] 3                                                   | [0.333, 1 ,2]     |
|  [1,2,3] 1                                                   | [1,2,3]           |
|  [1,2,3] 2                                                   | [0.5, 1.5, 2.5]   |


## Task 8. Merge Sort

Implement merge sort.

- The function takes an array of numbers as an argument.

```javascript


function mergeSort(arrayOfNumbers) {
    // Твой код
}

```

|**Input**|**Output**|
|--------------------------------------------------------------|-------------------------|
|  [38, 27, 43, 3, 9, 82]                                      | [3, 9, 27, 38, 43, 82]  |
|  [13, 45, 2, 11, 23, 17]                                     | [2, 11, 13, 17, 23, 45] |
|  [90, 24, 15, 2, 7, 40]                                      | [2, 7, 15, 24, 40, 90]  |

## Task 9. Binary Search

Write a function for binary search of an element in a sorted array.

- The first argument is an array of numbers.
- The second argument is the number to find.
- The function returns the index of the number.

```javascript


function binarySearch(arrayOfNumbers, num) {
    // Твой код
}

```

|**Input**|**Output**|
|--------------------------------------------------------------|-------------------------|
|  [1, 2, 3, 4, 5, 6], 4                                       | 3                       |
|  [2, 4, 6, 8, 10], 8                                         | 3                       |
|  [-10, -5, 0, 5, 10], 0                                      | 2                       |


## Task 10. Finding the Longest Sequence of Zeros

Write a function that takes a string of 0s and 1s and returns the length of the longest sequence of 0s.

```javascript


function getMaxZeroCount(raw) {
    // Твой код
}

```

|**Input**|**Output**|
|--------------------------------------------------------------|-------------------------|
|  "1010010001"                                                | 3                       |
|  "100100100"                                                 | 2                       |
|  "11111"                                                     | 0                       |
