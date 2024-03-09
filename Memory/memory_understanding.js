// Primitive Datatypes gets store in Stack Memory -> gets the copy of the value.
// Non - Primitive Datatypes gets store in Heap Memory -> gets the reference of the value.

let exampleValue = "JavaScript"; // gets allocated to stack memory.

let newValue = exampleValue;
newValue = "TypeScript";

console.log(exampleValue);
console.log(newValue);

let userData = {
  "name ": "JavaScript",
  "language": "Programming"
}; // gets allocated to heap memory.


let userDataTwo = userData;
userDataTwo.name = "Java";

console.log(userData.name);
console.log(userDataTwo.name);
