// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
    function getGrade(s1,s2,s3){
     let avg = (s1 + s2 + s3)/3 

     if(avg >= 90) return 'A'
     else if(avg >= 80) return 'B'
     else if(avg >= 70) return 'C'
     else if(avg >= 60) return 'D'
     else return 'F'
    }




/*
Create a function that calculates the average of three paramenters and return the letter that is associated with average.
Returning a string, which will be a letter that is asscociated with the calculated average of the params 
Example 
    95,90,93) => 'A'
    70,70,100) => 'B'
    65,70,59) => 'D'
Create a function getGrade
Takes three params (s1,s2,s3)(all will be numbers)
Create a variable to hold the sum of the three params 
To get the  avg divide the sum by three 
if the avg is >= 90 return A 
if the avg is >= 80 return B 
if the avg is >= 70 return C
else return F 
*/