function solve() {
    let input = Array.from(document.getElementById('input').value);
    let result = document.getElementById('resultOutput');

    let inputSum = Array.from(input.reduce((a, b) => Number(a) + Number(b)).toString());

    while (inputSum.length > 1) {
        inputSum = Array.from(inputSum.reduce((a, b) => Number(a) + Number(b)).toString());
    }

    let countForRemove = inputSum[0];

    input.splice(0, countForRemove);
    input.splice((input.length - 1), countForRemove);

    let regex = /\d{8}/g;
    let binaryArray = input.join('').match(regex);
    let resultString = '';

    for (let binaryCode of binaryArray) {
        resultString += String.fromCharCode(parseInt(binaryCode, 2));
    }

    result.innerHTML = resultString;
}