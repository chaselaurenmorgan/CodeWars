// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]


/*
Create a function that takes two numbers that will two numbers and return the multiple of the first numbers in an array 
Two parameters that will be positive numbers 
Returning an array of the multiples 
Use the for loop to push it into an array 
start i at x and makes sure its <= n ; i++x 
*/


const countBy =(x,n)=>{
    let arr = []
    for(let i = x; i <= (x*n); i+=x){
        arr.push(i)
    }
    return arr
}



