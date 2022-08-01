// 1. Get the user's choice and save it in playerSelection.
let playerSelection = prompt("Play Rock/Paper/Scissors ").toLowerCase().trim()
let computerSelection= getComputerChoice()
console.log(playRound(computerSelection,playerSelection))

// 2. Get computer's choice and save it in computerSelection.
    // create function getComputerChoice()
function getComputerChoice(){
    // create array of ["Rock", "Paper", "Scissors"]
    let choices = ["rock", "paper", "scissors"];
    // create a random number between 0-2 inclusive, store in variable randomIndex.
    let randomIndex = Math.floor(Math.random()*3) 
    // console.log (random) to see if function works.
    // console.log(choices[randomIndex])
    // return array at location [randomIndex].
    return choices[randomIndex]
}
// 3. Determine winner by creating a function playRound().
// create function playRound(computerSelection, playerSelection),
function playRound(computerSelection,playerSelection){
    //if playerSelection beats computerSelection  
    if (computerSelection == "rock"){
        if (playerSelection == "paper")
        return  `You win! ${playerSelection} beats ${computerSelection}`
        else if (playerSelection == "scissors") {
            return  `You lose! ${computerSelection} beats ${playerSelection}`
        }
        else{
            return "It's a tie"
        }
    }
    else if (computerSelection == "paper"){
        if (playerSelection == "paper"){
            return "It's a tie"
        }
        else if (playerSelection == "scissors") {
            return  `You win! ${playerSelection} beats ${computerSelection}`
        }
        else {
            return  `You lose! ${computerSelection} beats ${playerSelection}`
        }
    }    
    else{
        if (playerSelection == "paper"){
            return  `You lose! ${computerSelection} beats ${playerSelection}`
        }
        else if (playerSelection == "scissors") {
            return "It's a tie"
        }
        else {
            return  `You win! ${playerSelection} beats ${computerSelection}`
        }
    }
}
