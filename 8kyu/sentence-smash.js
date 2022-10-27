// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!


const smash = word => word.join(' ')


/*
Create a function that takes an array and joins the all the elements with a space between each word.
Return a string that has a space between each word 
Example: ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
Create an arrow function name smash that takes one paramenter will be an array 
use the array method of join(' ') and a space between to use as a seperator 
*/
