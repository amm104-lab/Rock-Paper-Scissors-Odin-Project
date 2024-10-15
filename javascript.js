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

function updateScoreDisplay(){
    scr.textContent = "You: " + humanScore +" CPU: " + computerScore + " Ties: " + ties
}

function updateResultDisplay(computerChoice, resultText){
    res.textContent = computerChoice + resultText;
}

let humanScore = 0;
let computerScore = 0;
let ties = 0

function playRound(humanChoice, computerChoice){
    
    if(humanScore+computerScore+ties===5){
        
        if(humanScore>computerScore){
            
            win.textContent = "You win the game!"
            win.classList.add("font-effect-win");
        }
        else if(computerScore>humanScore){
            
            win.textContent = "You lose the game!"
            win.classList.add("font-effect-lose");
        }
        else{
            win.textContent = "It's a tie!"
            win.classList.add("font-effect-tie");
        }
    }

    else{

        if (humanChoice === computerChoice) {

            updateResultDisplay(computerChoice,"! It's a tie!");
            ties ++;
            updateScoreDisplay()
        }
        else if(humanChoice === "rock" && computerChoice === "paper" ||
                humanChoice === "paper" && computerChoice === "scissors"||
                humanChoice === "scissors" && computerChoice === "rock"){

            updateResultDisplay(computerChoice,"! You lose!");
            computerScore++;
            updateScoreDisplay()
        }

        else if(humanChoice === "rock" && computerChoice === "scissors" ||
                humanChoice === "paper" && computerChoice === "rock" ||
                humanChoice === "scissors" && computerChoice === "paper"){

            updateResultDisplay(computerChoice,"! You win!");
            humanScore++;
            updateScoreDisplay()
        }
        }
}

function playGame(humanChoice){

    //for(let i = 0; i < 5; i++) {
       // const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    //}

    //console.log("You: "+humanScore+" CPU: "+computerScore+" Ties: "+ties)
}

const rock = document.querySelector("#Rock");
rock.addEventListener("click", () => {
    playGame("rock")
})

const paper = document.querySelector("#Paper");
paper.addEventListener("click", () => {
    playGame("paper")
})

const scissors = document.querySelector("#Scissors");
scissors.addEventListener("click", () => {
    playGame("scissors")
})

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    humanScore=0;
    computerScore=0;
    ties=0;
    scr.textContent = "You: " + humanScore +" CPU: " + computerScore + " Ties: " + ties
    win.textContent = "";
    win.classList.remove("font-effect-win");
    win.classList.remove("font-effect-lose");
    win.classList.remove("font-effect-tie");
    scr.textContent = "";
    res.textContent = "";
})
