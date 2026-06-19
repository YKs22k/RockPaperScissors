



// creat console Hello World
// Get computerChoice by using Math.floor
// Assign rock paper scissors value to 0 1 2
//get HumanChoice 
//add a restrict to convert all input to Uppercasethen lowercases
//If not in Rock Paper Scissors pop up the "ERROR INPUT"
//popup the input again
//Set a compare function
//create humanScore and computerScore ==0
//Play round
//set the humanChoice and computerChoice
//for each results console You {yourchoice} - Computer {computerChoice}

//create a for loop which repeat the playround 
//until the Computerscore or humanscore to 5
//End shows {humanScore} - {computerScore}
//by comparing  return a console and alert to announce who wins
//run playGame()

//

let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");

scoreDiv.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection) {
  if (humanScore >= 5 || computerScore >= 5) {
    return;
  }

  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    resultDiv.textContent = `It's a tie! You both chose ${playerSelection}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    resultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    console.log("You win! ${playerSelection} beats ${computerSelection}")
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
     console.log("Computer win! ${computerSelection} beats ${playerSelection}");
  }

  scoreDiv.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;


  if (humanScore === 5) {
    winnerDiv.textContent = "Game over! You won!";
    autoRefresh();
    console.log(scoreDiv.textContent);
  } else if (computerScore === 5) {
    winnerDiv.textContent = "Game over! Computer won!";
    autoRefresh();
    console.log(scoreDiv.textContent);
  } 
}

function autoRefresh() {
  setTimeout(() => {
    location.reload();
  }, 8000);
}
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

