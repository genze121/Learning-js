const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

let intervalId;

// Generating a random number
const randomColor = () => {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeBackgroundColor = () => {
  document.body.style.backgroundColor = randomColor();
};

const startChanginColor = () => {
  intervalId = setInterval(changeBackgroundColor, 1000);
};

const stopChangingColor = () => {
  clearInterval(intervalId);
};

startButton.addEventListener("click", startChanginColor);
stopButton.addEventListener("click", stopChangingColor);
