// Reverse an array

// Given an array arr of n elements. The task is to reverse the given array. The reversal of array should be inplace.

class Solution {
    reverse(arr, n) {
        let temp = [];
        for(let i=n-1; i>=0; i--){
            temp[n-i-1] = arr[i];
        }
        for(let i=0; i<n; i++) {
            arr[i] = temp[i];
        }
        return;
    }
}

