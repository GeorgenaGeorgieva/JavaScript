function solve(...params) {
    let sum = params.reduce((a, b) => a + b.length, 0);
    let avg = Math.floor(sum / params.length);

    console.log(sum);
    console.log(avg);
}

solve('chocolate', 'ice cream', 'cake');