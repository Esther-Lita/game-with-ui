const playerOutcome = document.querySelector("#player-outcome");
const computerOutcome = document.querySelector("#computer-outcome");
const computerPick = document.querySelector(".computer-choice");
const playerPick = document.querySelector(".player-choice");
const scissorsBtn = document.querySelector("#scissors-btn");
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const choiceBtn = document.querySelectorAll(".btn");
const message = document.querySelector(".message");
const h1 = document.querySelector("h1");

let playerCount = 0;
let computerCount = 0;
let roundCount = 0;

const choices = ["ROCK", "PAPER", "SCISSORS"];

const computerPlay = () => {
  selection = Math.floor(Math.random(choices) * 3);
  return choices[selection];
};

choiceBtn.forEach((button) =>
  button.addEventListener("click", () => {
    playerChoice = button.textContent;
    singleRound(computerPlay(), playerChoice);
  })
);

function singleRound(computerPlay, playerChoice) {
  if (playerChoice == undefined) {
    playerChoice;
  } else if (playerChoice) {
    if (playerChoice === computerPlay) {
      computerPick.innerHTML = computerPlay;
      playerPick.innerHTML = playerChoice;
      message.innerHTML = "It's a tie! 🤝";
    } else if (
      (playerChoice === "ROCK" && computerPlay === "SCISSORS") ||
      (playerChoice === "PAPER" && computerPlay === "ROCK") ||
      (playerChoice === "SCISSORS" && computerPlay === "PAPER")
    ) {
      computerPick.innerHTML = computerPlay;
      playerPick.innerHTML = playerChoice;
      playerCount++;
      roundCount++;
      playerOutcome.innerHTML = playerCount;
      message.innerHTML = `You win! ${playerChoice} beats ${computerPlay} 🥳`;
    } else {
      computerPick.innerHTML = computerPlay;
      playerPick.innerHTML = playerChoice;
      computerCount++;
      roundCount++;
      message.innerHTML = ` You lose! ${computerPlay} beats ${playerChoice} 😭`;
      computerOutcome.innerHTML = computerCount;
      playerOutcome.innerHTML = playerCount;
    }
    gameEnd(roundCount);
  }
}

const disableBtn = (props) => {
  rockBtn.disabled = props;
  scissorsBtn.disabled = props;
  paperBtn.disabled = props;
};

function gameEnd() {
  if (roundCount == 5) {
    disableBtn(true);
    if (playerCount > computerCount) {
      message.innerHTML = `Player is the winner! ${playerCount} - ${computerCount}`;
      playAgain();
    } else if (computerCount > playerCount) {
      message.innerHTML = `Computer is the winner! ${computerCount} - ${playerCount}`;
      playAgain();
    } else if (playerCount == computerCount) {
      message.innerHTML = `You are both winners! ${computerCount} - ${playerCount}`;
      playAgain();
    }
  }
}

setTimeout(function () {
  overlay.style.display = "none";
  modal.style.display = "none";
}, duration);

function playAgain() {
  setTimeout(() => {
    const answer = confirm("Would you like to play again?");
    if (answer) {
      resetGame();
    } else {
      window.close();
    }
  }, 1000);
}

function resetGame() {
  message.innerHTML = `Click to start`;
  roundCount = 0;
  playerCount = 0;
  computerCount = 0;
  disableBtn(false);
  computerOutcome.innerHTML = computerCount;
  playerOutcome.innerHTML = playerCount;
}
