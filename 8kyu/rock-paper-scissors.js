// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
const rps = (p1, p2) => {
    if(p1 === p2){return "Draw!"}
    if(p1 ==="scissors" && p2 === "paper" ||
       p1 ==="paper" && p2 === "rock" ||
       p1 ==="rock" && p2 === "scissors"){
        return "Player 1 won!"
    } else {
      return "Player 2 won!"
    }
  };

/*
Create a function that return the winner of the game rock paper scissors. 
Returning a string of either "Player 1 won!",  "Player 2 won!",  "Draw!"
Example 
    "scissors", "paper" --> "Player 1 won!"
    "scissors", "rock" --> "Player 2 won!"
    "paper", "paper" --> "Draw!"
Create an arrow function rps 
2 params - p1(string) p2 (string)
inside of the function body create conditionals 
    Condition return 'Draw'
        p1 === p2 
    Condition return 'Player 1 won'
        if p1 === 'scissors' and p2 === 'paper' or 
        if p1 === 'paper' and p2 === 'rock'  or 
        if p1 === 'rock' and p2 === 'scissors'
    Else return 'Player 2 won'
*/

