let choice = ["rock", "paper", "scissors"]
let number = Math.floor(Math.random() * 3);

function getComputerChoice(number, choice){
    let computer = choice[number];
    return computer;
}

function playGame(playerSelection){
    const computerSelection = getComputerChoice(number, choice);
    if(playerSelection === computerSelection){
        return "You tie!";
    }
    if(computerSelection === "scissors"){
        if(playerSelection === "rock"){
            return "You win! Rock beats scissors!";
        }else if(playerSelection === "paper"){
            return "You lose! Scissors beats paper!";
        }
    }else if(computerSelection === "paper"){
        if(playerSelection === "rock"){
            return "You lose! Paper beats rock";
        }else if(playerSelection === "scissors"){
            return "You win! Scissors beats paper!";
        }
    }
}

function userInput(){
    while(true){
        let playerSelection = prompt("rock, paper or scissors?");
        playerSelection = playerSelection.toLowerCase();
        let isChoice = false;
        for(let i = 0; i < choice.length; i++) {
            if(playerSelection === choice[i]){
                return playerSelection;
            }
        }
        if(isChoice === false){
            console.log("Invalid input, please try again");
            }
            else if(isChoice === true){
                break;
            }
        }
        return playerSelection;
}



function playRound(){
    const selection = userInput();
    const result = playGame(selection);
    console.log(result);
}
function game(){
    for(let i = 0; i < 5; i++){
        playRound();
    }
}


game();

