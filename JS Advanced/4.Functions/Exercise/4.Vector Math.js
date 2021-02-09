(() => {
    return {
        add: (a, b) => [(a[0] + b[0]), (a[1] + b[1])],
        multiply: (a, s) => [(a[0] * s), (a[1] * s)],
        length: (a) => Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2)),
        dot: (a, b) => (a[0] * b[0]) + (a[1] * b[1]),
        cross: (a, b) => (a[0] * b[1]) - (a[1] * b[0]),
    }
})();