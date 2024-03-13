// if condition

// In order to execute code inside if block the condition needs to be true, if not then it doesn't go inside inside if block.

// if (condition) {
//   // here condition needs to be true in order to execute the code inside if block
// }

const isUserLoggedIn = true;
const username = "JavaScript";
if (isUserLoggedIn) {
  console.log(`${username} is logged in.`);
}

// operators used in if condition are :- !, > , < , >= , <=, == , ===

// Example - 1

const temperature = 41;
if (temperature < 50) {
  console.log("Less than 50");
} else {
  console.log("Invalid temperature");
}

// Example - 2

const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`User Power :- ${power}`);
}

// console.log(power);
/* undefined, because power is inside the if block and is accessible inside the if - block only, 
if we try to access outside the if block then we will get power as undefined. 
Same with the let but when we define power as var then we will be getting the value of power 
because it is accessbile outside the block also. */

// Short - hand if

const balance = 1000;

if (balance > 500) console.log(`Balance is :- ${balance}`);
/*  Here we can use only one statement at a time. It will be treated as a if level scope. 
 In order to use multiple statements we can use comma(,) but the code readbility will be worse. */

// Nesting if - else

const newBalance = 1000;

if (newBalance < 500) {
  console.log("less than 500");
} else if (newBalance < 750) {
  console.log("less than 750");
} else if (newBalance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

// Real - based example

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy a course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User is logged in to the application.");
}
