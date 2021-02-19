function solve() {
    let input = document.getElementById('arr').value;
    let result = document.getElementById('result');

    var reg = new RegExp(/[^\[\]",]*/g);
    let arr = input.match(reg).map(x => x.trim()).filter(Boolean);

    let regexValidData = new RegExp(/(^[A-Za-z]+\s{1}[A-Za-z]+)\s{1}(\+359)(\s{1}|-)\d{1}(\s{1}|-)\d{3}(\s{1}|-)\d{3}\s{1}(([a-z]+|\d+)@([a-z]+)\.([a-z]{2,3}))/g);

    for (let userData of arr) {
        if (regexValidData.test(userData)) {
            let nameReg = /(^[A-Za-z]+\s{1}[A-Za-z]+)/g;
            let phoneReg = /(\+359)(\s{1}|-)\d{1}(\s{1}|-)\d{3}(\s{1}|-)\d{3}/g;
            let emailReg = /(([a-z]+|\d+)@([a-z]+)\.([a-z]{2,3}))/g;

            if (nameReg.test(userData)) {
                let namePharagraph = document.createElement('p');
                let name = userData.match(nameReg);
                namePharagraph.innerHTML = `Name: ${name.join(' ')}`;

                result.appendChild(namePharagraph);
            }

            if (phoneReg.test(userData)) {
                let phonePharagraph = document.createElement('p');
                let phone = userData.match(phoneReg);
                phonePharagraph.innerHTML = `Phone Number: ${phone}`;

                result.appendChild(phonePharagraph);
            }

            if (emailReg.test(userData)) {
                let emailPharagraph = document.createElement('p');
                let email = userData.match(emailReg);
                emailPharagraph.innerHTML = `Email: ${email}`;

                result.appendChild(emailPharagraph);
            }
        } else {
            let invalidParagraph = document.createElement('p');
            invalidParagraph.innerHTML = 'Invalid data';
            result.appendChild(invalidParagraph);
        }

        let separator = document.createElement('p');
        separator.innerHTML = '- - -';
        result.appendChild(separator);
    }
}