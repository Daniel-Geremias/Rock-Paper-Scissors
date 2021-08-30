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
rockBtn.id = 'rock';
rockBtn.innerText = 'Rock';

const paperBtn = document.createElement('button');
paperBtn.id = 'paper';
paperBtn.innerText = 'Paper';

const scissorsBtn = document.createElement('button');
scissorsBtn.id = 'scissors';
scissorsBtn.innerText = 'Scissors';

const scoreContainer = document.createElement('div');
scoreContainer.id = 'score-container';

const playerScore = 0;
const computerScore = 0;
const score = document.createElement('p');
score.id = 'score';
score.innerText = `scoreText \n Player: ${playerScore} \n Computer: ${computerScore}`;

body.appendChild(gameContainer);
gameContainer.appendChild(rockBtn);
gameContainer.appendChild(paperBtn);
gameContainer.appendChild(scissorsBtn);
body.appendChild(scoreContainer);
scoreContainer.appendChild(score);

