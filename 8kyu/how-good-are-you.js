// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

/*
Create a function that calculates the average of an array of numbers and compare the average number to your score and return a boolean 
Two params, an array of numbers (student scores) and another number representing your points 
Returning a boolean 
How do we get the average of an array ? 
use the reduce() and then divide the ovarall array by it's length and put it into a variable
then compare that variable to your points 
*/


function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    
    const classAvg = classPoints.reduce((total, num)=> total + num,0)/classPoints.length 
    
    return yourPoints > classAvg
}  