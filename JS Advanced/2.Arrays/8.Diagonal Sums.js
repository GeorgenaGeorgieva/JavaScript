function solve(array) {
    let mainSum = 0;
    let secondarySum = 0;
    let resultArr = [];

    for (let i = 0; i < array.length; i++) {
        mainSum += Number(array[i][i]);
        secondarySum += Number(array[i][array.length - i - 1]);
    }

    resultArr = [mainSum, secondarySum];
    console.log(resultArr.join(' '));
}

solve([
    [20, 40],
    [10, 60]
]);

solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);