const signUp = document.getElementById("signup");
const passInput = document.getElementById("password");
const confirmPassInput = document.getElementById("confirmPassword");
const nameInput = document.getElementById("username")
const emailInput = document.getElementById("email")


let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;

signUp.addEventListener("click", (e) => {

  e.preventDefault();
  let passwordCorrect = (passInput.value === confirmPassInput.value);
  let passwordRegEx = regex.test(passInput.value);
  if(nameInput.value == "" && emailInput.value == "" &&  passInput.value == "" && confirmPassInput.value == ""){
    alert("Enter details")
  }
  else if(!passwordRegEx) {
    alert(
      "Password should containe 1 Uppercase, 1 Lowercase, 1 Numeric and 1 special character"
    );
    passInput.value = "";
    confirmPassInput.value = "";
  }
  else if(!passwordCorrect){
    alert(
        "Password not same"
      );
      passInput.value = "";
      confirmPassInput.value = "";
  }
  else if(nameInput.value == ""){
    alert("Enter A valid Name")
  }
  else if(!emailInput.value.includes("@")){
    alert("Enter A valid Email")
  }
});
