function sayName() {
  console.log("J");
  console.log("a");
  console.log("v");
  console.log("a");
  console.log("S");
  console.log("c");
  console.log("r");
  console.log("i");
  console.log("p");
  console.log("t");
}

// sayName(); // sayName is reference to function and () is the execution of the function.

function addNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;
} // (numberOne,numberTwo) -> is the parameter to the function

console.log(addNumbers()); // gives NaN
console.log(addNumbers(10, 20)); // gives 30 (10,20) -> is the arguments we provide

function multiplyNumbersOne(numberOne, numberTwo) {
  console.log(numberOne * numberTwo);
}
const result = multiplyNumbersOne(20, 30);
console.log("Result : ", result); // getting undefined because function is not returning any value.

function multiplyNumbers(numberOne, numberTwo) {
  return numberOne * numberTwo;
}
const resultData = multiplyNumbers(20, 30);
console.log("Result : ", resultData);

// To print the username using the function

// Example - 1

function loginUserMessage(username) {
  return `${username} just logged in.`;
}

const message = loginUserMessage("JavaScript");
console.log(message);

// Example - 2

function printUserName(username) {
  if (username === undefined) {
    return "Please enter the username.";
  }
  return `${username} is logged in.`;
}

console.log(printUserName()); // Here the argument is not defined so we will get undefined.

// Example - 3

function userNameData(username = "Sam") {
  if (username === undefined) return "Please enter the username.";
  return `${username} is logged in.`;
}

console.log(userNameData());
