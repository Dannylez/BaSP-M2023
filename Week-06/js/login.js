var inputEmail = document.getElementById("input-email");
var inputPass = document.getElementById("input-password");
var form = document.getElementById("login-form");
var inputs = document.querySelectorAll(".login-input");

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

function isValidEmail(email) {
  const emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return emailExpression.test(email);
}

function signIn(e) {
  e.preventDefault();
  if (isValidEmail(inputEmail.value) && isValidPassword(inputPass.value)) {
    console.log("YEEES");
  } else {
    if (!isValidEmail(inputEmail.value)) {
      createError("email");
    }
    if (!isValidPassword(inputPass.value)) {
      createError("password");
    }
    alert("Email or Password incorrect");
  }
}

function createError(input) {
  const alertError = document.createElement("p");
  alertError.className = "text-alert";
  if (input === "email") {
    inputEmail.classList = "border-red";
    alertError.innerText = "Not valid email";
    if (inputEmail.parentNode.children.length <= 3)
      inputs[0].appendChild(alertError);
  } else if (input === "password") {
    inputPass.classList = "border-red";
    alertError.innerText =
      "Password must include a mix of uppercase, lowercase numbers and be at least 8 characteres long.";
    if (inputPass.parentNode.children.length <= 3)
      inputs[1].appendChild(alertError);
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
