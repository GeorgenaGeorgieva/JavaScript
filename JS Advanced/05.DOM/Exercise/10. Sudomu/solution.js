function solve() {
    let result = document.getElementById('check').getElementsByTagName('p')[0];
    let buttons = document.querySelectorAll('exercise , button');
    let size = document.querySelectorAll('tbody tr').length;
    let validSudomu = true;

    buttons[0].addEventListener('click', (e) => {

        let inputs = Array.from(document.querySelectorAll('tbody input')).map(x => x.value);
        let parsedCells = [];

        for (let i = 0; i < size; i++) {
            parsedCells.push([...inputs.slice(i * size, (i + 1) * size)]);
        }

        for (let i = 0; i < size; i++) {
            validSudomu = validSudomu ? (new Set(parsedCells[i])).size === size : false;
        }

        for (col = 0; col < parsedCells.length; col++) {
            let temp = [];
            for (let row = 0; row < parsedCells.length; row++) {
                temp.push(parsedCells[row][col])
            }
            validSudomu = validSudomu ? (new Set(temp)).size === size : false;
        }

        console.log(validSudomu);
        validSudomu = true;
    })

}