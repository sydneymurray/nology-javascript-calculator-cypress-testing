let operand = null
let previousOperation = null
let display = document.querySelector("h1")

function operatorClicked(event){
    if (!operand){
        operand = display.innerText
        previousOperation = event.target.innerText
        display.innerText = "0"
        return
    }   

    switch (operand){
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
    } else{
        previousOperation = event.target.innerText

    }
    console.log("Operand: "+operand, "Operation: "+previousOperation)



}

function numberClicked(event){
    if (display.innerText === "0" || previousOperation)
        display.innerText = event.target.innerText
    else
        display.innerText += event.target.innerText 
}
function displayOperationClicked(event){
    switch (event.target.innerText){
        case "C":
            display.innerText = "0";
            operand = null;
            previousOperation = null;
            return;
        case "←":
            display.innerText = display.innerText.slice(0, length-1);
            return;
        default:
    }

}