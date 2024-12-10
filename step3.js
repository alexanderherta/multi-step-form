const checkboxes1 = document.querySelector(".checkboxes1");
const serviceCheckbox = document.querySelector(".service-checkbox");
const checkboxes2 = document.querySelector(".checkboxes2");
const storageCheckbox = document.querySelector(".storage-checkbox");
const checkboxes3 = document.querySelector(".checkboxes3");
const profileCheckbox = document.querySelector(".profile-checkbox");
const nextButtonLink = document.querySelector(".next-button-link");

window.onload = function getPriorUserChoices() {
  if(sessionStorage.getItem("serviceSelected") === "true") {
    serviceCheckbox.checked = true;
    checkboxes1.style.backgroundColor = "rgba(0, 83, 184, 0.05)";
    checkboxes1.style.borderColor = "hsl(213, 100%, 36%)";
  } else if(sessionStorage.getItem("serviceSelected") === "false") {
    serviceCheckbox.checked = false;
    checkboxes1.style.backgroundColor = "white";
    checkboxes1.style.borderColor = "rgba(0, 0, 0, 0.25)";
  }

  if(sessionStorage.getItem("storageSelected") === "true") {
    storageCheckbox.checked = true;
    checkboxes2.style.backgroundColor = "rgba(0, 83, 184, 0.05)";
    checkboxes2.style.borderColor = "hsl(213, 100%, 36%)";
  } else if(sessionStorage.getItem("storageSelected") === "false") {
    storageCheckbox.checked = false;
    checkboxes2.style.backgroundColor = "white";
    checkboxes2.style.borderColor = "rgba(0, 0, 0, 0.25)";
  }

  if(sessionStorage.getItem("profileSelected") === "true") {
    profileCheckbox.checked = true;
    checkboxes3.style.backgroundColor = "rgba(0, 83, 184, 0.05)";
    checkboxes3.style.borderColor = "hsl(213, 100%, 36%)";
  } else if(sessionStorage.getItem("profileSelected") === "false") {
    profileCheckbox.checked = false;
    checkboxes3.style.backgroundColor = "white";
    checkboxes3.style.borderColor = "rgba(0, 0, 0, 0.25)";
  }
}

checkboxes1.addEventListener("click", () => {
  if(!serviceCheckbox.checked) {
    serviceCheckbox.checked = true;
    checkboxes1.style.backgroundColor = "rgba(0, 83, 184, 0.05)";
    checkboxes1.style.borderColor = "hsl(213, 100%, 36%)";
  } else {
    serviceCheckbox.checked = false;
    checkboxes1.style.backgroundColor = "white";
    checkboxes1.style.borderColor = "rgba(0, 0, 0, 0.25)";
  }
});

serviceCheckbox.addEventListener("click", () => {
  if(!serviceCheckbox.checked) {
    serviceCheckbox.checked = true;
    checkboxes1.style.backgroundColor = "rgba(0, 83, 184, 0.05)";
    checkboxes1.style.borderColor = "hsl(213, 100%, 36%)";
  } else {
    serviceCheckbox.checked = false;
    checkboxes1.style.backgroundColor = "white";
    checkboxes1.style.borderColor = "rgba(0, 0, 0, 0.25)";
  }
});

checkboxes2.addEventListener("click", () => {
  if(!storageCheckbox.checked) {
    storageCheckbox.checked = true;
    checkboxes2.style.backgroundColor = "rgba(0, 83, 184, 0.05)";
    checkboxes2.style.borderColor = "hsl(213, 100%, 36%)";
  } else {
    storageCheckbox.checked = false;
    checkboxes2.style.backgroundColor = "white";
    checkboxes2.style.borderColor = "rgba(0, 0, 0, 0.25)";
  }
});

storageCheckbox.addEventListener("click", () => {
  if(!storageCheckbox.checked) {
    storageCheckbox.checked = true;
    checkboxes2.style.backgroundColor = "rgba(0, 83, 184, 0.05)";
    checkboxes2.style.borderColor = "hsl(213, 100%, 36%)";
  } else {
    storageCheckbox.checked = false;
    checkboxes2.style.backgroundColor = "white";
    checkboxes2.style.borderColor = "rgba(0, 0, 0, 0.25)";
  }
});

checkboxes3.addEventListener("click", () => {
  if(!profileCheckbox.checked) {
    profileCheckbox.checked = true;
    checkboxes3.style.backgroundColor = "rgba(0, 83, 184, 0.05)";
    checkboxes3.style.borderColor = "hsl(213, 100%, 36%)";
  } else {
    profileCheckbox.checked = false;
    checkboxes3.style.backgroundColor = "white";
    checkboxes3.style.borderColor = "rgba(0, 0, 0, 0.25)";
  }
});

profileCheckbox.addEventListener("click", () => {
  if(!profileCheckbox.checked) {
    profileCheckbox.checked = true;
    checkboxes3.style.backgroundColor = "rgba(0, 83, 184, 0.05)";
    checkboxes3.style.borderColor = "hsl(213, 100%, 36%)";
  } else {
    profileCheckbox.checked = false;
    checkboxes3.style.backgroundColor = "white";
    checkboxes3.style.borderColor = "rgba(0, 0, 0, 0.25)";
  }
});

function saveInput() {
  if(serviceCheckbox.checked) {
    sessionStorage.setItem("serviceSelected", "true");
  } else if(!serviceCheckbox.checked) {
    sessionStorage.setItem("serviceSelected", "false");
  }

  if(storageCheckbox.checked) {
    sessionStorage.setItem("storageSelected", "true");
  } else if(!storageCheckbox.checked) {
    sessionStorage.setItem("storageSelected", "false");
  }

  if(profileCheckbox.checked) {
    sessionStorage.setItem("profileSelected", "true");
  } else if(!profileCheckbox.checked) {
    sessionStorage.setItem("profileSelected", "false");
  }

  nextButtonLink.setAttribute("href","./step4.html");
}