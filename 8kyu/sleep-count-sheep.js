// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.



/*
Create a function that take an integer and return a string based on that interger
One parameter will be a positive number 
Returning the `${interge}...sheep repeated as many time as the integer with intger being in being countied out 
Example 3 =>  "1 sheep...2 sheep...3 sheep..."
Creat a for loop and return a string counting the number of sheeps 
*/


const countSheep = num =>{
    let sheepStr = ''

    for(let i = 1; i <= num; i++){
        sheepStr += `${i} sheep...`
    }
    return sheepStr

}