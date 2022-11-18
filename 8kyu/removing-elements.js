// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
    const newArr =[]
    for(let i =0; i < arr.length; i++){
        if(i % 2 === 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}




/*
Create a function that takes an array and returns an array with the first element and then it removes the next element. 
Returning an array with every other element 
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
Create a function that takes one paramenter (arr)
Create an variable to hold an empty array 
for loop to go through the array 
if the index % 2 === 0 then push it into the empty array 
then return the array 

*/