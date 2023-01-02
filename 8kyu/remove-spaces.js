// Write a function that removes the spaces from the string, then return the resultant string.

const noSpace2 = x => x.split(' ').join('')
console.log(noSpace2('8 j 8   mBliB8g  imjB8B8  jl  B'))



//for loop 

function noSpace(x){
    let string = ''
    for(let i = 0; i < x.length; i++){
      if(x[i] !== ' '){
        string += x[i]
      }
    }
    return string
  }


/*
Create a function that takes a string and returns a string without the white spaces 
One parameter a string that contains spaces 
Return the string without spaces 
Example => "8aaaaa dddd r     " -> "8aaaaaddddr"
How would I remove the white space on both sides of the string? 
Use the for loop 
can't use trim as it only removes the white from the beginning and the end but not inbetween the strings 
Also can use split and join
*/