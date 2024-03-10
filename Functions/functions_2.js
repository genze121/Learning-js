// Example - 1

function calculatePrice(...numOne) {
  return numOne;
} // ... here indicates REST operator which bundles in array format.

console.log(calculatePrice(2, 3, 4));

// Example - 2

function calculatePrice(valueOne, valueTwo, ...numOne) {
  return numOne;
}

console.log(calculatePrice(200, 300, 500, 1000)); // 200 -> valueOne, 300 -> valueTwo, numOne -> [500,1000]

// Example - 3 -> with object

const user = {
  name: "JavaScript",
  price: 999
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.name} and ${anyObject.price}`);
}

console.log(handleObject(user));
console.log(
  handleObject({
    user: "Sam",
    price: 500
  })
);

// Eaxmple - 4 -> with arrays

const arr = [200, 300, 400, 500];

function array(arrayData) {
  return arrayData;
}

console.log(arr);
console.log([1000, 2000, 3000]);
