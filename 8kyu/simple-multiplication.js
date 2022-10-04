// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9


/*
Create a function that takes one paramenter (number) and the paramenter is even multiply it by eight otherwise multiply it by nine.
Returning a number. If the number is even multiply by 8 otherwise multiply it by 9 
Example 
    2 => 18
    3 => 27 
    5 => 45
Create an arrow function simpleMultiplication 
that takes one paramenter - number 
if the number/paramenter is even multiply the parameter by 8 
    find if the paramenter is even 
        parameter % 2 === 0  
else multiply the number by 9 
*/
