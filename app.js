let options = ["Rock", "Paper", "Scissors"];

function computerPlay (){
   let posicion = Math.floor(Math.random() * 3);
   return options[posicion];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == "rock"){
        if(computerSelection == "Scissors" ){
            return "You win! Rock beat Scissors";
        }
        else if (computerSelection == "Paper"){
            return "You Lose! Paper beats Rock"
        }
        else {
            return "empate"
        }
    }
    else if (playerSelection.toLowerCase() == "paper"){
        if (computerSelection == "Scissors" ){
            return "You Loser! Scissors beats Paper"
        }
        else if (computerSelection == "Rock"){
            return "You win! Paper beats Rock"
        }
        else {
            return "empate"
        }
    }
    else if (playerSelection.toLowerCase() == "scissors"){
        if(computerSelection == "Paper"){
            return "You win! Scissors beats Paper"
        }
        else if (computerSelection == "Rock"){
            return "You Loser! Rock beats Scissors"
        }
        else {
            return "empate"
        }
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("choose between rock, paper or scissors: ");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()