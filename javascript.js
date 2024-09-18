
function random(){
    return Math.round(Math.random() * 2);
}

function getComputerChoice() {

    if  (Math.round(Math.random() * 2) === 0) {
        return "rock"
    }
    else if (Math.round(Math.random() * 2) === 1){
        return "paper"
    }
    else {
        return "scissors"
    }
    
  }


function getHumanChoice(){
    return prompt("Rock, Paper,Scissors!").toLowerCase();

}


let humanScore = 0;

let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log(computerChoice + "! Its a tie!")
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        console.log(computerChoice + "! you lose!")
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log(computerChoice + "! you win!")
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log(computerChoice + "! you win!")
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log(computerChoice + "! you lose!")
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log(computerChoice + "! you win!")
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log(computerChoice + "! you lose!")
    }
}

function playGame(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const int = random();

    for(let i = 0; i < 5; i++) {
        return playRound(humanChoice, computerChoice);
    }
}