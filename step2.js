const arcadePlanButton = document.querySelector(".arcade-plan");
const advancedPlanButton = document.querySelector(".advanced-plan");
const proPlanButton = document.querySelector(".pro-plan");
const plans = document.querySelectorAll(".plans");
const plansDiv = document.querySelectorAll(".plans-div");
const addPlanZero1 = document.querySelector(".add-plan-zero1");
const addPlanZero2 = document.querySelector(".add-plan-zero2");
const addPlanZero3 = document.querySelector(".add-plan-zero3");
const monthlyYearlySwitch = document.querySelector(".monthly-yearly-switch");
const monthlyText = document.querySelector(".monthly-text");
const yearlyText = document.querySelector(".yearly-text");
const nextButtonLink = document.querySelector(".next-button-link");
let arcadePlanChosen = false;
let advancedPlanChosen = false;
let proPlanChosen = false;

window.onload = function getPriorUserChoices() {
  if(sessionStorage.getItem("isArcade") === "true") {
    arcadePlanButton.style.borderColor = "hsl(213, 100%, 36%)";
    arcadePlanButton.style.backgroundColor = "rgba(0, 83, 184, 0.05)";
    arcadePlanChosen = true;
    advancedPlanChosen = false;
    proPlanChosen = false;
    advancedPlanButton.style.borderColor = "rgba(0, 0, 0, 0.25)";
    advancedPlanButton.style.backgroundColor = "white";
    proPlanButton.style.borderColor = "rgba(0, 0, 0, 0.25)";
    proPlanButton.style.backgroundColor = "white";
    nextButtonLink.setAttribute("href","./step3.html");
  } else if(sessionStorage.getItem("isAdvanced") === "true") {
    advancedPlanButton.style.borderColor = "hsl(213, 100%, 36%)";
    advancedPlanButton.style.backgroundColor = "rgba(0, 83, 184, 0.05)";
    arcadePlanChosen = false;
    advancedPlanChosen = true;
    proPlanChosen = false;
    arcadePlanButton.style.borderColor = "rgba(0, 0, 0, 0.25)";
    arcadePlanButton.style.backgroundColor = "white";
    proPlanButton.style.borderColor = "rgba(0, 0, 0, 0.25)";
    proPlanButton.style.backgroundColor = "white";
    nextButtonLink.setAttribute("href","./step3.html");
  } else if(sessionStorage.getItem("isPro") === "true") {
    proPlanButton.style.borderColor = "hsl(213, 100%, 36%)";
    proPlanButton.style.backgroundColor = "rgba(0, 83, 184, 0.05)";
    arcadePlanChosen = false;
    advancedPlanChosen = false;
    proPlanChosen = true;
    arcadePlanButton.style.borderColor = "rgba(0, 0, 0, 0.25)";
    arcadePlanButton.style.backgroundColor = "white";
    advancedPlanButton.style.borderColor = "rgba(0, 0, 0, 0.25)";
    advancedPlanButton.style.backgroundColor = "white";
    nextButtonLink.setAttribute("href","./step3.html");
  }

  if(sessionStorage.getItem("isYearly") === "true") {
    monthlyText.style.color = "rgba(0, 0, 0, 0.4)";
    monthlyText.style.transition = "0.3s";
    yearlyText.style.color = "hsl(213, 96%, 18%)";
    yearlyText.style.transition = "0.3s";
    monthlyYearlySwitch.checked = true;
    plans.forEach((plan) => {
      plan.style.height = "175px";
      plan.style.transition = "0.3s";
    });
    plansDiv.forEach((planDiv) => {
      planDiv.innerHTML += `<p class="plan-free-length">2 months free</p>`;
      planDiv.style.transition = "0.3s";
    });
  } else if(sessionStorage.getItem("isMonthly") === "true") {
    monthlyText.style.color = "hsl(213, 96%, 18%)";
    monthlyText.style.transition = "0.3s";
    yearlyText.style.color = "rgba(0, 0, 0, 0.4)";
    yearlyText.style.transition = "0.3s";
    monthlyYearlySwitch.checked = false;
    plans.forEach((plan) => {
      plan.style.height = "150px";
      plan.style.transition = "0.3s";
    });
    plansDiv.forEach((planDiv) => {
      planDiv.removeChild(planDiv.lastChild);
      planDiv.style.transition = "0.3s";
    });
  }
}


