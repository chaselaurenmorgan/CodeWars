// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"




/*
Create a function that calcuates the body mass index ((bmi = weight / height2). Returning differest string based on the bmi calucation 
Two params which will be numbers. weight and height 
Returning the following strings
    if bmi <= 18.5 return "Underweight"
    if bmi <= 25.0 return "Normal"
    if bmi <= 30.0 return "Overweight"
    if bmi > 30 return "Obese"
Example 16 => 'Underweight'     45 => 'Overweight'

*/



function bmi(weight, height) {
    const bmiCalulation = weight/(height **2)
      
    if(bmiCalulation <= 18.5){
       return "Underweight" 
    }else if(bmiCalulation <= 25){
      return "Normal"
    }else if(bmiCalulation <= 30){
      return "Overweight"
    }else{
      return "Obese"
    }
}
    

