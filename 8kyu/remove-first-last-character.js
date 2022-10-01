// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.slice(1,-1)
}

function removeChar2(str){
    let newStr = ''
    for(let i = 1; i < str.length -1; i++){
        newStr += str[i]
    }
    return newStr
}

/*
Create a function that removes the first and last character from a string. The function will only take one parameter of a string and the string will always be greater than two 
Returning a new string withouth the first and last characters
'Chase' => 'has'
'place' => 'lac'
'person' => 'erso'
Create a function removeChar, that takes one paramenter str (string)
Use string method to extract a new string, removing use slice()
str.slice(1,-1) the first paramenter represents the index we want to include and the last parameter represents the index/char that we want to exclude 

use a for loop 
Create an empty string variable to hold the new string 
    let newString = ''
for loop let i start at 1 to skip the first character 
    for(let i = 1)
and then to stop before the last character i less the length of the string -1 
    for (let i = 1; i < str.length-1; i++)
    with the body add the character into the newString
    newString += str[i]
    return the  newStrin
*/ 
