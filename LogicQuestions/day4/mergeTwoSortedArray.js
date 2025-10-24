// 1. Merge two sorted arrays (without sort method)

function mergeSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  // Compare elements of both arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1 (if any)
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2 (if any)
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// Example:
console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8, 9]));
