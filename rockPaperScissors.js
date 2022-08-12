//                    **START SCREEN**

// Start screen variables.
const maleUser = document.getElementById("male-user");
const femaleUser = document.getElementById("female-user");
const johnComputer = document.getElementById("john-computer");
const lucyComputer = document.getElementById("lucy-computer");
const laylaComputer = document.getElementById("layla-computer");
const startGameBtn = document.getElementById("start-game-btn");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const showContent = document.getElementById("show-content")
const userAvatarDiv = document.getElementById("user-avatar-div");
const computerAvatarDiv = document.getElementById("computer-avatar-div");
const userAvatarImg= document.querySelector(".user-avatar-img")
const computerAvatarImg = document.querySelector(".computer-avatar-img");

// Event listeners for avatar selection.
maleUser.addEventListener("click", appendPlayer);
femaleUser.addEventListener("click", appendPlayer);

// Event listener for screen transition.
startGameBtn.addEventListener("click",startGame);


// Implements player avatar on game screen.
function appendPlayer(){
    if (this.classList.contains("female-user")){
        userAvatarImg.src = "./imgs/female.png"
    }
    else{
        userAvatarImg.src = "./imgs/male.png"
    }
}

johnComputer.addEventListener("click", appendComputer);
lucyComputer.addEventListener("click", appendComputer);
laylaComputer.addEventListener("click", appendComputer);


function appendComputer(){
    if (this.classList.contains("john-computer")){
        computerAvatarImg.src = "./imgs/john.png"
    }
    else if (this.classList.contains("lucy-computer")){
        computerAvatarImg.src = "./imgs/lucy.png"
    }
    else{
        computerAvatarImg.src = "./imgs/layla.png"
    }
}

// Transitions to the Game Screen.
function startGame(){
    if (startScreen.classList.contains("display")){
        // implementScene()
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
const generateSceneBtn = document.getElementById("generate-scene");
let playerScore = 0, computerScore=0;
const p = "Your current score is: ", c = "The computer's current score is: ";



// Generates a shuffled array.
// index 0 == Rock, index 1 == Paper, index 2 == Scissors.
function generateArray() {
    let choices = ["Image", "Text", "Video"];
    for (let i = 0; i< choices.length; i++){
        let randomVal = Math.floor(Math.random() * choices.length);
        let tempValVar="";
        let currentVal = choices[i];
        tempValVar=currentVal;
        currentVal=choices[randomVal];
        choices[i]=currentVal;
        choices[randomVal]=tempValVar;    
    }
    console.log(choices)
    return choices 
}


// Generates and stores a shuffled array in variable array.
let array = generateArray()

// Returns random value from array.
function randomIndexgenerator() {
    let randomIndex = Math.floor(Math.random() * 3)
    return randomIndex
}

// btn event listener.
buttonList.forEach(btn => btn.addEventListener("click", playRound))

// New game btn listener.
newGame.addEventListener("click",genNewGame);

// Click event listener for new scene btn.
generateSceneBtn.addEventListener("click",implementScene);

// Implements the scene in to the scene div.
function implementScene(){
    let newScene = randomIndexgenerator();
    console.log(newScene)
    if (newScene == 0){
        sceneText.textContent="Image";
        sceneText.classList="computer-rock";

    }
    else if (newScene== 1){
        sceneText.textContent="Text";
        sceneText.classList="computer-paper";

    }
    else{
        sceneText.textContent="Video";
        sceneText.classList="computer-scissors";
    }
}

const scene = document.getElementById("scene");
const sceneText= document.getElementById("scene-text");

function playRound(){
    let computerSelection = sceneText.classList.value;
    console.log(computerSelection)
        if (this.classList.value === "player-rock"){
            if (computerSelection == "computer-scissors"){
                div.textContent = "You Lose :("
                playerScore++
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else if (computerSelection == "computer-paper"){
                div.textContent = "You Win!"
                computerScore++
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else{
                div.textContent = "I'ts a Tie.."
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
        }
        else if (this.classList.value === "player-paper"){
            if (computerSelection == "computer-scissors"){
                div.textContent = "You Lose :("
                computerScore++
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else if (computerSelection == "computer-paper"){
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
            if (computerSelection == "computer-scissors"){
                div.textContent = "I'ts a Tie.."
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else if (computerSelection == "computer-paper"){
                div.textContent = "You Lose :("
                playerScore++
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`

            }
            else{
                div.textContent = "You Win!"
                computerScore++
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
        }
    }

    // else{
    //     endScreenFunc()
    //     if (playerScore == 5 || computerScore == 5){
    //         if (playerScore == 5){
    //             winner.textContent = "You Are The Winner"
    //         }
    //         else if(computerScore==5){
    //             winner.textContent= "Game Over"
    //         }
    //     }
    // }


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




const charactersObject = {
    "john": ["scissors","rock","paper"],
    "lucy":["scissor","paper","rock"],
    "layla":["rock","scissors","paper"]
}