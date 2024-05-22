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
    if (humanChoice === computerChoice) {
        console.log(`${humanChoice} is equal to ${computerChoice}, it's a tie!`);
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');



rock.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const humanChoice = rock.textContent.toLowerCase();
    // playRound(humanChoice, computerChoice);
    console.log(humanChoice);
})
paper.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const humanChoice = paper.textContent.toLowerCase();
    // playRound(humanChoice, computerChoice);
    console.log(humanChoice);
})
scissors.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const humanChoice = scissors.textContent.toLowerCase();
    // playRound(humanChoice, computerChoice);
    console.log(humanChoice);
})


console.log(`Human score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);
