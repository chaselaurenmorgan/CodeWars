// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.


function countPositivesSumNegatives(arr){
    let posCount = 0
    let negCount = 0

    if(!arr || arr.length === 0){
        return []
    }

    arr.forEach(num => {
        if(num > 0){
            posCount ++
        }else if(num < 0){
            negCount += num
        }
    })
    return [posCount,negCount]
}


console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))



/*
Create a function that takes an array that sum the positeve and negative numbers and returns a single array where the 1st index represents the positive sum and the 2nd element is the sum of the negative count 
One parameter => array of integers 
Returning an array => [posSum, negSum]
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]
a for each method 
test to see if the array contains 0, [], null and return 0 (check first)
posCount for the posSum
negCount for the negSum 
put the variables into an array 
*/
