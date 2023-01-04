// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// unary + 
const stringToNumber = str => +str

//Number Constructor 

function stringToNumber2 (str){
    return Number(str)
}

//parseInt

function stringToNumber2 (str){
    return parseInt(str)
}


console.log(stringToNumber('1234'))


/*
Create a function that convert a string into a number 
One parameter , string and the param will always be a string 
Returning a number 
Example => '1234' => 1234
How do we turn strings into numbers? 
    - Use unary + 
    - Number()
    -ParseInt 
*/
