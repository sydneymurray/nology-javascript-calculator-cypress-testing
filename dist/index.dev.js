"use strict";

var operand = null;
var previousOperator = null;
var displayRunningTotal = false;
var display = document.querySelector("h1");
var body = document.getElementById('body');
document.addEventListener('keypress', keyPressed);

function displayOperationClicked(event) {
  switch (event.target.innerText) {
    case "C":
      display.innerText = "0";
      operand = null;
      previousOperator = null;
      displayRunningTotal = false;
      return;

    case "←":
      if (display.innerText.length < 2) return;
      display.innerText = display.innerText.slice(0, length - 1);
      return;

    case "±":
      display.innerText = 0 - Number(display.innerText);
      return;

    case "%":
      display.innerText = Number(display.innerText) / 100;
      break;

    default:
  }
}

function numberClicked(event) {
  if (display.innerText === "0" && event.target.innerText === ".") {
    display.innerText = "0.";
    return;
  }

  if (display.innerText === "0" || displayRunningTotal) display.innerText = event.target.innerText;else display.innerText += event.target.innerText;
  displayRunningTotal = false;
  console.log("Operand: " + operand);
  console.log("Operation: " + previousOperator);
}

function operatorClicked(event) {
  if (!operand) {
    operand = display.innerText;
    previousOperator = event.target.innerText;
    display.innerText = "0";
    return;
  }

  displayRunningTotal = true;

  switch (previousOperator) {
    case "x":
      display.innerText = Number(operand) * Number(display.innerText);
      break;

    case "/":
      display.innerText = Number(operand) / Number(display.innerText);
      break;

    case "+":
      display.innerText = Number(operand) + Number(display.innerText);
      break;

    case "-":
      display.innerText = Number(operand) - Number(display.innerText);
      break;

    default:
  }

  if (event.target.innerText === "=") {
    operand = null;
    previousOperator = null;
    displayRunningTotal = false;
  } else {
    previousOperator = event.target.innerText;
    operand = display.innerText; //display.innerText = "0"
  }

  console.log("Operand: " + operand);
  console.log("Operation: " + previousOperator);
}

function keyPressed(event) {
  console.log("Key Pressed: " + event.code);
}