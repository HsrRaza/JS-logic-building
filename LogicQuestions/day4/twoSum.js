// Pair sum problem (two sum)
// 🧠 Step-by-Step Approach 1 — Brute Force (Basic Logic)
// Step 1️⃣

// Loop through each element using two nested loops.

// Step 2️⃣

// For each element, check every other element to see if their sum equals the target.

// Step 3️⃣

// If you find such a pair → return or print it.

// arr = [2, 7, 11, 15]
// target = 9

// i=0 → 2
//    j=1 → 7 → 2+7=9 ✅ found



function twoSum(arr , target){
  
    for(let i =0; i< arr.length; i++){
        for(j=1; j< arr.length; j++){
            if(arr[i] + arr[j] == target){
                return [arr[i], arr[j]]
            }
        }
    }
    return 0
}
console.log(twoSum([2,7,11,15] , 9));
