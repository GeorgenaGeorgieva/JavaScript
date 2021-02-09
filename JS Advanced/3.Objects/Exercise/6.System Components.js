function components(data) {
    let parsedData = data.reduce((acc, systemLine) => {
        let [system, comp, sub] = systemLine.split('|').map(x => x.trim());
        if (!acc[system]) {
            acc[system] = {};
        }
        if (!acc[system][comp]) {
            acc[system][comp] = [];
        }

        if (!acc[system][comp][sub]) {
            acc[system][comp].push(sub);
        }

        return acc;
    }, {});

    Object.keys(parsedData).sort((a, b) => {
        return Object.keys(parsedData[b]).length - Object.keys(parsedData[a]).length || a.localeCompare(b);
    }).map(sys => {
        console.log(sys);
        return Object.keys(parsedData[sys]).sort((a, b) => {
            return Object.keys(parsedData[sys][b]).length - Object.keys(parsedData[sys][a]).length || a.localeCompare(b);
        }).map(sub => {
            console.log(`|||${sub}`);
            return console.log(`||||||${parsedData[sys][sub].join('\n||||||')}`);
        });
    });
}

components(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);