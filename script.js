// Function to update the current UTC time in milliseconds
function updateUTCTime() {
  const utcTimeElement = document.getElementById("utcTimeMilliseconds");
  const currentUTCTimeHours = new Date().getUTCHours();
  const currentUTCTimeMins = new Date().getUTCMinutes();
  const currentUTCTimeSecs = new Date().getUTCSeconds();
  const currentUTCTimeMs = new Date().getUTCMilliseconds();
  utcTimeElement.textContent = `${currentUTCTimeHours}: ${currentUTCTimeMins}: ${currentUTCTimeSecs}: ${currentUTCTimeMs}`;
}
setInterval(updateUTCTime, 1);
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
