function solution() {
    let str = '';

    function append(string) {
        return str += string;
    }

    function removeStart(n) {
        return str = str.slice(Number(n));
    }

    function removeEnd(n) {
        return str = str.slice(0, str.length - Number(n));
    }

    function print() {
        return console.log(str);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();