function solve(array) {
    let countOfRotation = Number(array.pop());

    for (let i = 1; i <= countOfRotation % array.length; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    return array.join(' ');
}

console.log(solve(['1', '2', '3', '4', '2']));
console.log(solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']));