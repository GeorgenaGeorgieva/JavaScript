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

let obj = {
    method: () => "invoked"
}
let spy = Spy(obj, "method");

obj.method();
obj.method();
obj.method();

console.log(spy) // { count: 3 }

// let spy = Spy(console, "log");

// console.log(spy); // { count: 1 }
// console.log(spy); // { count: 2 }
// console.log(spy); // { count: 3 }