const res = document.querySelector("#result");
const scr = document.querySelector("#score");
const win = document.querySelector("#final");

let humanScore = 0;
let computerScore = 0;
let ties = 0

let e = document.querySelector(".btnGroup");
let rocks = document.querySelector("#Rock");
let papers = document.querySelector("#Paper");
let scissorss = document.querySelector("#Scissors");

function random(){
    return Math.round(Math.random() * 2);
}

function getComputerChoice() {
    if  (random() == 0) {
        return "rock";
    }
    else if (random() === 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function updateScoreDisplay(){
    scr.textContent = "You: " + humanScore +" CPU: " + computerScore + " Ties: " + ties;
}

function updateResultDisplay(computerChoice, resultText){
    res.textContent = computerChoice + resultText;
}

function killButtons(){
    let btn = e.lastElementChild;

    while(btn){
        e.removeChild(btn);
        btn = e.lastElementChild;
    }
}

function checkGame(){
    if(humanScore + computerScore + ties === 5){
        if(humanScore > computerScore){
            win.textContent = "You win the game!";
            win.classList.add("font-effect-win");
        }
        else if(computerScore > humanScore){
            win.textContent = "You lose the game!";
            win.classList.add("font-effect-lose");
        }
        else{
            win.textContent = "It's a tie!";
            win.classList.add("font-effect-tie");
        }
    }
    else{
        return 1;
    }
}

function capitalizeFirst(letters){
    return letters.slice(0,1).toUpperCase();
}

function capitalize(content){
    return capitalizeFirst(content) + content.slice(1);
}

function declareWinner(humanChoice, computerChoice){
    return humanChoice === computerChoice ? 
        "tie" : 
            humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "scissors"||
            humanChoice === "scissors" && computerChoice === "rock" ?
                "human" : 
                    humanChoice === "rock" && computerChoice === "scissors" ||
                    humanChoice === "paper" && computerChoice === "rock" ||
                    humanChoice === "scissors" && computerChoice === "paper" ?
                        "cpu" : "invalid";
}

function appendBtn(){
    e.appendChild(rocks);
    e.appendChild(papers);
    e.appendChild(scissorss);
}

function reset(){
    humanScore = computerScore = ties = 0;
    updateScoreDisplay();
    win.textContent = scr.textContent = res.textContent = "";
    win.classList.remove("font-effect-win", "font-effect-lose", "font-effect-tie");
    appendBtn();
}

function playRound(humanChoice, computerChoice){
        if (declareWinner(humanChoice,computerChoice) == "tie") {
            updateResultDisplay(capitalize(capitalize(computerChoice)),"! It's a tie!");
            ties ++;
            updateScoreDisplay()
        }
        else if(declareWinner(humanChoice,computerChoice) == "cpu"){
            updateResultDisplay(capitalize(computerChoice),"! You lose!");
            computerScore++;
            updateScoreDisplay()
        }
        else if(declareWinner(humanChoice,computerChoice) == "human"){
            updateResultDisplay(capitalize(computerChoice),"! You win!");
            humanScore++;
            updateScoreDisplay()
        }
}

function playGame(humanChoice){
        const computerChoice = getComputerChoice();
        if(checkGame() != null){
        playRound(humanChoice, computerChoice);}
        else{
            killButtons();
        }
}

const rock = document.querySelector("#Rock");
rock.addEventListener("click", () => {
    playGame("rock");
})

const paper = document.querySelector("#Paper");
paper.addEventListener("click", () => {
    playGame("paper");
})

const scissors = document.querySelector("#Scissors");
scissors.addEventListener("click", () => {
    playGame("scissors");
})

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    reset();
})
