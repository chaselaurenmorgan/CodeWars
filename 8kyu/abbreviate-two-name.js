// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

    function abbrevName(name){
        let firstLetter = ''
        let secondLetter = ''
        for(let i = 0; i < name.length; i++){
            if(i === 0){firstLetter += name[i]}
            if(name[i] ===' '){secondLetter += name[i+1]}
        }
        return `${firstLetter.toUpperCase()}.${secondLetter.toUpperCase()}`
    }

/*
Create a function that returns two intials. The function will take one parameter (string)
Returing a string that will be the first character of the string capitalized followed by period and the last character capitalized
Example 
    Sam Harris => S.H
    patrick feeney => P.F
Create a function abbrevName, that takes one parameter -> name (string)
Create a empty variable to add the first letter 
Create an empty varialbe to add the second letter 
for loop 
    if string ==== the first character add it to the empty variable that holds the first letter 
    if string === to an empty character add the element that is next into the the second letter variable  
    return a `firstletter . secondletter` 
        inside the temperal literal add the toUpperCase() to capitalize the letters 
*/

