

const arrayOne = [1, 2, 5, 6, 7];
const arrayTwo = [1, 2, 3, 10];

// console.log(arrayOne, arrayTwo);

// function mergeTwoArrays(arr1, arr2) {
//     let mergedArray = [...arr1, ...arr2];
//     return mergedArray;
// }

// console.log(mergeTwoArrays(arrayOne, arrayTwo));

function mergeTwoSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;

    // Merge until one array is exhausted
    while (i < arr1.length && j < arr2.length) {
        merged.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]);
    }

    // Add remaining elements using spread operator
    return [...merged, ...arr1.slice(i), ...arr2.slice(j)];
}

console.log(mergeTwoSortedArrays(arrayOne, arrayTwo));

