function solve(data) {
    let cars = data.reduce((acc, carLine) => {
        let [brand, model, count] = carLine.split('|').map(x => x.trim());
        if (!acc[brand]) {
            acc[brand] = {};
        }
        if (!acc[brand][model]) {
            acc[brand][model] = 0;
        }
        acc[brand][model] += Number(count);
        return acc;
    }, {});

    Object.keys(cars).map(brand => {
        console.log(brand);
        Object.keys(cars[brand]).map(model => {
            console.log(`###${model} -> ${cars[brand][model]}`);
        });
    });
}

solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);