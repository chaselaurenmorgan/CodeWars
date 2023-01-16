// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
// function lovefunc(flower1, flower2){
//     // moment of truth
//     return flower1 % 2 === 0 && flower2 % 2 === 1 
//         || flower1 % 2 === 1 && flower2 % 2 === 0 ? true : false 
//   }

const lovefunc = (flower1,flower2) => (flower1 + flower2) % 2 !== 0



/*
Create a function that will return true if one flower is even and the other is  false otherwise return false 
Two params which will be numbers representing flower1 and flower2 
Returning a boolean 1,4-true   2,2 -false
If they are both even then they will both be divisible 2 

flower 1 % 2 === 0 and flower2  % 2 ===1 || flower1 % 2 === 1 and flower2 % 2 == 0 ? true : false 

one way to refactor this code is 
flower1 + flower2 !== 0
If both numbers are even they will be have a remainer of 0 once divided by  2
*/