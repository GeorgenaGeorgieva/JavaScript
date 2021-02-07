function listProcessor(arr) {
    arr.reduce((acc, curr) => {
        if (curr === 'print') {
            return console.log(acc.join(','));
        }
        let currEls = curr.split(' ');
        let command = currEls[0];
        let element = currEls[1];
        if (command === 'add') {
            acc.push(element);
        } else if (command === 'remove') {
            acc = acc.filter(el => el != element);
        }
        return acc;
    }, []);
}