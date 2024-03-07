console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 == 2); // true
console.log(2 != 0); //true

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log("2" == 2);
console.log("02" == 2);
console.log("02" > 1);

/* 
==================================================================================================
Important note:-
==================================================================================================
The reason is that the equality check ==  and comparisons  > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why line no. 6 is true and line no 4 is false. 

==================================================================================================

*/


// === -> strict check -> It checks both value and datatype.

console.log("02" === 2);