var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var dicePicked1 = "images/dice" + randomNumber1 + ".png";
var dicePicked2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").src = dicePicked1;
document.querySelector(".img2").src = dicePicked2;

if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerText = "Draw"
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "🚩Player 1 Wins!"
} else {
  document.querySelector("h1").innerText = "Player 2 Wins!🚩"
}
