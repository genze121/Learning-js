// for of

// Example - 1

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(`The value of num is : ${num}`);
}

// Example - 2

const greeting = "Hello World";
for (const greet of greeting) {
  console.log(greet);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India"); // It sets unique values so no duplicates will be allowed.
console.log(map);
console.log(map.get("USA"));
for (const key of map) {
  console.log(key);
}

for (const [key, value] of map) {
  console.log(key + ": " + value);
}

// Object

const myObject = {
  game1: "NFS",
  game2: "COD"
};

for (let [key, value] of myObject) {
  console.log(key + ": " + value); // We will get error saying object is not iterable.
}
