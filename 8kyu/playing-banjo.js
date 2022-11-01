// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name){
    return name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not plays banjo`
}


console.log(areYouPlayingBanjo('Adam'))
console.log(areYouPlayingBanjo('Ringo'))
console.log(areYouPlayingBanjo('bravo'))
console.log(areYouPlayingBanjo('rolf'))




/*
Create a function that answers the question 'Are you playing banjo?'. This function only has one parameter, name(string), and it will return a certain string based on if the the paramenter of name begins with an r. The argument will always be a valid string
Returning one of the following strings: 
    name + " plays banjo"  / if name starts with an 'r' or 'R'
     name + " does not play banjo" / if names does not start with 'r' or 'R'
Examples are the following: 
    (areYouPlayingBanjo("Adam"), "Adam does not play banjo");
    (areYouPlayingBanjo("Paul"), "Paul does not play banjo");
    (areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
    (areYouPlayingBanjo("bravo"), "bravo does not play banjo");
    (areYouPlayingBanjo("rolf"), "rolf plays banjo");
1. Create a function declation areYouPlayingBanjo 
    -  one parameter name - which will be a string 
2. if the name begins with 'r' or 'R' 
        - to access the the first letter use property accesss the index 0 and for the case sensitive change it tolowerCase
    then return name + " plays banjo"  
    else return name + " does not play banjo"
*/

