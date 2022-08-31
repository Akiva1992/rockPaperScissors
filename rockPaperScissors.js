// ***************************Know Bug********************
// if screen size changes mid game, new post btn won't work. 
// ***************************Know Bug********************



// // Start screen variables.
const userMale = document.querySelector(".male-user-avatar");
const userFemale = document.querySelector(".female-user-avatar");
const computerAvatarAj = document.querySelectorAll(".computer-avatar")[0];
const computerAvatarLucy = document.querySelectorAll(".computer-avatar")[1];
const computerAvatarLayla = document.querySelectorAll(".computer-avatar")[2];
const userGameScreenAvatar = document.getElementById("user-game-screen-avatar");
const computerGameScreenAvatar = document.getElementById("computer-game-screen-avatar");
const nextPgStartScreenBtn1 = document.querySelector(".next-page-btn1.start-screen");
const nextPgStartScreenBtn2 = document.querySelector(".next-page-btn2.start-screen");
const instructionsScreen = document.getElementById("instructions-screen");
const startScreen1 = document.getElementById("start-screen1");
const startScreen2 = document.getElementById("start-screen2");
const endScreen = document.getElementById("end-screen");
const gameScreen = document.getElementById("game-screen");
const profileName = document.querySelector(".profile-name");

startScreen1.classList.add("display");




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

// Event listener for screen transition.
nextPgStartScreenBtn1.addEventListener("click",nextPage1);

// Transitions to the Game Screen.
function nextPage1(){
    if (startScreen1.classList.contains("display") && userGameScreenAvatar.classList.contains("next-page-c1")){
        startScreen1.classList.remove("display")
        startScreen2.classList.add("display")
    }
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
        profileName.textContent="AJ"
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
        profileName.textContent="Lucy"

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
        profileName.textContent="Layla"
        
    }
    // makes sure user made selection2
    computerGameScreenAvatar.classList.add("next-page-c2")
}

///////////////Next page Button/////////////////////////

// Event listener for screen transition.
nextPgStartScreenBtn2.addEventListener("click",nextPage2);

// Transitions to the Game Screen.
function nextPage2(){
    if (startScreen2.classList.contains("display") && computerGameScreenAvatar.classList.contains("next-page-c2")){
        startScreen2.classList.remove("display");
        instructionsScreen.classList.add("display");
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
const newPostContainer = document.querySelector(".new-post-container")
const display = window.getComputedStyle(newPostContainer).display;
let newPostBtn =""
if (display =="block"){
    newPostBtn = document.querySelector(".new-post-in-own-container");
}
else{
    newPostBtn = document.querySelector(".new-post");
}
const avatarReaction= document.querySelector(".avatar-reaction");
const scenePara = document.querySelector(".scene-para");
const sceneImg = document.querySelector(".scene-img");
const sceneVideo = document.querySelector(".scene-video");
const sceneContainer= document.querySelector(".scene-container");
const buttonList = document.querySelectorAll(".selection-button");
const likeBtn = document.querySelector(".like");
const smileBtn = document.querySelector(".smile");
const heartBtn = document.querySelector(".heart");
const pTxtBox = document.querySelector(".p-txt-box");
const pImgBox = document.querySelector(".p-img-box");
const pVideoBox = document.querySelector(".p-video-box");
// Adds initial class name to enable new scene btn.
avatarReaction.classList.add("result-showing");


const paraArr=['"Time is precious. Waste it wisely."','"Back in 5 minutes (If not, read this status again)."','"If you really loved me, you would say it on my Facebook Wall."','"Staying connected is more important than making your point."','"Staying connected is more important than making your point."','"Why do you think you and I are such good friends?"'];

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
            sceneContainer.classList.add("scene-of-text");
            sceneContainer.classList.remove("scene-of-image");
            sceneContainer.classList.remove("scene-of-video");

        }
        else if (newScene == 1){
            scenePara.classList.remove("show");
            sceneImg.classList.add("show");
            sceneVideo.classList.remove("show");
            sceneImg.src="https://picsum.photos/300/150";
            sceneContainer.classList.add("scene-of-image");
            sceneContainer.classList.remove("scene-of-text");
            sceneContainer.classList.remove("scene-of-video");
        }
        else{
            let j = randomVideo();
            scenePara.classList.remove("show");
            sceneImg.classList.remove("show");
            sceneVideo.classList.add("show");
            sceneVideo.src = videoArr[j];
            sceneContainer.classList.add("scene-of-video");
            sceneContainer.classList.remove("scene-of-text");
            sceneContainer.classList.remove("scene-of-image");
        }
        // // These two lines remove the last result from the div, and add class to enable user to react 
        // Makes sure reaction btns cannot be clicked before the game starts (new post was clicked).
        newPostBtn.classList.add("clicked");
        // enables the playRound to activate.
        avatarReaction.classList.remove("result-showing");
        // Makes sure the reaction btn can only be pressed once.
        buttonList.forEach(btn => btn.addEventListener("click", buttonSelected));
        // Removes the clicked btn style.
        buttonList.forEach(btn => btn.classList.remove("btn-selected"));
    }
}



// btn event listener for actual game to play.
buttonList.forEach(btn => btn.addEventListener("click", playRound));

// btn event listener for reaction btn style.
buttonList.forEach(btn => btn.addEventListener("click", buttonSelected))

