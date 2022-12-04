// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n){
   const arr =[]
    for(let i = 0; i <= n; i++){
        arr.push(2 ** i)
    }
    return arr
}

/*
Create a function powersOfTwo that takes an integer and return that a list ** 2 with exponent ranging from and including n 
Returning an array, that consist of list exponent **2 of the param 
Example 
    n = 0  ==> [1]        # [2^0]
    n = 1  ==> [1, 2]     # [2^0, 2^1]
    n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
1. Create an empty array withing a variable 
    const arr = []
2. iterate through the number for loop 
3. for loop will start with 1 and go to/include n 
    for(let i = 1; i <= n; i++)
4. push the powers of two into the arr 
    arr.push(i ** 2)
5. return arr 

*/