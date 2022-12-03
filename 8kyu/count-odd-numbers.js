// Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n){
    const arr = []
    for(let i = 0; i < n; i++){
        if(i % 2 !== 0){
            arr.push(i)
        }
    }
    return arr.length
}

/*
Create a function that returns the number of odd numbers in a given parameter 
Returning a number, that represents how many odd numbers are in the argument 
Example 
    7  -> 3 (because odd numbers below 7 are [1, 3, 5])
    15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13]
Create a function oddCount 
One Parameter n - number 
Create an empty array to hold the odd numbers 
Use a for loop to push the odd numbers in the array 
return the length of the array 
*/