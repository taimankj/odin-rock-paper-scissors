// Scores
let humanScore = 0;
let computerScore = 0;

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
      return "ROCK";
    case 2:
      return "PAPER";
    case 3:
      return "SCISSORS";
    default:
      return;
  }
}

function playRound(humanChoice, computerChoice) {
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
  console.log("FINAL SCORE");
  console.log("Human: " + humanScore);
  console.log("Computer: " + computerScore);
}
