// 2 Reverse a string manually(not using .reverse())

// method -1
function reverseStr(str) {
   
    return Array.from(str).reduce( (reversed,c) => c + reversed, "" )
    
    

}
// console.log(reverseStr("Hello, decode!"));

// in   both this 1 , 2 methods we are adding c (current char) to an reverse variable in starting no in the end

// method - 2

function rever(str){
    let reverseing = ""
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        reverseing = c + reverseing
        
    }

    return reverseing
}

// console.log(rever("Hello"));

// Method 3 using backward loop version (most common)

function reverStr(str){
    let reversed = "";

    for(let i = str.length -1 ; i>=0; i--){
        reversed = reversed + str[i]
    }
    return reversed
}

console.log(reverStr("Done"));

