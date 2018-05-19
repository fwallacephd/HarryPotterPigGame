/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/* Global Scope*/
let player1Score, player2Score, activePlayer, player1Total, player2Total, dice;

gameInit();

/*ROll Dice*/
document.querySelector('#roll').addEventListener('click', function() {
  /*Randomize*/
  dice = Math.floor(Math.random() * 6) + 1;
  console.log("The number is" + dice);

  /*Display the Result*/
  /*Matching Images*/

    //let icons = {
    //1: 'egg',
    //2: 'broom',
    //3: 'owl',
    //4: 'hat',
    //5: 'map',
    //6: 'goblet'
  //}

//for (let item in icons) {
  //console.log (item)
  //let newKey = item;
  //console.log(newKey);
  //if (newKey === dice) {
    //console.log("match");
  //}
//}


  let image;
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
  } else {
    image = 'potter';
  }

  let diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = image + '.png';


/*Change players, Update Scores - Function */
nextPlayer();
});


/*Hold Button*/
document.querySelector('#hold').addEventListener('click', function() {
  //Add Current Score to Total Score
  //Update the UI
  if (activePlayer === "player1") {
    player1Total += player1Score;
    document.getElementById('player1-score').textContent = player1Total;
    activePlayer = "player2";
    player1Score = 0;
  } else if (activePlayer === "player2") {
    player2Total += player2Score;
    document.getElementById('player2-score').textContent = player2Total;
    activePlayer = "player1";
    player2Score = 0;
  }
  //Check if player won the game
  if (player1Total >= 25) {
    document.getElementById('player1-name').textContent = "Winner!";
    document.querySelector('.dice').src="potter.png";
    document.getElementById('roll').style.visibility = "hidden";
    document.getElementById('hold').style.visibility = "hidden";
  } else if (player2Total >= 25) {
    document.getElementById('player2-name').textContent = "Winner!";
    document.querySelector('.dice').src="potter.png";
    document.getElementById('roll').style.visibility = "hidden";
    document.getElementById('hold').style.visibility = "hidden";
  }
});

/*New Game*/
function gameInit() {
  player1Score = 0;
  player2Score = 0;
  player1Total = 0;
  player2Total = 0;
  activePlayer = "player1";

  document.getElementById('player1-score').textContent = "0";
  document.getElementById('player2-score').textContent = "0";
  document.getElementById('player1-total').textContent = "0";
  document.getElementById('player2-total').textContent = "0";

  document.getElementById('player1-name').textContent = "Player 1";
  document.getElementById('player2-name').textContent = "Player 2";

  document.querySelector('.dice').src="potter.png";

  document.getElementById('hold').style.visibility = "visible";
  document.getElementById('roll').style.visibility = "visible";
}


document.getElementById('new-game').addEventListener('click', gameInit);

/* Track Player and Score - Function*/
function nextPlayer() {
  if (activePlayer === "player1") {
    //Show Active PLayer
    document.querySelector('#player1-name').classList.add('active');
    document.querySelector('#player2-name').classList.remove('active');
    if (dice > 1) {
      player1Score += dice;
      document.getElementById('player1-total').textContent = player1Score;
    } else {
      //Change State Pattern
      activePlayer = "player2";
      document.getElementById('player1-total').textContent = "0";
      document.getElementById('player2-total').textContent = "0";
      //document.querySelector('.dice').style.display = "none";
    }

  } else if (activePlayer === "player2") {
    //Show Active Player
    document.querySelector('#player2-name').classList.add('active');
    document.querySelector('#player1-name').classList.remove('active');
    if (dice > 1) {
      player2Score += dice;
      document.getElementById('player2-total').textContent = player2Score;
    } else {
      //Change State Pattern
      activePlayer = "player1";
      document.getElementById('player2-total').textContent = "0";
      document.getElementById('player1-total').textContent = "0";
      //document.querySelector('.dice').style.display = "none";
    }
  }
};






