const userEmail = "abc@gmail.com";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have a user email");
}

// Falsy Values
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN;

// Truthy Values

// [], {}, "0", 'false', " ", function(){};

// How to check array in JS.

const username = [];

if (username.length === 0) {
  console.log("Empty array");
}

// Empty Object check

const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("Empty object");
}

// Some Interesting facts

console.log(false == 0); // true
console.log(false == ""); // true
console.log([] == []); // false -> due to memory address allocation.
console.log({} == {}); // false -> due to memory address allocation.

// Nullish Coalescing Operator (??) => null, undefined

let value1;
value1 = 5 ?? 10;
value1 = null ?? 30; // If we get the null value from the DB then we can nullish coaleshing operator.
value1 = undefined ?? 50;
value1 = null ?? 10 ?? 40; // Here 1st value will be taken.
console.log(value1);

// Ternary Operator

// Syntax => condition ? true : false

const tea = 100;
tea <= 80 ? console.log("less than 80") : console.log("more than 80");
