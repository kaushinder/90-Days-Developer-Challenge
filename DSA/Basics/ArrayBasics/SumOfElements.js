// Sum of Array Elements

// Given an array arr of size n, the task is to find the sum of all the elements in the array.


class Solution {
    sum(arr,n) {
        let sum = 0;
     for(let i=0; i<n; i++){
        sum = sum + arr[i];
     }
     return sum;
    }
}
