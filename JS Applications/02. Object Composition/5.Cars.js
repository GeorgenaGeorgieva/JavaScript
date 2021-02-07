function carsFactory(arr) {
    let garage = {};

    let comandExecutions = {
        create: (name, _, parentName) => {
            if (!parentName) {
                garage[name] = {};
                return garage;
            }

            const parent = garage[parentName];
            garage[name] = Object.create(parent);
            return garage;
        },
        set: (name, key, value) => {
            garage[name][key] = value;
            return garage;
        },
        print: (name) => {
            let result = [];
            for (const e in garage[name]) {
                result.push(`${e}:${garage[name][e]}`);
            }

            console.log(result.join(', '));
            return garage;
        }
    }

    for (const line of arr) {
        const [command, name, param1, param2] = line.split(' ');
        comandExecutions[command](name, param1, param2);
    }
}

carsFactory(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);