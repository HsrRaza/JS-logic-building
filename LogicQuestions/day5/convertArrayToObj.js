// 2️⃣ Convert Array → Object and Object → Array
// Array → Object

// Steps:

// Take an array.
// Create empty object.
// Loop the array.
// Use index or array value as key inside the object.
// Assign the value.


// Object → Array

// Steps:
// Take an object.
// Use built-in method to extract:
// only keys or
// only values or
// both key-value pairs.
// Store result in an array.
// Print it.

function arrayToObj(arr){
    let obj = {}

    // converting arr to obj
    for(let i = 0; i< arr.length; i++){
       obj[i] = arr[i]
    }

    // converting obj to array
    let ar = Object.entries(obj)
    return ar;
}

console.log(arrayToObj(["apple", "banana", "cherry"]))








