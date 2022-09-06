// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".
    function hoopCount(n){
        return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
    }
/*
Create a function that takes an input(number) and returns a message based on the input
Returning a string. If the param is 10 or greater than return the  string "Great, now move on to tricks" else return  "Keep at it until you get it"
Example 
    3 =>  "Keep at it until you get it"
    15 =>  "Great, now move on to tricks"
    10 =>  "Great, now move on to tricks"
Use a ? 
n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
*/