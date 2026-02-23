// Count Elements Greater Than Previous Average
// Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.

function countResponseTimeRegressions(responseTimes) {
    let n = responseTimes.length;
    if (n <= 1) return 0;

    let count = 0;
    let sum = responseTimes[0];

    for (let i = 1; i < n; i++) {
        let avg = sum / i;

        if (responseTimes[i] > avg) {
            count++;
        }

        sum += responseTimes[i];
    }

    return count;
}