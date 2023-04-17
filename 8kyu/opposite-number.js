// Very simple, given an integer or a floating-point number, find its opposite.

const opposite = num => -num

console.log(opposite(1))
console.log(opposite(0))
console.log(opposite(-4.25))



/*
Creating a function that takes a number as a parameter and return the oppoite of that number
One parameter that will be an integer or floating point number
Returning the opposite of the integer or floating point number. If given the number 0 return 0
1 => -1  -234.43 => 234.43 0 => 0
How would we find the opposite number? 
use  - against the number 
Use a ternary to test for the 0 
num ? -num : 0 
In Js there is no negative 0, there is only one 0.
*/