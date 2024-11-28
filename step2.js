const arcadePlanButton = document.querySelector(".arcade-plan");
const advancedPlanButton = document.querySelector(".advanced-plan");
const proPlanButton = document.querySelector(".pro-plan");
let arcadePlanChosen = false;
let advancedPlanChosen = false;
let proPlanChosen = false;

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
}

// nextButtonLink.setAttribute("href","./step2.html");