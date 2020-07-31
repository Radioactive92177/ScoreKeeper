// Selecting Buttons
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var reset = document.querySelector("#reset");

// Selecting player scores
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector("#winningScoreDisplay");

// Selecting Input field
var inputField = document.querySelector("input");

// Score Variables
var p1Score = 0;
var p2Score = 0;

// Game Variables
var gameOver = false;
var winningScore = 0;

// Configuring Input Field
inputField.addEventListener("change", function () {
  winningScore = Number(this.value);
  winningScoreDisplay.textContent = winningScore;
  resetScore();
  
});

p1Button.addEventListener("click", function () {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    displayScore(p1Display, p1Score);
  }
});

p2Button.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    displayScore(p2Display, p2Score);
  }
});

reset.addEventListener("click", function () {
  resetScore();
});

// Displays player score in the HTML
function displayScore(player, score) {
  player.textContent = score;
}

// Reset the score for cheaters
function resetScore() {
    p1Score = 0;
    p2Score = 0;

    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");

    displayScore(p1Display, p1Score);
    displayScore(p2Display, p2Score);

    gameOver = false;
}