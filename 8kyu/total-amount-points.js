// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
// Notes:
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

    function points(games){
        let total = 0 
        for(let i = 0; i < games.length; i++){
            if(games[i][0] === games[i][2]){
                total += 1 
            }else if(games[i][0] > games[i][2]){
                total += 3
            }
        }
        return total
    }

/*
Create a function that calculates the point of x or the first number in the array . This function will take one parameter of an array that contains a string.
Returning a number that represents the total of the x points 
    Example; 
        ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30
        ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10
Create a functiion points that takes one param games(array)
let total = 0 
Create a variable to hold the sum
for loop 
Loop through the array 
go through the length of the array or to 10 
Compare the the first number in the array to the last 
    games[0][0] > game[0][2]
if x is greater than y then add 3 points 
if Y is greater than add 0 
if x === y then add 1 
*/