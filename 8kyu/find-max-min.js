// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

var min = function(list){
    
    return Math.min(...list)
}

var max = function(list){
    
    return Math.max(...list);
}

/*
Create two functions (max and min) that returns the largest and lowest intergers in the list 
Returning the largest interger in the list for the function max and returning the smallest interger in the list for the function min
Example 
    * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
    * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
    * [42, 54, 65, 87, 0]             -> min = 0, max = 87
    * [5]                             -> min = 5, max = 5
Create two funtions (min and max) each function takes an array 
Funtion max
    use the Math.max method with the rest parameters to find the largest integer 
Funtion min
    use the Math.min method with the rest parameters to find the smallest integer 
*/