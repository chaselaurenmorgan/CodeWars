// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {

  return Math.floor(s * 27.7778)
}

/*
Create a function that calculates km per hour and returns it in cm per second
Return number, that is cm per seconds rounded down 
Example 
    1.08 --> 30
Create a function cockroachSpeed()
One param s(number)
Calcuate km per hour => cm per second 
    1 km per hour = 27.7778 cm per seconds 
*/