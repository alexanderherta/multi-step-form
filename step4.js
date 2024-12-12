const totalHeading = document.querySelector(".total-heading-monthly-yearly");
const totalHeadingPlan = document.querySelector(".total-heading-plan");
const addZeros = document.querySelectorAll(".total-price-numbers-zero");
const addTotalZeros = document.querySelector(".full-total-price-number-zero");

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
}