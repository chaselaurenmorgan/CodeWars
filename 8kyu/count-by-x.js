// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.


function countBy(x,n){
    let z =[]
    for(let i = 1; i <= n; i++){
        z.push(i * x)
    }
    return z
}


/*
Create a function that takes two parameters(numbers) and returns an array of the first number of multiples of the second number 
Returning an array with the first mulitples of the second number 
Example 
    countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
    countBy(2,5) === [2,4,6,8,10]
Create a function countBy() with two parameters (numbers)
Create an variable that holds an empty array 
for loop to go through each element 
for interation push the multiples into the empty variable 
*/