function solve(array) {
    let step = Number(array.pop());
    let result = [];

    for (let index = 0; index < array.length; index += step) {
        result.push(array[index]);
    }

    return result.join("\n");
}

console.log(solve(['5', '20', '31', '4', '20', '2']));
console.log(solve(['dsa', 'asd', 'test', 'tset', 'asd', '3']));