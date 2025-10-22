//2 . Remove duplicates manually (no Set)


function duplicateArr(arr){
    let uniqueArr = [];

    for(let i = 0 ;i < arr.length;i++ ){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}

// console.log(duplicateArr([1,2,2,3,4,4,5]));


//  method 2 using object as a hash map

function removeDuplicate(arr){
    let uniqueArr =[]
    let seen = {}

    for(let i = 0; i< arr.length; i++){
        let value = arr[i];

        if(!seen[value]){
            seen[value]= true;
            uniqueArr.push(value)
        }
    }

    return uniqueArr
}
console.log(removeDuplicate([1,2,2,3,4,4,5]));


// method  3 using a map 
function removeDuplicatesUsingMap(arr) {
    let uniqueArr = [];
    let seen = new Map(); // Map to store seen elements

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];

        if (!seen.has(value)) {
            seen.set(value, true); // mark as seen
            uniqueArr.push(value); // add to result
        }
    }

    return uniqueArr;
}

// console.log(removeDuplicatesUsingMap([1, 2, 2, 3, 4, 4, 5]));


// method 4 - using reduce()
// In this problem:
// The accumulator will be our uniqueArr (array of unique elements).
// The current value will be each element from the input array.
// For each element, we’ll check if it’s already included in the accumulator — if not, we’ll add it.



function removeDuplicateUsingReduce(arr){
    return arr.reduce(( uniqueArr , current)=> {
        if(!uniqueArr.includes(current)){
            uniqueArr.push(current);
        }
        return uniqueArr
    }, []);
}

console.log(removeDuplicateUsingReduce([1, 2, 2, 3, 4, 4, 5]));

