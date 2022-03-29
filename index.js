let operand = null
let operation = null
let display = document.querySelector("h1")

function computeOperation(operation){
    switch (expr) {
        case "x":
            break;
        case "":
            break;    
        default:
          console.log(operation);
    }

    console.log(operation)
}

function handleClick(event){
    if (event.target.innerText >= "0" && event.target.innerText <= "9" ){
        if (display.innerText === "0")
            display.innerText = event.target.innerText
        else
            display.innerText += event.target.innerText 
    }
    else
        computeOperation(event.target.innerText)
}