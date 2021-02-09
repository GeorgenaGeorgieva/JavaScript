function getInfo() {
    let stopId = document.getElementById('stopId').value;
    let name = document.getElementById('stopName');
    let buses = document.getElementById('buses');

    fetch(`https://judgetests.firebaseio.com/businfo/${stopId}.json`)
        .then(x => x.json())
        .then(data => processData(name, buses, data))
        .catch(() => displayError(name));
}

function processData(name, buses, data) {
    if (buses.innerHTML != '') {
        buses.innerHTML = '';
    }

    name.innerHTML = data.name;
    for (const [busId, time] of Object.entries(data.buses)) {
        let li = document.createElement('li');
        li.innerHTML = `Bus ${busId} arrives in ${time} minutes`;
        buses.appendChild(li);
    }
}

function displayError(nameField) {
    nameField.textContent = 'Error';
}