function usernames(data) {
    let parsedData = data.reduce((acc, usernameLine) => {
        let [username] = usernameLine.split(',').map(x => x.trim());
        if (!acc[username]) {
            acc[username] = {};
        }
        return acc;
    }, {});

    Object.keys(parsedData).sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    }).sort((a, b) => {
        return a - b;
    }).map(x => {
        return console.log(x);
    });
}

usernames(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);

usernames(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
]);