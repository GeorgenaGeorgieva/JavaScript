class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += Number(length);
    }

    decrease(length) {
        if ((this.innerLength - Number(length)) < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= Number(length);
        }
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            return `${this.innerString.substring(0, this.innerLength)}...`;
        }
        return this.innerString;
    }
}