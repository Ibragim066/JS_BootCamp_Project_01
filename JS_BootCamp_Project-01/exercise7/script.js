// Скользящее среднее
function sma(arrayOfNumbers, period) {
    const result = [];

    for(let i = 0; i < arrayOfNumbers.length; i++) {
        const start = Math.max(0, i - period + 1);

        let sum = 0;

        for(let j = start; j <= i; j++) {
            sum += arrayOfNumbers[j];
        }

        const average = sum / period;
        result.push(average);
    }

    return result;
} 

console.log(sma([1,2,3], 3));