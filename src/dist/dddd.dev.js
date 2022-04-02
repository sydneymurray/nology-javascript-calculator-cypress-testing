"use strict";

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