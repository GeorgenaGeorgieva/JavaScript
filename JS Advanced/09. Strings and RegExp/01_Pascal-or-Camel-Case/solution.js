function solve() {
    let text = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');

    if (convention === 'Camel Case') {
        return result.innerHTML = text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    if (convention === 'Pascal Case') {
        return result.innerHTML = text.replace(/\w+/g, function(word) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }).replace(/\s+/g, '');
    }

    return result.innerHTML = 'Error!';
}