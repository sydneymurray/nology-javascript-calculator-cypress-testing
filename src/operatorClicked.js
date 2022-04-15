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
            display.innerText = (Number(operand) * Number(display.innerText)).toFixed(12);
            break;
        case "/":
            display.innerText = (Number(operand) / Number(display.innerText)).toFixed(12);
            break;
        case "+":
            display.innerText = (Number(operand) + Number(display.innerText)).toFixed(12);
            break;
        case "-":
            display.innerText = (Number(operand) - Number(display.innerText)).toFixed(12);
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

    if (display.innerText.includes("e")){
        console.log(display.innerText)
        let floatingPoint = display.innerText.split("e")
        display.innerText = floatingPoint[0].slice(0, 15) + "e" + floatingPoint[1]
    }

    if (display.innerText.length > 19) 
    display.innerText = display.innerText.slice(0, 19)

    console.log("Operand: " + operand)
    console.log("Operation: " + previousOperator)
}