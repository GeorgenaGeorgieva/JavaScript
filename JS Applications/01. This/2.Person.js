class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set fullName(name) {
        let names = name.split(' ');
        if (names.length > 1) {
            this.firstName = names[0];
            this.lastName = names[1];
        }
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}