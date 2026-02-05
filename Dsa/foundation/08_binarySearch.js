// Binary Search is an efficient algorithm used to find the position of a target value within a sorted array. Unlike linear search, it repeatedly divides the search interval in half, significantly reducing the number of comparisons.


function binarySearch(num, target) {

    let left = 0;
    let right = num.length - 1;


    while (left <= right) {

        let middle = Math.floor((left + right) / 2)

        if (num[middle] === target) {
            return middle
        }
        if (target < num[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }


    }

    return -1

}
console.log(binarySearch([1, 3, 5, 7, 9], 7));


 