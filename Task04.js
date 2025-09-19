// Select the container where stopwatch will appear
const projectsContainer = document.querySelector('.project-cards');

// Create Stopwatch Card
const stopwatchCard = document.createElement('div');


projectsContainer.appendChild(stopwatchCard);

// Stopwatch variables
let time = 0;
let running = false;
let interval;

// DOM Elements
const timeDisplay = document.getElementById('timeDisplay');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

// Function to update time
function updateTime() {
  time++;
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  timeDisplay.textContent = 
    `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

// Start/Stop button
startStopBtn.addEventListener('click', () => {
  if (!running) {
    interval = setInterval(updateTime, 1000);
    startStopBtn.textContent = 'Stop';
    running = true;
  } else {
    clearInterval(interval);
    startStopBtn.textContent = 'Start';
    running = false;
  }
});

// Reset button
resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  time = 0;
  running = false;
  timeDisplay.textContent = '00:00:00';
  startStopBtn.textContent = 'Start';
});
