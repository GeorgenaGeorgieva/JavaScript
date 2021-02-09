function solve(array) {
    let max = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < array.length; row++) {

        let maxInCurrent = array[row].sort((a, b) => Number(b - a)).slice(0, 1);
        if (maxInCurrent[0] > max) {
            max = maxInCurrent[0];
        }
    }

    return max;
}

console.log(solve([
    [20, 50, 10],
    [8, 33, 145]
]));

console.log(solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]));