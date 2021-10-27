let options = ["Rock", "Paper", "Scissors"];

function computerPlay (){
   let posicion = Math.floor(Math.random() * 3);
   return options[posicion];
}

let contadorComputer = 0;
let contadorPlayer = 0;

function playRound(playerSelection, computerSelection){
    if (contadorComputer < 5 && contadorPlayer < 5){
        if (playerSelection == "rock"){
            if(computerSelection == "Scissors" ){
                    contadorPlayer += 1;
                    pContadorPlayer.textContent = "contador player: " + contadorPlayer;
                    return "You win! Rock beat Scissors";
                }
            else if (computerSelection == "Paper"){
                    contadorComputer +=1;
                    pContadorComputer.textContent = "contador computer: "+ contadorComputer;
                    return "You Lose! Paper beats Rock"
                }
            else {
                    return "empate"
                }
            }
        else if (playerSelection == "paper"){
                if (computerSelection == "Scissors" ){
                    contadorComputer +=1;
                    pContadorComputer.textContent = "contador computer: "+ contadorComputer;
                    return "You Loser! Scissors beats Paper"
                }
            else if (computerSelection == "Rock"){
                    contadorPlayer += 1;
                    pContadorPlayer.textContent = "contador player: " + contadorPlayer;
                    return "You win! Paper beats Rock"
                }
            else {
                    return "empate"
                }
            }
        else if (playerSelection == "scissors"){
            if(computerSelection == "Paper"){
                    contadorPlayer += 1;
                    pContadorPlayer.textContent = "contador player: " + contadorPlayer;
                    return "You win! Scissors beats Paper"
                }
            else if (computerSelection == "Rock"){
                    contadorComputer +=1;
                    pContadorComputer.textContent = "contador computer: "+ contadorComputer;
                    return "You Loser! Rock beats Scissors"
                }
            else {
                    return "empate"
                }
            }
    }
    else if (contadorPlayer >= 5){
        resultadoFinal.textContent = "has ganado";
    }
    else if (contadorComputer >= 5){
        resultadoFinal.textContent = "loser";
    }
    
}

const result = document.querySelector("#result"); 
const p = document.createElement("p");
result.appendChild(p);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
     button.addEventListener("click", () => {
         let playerSelection = button.id;
         const computerSelection = computerPlay();
         p.textContent = (playRound(playerSelection, computerSelection));
    });
});

const divContador = document.createElement("div");
const pContadorComputer = document.createElement("p");
pContadorComputer.textContent = "contador computer: "+ contadorComputer;
const pContadorPlayer = document.createElement("p");
pContadorPlayer.textContent = "contador player: " + contadorPlayer;

const resultadoFinal = document.createElement("p");


divContador.appendChild(pContadorComputer);
divContador.appendChild(pContadorPlayer);
divContador.appendChild(resultadoFinal);

const container = document.querySelector("#container"); 
container.appendChild(divContador);


