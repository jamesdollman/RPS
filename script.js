let choice = ["rock", "paper", "scissors"]

game();

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
    }else if(computerSelection === "rock"){
        if(playerSelection === "paper"){
            return "You win! Paper beats rock!";
        }else if(playerSelection === "scissors"){
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
                console.log(playerSelection);
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
}



