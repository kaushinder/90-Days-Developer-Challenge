// Sum of first, last element in array

class Solution {
  sumOfFirstAndLast(nums) {
    if (nums.length === 0) {
      return 0;
    }
    let first = nums[0];
    let last = nums[nums.length - 1];

    return first + last;
  }
}

const sol = new Solution();

const nums = [2, 3, 4, 5, 6];

const ans = sol.sumOfFirstAndLast(nums);

console.log("Sum of first and last element:", ans);


// Complexity analysis :
// Time Complexity: O(1), Accessing elements by index and performing addition are constant-time operations.

// Space Complexity: O(1), Only a fixed amount of extra space is used (for storing the sum and indices).