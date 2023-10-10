let choice = ["rock", "paper", "scissors"]
let playerCounter = 0;
let computerCounter = 0;
let tieCounter = 0;
let rock, paper, scissors;
let gameCounter = 0;
let rpsWinner;
const winner = document.createElement('p');
const scoreLabel = document.createElement('label');
const restartButton = document.createElement('button');
game();

function getRandomNumber(){
    const number = Math.floor(Math.random() * 3);
    return number;
}

function getComputerChoice(number){
    let computer = choice[number];
    return computer;
}

function playGame(userChoice, number, choice){
    if(gameCounter === 6 || gameCounter > 6){
        console.log("GAME OVER >:)")
    }else {
        const computerSelection = getComputerChoice(number, choice);
    let result = '';

    if(userChoice === computerSelection){
        tieCounter++;
        result = "You tie!";
    }else if (
        (userChoice === "rock" && computerSelection === "scissors") ||
        (userChoice === "paper" && computerSelection === "rock") ||
        (userChoice === "scissors" && computerSelection === "paper")
    ) {
        playerCounter++;
        result = `You win! ${userChoice} beats ${computerSelection}!`;
    }else {
        computerCounter++;
        result = `You lose! ${computerSelection} beats ${userChoice}!`;
    }
    console.log(result);
    showResults();
    }

}


function game(){
    createElements();
    eventListeners();
}

function createElements() {
    //Create body selector
    const body = document.querySelector('body');

    //Create HTML Elements
    const buttonContainer = document.createElement('div');
    rock = document.createElement('button');
    paper = document.createElement('button');
    scissors = document.createElement('button');
    const resultsContainer = document.createElement('div');
    const restartContainer = document.createElement('div');
    

    //add text to elements
    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissors.textContent = "Scissors";
    scoreLabel.textContent = "Current score: ";
    scoreLabel.textContent = `Player: ${playerCounter}, Computer: ${computerCounter}, Tie: ${tieCounter}`;
    restartButton.textContent = "Restart Game"

    //Set class names
    resultsContainer.className="resultsContainer";
    buttonContainer.className = "buttonContainer";
    scoreLabel.className="scoreLabel";
    winner.className="winner";
    restartButton.className = "restartButton";
    restartContainer.className = "restartContainer";

    //append buttons to buttonContainer
    buttonContainer.appendChild(rock);
    buttonContainer.appendChild(paper);
    buttonContainer.appendChild(scissors);

    //append score, scoreLabel, winner to resultsContainer
    resultsContainer.appendChild(scoreLabel);
    resultsContainer.appendChild(winner);

    //append restartButton to restartContainer
    restartContainer.appendChild(restartButton);

    //append resultsContainer and buttonContainer to body
    body.appendChild(buttonContainer);
    body.appendChild(resultsContainer);
    body.appendChild(restartContainer);
    
}

function eventListeners() {
    //event listeners 
    rock.addEventListener('click', () => {
        gameCounter++;
        playGame('rock', getRandomNumber(), choice);
        
    })

    paper.addEventListener('click', () => {
        gameCounter++;
        playGame('paper', getRandomNumber(), choice);
    })

    scissors.addEventListener('click', () => {
        gameCounter++;
        playGame('scissors', getRandomNumber(), choice);
    })

    restartButton.addEventListener('click', () => {
        gameCounter = 0;
        tieCounter = 0;
        playerCounter = 0;
        computerCounter = 0;
        showResults();
    })
    

}

function showResults(winner) {
    scoreLabel.textContent = `Player: ${playerCounter}, Computer: ${computerCounter}, Tie: ${tieCounter}`;
    determineWinner();
    
}

function determineWinner() {
    if(gameCounter === 5){
        if(playerCounter > computerCounter){
            rpsWinner = 'You win!'
        }else {
            rpsWinner = 'The Computer wins!'
        }
    }
    winner.textContent = rpsWinner;
}


