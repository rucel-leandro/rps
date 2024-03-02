// Functions



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

let computerSelection = getComputerChoise();



// Game logic not working. If it is a draw it outputs You lose! Check winning condition for the Computer
    
   
// if (playersSelection === computerSelection) {
//     console.log("It's a draw!");
// } switch (playersSelection , computerSelection) {
//         case ("Rock", "Paper"):
//             console.log(`You lose! ${computerSelection} beats ${playersSelection}`);
//             break;
//         case ("Rock", "Scissors"):
//             console.log(`You win! ${playersSelection} beats ${computerSelection}`);
//             break;

//         case ("Paper", "Rock"):
//             console.log(`You win! ${playersSelection} beats ${computerSelection}`);
//             break;

//         case ("Paper", "Scissors"):
//           console.log(`You lose! ${computerSelection} beats ${playersSelection}`);
//             break;

//         case ("Scissors", "Paper"):
//         console.log(`You win! ${playersSelection} beats ${computerSelection}`);
//         break;

//         case ("Scissors", "Rock"):
//         console.log(`You lose! ${computerSelection} beats ${playersSelection}`);
//         break;

//         default: 
//         console.log("Error"); 
              
//     }
    


function playGame (playersSelection , computerSelection = getComputerChoise()) {   
    console.log(computerSelection);
    console.log(playersSelection);

    if (playersSelection === computerSelection) {
        console.log("It's a draw!")
    }
    

  
}

