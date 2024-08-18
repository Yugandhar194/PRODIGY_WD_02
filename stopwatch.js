let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let laps = [];

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);

function startTimer() {
    interval = setInterval(runTimer, 10);
    document.querySelector('.stopwatch-display').classList.add('active');
}

function stopTimer() {
    clearInterval(interval);
    document.querySelector('.stopwatch-display').classList.remove('active');
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('minutes').textContent = "00";
    document.getElementById('seconds').textContent = "00";
    document.getElementById('milliseconds').textContent = "00";
    document.querySelector('.stopwatch-display').classList.remove('active');
    document.getElementById('laps').innerHTML = "";
    laps = [];
}

function runTimer() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    document.getElementById('minutes').textContent = pad(minutes);
    document.getElementById('seconds').textContent = pad(seconds);
    document.getElementById('milliseconds').textContent = pad(milliseconds);
}

function pad(number) {
    return number < 10 ? "0" + number : number;
}

function recordLap() {
    if (minutes !== 0 || seconds !== 0 || milliseconds !== 0) {
        const lapTime = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
        laps.push(lapTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${laps.length}: ${lapTime}`;
        document.getElementById('laps').appendChild(lapItem);
    }
}
