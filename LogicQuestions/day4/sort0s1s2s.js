// Sort 0s,1s,2s without sort()

// 🧠 Approach 2 — Dutch National Flag Algorithm (One-pass swap method)

// A more optimized & elegant way (used in interviews).

// Step-by-step:

// Use three pointers:

// low → next position for 0

// mid → current element

// high → next position for 2

// Logic:

// While mid <= high:

// If arr[mid] == 0 → swap arr[low] and arr[mid]; increment both.

// If arr[mid] == 1 → just increment mid.

// If arr[mid] == 2 → swap arr[mid] and arr[high]; decrement high




function sortZerosOne(arr){
    let low = 0, mid =0 , high = arr.length-1;
    while(mid <= high){
        if(arr[mid] == 0){
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++
        } else if(arr[mid] ==1){
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }

        
        
    }
    
    return arr;

}

console.log(sortZerosOne([2,0,1,2,1,0]));
