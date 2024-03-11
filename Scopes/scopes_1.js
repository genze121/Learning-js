let a = 10;
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);

if (true) {
  let one = 10;
  const two = 20;
  var three = 30;
} // inside if it is block block - level - scope, and outside if it is global block - level - scope,

// console.log(one); // one is not defined.
// console.log(two); // two is not defined.
console.log(three); // 30

// using nesting of functions.

function one() {
  const username = "JavaScript";

  function two() {
    const website = "youtube";
    console.log(username); // JavaScript
  }

  //   console.log(website); // website is not defined.

  two();
}

one();

// Using if condition.

if (true) {
  const username = "JavaScript";
  if (username === "JavaScript") {
    const website = "Youtube";
    console.log(`Username is ${username} and website is ${website}`);
  }

  //   console.log(website); // outside the block - level - scope, so will be getting website is undefined.
}

// console.log(username); // outside the block - level - scope, so will be getting username is undefined.

// +++++++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5)); // Here we will not get any error as we are using function declaration.

function addOne(num) {
  return num + 1;
}

console.log(addTwo(6)); // Here we will get error as addTwo before initialization, because we are using function as reference and trying to call before initialization.

const addTwo = function (num) {
  return num + 1;
};
