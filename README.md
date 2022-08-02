# rockPaperScissors

Don’t forget to commit early & often! You can reference the Commit Message lesson here!

Start a new Git repo for your project.

Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.

Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

function playRound(playerSelection, computerSelection) {
  // your code here!
}
 const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
Remember loops? This is a great opportunity to use one to play those five rounds:

for (let i = 0; i < 5; i++) {
   // your code here!
}
At this point you should be using console.log() to display the results of each round and the winner at the end.

Use prompt() to get input from the user. Read the docs here if you need to.

Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.

Feel free to create more “helper” functions if you think it would be useful.



1. Get the user's choice and save it in playerSelection.
2. Get computer's choice and save it in computerSelection.
    create function getComputerChoice()
        create array of ["Rock", "Paper", "Scissors"]
        create a random number between 0-2 inclusive, store in variable random.
        console.log (random) to see if function works.
        return array at location [random].
        
3. Determine winner by creating a function playRound().
    create function playRound(computerSelection, playerSelection),
        if playerSelection beats computerSelection  
        return  "You win!  playerSelection "beats" computerSelection " 
        else if computerSelection "beats" playerSelection
        return "You Lose! computerSelection "beats" playerSelection "
        else 
        return "Tie"

4. create function game() that loops 5 times, keeps score and declares winner at the end,(ever loop should display game score).
        create function game()
            create loop for (let i = 0; i <5; i++)
                call playRound(computerSelection, playerSelection)
                display score with console.log(computerSelection, playerSelection) 
            return (computerSelection > playerSelection)? computer : player;
5. Run game, by calling game()
    create function game()
    declare computerSelection = getComputerChoice
    declare two variables and inital value of 0 playerScore computerScore
    create a for loop that runs 5 times
        call playRound(computerSelection,playerSelection)
        if playerSelection won 
            playerScore++
            print (playerScore , computerScore)
        else if computerSelection won
            computerSelection++
            print (playerScore , computerScore)
        else 
            print (playerScore , computerScore)

    if playerScore > computerScore
        print (you won (playerScore , computerScore))
    else if playerScore < computerScore
        print (you lose (playerScore , computerScore))
    else
        print (It's a tie (playerScore , computerScore))