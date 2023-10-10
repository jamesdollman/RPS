let choice = ["rock", "paper", "scissors"]
let playerCounter = 0;
let computerCounter = 0;
let tieCounter = 0;
let rock, paper, scissors;
let gameCounter = 0;

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
    if(gameCounter === 5 || gameCounter > 5){
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
    rock = document.createElement('button');
    paper = document.createElement('button');
    scissors = document.createElement('button');
    const resultsContainer = document.createElement('div');
    const score = document.createElement('p');
    const scoreLabel = document.createElement('label');

    //add text to buttons
    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissors.textContent = "Scissors";
    scoreLabel.textContent = "Current score: ";


    //append buttons to body
    body.appendChild(rock);
    body.appendChild(paper);
    body.appendChild(scissors);

    //append score, scoreLabel to resultsContainer
    resultsContainer.appendChild(score);
    resultsContainer.appendChild(scoreLabel);

    //append resultsContainer to body
    body.appendChild(resultsContainer);

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
}

function showResults() {
    console.log(`Player: ${playerCounter}, Computer: ${computerCounter}, Tie: ${tieCounter}`);
    console.log(`Games played: ${gameCounter}`);

}


