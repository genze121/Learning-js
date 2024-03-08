// Primitive Datatypes

// Categories : 7 types

/* 
1. String
2. Number, BigInt
3. Boolean
4. Null
5. Object
6. Undefined
7. Symbol -> to give uniqueness to the variable
*/

const score = 100;
const scoreValue = 100.34;
const isLoggedIn = false;
const outsideTemp = null;
let useEmail;

const id = Symbol("Hello");
const anotherId = Symbol("123");

console.log(id === anotherId); // false

// const bigNumber = 2331543347686987078n; // it converts automatically to BigInt.

// Reference (Non - Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array

const objectData = {
  name: "JavaScript",
  age: 200,
  address: "US"
}; // Object

const myFunction = function () {
  console.log("Hello World");
}; // function

console.log(typeof myFunction); // returns object function
console.log(typeof useEmail); // returns undefined
console.log(typeof outsideTemp); // returns object
console.log(typeof score); // returns number
console.log(typeof scoreValue); // returns number
console.log(typeof isLoggedIn); // returns boolean
