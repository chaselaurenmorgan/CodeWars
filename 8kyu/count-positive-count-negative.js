// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.


function countPositivesSumNegatives(input) {
    // your code here
  
    if(input === null || input.length === 0) return []
    
    let positiveCount = 0
    let negativeSum = 0
    
    for(let i = 0; i < input.length; i++){
      if(input[i] > 0){
        ++positiveCount
      }else{
        negativeSum += input[i]
      }
    }
    
    return [positiveCount, negativeSum]
  }




/*
Create an array that take an array of positive and negative number and returns an array with first elements of the count of positives and the second element will be the sum of the negative numbers. If the input is empty or nul return an empty array
Returning an array with two elements 
    - first element will be a count of the positve integers 
    -second element will be a sum of the negatibe integers 
Example => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]
1. Create a function that take an array 
    function name countPositivesSumNegatives and parameter will be an array(input
2. Go through each element in the input use a for loop 
3. if the element is positve
        then add it to a variable that will hold the positive sum
   else if the elements are negative 
        add to a variable that will hole the negative sum
    
   if the element is empty or null return an empty array 
*/