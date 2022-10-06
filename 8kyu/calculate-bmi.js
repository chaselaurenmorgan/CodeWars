// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"


function bmi(weight,height){
    let bmi = weight / (height **2)
    if(bmi <= 18.5){
        return 'Underweight'
    }else if(bmi <= 25){
        return 'Normal'
    }else if(bmi <= 30){
        return 'Overweight'
    }else {
        return 'Obese'
    }
}

/*
Create a function that takes two paramenters (numbers), that will caculate the numbers and return a string 
Returning a string. The string will be based on the calcs of the body mass index 
Example 
    bmi(80, 1.80), "Normal"
Create a function bmi takes 2 paramenter (weight, height)
    create a variable of calc which will hold the calucation of the bmi (weight/height ** 2)
    if the calc is below or equal to return 'Underweight'
    else if the calc is equal to below 25 return 'Normal'
    else if the the cal equal to of below 30 return 'Overweight'
    as default return 'Obese'

*/