// Complete the solution so that it reverses the string passed into it.


function reversedString(word){
    let reverseStr = ''
    for(let i = word.length-1; i >= 0; i--){
        reverseStr += word[i]
    }
    return reverseStr
}

//Create a function that takes in a word and returns the reverse the version of that word
//Returning a string that is the reversed of the argument 
// 'world' => 'dlrow'   'hi' => 'ih'  '' => ''
//create a variable to hold the reversed string 
//create a loop, using the for loop
    // within that loop we want the initializer to start at the end of the word 
    // and the condition to run before it evaluates to false would be the initizer = end of the string to be greater than or equal to zero
    //decrement by until we get to zero 
    //withing the body for each iteration add the index of the word into the variable that we created  to hold the reverse string
//return the string 