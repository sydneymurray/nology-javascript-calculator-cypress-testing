let operand = null
let previousOperation = null
let runningTotal = false
let display = document.querySelector("h1")

function displayOperationClicked(event){
    switch (event.target.innerText){
        case "C":
            display.innerText = "0";
            operand = null;
            previousOperation = null;
            runningTotal = false;
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
    if (display.innerText === "0" || runningTotal )
        display.innerText = event.target.innerText
    else
        display.innerText += event.target.innerText 
    runningTotal = false
    
    console.log("Operand: " + operand)
    console.log("Operation: " + previousOperation)
}

function operatorClicked(event){
    if (!operand){
        operand = display.innerText
        previousOperation = event.target.innerText
        display.innerText = "0"
        return
    }
    
    runningTotal = true
    switch (previousOperation){
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
        previousOperation = null;
        runningTotal = false
    } else{
        previousOperation = event.target.innerText
        operand = display.innerText
        //display.innerText = "0"
    }

    console.log("Operand: " + operand)
    console.log("Operation: " + previousOperation)
}


