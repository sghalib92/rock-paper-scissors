function computerPlay() {
  let randomNumber = Math.random() * 10 ;
  
  console.log(randomNumber);

  if (randomNumber < 3.33) {
      return "Rock";
  } else if (randomNumber >= 3.33 && randomNumber <= 6.66) {
      return "Paper";
  } else if (randomNumber > 6.66) {
      return "Scissor";
  }
}


console.log(computerPlay());


