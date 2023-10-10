let choice = ["rock", "paper", "scissors"]
let playerCounter = 0;
let computerCounter = 0;
let tieCounter = 0;

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


function game(){
    createElements();
}

function createElements() {
    const body = document.querySelector('body');
    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissors = document.createElement('button');
    
    //add text to buttons
    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissors.textContent = "Scissors";

    //append buttons to body
    body.appendChild(rock);
    body.appendChild(paper);
    body.appendChild(scissors);

    //event listeners 
    rock.addEventListener('click', () => {
        playGame('rock', getRandomNumber(), choice);
        
    })

    paper.addEventListener('click', () => {
        playGame('paper', getRandomNumber(), choice);
    })

    scissors.addEventListener('click', () => {
        playGame('scissors', getRandomNumber(), choice);
    })
}

function showResults() {
    console.log(`Player: ${playerCounter}, Computer: ${computerCounter}, Tie: ${tieCounter}`);
}


