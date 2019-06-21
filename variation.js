var scores, roundScore, activePlayer, gamePlaying;

init();

// Roll dice (using mouse click or spacebar)
document.querySelector('.btn-roll').addEventListener('click', rollDice);
window.addEventListener('keydown', function(event) {
	if (event.keyCode === 32) {
		rollDice();
	}
});

// Hold dice (using mouse click or Enter key)
document.querySelector('.btn-hold').addEventListener('click', holdDice);
window.addEventListener('keydown', function(event) {
	if (event.keyCode === 13) {
		holdDice();
	}
});

// --- DICE ROLL --- //
function rollDice() {
	if (gamePlaying) {
		// 1. Random number
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;

		// 2. Display result
		document.getElementById('dice-1').style.display = 'block';
		document.getElementById('dice-2').style.display = 'block';
		document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
		document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

		// // 3. Update round score only if rolled number was not a 1.
		if (dice1 !== 1 && dice2 !== 1) {
			// Add score
			roundScore += dice1 + dice2;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			// Next player
			setTimeout(function(){ nextPlayer(); }, 1100);
		}
	}
}

// --- DICE HOLD --- //
function holdDice() {
	if (gamePlaying) {
		// Add CURRENT score to GLOBAL score
		scores[activePlayer] += roundScore;

		// Update UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		var input = document.querySelector('.final-score').value;
		var winningScore;

		// Undefined, 0, null or "" are COERCED to false. Anything else is COERCED to true.
		if (input) {
			winningScore = input;
		} else {
			winningScore = 100;
		}

		// Check if player won the game

		if (scores[activePlayer] >= winningScore) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.getElementById('dice-1').style.display = 'none';
			document.getElementById('dice-2').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			// Next player
			nextPlayer();
		}
	}
}

// --- NEXT PLAYER --- //
function nextPlayer() {
	// Next player
	activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
	roundScore = 0;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	// document.querySelector(".player-0-panel").classList.remove("active");
	// document.querySelector(".player-1-panel").classList.add("active");
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
}
// Don't add init() as we only want function to be called on btn-new click. Pass it as a param without ().
document.querySelector('.btn-new').addEventListener('click', init);

// --- START GAME --- //
function init() {
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;

	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
}
