function game(yourChoice){
console.log('\x1b[95m Welcome to the game - Rock, Scissors and Papper! \x1b[0m');
console.log('\x1b[91m You should choose your move! \x1b[0m');

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
    console.log('\x1b[91m Invalid choice! Try again... \x1b[0m')

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
  
  console.log(`The computer choose ${move}.`)

  if((playTurn === Rock && move === Scissor) || (playTurn === Scissor && move === Papper) || (playTurn === Papper && move === Rock)){
      console.log(`You win!`)
      
  }else if((playTurn === Rock && move === Rock) || (playTurn === Papper && move === Papper) || (playTurn === Scissor && move === Scissor)){
      console.log(`You are draw!`)
  }else if((playTurn === Scissor && move === Rock) || (playTurn === Papper && move === Scissor) || (playTurn === Rock && move === Papper)){
      console.log(`You lose!`)
      
  }
}
game(`k`)
