// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a,b){
    const arr =[]
    for(let i = a; i <= b; i++){
        arr.push(i)
    }
    return arr
}

/*
Create a function between 
Two parameters of a and b (numbers)
Returning an array, that list all of the number between a and b 
Example 
  (between(1, 4), [1, 2, 3, 4] 
   (between(-2, 2), [-2, -1, 0, 1, 2]
Withing the function we can use a for loop to push number into an arr 
1. need an variable that holds the empty arr 
    const arr = []
2. for loop 
    start our loop at a and loop should continue to b 
    for(let i = a; i <= b; i++)
3. push it into the arr 
    arr.push[i]
4. return the arr 
*/