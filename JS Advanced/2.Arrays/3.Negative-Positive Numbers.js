function solve(array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            let current = Number(array.splice(i, 1));
            array.unshift(current);
        }
    }
    return array.join("\n");
}

console.log(solve([7, -2, 8, 9]));
console.log(solve([3, -2, 0, -1]));