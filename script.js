// Returns a random string either "Rock" "Paper" or "Scissor"
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

/*  Function plays a single round of Rock Paper Scissors,
    it accepts two arguments, and returns a string
    indicating the winner or loser based on comparisons.
*/
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

        return `Tie!`;
    }
}

/* game() function calls playRound 5 times with two arguments, a player input received via prompt and the return value of the call to the computerPlay() function. Returns a string declaring winner, loser or tie.
*/

function game() {
   let score = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock Paper Scissors shoot!");

        if ( (playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === 'scissor')) {

            playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
            
            let computerSelection = computerPlay();
            let winner = playRound(playerSelection, computerSelection);
            
            console.log(winner);

            if (winner.includes('win')) score++
            else if (winner.includes('lose')) score--;
            
        } else {
            i--
        }

    }

    return (score > 0) ? "Player wins!" :
        (score < 0) ? "Computer wins!" :
        "No one wins! It's a tie.";
}

console.log(game());;


