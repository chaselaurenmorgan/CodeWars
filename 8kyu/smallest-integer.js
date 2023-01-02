// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

const smallestInt = arr => arr.sort((a,b)=> a -b)[0]




const smallestInt2 = arr => Math.min(...arr)

console.log(smallestInt2([78,56,232,12,8]))
console.log(smallestInt2([78,56,232,12,18]))
console.log(smallestInt2([78,56,232,412,228]))
console.log(smallestInt2([78,56,232,12,0]))
console.log(smallestInt2([1,56,232,12,]))



/*
Create a function that takes an array of numbers and return the smallest number
One param => arr of numbers 
Returning a the smallest integer 
Example [12,89,99] => 12 
How could sort this? 
Use the sort method (sort just returns an array )but if you access the first index that should be the smallest 
Also can use the Math.min(...array) to spread the operator 
*/