// Поиск наибольшей последовательности нулей
function getMaxZeroCount(raw) {
    let curScore = 0;
    let rekord = 0;

    for(let i = 0; i < raw.length; i++) {
        if(raw[i] === '0') {
            curScore++;
        } else if(raw[i] === '1') {
            if(curScore > rekord) {
                rekord = curScore;
            }
            curScore = 0;
        }
    }

    if(curScore > rekord) {
        rekord = curScore;
    }

    return rekord;
}

console.log(getMaxZeroCount("101001000"));