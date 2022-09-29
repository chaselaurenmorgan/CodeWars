// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.
    function zeroFuel(distanceToPump, mpg,fuelLeft){
        return distanceToPump <= mpg * fuelLeft
    }

/*
Create a function that calculates if you have enough fuel to make it to the nearest pump. The function should return a boolean/
Returning a boolean. True if there is enough fuel to make it to the pump or otherwise false. The function will take three parameters  - distance to the pump, miles per gallon, fuel left 
Example 
    50 miles to the pump, 25 miles per gallon, 2 gallons left => 50 <= 50, true 
    100 miles to the pump, 50 miles per gallon , 1 gallon => 100 <=50, false 
    200 miles to the pump, 25 miles per gallon, 3 gallon left => 200 <= 75 false 
Create a function that takes 3 paramenters
    -distanceToPump, mpg, fuelLeft (numbers)
Return if the the distance to the pump is <= mpg * fuelLeft 
*/
