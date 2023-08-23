let screen = document.getElementById("screeninput")
let buttons = document.querySelectorAll("button")
let screenVal = "";

buttons.forEach((button) => {
    button.addEventListener("click", (e)  => {
        if(e.target.innerHTML == "=")
        {
           screenVal = eval(screenVal) 
           screen.value = screenVal;
        }
        else if(e.target.innerHTML == "C"){
             screenVal = "";    
             screen.value = screenVal;
        }
        else{
            screenVal = screenVal + e.target.innerHTML
            screen.value = screenVal;
        }
        console.log(screenVal)
      
    })
})



