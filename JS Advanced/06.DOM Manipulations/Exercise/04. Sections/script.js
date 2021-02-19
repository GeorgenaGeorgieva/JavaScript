function create(words) {
    let contentDiv = document.getElementById('content');

    words.map((word) => {
        let div = document.createElement('div');
        let p = document.createElement('p');

        p.innerHTML = word;
        p.style.display = 'none';
        div.style.backgroundColor = 'blue';

        div.appendChild(p);
        contentDiv.appendChild(div);
    });

    contentDiv.querySelectorAll('div').forEach(d => d.addEventListener('click', (e) => {
        d.querySelector('p').style.display = 'block';
    }));
}