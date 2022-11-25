// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array){
    if(!Array.isArray(array) || array.length < 3) return 0

    let sum = 0 
    let max = Math.max(...array)
    let min = Math.min(...array)

    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum - max - min
}



/*
Create a function that takes one param (array) and calculates the sum array without  the highest and lowest number 
Return the sum without highest and lowest number 
Example   
    { 6, 2, 1, 8, 10 } => 16
    { 1, 1, 11, 2, 3 } => 6
Create a function sumArray 
Takes one param array 
Input validation
    Check if array is null  use  !Array.isArray(array) or 
    check the length of the array array.length < 3 
Create empty variables 
    min = Math.min(...array)
    max = Math.max(...array)
    sum = 0
To sum the array use the for loop add the elements to the sum 
    sum += array[i]
Subtract the max and min from the sum 
sum - max - min
*/