// Adds a style to the selected reaction btn.
function buttonSelected(){
    if (newPostBtn.classList.contains("clicked")){
        this.classList.add("btn-selected");
        buttonList.forEach(btn => btn.removeEventListener("click", buttonSelected))
        // newPostBtn.classList.add("clicked")
    }
}

// Different computer avatar set of rps.
const charactersObject = {
    aj: ["scissors","rock","paper"],
    lucy:["scissor","paper","rock"],
    layla:["rock","scissors","paper"]
}


// Meant to keep track if one was answered correctly. 
let rScore = 0, pScore=0, sScore=0;

//Progress bar variables. 
let pWidth = document.querySelector(".progress").style.width;
let pBar = document.querySelector(".progress");


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
            }
            else if (this.classList.contains("smile")){
                avatarReaction.classList.add("result-showing");
                avatarReaction.textContent = "Hmm..";
                if (sceneIndexValue == 0){
                    pTxtBox.classList.remove("done");       
                }
                else if (sceneIndexValue == 1){
                    pImgBox.classList.remove("done");       
                }
                else{
                    pVideoBox.classList.remove("done");       
                }
                rScore = 0;
            }
            else{
                rScore++
                avatarReaction.classList.add("result-showing");
                avatarReaction.textContent = "Yess!";
                if (rScore==1){
                    if (sceneIndexValue == 0){
                        pTxtBox.classList.add("done");       
                    }
                    else if (sceneIndexValue == 1){
                        pImgBox.classList.add("done");       
                    }
                    else{
                        pVideoBox.classList.add("done");       
                    }
                }
                if (rScore>=1 && pScore>=1 && sScore>=1){
                    endScreenFunc();
                }
            }
        }
        else if (computerSelection == "paper"){
            if (this.classList.contains("like")){
                pScore++
                avatarReaction.classList.add("result-showing");
                avatarReaction.textContent = "Yess!";
                console.log(pScore);
                if (pScore==1){
                    if (sceneIndexValue == 0){
                        if (sceneIndexValue == 0){
                            pTxtBox.classList.add("done");       
                        }
                        else if (sceneIndexValue == 1){
                            pImgBox.classList.add("done");       
                        }
                        else{
                            pVideoBox.classList.add("done");       
                        }       
                    }
                    else if (sceneIndexValue == 1){
                        pImgBox.classList.add("done");       
                    }
                    else{
                        pVideoBox.classList.add("done");       
                    }
                }
                if (rScore>=1 && pScore>=1 && sScore>=1){
                    endScreenFunc();
                }
            }
            else if (this.classList.contains("smile")){
                avatarReaction.classList.add("result-showing");
                avatarReaction.textContent = "Okay..";
            }
            else{
                avatarReaction.classList.add("result-showing");
                avatarReaction.textContent = "Hmm..";
                if (sceneIndexValue == 0){
                    pTxtBox.classList.remove("done");       
                }
                else if (sceneIndexValue == 1){
                    pImgBox.classList.remove("done");       
                }
                else{
                    pVideoBox.classList.remove("done");       
                }
                pScore = 0;
            }
        }
        else {
            if (this.classList.contains("like")){
                avatarReaction.classList.add("result-showing");
                avatarReaction.textContent = "Hmm.."
                sScore=0;
                if (sceneIndexValue == 0){
                    pTxtBox.classList.remove("done");       
                }
                else if (sceneIndexValue == 1){
                    pImgBox.classList.remove("done");       
                }
                else{
                    pVideoBox.classList.remove("done");       
                }
            }
            else if (this.classList.contains("smile")){
                sScore++
                console.log(sScore);
                avatarReaction.classList.add("result-showing");
                avatarReaction.textContent = "Yess!";
                if (sScore==1){
                    if (sceneIndexValue == 0){
                        pTxtBox.classList.add("done");       
                    }
                    else if (sceneIndexValue == 1){
                        pImgBox.classList.add("done");       
                    }
                    else{
                        pVideoBox.classList.add("done");       
                    }
                }
                if (rScore>=1 && pScore>=1 && sScore>=1){
                    endScreenFunc();
                }

            }
            else{
                avatarReaction.classList.add("result-showing");
                avatarReaction.textContent = "Okay"
            }
        }
    }
}

const backBtn = document.getElementById("back");
const tipsBtn = document.querySelector(".tips-btn");
const tipsScreen = document.getElementById("tips-screen");
tipsScreen.classList.remove("display");


tipsBtn.addEventListener("click",tipsScreenFunc);


backBtn.addEventListener("click", tipsScreenOffFunc);

function tipsScreenFunc(){
    tipsScreen.classList.add("display");
    gameScreen.classList.remove("display");
}

function tipsScreenOffFunc(){
    tipsScreen.classList.remove("display");
    gameScreen.classList.add("display");
}


function endScreenFunc(){
    playerScore=0;  
    gameScreen.classList.remove("display");
    endScreen.classList.add("display");
}



const playAgain = document.getElementById("play-again");
const newGame = document.querySelector(".new-game-btn")

playAgain.addEventListener("click", newGameFunc);
newGame.addEventListener("click", newGameFunc);


// Starts new game by refreshing page.
function newGameFunc(){
    document.location.reload(true)
}


