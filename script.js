let humanScore = 0;
let computerScore = 0;

function playGame() {
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

    function getHumanChoice() {
        const choice = prompt('Please enter your choice (rock, paper, or scissors): ');
        return choice.toLowerCase();
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

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

playGame();
console.log(`Human score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);
