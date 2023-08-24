
const btnCount = document.getElementById("button");

btnCount.addEventListener("click", () => {
  countingWords();
});

function countingWords() {
  let inputStringInitial = document.getElementById("input").value;
  let inputString = inputStringInitial.replace(/  +/g, ' ').trim();
  var numWords = 0;
  if(inputString === ""){
    alert("Enter Something")
  }
  else{
    for (let i = 0; i < inputString.length; i++) {
      var currentCharacter = inputString[i];
      if (currentCharacter == " ") {
        numWords += 1;
      }
    }
    numWords = numWords+1;
  document.getElementById('count').innerText = numWords;
  }
  
  
} 