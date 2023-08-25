const check = document.getElementById("check")


check.addEventListener("click", () => {
    let inputVal = document.getElementById("palindrome").value;
    let reverseVal = inputVal.split('').reverse().join('');
    if(inputVal == reverseVal){
        alert("Palindrome Value")
        document.getElementById("palindrome").value = ""
    }
    else{
        alert("Not a Palindrome")
        document.getElementById("palindrome").value = ""
    }

})