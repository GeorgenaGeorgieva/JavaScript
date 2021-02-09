function solve(array) {
    return array.filter(x => array.indexOf(x) % 2 == 0).join(' ');
}

console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));