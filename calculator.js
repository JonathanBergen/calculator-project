let chosenOperator = "";
let numberBucket = "";
let solution1 = 0;
let second2 = "";
// gets DOM elements
let answerBoxText = document.getElementById('answerBoxText');
let deleteButton = document.getElementById('deleteButton');
let clearButton = document.getElementById('clear');
let divideButton = document.getElementById('divideButton');
let timesButton = document.getElementById('timesButton');
let minusButton = document.getElementById('minusButton');
let plusButton = document.getElementById('plusButton');
let equalsButton = document.getElementById('equalsButton');
let sevenButton = document.getElementById('sevenButtton');
let eightButton = document.getElementById('eightButton');
let nineButton = document.getElementById('nineButton');
let fourButton = document.getElementById('fourButton');
let fiveButton = document.getElementById('fiveButton');
let sixButton = document.getElementById('sixButton');
let oneButton = document.getElementById('oneButton');
let twoButton = document.getElementById('twoButton');
let threeButton = document.getElementById('threeButton');
let zeroButton = document.getElementById('zeroButton');
let periodButton = document.getElementById('periodButton');
// Calls the function when the button is clicked
clearButton.onclick = clear;
deleteButton.onclick = backspace;
divideButton.onclick = letsDivide;
timesButton.onclick = letsMultiply;
minusButton.onclick = letsSubtract;
plusButton.onclick = letsAdd;
equalsButton.onclick = operate;
// The number button functions
zeroButton.onclick = () => {
  numberBucket += "0";
  answerBoxText.innerHTML = (numberBucket);
}
oneButton.onclick = () => {
  numberBucket += "1";
  answerBoxText.innerHTML = (numberBucket);
}
twoButton.onclick = () => {
  numberBucket += "2";
  answerBoxText.innerHTML = (numberBucket);
}
threeButton.onclick = () => {
  numberBucket += "3";
  answerBoxText.innerHTML = (numberBucket);
}
fourButton.onclick = () => {
  numberBucket += "4";
  answerBoxText.innerHTML = (numberBucket);
}
fiveButton.onclick = () => {
  numberBucket += "5";
  answerBoxText.innerHTML = (numberBucket);
}
sixButton.onclick = () => {
  numberBucket += "6";
  answerBoxText.innerHTML = (numberBucket);
}
sevenButton.onclick = () => {
  numberBucket += "7";
  answerBoxText.innerHTML = (numberBucket);
}
eightButton.onclick = () => {
  numberBucket += "8";
  answerBoxText.innerHTML = (numberBucket);
}
nineButton.onclick = () => {
  numberBucket += "9";
  answerBoxText.innerHTML = (numberBucket);
}
periodButton.onclick = function addPeriod() {
  if (numberBucket.includes(".") == false) {
    numberBucket += ".";
    answerBoxText.innerHTML = numberBucket;
  }
}
// These highlight the current operator
function letsDivide() {
  if (solution1 == 0) {
    solution1 = Number(numberBucket);
    numberBucket = "";
  } else {
    operate();
    second2 = "";
  }
  chosenOperator = "dividor";
  setColor();
}
function letsMultiply() {
  if (solution1 == 0) {
    solution1 = Number(numberBucket);
    numberBucket = "";
  } else {
    operate();
    second2 = "";
  }
  chosenOperator = "multiplier";
  setColor();
}
function letsSubtract() {
  if (solution1 == 0) {
    solution1 = Number(numberBucket);
    numberBucket = "";
  } else {
    operate();
    second2 = "";
  }
  chosenOperator = "subtractor";
  setColor();
}
function letsAdd() {
  if (solution1 == 0) {
    solution1 = Number(numberBucket);
    numberBucket = "";
  } else {
    operate();
    second2 = "";
  }
    chosenOperator = "adder";
    setColor();
}
// The operating functions
function divide(x, y) {
  solution1 = (x / y);
  answerBoxText.innerHTML = solution1;
}
function multiply(x, y) {
  solution1 = (x * y);
  answerBoxText.innerHTML = solution1;
}
function subtract(x, y) {
  solution1 = (x - y);
  answerBoxText.innerHTML = solution1;
}
function add(x, y) {
  solution1 = (x + y);
  answerBoxText.innerHTML = solution1;
}
// The clear function
function clear() {
  numberBucket = "";
  solution1 = 0;
  second2 = "";
  chosenOperator = "";
  answerBoxText.innerHTML = solution1;
  setColor();
}
// The Delete function
function backspace() {
  numberBucket = numberBucket.slice(0, -1);
  answerBoxText.innerHTML = numberBucket;
}
// The = function
function operate() {
  second2 = Number(numberBucket);
  numberBucket = "";
  switch (chosenOperator) {
    case "dividor":
      divide(solution1, second2);
      break;
    case "multiplier":
      multiply(solution1, second2);
      break;
    case "subtractor":
      subtract(solution1, second2);
      chosenOperator = "";
      break;
    case "adder":
      add(solution1, second2);
      chosenOperator = "";
      break;
    default:
      answerBoxText.innerHTML = solution1;
  }
  chosenOperator = "";
  setColor();
}
// Highlights the "chosenOperator"
function setColor() {
  if (chosenOperator == "dividor") {
    divideButton.style.backgroundColor = "#48acf0";
  } else {
    divideButton.style.backgroundColor = "#e48d5b";
  }
  if (chosenOperator == "multiplier") {
    timesButton.style.backgroundColor = "#48acf0";
  } else {
    timesButton.style.backgroundColor = "#e48d5b";
  }
  if (chosenOperator == "subtractor") {
    minusButton.style.backgroundColor = "#48acf0";
  } else {
    minusButton.style.backgroundColor = "#e48d5b";
  }
  if (chosenOperator == "adder") {
    plusButton.style.backgroundColor = "#48acf0";
  } else {
    plusButton.style.backgroundColor = "#e48d5b";
  }
}
