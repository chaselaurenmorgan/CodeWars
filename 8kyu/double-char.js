// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str){
    let newStr = ''
    for(let i = 0; i < str.length; i++){
        newStr += str[i] + str[i]
    }
    return newStr
}



/*
Create a function that doubles the character in the given param(string)
Returning a string, string will have the characters doubled 
Example 
     "String"      -> "SSttrriinngg"
     "Hello World" -> "HHeelllloo  WWoorrlldd"
     "1234!_ "     -> "11223344!!__  "
Create a function doubleChar 
Takes one param string, str
Create a variable to hold the empty string to push the double char into = let newstr
for loop to add chars to the string 
for(let i = 0 ; i < str.length; i++)
To push the char into the string twice 
    newStr += str[i] + str[i]
return newStr
*/