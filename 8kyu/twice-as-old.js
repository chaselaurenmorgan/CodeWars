// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearOld, sonYearOld){
    return Math.abs(dadYearOld - (sonYearOld * 2))
}

/*
Create a function that takes two params, age for father(number) and age of son(number). The function will calculate how many years ago the father was twice as as his son or how many years he will be twice as old 
Returning a number 
Example 
    36, 7 = 36 - (7*2) = 22
    50, 30 = 50 - (30 * 2) = 10 
Create a function twiceAsOld 
Two params dadYearOld, sonYearOld
return dadYear - (sonYearOld * 2 ) if the sonYearOld * 2 is greater that dadYearOld is should be subtracted first or 
you can use Math.abs to remove any negative and return the absolute value 
*/