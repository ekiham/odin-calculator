var calcScreen = document.createElement("div");
var leftButtons = document.createElement("div");
var rightButtons = document.createElement("div");

var digitButtons = document.createElement("div");
var operatorButtons = document.createElement("div");

const calcFrame = document.querySelector(".calc-frame");
var lowerButtons = document.createElement("div");
lowerButtons.classList.add("button-area");

calcScreen.textContent = "0";
calcScreen.classList.add("calc-screen");
calcFrame.appendChild(calcScreen);
calcFrame.appendChild(lowerButtons);

leftButtons.classList.add("lefties");
lowerButtons.appendChild(leftButtons);

rightButtons.classList.add("righties");
lowerButtons.appendChild(rightButtons);

var displayNumber = "0";
var calcNumOriginal = 0;

function createNumberStrings(buttonId) {
  if (displayNumber === "0") {
    displayNumber = buttonId.toString();
  } else {
    displayNumber += buttonId.toString();
  }
  calcNumOriginal = Number(displayNumber);
  calcScreen.textContent = displayNumber;

  return {
    displayNumber,
    calcNumOriginal,
  };
}

function clearAllData() {
  displayNumber = "0";
  calcNumOriginal = 0;
  calcScreen.textContent = displayNumber;
}

function createCalculatorButtons() {
  const lefties = document.querySelector(".lefties");
  const buttonValues = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

  const clearAll = document.createElement("button");
  clearAll.textContent = "A/C";
  clearAll.className = "num-button";
  clearAll.style.backgroundColor = "#d1b48c";
  clearAll.addEventListener("click", () => clearAllData());
  lefties.appendChild(clearAll);

  const plusMinus = document.createElement("button");
  plusMinus.textContent = "+/-";
  plusMinus.className = "num-button";
  plusMinus.style.backgroundColor = "#d1b48c";
  lefties.appendChild(plusMinus);

  const percentage = document.createElement("button");
  percentage.textContent = "%";
  percentage.className = "num-button";
  percentage.style.backgroundColor = "#d1b48c";
  lefties.appendChild(percentage);

  buttonValues.forEach((value, index) => {
    const createButton = document.createElement("button");
    createButton.className = "num-button";
    createButton.textContent = value;
    createButton.setAttribute("id", value);
    createButton.addEventListener("click", () => createNumberStrings(value));

    if (value === 0) {
      createButton.style.width = "calc(97% + 4px)";
    }

    lefties.appendChild(createButton);
  });
}

createCalculatorButtons();

/* function createDigits() {
  for (let i = 0; i < 10; i++) {
    var leftSide = document.querySelector(".lefties");
    var digit = document.createElement("button");
    digit.className = "num-button";
    digit.textContent = `${i}`;
    leftSide.appendChild(digit);
  }
}

createDigits(); */

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
  equality.style.backgroundColor = "#d1b48c";
  equality.textContent = "=";
  rightSide.appendChild(equality);
}

createOperators();
