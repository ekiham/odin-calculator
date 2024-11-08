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

var operatorValue = null;
var calcFirst = null;
var calcSecond = null;
var numbersList = [];
var newCalc = true;
var displayNumber = "0";
var calcNumOriginal = 0;

function createNumberStrings(buttonId) {
  if (newCalc) {
    displayNumber = buttonId.toString();
    newCalc = false;
  } else {
    displayNumber += buttonId.toString();
    newCalc = false;
  }
  calcNumOriginal = Number(displayNumber);
  calcScreen.textContent = displayNumber;

  return {
    displayNumber,
    calcNumOriginal,
  };
}

function clearAllData() {
  operatorValue = null;
  calcFirst = null;
  newCalc = true;
  numbersList = [];
  displayNumber = "0";
  calcNumOriginal = 0;
  calcScreen.textContent = displayNumber;
}

function operate() {
  if (calcFirst === null) {
    calcFirst = calcNumOriginal;
  } else {
    calcSecond = calcNumOriginal;
  }
  calcNumOriginal = 0;
  newCalc = true;
  numbersList = [calcFirst, calcSecond];
  return numbersList;
}

function operateAdd() {
  operatorValue = "+";
  newCalc = true;
}

function operateMinus() {
  operatorValue = "-";
  newCalc = true;
}

function operateMultiply() {
  operatorValue = "*";
  newCalc = true;
}

function operateDivision() {
  operatorValue = "/";
  newCalc = true;
}

function calculate() {
  var result = 0;
  if (calcFirst !== null && calcSecond !== null) {
    if (operatorValue === "+") {
      result = calcFirst + calcSecond;
    } else if (operatorValue === "-") {
      result = calcFirst - calcSecond;
    } else if (operatorValue === "*") {
      result = calcFirst * calcSecond;
    } else if (operatorValue === "/") {
      result = calcFirst / calcSecond;
    }
    calcScreen.textContent = result.toFixed(6);

    // Reset for next calculation
    calcFirst = result;
    calcSecond = null;
    calcNumOriginal = result;
  }
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
  divide.addEventListener("click", function () {
    if (calcFirst !== null && !newCalc) {
      operate();
      calculate();
    } else {
      operate();
    }
    operateDivision();
  });

  var multiply = document.createElement("button");
  multiply.className = "operator";
  multiply.textContent = "*";
  rightSide.appendChild(multiply);
  multiply.addEventListener("click", function () {
    if (calcFirst !== null && !newCalc) {
      operate();
      calculate();
    } else {
      operate();
    }
    operateMultiply();
  });

  var subtract = document.createElement("button");
  subtract.className = "operator";
  subtract.textContent = "-";
  rightSide.appendChild(subtract);
  subtract.addEventListener("click", function () {
    if (calcFirst !== null && !newCalc) {
      operate();
      calculate();
    } else {
      operate();
    }
    operateMinus();
  });

  var add = document.createElement("button");
  add.className = "operator";
  add.textContent = "+";
  rightSide.appendChild(add);
  add.addEventListener("click", function () {
    if (calcFirst !== null && !newCalc) {
      operate();
      calculate();
    } else {
      operate();
    }
    operateAdd();
  });

  var equality = document.createElement("button");
  equality.className = "operator";
  equality.style.backgroundColor = "#d1b48c";
  equality.textContent = "=";
  rightSide.appendChild(equality);
  equality.addEventListener("click", function () {
    if (calcFirst !== null && operatorValue !== null) {
      operate();
      calculate();
    }
  });
}

createOperators();
