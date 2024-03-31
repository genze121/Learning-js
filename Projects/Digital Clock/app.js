const clockData = document.querySelector(".clock");

setInterval(() => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  clockData.innerHTML = time;
}, 1000);
