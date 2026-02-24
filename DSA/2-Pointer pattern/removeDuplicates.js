// 26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.



var removeDuplicates = function(nums) {
    let i = 0;
    let Unique = 1;
    let j = 1;

    while(j < nums.length){
        if(nums[j] == nums[j-1]){
            j++;
            continue;
        }
        nums[i+1] = nums[j];
        i++;
        Unique++;
        j++;
    }
    return Unique;
};