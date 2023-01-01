// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

//ternary 
const makeNegative = num => num < 0 ? num : -num

console.log(makeNegative(9))
console.log(makeNegative(-5))
console.log(makeNegative(0))
console.log(makeNegative(0.12))

//if statement

const makeNegative2 = num =>{
    if(num < 0 ){
        return num
    }
    return -num
}


//Math.abs 

const makeNegative3 = num => -Math.abs(num)

// console.log(makeNegative2(1))
// console.log(makeNegative2(-5))
// console.log(makeNegative2(0))
// console.log(makeNegative2(0.12))


/*
Create a function that check if a number is negative if it is not negative make it negative or else return the negative 
One parameter that will be an interger or floating number, could be positive or negative
Returning the negative version of the number if it not already negative 
Example 1 => -1 , -5 => 5, 0 => 0
How could we determine if the number is negative ? 
if a number is greater than 0 then it is positive and if less than it's negative 
Do this with a ternary or if statement and use the - to inverse the 
Use the Math.abs() to return the absoulte value of a number 
*/