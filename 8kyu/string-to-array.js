// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

    const stringToArray = function(string){
        return string.split(' ')
    }

/*
Create a function that turns a string into array with commas as the seperators 
One param a string 
Returing an array of string with a comma 
Example => Robin Singh" ==> ["Robin", "Singh"]
Use the spit method with the comma, to change the string into an array 
add the comma in between 
*/