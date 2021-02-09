function components(input) {
    let systems = {};

    for (const line of input) {
        let [system, component, subcomponent] = line.split(' | ');

        if (!systems.hasOwnProperty(system)) {
            systems[system] = {};
        }

        if (!systems[system].hasOwnProperty(component)) {
            systems[system][component] = [];
        }

        systems[system][component].push(subcomponent);
    }

    let keys = Object.keys(systems);

    for (const system of keys) {
        console.log(system);
        for (const component in systems[system]) {
            console.log('|||' + component);
            for (const subcomponent of systems[system][component]) {
                console.log('||||||' + subcomponent);
            }
        }
    }
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