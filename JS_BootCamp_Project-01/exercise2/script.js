function getNumbersIdBySum(arrayOfNumbers, sum) {
    const objIndx = new Map();
    
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const needNum = sum - arrayOfNumbers[i];
        
        if (objIndx.has(needNum)) {
            return [objIndx.get(needNum), i];
        }
        
        objIndx.set(arrayOfNumbers[i], i);
    }
    
    return null;
}

console.log(getNumbersIdBySum([1, 2, 3, 4, 5], 6))

