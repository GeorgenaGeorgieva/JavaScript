function solve() {
    let text = document.getElementById('text').value;
    let number = Number(document.getElementById('number').value);
    let result = document.getElementById('result');
    let arr = [];

    var flags = "gm";
    var regexString = "\\\w{1," + number + "}";
    let regex = new RegExp(regexString, flags);

    text.replace(regex, function(word) {
        return arr.push(word);
    });

    if (arr[arr.length - 1].length < number) {
        while (arr[arr.length - 1].length < number) {
            let difference = number - (arr[arr.length - 1].length);
            arr[arr.length - 1] += text.slice(0, difference);
        }
    }

    result.innerHTML = arr.join(' ');
}