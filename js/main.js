/* Global Scope*/

let activePlayer, dice;

/*Two player game*/
let player1 = {
  name: "player1",
  currentScore: 0,
  totalScore: 0,
  totalElementID: "player1-total",
  nameElementID: "#player1-name",
  scoreElementID: "#player1-score"
};

let player2 = {
  name: "player2",
  currentScore: 0,
  totalScore: 0,
  totalElementID: "player2-total",
  nameElementID: "#player2-name",
  scoreElementID: "#player2-score"
};

/*Game Init - NEW GAME*/
/*FUNCTION*/
let gameInit = () => {

  activePlayer = player1;

  //Sets all of the values to 0.
  document.getElementById('player1-score').textContent = "0";
  document.getElementById('player2-score').textContent = "0";
  document.getElementById('player1-total').textContent = "0";
  document.getElementById('player2-total').textContent = "0";

  //Sets the name of the player.
  document.getElementById('player1-name').textContent = "Player 1";
  document.getElementById('player2-name').textContent = "Player 2";

  //Sets the initial image to the Harry Potter icon.
  document.querySelector('.dice').src="potter.png";

  //Makes the roll and hold buttons visible - they turn hidden when the game ends.
  document.getElementById('hold').style.visibility = "visible";
  document.getElementById('roll').style.visibility = "visible";
};

/* Next Play & Track Score function*/
let nextPlayer = () => {

  if (activePlayer === player1) {
    updateScoreAndSwitchPlayer(player2, player1);
  } else if (activePlayer === player2) {
    updateScoreAndSwitchPlayer(player1, player2);

  }
};

/*Switch Players and update the score*/
let updateScoreAndSwitchPlayer = (newActivePlayer, inactivePlayer) => {

      document.querySelector(inactivePlayer.nameElementID).classList.add('active');
      document.querySelector(newActivePlayer.nameElementID).classList.remove('active');
      if (dice > 1) {
        inactivePlayer.currentScore += dice;
        document.getElementById(inactivePlayer.totalElementID).textContent = inactivePlayer.currentScore;
      } else {
      activePlayer = newActivePlayer;
      document.getElementById(inactivePlayer.totalElementID).textContent = "0";
      document.getElementById(newActivePlayer.totalElementID).textContent = "0";
    }
};

/*Total Score Update Function*/
let findTotalScore = (currentPlayer) => {
    currentPlayer.totalScore += currentPlayer.currentScore;
    document.querySelector(currentPlayer.scoreElementID).textContent = currentPlayer.totalScore;
    document.getElementById(currentPlayer.totalElementID).textContent = "0";
    currentPlayer.currentScore = 0;
};

/*Update Winner Function*/
let updateWinner = (winner) => {
    document.querySelector(winner.nameElementID).textContent = "Winner!";
    document.querySelector('.dice').src="potter.png";
    document.getElementById('roll').style.visibility = "hidden";
    document.getElementById('hold').style.visibility = "hidden";
};



/*START GAME*/

gameInit();

/*ROll DICE*/
document.querySelector('#roll').addEventListener('click', () => {

  /*Randomize*/
  dice = Math.floor(Math.random() * 6) + 1;

  /*Display the Result*/
  /*Matching Images*/
  const icon = ["egg", "broom", "owl", "hat", "map", "goblet"];
  let image = icon[dice -1];

  /*Update the image basd on the dice*/
  let diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = image + '.png';

/*Change players, Update Scores - Function */
  nextPlayer();
});


/*Hold Button*/
document.querySelector('#hold').addEventListener('click', () => {
  //Add Current Score to Total Score
  if (activePlayer === player1) {
    findTotalScore(player1);
    activePlayer = player2
    }
  else if (activePlayer === player2) {
    findTotalScore(player2);
    activePlayer = player1;
  };

  //Check if player won the game
  if (player1.totalScore >= 25) {
      updateWinner(player1);
  } else if (player2.totalScore >= 25) {
      updateWinner(player2);
  }
});

document.getElementById('new-game').addEventListener('click', gameInit);
