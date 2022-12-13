// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


const smash = words => words.join(' ')

/*
Create a function that takes an array of words and joins them together in the sentence. 
One param, an array of words 
Returning a string 
Use the join the method to turn the array into a string
*/