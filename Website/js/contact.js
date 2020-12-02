
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#mail");
const emailError = document.querySelector("#emailError");

function validate() {
  event.preventDefault();

  try {
    if (name.value.trim().length > 0) {
        nameError.style.display = "none";
    }
    else {
        nameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
  }

  catch(error) {
    console.log("error");
    contactForm.innerHTML = "Something went wrong";
  }
}

contactForm.addEventListener("submit", validate);

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const matchesEmail = regEx.test(email);
  return matchesEmail;
}

const message = document.querySelector("textarea");
const counter = document.querySelector(".counting-characters span");

message.onkeyup = function() {
  const countNumber = event.target.value.length;

  counter.innerHTML = countNumber;
}
