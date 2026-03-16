// Шифр Цезаря
function alphabetMap(rawString, mapCount) {
    const rules = {
        'a': 'def',
        'b': 'efc',
        'c': 'abe',
        'd': 'cba',
        'e': 'fba',
        'f': 'dcb',
    }

    let result = rawString;

    for(let i = 0; i < mapCount; i++) {
        let newStr = "";
        for(let char of result) {
            newStr += rules[char];
        }
        result = newStr;
    }

    return result;
}

console.log(alphabetMap("bad", 1));