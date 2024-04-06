const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const showResult = document.querySelector(".displayResult");

let interval;
const callInterval = () => {
  const heading = document.createElement("h1");
  heading.innerHTML = "Async JavaScript";
  showResult.appendChild(heading);
};

startButton.addEventListener("click", () => {
  interval = setInterval(callInterval, 1000); // starts the interval
});

stopButton.addEventListener("click", () => {
  clearInterval(interval); // stops the interval
});