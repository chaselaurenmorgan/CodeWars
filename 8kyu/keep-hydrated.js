// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time){
    return Math.floor(time * .5)
}


/*
Create a function that takes one parameter (time) and returns the number of liters needed to drink rounded to the smallest value
Returning a number. The number should be multiplied against the time and rounded down to the smallest value
Example 
    time = 3 ----> litres = 1
    time = 6.7---> litres = 3
    time = 11.8--> litres = 5
Create a function that takes one parameter 
to get the amount of liters - multiply the .5 against the time from the arguments and round down 
example Math.floor(3*.5)
*/