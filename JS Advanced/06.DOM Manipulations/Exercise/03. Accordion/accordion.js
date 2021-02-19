function toggle() {
    let text = document.getElementById('extra');
    let button = document.getElementsByClassName('button')[0];

    if (button.innerHTML === 'More') {
        text.style.display = 'block';
        button.innerHTML = 'Less';
    } else if (button.innerHTML === 'Less') {
        text.style.display = 'none';
        button.innerHTML = 'More';
    }
}