function solve() {
    let infoBox = document.getElementById('info');
    let departButton = document.getElementById('depart');
    let arriveButton = document.getElementById('arrive');
    let name = '';
    let nextId = 'depot';

    function depart() {
        departButton.disabled = true;
        arriveButton.disabled = false;

        fetch(`https://judgetests.firebaseio.com/schedule/${nextId}.json`)
            .then(d => d.json())
            .then(d => {
                infoBox.textContent = `Next stop ${d.name}`;
                return d;
            })
            .then(d => {
                next = d.next;
                return d;
            })
            .then(d => {
                name = d.name;
                return d;
            })
            .catch();
    }

    function arrive() {
        departButton.disabled = false;
        arriveButton.disabled = true;

        infoBox.innerHTML = `Arriving at ${name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();