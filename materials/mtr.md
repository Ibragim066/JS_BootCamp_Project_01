# Topics

- **Data types**: types.md
- **Memory management**: memory.md
- **Functions and scope**: functions.md
- **Control structures**: management\_structures.md
- **Input/output**: stdio.md
- **Compilation and interpretation**: interpretation.md
- **Program entry point and structure**: entry\_point.md
- **Exception handling**: exceptions.md
- **Document Object Model (DOM)**: dom.md
- **Specification**: specification.md

# Methodological Notes for Tasks

## Task 1. Creating a range

The range is represented as an array of numbers.\
Inside the function, an empty array is created.\
Then, using any loop structure, you iterate from the start to the end of the range, adding numbers to the array.\
Finally, return the filled array.

## Task 2. Finding two numbers that sum to a target

Start by creating a dictionary using an object or a Map.\
Use the current number as the key and its index as the value.

Iterate over the array. Inside the loop:

- Create a temporary variable that stores the difference between the target sum and the current number.
- If the dictionary contains this difference as a key, return a tuple:\
  the value from the dictionary (index of the matching number),\
  and the current index.
- If not, store the current number as a key and its index as the value.

#### Example

Given the array [1,2,3,4,5,6] and target sum = 6:

1. 6 - 1 = 5 → not in map → add {1: 0}
1. 6 - 2 = 4 → not in map → add {2: 1}
1. 6 - 3 = 3 → not in map → add {3: 2}
1. 6 - 4 = 2 → found in map → return [1, 3]

## Task 3. Finding the GCD

The **Euclidean algorithm** is used to find the **greatest common divisor (GCD)** of two non-negative integers.\
The GCD is the largest number that divides both numbers without a remainder.\
The algorithm is named after the ancient Greek mathematician **Euclid**.

$`GCD(a,b)=GCD(b,a mod (b))`$

The mod operation repeats until b = 0. When this happens, the current value of a is the GCD.

### Example

Find GCD of 48 and 18:

1. a = 48, b = 18
1. a = 18, b = 48 % 18 = 12
1. a = 12, b = 18 % 12 = 6
1. a = 6, b = 12 % 6 = 0 → done → GCD = 6

#### Steps

1. If $`b == 0`$, then $`GCD(a, b) = a`$
1. Otherwise:\
   a ← b\
   b ← a mod b\
   Repeat from step 1

## Task 4. Finding prime numbers

The **Sieve of Eratosthenes** is an algorithm for finding all prime numbers up to a given integer **n**.\
It eliminates composite numbers by iterative filtering.\
This method is attributed to the Greek mathematician **Eratosthenes of Cyrene**.

### Algorithm

1. Start with a pointer at the base number, initially 2.
1. Remove all multiples of the current base number.
1. Move to the next remaining number.
1. Repeat steps 2–3 until the end of the list.
1. Return the array of prime numbers.

#### Example

Input:\
[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

- Remove multiples of 2 → [2,3,5,7,9,11,13,15,17,19]
- Remove multiples of 3 → [2,3,5,7,11,13,17,19]
- Remove multiples of 5 → same array
- Final result: [2,3,5,7,11,13,17,19]

## Task 5. Scheduled meeting

Define a start and end time for the workday.\
Both times are in 24-hour format `hh:mm`.\
Extract hours and minutes from the input string using regex or string methods, then work with numeric values.

#### Example:

Workday: 08:00 – 18:00\
Meeting: starts at 10:00, duration = 120 min → ends at 12:00\
Result: `false` (meeting exceeds working hours)

## Task 6. Caesar cipher

The **Caesar cipher (or shift cipher)** is a simple encryption method where each letter is replaced by another letter a fixed number of positions down the alphabet.\
Named after **Gaius Julius Caesar**, who reportedly used it for private correspondence.

In this task, each character is not mapped to one character but to **multiple characters**.

#### Example

Input string: abc\
Replacement rules:

- a = bc,
- b = ac,
- c = ab\
  Number of transformations: 2
1. abc → bcacab
1. bcacab → acabbcabbcac\
   **Answer:** acabbcabbcac

## Task 7. Moving average

The **Simple Moving Average (SMA)** is calculated as the arithmetic mean of values over a fixed period n.

**Formula:**

$`SMA_t = \frac{1}{n} \displaystyle\sum_{i=0}^{n-1} p_{t-i} = \frac{p_t + p_{t-1} + ... + p_{t-i} + ... + p_{t - n +2} + p_{t - n + 1}}{n},`$

Where:

- SMA\_t is the average at point t
- n is the period
- p\_{t-i} is the value at point t-i

You must implement a function that computes the SMA while handling edge cases at the start of the array.

#### Example

Input: arr = [1, 2, 3, 4], n = 3

arr[0] = 1 / 3       → 0.333  

arr[1] = (1 + 2) / 3 → 1  

arr[2] = (1 + 2 + 3) / 3 → 2  

arr[3] = (2 + 3 + 4) / 3 → 3  

**Answer:** [0.333, 1, 2, 3]

## Task 8. Merge sort

**Merge sort** is an efficient and stable sorting algorithm that uses the **divide and conquer** strategy.\
It splits the array in half, recursively sorts each half, and then merges them.

### Algorithm

1. Split the input array into two halves
1. Recursively apply merge sort to each half
1. Merge the two sorted halves into a temporary array
1. Replace the original array with the sorted one

#### Example

Input: [38, 27, 43, 3, 9, 82, 10]

1. Split into [38, 27, 43] and [3, 9, 82, 10]
1. Sort halves → [27, 38, 43] and [3, 9, 10, 82]
1. Merge → [3, 9, 10, 27, 38, 43, 82]
1. Output: [3, 9, 10, 27, 38, 43, 82]

## Task 9. Binary search

**Binary search** is an efficient algorithm for finding elements in a sorted array.\
It uses the **divide and conquer** approach.

### Algorithm

1. Set two pointers: left and right, to the bounds of the array
1. Compute the midpoint:\
   $`pivot = \frac{left + right}{2}`$
1. Compare the pivot element to the target:
   1. If equal → return index
   1. If greater → search left half
   1. If smaller → search right half
1. Repeat until the target is found or the search space is empty

#### Example

Search for 43 in [3, 9, 10, 27, 38, 43, 82]:

1. left = 0, right = 6
1. pivot = 3 → value = 27
1. 27 < 43 → update left
1. New pivot = 5 → value = 43
1. $`43 \equiv 43`$.
1. Match → return index 5

## Task 10. Longest sequence of zeroes

This algorithm finds the longest contiguous sequence of zeroes in an array or string.

### Algorithm

1. Create two counters:
   1. currentCount — for current sequence
   1. maxCount — for the longest found so far
1. Iterate over each element
1. If the element is 0, increment currentCount
1. If it’s not, reset currentCount to 0
1. After each step, check if currentCount > maxCount — if so, update maxCount
1. After iteration, maxCount holds the final result

#### Example

Input: "1000100100001"

- max sequence of zeroes: **4**

**Answer:** 4

