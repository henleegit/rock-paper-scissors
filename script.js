function caseInsensitive(inputStr) {
    let outputStr= inputStr.toLowerCase();
    return outputStr.charAt(0).toUpperCase() + outputStr.slice(1);
}

function playerPlay() {
    playerSelection = caseInsensitive(prompt('What\'s your hand?'));
    if (elementsArray.indexOf(playerSelection) > -1) {
        return playerSelection;
    } else {
        alert('Not a valid hand!');
        playerPlay();
    }
}

function computerPlay() {
    computerSelection = elementsArray[Math.floor(Math.random() * elementsArray.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a Tie!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore++;
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore++;
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++;
        return 'You Win! Paper beats Rock';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore++;
        return 'You Win! Scissors beats Paper';
    } else {
        return 'Ro-Sham-Bo Error!';
    }
}

function declareWinner() {
    if (playerScore < computerScore) {
        return `Player(${playerScore}) vs Computer(${computerScore}) You're a Loser!`;
    } else if (playerScore > computerScore) {
        return `Player(${playerScore}) vs Computer(${computerScore}) You're a Winner!`;
    } else {
        return `Player(${playerScore}) vs Computer(${computerScore}) It's a Tie!`;
    }
}

const elementsArray = [
    'Rock',
    'Paper',
    'Scissors'
]

let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        playerPlay();
        computerPlay();
        console.log(`Player: ${playerSelection}`);
        console.log(`Computer: ${computerSelection}`);
        console.log(`Result: ${playRound(playerSelection,computerSelection)}.`);
        console.log('\n');
    }
    console.log(`Final Tally: ${declareWinner()}`);
}

game();