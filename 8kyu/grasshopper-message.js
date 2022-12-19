// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:


/*
Create a function that takes a two parameters and returns a string based on whether or not the name is the owner 
Two parameters (strings) name and owner
Returning a string. If name is === owner 'Hello boss' else 'Hello guest'
example (Hans,Hans) name === owner => 'Hello boss'
name === owner => 'Hello boss'
name !== owner => 'Hello guess'
*/

function greet (name, owner) {
    // Add code here
    return name === owner? 'Hello boss':'Hello guest'
  }