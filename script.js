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
         break;
      case 2: 
         return "paper";
         break;
      case 3:
         return "scissors";
         break;
      default:
         return;
   }
}
   