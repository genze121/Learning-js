const buttons = document.querySelectorAll(".button");
const changeBodyColor = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "grey") {
      changeBodyColor.style.background = event.target.id;
    } else if (event.target.id === "white") {
      changeBodyColor.style.background = event.target.id;
      changeBodyColor.style.color = "black";
    } else if (event.target.id === "red") {
      changeBodyColor.style.background = event.target.id;
      changeBodyColor.style.color = "white";
    } else {
      changeBodyColor.style.background = event.target.id;
      changeBodyColor.style.color = "black";
    }
  });
});
