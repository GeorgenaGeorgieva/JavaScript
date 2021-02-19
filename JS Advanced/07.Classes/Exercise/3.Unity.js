class Rat {
    constructor(name) {
        this.name = name;
        this.unions = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.unions.push(otherRat);
        }
    }

    getRats() {
        return this.unions;
    }

    toString() {
            return `${this.name} ${this.unions.map(x => `\n##${x}`).join('')}`;
    }
}