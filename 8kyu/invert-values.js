// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

const invert = arr => arr.map(num => -num)

console.log(invert([1,2,3,4,5]))
console.log(invert([1,-2,3,-4,5]))
console.log(invert([]))

/*
Create a function that takes a number of arrays and returns the array with  the opposit of each number. (pos => neg, neg => pos)
One parameter an array with number 
Returning an array with numbers inversed 
Example [1,2,3,4,5] => [-1,-2,-3,-4,-5]
Use a map method since we are return the array with the same amount of elements 
*/