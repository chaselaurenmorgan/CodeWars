// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter

const quarterOf = month => Math.ceil(month/3)

/*
Create a function that takes a param of month of interger and returns which quarter of yr it belongs to.
Returning a number, that represents the quarter of the month 
Example 
    3 => 1 
    6 => 2 
    11 => 4 
Create an arrow function quarterOf
Takes 1 param month (number)
Calculate the quarter 
Math.ceil(month/3)
*/
