function solve2(array) {
    let firstElement = Number(array[0]);
    let lastElement = Number(array[array.length - 1]);
    let sum = firstElement + lastElement;

    console.log(sum);
}

solve2(['20', '30', '40']);
solve2(['5', '10']);