function solve(array) {
    let initialNumber = 1;
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let command = array[i];

        if (command === 'add') {
            resultArray.push(initialNumber);
        } else if (command === 'remove') {
            resultArray.pop();
        }

        initialNumber++;
    }

    if (resultArray.length == 0) {
        return 'Empty';
    } else {
        return resultArray.join("\n");
    }
}

//console.log(solve(['add', 'add', 'add', 'add']));
//console.log(solve(['add', 'add', 'remove', 'add', 'add']));
console.log(solve(['remove', 'remove', 'remove']));