function solve(num) {

    let numArray = num.toString().split("");
    let isEqual = true;
    let firstDigit = numArray[0];

    numArray.forEach(function(element) {
        if (element != firstDigit) {
            isEqual = false;
        }
    });

    let sum = numArray
        .map(Number)
        .reduce((a, b) => a + b, 0);

    console.log(isEqual);
    console.log(sum);
}

solve(22222);
solve(14527936);
solve(33333254);