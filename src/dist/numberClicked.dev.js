"use strict";

function numberClicked(event) {
  if (display.innerText === "0" && event.target.innerText === ".") {
    display.innerText = "0.";
    return;
  }

  if (display.innerText.includes(".") && event.target.innerText === ".") return;
  if (display.innerText === "0" || displayRunningTotal) display.innerText = event.target.innerText;else display.innerText += event.target.innerText;
  displayRunningTotal = false;
  console.log("Operand: " + operand);
  console.log("Operation: " + previousOperator);
}