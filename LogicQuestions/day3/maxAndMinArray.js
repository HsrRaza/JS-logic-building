// 1 ✅ Find max and min in an array

function maxMin(arr){
    let max = arr[0]
    let min= arr[0]
   for(let i = 1 ; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        } else if(arr[i] < min){
            min = arr[i]
        }
    }

    return `max value ${max} and min value ${min}`
    
}

console.log(maxMin([4,1,9,2,7,5]));
