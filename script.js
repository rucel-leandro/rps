// Functions

let computerSelection = getComputerChoise();

function getComputerChoise() {
    let randomPick = Math.random(); 
  
    if (randomPick <= 0.33) {
        return ("rock"); 
    } else if (randomPick >= 0.33 && randomPick <= 0.66) { 
        return ("paper"); 
    } else if (randomPick >= 0.66 && randomPick <= 1) { 
        return ("scissors"); } 
        else return ("Something's wrong!")

}


function playRound (playersSelection, computerSelection = getComputerChoise()) {   

    
    console.log(computerSelection);

    let playersSelectionChanged = playersSelection.toLowerCase();
    console.log(playersSelectionChanged);

    if (playersSelectionChanged == computerSelection) {
        return("It's a draw!");
    } 
    else if (playersSelectionChanged == "paper" && computerSelection == "rock") {
        return ("You win! Paper beats Rock.")
    } else if (playersSelectionChanged == "paper" && computerSelection == "scissors") {
        return("You lose! Scissors beats Paper.");
    } else if (playersSelectionChanged == "rock" && computerSelection == "scissors") {
        return("You win! Rock beats Scissors.");
    } else if (playersSelectionChanged == "rock" && computerSelection == "paper") {
        return("You lose! Paper beats Rock.");
    } else if (playersSelectionChanged == "scissors" && computerSelection == "paper") {
        return("You win! Scissors beats Paper.");
    } else if (playersSelectionChanged == "scissors" && computerSelection == "rock") {
        return("You lose! Rock beats Scissors.");
    } else return "Not the same";
}