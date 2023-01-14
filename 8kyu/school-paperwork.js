// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m
  }

/*
Create a function that take calculates how many blank pages you need. If classmate or paperwork is below zero return 0 else multiple classmate * paperwork. 
Two parameter that will be numbers n represents classmates and m represents paperwork 
Returning 0 if the n or m is below 0 or returning n * m if both are above o 
Use a ternary to test the condition o
    if n < 0 or m < 0 return or return n * m 
*/