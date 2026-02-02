// Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.

function isPalindrome(num){
    
    if(num < 0) return false

    let originalNum = num;
    let rev = 0;
    while(num > 0){
        rev = rev * 10 + (num%10)
        num = Math.floor(num/10)
    }

    // if(originalNum === rev) return true

    // return false


    return originalNum === rev

}

console.log(isPalindrome(10))