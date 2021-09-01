// let computerSelection;
// let playerSelection;
// let computerScore = 0;
// let playerScore = 0;
// const selection = ["rock", "paper", "scissors"];

// let buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         const selection = button.querySelector("id");
//         playerSelection = selection;

//         if (playerScore === 5 || computerScore === 5) {
//             declareWinner();
//         }
//     })
// })

// function computerPlay() {
//     return selection[Math.random() * selection.length];
// }

// function playRound(playerSelection, computerSelection) {
//     computerSelection = computerPlay();
// }

// function declareWinner() {
//     if (playerScore > computerScore) {

//     }
// }


//DOM Structure
const body = document.querySelector('body');
const gameContainer = document.createElement('div');
gameContainer.id = 'game';

const rockBtn = document.createElement('button');
rockBtn.id = 'Rock';
rockBtn.className = 'Rock'
rockBtn.innerHTML = '<i class="far fa-hand-rock"></i>';

const paperBtn = document.createElement('button');
paperBtn.id = 'Paper';
paperBtn.className = 'Paper'
paperBtn.innerHTML = '<i class="far fa-hand-paper"></i>';

const scissorsBtn = document.createElement('button');
scissorsBtn.id = 'Scissors';
scissorsBtn.className = 'Scissors'
scissorsBtn.innerHTML = '<i class="far fa-hand-peace"></i>';

const scoreContainer = document.createElement('div');
scoreContainer.id = 'score-container';

const message = document.createElement('p');
let playerScore = 0;
let computerScore = 0;
let score = document.createElement('p');
score.id = 'score';

const resetBtn = document.createElement('button');
resetBtn.innerText = 'Play Again';

body.appendChild(gameContainer);
gameContainer.appendChild(rockBtn);
gameContainer.appendChild(paperBtn);
gameContainer.appendChild(scissorsBtn);
body.appendChild(scoreContainer);
scoreContainer.appendChild(message);
scoreContainer.appendChild(score);

const selection = ['Rock', 'Paper', 'Scissors'];

score.innerText = `You: ${playerScore} Computer: ${computerScore}`;

const button = [...document.querySelectorAll('button')].forEach(function(item) {
    item.addEventListener('click', (playerScore < 5 && computerScore < 5) ? playRound : showWinner);
});

function computerPlay() {
    return selection[Math.floor(Math.random() * selection.length)];
}

function playRound(event) {
    let computerSelection = computerPlay();
    let playerSelection = event.currentTarget.className;
    if (playerSelection == selection[0] && computerSelection == selection[2] ||
        playerSelection == selection[1] && computerSelection == selection[0] ||
        playerSelection == selection[2] && computerSelection == selection[1]) {
            playerScore++;
            message.innerText = `You scored! ${playerSelection} beats ${computerSelection}`;
            score.innerText = `You: ${playerScore} Computer: ${computerScore}`;
        } else
    if (playerSelection == selection[0] && computerSelection == selection[1] ||
        playerSelection == selection[1] && computerSelection == selection[2] ||
        playerSelection == selection[2] && computerSelection == selection[0]) {
            computerScore++;
            message.innerText = `Computer scored! ${computerSelection} beats ${playerSelection}`;
            score.innerText = `You: ${playerScore} Computer: ${computerScore}`;
        } else {
            message.innerText = 'Draw!';
            score.innerText = `You: ${playerScore} Computer: ${computerScore}`;
        }
    console.log(playerSelection + ' VS ' + computerSelection);
    if(playerScore == 5) {
        return showWinner('You');
    } else if (computerScore == 5) {
        return showWinner('Computer');
    }
}

function showWinner(winner) {
    message.innerText = `${winner} won!`;
    scoreContainer.appendChild(resetBtn);
    resetBtn.addEventListener('click', () => {
        location.reload();
    });
}