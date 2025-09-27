// Elements
const consentModal = document.getElementById("consentModal");
const startBtn = document.getElementById("startGame");
const cancelBtn = document.getElementById("cancelGame");
const gameContainer = document.querySelector(".game-container");

const input = document.getElementById("guessInput");
const button = document.getElementById("guessButton");
const message = document.getElementById("message");

let targetNumber;
let attempts = 0;

// Show game only after consent
startBtn.onclick = () => {
  consentModal.style.display = "none";
  gameContainer.style.display = "block";

  // Initialize the target number
  targetNumber = Math.ceil(Math.random() * 10);
};

cancelBtn.onclick = () => {
  consentModal.querySelector("p").textContent = "Maybe next time!";
  startBtn.style.display = "none";
  cancelBtn.textContent = "Close";
};

// Input validation
input.addEventListener("input", () => {
  const value = Number(input.value);
  if (value > 0 && value <= 10) {
    button.disabled = false;
    message.textContent = "";
  } else {
    button.disabled = true;
    if (input.value == "") {
      message.textContent = "Enter a number between 1 and 10.";
      message.style.color = "red";
    } else {
      message.textContent = "";
      if (input.value > 10) {
        message.textContent = "Your guess must be between 1 and 10.";
      } else if (input.value < 1) {
        message.textContent = "Your guess must be at least 1 and not more than 10.";
        button.disabled = true;
      } else if (input.value === ".") {
        message.textContent = "Decimals are not allowed, use whole numbers only.";
        button.disabled = true;
      }
    }
  }
});

// Check guess function
function checkGuess() {
  const userGuess = Number(input.value);
  Math.ceil(userGuess)
  attempts++;

  if (userGuess === targetNumber) {
    message.textContent = `Congratulations! You guessed the correct number. It took you ${attempts} attempt(s).`;
    message.style.color = "green";
    message.style.borderEndEndRadius = "1px";
  } else if (userGuess > targetNumber) {
    message.textContent = `${userGuess} is too high. Try again!`;
    message.style.color = "red";
  } else if (userGuess < targetNumber) {
    message.textContent = `${userGuess} is too low. Try again!`;
    message.style.color = "red";
  }

  input.value = "";
  button.disabled = true;
}

// Attach guess button
button.addEventListener("click", checkGuess);

// Prevent dot input
input.addEventListener("keypress", (e) => {
  if (e.key === ".") {
    e.preventDefault();
    message.textContent = "Decimals are not allowed, only whole numbers.";
  }
});

input.addEventListener("input", () => {
  // Remove any non-digit characters
  input.value = input.value.replace(/\D/g, '');
});
