function sumRange(arr, start, end) {

    if (arr.length === 0) {
        return 0;
    }

    if (typeof arr !== 'object') {
        return NaN;
    }

    let startIndex = Number(start);
    let endIndex = Number(end);
    if (startIndex < 0) {
        startIndex = 0;
    }

    let array = arr.slice(startIndex, endIndex + 1);
    return array.reduce((acc, current) => Number(acc) + current);
}

module.exports = sumRange;

// console.log(sumRange([10, 20, 30, 40, 50, 60], 3, 300));
// console.log(sumRange([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
// console.log(sumRange([10, 'twenty', 30, 40], 0, 2));
// console.log(sumRange([], 1, 2));
// console.log(sumRange('text', 0, 2));