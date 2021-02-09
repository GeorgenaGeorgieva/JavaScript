async function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let commits = document.getElementById('commits');

    if (username === '' || repo === '') {
        return;
    }

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(data => data.json())
        .then(data => printResult(data))
        .then(err => {
            if (!err.ok) {
                let li = document.createElement('li');
                li.innerHTML = `Error: ${err.status} (${err.statusText}})`;
                commits.appendChild(li);
            }
            return err;
        });

    function printResult(arrWithData) {
        if (commits.innerHTML !== '') {
            commits.innerHTML = '';
        }

        for (const obj of arrWithData) {
            let li = document.createElement('li');
            li.innerHTML = `${obj.commit.author.name}: ${obj.commit.message}`;
            commits.appendChild(li);
        }
    }
}