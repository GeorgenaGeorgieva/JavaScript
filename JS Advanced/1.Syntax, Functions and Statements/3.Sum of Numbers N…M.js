function solve(min, max) {
    let minNum = Number(min);
    let maxNum = Number(max);
    let result = 0;
    for (let i = minNum; i <= maxNum; i++) {
        result += i;
    }

    return result;
}

console.log(solve('-8', '20'));