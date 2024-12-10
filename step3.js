const checkboxes1 = document.querySelector(".checkboxes1");
const serviceCheckbox = document.querySelector(".service-checkbox");
const checkboxes2 = document.querySelector(".checkboxes2");
const storageCheckbox = document.querySelector(".storage-checkbox");
const checkboxes3 = document.querySelector(".checkboxes3");
const profileCheckbox = document.querySelector(".profile-checkbox");

checkboxes1.addEventListener("click", () => {
  if(!serviceCheckbox.checked) {
    serviceCheckbox.checked = true;
  } else {
    serviceCheckbox.checked = false;
  }
});

serviceCheckbox.addEventListener("click", () => {
  if(!serviceCheckbox.checked) {
    serviceCheckbox.checked = true;
  } else {
    serviceCheckbox.checked = false;
  }
});

checkboxes2.addEventListener("click", () => {
  if(!storageCheckbox.checked) {
    storageCheckbox.checked = true;
  } else {
    storageCheckbox.checked = false;
  }
});

storageCheckbox.addEventListener("click", () => {
  if(!storageCheckbox.checked) {
    storageCheckbox.checked = true;
  } else {
    storageCheckbox.checked = false;
  }
});

checkboxes3.addEventListener("click", () => {
  if(!profileCheckbox.checked) {
    profileCheckbox.checked = true;
  } else {
    profileCheckbox.checked = false;
  }
});

profileCheckbox.addEventListener("click", () => {
  if(!profileCheckbox.checked) {
    profileCheckbox.checked = true;
  } else {
    profileCheckbox.checked = false;
  }
});