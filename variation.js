var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice; // Needs to be in global scope because data gets lost in function scope.

// --- DICE ROLL --- //

document.querySelector(".btn-roll").addEventListener('click', function() {
    if(gamePlaying) {

        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. Display result
        document.getElementById("dice-1").style.display = "block";
        document.getElementById("dice-2").style.display = "block";
        document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
        document.getElementById("dice-2").src = "dice-" + dice2 + ".png";

        // // 3. Update round score only if rolled number was not a 1.
        if (dice1 !== 1 && dice2 !== 1) {

            // Add score
            roundScore += dice1 + dice2;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {

            // Next player
            nextPlayer();
        }

        // if (dice === 6 && lastDice === 6) {
        //     // Player loses entire score
        //     scores[activePlayer] = 0; // in memory
        //     document.querySelector("#score-" + activePlayer).textContent = "0"; // in DOM to render to browser
        //     nextPlayer();
        // } else if (dice !== 1) {
        //     // Add score
        //     roundScore += dice;
        //     document.querySelector("#current-" + activePlayer).textContent = roundScore;
        // } else {
        //     // Next player
        //     nextPlayer();
        // }

        // lastDice = dice;
    }
});

// --- DICE HOLD --- //

document.querySelector(".btn-hold").addEventListener("click", function() {
    if(gamePlaying) {

        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update UI
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;

        // Undefined, 0, null or "" are COERCED to false. Anything else is COERCED to true.
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // Check if player won the game

        if (scores[activePlayer] >= winningScore) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            document.getElementById("dice-1").style.display = "none";
            document.getElementById("dice-2").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        }
    }
})

// --- NEXT PLAYER --- //

function nextPlayer() {
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    // document.querySelector(".player-0-panel").classList.remove("active");
    // document.querySelector(".player-1-panel").classList.add("active");
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";
}
// Don't add init() as we only want function to be called on btn-new click. Pass it as a param without ().
document.querySelector(".btn-new").addEventListener("click", init);


// --- START GAME --- //

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1 ";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");
}