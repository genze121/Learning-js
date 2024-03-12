// {} => Global Execution Context -> this(known as window object in browser)

// Global Execution Context
// Function Execution Context
// Eval Execution Context

// JS runs in two phases :-

// 1) Memory Creation Phase - like allocation to variables etc.
// 2) Execution Phase

// 1. Global Execution -> this

// 2. Understanding of First Cycle Phase - Memory Creation Phase

// Using code to understand

let val1 = 10;
let val2 = 20;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 30);

/* 
val1 -> undefined
val2 -> undefined
addNum(num1,num2) -> definition
result1 -> undefined
result2 -> undefined */

// 3. Execution Phase

/* val1 -> 10
val2 -> 20
addNum(val1,val2) -> new variable environment + exceution thread -> creates new excetion context for the function.
        // Memory Phase  
        val1(num1) -> undefined
        val2(num2) -> undefined
        total -> undefined

        // Execution Phase
        num1 -> 10
        num2 -> 20
        total -> 30 -> It returns to global execution context. 
        
        Note :- Global execution phase gets deleted after the completion.
        
        */

// Call Stack

/* 
|                    |
|                    |
|                    |
|                    |
|                    |
|  one()             |
|====================|
|_Global Execution___| 

*/