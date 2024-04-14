const arr = ["thor", "spiderman"];

const heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderman: function() {
    console.log(`Spidy power is ${this.spiderman}`);
  }
};

Object.prototype.javascript = function() {
  console.log("Javascript is available in all objects");
};

// heroPower.javascript();
// arr.javascript();

Array.prototype.printArray = function() {
  console.log("Array.printArray is available in all objects");
};

arr.printArray();

// heroPower.printArray(); // we will get error here because array will only have the power, not the object.

// inheritance

const user = {
  name: "JavaScript",
  email: "js@google.com"
};

const Teacher = {
  makeVideo: true
};

const TeachingAssistant = {
  isAvailable: false
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingAssistant // used for linking the Object, Prototypal inheritance
};

Teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(TeachingAssistant, Teacher);

let anotherUserName = "ChaiAurCode       ";
String.prototype.trueLength = function() {
  console.log(`${this}`); // current context is anotherUserName
  console.log(`True Length is :- ${this.trim().length}`);
};

anotherUserName.trueLength();
"JavaScript".trueLength();
"DreamCompany".trueLength();
