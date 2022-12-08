// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string



// function fakeBin(x){
//     let string = ''
//     for(let i = 0; i < x.length; i++){
//      x[i] >= '5' ? string += '1' : string += '0'
//     }
//     return string
//   }


const fakeBin = x => x.split('').map(num => num >= 5 ? 1 : 0).join('')

//   function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }



/*
Create a function that takes a string with filled with numbers and return a string where you replace any number greater than 5 with 1 and any number less than 5 with 0. 
One param a string with numbers 
Return a string with 0's and 1's
example => '55234678' => '11000111'
Use a for loop or the map method
*/


