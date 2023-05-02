var inputs = document.querySelectorAll("input");
var form = document.getElementById("sign-up-form");
var user = localStorage.getItem("user");
var userData = JSON.parse(user);

if (user) {
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].id === "dob") {
      var a = userData.dob.split("/");
      inputs[i].value = a[2] + "-" + a[0] + "-" + a[1];
    } else {
      inputs[i].value = userData[toCamelCase(inputs[i].id)];
    }
  }
}

function isOnlyNumbers(string) {
  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    if (!(code >= 48 && code <= 57)) {
      return false;
    }
  }
  return true;
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

function isOnlyLetters(string) {
  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    if (
      !(
        (
          (code >= 65 && code <= 90) || //Uppercase
          (code >= 97 && code <= 122) || //Lowercase
          code === 32 ||
          code === 164 ||
          code === 165
        ) //spaces, ñ and Ñ
      )
    ) {
      return false;
    }
  }
  return true;
}

function itHasLetters(string) {
  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    if (
      (code >= 65 && code <= 90) ||
      (code >= 97 && code <= 122) ||
      code === 164 ||
      code === 165
    ) {
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

function isAlphaNumeric(string) {
  for (var i = 0; i < string.length; i++) {
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

function toCamelCase(string) {
  var index = string.indexOf("-");
  if (index > -1) {
    var string =
      string.substring(0, index) +
      string.substring(index + 1, index + 2).toUpperCase() +
      string.substring(index + 2);
  }
  return string;
}

function isValidName(name) {
  return name.length >= 3 && isOnlyLetters(name);
}

function isValidDni(dni) {
  return dni.length > 7 && isOnlyNumbers(dni);
}

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

function isValidPhone(number) {
  return number.length === 10 && isOnlyNumbers(number);
}

function isValidAddress(address) {
  return (
    address.length >= 5 &&
    address.trim().indexOf(" ") !== -1 &&
    isAlphaNumeric(address) &&
    itHasLetters(address) &&
    itHasNumbers(address)
  );
}

function isValidLocation(location) {
  return (
    location.length > 3 && isAlphaNumeric(location) && itHasLetters(location)
  );
}

function isValidPostal(postal) {
  return postal.length >= 4 && postal.length <= 5 && isOnlyNumbers(postal);
}

function isValidEmail(email) {
  const emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return emailExpression.test(email);
}

function isValidPassword(password) {
  return (
    password.length >= 8 &&
    itHasLowerCase(password) &&
    itHasUpperCase(password) &&
    itHasNumbers(password)
  );
}

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
      case "dob":
        if (!isValidDate(target.value)) {
          alertError.innerText = "You must be over 12 years old to register.";
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
      case "address":
        if (!isValidAddress(target.value)) {
          alertError.innerText =
            "At least 5 alphanumerical characters and one space.";
          isValid = false;
        }
        break;
      case "city":
        if (!isValidLocation(target.value)) {
          alertError.innerText = "At least 4 alphanumerical characters.";
          isValid = false;
        }
        break;
      case "zip":
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
        } else if (idDivided[0] === "r") {
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

function signUp(e) {
  e.preventDefault();
  var queryString = "";
  var validSignUp = true;
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].id === "dob") {
      var a = inputs[i].value.split("-");
      a = a[1] + "/" + a[2] + "/" + a[0];
      queryString = queryString + "&" + toCamelCase(inputs[i].id) + "=" + a;
    } else {
      queryString =
        queryString + "&" + toCamelCase(inputs[i].id) + "=" + inputs[i].value;
      check(inputs[i]);
    }
    if (inputs[i].classList.contains("border-red")) {
      validSignUp = false;
    }
  }
  if (validSignUp) {
    queryString = queryString.substring(1);
    const urlApi = "https://api-rest-server.vercel.app/signup?" + queryString;
    fetch(urlApi, { method: "GET" })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          alert(
            "SIGN UP SUCCESS \n" + data.msg + JSON.stringify(data.data, null, 2)
          );
          localStorage.setItem("user", JSON.stringify(data.data));
          window.location.href = form.action;
        } else {
          alert(JSON.stringify(data.msg));
        }
      })
      .catch(function (error) {
        alert("ERROR: " + error);
      });
  } else {
    alert("ERROR: Please complete all fields correctly");
  }
}

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("blur", onBlur);
  inputs[i].addEventListener("focus", cleanInput);
}

form.addEventListener("submit", signUp);
