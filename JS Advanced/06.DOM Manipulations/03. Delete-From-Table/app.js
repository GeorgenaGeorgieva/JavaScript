function deleteByEmail() {
    let tbody = document.querySelector('tbody');
    let list = document.querySelectorAll('tbody tr');
    let input = document.querySelector('input');
    let label = document.querySelector('label');

    let lastResult = document.getElementById('results');
    if (lastResult) {
        lastResult.innerHTML = '';
        label.removeChild(lastResult);
    }

    let isDeleted = false;

    for (const row of list) {
        let email = row.querySelectorAll('td')[1].innerHTML;
        if (email.toLowerCase() === input.value.toLowerCase()) {
            tbody.removeChild(row);
            isDeleted = true;
            break;
        }
    }

    let resultText = document.createElement('div');
    resultText.setAttribute('id', 'results');
    resultText.setAttribute('align', 'center');

    if (isDeleted) {
        resultText.innerHTML = 'Deleted.';
    } else {
        resultText.innerHTML = 'Not found.';
    }

    label.appendChild(resultText);
    input.value = '';
}