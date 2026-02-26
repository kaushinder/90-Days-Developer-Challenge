// Check if the Array is Sorted I

// Given an array arr of size n, the task is to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order. If the array is sorted then return True, else return False.


class Solution {
    arraySortedOrNot(arr, n) {
        for(let i=0; i<n; i++){
            for(let j=i+1; j<n; j++){
                if(arr[i] > arr[j]){
                return false;
            }
            }
        }
        return true;
    }
}