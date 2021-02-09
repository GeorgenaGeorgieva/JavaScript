function solve(steps, footprint, speed) {
    let distance = steps * footprint / 1000;
    let speedPerSecond = speed / 3600;

    let seconds = Math.round(distance / speedPerSecond);
    let minutes = Math.floor(steps * footprint / 500);
    let hours = 0;

    while (seconds >= 60) {
        seconds -= 60;
        minutes++;
    }

    while (minutes >= 60) {
        minutes -= 60;
        hours++;
    }

    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    seconds = (seconds < 10 ? '0' : '') + seconds;
    console.log(`${hours}:${minutes}:${seconds}`);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);