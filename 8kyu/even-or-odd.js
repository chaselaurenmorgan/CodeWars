// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const evenOrOdd = num => num % 2 === 0 ? 'Even': 'Odd'

console.log(evenOrOdd(2))
console.log(evenOrOdd(7))
console.log(evenOrOdd(-42))





/*
Creating a function that takes a numbers as argument and returns even for even numbers and odd for odd numbers.
Takes in one parameter => number 
returning 'Even' for even numbers or 'Odd' for odd numbers 
10 => 'Even', 11 => 'Odd'
How to check if a number is even? 
    - if it divisible by 2 with no remainer than that means   it is even other wise it is odd.
    Use a ternary withing the function 
numbers % 2 === 0 ? 'Even' : 'Odd'
 */