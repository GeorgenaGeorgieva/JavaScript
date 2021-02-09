function argumentInfo(...params) {
    let parsedData = params.reduce((acc, element) => {
        let elementType = typeof(element);
        if (!acc.count[elementType]) {
            acc.count[elementType] = 1;
        } else {
            acc.count[elementType]++;
        }

        acc.values.push(element);
        return acc;
    }, { count: {}, values: [] });

    parsedData.values.map(element => {
        return console.log(`${typeof(element)}: ${element}`);
    });

    Object.entries(parsedData.count).sort((a, b) => {
        return b[1] - a[1];
    }).map(([key, value]) => {
        return console.log(`${key} = ${value}`);
    });
}

argumentInfo('cat', 'dog', 42, function() { console.log('Hello world!'); });