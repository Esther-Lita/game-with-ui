const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const playerOutcome = document.querySelector("#player-outcome");
const computerOutcome = document.querySelector("#computer-outcome");
const h2 = document.querySelector("h2");

let playerScore = 0;
let computerScore = 0;

const choises = ["rock", "paper", "scissors"];

const computerPlay = () => {
  selection = Math.floor(Math.random(choises) * 3);
  return choises[selection];
};

const computerSelection = computerPlay();

rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  playRound(playerSelection, computerSelection);
});

paperBtn.addEventListener("click", () => {
  playerSelection = "paper";
  playRound(playerSelection, computerSelection);
});

scissorsBtn.addEventListener("click", () => {
  playerSelection = "scrissors";
  playRound(playerSelection, computerSelection);
});

function playRound(computerSelection, playerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    h2.innerHTML = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    playerOutcome.innerHTML = playerScore;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    h2.innerHTML = ` You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  } else if (playerSelection === computerSelection) {
    h2.innerHTML = "It's a tie!";
  }
}

console.log(`Computer choise is ` + computerSelection);

console.log(playerScore);
console.log(computerScore);
