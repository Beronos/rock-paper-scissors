let playerScore = 0 ;
let computerScore = 0 ;

const player = document.getElementById("player-score");
const computer = document.getElementById("computer-score");
const whoWon = document.getElementById("whowon");
const gameOverDiv = document.querySelector(".game-over");

const gameWinner = document.getElementById("game-winner")



player.textContent = "Player Score : " + playerScore;
computer.textContent = "Computer Score: " + computerScore;

const buttons = document.querySelectorAll('img.btn');



buttons.forEach((button) => {
    button.addEventListener('click',() => {
        playerSelection=button.id;
        
    });
    button.addEventListener('click',playRound);
})




let reset = () =>{  
    playerScore = 0;
    computerScore = 0;
    player.textContent = "Player Score : " + playerScore;
    computer.textContent = "Computer Score: " + computerScore;
   
    
}

let gameWon = () =>{
    if(playerScore===5){
        whoWon.textContent="Congratulations! You won.";
      
        reset();
    }

    else if(computerScore===5){
        whoWon.textContent = "I am sorry! Computer won.";
        reset();
    }
}

function computerPlay(){
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)]
    return choice;
}


function playRound(){
    computerSelection=computerPlay();
    if(playerSelection === computerSelection){
        draw();
        return;
    }
    const mergedSelection = playerSelection + computerSelection;
    
    switch(mergedSelection){
        case 'paperrock':
        case 'scissorspaper':
        case 'rockscissors':
            win();
            break;  
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            lose();
            break;

        default:
            result = "ERROR!" + playerSelection +  computerSelection;    


    }
    
    

}

const draw = () =>{
    whoWon.textContent = "It is a draw. You both played " + playerSelection + ".";

    
}

const win = ()=>{
    whoWon.textContent = "You won! " +  capitalize(playerSelection) +" beats "+ computerSelection + " .";
    playerScore++;
    player.textContent = "Player Score : " + playerScore;
    gameWon();
}

const lose = ()=>{
    whoWon.textContent = "Computer won! " + capitalize(computerSelection) +" beats "+ playerSelection + " .";
    computerScore++;    
    computer.textContent = "Computer Score: " + computerScore;
    gameWon();

}	







const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}