function isArcadePlan() {
  arcadePlanButton.style.borderColor = "hsl(213, 100%, 36%)";
  arcadePlanButton.style.backgroundColor = "rgba(0, 83, 184, 0.05)";
  arcadePlanChosen = true;
  advancedPlanChosen = false;
  proPlanChosen = false;
  advancedPlanButton.style.borderColor = "rgba(0, 0, 0, 0.25)";
  advancedPlanButton.style.backgroundColor = "white";
  proPlanButton.style.borderColor = "rgba(0, 0, 0, 0.25)";
  proPlanButton.style.backgroundColor = "white";
  sessionStorage.setItem("isArcade", "true");
  sessionStorage.setItem("isAdvanced", "false");
  sessionStorage.setItem("isPro", "false");
  nextButtonLink.setAttribute("href","./step3.html");
}

function isAdvancedPlan() {
  advancedPlanButton.style.borderColor = "hsl(213, 100%, 36%)";
  advancedPlanButton.style.backgroundColor = "rgba(0, 83, 184, 0.05)";
  arcadePlanChosen = false;
  advancedPlanChosen = true;
  proPlanChosen = false;
  arcadePlanButton.style.borderColor = "rgba(0, 0, 0, 0.25)";
  arcadePlanButton.style.backgroundColor = "white";
  proPlanButton.style.borderColor = "rgba(0, 0, 0, 0.25)";
  proPlanButton.style.backgroundColor = "white";
  sessionStorage.setItem("isArcade", "false");
  sessionStorage.setItem("isAdvanced", "true");
  sessionStorage.setItem("isPro", "false");
  nextButtonLink.setAttribute("href","./step3.html");
}

function isProPlan() {
  proPlanButton.style.borderColor = "hsl(213, 100%, 36%)";
  proPlanButton.style.backgroundColor = "rgba(0, 83, 184, 0.05)";
  arcadePlanChosen = false;
  advancedPlanChosen = false;
  proPlanChosen = true;
  arcadePlanButton.style.borderColor = "rgba(0, 0, 0, 0.25)";
  arcadePlanButton.style.backgroundColor = "white";
  advancedPlanButton.style.borderColor = "rgba(0, 0, 0, 0.25)";
  advancedPlanButton.style.backgroundColor = "white";
  sessionStorage.setItem("isArcade", "false");
  sessionStorage.setItem("isAdvanced", "false");
  sessionStorage.setItem("isPro", "true");
  nextButtonLink.setAttribute("href","./step3.html");
}

function toggleMonthlyYearly() {
  if(monthlyYearlySwitch.checked) {
    sessionStorage.setItem("isMonthly", "false");
    sessionStorage.setItem("isYearly", "true");
    monthlyText.style.color = "rgba(0, 0, 0, 0.4)";
    monthlyText.style.transition = "0.3s";
    yearlyText.style.color = "hsl(213, 96%, 18%)";
    yearlyText.style.transition = "0.3s";
    plans.forEach((plan) => {
      plan.style.height = "175px";
      plan.style.transition = "0.3s";
    });
    plansDiv.forEach((planDiv) => {
      planDiv.innerHTML += `<p class="plan-free-length">2 months free</p>`;
      planDiv.style.transition = "0.3s";
    });
    // addPlanZeros.forEach((addPlanZero) => {
    //   addPlanZero.textContent = "0";
    //   console.log(addPlanZero);
    //   console.log(addPlanZeros);
    // });
  } else {
    sessionStorage.setItem("isMonthly", "true");
    sessionStorage.setItem("isYearly", "false");
    monthlyText.style.color = "hsl(213, 96%, 18%)";
    monthlyText.style.transition = "0.3s";
    yearlyText.style.color = "rgba(0, 0, 0, 0.4)";
    yearlyText.style.transition = "0.3s";
    plans.forEach((plan) => {
      plan.style.height = "150px";
      plan.style.transition = "0.3s";
    });
    plansDiv.forEach((planDiv) => {
      planDiv.removeChild(planDiv.lastChild);
      planDiv.style.transition = "0.3s";
    });
  }
}