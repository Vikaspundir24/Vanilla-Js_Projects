let availableKeywords = [
  "HTML",
  "CSS",
  "Web Development",
  "Front end development",
  "Backend",
  "Reactjs",
  "Hindi Songs",
  "Punjabi Songs",
  "Youtube",
  "Github",
  "how to make a website using html css js",
  "how to record a song",
  "android development",
  "Uttarakhand dishes",
  "How to make maggie in 2 minutes",
  "Bangalore weather today",
  "Uttarakhand top treks",
  "How to work in VS CODE",
];

const resultBox = document.querySelector(".lists");
const inputBox = document.getElementById("input");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableKeywords.filter((keyword) => {
       return keyword.toLowerCase().includes(input.toLowerCase());
    });
    displayResult(result)
  }
  else if(!result.length){
    resultBox.innerHTML =  "";
  }
 
  
};


function displayResult(result)
{
    console.log(result)
    const content = result.map((list) => {
        return "<li onClick = selectInput(this)>" + list + "</li>";
    });

    resultBox.innerHTML =  content.join("")
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = ""
}