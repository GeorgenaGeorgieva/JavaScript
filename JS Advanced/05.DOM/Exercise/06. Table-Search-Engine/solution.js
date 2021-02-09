function solve() {
    let button = document.getElementById('searchBtn');
    let input = document.getElementById('searchField');
    let rows = document.querySelectorAll('tbody tr');

    button.addEventListener('click', (e) => {
        let selected = document.getElementsByClassName('select');
        Array.from(selected).forEach(x => x.classList.remove('select'));

        for (let i = 0; i < rows.length; i++) {
            let studentsList = rows[i].querySelectorAll('td');
            let currentStudenInfo = Array.from([...studentsList]);

            for (let k = 0; k < currentStudenInfo.length; k++) {
                let text = currentStudenInfo[k].innerHTML;
                if (text.toLowerCase().includes(input.value.toLowerCase())) {
                    rows[i].className = 'select';
                }
            }
        }

        input.value = '';
    })
}