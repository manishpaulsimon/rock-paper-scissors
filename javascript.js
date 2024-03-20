  // paper beats rock
    // rock beats scissor
    // scissor beats paper

function getComputerChoice() {
    const options = ['rock','paper','scissors'];
    const randomindex = Math.floor(Math.random() * options.length)
    return options[randomindex];

}

function playRound(playerSelection, computerSelection) {
    // Here if both the selections are equal, it's a tie. If not equal, we enter an else block
    if (computerSelection == playerSelection) {
        console.log("it's a tie");
        return 'tie';
    }
    //Now we compare every possibility for the computer to win and whichever turns true, the console log will execute, if not the player wins.
    else if (computerSelection == "paper" && playerSelection == "rock" || computerSelection == "rock" && playerSelection == "scissors" || 
    computerSelection == "scissors" && playerSelection == "paper")
    {
        console.log("You lose! Paper beats rock");
        return 'computerWin';
    }
    else {
        // here the player wins if the above block doesn't execute
        console.log("Congrats you won!");
        return 'playerWin';
    }
}

// Consider n as total score
function playGame() {
    // so we have scores for two players and we need to increment by one for each win, and ignore for tie. Best of 5 wins
    let playerScore = 0;
    let computerScore = 0;
    let n = 0;
    while (n<5) {
        // check if playRound equal to tie
        let playerSelection = prompt("Enter choice:");
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection,computerSelection);

        if (roundResult == 'computerWin') {
            computerScore += 1;
        }
        else if (roundResult == 'playerWin') { 
            playerScore += 1; 
        }
        n++;
    }

    if (computerScore > playerScore) {
        console.log("Computer Wins. Computer's score was: "+ computerScore);
    }
    else if (playerScore > computerScore) {
        console.log("Human wins. Your total score was:" +playerScore);
    } 
    else {
        console.log("it's a draw");

    }
}

playGame()


