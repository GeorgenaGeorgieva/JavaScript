function solve(...params) {
    return `The largest number is ${params.sort((a, b) => a - b).pop()}.`;
}

console.log(solve(-3, -5, -22.5));