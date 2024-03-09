const name = "JavaScript";
const repoCount = 10;

console.log(name + " " + repoCount); // traditional way of printing the messages to the consoles.

console.log(`Hello my name is ${name} and repo count is ${repoCount}`); // string polation, more advance way of representing messages to the user.

const gameName = "Spiderman";
console.log(gameName);

const userName = new String("JavaScript"); // string is basically object in JavaScript.
console.log(userName); // String {'JavaScript'} -> shows in key - value pairs and indexing starts from 0th index.

/* String functions */
console.log(userName.length); // gets the total length of the string.
console.log(userName.toUpperCase()); // converts to uppercase.
console.log(userName[0]); // gets the index value of 0th index.
console.log(userName.__proto__); // gives the object.
console.log(userName.charAt(2)); // gives the value at the particular index.
console.log(username.indexOf("S")); // gives the index of the value provided.

const newString = userName.substring(0, 5); // start index to end index - 1. Ignores negative value
console.log(newString);

const sliceString = userName.slice(-1, 1); // use to provide negative values.
console.log(sliceString);

const newStringOne = "  JavaScript  ";
console.log(newStringOne);
console.log(newStringOne.trim()); // use for removing all the spaces provided in the string.

const replaceValue = "JavaScript";
console.log(replaceValue.replace(replaceValue, "TypeScript")); // replaces the original string into new string provided.

console.log(replaceValue.includes("JavaScript")); // checks the given string is present or not.

const splitString = "JavaScript";
newSplitArray = splitString.split(""); // converts string into array.
console.log(newSplitArray);
