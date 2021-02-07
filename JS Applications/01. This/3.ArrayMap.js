function arrayMap(arr, func) {
    return arr.reduce((acc, el) => {
        let result = func(el);
        acc.push(result);
        return acc;
    }, []);
}