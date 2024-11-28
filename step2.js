const arcadePlanButton = document.querySelector(".arcade-plan");
const advancedPlanButton = document.querySelector(".advanced-plan");
const proPlanButton = document.querySelector(".pro-plan");
const nextButtonLink = document.querySelector(".next-button-link");
let arcadePlanChosen = false;
let advancedPlanChosen = false;
let proPlanChosen = false;

console.log(sessionStorage.getItem("isPro"));

window.onload = function() {
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
