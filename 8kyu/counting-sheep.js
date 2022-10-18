// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(array){
    let total = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] === true){
            total += 1
        }
    }
    return total
}




/*
Create a function that counts the number of true in an array and returns the number
Returning a number, number will be the number of true
Example: 
    [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true] . => 17

1. Create a function countSheep that one parameter of an array 
2. Count/look for each true in the array 
        use a for loop 
3. if the element is === true 
   then add it to an empty variable to hold the sum 
*/