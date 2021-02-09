const sum = (a, b) => a + b;
const sumInverse = (a, b) => a + (1 / b);
const concat = (a, b) => a + b.toString();

function solve(...params) {
    return [
        params.reduce(sum, 0),
        params.reduce(sumInverse, 0),
        params.reduce(concat, "")
    ].join("\n")
}

console.log(solve(1, 2, 3));