function addItem() {
    let menu = document.getElementById('menu');
    let text = document.getElementById('newItemText');
    let valueText = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.textContent = text.value;
    option.setAttribute('value', `${valueText.value}`);

    menu.appendChild(option);
    text.value = '';
    valueText.value = '';
}