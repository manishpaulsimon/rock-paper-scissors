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

function updateResults(playerScore,computerScore, winner) {
    const results = document.getElementById('results');
    results.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore},
    The Winner is: ${winner}`;
    let score = 0;
    while(score<=5) {
        if (playerScore == 5) {
            results.textContent = `Player Score: ${playerScore} and
            the Winner is Player`;
            break;
        }
        else if (computerScore == 5) {
            results.textContent = `Computer Score: ${computerScore} and
            the Winner is Computer`;
            break;
        }
        score++;
    }
}

const resultsDiv = document.createElement('div');
resultsDiv.id = 'results';
document.body.appendChild(resultsDiv);



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
    updateResults(playerScore,computerScore, '');
    

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
    updateResults(playerScore,computerScore, '');

});
document.body.appendChild(buttonPaper);

//Select Scissors
const buttonScissors = document.createElement('button');
buttonScissors.textContent = 'Scissors';
const selectScissors = buttonScissors.addEventListener('click',function() {
    let computerSelection = getComputerChoice();
    let scissorWins = playRound('scissors',computerSelection);
    if (scissorWins == 'playerWin') {
        playerScore +=1;
    }
    else {
        computerScore +=1;
    }
    updateResults(playerScore,computerScore, '');

});
document.body.appendChild(buttonScissors);

