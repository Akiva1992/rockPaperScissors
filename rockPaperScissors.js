////////////////////////////////Start Screen//////////////////////////////////////////////
// debugger
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
const userAvatarImg= document.querySelector(".user-avatar-img");
let computerAvatarImg = document.getElementById("computer-avatar-img");


////////////////////////////User Avatar Selection////////////////

// Event listeners for avatar selection.
maleUser.addEventListener("click", appendPlayer);
femaleUser.addEventListener("click", appendPlayer);

// Implements player avatar on game screen.
function appendPlayer(){
    if (this.classList.contains("female-user")){
        userAvatarImg.src = "./imgs/female.png"
    }
    else{
        userAvatarImg.src = "./imgs/male.png"
    }
    // makes sure user made selection1
    computerAvatarImg.classList.add("start-game1")
}

//////////////////////////Computer Avatar Selection/////////////////////////////

johnComputer.addEventListener("click", appendComputer);
lucyComputer.addEventListener("click", appendComputer);
laylaComputer.addEventListener("click", appendComputer);


function appendComputer(){
    if (this.classList.contains("john-computer")){
        computerAvatarImg.src = "./imgs/johnLeft.png"
        computerAvatarImg.classList.add("john-computer")
        computerAvatarImg.classList.remove("lucy-computer")
        computerAvatarImg.classList.remove("layla-computer")
    }
    else if (this.classList.contains("lucy-computer")){
        computerAvatarImg.src = "./imgs/lucyLeft.png"
        computerAvatarImg.classList.add("lucy-computer")
        computerAvatarImg.classList.remove("john-computer")
        computerAvatarImg.classList.remove("layla-computer")
    }
    else{
        computerAvatarImg.src = "./imgs/laylaLeft.png"
        computerAvatarImg.classList.add("layla-computer")
        computerAvatarImg.classList.remove("john-computer")
        computerAvatarImg.classList.remove("lucy-computer")
    }
    // makes sure user made selection2
    computerAvatarImg.classList.add("start-game2")
}



///////////////Start Game Button/////////////////////////

// Event listener for screen transition.
startGameBtn.addEventListener("click",startGame);

// Transitions to the Game Screen.
function startGame(){
    if (startScreen.classList.contains("display") && computerAvatarImg.classList.contains("start-game1")&& computerAvatarImg.classList.contains("start-game2")){
        startScreen.classList.remove("display")
        showContent.classList.add("display")
    }
}


/////////////////Game Screen///////////////////////////////////


// Game screen variable deceleration.
const buttonList = document.querySelectorAll(".selection-button");
const resultDiv = document.getElementById("result")
const runningScore = document.querySelector("#runningScore");
const winner = document.querySelector("#winner");
const newGame = document.querySelector(".new-game");
const generateSceneBtn = document.getElementById("generate-scene");
const scene = document.getElementById("scene");
const sceneContainer = document.getElementById("scene-container");

// Adds initial class name to enable new scene btn.
resultDiv.classList.add("result-showing");


let playerScore = 0, computerScore=0;
const p = "Your current score is: ", c = "The computer's current score is: ";


// // Generates a shuffled array.
// // index 0 == Rock, index 1 == Paper, index 2 == Scissors.
// function generateArray() {
//     let choices = ["Image", "Text", "Video"];
//     for (let i = 0; i< choices.length; i++){
//         let randomVal = Math.floor(Math.random() * choices.length);
//         let tempValVar="";
//         let currentVal = choices[i];
//         tempValVar=currentVal;
//         currentVal=choices[randomVal];
//         choices[i]=currentVal;
//         choices[randomVal]=tempValVar;    
//     }
//     // console.log(choices)
//     return choices 
// }
// // Store generated shuffled array in variable- array.
// let array = generateArray()


// Returns random index value between 0-2 inclusive.

function randomIndexgenerator() {
    let randomIndex = Math.floor(Math.random() * 3)
    return randomIndex
}

// Click event listener for new scene btn.
generateSceneBtn.addEventListener("click",implementScene);

