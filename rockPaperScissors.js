// // Start screen variables.
const userMale = document.querySelector(".male-user-avatar");
const userFemale = document.querySelector(".female-user-avatar");
const computerAvatarAj = document.querySelectorAll(".computer-avatar")[0];
const computerAvatarLucy = document.querySelectorAll(".computer-avatar")[1];
const computerAvatarLayla = document.querySelectorAll(".computer-avatar")[2];
const userGameScreenAvatar = document.getElementById("user-game-screen-avatar");
const computerGameScreenAvatar = document.getElementById("computer-game-screen-avatar");
const nextPgStartScreenBtn = document.querySelector(".next-page-btn.start-screen");
const instructionsScreen = document.getElementById("instructions-screen");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");


// console.log(nextPgStartScreenBtn);


////////////////////////////User Avatar Selection/////////////////////////////

// Event listeners for USER avatar selection.
userMale.addEventListener("click", appendUser);
userFemale.addEventListener("click", appendUser);


// Implements User avatar on game screen.
function appendUser(){
    if (this.classList.contains("female-user-avatar")){
        userGameScreenAvatar.src = "./imgs/femaleOriginal.png"
        this.classList.add("selected");
        userMale.classList.remove("selected");
    }
    else{
        userGameScreenAvatar.src = "./imgs/maleOriginal.png"
        this.classList.add("selected");
        userFemale.classList.remove("selected");
    }
    // makes sure user made selection1
    userGameScreenAvatar.classList.add("next-page-c1")
}

//////////////////////////Computer Avatar Selection/////////////////////////////

computerAvatarAj.addEventListener("click", appendComputer);
computerAvatarLucy.addEventListener("click", appendComputer);
computerAvatarLayla.addEventListener("click", appendComputer);
const profilePic = document.querySelector(".profile-pic");


function appendComputer(){
    if (this.classList.contains("aj")){
        computerGameScreenAvatar.src = "./imgs/johnLeftOriginal.png"
        profilePic.src = "./imgs/johnOriginal.png";
        computerGameScreenAvatar.classList.add("aj")
        computerGameScreenAvatar.classList.remove("lucy")
        computerGameScreenAvatar.classList.remove("layla")
        this.classList.add("selected");
        computerAvatarLucy.classList.remove("selected");
        computerAvatarLayla.classList.remove("selected");
    }
    else if (this.classList.contains("lucy")){
        computerGameScreenAvatar.src = "./imgs/lucyLeftOriginal.png"
        profilePic.src = "./imgs/lucyOriginal.png"
        computerGameScreenAvatar.classList.add("lucy")
        computerGameScreenAvatar.classList.remove("aj")
        computerGameScreenAvatar.classList.remove("layla")
        this.classList.add("selected");
        computerAvatarAj.classList.remove("selected");
        computerAvatarLayla.classList.remove("selected");
    }
    else{
        computerGameScreenAvatar.src = "./imgs/laylaLeftOriginal.png"
        profilePic.src = "./imgs/laylaOriginal.png"
        computerGameScreenAvatar.classList.add("layla")
        computerGameScreenAvatar.classList.remove("aj")
        computerGameScreenAvatar.classList.remove("lucy")
        this.classList.add("selected");
        computerAvatarAj.classList.remove("selected");
        computerAvatarLucy.classList.remove("selected");
    }
    // makes sure user made selection2
    computerGameScreenAvatar.classList.add("next-page-c2")
}

///////////////Next page Button/////////////////////////

// Event listener for screen transition.
nextPgStartScreenBtn.addEventListener("click",nextPage);

// Transitions to the Game Screen.
function nextPage(){
    if (startScreen.classList.contains("display") && userGameScreenAvatar.classList.contains("next-page-c1")&& computerGameScreenAvatar.classList.contains("next-page-c2")){
        startScreen.classList.remove("display")
        instructionsScreen.classList.add("display")
    }
}

//////////////////Instructions page///////////////////////////////////////////

const startGameBtn = document.querySelector(".next-page.instructions-screen")

// Event listener for screen transition.
startGameBtn.addEventListener("click",startGameFunc);

// Transitions to the Game Screen.
function startGameFunc(){
    if (instructionsScreen.classList.contains("display") && userGameScreenAvatar.classList.contains("next-page-c1")&& computerGameScreenAvatar.classList.contains("next-page-c2")){
        instructionsScreen.classList.remove("display")
        gameScreen.classList.add("display")
    }
}



//////////////////Game page///////////////////////////////////////////

const newPostBtn = document.getElementById("new-post");
const avatarReaction= document.querySelector(".avatar-reaction");
const scenePara = document.querySelector(".scene-para");
const sceneImg = document.querySelector(".scene-img");
const sceneVideo = document.querySelector(".scene-video");
const sceneContainer= document.querySelector(".scene-container");
const buttonList = document.querySelectorAll(".selection-button");

