const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI); // 5 will not be updated here because Math.PI is a constant and cannot be changed.

const javascript = {
  name: "ginger javascript",
  price: 250,
  isAvailable: true,

  orderjavascript: function() {
    console.log("javascript is not working properly");
  }
};

console.log(Object.getOwnPropertyDescriptor(javascript, "name"));

Object.defineProperty(javascript, "name", {
  //writable: false,
  enumerable: true
});

console.log(Object.getOwnPropertyDescriptor(javascript, "name"));

for (let [key, value] of Object.entries(javascript)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
