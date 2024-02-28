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

