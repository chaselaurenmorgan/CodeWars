// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).
       function rentalCarCost(d){
        let carCost = 40 
        if(d >= 7){
            return carCost * d - 50
        }else if(d >= 3){
            return carCost * d - 20
        }else {
            return carCost * d 
        }
       } 

/*
Create a function that caluculates the total amount for different days, return a number and it takes one parameter of days.
Returning a number, the number will always include 40 multiplied by the number of days. If the number of days is greater than or equal to 7 days then subtract 50 and if the days is greater than or equal to 3 days then subtract 20 
Example 
    1 => 40 
    3 => 100
    7 => 230 
Create a function rentalCarCost that takes one paramenter of days(d) => number 
Create a variable to hold the rental cost of 40 
if else statement 
    if the parameter is greater that equal to 7 
        return 40 * paramenter - 50
    else if the parameter is greater than equal to 3 
        return 40 * paramenter - 20 
    else 
        return 40 * paramater 
*/