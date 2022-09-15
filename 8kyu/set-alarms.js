// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise

    function setAlarm(employed, vacation){
        return employed && !vacation
    }

/*
Create a function that takes two params, employed(boolean) and vacation (boolean), the function should return a boolean
Returning a boolean, true if employed is true and vaction is false otherwise return false 
Example:
setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
Create function setAlarm
2 params (employed, vacation )
return employed && !vacation
*/