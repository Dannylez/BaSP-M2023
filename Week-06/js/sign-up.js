/* var inputName = document.getElementById("input-name");
var inputLastName = document.getElementById("input-last-name");
var inputDni = document.getElementById("input-dni");
var inputBirth = document.getElementById("input-birth");
var inputPhone = document.getElementById("input-phone");
var inputAdress = document.getElementById("input-adress");
var inputLocation = document.getElementById("input-location");
var inputPostal = document.getElementById("input-postal");
var inputEmail = document.getElementById("input-email");
var inputPass = document.getElementById("input-password");
var inputRePass = document.getElementById("input-r-password"); */

var inputs = document.querySelectorAll("input");

function isOnlyNumbers(string) {
  for (i = 0; i < string.length; i++) {
    if (!(string[i] >= 0 && string[i] <= 9)) {
      return false;
    }
  }
  return true;
}

function isOnlyLetters(string) {
  for (i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    if (
      !(
        (
          (code >= 65 && code <= 90) || //Uppercase
          (code >= 97 && code <= 122) || //Lowercase
          code === " "
        ) //spaces
      )
    ) {
      return false;
    }
  }
  return true;
}

function isAlphaNumeric(string) {
  for (i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    if (
      !(
        (
          (code >= 48 && code <= 57) || //numbers
          (code >= 65 && code <= 90) || //Uppercase
          (code >= 97 && code <= 122) || //Lowercase
          code === 32
        ) //spaces
      )
    ) {
      return false;
    }
  }
  return true;
}

//Validates Name and Last name inputs
function isValidName(name) {
  return name.length > 3 && isOnlyLetters(name);
}

//Validates DNI input
function isValidDni(dni) {
  return dni.length > 7 && isOnlyNumbers(dni);
}

//Validates Birthday input
function isValidDate(date) {
  var year = date.split("-")[0];
  return year <= 2010 && year >= 1900;
}

//Validates Phone number input
function isValidPhone(number) {
  return number.length === 10 && isOnlyNumbers(number);
}

//Validates Adress input
function isValidAdress(adress) {
  return (
    adress.length >= 5 &&
    adress.trim().indexOf(" ") !== -1 &&
    isAlphaNumeric(adress)
  );
}

//Validates Location input
function isValidLocation(location) {
  return location.length > 3 && isAlphaNumeric(location);
}

//Validates Postal code input
function isValidPostal(postal) {
  return postal.length >= 4 && postal.length <= 5 && isOnlyNumbers(postal);
}

//Validates Email input
function isValidEmail(email) {
  const emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return emailExpression.test(email);
}

//Validates Passwords input
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

//Checks validation when you blur the input
function check(e) {
  var idDivided = e.target.id.split("-");
  var keyWord = idDivided[idDivided.length - 1];
  const alertError = document.createElement("p");
  alertError.className = "text-alert";
  var isValid = true;
  switch (keyWord) {
    case "name":
      if (!isValidName(e.target.value)) {
        alertError.innerText = "At least 4 characters (only letters).";
        isValid = false;
      }
      break;
    case "dni":
      if (!isValidDni(e.target.value)) {
        alertError.innerText = "At least 8 characters (only numbers).";
        isValid = false;
      }
      break;
    case "birth":
      if (!isValidDate(e.target.value)) {
        alertError.innerText = "You must be over 13 years old to register.";
        isValid = false;
      }
      break;
    case "phone":
      if (!isValidPhone(e.target.value)) {
        alertError.innerText =
          "Phone number must content 10 characters (only numbers).";
        isValid = false;
      }
      break;
    case "adress":
      if (!isValidAdress(e.target.value)) {
        alertError.innerText =
          "At least 5 alphanumerical characters and one space.";
        isValid = false;
      }
      break;
    case "location":
      if (!isValidLocation(e.target.value)) {
        alertError.innerText = "At least 4 alphanumerical characters.";
        isValid = false;
      }
      break;
    case "postal":
      if (!isValidPostal(e.target.value)) {
        alertError.innerText = "Only 4 or 5 numbers.";
        isValid = false;
      }
      break;
    case "email":
      if (!isValidEmail(e.target.value)) {
        alertError.innerText = "Invalid email format.";
        isValid = false;
      }
      break;
    case "password":
      if (!isValidPassword(e.target.value)) {
        alertError.innerText =
          "Password must include a mix of uppercase, lowercase numbers and be at least 8 characteres long.";
        isValid = false;
      } else if (idDivided[1] === "r") {
        if (e.target.value !== inputPass.value) {
          alertError.innerText = "You must repeat the previous password.";
          isValid = false;
        }
      }
      break;
  }
  if (!isValid) {
    e.target.classList = "border-red";
    if (e.target.parentNode.children.length <= 2)
      e.target.parentNode.appendChild(alertError);
  }
}

/* inputName.addEventListener("blur", check);
inputLastName.addEventListener("blur", check);
inputDni.addEventListener("blur", check);
inputPhone.addEventListener("blur", check);
inputAdress.addEventListener("blur", check);
inputBirth.addEventListener("blur", check);
inputLocation.addEventListener("blur", check);
inputPostal.addEventListener("blur", check);
inputEmail.addEventListener("blur", check);
inputPass.addEventListener("blur", check);
inputRePass.addEventListener("blur", check); */

for (i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("blur", check);
}
