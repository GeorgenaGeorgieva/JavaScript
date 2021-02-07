function Spy(obj, funcStr) {
    let originalFunction = obj[funcStr];
    let result = {
        count: 0
    }

    obj[funcStr] = function() {
        result.count++;
        return originalFunction.apply(this, arguments);
    }

    return result;
}