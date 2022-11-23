// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

    function countSheep(num){
        let str = ''
        for(let i = 1; i <= num; i++){
            str += `${i} sheep...`
        }
        return str
    }


/*
Create a function that takes an non negative integer for a parameter and returns the string starting at 1 sheep... and ending with the parameter. 
Returning a string, that starts with 1 sheep... and ends param sheep...
Example 
    1 => '1 sheep...'
    3 => '1 sheep...2 sheep... 3 sheep'
Create a function countSheep that takes one parameter num(number)
To hold the string - create an variable with the empty string 
To loop through a given number use a for loop
    start the loop at 1 and end it when the given param is included 
    within the loop 
        add the string `${i} sheep...` into the empty variable 
Return the variable 
*/
