function createDropdown() {
    var select = document.getElementById('country');
    const countries = ['Bulgaria',
        'Canada',
        'USA',
        'Austria',
        'Mexico',
        'China',
        'Egypt',
        'Sweden',
        'Turkey',
        'Luxembourg',
        'Germany'
    ];

    for (const country of countries) {
        let option = document.createElement('option');
        option.innerHTML = country.toString();
        option.value = `${country}`.toString().toLowerCase();

        select.appendChild(option);
    }
}

createDropdown();