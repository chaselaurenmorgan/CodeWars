// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

function solution(a,b){
    return a.length > b.length ? b+a+b : a+b+a
}

/*
Create a funtion that takes 2 strings as param return the shorter string on the outside on both sides and the longer string will be in the middle
Returning a string 
Create a function solution 
takes two params (string)
if the lenght of string one is greater that string 2 then return string 2 + string1 + string 2 else return string 1 + string 2 + string 1 
Use a ternary operator
*/