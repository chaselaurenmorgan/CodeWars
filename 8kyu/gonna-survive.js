// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)




/*
Create a function that figures how many bullets a hero should carry in order to defeat the dragons 
Two params, (numbers) => bullets, dragons 
Returning a boolean 
Example (Ea dragon takes requires 2 bullets ) => 10, 5 => true, 7, 4 => false 
The Hero needs twice or equal to the amout of bullets as dragons 
bullets /2 >= dragons 
*/

function hero(bullets, dragons){
    //Get Coding!
      return bullets/2 >= dragons
    }