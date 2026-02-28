function reverseNum(num){
    if(num >= 0 && num <= 9){
        return num;
    }
    let reverseN =  0;
    while(num!=0){
        reverseN = reverseN * 10 + (num % 10);
        num = Math.floor(num / 10)
    }
    return reverseN
}
// console.log(reverseNum(5893));

function palindromeNum(num){
    if(num >=0 && num <= 9) return num;
   
    let originalNum =  num;
    let reverseN = 0 ;
    while(num!=0){
        reverseN = reverseN * 10 + (num % 10);
        num = Math.floor(num / 10)
    }

   if (originalNum == reverseN) return true;
   return false
    
        
}

// console.log(palindromeNum(121));


// counts digits in  a number 

function countsDigits(num){
    if(num >=0 && num<=9)  return num

    let res = 0
    let count = 0
    while(num != 0){
        res = res * 10 + (num % 10);
        num = Math.floor(num / 10)
        count ++
    }
    return count
}
console.log(countsDigits(872));





// Write a function that returns the largest number in an array.


function largestNuminArr(...num){
    let largest = - Infinity;
    
    for(let i = 0; i < num.length; i++){
        if(num[i] > largest ){
            largest = num[i]
        }
    }

    return largest
}

console.log(largestNuminArr(2, -6, 4, 8, 1, -9));
