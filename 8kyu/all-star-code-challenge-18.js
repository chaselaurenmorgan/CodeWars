// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

function strCount(str,letter){
    const arr = []

    for(let i = 0; i < str.length; i++){
        if(str[i]=== letter){
            arr.push(str[i])
        }
    }
    return arr.length
}



/*
Create a funtion that takes two string parameters and returns how many the 2nd parameters is found in the first one 
Parameter will be two strings. The first can be an empty string and the second string will always be at least 1 
Returning a number of how many times the 2nd string appears in the 1st and if there are no occurance return 0 
Example 
    ("Hello", "o")  ==>  1
    ("Hello", "l")  ==>  2
    ("", "z")       ==>  0
Create the function strCount 
Two paramenters (str,letter)
if loop through each char of the string and if the char is the same as the 2nd param, push it into an array 
then return the length of the arr 
Within the function 
cont arr = []  an empty arr to hold mathing char
for loop 
for(let i = 0; i < str.length; i++){
    if(str[i]=== ){
        arr.push(str[i])
    }
    return arr.length 
}
*/