// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// Hint: Don't forget to check for bad values like null/undefined


function countingSheeps(arr){
    return arr.filter(Boolean).length
}


console.log(countingSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]))



/*
Create a function that takes an array and returing the number elements that are truthy
One param which will be an array of true and false
Returning the number of true in the array
example 

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true] = 17

  Remove the false out of the array we can use filter. To get the number of true in the array use the length property 
*/





