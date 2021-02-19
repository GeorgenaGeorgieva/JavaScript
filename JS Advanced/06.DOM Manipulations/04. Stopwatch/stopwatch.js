function stopwatch() {
    let start = document.getElementById('startBtn');
    let stop = document.getElementById('stopBtn');
    let timer = document.getElementById('time');

    let timeInterval = null;
    let seconds = '00';
    let minutes = '00';

    start.addEventListener('click', () => {
        timer.textContent = `${minutes}:${seconds}`;
        timeInterval = setInterval(add, 1000);
        stop.disabled = false;
        start.disabled = true;
    })

    stop.addEventListener('click', () => {
        clearInterval(timeInterval);
        stop.disabled = true;
        start.disabled = false;

        minutes = '00';
        seconds = '00';
        timer.textContent = `${minutes}:${seconds}`;
    })

    function add() {
        seconds++;
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (seconds >= 60) {
            seconds = '0' + 0;
            minutes++;
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
        }

        if (minutes === 0) {
            minutes = '0' + minutes;
        }

        timer.textContent = `${minutes}:${seconds}`;
    }
}