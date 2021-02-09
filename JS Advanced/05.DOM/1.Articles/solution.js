function createArticle() {
    let title = document.getElementById('createTitle').value;
    let text = document.getElementById('createContent').value;
    let articlesList = document.getElementById('articles');

    if (title !== '' && text !== '') {
        let createTitle = document.createElement('h3');
        createTitle.textContent = title;

        let createText = document.createElement('p');
        createText.textContent = text;

        let article = document.createElement('article');
        article.appendChild(createTitle);
        article.appendChild(createText);

        articlesList.appendChild(article);
    }

    document.getElementById('createTitle').value = '';
    document.getElementById('createContent').value = '';
}