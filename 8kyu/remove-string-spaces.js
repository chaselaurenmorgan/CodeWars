// Simple, remove the spaces from the string, then return the resultant string.

function removeSpace(string){
    let noSpace = ''
    for(let i = 0; i < string.length ; i++){
        if(string[i] !== ' '){
            noSpace += string[i]
        }
    }
    return noSpace
}


/*
Create a function that removes the spaces from the string and returns a string without the spaces 
Returning a string without the spaces
Example
    -  '8 j 8   mBliB8g  imjB8B8  jl  B' => '8j8mBliB8gimjB8B8jlB'
    - '8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd' => '88Bifk8hB8BB8BBBB888chl8BhBfd'
1. Create a function declaration name removeSpace and it takes the parameter of a string 
2. to loop through the each letter to check for the space => 
        for loop that will begin 0 and then loop through to end of the string 
            inside of the loop 
                if any of the elements/index of the strings does not = ""
                return the letters 
3. Method 2 - string method of replaceAll()
*/