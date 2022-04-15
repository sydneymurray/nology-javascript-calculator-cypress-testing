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
    if (display.innerText.length > 19) 
        display.innerText = display.innerText.slice(0, 19)
    console.log("Operand: " + operand)
    console.log("Operation: " + previousOperator)
}