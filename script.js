// Functions

function getComputerChoise() {
    let randomPick = Math.random(); 
    console.log(randomPick);

   
    if (randomPick <= 0.33) {
        console.log("Rock"); 
    } else if (randomPick >= 0.33 && randomPick <= 0.66) { 
        console.log("Paper"); 
    } else if (randomPick >= 0.66 && randomPick <= 1) { 
        console.log("Scissors"); } 
        else console.log("Something's wrong!")

}

