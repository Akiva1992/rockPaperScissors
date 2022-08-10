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

        In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

For now, remove the logic that plays exactly five rounds.

Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

Add a div for displaying results and change all of your console.logs into DOM methods.

Display the running score, and announce a winner of the game once one player reaches 5 points.

You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.

Once you’re all done with your UI and made sure everything’s satisfactory, commit your changes to the rps-ui branch.

Now let’s take a look at how we can merge the changes from our rps-ui branch back to our main branch.

Checkout the branch we want to merge INTO i.e. main with the command git checkout main.

Now let’s merge our rps-ui branch into main, our current branch, with git merge rps-ui.

If everything goes fine, our rps-ui branch is now successfully merged with main! Use git log and you’ll see all the commits you’ve made to your feature branch on top of the commits you made to the main branch. Now for our final step!

Let’s push our main branch into our remote repo by running git push origin main . Go to your GitHub repo and you’ll see that our main branch will have all the changes and commits you made to the rps-ui branch. Congratulations! You’ve successfully pushed your first feature into your production branch!

Now that we have all our code in the main branch, we don’t really need our rps-ui branch anymore. Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with git branch -d rps-ui and also delete it from the remote repo on GitHub with git push --delete origin rps-ui. Congrats, we’re all done with our cleanup!

Make sure to publish the project on GitHub Pages and add a live preview link in the project lesson.