//Create a function that return the sum of all the positive numbers from an array


function positiveSum(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i]
        }
    }
    return sum
}



//Create a funtion that takes an array and it will add up the positve number into a single answer 
//returning a number that is the total of the positive numbers in the array 
//[1,-4,7,12] => 1 + 7 + 12 = 20
//create a variable to hold the total of the sum 
//create a for loop to loop through each element in the loop 
//within the for loop if the number is greater than 0 then add it to the variable that holds the sum 