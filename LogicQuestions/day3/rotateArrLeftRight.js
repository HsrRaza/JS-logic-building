// ✅ 3 . Rotate array left/right by 1


function rotateLeft(arr){
    if(arr.length === 0) return arr;

    let first = arr[0];

    for(let i = 0 ; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = first; 


    return arr;
}

console.log(rotateLeft([1,2,3,4]));


// Rotate right

function rotateRight(arr){
    if(arr.length === 0) return arr;

    let last =arr[ arr.length -1];

    for(let i = arr.length-1; i> 0;  i--){
        arr[i]= arr[i-1]
    }
    arr[0] = last;

    return arr
}
console.log(rotateRight([1,2,3,4]));
