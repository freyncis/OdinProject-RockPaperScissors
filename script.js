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
    prompt("Choose your weapon");
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice){
    let humanChoice = getHumanChoice.toLowerCase();
    return humanChoice;
}

console.log(playRound());