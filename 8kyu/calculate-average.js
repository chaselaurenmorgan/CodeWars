// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(arr){
    if(arr.length === 0){
        return 0
    }

   return arr.reduce((total,num)=>total + num,0)/arr.length
}


/*

Create a function that calculates the average of the number in an array.
One param one array with them number 
Returning 0 for empty arrays and summing the array and divide it 
Example => [1,1,1] =1 
Use and if statement to  test if array is empty and return 0 
Use the reduce method to get the sum of the array and divide it by the length of the array
*/