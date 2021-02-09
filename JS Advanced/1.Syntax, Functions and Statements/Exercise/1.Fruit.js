function buyFruits(fruit, grams, price) {
    let money = Number((grams * price) / 1000);
    let weight = Number(grams / 1000);
    return `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`
}

console.log(buyFruits('orange', 2500, 1.80));
console.log(buyFruits('apple', 1563, 2.35));