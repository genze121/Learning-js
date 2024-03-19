const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "ruby",
  swift: "Swift by apple"
};

console.log(Object.keys(myObject)[0]); // Extracting object key with the index number.
console.log(Object.values(myObject)[0]); // Extracting object value with the index number.

// Iterating object - for in loop

for (const key in myObject) {
  console.log(myObject[key]);
  console.log(`${key} shorcut is for ${myObject[key]}`);
}

// Arrays with for in loop

const programming = ["js", "rb", "py", "java"];
for (const array in programming) {
  console.log(array); // In arrays we get keys while using for in loop.
  console.log(programming[array]);
}

// Map with for in loop

const map = new Map();
map.set("js", "javascript");
map.set("py", "python");
map.set("rb", "ruby");
map.set("cpp", "c++");

for (const data in map) {
  console.log(data); // In map we will get no ouput having no errors.
}
