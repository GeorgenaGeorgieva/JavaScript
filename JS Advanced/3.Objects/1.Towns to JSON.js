function solve(array) {
    const towns = [];
    let pattern = /\s*\|\s*/;

    let columns = array.shift().split(pattern).filter(Boolean);
    let town = columns[0];
    let latitude = columns[1];
    let longitude = columns[2];

    while (array.length > 0) {

        let current = array.shift().split(pattern).filter(Boolean);

        const currentObject = {};
        currentObject[town] = current[0];
        currentObject[latitude] = Math.floor(+current[1] * 100) / 100;
        currentObject[longitude] = Math.floor(+current[2] * 100) / 100;

        towns.push(currentObject);
    }

    console.log(JSON.stringify(towns));
}


solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);

solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]);