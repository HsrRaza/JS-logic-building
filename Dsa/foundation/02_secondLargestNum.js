// Find the Second Largest Number in an Array

// As we iterate through each element:

// If current element > largest:

// The current largest becomes the new second largest

// Update largest to current element

// Else if current element > secondLargest AND current element != largest:

// Update secondLargest to current element

// (The "not equal to largest" is important for handling duplicates)


function secondLargest(arr){
    if(!Array.isArray(arr)) return "Input must be an array"
    if(arr.length <  2 ) return "Array should have atleast two elements";
    
   let largest = -Infinity 
   let secondLargest = -Infinity

   for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        secondLargest = largest
        largest = arr[i]
    } else if(arr[i] > secondLargest && arr[i] != largest){
        secondLargest = arr[i]
    }
   }
    return secondLargest
    
}
console.log(secondLargest(["dfa12321afd"]));
