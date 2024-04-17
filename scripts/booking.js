/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let costPerDay = 0;
let daysSelected = 0;
let totalCost = 0;

const fullDayButton = document.getElementById("full");
const halfDayButton = document.getElementById("half");
const daySelectors = document.querySelectorAll(".day-selector li");
const clearButton = document.getElementById("clear-button");
const calculatedCostElement = document.getElementById("calculated-cost");

fullDayButton.addEventListener("click", () => {
  fullDayButton.classList.add("clicked");
  halfDayButton.classList.remove("clicked");
  calculateCost();
});

halfDayButton.addEventListener("click", () => {
  halfDayButton.classList.add("clicked");
  fullDayButton.classList.remove("clicked");
  calculateCost();
});

daySelectors.forEach((day) => {
  day.addEventListener("click", () => {
    day.classList.toggle("clicked");
    calculateDaysSelected();
    calculateCost();
  });
});

clearButton.addEventListener("click", () => {
  daySelectors.forEach((day) => {
    day.classList.remove("clicked");
  });
  daysSelected = 0;
  totalCost = 0;
  updateTotalCost();
});

function calculateDaysSelected() {
  daysSelected = document.querySelectorAll(".day-selector li.clicked").length;
}

function calculateCost() {
  totalCost = daysSelected * costPerDay;
  updateTotalCost();
}

function updateTotalCost() {
  calculatedCostElement.textContent = totalCost.toFixed(2);
}

updateTotalCost();

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

daySelectors.forEach((day) => {
  day.addEventListener("click", () => {
    if (!day.classList.contains("clicked")) {
      day.classList.add("clicked");
      calculateDaysSelected();
      calculateCost();
    }
  });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", () => {
  daySelectors.forEach((day) => {
    day.classList.remove("clicked");
  });
  daysSelected = 0;
  calculateCost();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener("click", () => {
  halfDayButton.classList.add("clicked");
  fullDayButton.classList.remove("clicked");
  costPerDay = 20;
  calculateCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener("click", () => {
  fullDayButton.classList.add("clicked");
  halfDayButton.classList.remove("clicked");
  costPerDay = 35; // Change the daily rate back to $35 for full-day
  calculateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
  totalCost = daysSelected * costPerDay;
  calculatedCostElement.innerHTML = totalCost.toFixed(2);
}
