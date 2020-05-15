 // Welcome message
 console.log("Click 'Start a new game' to compete against the computer. The first player to reach 3 point wins!");
 
 // Start a game if user clicks "Start a new game"
const start = document.querySelector('#start');
start.onclick = () => {
    game ();
}



function game () {
    // Variables for the score calculation & round count
    let playerScore = 0;
    let computerScore = 0;
    let roundCount = 1;



    // Player choose a weapon and play a round
    console.log('Choose your weapon');

    const weapons = document.querySelectorAll('.controls');

    weapons.forEach(button => {
        button.addEventListener('click', (e) => {
        let roundResult = playRound(button.id, computerPlay());
        
        displayRounds(roundResult, roundCount);
        });
    });
}

// Computer random pick and return his choice
function computerPlay () {

    // Computer randomly pick a number from 0 to 2, and return the computerRandomeChoice
    // 0 = rock, 1 = paper, 2 = scissors
    const computerRandomNumber = Math.floor(Math.random() * 3);
    
    switch (computerRandomNumber){
        case 0 : 
            console.log(`The computer chose Rock`);
            return "Rock";
        case 1 : 
            console.log(`The computer chose Paper`);
            return "Paper";
        case 2 :
            console.log(`The computer chose Scissors`);
            return "Scissors";
    }
}

// Play a round and return the result
function playRound(playerSelection, computerSelection) {
    let result = null;
    
    if (playerSelection == computerSelection){
        result = `You both played ${computerSelection}, it's a draw!`;
    } else if ((playerSelection == "Paper" && computerSelection == "Rock") ||
                (playerSelection == "Rock" && computerSelection == "Scissors") ||
                (playerSelection == "Scissors" && computerSelection == "Paper")) { 
        result = `You win! ${playerSelection} beats ${computerSelection}`;      
    } else {
        result = `You loose! ${computerSelection} beats ${playerSelection}`;  
    }
    return result;
}

// Display the choices and the results of each rounds
function displayRounds(roundResult, roundCount) {
    const resultDisplay = document.querySelector('#resultDisplay');
    const content = document.createElement('p');
    content.textContent = `Round ${roundCount}: ` + roundResult;
    resultDisplay.appendChild(content);

}
