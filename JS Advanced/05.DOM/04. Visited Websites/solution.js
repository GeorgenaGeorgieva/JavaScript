function solve() {
    let links = document.getElementsByClassName('link-1');

    for (const link of links) {
        link.addEventListener('click', (f) => {
            let target = f.currentTarget;
            let visitsText = target.getElementsByTagName('p')[0];
            let text = visitsText.textContent.split(' ');
            let digit = Number(text[1]);
            text[1] = ++digit;
            visitsText.textContent = text.join(' ');
        })
    }
}