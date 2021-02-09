function solve() {
    let text = document.getElementById('input').textContent;
    let div = document.getElementById('output');

    let sentences = text.split('.').filter(x => x.length > 0);

    if (sentences.lenght > 0) {
        for (let i = 0; i < sentences.length; i += 3) {
            let paragraph = document.createElement('p');
            let threeSentences = sentences.slice(i, i + 3).join('. ');
            paragraph.textContent = threeSentences;
            div.appendChild(paragraph);
        }
    }
}