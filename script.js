let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const userScoreEl = document.getElementById('user-score');
const compScoreEl = document.getElementById('comp-score');
const reset = document.getElementById('reset');

const userImg = document.getElementById('user-img');
const compImg = document.getElementById('comp-img');

const options = ['rock', 'paper', 'scissors'];

const images = {
  rock: "images/rock.jpg",
  paper: "images/paper.webp",
  scissors: "images/scissors.jpg"
};

// Computer choice
function getComputerChoice() {
  let index = Math.floor(Math.random() * 3);
  return options[index];
}

// Winner logic
function getWinner(user, comp) {
  if (user === comp) return 'draw';

  if (
    (user === 'rock' && comp === 'scissors') ||
    (user === 'paper' && comp === 'rock') ||
    (user === 'scissors' && comp === 'paper')
  ) {
    return 'user';
  } else {
    return 'comp';
  }
}

// Handle click
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.dataset.choice;
    const compChoice = getComputerChoice();

    // Show images
    userImg.src = images[userChoice];
    compImg.src = images[compChoice];

    const winner = getWinner(userChoice, compChoice);

    if (winner === "user") {
      userScore++;
      result.textContent = `You win! ${userChoice} beats ${compChoice}`;
    } else if (winner === "comp") {
      compScore++;
      result.textContent = `Computer wins! ${compChoice} beats ${userChoice}`;
    } else {
      result.textContent = `It's a draw!`;
    }

    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;
  });
});

// Reset game
reset.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;

  userScoreEl.textContent = 0;
  compScoreEl.textContent = 0;

  result.textContent = "Game reset! Make your move.";

  userImg.src = "images/question-mark.webp";
  compImg.src = "images/question-mark.webp";
});

