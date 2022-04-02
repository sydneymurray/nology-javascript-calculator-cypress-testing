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