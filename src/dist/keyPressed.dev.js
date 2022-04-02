"use strict";

function keyPressed(event) {
  var myEvent = {
    target: {
      innerText: event.code
    }
  };
  console.log("Key Pressed: " + event.code);
  if (myEvent.target.innerText.includes("Numpad")) myEvent.target.innerText = myEvent.target.innerText.slice(6, myEvent.target.innerText.length);
  if (myEvent.target.innerText.includes("Digit")) myEvent.target.innerText = myEvent.target.innerText.slice(5, myEvent.target.innerText.length);

  switch (myEvent.target.innerText) {
    case "Divide":
    case "Slash":
      myEvent.target.innerText = "/";
      operatorClicked(myEvent);
      return;

    case "Multiply":
      myEvent.target.innerText = "x";
      operatorClicked(myEvent);
      return;

    case "Subtract":
      myEvent.target.innerText = "-";
      operatorClicked(myEvent);
      return;

    case "Add":
      myEvent.target.innerText = "+";
      operatorClicked(myEvent);
      return;

    case "Equal":
    case "Enter":
      myEvent.target.innerText = "=";
      operatorClicked(myEvent);
      return;

    case "Period":
    case ".":
    case "Decimal":
      myEvent.target.innerText = ".";
      numberClicked(myEvent);
      return;

    case "Minus":
      myEvent.target.innerText = "±";
      displayOperationClicked(myEvent);
      return;

    case "Backspace":
      myEvent.target.innerText = "←";
      displayOperationClicked(myEvent);
      return;

    default:
      if (myEvent.target.innerText >= "0" && myEvent.target.innerText <= "9") numberClicked(myEvent);
  }

  console.log("innerText: " + myEvent.target.innerText);
}