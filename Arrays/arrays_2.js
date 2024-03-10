const marvelHeros = ["thor", "Iron Man", "Spiderman"];
const dcHeros = ["Superman", "Flash", "Batman"];

marvelHeros.push(dcHeros);
console.log(marvelHeros);

console.log(marvelHeros[3][1]);

console.log(marvelHeros.concat(dcHeros));

const allNewHeros = [...marvelHeros, ...dcHeros];
console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = anotherArray.flat(Infinity); // creates arrays of arrays into new array.
console.log(real_another_array);

console.log(Array.isArray("JavaScript"));
console.log(Array.from("JavaScript"));
console.log(Array.from({ name: "JavaScript" })); // either create array from Keys or values, if not then we will get the empty array.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // converts all the variables into new array.
