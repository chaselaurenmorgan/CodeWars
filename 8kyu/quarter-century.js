// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12


/*
Create a function that returns the quarter that a given months is in
One param (number) month 
Returning a number => the quarter that the month is in 
Example 3 => 1 
There are 4 quarters in year 
qtr 1  1-3
qtr 2  4-6
qtr 3  7-9
qtr 4  10 -12
3 months in each quarter 
Math.ceil(month/3)
Also could have done a if/else 
*/

const quarterOf = (month) => {
    // Your code here
    return Math.ceil(month/3)
  }