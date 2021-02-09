function solve(array) {
    let sumFirstRow = 0;
    let sumCol = 0;
    let sumRow = 0;

    for (let r = 0; r < array.length; r++) {

        sumRow = array[r].reduce((a, b) => Number(a + b));

        if (r === 0) {
            sumFirstRow = sumRow;
        }

        if (sumFirstRow !== sumRow) {
            return false;
        }

        for (let c = 0; c < array.length; c++) {
            sumCol += Number(array[c][r]);
        }

        if (sumFirstRow !== sumCol) {
            return false;
        }

        sumCol = 0;
    }

    return true;
}

console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));

console.log(solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));

console.log(solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]));