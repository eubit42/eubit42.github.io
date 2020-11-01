const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

var password = document.getElementById("new_psswd")
  , confirm_password = document.getElementById("confirm_psswd");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

function CheckPassword(inputtxt) 
{ 
  var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  if(inputtxt.value.match(decimal)) 
  { 
    return true;
  }
  else
  { 
    alert('Password must be atleast 8 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
    return false;
  }
} 


password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;