// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    //#Happy Coding! ^_^
    let milHours = h * 3600000
    let milMins = m * 60000
    let milSecs = s * 1000
    
    return milHours + milMins + milSecs
  }

/*
Create a function the coverts the hours, minutes, and seconds to milliseconds 
return a number that represent hours, minutes, and seconds in milliseconds 
Three params hours minutes seconds which will all be  a number 
Returning the total of milliseconds of all the times 
seconds => 1000 
minutes => 60000
hours => 3600000


*/

