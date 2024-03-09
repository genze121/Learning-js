// =============================================== Number =========================================================

const score = 500;
console.log(score);

const balance = new Number(1000);
console.log(balance); // [Number]

console.log(balance.toString()); // converts to string (object).
console.log(typeof balance); // gives the type of the balance.

console.log(balance.toFixed(2)); // generates two decimal places value after point.

console.log(balance.toString().length); // generates the length of the balance value.

const otherNumber = 125.8966;
console.log(otherNumber.toPrecision(5));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

// =================================================== Maths =====================================================

console.log(Math.PI); // generates the PI value.
console.log(Math.abs(-4)); // generates positive value from the negative.
console.log(Math.round(4.3)); // rounds of the value.
console.log(Math.ceil(4.1)); // choses the top value (Top value of 4 i.e 5).
console.log(Math.floor(4.2)); // choses the lowest value (Lowest Value will be 4).
console.log(Math.max(10, 3)); // gives the maximum value.
console.log(Math.random()); // generates the random value from 0 - 1 (0.1,0.5.......).
console.log(Math.sqrt(4)); // generates the sqare root value of 4 i.e 2.
console.log(Math.pow(2, 3)); // generates the power of 2 i.e 2^3 = 8.

console.log(Math.floor(Math.random() * 10) + 1); // generates value from 1 - 9.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min)) + 1);
