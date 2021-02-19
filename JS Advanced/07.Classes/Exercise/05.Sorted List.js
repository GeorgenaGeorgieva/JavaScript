class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(elemenent) {
        this.list.push(elemenent);
        this.list.sort((a, b) => a - b);
        this.size = this.list.length;
    }

    remove(index) {
        if (index < 0 || index > this.size - 1) {
            throw new Error('Index out of range.');
        }
        this.list.splice(index, 1);
        this.size = this.list.length;
    }

    get(index) {
        if (index < 0 || index > this.size - 1) {
            throw new Error('Index out of range.');
        }
        return this.list[index];
    }
}

let list = new List();
console.log(list.size);
list.add(6);
list.add(5);
list.add(7);

console.log(list);
list.remove(1);
console.log(list);
console.log(list.get(0));
console.log(list.get(5));