var burgerBtn = document.getElementById("burger");
var hidden = document.getElementsByClassName("hidden");

burgerBtn.addEventListener("click", toggleHidden);

function toggleHidden(e) {
  for (i = 0; i < hidden.length; i++) {
    hidden[i].classList.toggle("mobile-hide");
  }
}
