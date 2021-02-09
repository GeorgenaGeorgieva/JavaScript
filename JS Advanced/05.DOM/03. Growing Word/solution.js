function growingWord() {
    let p = document.getElementById('exercise').getElementsByTagName('p')[0];

    if (!p.style.fontSize) {
        p.style.fontSize = '1px';
    }

    if (p.style.color === "blue") {
        p.style.color = "green";
    } else if (p.style.color === "green") {
        p.style.color = "red";
    } else if (p.style.color === "red") {
        p.style.color = "blue";
    } else {
        p.style.color = "blue";
    }

    let size = p.style.fontSize.slice(0, -2);
    p.style.fontSize = `${size * 2}px`;
}