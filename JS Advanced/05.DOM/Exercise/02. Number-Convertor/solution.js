function solve() {
    let options = ['Binary', 'Hexadecimal'];
    let to = document.getElementById('selectMenuTo');

    for (let i = 0; i < options.length; i++) {
        let elementOption = document.createElement('option');
        elementOption.text = options[i];
        elementOption.setAttribute('value', options[i]);
        to.appendChild(elementOption);
    }

    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', () => {
        let inputNumber = document.getElementById('input').value;
        let system = to.value;
        let result;

        if (system === 'Binary') {
            result = Number(inputNumber).toString(2);
        } else if (system === 'Hexadecimal') {
            result = Number(inputNumber).toString(16).toUpperCase();
        }

        document.getElementById('result').value = result;
    })
}