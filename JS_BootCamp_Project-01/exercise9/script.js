"use strict";
// Бинарный поиск
function binarySearch(arrayOfNumbers, num) {
    let low = 0;
    let high = arrayOfNumbers.length - 1;

    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = arrayOfNumbers[mid];

        if(guess === num) {
            return mid;
        } else if(guess > num) {
            high = mid - 1
        } else {
            low = mid + 1;
        }
    }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));