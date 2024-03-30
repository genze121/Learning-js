const buttonElement = document.getElementById("button");
const dateValue = document.getElementById("date");
const displayDob = document.querySelector(".result");

buttonElement.addEventListener("click", calculateAge);

function calculateAge() {
  if (dateValue.value === "") {
    alert("Please Enter the date to calculate the age!!");
    return;
  }
  const currentDate = new Date();
  const birthdayYear = currentDate.getFullYear();
  const setDate = new Date(dateValue.value);
  const pastYear = setDate.getFullYear();
  if (birthdayYear - pastYear === 0) {
    alert("Both Currrent Birth Year and Past Birth Year is same!!");
    return;
  }
  const finalDOB = birthdayYear - pastYear;
  if (finalDOB === 1) {
    displayDob.innerHTML = `Your age is :- ${finalDOB} Year old`;
  } else {
    displayDob.innerHTML = `Your age is :- ${finalDOB} Years old`;
  }
}
