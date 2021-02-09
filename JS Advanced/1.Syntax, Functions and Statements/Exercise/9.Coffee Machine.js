function solve(array) {
    let profit = 0;
    const cofeeTypePrice = {
        caffeine: 0.8,
        decaf: 0.9,
    }
    const teaPrice = 0.8;

    for (let currentOrder of array) {
        currentOrder = currentOrder.split(", ");
        let coins = currentOrder[0];
        let typeOfDrink = currentOrder[1];
        let price = 0;
        let sugar = Number(currentOrder.slice(-1).pop());

        if (typeOfDrink === 'coffee') {
            price = cofeeTypePrice[currentOrder[2]];
        } else if (typeOfDrink === 'tea') {
            price = teaPrice;
        }

        if (currentOrder.includes('milk')) {
            price = Number((price * 1.1).toFixed(1));
        }

        if (sugar) {
            price += 0.1;
        }

        let change = coins - price;

        if (change < 0) {
            console.log(`Not enough money for ${typeOfDrink}. Need $${Math.abs(change).toFixed(2)} more`);
        } else {
            console.log(`You ordered ${typeOfDrink}. Price: $${price.toFixed(2)} Change: $${change.toFixed(2)}`);
            profit += price;
        }
    }

    console.log(`Income Report: ${profit.toFixed(2)}`);
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0'])
solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);