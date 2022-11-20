// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

function isDivisible(number,x, y){
    return number % x === 0 && number % y === 0
}



/*
Create a function that takes three paramenters. Each parameter will be a positive, non-zero numbers(number, x,y). The function will return a boolean if the the number is divisible by both x and y.
Returning a boolean. True if the number is divisible by both x and y and false otherwise 
Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

Create a function isDivisible that takes three parameters 
param1 - number
param2 - x 
param3 -y
if the number is divisible by x and y 
    number % x === 0 && number % y === 0
return true 
else return false 
*/

