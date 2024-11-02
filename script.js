function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 1){
        return "Rock";
    };
    if (computerChoice === 2){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Choose your weapon");
}

function playRound(humanChoice, computerChoice){
    
}