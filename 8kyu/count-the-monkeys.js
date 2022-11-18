// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(number){
    const monkeys = []
    for(let i = 1; i <= number; i++){
        monkeys.push(i)
    }
    return monkeys
}


/*
Create a function that takes a number as a parameter and returns an array with all the numbers up to and including the number, but excluding 0.
Returning an array. The array will include the numbers up to and including the given argument excluding 0
Example    
    10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
     1 --> [1]
Create a function that takes one parameter (number)
create a variable that will hold an empty array - to push the numbers into 
To add the numbers into empty variable use a for loop starting at 1, to exclude the 0, 
withing the body of the loop push the numbers into empty array variable 
then return the array variable  
*/