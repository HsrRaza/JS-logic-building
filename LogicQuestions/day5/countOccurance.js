// 1️⃣ Count occurrences using objects

// Steps:

// Take an array of items (can contain duplicates).

// Create an empty object {} to store counts.

// Loop through the array.

// For each value:

// If key already exists in object → increment it.

// Else → set it to 1.

// Print the object (it will show frequency of each item).

function countingOccureance(arr) {
    let obj = new Map()


    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        if (obj.has(value)) {
                // already exists → increment count
            obj.set(value, obj.get(value) + 1)
        } else {
            //  element not in map → initialize count
            obj.set(value, 1)
        }
    }

    return obj
}

// console.log(countingOccureance(["a", "b", "a", "c", "b", "a"]));


//  differt methods

const count = arr =>
  arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})

console.log(count(["a","b","a","c","b","a"]))

