function solve(array) {
    let counter = 0;

    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++) {
            let currentArrEl = array[row][col];

            if (row + 1 < array.length) {
                let nextArrEl = array[row + 1][col];

                if (currentArrEl === nextArrEl) {
                    counter++;
                }
            }

            if (col + 1 < array[row].length) {
                let nextElInSameArr = array[row][col + 1];

                if (currentArrEl == nextElInSameArr) {
                    counter++;
                }
            }
        }
    }

    console.log(counter);
}

solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);

solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);