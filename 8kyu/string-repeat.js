// Write a function that accepts an integer n and a string as parameters, and returns a string of s repeated exactly n times.

//for loop 

function repeatStr(num,str){
    let strRepeat = ''
    for(let i = 0; i < num; i++){
       strRepeat += str
       
    }
    return strRepeat
}

console.log(repeatStr(5,'hello'))

// repeat method 

const repeatStr2 = (num,str) => str.repeat(num)


console.log(repeatStr2(3,'*'))


//while loop 

function repeatStr3(num,str){
    let i = num 
    let string = ''

    while(i > 0){
        string += str
        --i
    }

    return string
}

console.log(repeatStr3(3,'!'))


/*
Create a function that takes an interger and a string as param and return the string repeated as the interger 
Two params , integer and a string 
Returning a string. The string will be repeated whatever the ingters is entered 
- Will it ever be empty? No
- Will it be 0? No 
How do we repeat a string? 
Use a for loop and iterate the amount of the integer 
Use the .repeat()
Use a while loop 
*/

