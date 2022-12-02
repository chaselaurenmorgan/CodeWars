// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

    function expressionMatter(a,b,c){
    
    return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c))
    }


/*
Create a function that return the large number of every combination of the three given integers 
Returning a number, which will be the largest of all of the operations 
Example 
    1 * (2 + 3) = 5
    1 * 2 * 3 = 6
    1 + 2 * 3 = 7
    (1 + 2) * 3 = 9
Create a function expressionMatter
takes three params a,b,c => all integers 
    Use the combination above and replace it with the params 
    place each operation in a variable 
    use Math.max to find the largest number 
*/