function computerPlay(){
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)]
    return choice;
}

function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase();
    let result="";

     if(playerSelection === computerSelection){
        return ("It is a draw. You both played " + playerSelection + ".");
    }
    
    const mergedSelection = playerSelection + computerSelection;
    

   
    switch(mergedSelection){
        case 'paperrock':
        case 'scissorspaper':
        case 'rockscissors':
            result = "You won! " +  playerSelection +" beats "+ computerSelection + " .";
            break;  
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            result = "Computer won! " + computerSelection +" beats "+ playerSelection + " .";
            break;

        default:
            result = "ERROR!";    


    }
    
    return result;

}

let game = () => {
    
    for(let i = 0 ; i< 5; i++){
        playerSelection = prompt("Enter your choice!");
        console.log(playRound(playerSelection,computerPlay()));
    }
}