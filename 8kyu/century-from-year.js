// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.Given a year, return the century it is in.



const century = year => Math.ceil(year/100)

console.log(century(1705))
console.log(century(1900))
console.log(century(1601))



/*
Create a function that takes the year and returns the century it is in. 
One param => number => representing the year 
Returning a number => representing the century 
Example 1705 => 8 , 1900 => 19 
First calculate the century
divide the years by 100
Next use Math.ceil to round up 
due the century spanning from 1 year to 100, and 101 mean that it is in the next century 
*/








