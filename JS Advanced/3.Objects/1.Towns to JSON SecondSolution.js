function townsToJson(data) {
    let keys = data.shift();

    return JSON.stringify(data.reduce((acc, townInfo, i, arr) => {
        let [Town, Latitude, Longitude] = townInfo.split(/\s*\|\s*/).map(x => x.trim()).filter(Boolean);
        acc.push({ Town, Latitude: Math.floor(+Latitude * 100) / 100, Longitude: Math.floor(+Longitude * 100) / 100 });
        return acc;
    }, []))
}

console.log(townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));