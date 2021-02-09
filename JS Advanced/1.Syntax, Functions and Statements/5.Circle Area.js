function solve(input = 5) {
    let result;
    let inputType = typeof(input);
    if (inputType !== 'number') {
        return result = `We can not calculate the circle area, because we receive a ${inputType}.`;

    }
    return result = (Math.pow(input, 2) * Math.PI).toFixed(2);
}

console.log(solve(5));
console.log(solve('name'));