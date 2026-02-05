// Write a function that returns the smallest number in an array.

function smallestNuminArr(...num){
    let smallest = Infinity;

    for(let i = 0 ; i< num.length; i ++){
        if(num[i] <  smallest){
            smallest = num[i]
        }
    }

    return smallest
}

console.log(smallestNuminArr(2, -6, 4, 8, 1, -9));
