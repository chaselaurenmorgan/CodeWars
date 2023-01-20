// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.


function areYouPlayingBanjo(name ){
    if(name.toLowerCase().startsWith('r')){
        return `${name} plays banjo`
    }
    return  `${name} does not plays banjo`
}




/*
Create a function that determines if you are playing banjo. The test condition is if your name starts with R, lower or upper, than you are playing banjo. Returning a string that state if the name is playing banjo or not 
One param which will be a string  that represents a name 
Returning a string with the name interpolated into string whether or not the person is playing banjo 
Check the first character of a name and need to make sure the name is not case sensitive 
name.toLowerCase.().startsWith('r')
acess the first char useing charAt() or []
name.toLowerCase().charAt(0) === 'r'
name[0].toLowerCase() === 'r'
*/