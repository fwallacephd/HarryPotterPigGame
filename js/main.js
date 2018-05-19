/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/* Global Variables*/
var player1Score, player2Score, roundScore, activePlayer, image, dice;

player1Score = 0;
player2Score = 0;
roundScore = 0;
activePlayer = "player1";


document.getElementById('player1-score').textContent = "0";
document.getElementById('player2-score').textContent = "0";
document.getElementById('player1-total').textContent = "0";
document.getElementById('player2-total').textContent = "0";



/*ROll Dice*/
document.querySelector('#roll').addEventListener('click', function() {
  image;
  /*Randomize*/
  dice = Math.floor(Math.random() * 6) + 1;

  /*Display the Result*/
  /*Matching Images*/
  if (dice === 1){
    image = 'egg';
  } else if (dice === 2) {
    image = 'broom';
  } else if (dice === 3) {
    image = 'owl';
  } else if (dice === 4) {
    image = 'hat';
  } else if (dice === 5) {
    image = 'map';
  } else if (dice === 6) {
    image = 'goblet';
  }

  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = image + '.png';


  /*Change players, Update Scores - Function */
  nextPlayer();
});


/*Hold Button*/
document.querySelector('#hold').addEventListener('click', function() {
  //Add Current Score to Total Score
  //Update the UI
  nextPlayer();
  if (activePlayer === "player1") {
    player1Score = roundScore;
    document.querySelector('#player1-score').textContent = player1Score;
    activePlayer = "player2";
    player1Score = 0;
  } else if (activePlayer === "player2") {
    player2Score = roundScore;
    document.querySelector('#player2-score').textContent = player2Score;
    activePlayer = "player1";
    player2Score = 0;
  }


 //Check if player won the game

});




/* Track Player and Score - Function*/
function nextPlayer() {
  if (activePlayer === "player1") {
    //Show Active PLayer
    document.querySelector('#player1-name').classList.add('active');
    document.querySelector('#player2-name').classList.remove('active');
    if (dice > 1) {
      roundScore += dice;
      document.querySelector('#player1-total').textContent = roundScore;
    } else {
      //Change State Pattern
      roundScore = 0;
      activePlayer = "player2";
      document.getElementById('player1-total').textContent = "0";
      document.getElementById('player2-total').textContent = "0";
      document.querySelector('.dice').style.display = "none";
    }

  } else if (activePlayer === "player2") {
    //Show Active Player
    document.querySelector('#player2-name').classList.add('active');
    document.querySelector('#player1-name').classList.remove('active');
    if (dice > 1) {
      roundScore += dice;
      document.querySelector('#player2-total').textContent = roundScore;
    } else {
      //Change State Pattern
      roundScore = 0;
      activePlayer = "player1";
      document.getElementById('player2-total').textContent = 0;
      document.getElementById('player1-total').textContent = "0";
      document.querySelector('.dice').style.display = "none";
    }
  }
};






