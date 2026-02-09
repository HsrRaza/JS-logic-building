// Given an integer array nums and an integer val, remove all occurrences of val in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val


function removeElement(nums, val) {
    let x = 0;
    for(let i =0 ; i<nums.length; i++){
        if(nums[i]!== val){
            nums[x] = nums[i]
            x++
        }
    }

    return x 
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
