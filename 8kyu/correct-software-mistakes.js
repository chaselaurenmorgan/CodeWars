// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string){
    let str = ''
    for(let i = 0; i < string.length; i++){
        if(string[i] === '5'){
            str += 'S'
        }else if(string[i] === '0'){
            str += 'O'
        }else if(string[i] === '1'){
            str += 'I'
        }else{
            str += string[i]
        }
    }
    return str
}


/*
Create a function that replaces the argument with a letter
Returnin a string that removes the number and replaces it with the corresponding letter 
Example 
    correct("L0ND0N"),"LONDON");
    correct("DUBL1N"),"DUBLIN");
    correct("51NGAP0RE"),"SINGAPORE");
Create a function correct 
1 param string 
empty variable to collect the string 
let str = ''
for loop to iterate through the string 
if the char is === 5 replace it with S 
if the char is === 0 replace it with 0 
if the char is === I replace it with 1 
return back the str


*/