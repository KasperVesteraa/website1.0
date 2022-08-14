let fornavnElement = document.getElementById("fname");
let efternavnElement = document.getElementById("lname");
let button = document.getElementById("button");

function checkInput() {
  if (fornavnElement.value !== "" && efternavnElement.value !== "") {
    button.style.opacity = 1;
  } else {
    button.style.opacity = 0.4;
  }
}

function onSubmit(event) {
  event.preventDefault();
  console.log("Submitted");
}
