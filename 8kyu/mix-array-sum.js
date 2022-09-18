// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
    function sumMix(x){
        return x.map(Number).reduce((acc,c) => acc + c,0)
    }


/*
Create a function that converts an array into number and returns the sum of the array 
Returning a single number, from a sum of the array 
Example     
    [9, 3, '7', '3'] => 22
    ['5', '0', 9, 3, 2, 1, '9', 6, 7] => 42
    ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'] => 41
Create a function sumMix 
Takes 1 param (arr) x 
Convert the arr's ellements into numbers 
    map()
Then use array method to sum up the array 
    reduce()
*/

