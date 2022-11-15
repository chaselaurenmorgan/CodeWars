// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

const invert = array => array.map(x => -x)

function invert2 (array){
    const inverse =[]
    for (let i = 0; i < array.length; i++){
        inverse.push(-array[i])
    }
    return inverse
}





/*
Create a function that takes an array of number and return the inverse value of each element. Positive number will becomne a negative and negative will become a positive.
Returning an array with the opposite value 
Example
    invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
    invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
    invert([]) == []
Method 1 
    Create a function arrow with one paramenter 
    use the map() on the parameter
    take the  element an add - 

Method 2 
    Create a function declaration with one parameter (array)
    create a variable to hold an empty array - to hold the inverse values 
    for loop starting at 0 and go through an entire array  
    during each iteration push in the elemnt with a - to add the inverse element into the empty array 
    return the empty array 
*/