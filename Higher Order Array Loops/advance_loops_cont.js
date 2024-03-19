const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.map((element) => element + 10);
console.log(newNums); // returns new array

// Understanding chaining

const newNumber = myNumbers
  .map((element) => element * 10) // creates new array with the elements multiplying with 10.
  .map((element) => element + 1) // add 1 with newly created array i.e [10,20,30,40,50,60,70,80,90,100]
  .filter((element) => element >= 40); // checks element with greater than and equals to 40. (Gives true and false)

console.log(newNumber);
