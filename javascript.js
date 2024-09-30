const res = document.querySelector("#result");
const scr = document.querySelector("#score");
const win = document.querySelector("#final");

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

let ties = 0

function playRound(humanChoice, computerChoice){
if(humanScore+computerScore+ties===5){
    //declare winner
    if(humanScore>computerScore){
        win.textContent = "You win the game!"
    }
    else if(computerScore>humanScore){
        win.textContent = "You lose the game!"
    }
    else{
        win.textContent = "It's a tie!"
    }
}

else{
    if (humanChoice === computerChoice) {
        /*console.log(computerChoice + "! Its a tie!")
        ties++*/
        res.textContent = computerChoice + "! It's a tie!";
        ties ++;
        scr.textContent = "You: " + humanScore +" CPU: " + computerScore + " Ties: " + ties
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        /*console.log(computerChoice + "! you lose!")
        computerScore++*/
        res.textContent = computerChoice + "! You lose!";
        computerScore++;
        scr.textContent = "You: " + humanScore +" CPU: " + computerScore + " Ties: " + ties
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        /*console.log(computerChoice + "! you win!")
        humanScore++*/
        res.textContent = computerChoice + "! You win!";
        humanScore++;
        scr.textContent = "You: " + humanScore +" CPU: " + computerScore + " Ties: " + ties
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        /*console.log(computerChoice + "! you win!")
        humanScore++*/
        res.textContent = computerChoice + "! You win!";
        humanScore++;
        scr.textContent = "You: " + humanScore +" CPU: " + computerScore + " Ties: " + ties
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        /*console.log(computerChoice + "! you lose!")
        computerScore++*/
        res.textContent = computerChoice + "! You lose!";
        computerScore++;
        scr.textContent = "You: " + humanScore +" CPU: " + computerScore + " Ties: " + ties
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        /*console.log(computerChoice + "! you win!")
        humanScore++*/
        res.textContent = computerChoice + "! You win!";
        humanScore++;
        scr.textContent = "You: " + humanScore +" CPU: " + computerScore + " Ties: " + ties
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        /*console.log(computerChoice + "! you lose!")
        computerScore++*/
        res.textContent = computerChoice + "! You lose!";
        computerScore++;
        scr.textContent = "You: " + humanScore +" CPU: " + computerScore + " Ties: " + ties
    }
}
}

function playGame(humanChoice){

    //for(let i = 0; i < 5; i++) {
       // const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    //}

    console.log("You: "+humanScore+" CPU: "+computerScore+" Ties: "+ties)
}



const rock = document.querySelector("#Rock");
rock.addEventListener("click", () => {
    playGame("rock")
})

const paper = document.querySelector("#Paper");
paper.addEventListener("click", () => {
    playRound("paper",getComputerChoice())
})

const scissors = document.querySelector("#Scissors");
scissors.addEventListener("click", () => {
    playRound("scissors",getComputerChoice())
})

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    humanScore=0;
    computerScore=0;
    ties=0;
    scr.textContent = "You: " + humanScore +" CPU: " + computerScore + " Ties: " + ties
    win.textContent = "";
})
