function subtract() {
    let basicForm = document.getElementById('wrapper');
    let first = document.getElementById('firstNumber');
    let second = document.getElementById('secondNumber');
    let result = document.getElementById('result');

    first.disabled = false;
    second.disabled = false;

    basicForm.addEventListener('mousemove', () => {
        result.innerHTML = Number(first.value) - Number(second.value);
    })
}