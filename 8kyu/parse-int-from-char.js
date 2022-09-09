// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
    return parseInt(inputString)
}

/*
Create a function that returns a number from a string. The first character will be a string 
Returning an integer.
Example 
    "1 year old" => 1 
    "5 years old" => 5
Create a function getAge
Takes 1 param inputString(string)
Use parseInt to get the first number 
*/