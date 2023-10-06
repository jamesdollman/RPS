let choice = ["rock", "paper", "scissors"]


function getComputerChoice(number, choice){
    let computer = choice[number];
    return computer;
}

function playGame(playerSelection, computer){
    if(playerSelection === computer){
        return "You tie!";
    }
    if(computer === "scissors"){
        if(playerSelection === "rock"){
            return "You win! Rock beats scissors!";
        }else if(playerSelection === "paper"){
            return "You lose! Scissors beats paper!";
        }
    }else if(computer === "paper"){
        if(playerSelection === "rock"){
            return "You lose! Paper beats rock";
        }else if(playerSelection === "scissors"){
            return "You win! Scissors beats paper!";
        }
    }
}

function userInput(){
    let playerSelection = prompt("rock, paper or scissors?");
    playerSelection = playerSelection.toLowerCase();
    let isChoice = false;

    for(let i = 0; i < choice.length; i++) {
        if(playerSelection === choice[i]){
            isChoice = true;
            break;
        }
    }
    if(isChoice === false){
        console.log("Invalid input, please try again");
        userInput();
    }

    return playerSelection;
}



function playRound(number){
    const playerSelection = userInput();
    const computerSelection = getComputerChoice(number, choice);
    const result = playGame(playerSelection, computerSelection, number);
    console.log(result);
}
function game(){
    let number = Math.floor(Math.random() * 3);
    for(let i = 0; i < 5; i++){
        playRound();
    }
}

game();