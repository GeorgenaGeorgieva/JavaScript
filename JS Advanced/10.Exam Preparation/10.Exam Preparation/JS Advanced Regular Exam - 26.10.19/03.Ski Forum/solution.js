class Forum {
    constructor() {
        this.users = [];
        this.questions = [];
        this.id = 1;
    }
    register(username, password, repeatPassword, email) {
        if (username === '') {
            throw new Error('Input can not be empty');
        }
        if (password != repeatPassword) {
            throw new Error('Passwords do not match');
        }
        let currentUser = this.users.find(user => user.username === username);
        if (currentUser) {
            throw new Error('This user already exists!');
        }
        let user = {
            username,
            password,
            email,
            isLogged: false
        };
        this.users.push(user);
        return `${username} with ${email} was registered successfully!`;
    }
    login(username, password) {
        let currentUser = this.users.find(user => user.username === username);
        if (!currentUser) {
            throw new Error('There is no such user');
        }
        let usersPasswords = this.users.find(user => user.password === password);
        if (currentUser && usersPasswords) {
            currentUser.isLogged = true;
            return "Hello! You have logged in successfully";
        }
    }
    logout(username, password) {
        let currentUser = this.users.find(user => user.username === username);
        if (!currentUser) {
            throw new Error('There is no such user');
        }
        let usersPasswords = this.users.find(user => user.password === password);
        if (currentUser && usersPasswords) {
            currentUser.isLogged = false;
            return 'You have logged out successfully';
        }
    }
    postQuestion(username, question) {
        let currentUser = this.users.find(user => user.username === username);
        if (!currentUser || currentUser.isLogged === false) {
            throw new Error('You should be logged in to post questions');
        }
        if (question === '') {
            throw new Error('Invalid question');
        }
        let currentQuestion = {
            username,
            question,
            id: this.id,
            answers: []
        }
        this.questions.push(currentQuestion);
        this.id++;
        return 'Your question has been posted successfully';
    }
    postAnswer(username, questionId, answer) {
        let currentUser = this.users.find(user => user.username === username);
        if (!currentUser || currentUser.isLogged === false) {
            throw new Error('You should be logged in to post answers');
        }
        if (answer === '') {
            throw new Error('Invalid answer');
        }
        let currentQuestion = this.questions.find(q => q.id === questionId);
        if (!currentQuestion) {
            throw new Error('There is no such question');
        }
        let currentAnswer = {
            username,
            answer
        }
        currentQuestion.answers.push(currentAnswer);
        return 'Your answer has been posted successfully';
    }
    showQuestions() {
        let result = "";
        this.questions.forEach(q => {
            result += `Question ${q.id} by ${q.username}: ${q.question}\n`;

            for (const line in q.answers) {
                let currAnswer = q.answers[line];
                result += `---${currAnswer.username}: ${currAnswer.answer}\n`
            }
        })

        result = result.trim();
        return result;
    }
}