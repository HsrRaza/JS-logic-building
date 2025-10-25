// Find missing number in sequence

function missingNum(arr){
    let n = arr.length + 1;
    let expectedSum = (n *(n+1) / 2)
    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
        
    }

    return expectedSum - actualSum
}
// console.log(missingNum([1, 2, 3, 5]));


// using reduce method

function findingMissingNum(arr){
    let n = arr.length + 1;
    let expectedSum = (n *(n+1) / 2)

    
    let actualSum = arr.reduce( (acc, cur) => acc + cur, 0)

    return expectedSum - actualSum;
}
console.log(findingMissingNum([1,2,3,5]));
