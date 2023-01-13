// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

function abbrevName(name){

    return name.split(' ').map(el => el[0].toUpperCase()).join('.')
 
 }




/*
Create a function that takes a string that is a name and returns it into an initial. 
One param a string with two words with one space between them 
Returning a string that will be two capitalize letters with dots seperating them
Example => Sam Harris => S.H
Need some way to access the first letters of each word 
Can change it into array with split(' ') => ['Sam', 'Harris']
Use the map method to grab the first index of element and upperCase it 
map(el => el[].toUpperCase())
Then join them back together with the join method and a period 
*/