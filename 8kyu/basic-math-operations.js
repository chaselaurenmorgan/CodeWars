// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOps(operation,value1,value2){

    switch(operation){
        case '+':
            return value1 + value2
        case '-':
            return value1 - value2
        case '*':
            return value1 * value2
        case '/':
            return value1 / value2
            default:
            return 'Not a valid operation'
    }

}

console.log(basicOps('+', 4, 7))
console.log(basicOps('-', 15, 18))
console.log(basicOps('*', 5, 5))



/*
Create a function that performs 4 of the basic math operations (-, +, * ,/) and return the evaluation of one those math operations on two values.
Three parameters => operation(string), and two numbers (value 1, and value 2)
Returning a number which will the result of the operation performed on the two values. 
Example => ('+', 4, 7) --> 11
    If else statement 
    Use a switch statement, no break is need because we are returning the statement.
*/




