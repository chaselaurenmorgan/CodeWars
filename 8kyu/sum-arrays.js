// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

function sum(numbers){
    "use strict";
    let total = 0
    for(let i = 0; i < numbers.length; i++){
        total += numbers[i]
    }
    return total
}




/*
Create a function that takes an array of number as a parameters and returns the sum of the numbers as a single digit. If the array does not contain any numbers return 0
Create function sum(arrays)
Create an varible (total) which will hold the sum of the array
to add sum of the array to total use a for loop 
start at 0 and go through the length of the array 
for(let i = 0; i < array.length; i++)
for every iteration will add the element into the total variable 
total += arr[i]
return the total to get the sum of array 
*/