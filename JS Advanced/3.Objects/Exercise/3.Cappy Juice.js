function cappyJuice(data) {
    let result = data.reduce((juiceAcc, juiceKVP) => {
        let [juiceName, quantity] = juiceKVP.split(' => ');
        if (juiceAcc.currentJuice[juiceName]) {
            juiceAcc.currentJuice[juiceName] += Number(quantity);
        } else {
            juiceAcc.currentJuice[juiceName] = Number(quantity);
        }

        let bottleCount = Math.floor(Number(juiceAcc.currentJuice[juiceName]) / 1000);
        if (bottleCount) {
            juiceAcc.completedJuice[juiceName] = bottleCount;
        }

        return juiceAcc;
    }, { completedJuice: {}, currentJuice: {} }).completedJuice;

    for (const key in result) {
        console.log(`${key} => ${result[key]}`);
    }
}

cappyJuice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

// cappyJuice(['Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//     'Pear => 5678',
//     'Watermelon => 6789'
// ]);