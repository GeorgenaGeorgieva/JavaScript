function solve(symbol, size = 5) {
    let result = Array(size);
    for (let i = 0; i < size; i++) {
        result[i] = symbol.repeat(size).split("").join(" ");
    }
    return result.join("\n");
}

console.log(solve('*', 10));