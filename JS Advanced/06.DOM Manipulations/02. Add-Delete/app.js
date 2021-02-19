function addItem() {
    let items = document.getElementById('items');
    let input = document.getElementById('newText');

    let element = document.createElement('li');
    element.innerHTML = input.value;

    let deleteLink = document.createElement('a');
    deleteLink.setAttribute('href', '#');
    deleteLink.innerHTML = '[Delete]';

    element.appendChild(deleteLink);
    items.appendChild(element);

    deleteLink.addEventListener('click', () => {
        items.removeChild(deleteLink.parentElement);
    })

    input.value = '';
}