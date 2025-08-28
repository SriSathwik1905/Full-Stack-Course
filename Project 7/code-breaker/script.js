// Code Breaker – The Array Heist
const ARRAY_SIZE = 8;
let array = Array(ARRAY_SIZE).fill(null);
let secretPattern = [];
let currentLevel = 1;
let timer = null;
let timeLeft = 60;
let gameActive = true;

const arrayDisplay = document.getElementById('array-display');
const feedback = document.getElementById('feedback');
const secretPatternDiv = document.getElementById('secret-pattern');
const timerDiv = document.getElementById('timer');
const levelInfoDiv = document.getElementById('level-info');

const beep = document.getElementById('beep');
const buzz = document.getElementById('buzz');
const fanfare = document.getElementById('fanfare');

function renderArray(highlights = [], foundIndices = []) {
  arrayDisplay.innerHTML = '';
  for (let i = 0; i < ARRAY_SIZE; i++) {
    const cell = document.createElement('div');
    cell.className = 'array-cell';
    if (array[i] !== null) cell.textContent = array[i];
    if (highlights.includes(i)) cell.classList.add('highlight');
    if (foundIndices.includes(i)) cell.classList.add('found');
    arrayDisplay.appendChild(cell);
  }
}

function showFeedback(msg, isError = false) {
  feedback.textContent = msg;
  feedback.style.color = isError ? '#e17055' : '#00b894';
  if (isError && buzz) buzz.play();
}

function playBeep() { if (beep) beep.play(); }
function playFanfare() { if (fanfare) fanfare.play(); }

function insertAt(index, value) {
  if (!gameActive) return;
  if (index < 0 || index > ARRAY_SIZE - 1) {
    showFeedback('Index out of bounds!', true);
    return;
  }
  if (array[ARRAY_SIZE - 1] !== null) {
    showFeedback('Array is full!', true);
    return;
  }
  for (let i = ARRAY_SIZE - 1; i > index; i--) {
    array[i] = array[i - 1];
  }
  array[index] = value;
  renderArray([index]);
  playBeep();
  showFeedback(`Inserted ${value} at index ${index}!`);
  checkPattern();
}

function deleteAt(index) {
  if (!gameActive) return;
  if (index < 0 || index > ARRAY_SIZE - 1) {
    showFeedback('Index out of bounds!', true);
    return;
  }
  if (array[index] === null) {
    showFeedback('No element at this index!', true);
    return;
  }
  for (let i = index; i < ARRAY_SIZE - 1; i++) {
    array[i] = array[i + 1];
  }
  array[ARRAY_SIZE - 1] = null;
  renderArray([index]);
  playBeep();
  showFeedback(`Deleted element at index ${index}.`);
}

function parsePatternInput(str) {
  const nums = str.split(',').map(s => parseInt(s.trim(), 10));
  if (nums.some(isNaN)) return null;
  return nums;
}

async function searchPattern(pattern) {
  if (!gameActive) return;
  if (!pattern || pattern.length === 0) {
    showFeedback('Enter a valid pattern (e.g., 1,2,3)', true);
    return;
  }
  for (let i = 0; i <= ARRAY_SIZE - pattern.length; i++) {
    let match = true;
    let highlights = [];
    for (let j = 0; j < pattern.length; j++) {
      highlights.push(i + j);
      renderArray(highlights);
      await new Promise(res => setTimeout(res, 300));
      if (array[i + j] !== pattern[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      renderArray([], Array.from({length: pattern.length}, (_, k) => i + k));
      showFeedback('Pattern found!');
      playFanfare();
      checkPattern(pattern);
      return;
    }
  }
  showFeedback('Pattern not found.', true);
}

function resetArray() {
  array = Array(ARRAY_SIZE).fill(null);
  renderArray();
  showFeedback('Array reset.');
}

function randomPattern(length) {
  return Array.from({length}, () => Math.floor(Math.random() * 10));
}

function showSecretPattern() {
  secretPatternDiv.textContent = `Secret Pattern: [${secretPattern.join(', ')}]`;
}

function checkPattern(pattern = secretPattern) {
  for (let i = 0; i <= ARRAY_SIZE - pattern.length; i++) {
    let match = true;
    for (let j = 0; j < pattern.length; j++) {
      if (array[i + j] !== pattern[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      renderArray([], Array.from({length: pattern.length}, (_, k) => i + k));
      showFeedback('Level Complete!');
      playFanfare();
      gameActive = false;
      clearInterval(timer);
      return true;
    }
  }
  return false;
}

function startLevel(level) {
  currentLevel = level;
  resetArray();
  gameActive = true;
  let patternLength = level === 1 ? 2 : (level === 2 ? 3 : 3);
  secretPattern = randomPattern(patternLength);
  if (level === 3) secretPattern = [...secretPattern].reverse();
  showSecretPattern();
  levelInfoDiv.textContent = `Level ${level}: Find a ${patternLength}-digit pattern${level === 3 ? ' (in reverse order)' : ''}`;
  startTimer();
}

function startTimer() {
  timeLeft = 60;
  timerDiv.textContent = `Time Left: ${timeLeft}s`;
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timerDiv.textContent = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      showFeedback('Time is up! Try again.', true);
      gameActive = false;
    }
  }, 1000);
}

document.getElementById('insert-btn').onclick = () => {
  const idx = parseInt(document.getElementById('index-input').value, 10);
  const val = parseInt(document.getElementById('value-input').value, 10);
  if (isNaN(idx) || isNaN(val) || val < 0 || val > 9) {
    showFeedback('Enter valid index and value (0-9).', true);
    return;
  }
  insertAt(idx, val);
};

document.getElementById('delete-btn').onclick = () => {
  const idx = parseInt(document.getElementById('index-input').value, 10);
  if (isNaN(idx)) {
    showFeedback('Enter a valid index.', true);
    return;
  }
  deleteAt(idx);
};

document.getElementById('search-btn').onclick = async () => {
  const patternStr = document.getElementById('pattern-input').value;
  const pattern = parsePatternInput(patternStr);
  if (!pattern) {
    showFeedback('Enter a valid pattern (e.g., 1,2,3)', true);
    return;
  }
  await searchPattern(pattern);
};

document.getElementById('reset-btn').onclick = () => {
  resetArray();
};

// Level progression
let level = 1;
function nextLevel() {
  level++;
  if (level > 3) {
    showFeedback('You cracked all levels!');
    levelInfoDiv.textContent = 'Game Complete!';
    secretPatternDiv.textContent = '';
    timerDiv.textContent = '';
    playFanfare();
    return;
  }
  startLevel(level);
}

// On level complete, advance after a short delay
document.addEventListener('DOMContentLoaded', () => {
  renderArray();
  startLevel(1);
  feedback.textContent = 'Insert digits and search for the secret pattern!';
});
