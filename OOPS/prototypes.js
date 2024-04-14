function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {}

// Note :- function references to Object

function createUser(username, score) {
  this.username = username; // this is generally used for setting up the current context.
  this.score = score;
}

// creating own function using prototype

createUser.prototype.increment = function() {
  this.score++; // jisne bhi bulaya uska bata doh.
};

createUser.prototype.printMe = function() {
  console.log(`Score is ${this.score}`);
};

const data1 = new createUser("JS", 10);
const data2 = new createUser("JavaScript", 200);

data1.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
