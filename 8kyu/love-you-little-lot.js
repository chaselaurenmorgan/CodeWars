// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) {
    let petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    return petals[(nbPetals-1) % 6];
  } 

/* 
Create a function that returns one the phrases depending on the number 
Returning on the above phrases. It there are more than 6 petals then start over 
Example 
    howMuchILoveYou(7),"I love you"
    howMuchILoveYou(3),"a lot"
    howMuchILoveYou(6),"not at all")
Create a function howMuchILoveYou
1 param nbPetals 
Create a new variable that contains an array of the phrases 
const phrase = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
To access the the elements in the function use remainder 
subtract 1 from the parameter and then modulus the length of the array

    


*/

