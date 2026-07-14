/* 
   RETURN rock, paper, scissors based off random number generated with
      1 - rock; 2 - paper; 3 - scissors

      GET random number between 1 - 3 (inclusive)
      CASE random number given OF
         random number equals 1: RETURN "rock"
         random number equals 2: RETURN "paper"
         random number equals 3: RETURN "scissors"
*/
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      return;
  }
}

/* 
   GET user input with input being 1-3 (inclusive)
   RETURN rock, paper, scissors based off input
      1 - rock; 2 - paper; 3 - scissors
   
      PROMPT user to enter
         1 for rock, 2 for paper, or 3 for scissors
      PARSE input to an integer
      RETURN rock, paper, or scissors based off choice
*/
function getHumanChoice() {
  let userInput = prompt(`Decide your choice based off the following:
      1 - rock
      2 - paper
      3 - scissors`);

  switch (+userInput) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      return;
  }
}

// Scores
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toUpperCase();
  computerChoice = computerChoice.toUpperCase();

  determineWinner(humanChoice, computerChoice);
}

// helper function to determine winner
function determineWinner(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "ROCK":
      switch (computerChoice) {
        case "ROCK":
          console.log("TIE!");
          break;
        case "PAPER":
          console.log(`You lose ${computerChoice} beats ${humanChoice}`);
          computerScore++;
          break;
        default:
          console.log(`You win ${humanChoice} beats ${computerChoice}`);
          humanScore++;
          break;
      }
      break;
    case "PAPER":
      switch (computerChoice) {
        case "ROCK":
          console.log(`You win ${humanChoice} beats ${computerChoice}`);
          humanScore++;
          break;
        case "PAPER":
          console.log("TIE!");
          break;
        default:
          console.log(`You lose ${computerChoice} beats ${humanChoice}`);
          computerScore++;
          break;
      }
      break;
    default:
      switch (computerChoice) {
        case "ROCK":
          console.log(`You lose ${computerChoice} beats ${humanChoice}`);
          computerScore++;
          break;
        case "PAPER":
          console.log(`You win ${humanChoice} beats ${computerChoice}`);
          humanScore++;
          break;
        default:
          console.log("TIE!");
          break;
      }
      break;
  }
}

// implement playGame function
function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log("FINAL SCORE");
  console.log("Human: " + humanScore);
  console.log("Computer: " + computerScore);
}

playGame();
