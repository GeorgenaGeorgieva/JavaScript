function heroicInventory(data) {
    return JSON.stringify(data.reduce((acc, heroInformation, i, arr) => {
        let [name, level, items] = heroInformation.split('/').map(x => x.trim());
        acc.push({ name, level: Number(level), items: items ? items.split(',').map(x => x.trim()) : [] });
        return acc;
    }, []));
}

console.log(heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));