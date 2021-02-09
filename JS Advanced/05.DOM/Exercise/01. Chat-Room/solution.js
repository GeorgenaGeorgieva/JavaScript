function solve() {
    let input = document.getElementById('chat_input');
    let sendButton = document.getElementById('send');
    let messages = document.getElementById('chat_messages');

    sendButton.addEventListener('click', (e) => {
        let divNewElement = document.createElement('div');
        divNewElement.innerHTML = input.value;
        divNewElement.classList.add('message', 'my-message');

        messages.appendChild(divNewElement);
        input.value = '';
    })
}