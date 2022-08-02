// debugger
console.log(game())

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex]
}
function playRound(computerSelection, playerSelection) {
    let player="";
    if (computerSelection == "rock") {
        if (playerSelection == "paper")
            return (player= "won")
        else if (playerSelection == "scissors") {
            return (player = "lost")
        }
        else {
            return (player = "tie")
        }
    }
    else if (computerSelection == "paper") {
        if (playerSelection == "paper") {
            return (player = "tie")
        }
        else if (playerSelection == "scissors") {
            return (player = "won")
        }
        else {
            return (player = "lost")
        }
    }
    else {
        if (playerSelection == "paper") {
            return (player= "lost")
        }
        else if (playerSelection == "scissors") {
            return (player = "tie")
        }
        else {
            return (player = "won")
        }
    }
}

function game() {
    let playerScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Play Rock/Paper/Scissors ").toLowerCase().trim()
        while ((playerSelection != "rock") && (playerSelection != "paper") && (playerSelection != "scissors")){
            alert("Invalid entry please try again");
            playerSelection = prompt("Play Rock/Paper/Scissors ").toLowerCase().trim()
        }
        let computerSelection = getComputerChoice()
        let player = playRound(computerSelection, playerSelection)
            if (player == "won") {
                playerScore++
                console.log(`GOOD! Your score = ${playerScore}, The computer's Score = ${computerScore}`)
            }
            else if (player == "lost"){
                computerScore++
                console.log(`OOPS :\( Your score = ${playerScore}, The computer's Score = ${computerScore}`)
            }
            else if (player == "tie"){
                console.log(`OKAY.. Your score = ${playerScore}, The computer's Score = ${computerScore}`)
            }
        }


    if (playerScore > computerScore) {
        console.log(`You Won!! \(${playerScore}:${computerScore}\)`)
    }
    else if (playerScore < computerScore){
        console.log(`You Lost :\( \(${playerScore}:${computerScore}\)`)
    }
    else{
        console.log(`It's a Tie \(${playerScore}:${computerScore}\)`)
    }
}
