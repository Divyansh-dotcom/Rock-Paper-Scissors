let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function getComputerChoice() {
  let theRandomChoice = getRandomInt(3);
  if (theRandomChoice === 0) {
    return "rock";
  } else if (theRandomChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("What do you choose:Rock,Paper or Scissors?");
  choice = choice.toLowerCase();
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You won! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You won! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You won! Scissors beats Paper");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore++;
  } else {
    console.log("It's a tie!");
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Computer: ${computerScore}`);
    console.log(`You: ${humanScore}`);
  }
  if (humanScore > computerScore) {
    console.log("You are the winner!");
  } else if (humanScore < computerScore) {
    console.log("You are the loser!");
  } else {
    console.log("Match draw!");
  }
}
playGame();
