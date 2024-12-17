const totalHeading = document.querySelector(".total-heading-monthly-yearly");
const totalHeadingPlan = document.querySelector(".total-heading-plan");
const addZeros = document.querySelectorAll(".total-price-numbers-zero");
const addTotalZeros = document.querySelector(".full-total-price-number-zero");
const fullTotalPrice = document.querySelector(".full-total-price");
const totalService = document.querySelector(".total-service");
const totalStorage = document.querySelector(".total-storage");
const totalProfile = document.querySelector(".total-profile");
const totalArea = document.querySelector(".total-area");
const totalOther = document.querySelector(".total-other");
const hr = document.querySelector("hr");

window.onload = function showTotals() {
  if(sessionStorage.getItem("isArcade") === "true") {
    totalHeadingPlan.innerText = "Arcade";
  } else if(sessionStorage.getItem("isAdvanced") === "true") {
    totalHeadingPlan.innerText = "Advanced";
  } else if(sessionStorage.getItem("isPro") === "true") {
    totalHeadingPlan.innerText = "Pro";
  }
  
  if(sessionStorage.getItem("isMonthly") === "true") {
    totalHeading.innerText = "(Monthly)";
    addZeros.forEach((addZero) => {
      addZero.innerText = "";
    });
    addTotalZeros.innerText = "";
  } else if(sessionStorage.getItem("isYearly") === "true") {
    totalHeading.innerText = "(Yearly)";
    addZeros.forEach((addZero) => {
      addZero.innerText = "0";
    });
    addTotalZeros.innerText = "0";
  }

  let addOnsCount = 0;
  let totalValue = 140;

  if(sessionStorage.getItem("serviceSelected") === "false") {
    totalService.style.display = "none";
    totalValue -= 10;
  }
  if(sessionStorage.getItem("storageSelected") === "false") {
    totalStorage.style.display = "none";
    totalValue -= 20;
  }
  if(sessionStorage.getItem("profileSelected") === "false") {
    totalProfile.style.display = "none";
    totalValue -= 20;
  }

  if(sessionStorage.getItem("serviceSelected") === "true") {
    totalService.style.display = "flex";
    addOnsCount += 1;
  }
  if(sessionStorage.getItem("storageSelected") === "true") {
    totalStorage.style.display = "flex";
    addOnsCount += 1;
  }
  if(sessionStorage.getItem("profileSelected") === "true") {
    totalProfile.style.display = "flex";
    addOnsCount += 1;
  }

  if(addOnsCount === 3) {
    totalArea.style.height = "240px";
    fullTotalPrice.innerText = `+${totalValue}/mo`;
  }
  if(addOnsCount === 2) {
    totalArea.style.height = "190px";
    fullTotalPrice.innerText = `+${totalValue}/mo`;
  }
  if(addOnsCount === 1) {
    totalArea.style.height = "150px";
    fullTotalPrice.innerText = `+${totalValue}/mo`;
  }
  if(addOnsCount === 0) {
    totalArea.style.height = "100px";
    fullTotalPrice.innerText = `+${totalValue}/mo`;
    totalOther.remove();
    hr.remove();
  }
}