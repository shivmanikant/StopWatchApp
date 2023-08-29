const timeDisplay = document.querySelector('.time-display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let startTime;
let interval;

function updateDisplay() {
    const currentTime = Date.now() - startTime;
    const minutes = Math.floor(currentTime / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = (currentTime % 1000).toString().slice(0, 3).padStart(3, '0');
    timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds}`;
}

startBtn.addEventListener('click', () => {
    startTime = Date.now() - (startTime || 0);
    clearInterval(interval);
    interval = setInterval(updateDisplay, 10);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    startTime = undefined;
    timeDisplay.textContent = '00:00.000';
});
