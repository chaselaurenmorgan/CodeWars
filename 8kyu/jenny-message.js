// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?



function greet(name){
    return "Hello, " + name + "!";
    if(name === "Johnny")
      return "Hello, my love!";
  }


  function greet2(name){
    if(name === 'Johnny'){
        return 'Hello, my love!'
    }
    return 'Hello, " + name + "!'
  }


  /*
  Correct the function
  Using return in the first will immediatly exit the code 
  The if shape should be tested first and then if it true it will send the secret message 
  and if it false 
  
  */