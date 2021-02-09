function loadRepos() {
    let res = document.getElementById('res');
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            res.textContent = xhr.responseText;
        }
    });

    xhr.open('GET', 'https://api.github.com/repos/testnakov/test-nakov-repo');
    xhr.send();
}