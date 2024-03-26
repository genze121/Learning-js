const calculateButton = document.querySelector(".button");

calculateButton.addEventListener("click", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const displayResult = document.querySelector(".results");

  if (height === "" || height < 0 || isNaN(height)) {
    displayResult.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    displayResult.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmiCalculation = (weight / (height * height)).toFixed(2);
    if (bmiCalculation < 18.6) {
      displayResult.innerHTML = `Under Weight :- ${bmiCalculation}`;
    } else if (bmiCalculation > 18.6 && bmiCalculation < 24.9) {
      displayResult.innerHTML = `Normal Range :- ${bmiCalculation}`;
    } else {
      displayResult.innerHTML = `Overweight :- ${bmiCalculation}`;
    }
  }
});
