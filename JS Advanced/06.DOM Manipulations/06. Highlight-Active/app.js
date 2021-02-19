function focus() {
    let basicDiv = document.getElementsByTagName('div')[0];

    basicDiv.addEventListener('click', (e) => {
        let focusedElement = document.getElementsByClassName('focused')[0];
        if (focusedElement) {
            focusedElement.classList.remove('focused');
        }

        let target = e.target;
        let parent = target.parentElement;
        if (target.type === 'text') {
            parent.classList.add('focused');
        }
    })
}