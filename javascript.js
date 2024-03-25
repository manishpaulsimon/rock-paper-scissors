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
let playerScore = 0;
let computerScore = 0; 


//select Rock and get value from playRound Function
const buttonRock = document.createElement('button');
buttonRock.textContent = 'Rock';
const selectRock = buttonRock.addEventListener('click',function() {
    let computerSelection = getComputerChoice();
    let rockWins = playRound('rock',computerSelection);
    if (rockWins == 'playerWin') {
        playerScore += 1;
    }
    else {
        computerScore += 1;
    }

});
document.body.appendChild(buttonRock);

//Select Paper
const buttonPaper = document.createElement('button');
buttonPaper.textContent = 'Paper';
const selectPaper = buttonPaper.addEventListener('click',function() {
    let computerSelection = getComputerChoice();
    let paperWins = playRound('paper',computerSelection)
    if (paperWins == 'playerWin') {
        playerScore +=1;
    }
    else {
        computerScore += 1;
    }
});
document.body.appendChild(buttonPaper);

//Select Scissors
const buttonScissors = document.createElement('button');
buttonScissors.textContent = 'Scissors';
const selectScissors = buttonScissors.addEventListener('click',function() {
    let computerSelection = getComputerChoice();
    playRound('scissors',computerSelection);
});
document.body.appendChild(buttonScissors);


const results = document.createElement('div');
results.textContent = 'Here are the results:';
const roundResults = results.addEventListener(function() {
    let playerScore = 0;
    let computerScore = 0;
    while (true) {
        if (selectScissors || selectPaper || selectRock == 'computerWin') {
            console.log('Computer Wins this round');
            computerScore += 1;
            if (computerScore == 5) {
                break;
            }
        }
        else if (selectScissors || selectPaper || selectRock == 'playerWin') {
            console.log('Plaer Wins this round');
            playerScore += 1;
            if (playerScore == 5) {
                break;
            }
        }
        else {
            console.log('It\'s a tie');
        }
    }

    if (computerScore > playerScore) {
        console.log('Computer Wins');
    }
    else if (playerScore > computerScore) {
        console.log('Player wins');
    }
    else {
        console.log('It\'s a tie');
    }

});
document.body.appendChild(results);


/*
// Consider n as total score
function playGame() {
    // so we have scores for two players and we need to increment by one for each win, and ignore for tie. Best of 5 wins
    let playerScore = 0;
    let computerScore = 0;
    let numberOfRounds = 0;
    while (numberOfRounds<5) {
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
        numberOfRounds++;
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
*/


