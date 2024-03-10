const arr = [0, 1, 2, 3, 4, 5];
console.log(arr[4]); // 4

const newArr = new Array(1, 2, 3, 4);
console.log(newArr[2]); // 3

// Array Methods

console.log(newArr.length); // gives the total length of the array.
console.log(newArr.push(5)); // push the new value to the array at the end index i.e 5.
console.log(newArr.pop()); // removes the last index value from the array i.e 5.
console.log(newArr.unshift(8)); // inserts the elements at the start of the array.
console.log(newArr.shift(8)); // removes the elements from the start of the array.
console.log(newArr.includes(5)); // checks whether the element is present in the array or not.
console.log(newArr.indexOf(2)); // returns the index of the first occurence of the value in the array, if the value is not present then we will get -1.
console.log(newArr);

// slice and splice.

console.log("A", newArr);

const myn1 = newArr.slice(0, 3); // start,end-1
console.log(myn1);

console.log("B", newArr); // Does not manipulates the array.

const myn2 = newArr.splice(1, 3);
console.log(myn2);

console.log("C", newArr); // manipulates the array.
