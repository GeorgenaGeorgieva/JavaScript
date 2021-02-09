function sortingData(data, arg) {
    if (arg === 'asc') {
        return data.sort((a, b) => a - b);
    }

    if (arg === 'desc') {
        return data.sort((a, b) => b - a);
    }
}

console.log(sortingData([14, 7, 17, 6, 8], 'asc'));
console.log(sortingData([14, 7, 17, 6, 8], 'desc'));