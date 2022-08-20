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
        userGameScreenAvatar.src = "./imgs/female.png"
        this.classList.add("selected");
        userMale.classList.remove("selected");
    }
    else{
        userGameScreenAvatar.src = "./imgs/male.png"
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


function appendComputer(){
    if (this.classList.contains("aj")){
        computerGameScreenAvatar.src = "./imgs/johnLeftOrginalSz.png"
        computerGameScreenAvatar.classList.add("aj")
        computerGameScreenAvatar.classList.remove("lucy")
        computerGameScreenAvatar.classList.remove("layla")
        this.classList.add("selected");
        computerAvatarLucy.classList.remove("selected");
        computerAvatarLayla.classList.remove("selected");
    }
    else if (this.classList.contains("lucy")){
        computerGameScreenAvatar.src = "./imgs/lucyLeftOrginalSz.png"
        computerGameScreenAvatar.classList.add("lucy-computer")
        computerGameScreenAvatar.classList.remove("aj")
        computerGameScreenAvatar.classList.remove("layla")
        this.classList.add("selected");
        computerAvatarAj.classList.remove("selected");
        computerAvatarLayla.classList.remove("selected");
    }
    else{
        computerGameScreenAvatar.src = "./imgs/laylaOriginal.png"
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





