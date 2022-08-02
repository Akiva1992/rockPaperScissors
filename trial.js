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

let playerSelection = "rock", computerSelection = "paper";

let result = playRound(computerSelection,playerSelection)

console.log(result)