function computerPlay(){
    //Pick a random number between 1 and 3
    let computerChoice = Math.floor((Math.random() * 3) + 1);

    //Change computerChoice to corresponding string of Rock, Paper, or Scissors
    if (computerChoice == 1){
        computerChoice = 'Rock';
    }
    else if (computerChoice == 2){
        computerChoice = 'Paper';
    }
    else{
        computerChoice = 'Scissor'
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    let outcome = "";
    //Check for player win conditions by comparing playerSelection and computerSelection
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if (playerSelection == computerSelection){
        outcome = `${playerSelection} is the same as ${computerSelection}. It's a draw!`;
        console.log(outcome);
        return outcome;
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissor' || playerSelection == 'Paper' && computerSelection == 'Rock' || playerSelection == 'Scissor' && computerSelection == 'Paper') {
        outcome = `You Win! ${playerSelection} beats ${computerSelection}.`;
        console.log(outcome);
        return outcome;
    }
    else{
        outcome = `You Lose! ${computerSelection} beats ${playerSelection}.`;
        console.log(outcome);
        return outcome;
    }
}

function game(){
    //Run the Game Five Times
    let playerChoice = "";
    for (let i = 0; i < 5; i++){
        playerChoice = prompt("Choose Rock, Paper, or Scissor: ");
        playRound(playerChoice, computerPlay());
    }
}

let playerChoice = prompt("Choose Rock, Paper, or Scissor: ");
game();
