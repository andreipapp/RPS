let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
function playRound(humanChoice, computerChoice) {
    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        return 'user';
    } else if (humanChoice === computerChoice) {
        return 'tie';
    }
    else {
        return 'computer';
    }
}
function checkGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        const resultMessage = document.querySelector('.resultMessage');
        if (humanScore === 5) {
            resultMessage.textContent = `You win the game! Final score is ${humanScore} to ${computerScore}`;
        } else {
            resultMessage.textContent = `You lost the game! Final score is ${humanScore} to ${computerScore}`;
        }
        return true;
    }
    return false;
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const user = document.querySelector('.user-choice');
const computer = document.querySelector('.computer-choice');
const result = document.createElement('span');
const board = document.querySelector('.board');
const resultMessage = document.querySelector('.resultMessage');
const humanScoreValue = document.querySelector('.human-score');
const computerScoreValue = document.querySelector('.computer-score');
humanScoreValue.textContent = 0;
computerScoreValue.textContent = 0;


rock.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const humanChoice = rock.textContent.toLowerCase();
    const winner = playRound(humanChoice, computerChoice);
    user.textContent = humanChoice;
    computer.textContent = computerChoice;
    if (winner === 'user') {
        result.textContent = 'You win!'
        humanScore++;
        humanScoreValue.textContent = humanScore;
    } else if (winner === 'computer') {
        result.textContent = 'Computer wins!'
        computerScore++;
        computerScoreValue.textContent = computerScore;
    } else {
        result.textContent = 'It is a tie!'
    }
    resultMessage.textContent = result.textContent;


    if (checkGameOver()) {
        humanScore = 0;
        computerScore = 0;
        document.querySelector('.human-score').textContent = humanScore;
        document.querySelector('.computer-score').textContent = computerScore;
    }

})
paper.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const humanChoice = paper.textContent.toLowerCase();
    const winner = playRound(humanChoice, computerChoice);
    user.textContent = humanChoice;
    computer.textContent = computerChoice;
    if (winner === 'user') {
        result.textContent = 'You win!'
        humanScore++;
        humanScoreValue.textContent = humanScore;
    } else if (winner === 'computer') {
        result.textContent = 'Computer wins!'
        computerScore++;
        computerScoreValue.textContent = computerScore;
    } else {
        result.textContent = 'It is a tie!'
    }
    resultMessage.textContent = result.textContent;

    if (checkGameOver()) {
        humanScore = 0;
        computerScore = 0;
        document.querySelector('.human-score').textContent = humanScore;
        document.querySelector('.computer-score').textContent = computerScore;
    }

})
scissors.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const humanChoice = scissors.textContent.toLowerCase();
    const winner = playRound(humanChoice, computerChoice);
    user.textContent = humanChoice;
    computer.textContent = computerChoice;
    if (winner === 'user') {
        result.textContent = 'You win!'
        humanScore++;
        humanScoreValue.textContent = humanScore;
    } else if (winner === 'computer') {
        result.textContent = 'Computer wins!'
        computerScore++;
        computerScoreValue.textContent = computerScore;
    } else {
        result.textContent = 'It is a tie!'
    }
    resultMessage.textContent = result.textContent;


    if (checkGameOver()) {
        humanScore = 0;
        computerScore = 0;
        document.querySelector('.human-score').textContent = humanScore;
        document.querySelector('.computer-score').textContent = computerScore;
    }
})