class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = this.validateID(clientId);
        this.email = this.validateEmail(email);
        this.firstName = this.validateNames(firstName, 'First');
        this.lastName = this.validateNames(lastName, 'Last');
    }

    validateID(clientId) {
        let regex = new RegExp(/^\d{6}$/);
        if (!regex.test(clientId)) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        return clientId;
    }

    validateEmail(email) {
        let regex = new RegExp(/\S+@\S+\.\S+/);
        if (!regex.test(email)) {
            throw new TypeError('Invalid e-mail');
        }

        return email;
    }

    validateNames(name, typeName) {
        let regex = new RegExp(/^.\D\S{3,20}$/);
        if (!regex.test(name) || name.length > 20) {
            throw new TypeError(`${typeName} name must be between 3 and 20 characters long`);
        }

        let newRegex = new RegExp(/^[a-zA-Z]+$/);
        if (!newRegex.test(name)) {
            throw new TypeError(`${typeName} name must contain only Latin characters`);
        }

        return name;
    }
}