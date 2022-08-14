let fornavn = document.getElementById("fname");
let efternavn = document.getElementById("lname");
let button = document.getElementById("button");

function checkInput() {
  if (fornavn.value !== "" && efternavn.value !== "") {
    button.style.opacity = 1;
  } else {
    button.style.opacity = 0.4;
  }
}
