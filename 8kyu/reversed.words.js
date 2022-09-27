// Complete the solution so that it reverses all of the words within the string passed in.
    function reverseWords(str){
        return str.split(' ').reverse().join(' ')
    }

/*
Create a  funtion that takes one parameter (string) and returns the reverse of all of the strings that are passed in
Returning a a string, that is the reverse of the strings that are passed in the function
Example 
    "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
Create a function reverseWords that takes one parameter (str)
Use the reverse method()
 - convert the string into an array using split(' ')
    str.spli(' ') then add on the reverse method() 
    change the array back into the string method join(' ')
*/