let humanScore = 0;
let computerScore = 0;




function playGame() {
    function getComputerChoice() {
        const choice = Math.floor(Math.random() * 3) + 1;
        if (choice == 1) {
            return 'rock';
        }
        else if (choice == 2) {
            return 'paper';
        }
        return 'scissors';
    }
    function getHumanChoice() {
        const choice = prompt('Please enter your choice ? ');
        return choice;
    }
    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice();
        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log('You win! Rock beats Scissors');
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log('You win! Paper beats Rock!');
            humanScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log('You win! Scissors beats Paper!');
            humanScore++;
        } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
            console.log('You win! Rock beats Scissors');
            computerScore++;
        } else if (computerChoice === 'paper' && humanChoice === 'rock') {
            console.log('You win! Paper beats Rock!');
            computerScore++;
        } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
            console.log('You win! Scissors beats Paper!');
            computerScore++;
        }
        else {
            console.log(`${humanChoice} is equal to ${computerChoice} nothing happens!`);
        }
    }
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}
playGame();
console.log(`Human score : ${humanScore}`);
console.log(`Computer score : ${computerScore}`);
