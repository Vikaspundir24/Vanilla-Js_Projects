const start = document.getElementById("start");
start.innerText = "Start Countdown";
let resetVal = 0;
var startCount;

start.addEventListener("click", () => {
  let inputVal = document.getElementById("count").value;
  if (inputVal && inputVal != 0 && start.innerText == "Start Countdown") {
    start.innerText = "Stop Countdown"
    startCount = setInterval(myCounter, 1000);
    function myCounter() {
      if (inputVal < 1) {
        start.innerText = "Start Countdown"
        document.getElementById("count").value = "";
        clearInterval(startCount)
        return alert("Countdow Over");
      }
      inputVal = inputVal - 1;
      console.log(inputVal);
      document.getElementById("count").value = inputVal;

    }
  }
  else if(start.innerText == "Stop Countdown"){
    start.innerText = "Reset Countdown"
    clearInterval(startCount)
  }
  else if(start.innerText == "Reset Countdown"){
    start.innerText = "Start Countdown"
    document.getElementById("count").value = "";
  }
  else{
    alert("Enter countdown")
  }
});
