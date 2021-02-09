function solve(operator, ...params) {
    return params
        .reduce((a, b) => eval(`${a} ${operator} ${b}`), params.shift());
}

console.log(solve(3, 5.5, '*'));