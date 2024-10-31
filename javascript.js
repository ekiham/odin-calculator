var calcScreen = document.createElement("div");
var leftButtons = document.createElement("div");
var rightButtons = document.createElement("div");

var digitButtons = document.createElement("div");
var operatorButtons = document.createElement("div");

const calcFrame = document.querySelector(".calc-frame");

calcScreen.textContent = "Screen here";
calcScreen.classList.add("calc-screen");
calcFrame.appendChild(calcScreen);

leftButtons.textContent = "Left buttons here";
leftButtons.classList.add("lefties");
calcFrame.appendChild(leftButtons);

rightButtons.textContent = "Right buttons here";
rightButtons.classList.add("righties");
calcFrame.appendChild(rightButtons);

function createDigits() {
  for (let i = 0; i < 10; i++) {
    var leftSide = document.querySelector(".lefties");
    var digit = document.createElement("button");
    digit.className = "num-button";
    digit.textContent = `${i}`;
    leftSide.appendChild(digit);
  }
}

createDigits();

function createOperators() {
  var rightSide = document.querySelector(".righties");

  var divide = document.createElement("button");
  divide.className = "operator";
  divide.textContent = "/";
  rightSide.appendChild(divide);

  var multiply = document.createElement("button");
  multiply.className = "operator";
  multiply.textContent = "*";
  rightSide.appendChild(multiply);

  var subtract = document.createElement("button");
  subtract.className = "operator";
  subtract.textContent = "-";
  rightSide.appendChild(subtract);

  var add = document.createElement("button");
  add.className = "operator";
  add.textContent = "+";
  rightSide.appendChild(add);

  var equality = document.createElement("button");
  equality.className = "operator";
  equality.textContent = "=";
  rightSide.appendChild(equality);
}

createOperators();
