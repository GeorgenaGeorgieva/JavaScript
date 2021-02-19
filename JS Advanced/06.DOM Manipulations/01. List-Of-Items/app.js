function addItem() {
    let inputText = document.getElementById('newItemText');
    let items = document.getElementById('items');

    if (inputText.value == null) {
        throw new Error('You cannot add epty string.');
    }

    let element = document.createElement('li');
    element.innerHTML = inputText.value;

    items.appendChild(element);
    inputText.value = '';
}