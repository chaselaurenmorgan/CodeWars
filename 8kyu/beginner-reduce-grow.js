// Given a non-empty array of integers, return the result of multiplying the values together in order.

    function grow(x){
        let product = 1
        for(let i = 0; i < x.length; i++){
            product *= x[i]
        }
        return x
    }
/*
Create a function that takes an array as a parameter and return the result of multiplying all of the elements in the array 
Returning a number, result of the product of the array 
Example 
    [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
Create a function grow that take on parameter x (array)
To go through each element use a for loop 
Create an empty variable to hold the product 
return the product 
*/
