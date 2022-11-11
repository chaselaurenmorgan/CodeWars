// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatString(number, string){
    let repeatStr = ''
     for(let i = 0; i < number; i++ ){
        repeatStr += string
     }
     return string
}








//create a function that takes a number and a string as parameters and return the strings repeated by the number 
// returning a string, which will be string repeated by the number 
//(3, '*;') => '***' , (2, 'hello')=> 'hellohello'
//1. create a function with the two parameters number and strings 
//2. to make the string repeat. I could use the string method of repeat/ or I could use a for loop 
//3. I will make a for loop =>
    //4. create a variable to hold the repeated string 
    //5. within the loop start at 0, within the test that 0 < number, i++
    //6. for every iteration, add the string to the variable  