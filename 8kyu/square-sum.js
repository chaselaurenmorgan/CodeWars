// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i] * numbers[i]
    }
    return sum
}


/*
Create a funtion that squares each element of the array and then returns the total sum. 
Returning a number, number will be the total sum of all the elements squared 
Example 
    [1,2]), 5; [0, 3, 4, 5]), 50; squareSum([]), 
Create a function squareSum that takes one parameter (arr of numbers)
multiply each item by itself to get the square number 
    for loop to iterate through each element 
    and multiply it by itself
return the total sum of the square elements 
    create a variable to hold the sum 
    in each iteration of the loop element in into the variable 
*/

