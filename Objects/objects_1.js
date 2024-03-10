// we can declare objects using literal and by using new keyword.

// By using Object Literals.

const user = {
  name: "JavaScript",
  language: "programming"
};

console.log(`User is ${user.name} and language is ${user.language}`);

const mySymbol = Symbol("key1");
const JsUser = {
  name: "JavaScript",
  "full name": "Learning JS",
  age: 30,
  location: "USA",
  email: "js@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
  [mySymbol]: "mykey1"
};

// There are two ways to access the JS Object.
console.log(JsUser.email); // using dot.
console.log(JsUser["email"]); // using square bracket giving the key in string format.
console.log(JsUser["full name"]);
console.log(JsUser[mySymbol]);

JsUser.email = "js@chatgpt.com";
Object.freeze(JsUser); // It will not allow us to modify the object.
JsUser.email = "js@microsoft.com";

console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello Js user");
};

JsUser.geetingTwo = function () {
  console.log(`Hello JS user ${this.name}`);
};

console.log(JsUser.geetingTwo());

console.log(JsUser);
