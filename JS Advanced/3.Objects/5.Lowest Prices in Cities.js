function solve(array) {
    let arrayOfProducts = [];
    let products = {};

    for (let i = 0; i < array.length; i++) {
        let current = array[i].split(' | ');
        let town = current[0];
        let product = current[1];
        let price = Number(current[2]);

        if (product in products) {
            if (products[product].price > price) {
                products[product].price = price;
                products[product].town = town;
            }
        } else {
            let object = {};
            object.town = town;
            object.price = price;

            products[product] = object;
            arrayOfProducts.push(product);
        }
    }

    for (let product of arrayOfProducts) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`)
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);