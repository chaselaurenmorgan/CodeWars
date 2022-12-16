// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]



/*
Create a function that takes a number that will be greater than 0 and return an array of the numbers that count up to that number in reverse order. 
One param of number 
Returning an array with the numbers in reverse 
Use for loop and count backwards 
*/


const reverseSeq = n =>{
    let arr = []
    for(let i = n; i > 0; i--){
    arr.push(i)
    }

return arr
}
