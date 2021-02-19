function solve() {
    let word = document.getElementById('word').value;
    let text = document.getElementById('text').value;
    let result = document.getElementById('result');

    let arr = text.match(/([^\"\[\],]+)/gim).filter(x => x !== ' \n' && x !== '\n' && x !== ' ');
    let wordForReplace = arr[0].split(' ')[2].toLowerCase();

    var flags = "i";
    var strReg = "(" + wordForReplace + ")";
    let regex = new RegExp(strReg, flags);

    for (let str of arr) {
        let p = document.createElement('p');
        p.innerHTML = str.replace(regex, word);
        result.appendChild(p);
    }
}