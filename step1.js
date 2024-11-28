const nameInputBox = document.querySelector(".name-input");
const nameInputError = document.querySelector(".name-input-error");
const emailInputBox = document.querySelector(".email-input");
const emailInputError = document.querySelector(".email-input-error");
const phoneInputBox = document.querySelector(".phone-input");
const phoneInputError = document.querySelector(".phone-input-error");
const nextButtonLink = document.querySelector(".next-button-link");
let nameInput, emailInput, phoneInput;

window.onload = function getPriorUserChoices() {
  nameInputBox.value = sessionStorage.getItem("nameVar");
  nameInput = sessionStorage.getItem("nameVar");
  emailInputBox.value = sessionStorage.getItem("emailVar");
  emailInput = sessionStorage.getItem("emailVar");
  phoneInputBox.value = sessionStorage.getItem("phoneVar");
  phoneInput = sessionStorage.getItem("phoneVar");
}

nameInputBox.addEventListener("input", () => {
  nameInputError.style.visibility = "hidden";
  nameInputBox.style.borderColor = "rgba(0, 0, 0, 0.25)";
});

emailInputBox.addEventListener("input", () => {
  emailInputError.style.visibility = "hidden";
  emailInputBox.style.borderColor = "rgba(0, 0, 0, 0.25)";
});

phoneInputBox.addEventListener("input", () => {
  phoneInputError.style.visibility = "hidden";
  phoneInputBox.style.borderColor = "rgba(0, 0, 0, 0.25)";
});

function checkInput() { 
  nameInput = nameInputBox.value;
  emailInput = emailInputBox.value;
  phoneInput = phoneInputBox.value;
  let checkName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let checkPhone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  let nameValid = false;
  let emailValid = false;
  let phoneValid = false;
  
  if(nameInput == "") {
    nameInputError.innerText = "This field is required"; 
    nameInputError.style.visibility = "visible";
    nameInputBox.style.borderColor = "red";
    nameValid = false;
  } else if(!checkName.test(nameInput)) {
    nameInputError.innerText = "Must be a full name"; 
    nameInputError.style.visibility = "visible";
    nameInputBox.style.borderColor = "red";
    nameValid = false;
  } else {
    nameInputError.style.visibility = "hidden";
    nameInputBox.style.borderColor = "rgba(0, 0, 0, 0.25)";
    sessionStorage.setItem("nameVar", `${nameInput}`);
    nameValid = true;
  }

  if(emailInput == "") {
    emailInputError.innerText = "This field is required"; 
    emailInputError.style.visibility = "visible";
    emailInputBox.style.borderColor = "red";
    emailValid = false;
  } else if(!checkEmail.test(emailInput)) {
    emailInputError.innerText = "Must be a valid email"; 
    emailInputError.style.visibility = "visible";
    emailInputBox.style.borderColor = "red";
    emailValid = false;
  } else {
    emailInputError.style.visibility = "hidden";
    emailInputBox.style.borderColor = "rgba(0, 0, 0, 0.25)";
    sessionStorage.setItem("emailVar", `${emailInput}`);
    emailValid = true;
  }

  if(phoneInput == "") {
    phoneInputError.innerText = "This field is required"; 
    phoneInputError.style.visibility = "visible";
    phoneInputBox.style.borderColor = "red";
    phoneValid = false;
  } else if(!checkPhone.test(phoneInput)) {
    phoneInputError.innerText = "Must be a valid phone number"; 
    phoneInputError.style.visibility = "visible";
    phoneInputBox.style.borderColor = "red";
    phoneValid = false;
  } else {
    phoneInputError.style.visibility = "hidden";
    phoneInputBox.style.borderColor = "rgba(0, 0, 0, 0.25)";
    sessionStorage.setItem("phoneVar", `${phoneInput}`);
    phoneValid = true;
  }

  if(nameValid && emailValid && phoneValid) {
    nextButtonLink.setAttribute("href","./step2.html");
  }
}