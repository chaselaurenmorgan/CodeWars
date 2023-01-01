// Complete the square sum function so that it squares each number passed into it and then sums the results together.

const squareSum = arr => arr.map(el => el ** 2).reduce((total,el)=>total + el,0)



console.log(squareSum([1,2]))
console.log(squareSum([0, 3, 4, 5]))
console.log(squareSum([]))


const squareSum2 = arr => arr.reduce((acc,c)=> acc + c ** 2,0)

/*
Create a fucntion that takes an array of numbers that squares each numbers and adds the squared numbers together
One parameter an array of numbers 
Returning a number that is the sum of the squared numbers
Explample [1,2,2] => [1,4,4] =>9
How would square each number in array
    - use the map
    - use reduce method to sum up 
Just use the reduce method 
*/