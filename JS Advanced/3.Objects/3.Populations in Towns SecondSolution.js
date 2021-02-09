function populationInTown(data) {
    let reducedData = data.reduce((acc, element, i, arr) => {
        let [townName, population] = element.split(' <-> ');
        if (acc.total[townName]) {
            acc.total[townName] += Number(population);
        } else {
            acc.total[townName] = Number(population);
        }

        return acc;
    }, { total: {} }).total;

    for (const key in reducedData) {
        console.log(`${key} : ${reducedData[key]}`);
    }
}

populationInTown([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);


populationInTown([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);