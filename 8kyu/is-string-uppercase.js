// Create a method to see whether the string is ALL CAPS.
String.prototype.isUpperCase = function() {
    // your code here
    return this==this.toUpperCase()
  }
/*
Create a function that takes one inpurt of a string, the function will check if the string is all caps 
Returning a boolean. True if the string is all caps and false otherwise 
Example 
    c => false 
    hELLo => false
    MAN => true 
Create a function isUpperCase that takes one paramater string 
compare the string to the uppercase version of that string 
string === string.toUpperCase()
*/
