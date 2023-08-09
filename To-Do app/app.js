const inputBox = document.querySelector(".add input")
const tasks = document.querySelector(".tasks")

function addTask(){
    if(inputBox.value === ""){
        alert("add a valid task")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        tasks.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML  = "\u00d7"
        li.appendChild(span)
    }

    inputBox.value = "";
    saveData();
}

tasks.addEventListener("click" ,  (e) => {
   if(e.target.tagName == "LI" ){
    e.target.classList.toggle("checked");
    saveData();
   }

   else if(e.target.tagName == "SPAN")
   {
    e.target.parentElement.remove();
    saveData();
   }
}, false)

function saveData() {
    localStorage.setItem("data" , tasks.innerHTML);
}

function  showTask() {
    tasks.innerHTML = localStorage.getItem("data")
}

showTask()