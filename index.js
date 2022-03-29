let display = document.querySelector("h1")

function handleClick(event){
    if (event.target.innerText >= "0" && event.target.innerText <= "9" )
        console.log("Number");
    else
        console.log("Letter")
}