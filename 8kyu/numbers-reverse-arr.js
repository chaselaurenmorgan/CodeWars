// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


function digitize(n) {
    //code here
    return n.toString().split('').map(Number).reverse()
  }


/*
Create a function that takes non negative and return in them in array in reverse order. 
One paramenter a non negative number 
Returning the numbers in an array in reverse order 
Example => 35231 => [1,3,2,5,3]
Change the number to a string 
    - use toString() => '3','5','2','3','1'
Now change string to an an array split method => ['3','5','2','3','1']
Now change the strings within the array to number with the map 
[ 1, 3, 2, 5, 3 ]
Then reverse it with the reverse method 
*/