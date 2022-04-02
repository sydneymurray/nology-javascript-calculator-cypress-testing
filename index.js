let operand = null
let previousOperator = null
let displayRunningTotal = false
const display = document.querySelector("h1")
const body = document.getElementById('body')
document.addEventListener('keydown', keyPressed)

function displayOperationClicked(event){
    switch (event.target.innerText){
        case "C":
            display.innerText = "0";
            operand = null;
            previousOperator = null;
            displayRunningTotal = false;
            return;
        case "←":
            if (display.innerText.length < 2) return;
            display.innerText = display.innerText.slice(0, length-1);
            return;
        case "±":
            display.innerText = 0 - Number(display.innerText);
            return; 
        case "%":
            display.innerText = Number(display.innerText) / 100;
            break;       
        default:
            return;
    }
}

function numberClicked(event){
    if (display.innerText === "0" && event.target.innerText === ".") {
        display.innerText = "0."
        return
    }
    if (display.innerText.includes(".") && event.target.innerText === ".") 
        return

    if (display.innerText === "0" || displayRunningTotal )
        display.innerText = event.target.innerText
    else
        display.innerText += event.target.innerText 
    
    displayRunningTotal = false
    console.log("Operand: " + operand)
    console.log("Operation: " + previousOperator)
}

function operatorClicked(event){
    if (!operand){
        operand = display.innerText
        previousOperator = event.target.innerText
        display.innerText = "0"
        return
    }
    
    displayRunningTotal = true
    switch (previousOperator){
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

    if (event.target.innerText === "="){
        operand = null;
        previousOperator = null;
        displayRunningTotal = false
    } else{
        previousOperator = event.target.innerText
        operand = display.innerText
        //display.innerText = "0"
    }

    console.log("Operand: " + operand)
    console.log("Operation: " + previousOperator)
}

function keyPressed(event){
    let myEvent = {target: {innerText : event.code}}
    console.log("Key Pressed: " + event.code)
    
    if (myEvent.target.innerText.includes("Numpad"))
        myEvent.target.innerText = myEvent.target.innerText.slice(6, myEvent.target.innerText.length)
    
    if (myEvent.target.innerText.includes("Digit"))
        myEvent.target.innerText = myEvent.target.innerText.slice(5, myEvent.target.innerText.length)
    
    switch(myEvent.target.innerText){
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
            if(myEvent.target.innerText >= "0" && myEvent.target.innerText <="9") 
                numberClicked(myEvent);
    }
    console.log("innerText: " + myEvent.target.innerText)    
}


