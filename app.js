// Start a game if user clicks "Start a new game"
const start = document.querySelector('#start');
start.onclick = () => game ();

function game () {
    // Variables for the score calculation & round count
    let playerScore = 0;
    let computerScore = 0;
    let roundCount = 0;

        // Remove the content of #roundContent
        let roundContent = document.querySelector('#roundContent');
        
        while (roundContent.lastChild) {
            roundContent.removeChild(roundContent.lastChild);
        }

        // Create and display Round number and ask to make a move
        const liveRoundCount = document.createElement('p');
        liveRoundCount.classList.add('centerContent');
        liveRoundCount.textContent = `Round ${++ roundCount}`;
        roundContent.appendChild(liveRoundCount);

        const liveRoundResult = document.createElement('p');
        liveRoundResult.classList.add('centerContent');
        liveRoundResult.textContent = 'Make your move';
        roundContent.appendChild(liveRoundResult);
    
     
        // Player choose a weapon by clicking and call all functions to play a round
        const playerWeaponChoice = document.querySelectorAll('.playerWeaponImg');

        playerWeaponChoice.forEach(playerWeaponImg => {
            playerWeaponImg.addEventListener('click', (e) => {

                // Play a round with the proper player and computer selections
                let roundResult = playRound(e.srcElement.id, computerPlay());

                // Display the round number 
                document.getElementById("roundContent").firstChild.textContent = `Round ${roundCount ++}`;
                
                // Display the round result
                document.getElementById("roundContent").lastChild.textContent = roundResult;

                // Update the score
                if (roundResult.includes("You win")){
                    playerScore ++;
                } else if (roundResult.includes("You loose")){
                    computerScore ++;
                }

                // Display the score
                document.getElementById("liveScore").textContent = playerScore + " - " + computerScore;
      
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