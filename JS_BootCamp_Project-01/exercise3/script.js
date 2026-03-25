function getNOD(first, second) {
    while(second) {
        let remainder = first % second;
        first = second;
        second = remainder;
    }

    return first;
}

console.log(getNOD(3, 6));