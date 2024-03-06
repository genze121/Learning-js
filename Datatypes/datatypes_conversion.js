let score = 33;
console.log(typeof score);

let newScore = "50abc";
console.log(typeof newScore);

let newScoreInNumber = Number(newScore);
console.log(typeof newScoreInNumber);
console.log(newScoreInNumber);

let validate = false;
let booleanValidate = Number(validate);
console.log(booleanValidate);

let loggedIn = "JavaScript";
let booleanIsLoggedIn = Boolean(loggedIn);
console.log(booleanIsLoggedIn);

let numberValue = 44;
let stringConversion = String(numberValue);
console.log(stringConversion);
console.log(typeof stringConversion);

/* Capturing Notes

"33" -> 33
"33abc" -> NaN (Not a number)
true -> 1 , false -> 0

1 -> true, 0 -> false
"" -> false, "JavaScript" -> true

*/
