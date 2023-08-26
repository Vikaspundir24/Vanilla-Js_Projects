const creditOption = document.getElementById("credit-option");
const debitOption = document.getElementById("debit-option");
const choose = document.getElementById("choose");
const form = document.querySelector("form");
const lists = document.getElementById("lists");
const clear = document.getElementById("clear-data");
const showBal = document.getElementById("remaining-bal");
const showExpenditure = document.getElementById("total-expenditure");
let remainingBal = 0;
let totalExpenditure = 0;

choose.addEventListener("change", () => {
  if (choose.value === debitOption.value) {
    document.getElementById("from-on").innerText = "On:";
  } else if (choose.value === creditOption.value) {
    document.getElementById("from-on").innerText = "From:";
  }
});

let inputAmount = document.getElementById("input-amount");
let inputData = document.getElementById("input-data");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputData.value == "" || inputAmount.value == "") {
    alert("Fill all details");
  } else if (inputAmount.value == 0) {
    alert("Enter Amount");
    inputAmount.value = "";
  } else {
    addExpense(inputAmount.value,inputData.value);
    inputAmount.value = "";
    inputData.value = "";
  }
});

function addExpense(amount,data) {
  let li = document.createElement("li");
  li.innerHTML = data;
  lists.appendChild(li);

  if (choose.value === debitOption.value) {
    let span = document.createElement("span");
    span.innerText = `-${amount}`;
    li.appendChild(span);
    li.style.border = "2px solid red";
    span.style.color = "red";
    remainingBal = parseInt(remainingBal) - parseInt(amount);
    totalExpenditure = parseInt(totalExpenditure) + parseInt(amount);
    console.log("remaining" + remainingBal);
    console.log("total exp" + totalExpenditure);
  } 
  else {
    let span = document.createElement("span");
    span.innerText = `+${amount}`;
    li.appendChild(span);
    li.style.border = "2px solid green";
    span.style.color = "green";
    remainingBal = parseInt(remainingBal) + parseInt(amount);
    console.log("remaining" + remainingBal);
    console.log("total exp" + totalExpenditure);
  }
  saveData();
}

function saveData() {
  localStorage.setItem("Expenses", lists.innerHTML);
  localStorage.setItem("Remaining Balance", remainingBal);
  localStorage.setItem("Total Expenditure", totalExpenditure);
  showData();
}
function showData() {
  lists.innerHTML = localStorage.getItem("Expenses");
  showBal.innerText = localStorage.getItem("Remaining Balance");
  showExpenditure.innerText = localStorage.getItem("Total Expenditure");
}

clear.addEventListener("click", () => {
  localStorage.removeItem("Expenses");
  localStorage.removeItem("Remaining Balance");
  localStorage.removeItem("Total Expenditure");
  showData();
});


showData();
