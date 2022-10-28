// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


function fakeBin(x){
    let str = ''
    for(let i =0; i < x.length ; i++){
        if(x[i] < 5){
            str += '0'
        }else {
            str += '1'
        }
    }
    return str
}




/*
Create a functions that is given a string of numbers for one paramenter. The function will replace any number that is below 5 with '0' and number above 5 with '1'. The argument will never be an empty string
Returning a string of numbers that will either be '1' if it is above = 5 and '0' if it is below 5
Example '45623' => '01100'
Create a function declaration name fakeBin that take only one parameter 
    - to go through each number use a for loop that goes the through the lenght of the  string 
        if number is < 5 
            then replace it with '0'
        else replace it '1'
*/