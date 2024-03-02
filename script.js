// Functions

let computerSelection = getComputerChoise();

function getComputerChoise() {
    let randomPick = Math.random(); 
  
    if (randomPick <= 0.33) {
        return ("Rock"); 
    } else if (randomPick >= 0.33 && randomPick <= 0.66) { 
        return ("Paper"); 
    } else if (randomPick >= 0.66 && randomPick <= 1) { 
        return ("Scissors"); } 
        else return ("Something's wrong!")

}


function playGame (playersSelection , computerSelection = getComputerChoise()) {   

    console.log(playersSelection);
    console.log(computerSelection);

    if (playersSelection === computerSelection) {
        console.log("It's a draw!")
    } 
    else if (playersSelection == "Paper" && computerSelection == "Rock") {
        console.log("You win! Paper beats Rock.")
    } else if (playersSelection == "Paper" && computerSelection == "Scissors") {
        console.log("You lose! Scissors beats Paper.");
    } else if (playersSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You win! Rock beats Scissors.");
    } else if (playersSelection == "Rock" && computerSelection == "Paper") {
        console.log("You lose! Paper beats Rock.");
    } else if (playersSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You win! Scissors beats Paper.");
    } else if (playersSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You lose! Rock beats Scissors.");
    }
}