// Implements the scene in to the scene div.
function implementScene(){
    if (resultDiv.classList.contains("result-showing")){
        let newScene = randomIndexgenerator();
        
        if (newScene == 0){
            sceneContainer.textContent="Text";
            sceneContainer.classList="scene-of-text";
        }
        else if (newScene== 1){
            sceneContainer.textContent="Image";
            sceneContainer.classList="scene-of-image";
        }
        else{
            sceneContainer.textContent="Video";
            sceneContainer.classList="scene-of-video";
        }
        // These two lines remove the last result from the div, and add class to enable user to react 
        resultDiv.textContent="";
        resultDiv.classList.remove("result-showing");
    }
}

// btn event listener.
buttonList.forEach(btn => btn.addEventListener("click", playRound))

const charactersObject = {
    john: ["scissors","rock","paper"],
    lucy:["scissor","paper","rock"],
    layla:["rock","scissors","paper"]
}

// Is activated when user presses one of his reaction btns.
// This function determines who won the round.
function playRound(){
    debugger
    if (!resultDiv.classList.contains("result-showing")){
    
        // Gets the random index generated in randomIndexGenerator
        let sceneIndexValue ="";
        if (sceneContainer.classList.contains("scene-of-text")){
            sceneIndexValue = 0;
        }
        else if (sceneContainer.classList.contains("scene-of-image")){
            sceneIndexValue = 1;
        }
        else if (sceneContainer.classList.contains("scene-of-video")){
            sceneIndexValue = 2;
        }

        console.log(sceneIndexValue)
        
        
        ////text==index 0, image==index 1, video==index 2.
    // Gets the value of the computer array at location of the random index generated.
        let computerSelection ="";
        if (computerAvatarImg.classList.contains("john-computer")){
            computerSelection = charactersObject.john[sceneIndexValue];
        }
        else if (computerAvatarImg.classList.contains("lucy-computer")){
            computerSelection = charactersObject.lucy[sceneIndexValue];
        }
        else if (computerAvatarImg.classList.contains("layla-computer")) {
            computerSelection = charactersObject.layla[sceneIndexValue];
        }
        console.log(computerSelection)    

        
        ////like==rock, smile==paper, heart==scissors.

        if (computerSelection == "rock"){
            if (this.classList.contains("like")){
                resultDiv.textContent = "It's a Tie.."
                resultDiv.classList.add("result-showing");
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else if ( this.classList.contains("smile")){
                playerScore++
                resultDiv.textContent = "You Win!"
                resultDiv.classList.add("result-showing");
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else{
                computerScore++
                resultDiv.textContent = "You lose."
                resultDiv.classList.add("result-showing");
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
        }
        else if (computerSelection == "paper"){
            if (this.classList.contains("like")){
                computerScore++
                resultDiv.textContent = "You lose."
                resultDiv.classList.add("result-showing");
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else if (this.classList.contains("smile")){
                resultDiv.textContent = "I'ts a Tie.."
                resultDiv.classList.add("result-showing");
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else{
                resultDiv.textContent = "You Win!"
                resultDiv.classList.add("result-showing");
                playerScore++
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`

            }
        }
        else {
            if (computerSelection == "scissors"){
                playerScore++
                resultDiv.textContent = "You win!"
                resultDiv.classList.add("result-showing");
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else if (computerSelection == "computer-paper"){
                computerScore++
                resultDiv.textContent = "You Lose :("
                resultDiv.classList.add("result-showing");
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`

            }
            else{
                resultDiv.textContent = "It's a tie."
                resultDiv.classList.add("result-showing");
                runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
        }
    }
}



// New game btn listener.
newGame.addEventListener("click",genNewGame);

function genNewGame(){
    endScreen.classList.remove("display"); 
    resultDiv.textContent="";
    runningScore.textContent ="";
    winner.textContent="";
    playerScore=0, computerScore=0;
}

const endScreen = document.getElementById("end-screen");

function endScreenFunc(){
    // showContent.classList.remove("display");
    endScreen.classList.add("display")
}




