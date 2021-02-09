function loadRepos() {
    let username = document.getElementById('username').value;
    let repos = document.getElementById('repos');
    repos.textContent = '';

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(getNameAndUrl)
        .then(createListItems)
        .then(items => appendItems(items, repos))
        .catch();
}

function getNameAndUrl(items) {
    return items.reduce((acc, curr) => {
        let obj = { name: curr.full_name, url: curr.html_url };
        acc.push(obj);
        return acc;
    }, []);
}

function createListItems(items) {
    return items.reduce((acc, curr) => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = curr.url;
        a.textContent = curr.name;
        li.appendChild(a);
        acc.push(li);
        return acc;
    }, []);
}

function appendItems(items, repos) {
    items.forEach(item => {
        repos.appendChild(item);
    });
}