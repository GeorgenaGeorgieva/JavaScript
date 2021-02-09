function solve() {
    let button = document.querySelector('exercise , button');
    let input = document.querySelector('exercise , input');
    let list = document.querySelectorAll('li');

    button.addEventListener('click', (e) => {
        let inputName = input.value.toUpperCase();
        if (inputName) {
            let index = inputName.charCodeAt(0) - 65;
            let currentName = inputName[0] + inputName.slice(1).toLowerCase();

            if (list[index].innerHTML.length === 0) {
                list[index].innerHTML += currentName;
            } else {
                list[index].innerHTML += `, ${currentName}`;
            }

            input.value = '';
        }
    })
}