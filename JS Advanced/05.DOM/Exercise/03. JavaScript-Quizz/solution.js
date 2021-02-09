function solve() {
    let rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let quizzie = document.getElementById('quizzie');
    let sections = document.getElementsByTagName('section');

    let countOfCorrectAnswers = 0;
    let currentStep = 0;

    quizzie.addEventListener('click', (e) => {
        if (e.target.className === 'answer-text') {
            sections[currentStep].style.display = 'none'

            if (rightAnswers.includes(e.target.innerHTML)) {
                countOfCorrectAnswers++;
            }
            currentStep++;

            if (currentStep < rightAnswers.length) {
                sections[currentStep].style.display = 'block';
            }

            if (currentStep === 3) {
                let result = document.getElementById('results').getElementsByTagName('h1')[0];
                document.querySelector('#results').style.display = 'block';
                if (countOfCorrectAnswers === 3) {
                    result.textContent = 'You are recognized as top JavaScript fan!';
                } else {
                    result.textContent = `You have ${countOfCorrectAnswers} right answers`;
                }
            }
        }
    })
}