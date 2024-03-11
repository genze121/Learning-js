// this keyword is used to refer the current context.

const user = {
  username: "JavaScript",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  }
};

user.welcomeMessage();
user.username = "Sam"; // sam here is the context to the user.
user.welcomeMessage();

console.log(this); // here we will get empty object due to node engine but in browser we will be getting global window object.

function chai() {
  console.log(this);
}

chai();

// Using Arrow function

const chaiOne = () => {
  const username = "Chai";
  console.log(this); // undefined - no current context
};

chaiOne();

const addTwo = (numOne, numTow) => {
  return numOne + numTow;
}; // explicit return because we are using return statement

console.log(addTwo(10, 20));

// Implicit return in arrow function

const result = (numOne, numTwo) => numOne * numTwo; // without any function blocks.

const resultData = (numOne, numTwo) => numOne * numTwo; // without any function blocks.

console.log(result(10, 20));
console.log(resultData(10, 20));

/* Note :- If we are using curly - braces then we are required to return something by 
           using return statement, but if we are using brackets then we are not 
           required to use return statement. */

const usingObject = (numOne, numTwo) => ({ username: "JavaScript" }); // In order to access object in arrow function we need top wrap in parenthesis.

console.log(usingObject(10, 20));
