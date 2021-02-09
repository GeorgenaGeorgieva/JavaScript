function solve(length, elements) {
    let array = [1];

    for (let current = 1; current < length; current++) {
        let startsFrom = Math.max(0, current - elements);
        let temp = array.slice(startsFrom, length);
        let sum = temp.reduce((a, b) => a + b, 0);
        array[current] = sum;
    }

    return array.join(' ');
}

console.log(solve(8, 2));
console.log(solve(6, 3));