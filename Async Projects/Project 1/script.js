const heading = document.querySelector(".head");

const sayJavaScipt = function() {
  const createElement = document.createElement("h1");
  createElement.innerHTML = "Async in JavaScript";
  heading.appendChild(createElement);
};

const changeText = function() {
  document.querySelector("h1").innerHTML = "Best language is JavaScript.";
};

const changeMe = setTimeout(changeText, 2000);

changeText();
sayJavaScipt();

document.querySelector("#stop").addEventListener("click", () => {
  console.log("STOPPED");
});
