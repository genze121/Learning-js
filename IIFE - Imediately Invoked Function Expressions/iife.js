// IIFE - to remove from global scope pollution we use IIFE to execute immediately.

function chai() {
    // named IIFE
  console.log(`DB Connected !!`);
} // normal function declaration

chai();

(function chaiPeelo() {
  console.log(`Chai Peelo Bhai Log !!`);
})(); // We generally have problem with global scope pollution maximum times, so to remove global scope variable decalaration pollution we use IIFE.

// using arrow function
(() => {
  console.log("Interview crack karna hai !!");
})(); // Important Note :- Suppose if we fail to end the function with semi - colon (;) and use other IIFE function then we will get error, in order to make it error free we have to close with semi - colon (;).

(function aurCode() {
  console.log(`JavaScript is the best programming language!!`);
})();

((name) => {
  console.log(`${name} welcome to JavaScript course.`);
})("Sam");
