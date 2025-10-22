// ✅ Count frequency of elements

function countFreq(arr){
    let seen = new Map()

    for(let i = 0; i < arr.length; i++){

        let value = arr[i]

        if(seen.has(value)){
            // already exists → increment count
            seen.set(value , seen.get(value) + 1)
        }else{
            //  element not in map → initialize count

            seen.set(value , 1)
        }
          
    }

    return seen
}
let arr = [1, 2, 2, 3, 1, 4, 2];
console.log(countFreq(arr));