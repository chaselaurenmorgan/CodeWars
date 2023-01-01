// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//for loop 
function positiveSum(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            sum += arr[i]
        }
        sum += 0
    }

    return sum
}



//for each

function positiveSum3(arr){
    let sum = 0
    arr.forEach(num => num > 0 ? sum += num : sum += 0)
    return sum
}

//for of loop 

const positiveSum4 = arr => {
    let sum = 0
    for(let num of arr){
        if (num > 0){
            sum += num
        }
        
        sum += 0
    }

    return sum
}

//reduce 
const positiveSum5 = function(arr){
   return arr.reduce((total,num)=>{
        if(num > 0){
            return total + num 
        }
         return total + 0
    },0)
}

// filter and reduce 

const positiveSum6 = arr => arr.filter(num => num > 0).reduce((total,num)=> total + num,0)




console.log(positiveSum6([1,2,3,4,5]))
console.log(positiveSum6([1,-2,3,4,5]))
console.log(positiveSum6([]))
console.log(positiveSum6([-1,-2,-3,-4,-5]))
console.log(positiveSum6([-1,2,3,4,-5]))



/*
Create a function that takes an array of numbers  sums only the positive ones.
One param, which be an array of numbers 
Returning a single value
Examply [5,-5,5] => 5 + 5 = 10 
How do we get only the pos numbers? 
Use any of the loop to iterate through the array and test if it is greater than 0
Use the reduce method, elements in the arr are greater,than 0 and then add them
use filter method plus the reduce method to first filter only for the positve numbers and use the reduce method to sum the remaining numbers.  
*/