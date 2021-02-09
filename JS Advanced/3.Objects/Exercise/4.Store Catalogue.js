function catalogue(array) {
    let catalogue = array.reduce((acc, productRow) => {
        let [product, price] = productRow.split(':').map(x => x.trim());
        if (acc[product[0]]) {
            acc[product[0]] = [...acc[product[0]], productRow];
        } else {
            acc[product[0]] = [productRow];
        }
        return acc;
    }, {});

    Object.keys(catalogue).sort().map(x => {
        console.log(x);
        catalogue[x].sort().map(product => {
            console.log(`  ${product}`.split(' : ').join(': '));
        })
    })
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);