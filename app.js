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
                    pContadorPlayer.textContent = "Score: " + contadorPlayer;
                    return "You win! Rock beat Scissors";
                }
            else if (computerSelection == "Paper"){
                    contadorComputer +=1;
                    pContadorComputer.textContent = "Score: "+ contadorComputer;
                    return "You Lose! Paper beats Rock"
                }
            else {
                    return "It's a tie"
                }
            }
        else if (playerSelection == "paper"){
                if (computerSelection == "Scissors" ){
                    contadorComputer +=1;
                    pContadorComputer.textContent = "Score: "+ contadorComputer;
                    return "You Loser! Scissors beats Paper"
                }
            else if (computerSelection == "Rock"){
                    contadorPlayer += 1;
                    pContadorPlayer.textContent = "Score: " + contadorPlayer;
                    return "You win! Paper beats Rock"
                }
            else {
                    return "It's a tie"
                }
            }
        else if (playerSelection == "scissors"){
            if(computerSelection == "Paper"){
                    contadorPlayer += 1;
                    pContadorPlayer.textContent = "Score: " + contadorPlayer;
                    return "You win! Scissors beats Paper"
                }
            else if (computerSelection == "Rock"){
                    contadorComputer +=1;
                    pContadorComputer.textContent = "Score: "+ contadorComputer;
                    return "You Loser! Rock beats Scissors"
                }
            else {
                    return "It's a tie"
                }
            }
    }
    else if (contadorPlayer >= 5){
        resultadoFinal.textContent = "Game Over. You Win!";
    }
    else if (contadorComputer >= 5){
        resultadoFinal.textContent = "Game Over. You Lose!";
    }
    
}

const result = document.querySelector("#result"); 
const p = document.createElement("p");
result.appendChild(p);

const resultadoFinal = document.createElement("p");
result.appendChild(resultadoFinal);


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
     button.addEventListener("click", () => {
         let playerSelection = button.id;
         const computerSelection = computerPlay();
         p.textContent = (playRound(playerSelection, computerSelection));
    });
});

const divContador = document.createElement("div");

const imagen = document.createElement("img");
imagen.src = "computerpng.png";
imagen.classList.add("imagen");
divContador.appendChild(imagen);

const pContadorComputer = document.createElement("p");
pContadorComputer.textContent = "Score: "+ contadorComputer;
divContador.classList.add("contadorComputer");
pContadorComputer.classList.add("contadorComputerP");

const pContadorPlayer = document.createElement("p");
pContadorPlayer.classList.add("contadorPlayer");
pContadorPlayer.textContent = "Score: " + contadorPlayer;

const player = document.querySelector("#player");
player.appendChild(pContadorPlayer);

divContador.appendChild(pContadorComputer);

const container = document.querySelector("#container"); 
container.appendChild(divContador);



