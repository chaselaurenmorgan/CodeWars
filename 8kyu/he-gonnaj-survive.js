// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets,dragons){
    return bullets >= dragons * 2
}

/*
Create a function that determines if the hero has enough bullets to defeat the dragon(s). This function will take two parameters
    bullets(number) and dragons(number)
Returning a boolean. True if the hero has enought to defeat the dragons and false otherwise 
To deafeat the dragons. You need to bullets per dragon 
If you had 2 dragons then you will need 4 bullets 
    Other Examples
    hero(10, 5), true);
    (hero(7, 4), false);
    (hero(4, 5), false);
    (hero(100, 40), true);
    (hero(1500, 751), false);
    (hero(0, 1), false);
Create a function hero that take the parameters of bullets and dragon 
    for the equation 2 bullets per dragon 
        if bullets * 2 >=  dragon
return  dragon >= bullets * 2

*/