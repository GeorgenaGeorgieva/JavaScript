function sumByTown(array) {
    let object = {};

    for (let i = 0; i < array.length; i += 2) {
        let town = array[i];
        let income = Number(array[i + 1]);

        if (object[town]) {
            object[town] += income;
        } else {
            object[town] = income;
        }
    }

    return JSON.stringify(object);
}

console.log(sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']));
console.log(sumByTown(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']));