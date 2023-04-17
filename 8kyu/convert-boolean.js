//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//if statement 

function boolToWord(boolean){
    if(boolean){
        return 'Yes'
    }

    return 'No'
}

console.log(boolToWord(true))
console.log(boolToWord(false))

//ternary 

const boolToWord2 = boolean => boolean ? 'Yes' : 'No'


console.log(boolToWord2(true))
console.log(boolToWord2(false))

//access the array 

const boolToWord3 = bool => ['No','Yes'][+bool]


console.log(boolToWord3(true))
console.log(boolToWord3(false))




/*
Create a funtion that takes a boolean value (true/vale) and return 'Yes' for or 'No' for false 
One parameter => boolean 
Returning => string 'Yes' for true 'No' for false 
Example true => 'Yes' , false => 'No'
Will ever be anything else other than true or false? No
Use a condition to check for truthy or falsy 
Use ternary for a one line or and if statement 
Additional, another way would to put the strings in an array 
    ['No','Yes'] no is the 0 index position and Yes in the 1 position we access the array with the square notations 
     ['No','Yes'][+bool] <= by adding the + to the bool it change it 0 or 1 since true === 1 and false === 0 
*/