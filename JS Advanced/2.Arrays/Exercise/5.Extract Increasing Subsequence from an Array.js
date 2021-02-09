function solve(array) {
    let number = Number.MIN_SAFE_INTEGER;
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= number) {
            number = array[i];
            newArray.push(number);
        }
    }

    return newArray.join("\n");
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([20, 3, 2, 15, 6, 1]));