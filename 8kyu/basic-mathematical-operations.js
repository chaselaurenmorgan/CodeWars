// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation,value1,value2){
    switch(operation){
        case '+' :
            return value1 + value2
            break;
        case '-' :
            return value1 - value2
            break;
        case '*' :
            return value1 * value2
            break;
        case '/' :
            return value1 / value2
            break;
    }
}

/*
Create a function that takes three arguments - operation(string), value1(number), value2(number) and returns the result of numbers after applying the chosen operation. 
Return a number. The number should be the result after applying the chosen operation
Example 
    ('+', 4, 7) --> 11
    ('-', 15, 18) --> -3
    ('*', 5, 5) --> 25
    ('/', 49, 7) --> 7
Create a function basicOp, that takes three parameters, operation, value1, value2 
Use a switch Case to test all of the operations without concat

*/