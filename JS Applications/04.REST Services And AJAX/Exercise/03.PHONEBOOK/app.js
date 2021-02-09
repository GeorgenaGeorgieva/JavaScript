async function attachEvents() {
    let phonebook = document.getElementById('phonebook');
    let loadButton = document.getElementById('btnLoad');
    let createButton = document.getElementById('btnCreate');

    let data = await fetch('https://phonebook-nakov.firebaseio.com/phonebook.json')
        .then(d => d.json())
        .catch(console.error);

    createButton.addEventListener('click', () => {
        let personValue = document.getElementById('person');
        let phoneValue = document.getElementById('phone');

        fetch(`https://phonebook-nakov.firebaseio.com/phonebook.json`, {
                method: 'POST',
                body: JSON.stringify({ person: personValue.value, phone: phoneValue.value })
            })
            .catch(console.error);

        personValue.value = '';
        phoneValue.value = '';
    });

    loadButton.addEventListener('click', () => {
        if (phonebook.innerHTML != '') {
            phonebook.innerHTML = '';
        }

        if (data === undefined || data === null) {
            return console.log('There is no telephone numbers in this phonebook.')
        }

        for (const contact of Object.entries(data)) {
            let name = contact[1].person;
            let phone = contact[1].phone;

            let li = document.createElement('li');
            li.innerHTML = `${name}:${phone}`;

            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('class', 'delete');
            deleteBtn.innerHTML = 'Delete';

            deleteBtn.addEventListener('click', function(e) {
                fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${contact[0]}.json`, { method: 'DELETE' });
                li.remove();
            });

            li.appendChild(deleteBtn);
            phonebook.appendChild(li);
        }
    });
};

attachEvents();