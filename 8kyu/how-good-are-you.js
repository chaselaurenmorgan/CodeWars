// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

    function betterThanAverage(classPoints,yourPoints){
        let sum = 0
        for(let i = 0; i < classPoints.length; i++){
            sum += classPoints[i]
        }
        return yourPoints > (sum/classPoints.length)
    }

/*
Create a function that calculates the the average of the students grades and compare it against your points. The function will take two params classPoints(array), yourPoints(number). 
Returning a boolean. True if youPoints is higher than the array of students grades and false otherwise
Example 
    [2, 3], 5), true
    [100, 40, 34, 57, 29, 72, 57, 88], 75), true
    [12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false
Create a function betterThanAverage, that has two params classPoints(array),yourPoints(number)
First find the average of the array 
Use a for loop to calculate the sum of the array 
    Creating a variable sum = 0 to hold the sum of the array 
    for loop starting at 0 and looping through the array 
        sum += i 
    Take the sum and divide it by the length of the array 
Take the average and compare whether yourPoints is higher than the average 
    yourPoints > sum/classPoints.length 
*/