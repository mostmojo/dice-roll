// var scores, roundScore, activePlayer, gamePlaying;

// init();

// // Roll dice (using mouse click or spacebar)
// document.querySelector('.btn-roll').addEventListener('click', rollDice);
// window.addEventListener('keydown', function(event) {
// 	if (event.keyCode === 32) {
// 		rollDice();
// 	}
// });

// // Hold dice (using mouse click or Enter key)
// document.querySelector('.btn-hold').addEventListener('click', holdDice);
// window.addEventListener('keydown', function(event) {
// 	if (event.keyCode === 13) {
// 		holdDice();
// 	}
// });

// function rollDice() {
// 	if (gamePlaying) {
// 		// 1. Random number
// 		var dice = Math.floor(Math.random() * 6) + 1;
// 		// 2. Display result
// 		var diceDOM = document.querySelector('.dice');
// 		diceDOM.style.display = 'block';
// 		diceDOM.src = 'dice-' + dice + '.png';
// 		// 3. Update round score only if rolled number was not a 1.
// 		if (dice !== 1) {
// 			// Add score
// 			roundScore += dice;
// 			document.querySelector('#current-' + activePlayer).textContent = roundScore;
// 		} else {
// 			// Next player
// 			nextPlayer();
// 		}
// 	}
// }

// function holdDice() {
// 	if (gamePlaying) {
// 		// Add CURRENT score to GLOBAL score
// 		scores[activePlayer] += roundScore;
// 		// Update UI
// 		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
// 		// Check if player won the game
// 		if (scores[activePlayer] >= 100) {
// 			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
// 			document.querySelector('.dice').style.display = 'none';
// 			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
// 			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
// 			gamePlaying = false;
// 		} else {
// 			// Next player
// 			nextPlayer();
// 		}
// 	}
// }

// function nextPlayer() {
// 	// Next player
// 	activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
// 	roundScore = 0;

// 	document.getElementById('current-0').textContent = '0';
// 	document.getElementById('current-1').textContent = '0';

// 	// document.querySelector(".player-0-panel").classList.remove("active");
// 	// document.querySelector(".player-1-panel").classList.add("active");
// 	document.querySelector('.player-0-panel').classList.toggle('active');
// 	document.querySelector('.player-1-panel').classList.toggle('active');

// 	document.querySelector('.dice').style.display = 'none';
// }
// // we don't add init() as we only want function to be called upon btn-new button click. So, pass it as a param.
// document.querySelector('.btn-new').addEventListener('click', init);

// function init() {
// 	scores = [0, 0];
// 	activePlayer = 0;
// 	roundScore = 0;
// 	gamePlaying = true;

// 	document.querySelector('.dice').style.display = 'none';
// 	document.getElementById('score-0').textContent = '0';
// 	document.getElementById('score-1').textContent = '0';
// 	document.getElementById('current-0').textContent = '0';
// 	document.getElementById('current-1').textContent = '0';
// 	document.getElementById('name-0').textContent = 'Player 1';
// 	document.getElementById('name-1').textContent = 'Player 2';
// 	document.querySelector('.player-0-panel').classList.remove('winner');
// 	document.querySelector('.player-1-panel').classList.remove('winner');
// 	document.querySelector('.player-0-panel').classList.remove('active');
// 	document.querySelector('.player-0-panel').classList.add('active');
// 	document.querySelector('.player-1-panel').classList.remove('active');
// }
