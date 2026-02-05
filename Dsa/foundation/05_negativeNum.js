// Write a function that returns the number of negative numbers in an array.

function negativeNumInArr(...num){

    let count = 0;

    for(let i = 0; i < num.length; i++){
        if(num[i] < 0){
            count ++
        }
    }

    return count

}

console.log(negativeNumInArr(2, -6, 4, 8, 1, -9));

