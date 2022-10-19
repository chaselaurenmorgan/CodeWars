// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle.

function findNeedle(haystack){
    return `found the needle at position ${haystack.indexOf('needle')}`
}



/*
Create a function that take an array, returns the index of the 'needle' within the array
Returning a string 'found the needle at position ${arr}'
Example => ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
Create a funtion findNeedle that takes an array for a paramenter 
use indexOf() method on the array parameter 
insert the index number into a temperal literal 

*/