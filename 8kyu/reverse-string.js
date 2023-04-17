// Complete the solution so that it reverses the string passed into it.

//for loop

const reverseString = str =>{
    let newString = ''
    for(let i = str.length - 1; i >= 0; i--){
        newString += str[i]
    }
    return newString
}

console.log(reverseString('world'))
console.log(reverseString('hello'))
console.log(reverseString(''))


//change to an array and then reverse it and then change back to a string 

const reverseString2 = str => str.split('').reverse().join('')

console.log(reverseString2('world'))
console.log(reverseString2('hello'))
console.log(reverseString2(''))


//change to arr with ...str, reverse it, change it back to str


const reverseString3 = str => [...str].reverse().join('')

console.log(reverseString3('world'))
console.log(reverseString3('hello'))
console.log(reverseString3(''))


/*
Create a function that will reverse the parameter 
One parameter which will be a string 
Returning a reverse of the parameter 
Example 'world' => 'dlrow', 'word' => 'drow'
How could we reverse the string 
use a for loop starting at the end of the word 
change the parameter to an array and then reverse it using the reverse method 
If we didn't want to add the split we can add into an array to change it into an array 
*/

