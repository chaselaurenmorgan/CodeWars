// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

    function paperwork(n,m){
        return n < 0 || m < 0 ? 0 : n * m
    }

/*
Create a function that takes two parameters (n(classmates), m(paperword)).  This function should return a number if classmates and paperwork is below o return 0 else multiply the number 
Returning either 0 if the classmate or paperwork is below 0  else mutltiplying the two arguments 
Create a function paperwork with two parameters one that represents classmates and the other that represents paperwork 
Conditional statement 
if classmate or paperwork is < 0 return 0 
else multiply classmate * paperwork to calculate how many blank pages do you need
Use a ternary operator 
*/