/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/* Global Variables*/
var scores, roundScore, activePlayer, image;

scores = [0, 0];
roundScore = 0;
activePlayer = "player1";


document.getElementById('player1-score').textContent = "0";
document.getElementById('player2-score').textContent = "0";
document.getElementById('player1-total').textContent = "0";
document.getElementById('player2-total').textContent = "0";



/*ROll Dice*/
document.querySelector('#roll').addEventListener('click', function() {
  var image;
  /*Randomize*/
  var dice = Math.floor(Math.random() * 6) + 1;
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
  /*Update the round score IF the rolled dice is not 1*/

});















