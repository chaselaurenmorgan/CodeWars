// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.


function isDivisible(n, x, y) {
    return n % x === 0 &&  n % y === 0
  }
  

/*
Create a function that test the condition of if x is divisible by both x and y 
Three params that will be a number 
Returning a boolean true if x is divisible by both x and y  and false otherwise 
Example 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
use && to test both conditions to see if n % y === 0 and n % x === 0
*/