// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?


// function greet(name){
//     return "Hello, " + name + "!";
//     if(name === "Johnny")
//       return "Hello, my love!";
//   }

function greet(name){
  
    if(name === "Johnny"){ 
       return "Hello, my love!";
    }
     return "Hello, " + name + "!"
  }


  /*
  Has the return name above the if statement which will stop the exexution of the program 
  Missing the brackets for the return statement 
  */