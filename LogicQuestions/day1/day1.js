//1. Reverse a number (eg. 1234 => 4321)

function reverseNumber(num) {
    if (num >= 0 && num <= 9) {
        return num;
    }
    let reverseNum = 0;
    while (num != 0) {
        reverseNum = reverseNum * 10 + (num % 10);
        num = Math.floor(num / 10)
    }
    return reverseNum

}
// console.log(reverseNumber(12345));

// 2. Check if a number is a palindrome

function palindrome(num) {
    if (num >= 0 && num <= 9) {
        return num;
    }

    let originalNum = num;
    let reverseNumber = 0
    while (num != 0) {
        reverseNumber = reverseNumber * 10 + (num % 10);
        num = Math.floor(num / 10)
    }

    return originalNum === reverseNumber
}

// console.log(palindrome(12));



// 3. counts digits in a number 


function count(num) {
    if (num >= 0 && num <= 9) {
        return num;
    }
    let res = 0
    let digits = 0
    while (num != 0) {
        res = res * 10 + (num % 10);
        digits = digits + 1
        num = Math.floor(num / 10)
    }
    return digits
}

// console.log(count(234));

// 4 . Sum of digits

function sum(num) {
    if (num >= 0 && num <= 9) {
        return num;
    }
    let digits = 0
    while (num != 0) {
        digits = digits + (num % 10);
        num = Math.floor(num / 10);
    }

    return digits
}

// console.log(sum(12));

//  5 . Find factorial (using for loop  )


function fact(num) {
   
   if(num < 0 ){
    return num
   }
   else if(num == 0 || num === 1){
    return 1;
   } else{
    let res = 1;
    for(let i = 2 ; i<=num; i++){
        res *= i;
    }
    return res
   }
}
// using recursion 
function factRec(num){
    if(num < 0 ){
    return num
   }
   else if(num == 0 || num === 1){
    return 1;
   }

   return num * factRec(num - 1)
}



console.log(factRec(4));











