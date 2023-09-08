// Function to update the current UTC time in milliseconds
function updateUTCTime() {
  const utcTimeElement = document.getElementById("utcTimeMilliseconds");
  const currentUTCTime = new Date().getTime();
  utcTimeElement.textContent = `${currentUTCTime}`;
}
setInterval(updateUTCTime, 1000);
// Function to get the current day of the week
function getCurrentDayOfTheWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayIndex = new Date().getDay();
  const currentDay = daysOfWeek[currentDayIndex];
  return currentDay;
}

// Function to initialize the page
function initializePage() {
  updateUTCTime();
  const currentDayElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  currentDayElement.textContent = `Day of the Week: ${getCurrentDayOfTheWeek()}`;
}

// Call the initialization function when the page loads
initializePage();
