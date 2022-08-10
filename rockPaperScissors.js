// // debugger
// // console.log(game())
// let playerSelection="";
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex]
}
// function playRound(computerSelection, playerSelection) {
//     playerSelection
//     console.log(playerSelection)
//     let player="";
//     if (computerSelection == "rock") {
//         if (playerSelection == "paper")
//             return (player= "won")
//         else if (playerSelection == "scissors") {
//             return (player = "lost")
//         }
//         else {
//             return (player = "tie")
//         }
//     }
//     else if (computerSelection == "paper") {
//         if (playerSelection == "paper") {
//             return (player = "tie")
//         }
//         else if (playerSelection == "scissors") {
//             return (player = "won")
//         }
//         else {
//             return (player = "lost")
//         }
//     }
//     else {
//         if (playerSelection == "paper") {
//             return (player= "lost")
//         }
//         else if (playerSelection == "scissors") {
//             return (player = "tie")
//         }
//         else {
//             return (player = "won")
//         }
//     }
// }

// function game() {
//     let playerScore = 0, computerScore = 0;
//     // let playerSelection = prompt("Play Rock/Paper/Scissors ").toLowerCase().trim()
//     let computerSelection = getComputerChoice()
//     let player = playRound(computerSelection, playerSelection)
//         if (player == "won") {
//             playerScore++
//             console.log(`GOOD! Your score = ${playerScore}, The computer's Score = ${computerScore}`)
//         }
//         else if (player == "lost"){
//             computerScore++
//             console.log(`OOPS :\( Your score = ${playerScore}, The computer's Score = ${computerScore}`)
//         }
//         else if (player == "tie"){
//             console.log(`OKAY.. Your score = ${playerScore}, The computer's Score = ${computerScore}`)
//         }


//     if (playerScore > computerScore) {
//         console.log(`You Won!! \(${playerScore}:${computerScore}\)`)
//     }
//     else if (playerScore < computerScore){
//         console.log(`You Lost :\( \(${playerScore}:${computerScore}\)`)
//     }
//     else{
//         console.log(`It's a Tie \(${playerScore}:${computerScore}\)`)
//     }
// }

// // console.log(buttons)

// // function playerSelection(){
// //     const buttons = document.querySelectorAll("button");
// //     for (let i = 0; i<buttons.length; i++){
// //         buttons[i].addEventListener("click", function(e){
// //             return (e.target)
// //             });
// //     }
// // }


// // const buttonList = document.querySelectorAll("button");
// // buttonList.forEach(btn => btn.addEventListener("click",returnClass));



// // function returnClass(e){
// //     let result = (this.classList.value);
// //     playerSelection = result
// // }



const buttonList = document.querySelectorAll("button");
const div = document.getElementById("result")

function playRound(playerSelection){
    
}

function className(e){
    let computerSelection = getComputerChoice()
    console.log(computerSelection)
    if (this.classList.value === "rock"){
        if (computerSelection == "scissors"){
            div.textContent = "You Win!"
        }
        else if (computerSelection == "paper"){
            div.textContent = "You Lose :("
        }
        else{
            div.textContent = "I'ts a Tie.."
        }
    }
    if (this.classList.value === "paper"){
        if (computerSelection == "scissors"){
            div.textContent = "You Lose :("
        }
        else if (computerSelection == "paper"){
            div.textContent = "I'ts a Tie.."
        }
        else{
            div.textContent = "You Win!"
        }
    }
    if (this.classList.value === "scissors"){
        if (computerSelection == "scissors"){
            div.textContent = "I'ts a Tie.."
        }
        else if (computerSelection == "paper"){
            div.textContent = "You Win!"
        }
        else{
            div.textContent = "You Lose :("
        }
    }
}


buttonList.forEach(btn => btn.addEventListener("click", className))