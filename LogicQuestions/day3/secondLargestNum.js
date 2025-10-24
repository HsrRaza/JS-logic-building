// Find second largest number
function secoundLargestNum(arr){
        let largest = 0
        let second = 0

        for(let i = 0 ;i <arr.length ; i++){
            if(arr[i] >  largest){
                second = largest;
                largest = arr[i];
            } else if(arr[i]> second && arr[i] < largest){
                second = arr[i]
            }
        }

        return second
}

console.log(secoundLargestNum([10,5,20,8,15]));
