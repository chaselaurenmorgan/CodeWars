// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    return x.reduce((total,num)=> total * num,1)
  }

/*
Create a function that takes a non empty array of numbers and returns and product of the elements of the array 
One param one array of non empty arrays 
Returning a number that will be the product of the numbers in the array 
Example [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
Use the reduce method and the multiply each element remember to set the initial value at one
*/





