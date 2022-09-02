// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move(position,roll){
    return roll * 2 + position
}

/*
Create a function that calucalates the position of an hero by the dice 
Returning a number, the number will be the position which we will get from the dice roll param * 2 plus the position 
Example 
    move(3, 6) should equal 15
Create a function name - move 
Two paramenters - position, rolldice (both will be numbers)
Multiply the rolldice * 2 and + to the position 
*/

