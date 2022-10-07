// Write a function which calculates the average of the numbers in a given list.

    function findAverage(array){
        if(array.length === 0) return 0
        let sum = 0
        for(let i = 0; i <array.length; i++ ){
            sum += array[i]
        }
        return sum / array.length
    }


/*
Create a function that takes and array and returns the average of the numbers 
Returning a number that is the average of the elements in the array 
Example 
    [1,1,1])=> 1
    [1,2,3])=> 2
    [1,2,3,4])=> 2.5
Create a funtion findAverage takes 1 parameter that will be array \
for validatation 
if the array is empty return 0
to caculate the average 
add all of the elements up into one total sum 
    create a variable of sum = 0 to hold the sum of the elements 
    for loop to add the elements into the sum variable 
        for(let i = 0; i < arr.length; i++)
            within the loop sum += arr[i]
divide the sum by the amount of elements in the array
    return sum / arr.length 
*/