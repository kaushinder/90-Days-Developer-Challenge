// Count of odd numbers in array

// Given an array of n elements. The task is to return the count of the number of odd numbers in the array.


class Solution {
    countOdd(arr, n) {
    let count = 0;
    for(let i=0; i<n; i++){
        if(arr[i]%2 != 0){
            count++;
        }
    }
    return count;
    }
}