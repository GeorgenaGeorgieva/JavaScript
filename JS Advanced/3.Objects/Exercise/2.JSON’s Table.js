function createTable(data) {
    let parsedData = data.map(x => JSON.parse(x));

    let createTable = (content) => `<table>${content}\n</table>`;
    let createRow = (content) => `\n\t<tr>${content}\n\t</tr>`;
    let createData = (content) => `\n\t\t<td>${content}</td>`;

    let result = parsedData.reduce((accRow, row) => {
        let tdForPerson = Object.values(row).reduce((tdAcc, td) => {
            return tdAcc + createData(td);
        }, '');

        return accRow + createRow(tdForPerson);

    }, '');

    return createTable(result);
}

console.log(createTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]));