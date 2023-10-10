const container = document.querySelector('#container');

const red = document.createElement('p');
red.classList.add('red');
red.textContent = "Hey I'm red!";
container.appendChild(red);

const blue = document.createElement('h3');
blue.classList.add('blue');
blue.textContent = "I'm a blue h3!";
container.appendChild(blue);

const newDiv = document.createElement('div');
newDiv.classList.add('newDiv');
const another_h1 = document.createElement('h1');
const another_p = document.createElement('p');
another_h1.classList.add('another_h1');
another_p.classList.add('another_p');
another_h1.textContent = "I'm in a div";
another_p.textContent = "ME TOO";
newDiv.appendChild(another_h1);
newDiv.appendChild(another_p);
container.appendChild(newDiv);




const gameContainer = document.createElement('div');
gameContainer.classList.add('gameContainer');
const result = document.createElement('h1');
result.classList.add('resultHeader');
result.textContent = "you won this many times: " + playerCounter;
gameContainer.appendChild(result);
container.appendChild(gameContainer);


let choice = ["rock", "paper", "scissors"]
let playerCounter = 0;
let computerCounter = 0;
let tieCounter = 0;

// game();

function getRandomNumber(){
    const number = Math.floor(Math.random() * 3);
    return number;
}

function getComputerChoice(number, choice){
    let computer = choice[number];
    return computer;
}

function playGame(playerSelection, number, choice){
    const computerSelection = getComputerChoice(number, choice);
    if(playerSelection === computerSelection){
        tieCounter++;
        return "You tie!";
    }
    if(computerSelection === "scissors"){
        if(playerSelection === "rock"){
            playerCounter++;
            return "You win! Rock beats scissors!";
        }else if(playerSelection === "paper"){
            computerCounter++;
            return "You lose! Scissors beats paper!";
        }
    }else if(computerSelection === "paper"){
        if(playerSelection === "rock"){
            computerCounter++;
            return "You lose! Paper beats rock";
        }else if(playerSelection === "scissors"){
            playerCounter++;
            return "You win! Scissors beats paper!";
        }
    }else if(computerSelection === "rock"){
        if(playerSelection === "paper"){
            playerCounter++;
            return "You win! Paper beats rock!";
        }else if(playerSelection === "scissors"){
            computerCounter++;
            return "You lose! Rocks beats scissors!";
        }
    }
}

function userInput(){
    while(true){
        let playerSelection = null;

        while(playerSelection === null){
            playerSelection = prompt("rock, paper or scissors?");
            playerSelection = playerSelection.toLowerCase();
        }
        for(let i = 0; i < choice.length; i++) {
            if(playerSelection === choice[i]){
                return playerSelection;
            }
        }
        console.log("Invalid input, please try again");
    }
}


function playRound(number){
    const selection = userInput();
    const result = playGame(selection, number, choice);
    console.log(result);
}
function game(){
    for(let i = 0; i < 5; i++){
        const number = getRandomNumber();
        playRound(number);
    }
    console.log("Game over!");
    console.log("Your score: " + playerCounter);
    console.log("Computer score: " + computerCounter);
    console.log("Tie games: " + tieCounter);
}





