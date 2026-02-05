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
