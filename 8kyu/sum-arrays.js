// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.


const sum = arr =>arr.reduce((total,num)=> total + num,0)

console.log(sum([]))
console.log(sum([1, 5.2, 4, 0, -1]))



/*
Create a funvtion that takes an array of numbers and returns the sum of those numbers
One parameter an array of numbers 
Returning the sum of those of numbers and if it is empty returning zero
Example [1,2,3,4] =>10 [0] => 0,  [-89] => -89
Use the reduce method to sum the array into a single value 
    - make sure the intial value is set to 0 to solve for the empty arrays.
*/