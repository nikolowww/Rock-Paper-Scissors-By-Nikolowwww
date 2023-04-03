function game(yourChoice){

  const Rock = 'Rock';
  const Papper = 'Papper';
  const Scissor = 'Scissors';

  let playTurn = '';

  if(yourChoice === 'r' || yourChoice === 'rock'){
      playTurn = Rock;
      console.log(`You choose ${playTurn}`)
  }else if(yourChoice === 'p' || yourChoice === 'papper'){
      playTurn = Papper;
      console.log(`You choose ${playTurn}`)
  }else if(yourChoice === 's' || yourChoice === 'scissors'){
      playTurn = Scissor;
      console.log(`You choose ${playTurn}`)
  }else(
      console.log('Invalid Input. Try again ...')

  )
 

  let random = Math.floor(Math.random() * 3) + 1;
  let move = '';


  if(random === 1){
     move = Rock
  }else if(random === 2){
     move = Papper
  }else if(random === 3){
     move = Scissor
  }

  console.log(`The computer chose ${move}.`)

  if((playTurn === Rock && move === Scissor) || (playTurn === Scissor && move === Papper) || (playTurn === Papper && move === Rock)){
      console.log(`You win!`)
  }else if((playTurn === Rock && move === Rock) || (playTurn === Papper && move === Papper) || (playTurn === Scissor && move === Scissor)){
      console.log(`You are draw!`)
  }else if((playTurn === Scissor && move === Rock) || (playTurn === Papper && move === Scissor) || (playTurn === Rock && move === Papper)){
      console.log(`You lose!`)
  }
}
game(`p`)
