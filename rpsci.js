


console.log("Hello World")

function getComputerChoice() {

    const computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

function choiceName(choice) {
  if (choice === 0) return "Rock";
  if (choice === 1) return "Paper";
  if (choice === 2) return "Scissors";
}
function getHumanChoice() {
    const inputChoice = prompt("Choose Rock, Paper, or Scissors:");
  const humanChoice =
    inputChoice.charAt(0).toUpperCase() + inputChoice.slice(1).toLowerCase();
    if (humanChoice === "Rock") {
    return 0;
  } else if (humanChoice === "Paper") {
    return 1;
  } else if (humanChoice === "Scissors") {
    return 2;
  } else {
    alert('Invalid Choice! Please only enter from "Rock, Paper, or Scissors"');
    return humanChoice;

}
}

function play() {
    let humanScore = 0;
    let computerScore = 0;

function playRound(humanSelection, computerSelection) {

    if(humanSelection === computerSelection) {
        return console.log(`It's a tie! You both chose ${choiceName(computerSelection)}.`);
    } else if( 
      (humanSelection === 0 && computerSelection === 2) ||
      (humanSelection === 1 && computerSelection === 0) ||
      (humanSelection === 2 && computerSelection === 1)) {
        humanScore++;
        console.log(`You win! ${choiceName(humanSelection)} beats ${choiceName(computerSelection)}`);
    }  else {
        computerScore++;
        console.log(`You lose! ${choiceName(computerSelection)} beats ${choiceName(humanSelection)}`);
    }
}

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`);
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log(`Final score: Human ${humanScore} - Computer ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("You lost the game!");
  } else {
    console.log("The game is a tie!");
  }
}


play();
