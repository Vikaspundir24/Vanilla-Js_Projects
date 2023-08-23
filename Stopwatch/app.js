const start = document.getElementById("start");
start.innerText = "Start Timer";
var hr = 0;
var min = 0;
var sec = 0;
document.getElementById("sec").innerText = sec;
document.getElementById("min").innerText = min;
document.getElementById("hr").innerText = hr;

var startTimer;

start.addEventListener("click", () => {
  if (start.innerText == "Start Timer") 
  {
    Timer()
  } else if (start.innerText == "Stop Timer") {
    myStopFunction();
  } else if (start.innerText == "Reset Timer") {
    resetTimer() 
  }
});

function Timer() {
    startTimer = setInterval(myTimer, 1000);
    function myTimer() {
      sec = sec + 1;
      if (sec > 60) {
        sec = 0;
        min = min + 1;
      } else if (min > 60) {
        min = 0;
        hr = hr + 1;
      }
      console.log(hr + "," + min + "," + sec);
      document.getElementById("sec").innerText = sec;
      document.getElementById("min").innerText = min;
      document.getElementById("hr").innerText = hr;
    }
    start.innerText = "Stop Timer";
}
function myStopFunction() {
    clearInterval(startTimer);
    start.innerText = "Reset Timer";
  }
function resetTimer() {
    start.innerText = "Start Timer";
    hr = 0;
    min = 0;
    sec = 0;
   document.getElementById("sec").innerText = sec;
   document.getElementById("min").innerText = min;
   document.getElementById("hr").innerText = hr;
  }
  