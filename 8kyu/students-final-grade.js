// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade (exam, projects) {
    if(exam > 90  || projects > 10 ){
      return 100
    }else if(exam > 75  && projects >= 5 ){
      return 90
    }else if(exam > 50  && projects >= 2 ){
      return 75
    }else {
      return 0
    }
  
  }
/*
Create a function that returns a number that meet the certain conditions 
Returning a number, which will be the grade, the number will be the following :
100  if the exam is greater than || completed more than 10 projects 
90  if the exam is more 75 && project completed is no less than 5 
75  it the exam is more than 50 &&  completed no less than 2 projects 
anything else will be 0 
Example 
    100, 12 --> 100
    99, 0 --> 100
    10, 15 --> 100
Create a function finalGrade 
Takes two parmas (exam, projects) (numbers )
conditional of is/else if/eles 
if(exam is > 90  || projects > 10 ) return 100
if(exam is > 65 || projects >= 5 ) return 90
if(exam is > 50 || projects >= 2 ) return 75
return 0 


*/ 