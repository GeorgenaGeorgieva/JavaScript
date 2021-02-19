class Circle {
    constructor(radius) {
        this.radius = Number(radius);
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(val) {
        if (val < 0) {
            throw new Error('It is impossible value!');
        } else {
            this.radius = Number(val / 2);
        }
    }

    get area() {
        return Number(Math.PI * Math.pow(this.radius, 2));
    }
}