

function divideArr(arr, l, r){
    if(l < r){
       let  m = Math.floor((l + r)/2)

       divideArr(arr , l , m);
       divideArr(arr, m+1, r)
       merge(arr, l , m , r)
    }
}

function merge(arr, l , m , r){
    
}
