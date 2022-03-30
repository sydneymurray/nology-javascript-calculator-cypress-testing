let operand = null
let previousOperator = null
let displayRunningTotal = false
let display = document.querySelector("h1")

function displayOperationClicked(event){
    switch (event.target.innerText){
        case "C":
            display.innerText = "0";
            operand = null;
            previousOperator = null;
            displayRunningTotal = false;
            return;
        case "←":
            display.innerText = display.innerText.slice(0, length-1);
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

function numberClicked(event){
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


