function validate() {
    let input = document.getElementById('email');
    const re = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    input.addEventListener('change', () => {
        if (!re.test(input.value)) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    })
}