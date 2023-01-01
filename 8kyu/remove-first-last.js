// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    let newString = ''
    for(let i = 1; i < str.length-1; i++){
        newString += str[i]
    }
    return newString
}


console.log(removeChar('eloquent'))
console.log(removeChar('country'))
console.log(removeChar('person'))
console.log(removeChar('place'))
console.log(removeChar('ooopsss'))

//slice method 

const removeChar2 = str => str.slice(1,-1)

console.log(removeChar2('eloquent'))
console.log(removeChar2('country'))
console.log(removeChar2('person'))
console.log(removeChar2('place'))
console.log(removeChar2('ooopsss'))


/*
Create a function that takes a string and will remove the first and last characters of the string. 
One param that will be string 
Returning a string with first and last character removed 
Use a loop 
    start at the 1 index and end it right before the last character 
slice method on the string 
*/

