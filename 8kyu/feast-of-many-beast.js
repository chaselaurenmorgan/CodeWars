// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast,dish){
    return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]
}

/*
Create a function that returns a boolean if the param1 1st  char and last char matches  param2 1st char and last char 
Return a boolean, true if the param1 char 1 and last char === param2 1st char last char
Example 
    "great blue heron", "garlic naan" => true
    "chickadee", "chocolate cake" => true
    "brown bear", "bear claw" => false
Create a function feast
Takes 2 params beast(string) and dish(string)
Compare the 1st char of the param and the last char of param to the 
            1st char of the param2 and the last char of par t 
Access the first char and last char 
    beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]
*/

