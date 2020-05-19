game();

function game () {
    // Variables for the score calculation & round count
    let playerScore = 0;
    let computerScore = 0;
    let roundCount = 1;

    // Player choose a weapon by clicking and call all functions to play a round
    const playerWeaponChoice = document.querySelectorAll('.playerWeaponImg');

    playerWeaponChoice.forEach(playerWeaponImg => {
        playerWeaponImg.addEventListener('click', (e) => {

            // Play a round with the proper player and computer selections
            let roundResult = playRound(e.srcElement.id, computerPlay());

            // Display the round number & round Result
            document.getElementById("roundContentFirst").textContent = `Round ${roundCount ++}`;
            document.getElementById("roundContent").lastChild.textContent = roundResult;

            // Update the score
            if (roundResult.includes("You win")){
                playerScore ++;
            } else if (roundResult.includes("You loose")){
                computerScore ++;
            }

            // Display the score
            document.getElementById("liveScore").textContent = playerScore + " - " + computerScore;

            if (playerScore == 3 || computerScore == 3) {

                //Final result display
                if (playerScore > computerScore){
                    console.log(`The final score is ${playerScore} for you and ${computerScore} for the computer, you won! :)`);
                } else if (computerScore > playerScore){
                    console.log(`The final score is ${playerScore} for you and ${computerScore} for the computer, you lost :(`);
                } else {
                    console.log(`The final score is ${playerScore} for you and ${computerScore} for the computer, it's a tie :|`);
                }
        
        
            }
    
        });
    }); 

    



        



    
    
  


    
    
    // Computer random pick and return his choice
    function computerPlay () {
        switch (Math.floor(Math.random() * 3)){
            case 0 : return "Rock";
            case 1 : return "Paper";
            case 2 :return "Scissors";
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
    
}