function computerPlay() {
  let randomNumber = Math.random() * 10 ;

  if (randomNumber < 3.33) {
      return "Rock";
  } else if (randomNumber >= 3.33 && randomNumber <= 6.66) {
      return "Paper";
  } else if (randomNumber > 6.66) {
      return "Scissor";
  }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissor") {
        return `You win! ${playerSelection} beats ${computerSelection}.`;

    } else if (playerSelection === "Rock" && computerSelection === "Paper") {

        return `You lose! ${computerSelection} beats ${playerSelection}.`;

    } else if (playerSelection === "Paper" && computerSelection === "Scissor") {

        return `You lose! ${computerSelection} beats ${playerSelection}.`

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {

        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === "Scissor" && computerSelection === "Rock") {

        return `You lose! ${computerSelection} beats ${playerSelection}.`
    } else if (playerSelection === computerSelection) {

        return `It's a tie!`;
    }
}


console.log(playRound('Rock', computerPlay()));


