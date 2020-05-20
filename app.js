game();



function game () {
    // Variables for the DOM
    const playerWeaponChoice = document.querySelectorAll('.playerWeaponImg');
    const roundContentFirst = document.getElementById("roundContentFirst");
    const roundContentSecond = document.getElementById("roundContentSecond");
    const liveScore = document.getElementById("liveScore");

    // Variables for the score calculation & round count
    let playerScore = 0;
    let computerScore = 0;
    let roundCount = 1;

    // Player choose a weapon by clicking and call all functions to play a round
    playerWeaponChoice.forEach(playerWeaponImg => {
        playerWeaponImg.addEventListener('click', (e) => {

            // Play a round with the proper player and computer selections
            let computerPick = computerPlay();
            let roundResult = playRound(e.srcElement.id, computerPick);

            // Trigger the animation for player
            animationPlayerimage (e.srcElement.id);
            animationCPUimage (`cpu${computerPick}`);
            
            // Display the round number & round Result
            roundContentFirst.textContent = `Round ${roundCount ++}`;
            roundContentSecond.innerHTML = roundResult;

            // Update the score
            if (roundResult.includes("You Win")){
                playerScore ++;
            } else if (roundResult.includes("You Loose")){
                computerScore ++;
            }

            // Display the score
            liveScore.textContent = playerScore + " - " + computerScore;

            //Final result display
            if (playerScore == 3 || computerScore == 3) {

                if (playerScore > computerScore){
                    roundContentFirst.textContent = 'You Won !';
                    roundContentSecond.textContent = `The final score is ${playerScore} for you and ${computerScore} for the computer`;
                } else {
                    roundContentFirst.textContent = 'You Lost !';
                    roundContentSecond.textContent = `The final score is ${playerScore} for you and ${computerScore} for the computer`;
                }
                
                // Reset the scores and the roundCount to play another game
                playerScore = 0;
                computerScore = 0;
                roundCount = 1;
              
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
    const imageToAnimate = document.getElementById(`${imageID}`);
    imageToAnimate.classList.add('playerImgAnimation');
    imageToAnimate.addEventListener( "animationend",  function() {
        imageToAnimate.classList.remove("playerImgAnimation");    
    } );
}

// Computer image animation
function animationCPUimage (imageID) {
    const imageToAnimate = document.getElementById(`${imageID}`);
    imageToAnimate.classList.add('computerImgAnimation');
    imageToAnimate.addEventListener( "animationend",  function() {
        imageToAnimate.classList.remove("computerImgAnimation");    
    } );
}

