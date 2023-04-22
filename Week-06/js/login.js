var inputEmail = document.getElementById("input-email");
var inputPass = document.getElementById("input-password");
var form = document.getElementById("login-form");
var inputs = document.querySelectorAll(".login-input");
console.log(inputs);
/* function changeColor() {
  if (self.inputEmail.style.backgroundColor == "white") {
    inputEmail.style.backgroundColor = "blue";
  } else {
    inputEmail.style.backgroundColor = "white";
  }
} */

/* inputEmail.addEventListener("blur", changeColor);
inputEmail.addEventListener("focus", changeColor); */

function isValidPassword(password) {
  if (password.length < 8) {
    return false;
  }
  var tieneMayuscula = false;
  var tieneMinuscula = false;
  var tieneNumero = false;
  for (i = 0; i < password.length; i++) {
    if (password[i] >= "A" && password[i] <= "Z") {
      tieneMayuscula = true;
    } else if (password[i] >= "a" && password[i] <= "z") {
      tieneMinuscula = true;
    } else if (password[i] >= 0 && password[i] <= 9) {
      tieneNumero = true;
    }
  }
  return tieneMayuscula && tieneMinuscula && tieneNumero;
}

function signIn(e) {
  e.preventDefault();
  const emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailExpression.test(inputEmail.value);
  if (isValidEmail && isValidPassword(inputPass.value)) {
    console.log("YEEES");
  } else {
    const emailError = document.createElement("p");
    emailError.innerText = "Not valid email";
    emailError.className = "text-alert";
    inputs[0].appendChild(emailError);
    const passError = document.createElement("p");
    passError.innerText =
      "Password must include a mix of uppercase, lowercase numbers and be at least 8 characteres long.";
    passError.className = "text-alert";
    inputs[1].appendChild(passError);
    inputEmail.classList = "border-red";
    inputPass.classList = "border-red";
    alert("Email or Password incorrect");
  }
}

function cleanInput(e) {
  e.target.classList.remove("border-red");
  if (e.target.parentNode.children.length > 3) {
    var text = e.target.parentNode.children[3];
    e.target.parentNode.removeChild(text);
  }
}

inputEmail.addEventListener("focus", cleanInput);
inputPass.addEventListener("focus", cleanInput);
form.addEventListener("submit", signIn);
