//                    **START SCREEN**

// Start screen variables.
const malePlayer = document.getElementById("male-player");
const femalePlayer = document.getElementById("female-player");
const startGameBtn = document.getElementById("start-game-btn");
const gameScreen = document.getElementById("game-screen");
const showContent = document.getElementById("show-content")
const startScreen = document.getElementById("start-screen");
const avatarDiv = document.getElementById("avatar-selection");
const avatarImg= document.querySelector(".avatar-img")

// Event listeners for avatar selection.
malePlayer.addEventListener("click", appendPlayer);
femalePlayer.addEventListener("click", appendPlayer);

// Event listener for screen transition.
startGameBtn.addEventListener("click",startGame);


// Implements player avatar on game screen.
function appendPlayer(){
    if (this.classList.contains("female-player")){
        avatarImg.src = "./imgs/female.png"
    }
    else{
        avatarImg.src = "./imgs/male.png"
    }
}

// Transitions to the Game Screen.
function startGame(){
    if (startScreen.classList.contains("display")){
        startScreen.classList.remove("display")
        showContent.classList.add("display")
    }
}



//                    **GAME SCREEN**



// Game screen variable deceleration.
const buttonList = document.querySelectorAll(".selection-button");
const div = document.getElementById("result")
const runningScore = document.querySelector("#runningScore");
const winner = document.querySelector("#winner");
const newGame = document.querySelector(".new-game");
let playerScore = 0, computerScore=0;
const p = "Your current score is: ", c = "The computer's current score is: ";


// Random r.p.s computer selection generator.
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex]
}

// btn event listener.
buttonList.forEach(btn => btn.addEventListener("click", playRound))

// New game btn listener.
newGame.addEventListener("click",genNewGame);


function playRound(){
    let computerSelection = getComputerChoice()
    console.log(computerSelection)
    if (playerScore < 5 && computerScore < 5){
        if (this.classList.value === "rock"){
            if (computerSelection == "scissors"){
                div.textContent = "You Win!"
                playerScore++
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else if (computerSelection == "paper"){
                div.textContent = "You Lose :("
                computerScore++
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else{
                div.textContent = "I'ts a Tie.."
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
        }
        else if (this.classList.value === "paper"){
            if (computerSelection == "scissors"){
                div.textContent = "You Lose :("
                computerScore++
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else if (computerSelection == "paper"){
                div.textContent = "I'ts a Tie.."
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else{
                div.textContent = "You Win!"
                playerScore++
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`

            }
        }
        else {
            if (computerSelection == "scissors"){
                div.textContent = "I'ts a Tie.."
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else if (computerSelection == "paper"){
                div.textContent = "You Win!"
                playerScore++
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`

            }
            else{
                div.textContent = "You Lose :("
                computerScore++
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
        }
    }

    else{
        endScreenFunc()
        if (playerScore == 5 || computerScore == 5){
            if (playerScore == 5){
                winner.textContent = "You Are The Winner"
            }
            else if(computerScore==5){
                winner.textContent= "Game Over"
            }
        }
    }
}

function genNewGame(){
    endScreen.classList.remove("display"); 
    div.textContent="";
    runningScore.textContent ="";
    winner.textContent="";
    playerScore=0, computerScore=0;
}

const endScreen = document.getElementById("end-screen");

function endScreenFunc(){
    // showContent.classList.remove("display");
    endScreen.classList.add("display")
}

