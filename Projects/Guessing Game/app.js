let generateRandomValue = parseInt(Math.random() * 100 + 1); // generting random number.
const inputField = document.querySelector(".guessField");
const submitButton = document.querySelector(".submitGuess");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".guessRemaining");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".results");

const paragraph = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const guess = parseInt(inputField.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${generateRandomValue}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === generateRandomValue) {
    displayMessage(`You guessed it right.`);
  } else if (guess < generateRandomValue) {
    displayMessage(`Number is toooo low.`);
  } else if (guess > generateRandomValue) {
    displayMessage(`Number is toooo high.`);
  }
}

function displayGuess(guess) {
  inputField.value = "";
  guesses.innerHTML += `${guess}, `;
  numGuess++;
  lastResult.innerHTML = `${11 - numGuess}`;
  lastResult.innerHTML = lastResult.innerHTML < "0" ? 0 : lastResult.innerHTML;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  inputField.value = "";
  inputField.setAttribute("disabled", "");
  paragraph.classList.add("button");
  inputField.style.cursor = "no-drop";
  lowOrHi.style.color = "red";
  document.getElementById("submitButton").disabled = true;
  submitButton.style.cursor = "no-drop";
  paragraph.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(paragraph);
  playGame = false;
  startNewGame();
}

function startNewGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    generateRandomValue = parseInt(Math.random() * 100 + 1); // generting random number.
    prevGuess = [];
    numGuess = 1;
    guesses.innerHTML = "";
    lastResult.innerHTML = `${11 - numGuess}`;
    inputField.removeAttribute("disabled", "");
    inputField.style.cursor = "default";
    document.getElementById("submitButton").disabled = false;
    submitButton.style.cursor = "pointer";
    startOver.removeChild(paragraph);
    lowOrHi.innerHTML = "";
    playGame = true;
  });
}
