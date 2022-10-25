// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num){
    return num < 0 ? num : -num
}


/*
Create a function that is given number and return a negative number. The number could already be negative 
Returning a negative number if the argument is positive or returning a number if negative 
Example -  
    makeNegative(1);    // return -1
    makeNegative(-5);   // return -5
    makeNegative(0);    // return 0
    makeNegative(0.12); // return -0.12
create a function declaration makeNegative that takes one paramenter num(number - or +)
    to check if the number is negative use the test condition of num < 0 
    if the num < 0 
    then return the number 
    else add -(number)
*/
