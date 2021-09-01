//DOM Structure
const header = document.createElement('div');
header.className = 'head';

const h1 = document.createElement('h1');
h1.innerText = 'Rock Paper Scissors Game'

const gameContainer = document.createElement('div');
gameContainer.id = 'game';


const rockBtn = document.createElement('button');
rockBtn.id = 'btn';
rockBtn.className = 'Rock'
rockBtn.innerHTML = '<i class="far fa-hand-rock"></i>';

const paperBtn = document.createElement('button');
paperBtn.id = 'btn';
paperBtn.className = 'Paper'
paperBtn.innerHTML = '<i class="far fa-hand-paper"></i>';

const scissorsBtn = document.createElement('button');
scissorsBtn.id = 'btn';
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
resetBtn.id = 'reset'
resetBtn.innerText = 'Play Again';

document.body.appendChild(header);
header.appendChild(h1);
document.body.appendChild(gameContainer);
gameContainer.appendChild(rockBtn);
gameContainer.appendChild(paperBtn);
gameContainer.appendChild(scissorsBtn);
document.body.appendChild(scoreContainer);
scoreContainer.appendChild(message);
scoreContainer.appendChild(score);

//Game Logic

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

    if(playerScore == 5) {
        return showWinner('You');
    } else if (computerScore == 5) {
        return showWinner('Computer');
    }
}

function showWinner(winner) {
    message.innerText = `${winner} won!`;
    rockBtn.setAttribute('disabled', 1);
    paperBtn.setAttribute('disabled', 1);
    scissorsBtn.setAttribute('disabled', 1);
    scoreContainer.appendChild(resetBtn);
    resetBtn.addEventListener('click', () => {
        location.reload();
    });
}