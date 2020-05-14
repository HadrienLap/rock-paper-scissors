// Start a game at refresh
game()

function game(){
    // Variables for the score calculation & round count
    let playerScore = 0;
    let computerScore = 0;
    let roundCount = 1;
    
    // Welcome message
    console.log("Compete against the computer in a 5 rounds rock paper scissors battle!");

    // Play the game 5 times
    for (let i = 0; i < 5; i++ ) {
        
        // Lign separation between rounds
        console.log("\n");

        // Display the current round number: 
        console.log(`Round ${roundCount}`);

        //Round count
        roundCount ++; 

        // Play a round and display its result
        let roundResult = playRound(playerPlay(), computerPlay());
        console.log(roundResult);

        // Score calculation
        if (roundResult.includes("You win")){
            playerScore ++;
        } else if (roundResult.includes("You loose")){
            computerScore ++;
        }
        // Display the live score count unless it is last round
        while(roundCount < 6){
            console.log(`The score is ${playerScore} for you and ${computerScore} for the computer!`);
            break;
        }
    }

    // Lign separation before final score
    console.log("\n");

    //Final result display
    if (playerScore > computerScore){
        console.log(`The final score is ${playerScore} for you and ${computerScore} for the computer, you won! :)`);
    } else if (computerScore > playerScore){
        console.log(`The final score is ${playerScore} for you and ${computerScore} for the computer, you lost :(`);
    } else {
        console.log(`The final score is ${playerScore} for you and ${computerScore} for the computer, it's a tie :|`);
    }
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

// Player function, return player's choice capitalized
function playerPlay (){

    while (true) {
        // Prompt the player for his choice
        let playerChoice = window.prompt("Choose Rock, Paper or Scissors");
        
        //Transformation of the player choice to a Capitalized format
        let playerChoiceLowerCase = playerChoice.toLowerCase(); 
        playerChoiceCapitalized = playerChoiceLowerCase.charAt(0).toUpperCase() + playerChoiceLowerCase.slice(1);            
    
        if (playerChoiceCapitalized == "Rock" ||
            playerChoiceCapitalized == "Paper" ||
            playerChoiceCapitalized == "Scissors") {
                break;
        } else {
            console.log(`Please enter a valid choice`);
        }
    }
    
    // Console log of the player's choice
    console.log(`You chose ${playerChoiceCapitalized}`);
    return playerChoiceCapitalized;
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