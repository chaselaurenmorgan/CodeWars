// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.


function summation(num){
    let sum = 0
    for(let i = 0; i <=num ; i++){
        sum += i
    }
    return sum
}



/*
Create a function that takes number and finds the sum of every number from 1 to the parameter. 
Returning a number. The numbers should be  the total of every number from 1 to the number that given the argument
Example 
    summation(2) -> 3
    1 + 2

    summation(8) -> 36
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
Create a function summation with one parameter - number 
Create a variable that holds the total of = 0
Use a for loop to go through the number starting at 0 and ending with the argument 
inside loop add the numbers to the variable 
return the variable that holds the sums of the total numbers 

*/