// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
    function getAverage(marks){
        let sum = 0
        for(let i = 0 ; i < marks.length; i++){
            sum += marks[i]
        }

        return Math.floor(sum / marks.length)

    }

/*
Create a function that calculates the average of an array and return the average rounded down to it's nearest integer
Returning the a number that will be the avg of the array rounded down to it's nearest integer 
Example 
    2,2,2,2]),2
    1,2,3,4,5,]),3)
    1,1,1,1,1,1,1,2]),1)
Create a function  getAverage that take one param marks(array)
To calculate the average, get the total sum of the arr, and divide it by the length of the arr
To get the sum 
    Create a variable that hold an empty sum and loop through the array to add it into the variable 
    To get the average divide the total sum by marks.length 
    To round down us Math.floor()
*/
