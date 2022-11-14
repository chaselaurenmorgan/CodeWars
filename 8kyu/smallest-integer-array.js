// Given an array of integers your solution should find the smallest integer. You can assume, for the purpose of this kata, that the supplied array will not be empty.
 
function findSmallestInt(args){
    return Math.min.apply(args)
}


/*
Create a funtion that takes an array of numbers and return the smallest number from the array. The array will not be empty
Returning a number, the number will be the smallest number in the array 
Example 
    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345
1. Create a function findSmallestInt thats takes an array (args)
    Smallest integer = min integer 
2. Find the smallest interger in an array Math.min.apply() method


*/