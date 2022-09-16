// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
    function otherAngle(a,b){
        return 180 - (a + b)
    }

/*
Create a function that returns the 3rd angle of a tringle
Returning a number, that represents the 3rd angle of a triangle 
Example     
    (30, 60) => 90
    (60, 60) => 60
    (43, 78), 59
Create a function otherAngle
Take 2 params a, b (number)
Calcule the 3rd angle from the given params 
    add the two sides and subtract by 180 
*/