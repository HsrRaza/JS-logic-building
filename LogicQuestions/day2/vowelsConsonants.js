// Count vowels and consonants

function vowels(str){
    let vowels = "aeiou";
    let countVowels = 0
    let countConsonants = 0
    for(let i = 0 ; i<str.length; i++){
       let char = str[i].toLowerCase();
       
       if(vowels.includes(char)){
        countVowels++;
       } else if(char >= 'a' && char <= 'z'){
        countConsonants++;
       }
        
        
    }
    return `Vowels are ${countVowels} and counsonants are ${countConsonants}`

}

console.log(vowels("cat"))

// explainaton
//  here we are looping through an str, in each iteration we are checking the first str[0] is present  in vowels [aeiou] , increment count if it's not present 
// then checks the str[0] is present b/w a-z yes it's consonants increment  