// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

const liters = time => Math.floor(time * .5)


console.log(liters(2))
console.log(liters(1.4))
console.log(liters(12.3))
console.log(liters(.82))
console.log(liters(11.8))
console.log(liters(1787))
console.log(liters(0))

/*
Create a function that calculates how many liters of water will Nathan need to stay hydraded , rounded to the smallest number 
One parameter that will a interger or floating-point in hours 
Returning a number rounded to the smallest value 
Example => 3 * .5 = 1.5 => 1 
Calucate how many lites Nathan needs to drink 
0.5 per 1 hour => multiply the param by .5 
Round to the smallest value
Math.floor 

*/