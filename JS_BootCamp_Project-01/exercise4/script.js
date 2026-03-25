function getSimpleNumbers(touple) {
    const start = touple[0];
    const end = touple[1];

    const arr = new Array(end + 1).fill(true);
    arr[0] = false;
    arr[1] = false;

    for(let i = 2; i * i <= end; i++) {
        if(arr[i] === true) {
            for (let j = i * i; j <= end; j += i) {
                arr[j] = false;
            }
        }
    }

    let res = [];
    for(let i = start; i <= end; i++) {
        if(arr[i] === true) res.push(i);
    }

    return res;
}

console.log(getSimpleNumbers([2, 2]));