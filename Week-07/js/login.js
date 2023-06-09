var inputEmail = document.getElementById("input-email");
var inputPass = document.getElementById("input-password");
var form = document.getElementById("login-form");
var inputs = document.querySelectorAll(".login-input");
var user = localStorage.getItem("user");
var userData = JSON.parse(user);

if (user) {
  inputEmail.value = userData.email;
  inputPass.value = userData.password;
}

function itHasNumbers(string) {
  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    if (code >= 48 && code <= 57) {
      return true;
    }
  }
  return false;
}

function itHasUpperCase(string) {
  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    if ((code >= 65 && code <= 90) || code === 165) {
      return true;
    }
  }
  return false;
}

function itHasLowerCase(string) {
  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    if ((code >= 97 && code <= 122) || code === 165) {
      return true;
    }
  }
  return false;
}

function isValidPassword(password) {
  return (
    password.length >= 8 &&
    itHasLowerCase(password) &&
    itHasUpperCase(password) &&
    itHasNumbers(password)
  );
}

function isValidEmail(email) {
  const emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return emailExpression.test(email);
}

function validateEmail(e) {
  if (!isValidEmail(e.target.value)) {
    const alertError = document.createElement("p");
    alertError.className = "text-alert";
    inputEmail.classList = "border-red";
    alertError.innerText = "Not valid email";
    if (inputEmail.parentNode.children.length <= 3)
      inputs[0].appendChild(alertError);
  }
}

function validatePass(e) {
  if (!isValidPassword(e.target.value)) {
    const alertError = document.createElement("p");
    alertError.className = "text-alert";
    inputPass.classList = "border-red";
    alertError.innerText =
      "Password must include a mix of uppercase, lowercase numbers and be at least 8 characteres long.";
    if (inputPass.parentNode.children.length <= 3)
      inputs[1].appendChild(alertError);
  }
}

function signIn(e) {
  e.preventDefault();
  const urlApi = "https://api-rest-server.vercel.app/login?";
  if (isValidEmail(inputEmail.value) && isValidPassword(inputPass.value)) {
    fetch(
      urlApi + "email=" + inputEmail.value + "&password=" + inputPass.value,
      { method: "GET" }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          alert("Log in success! " + data.msg);
        } else {
          alert("ERROR: " + data.msg);
        }
      })
      .catch(function (error) {
        alert("ERROR: " + error);
      });
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
inputEmail.addEventListener("blur", validateEmail);
inputPass.addEventListener("blur", validatePass);
form.addEventListener("submit", signIn);
