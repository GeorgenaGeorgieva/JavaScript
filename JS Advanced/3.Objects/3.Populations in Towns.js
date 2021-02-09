function solve(array) {
    let object = {};

    for (let i = 0; i < array.length; i++) {
        let information = array[i].split(' <-> ');
        let town = information[0];
        let population = Number(information[1]);

        if (object[town]) {
            object[town] += population;
        } else {
            object[town] = population;
        }
    }

    for (const key in object) {
        console.log(`${key} : ${object[key]}`);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);