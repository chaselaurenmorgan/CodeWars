// We need a function that can transform a number (integer) into a string.

const numberToStrings = num => '' + num


console.log(numberToStrings(123))
console.log(numberToStrings(999))
console.log(numberToStrings(100))

/*
Creating function that takes a whole number and returning a string of that integer
One parameter, integer 
Returning a string version of the interger 
Example - 123 => '123', 999 => '999', -100 => '100'
How do we turn an integer into string 
concatentation with the + => '' + 123 
templatel literals => `${123}'
string  literals  => '123'
toString.() => (123).toString()
String  => String(123)
*/

