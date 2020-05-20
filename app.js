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
            let computerPick = computerPlay();
            let roundResult = playRound(e.srcElement.id, computerPick);

            // Trigger the animation for player
            animationPlayerimage (e.srcElement.id);
            animationCPUimage (`cpu${computerPick}`);
            
            // Display the round number & round Result
            document.getElementById("roundContentFirst").textContent = `Round ${roundCount ++}`;
            document.getElementById("roundContentSecond").innerHTML = roundResult;

            // Update the score
            if (roundResult.includes("You Win")){
                playerScore ++;
            } else if (roundResult.includes("You Loose")){
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
}
    
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
        result = `You both played ${computerSelection} <br> It's a Draw!`;
    } else if ((playerSelection == "Paper" && computerSelection == "Rock") ||
                (playerSelection == "Rock" && computerSelection == "Scissors") ||
                (playerSelection == "Scissors" && computerSelection == "Paper")) { 
        result = `${playerSelection} beats ${computerSelection} <br> You Win!`;      
    } else {
        result = `${computerSelection} beats ${playerSelection} <br> You Loose!`;
    }
    return result;
}

// Player image animation when click
function animationPlayerimage (imageID) {
    const imageToAnimate = document.getElementById(`${imageID}`)
    imageToAnimate.classList.add('playerImgAnimation');
    imageToAnimate.addEventListener( "animationend",  function() {
        imageToAnimate.classList.remove("playerImgAnimation");    
    } );
}

// Computer image animation
function animationCPUimage (imageID) {
    const imageToAnimate = document.getElementById(`${imageID}`)
    imageToAnimate.classList.add('computerImgAnimation');
    imageToAnimate.addEventListener( "animationend",  function() {
        imageToAnimate.classList.remove("computerImgAnimation");    
    } );
}
