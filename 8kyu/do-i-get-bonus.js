// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

function bonusTime(salary,bonus){
    return bonus ? `£${salary * 10}` : `£${salary}`
}

/*
Create a function that calculates if the a bonus should be given. Two parameters salary(integer) and bonus(boolean).
Return a a string that has the sympbol of \u00A3" with the calcuation of the bonus * 10  if true else return the sympbol of \u00A3" plus salary 
Example 
    10000, true => '£100000'
    25000, true, '£250000'
Create a function bonusTime
Takes two params salary(integer) and bonus(true)
If the bonus === true 
    multilply salary by 10 
    return string '£100000'
Else return the string with the symbol salary 
Use a ternary for the conditionals 
*/