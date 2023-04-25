var inputs = document.querySelectorAll("input");
var form = document.getElementById("sign-up-form");

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
          code === 32
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

console.log(new Date().getMonth());

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
  var today = new Date();
  var actualDay = today.getDate();
  var actualMonth = today.getMonth();
  var actualYear = today.getFullYear();
  var dateArray = date.split("-");
  var day = dateArray[2];
  var month = dateArray[1];
  var year = dateArray[0];
  if (
    (year < actualYear - 12 && year > 1900) ||
    (year == actualYear - 12 && actualMonth >= month) ||
    (year == actualYear - 12 && actualMonth + 1 == month && actualDay >= day)
  ) {
    return true;
  }
  return false;
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

//Checks validation.
function check(target) {
  var idDivided = target.id.split("-");
  var keyWord = idDivided[idDivided.length - 1];
  const alertError = document.createElement("p");
  alertError.className = "text-alert";
  var isValid = true;
  if (target.value === "") {
    isValid = false;
    alertError.innerText = "Required field";
  } else {
    switch (keyWord) {
      case "name":
        if (!isValidName(target.value)) {
          alertError.innerText = "At least 4 characters (only letters).";
          isValid = false;
        }
        break;
      case "dni":
        if (!isValidDni(target.value)) {
          alertError.innerText = "At least 8 characters (only numbers).";
          isValid = false;
        }
        break;
      case "birth":
        if (!isValidDate(target.value)) {
          alertError.innerText = "You must be over 13 years old to register.";
          isValid = false;
        }
        break;
      case "phone":
        if (!isValidPhone(target.value)) {
          alertError.innerText =
            "Phone number must content 10 characters (only numbers).";
          isValid = false;
        }
        break;
      case "adress":
        if (!isValidAdress(target.value)) {
          alertError.innerText =
            "At least 5 alphanumerical characters and one space.";
          isValid = false;
        }
        break;
      case "location":
        if (!isValidLocation(target.value)) {
          alertError.innerText = "At least 4 alphanumerical characters.";
          isValid = false;
        }
        break;
      case "postal":
        if (!isValidPostal(target.value)) {
          alertError.innerText = "Only 4 or 5 numbers.";
          isValid = false;
        }
        break;
      case "email":
        if (!isValidEmail(target.value)) {
          alertError.innerText = "Invalid email format.";
          isValid = false;
        }
        break;
      case "password":
        if (!isValidPassword(target.value)) {
          alertError.innerText =
            "Password must include a mix of uppercase, lowercase numbers and be at least 8 characteres long.";
          isValid = false;
        } else if (idDivided[1] === "r") {
          if (target.value !== inputs[9].value) {
            alertError.innerText = "You must repeat the previous password.";
            isValid = false;
          }
        }
        break;
    }
  }
  if (!isValid) {
    target.classList = "border-red";
    if (target.parentNode.children.length <= 2)
      target.parentNode.appendChild(alertError);
  }
}

//Checks validations on blur
function onBlur(e) {
  check(e.target);
}

function cleanInput(e) {
  e.target.classList.remove("border-red");
  if (e.target.parentNode.children.length > 2) {
    var text = e.target.parentNode.children[2];
    e.target.parentNode.removeChild(text);
  }
}

//Checks validations on submit
function signUp(e) {
  e.preventDefault();
  var validSignUp = true;
  for (i = 0; i < inputs.length; i++) {
    check(inputs[i]);
    if (inputs[i].classList.contains("border-red")) {
      validSignUp = false;
    }
  }
  if (validSignUp) {
    alert("Congratulations, you have successfully created your account.");
  } else {
    alert("ERROR: Please complete all fields correctly");
  }
}

for (i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("blur", onBlur);
  inputs[i].addEventListener("focus", cleanInput);
}

form.addEventListener("submit", signUp);

console.log(inputs[7]);
console.log();
