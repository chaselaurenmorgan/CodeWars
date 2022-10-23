// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


function digitize(n){
   return String(n).split('').map(Number).reverse()
}

/*
Create a function that returns the reverse order of numbers.  The numbers will be random non-negative numbers 
Return the reverse of the given array 
Example     
    35231 => [1,3,2,5,3]
    0 => [0]
Method 1.
to convert the number to an array must convert it to string 
    String(n)
convert the string to an array
    split('')
change the string inside of the array to a number 
    map()
then reverse the order of the array 
    reverse()
*/