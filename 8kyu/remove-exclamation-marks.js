// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

    function removesExclamationMarks(string){
        let str = '' 
        for(let i = 0; i < string.length; i++){
            if(string[i] !== '!'){
                str += string[i]
            }
        }
        return str
    }


console.log(removesExclamationMarks('!!!'))
console.log(removesExclamationMarks('!Hello World!'))



/*
1.Create a function that removes all of exclamation marks from a string
2. Returning a string without exclamation marks 
3. 'Hello World!' => 'Hello World' '!!!'=> ''
(Method 1)Create a function declaration name removesExclamationMarks and it takes only one parameter, which will be a string 
To check each individual letter us a for loop starting at 0 and looping it's way through the length of the string 
Within the curly brackets run a test conditional 
if letter is not equal to ! 
then return the letter 
Create variable to hold the string without the '!'
(Method 2) use the string method of replaceAll
*/
