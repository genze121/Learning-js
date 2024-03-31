const buttonElement = document.getElementById("button");
const dateValue = document.getElementById("date");
const displayDob = document.querySelector(".result");

buttonElement.addEventListener("click", calculateAge);

function calculateAge() {
  if (dateValue.value === "") {
    alert("Please enter the date to calculate the age!!");
    return;
  }
  const currentDate = new Date();
  const currentBirthYear = currentDate.getFullYear();
  const setBirthDate = new Date(dateValue.value);
  const birthYear = setBirthDate.getFullYear();
  let finalDOB = currentBirthYear - birthYear;
  let month = setBirthDate.getMonth() + 1;
  let day = setBirthDate.getDate();
  finalDOB = finalDOB > 1 ? `${finalDOB} Years` : `${finalDOB} Year`;
  month = month > 1 ? `${month} months` : `${month} month`;
  day = day > 1 ? `${day} days old` : `${day} day old`;
  displayDob.innerHTML = `Your age is :- ${finalDOB} ${month} ${day} `;
}
