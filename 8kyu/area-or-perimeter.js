// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

function areaOrPerimeter(l,w){
    return l === w ? l * w : (l + w) * 2
}

/*
Create a function that returns either the calculation of the area or the perimeter. The function will have 2 params and returning a number.
Returning a number of the calculation of the area or perimeter 
Example 
    6, 10 --> 32
    3, 3 --> 9
Create a function areaOrPerimeter 
funtion takes two paramenters 
    l(number) and w(number)
If l === w 
    return l * w 
else returning  (l + w) * 2 
*/