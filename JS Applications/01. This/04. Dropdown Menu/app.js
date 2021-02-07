function solve() {
    let button = document.getElementById('dropdown');
    let box = document.getElementById('box');
    let menu = document.getElementById('dropdown-ul');

    button.addEventListener('click', () => {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
            box.style.backgroundColor = 'black';
        } else {
            menu.style.display = 'block';
            menu.addEventListener('click', (e) => {
                let tr = e.target;
                box.style.backgroundColor = tr.textContent;
            });
        }
    });
}