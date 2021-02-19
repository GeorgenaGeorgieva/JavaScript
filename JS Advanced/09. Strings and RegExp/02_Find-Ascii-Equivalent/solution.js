function solve() {
    let input = document.getElementById('text').value;
    let result = document.getElementById('result');

    let elements = input.split(' ');

    elements.filter(x => !Number(x)).forEach(element => {
        let pForCodes = document.createElement('p');
        pForCodes.innerHTML = element.replace(/([A-Za-z]{1})/g, function(word) {
            return word.charCodeAt(0) + ' ';
        });
        result.appendChild(pForCodes);
    });

    let pForText = document.createElement('p');
    let digits = elements.filter(x => Number(x));
    pForText.innerHTML = digits.map(x => String.fromCharCode(x)).join('');

    result.appendChild(pForText);
}