// Adds initial class name to enable new scene btn.
avatarReaction.classList.add("result-showing");


const paraArr=['"Time is precious. Waste it wisely."','"Back in 5 minutes (If not, read this status again)."','`"If you really loved me, you would say it on my Facebook Wall."','"Staying connected is more important than making your point."','"Staying connected is more important than making your point."','"Why do you think you and I are such good friends?"'];

function randomPara() {
    let randomPara = Math.floor(Math.random() * paraArr.length)
    return randomPara
}

const videoArr =["./vids/ducks.mp4","./vids/dog.mp4","./vids/horse.mp4","./vids/skateboarding.mp4","./vids/kite.mp4"];


function randomVideo() {
    let randomVideo = Math.floor(Math.random() * videoArr.length)
    return randomVideo
}


function randomIndexgenerator() {
    let randomIndex = Math.floor(Math.random() * videoArr.length)
    return randomIndex
}

// Click event listener for new scene btn.
newPostBtn.addEventListener("click",implementScene);

// Implements the scene in to the scene div.
function implementScene(){
    if (avatarReaction.classList.contains("result-showing")){
        let newScene = randomIndexgenerator();
        if (newScene == 0){
            let i = randomPara();
            scenePara.classList.add("show");
            sceneImg.classList.remove("show");
            sceneVideo.classList.remove("show");
            scenePara.textContent = paraArr[i];
            sceneContainer.classList="scene-of-text";
        }
        else if (newScene == 1){
            scenePara.classList.remove("show");
            sceneImg.classList.add("show");
            sceneVideo.classList.remove("show");
            sceneImg.src="https://picsum.photos/300/150";
            sceneContainer.classList="scene-of-image";
        }
        else{
            let j = randomVideo();
            scenePara.classList.remove("show");
            sceneImg.classList.remove("show");
            sceneVideo.classList.add("show");
            sceneVideo.src = videoArr[j];
            sceneContainer.classList="scene-of-video";
        }
        // // These two lines remove the last result from the div, and add class to enable user to react 
        // resultDiv.textContent="";
        avatarReaction.classList.remove("result-showing");
    }
}



// btn event listener.
buttonList.forEach(btn => btn.addEventListener("click", playRound))

const charactersObject = {
    aj: ["scissors","rock","paper"],
    lucy:["scissor","paper","rock"],
    layla:["rock","scissors","paper"]
}


// btn event listener.
buttonList.forEach(btn => btn.addEventListener("click", playRound))


let playerScore = 0;

// Is activated when user presses one of his reaction btns.
// This function determines who won the round.
function playRound(){
    if (!avatarReaction.classList.contains("result-showing")){
    
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
        if (computerGameScreenAvatar.classList.contains("aj")){
            computerSelection = charactersObject.aj[sceneIndexValue];
        }
        else if (computerGameScreenAvatar.classList.contains("lucy")){
            computerSelection = charactersObject.lucy[sceneIndexValue];
        }
        else if (computerGameScreenAvatar.classList.contains("layla")) {
            computerSelection = charactersObject.layla[sceneIndexValue];
        }
        console.log(computerSelection)    

        
        ////like==rock, smile==paper, heart==scissors.

        if (computerSelection == "rock"){
            if (this.classList.contains("like")){
                avatarReaction.textContent = "Okay..";
                avatarReaction.classList.add("result-showing");
                // runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else if (this.classList.contains("smile")){
                playerScore=0;
                avatarReaction.textContent = "Hmm..";
                avatarReaction.classList.add("result-showing");
                // runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else{
                playerScore++
                avatarReaction.textContent = "Yess!";
                avatarReaction.classList.add("result-showing");
                // runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
        }
        else if (computerSelection == "paper"){
            if (this.classList.contains("like")){
                playerScore++
                avatarReaction.textContent = "Yess!";
                avatarReaction.classList.add("result-showing");
                // runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else if (this.classList.contains("smile")){
                avatarReaction.textContent = "Okay..";
                avatarReaction.classList.add("result-showing");
                // runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else{
                playerScore=0;
                avatarReaction.textContent = "Hmm..";
                avatarReaction.classList.add("result-showing");
                // runningScore.textContent= `${p + playerScore} ${c + computerScore}`

            }
        }
        else {
            if (this.classList.contains("like")){
                playerScore=0;
                avatarReaction.textContent = "Hmm.."
                avatarReaction.classList.add("result-showing");
                // runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
            else if (this.classList.contains("smile")){
                playerScore++
                avatarReaction.textContent = "Yess!";
                avatarReaction.classList.add("result-showing");
                // runningScore.textContent= `${p + playerScore} ${c + computerScore}`

            }
            else{
                avatarReaction.textContent = "Okay"
                avatarReaction.classList.add("result-showing");
                // runningScore.textContent= `${p + playerScore} ${c + computerScore}`
            }
        }
    }
}