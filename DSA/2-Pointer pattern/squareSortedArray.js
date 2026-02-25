// 977. Squares of a Sorted Array

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.



var sortedSquares = function(nums) {
    let Neg = [];
    let Pos = [];

    // Step 1: Separate negative and positive
    for (let num of nums) { 
        if (num < 0) {
            Neg.push(num);
        } else {
            Pos.push(num);
        }
    }

    // Step 2: Reverse negatives 
    Neg.reverse();

    // Step 3: Square both arrays
    Neg = Neg.map(n => n * n);
    Pos = Pos.map(n => n * n);

    // Step 4: Merge two sorted arrays
    let result = [];
    let i = 0, j = 0;

    while (i < Neg.length && j < Pos.length) {
        if (Neg[i] < Pos[j]) {
            result.push(Neg[i]);
            i++;
        } else {
            result.push(Pos[j]);
            j++;
        }
    }

    // Remaining elements
    while (i < Neg.length) {
        result.push(Neg[i]);
        i++;
    }

    while (j < Pos.length) {
        result.push(Pos[j]);
        j++;
    }

    return result;
};