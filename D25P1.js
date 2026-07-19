/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [];

    for (let interval of intervals) {
        if (
            result.length === 0 ||
            result[result.length - 1][1] < interval[0]
        ) {
            // No overlap
            result.push(interval);
        } else {
            // Overlap, merge intervals
            result[result.length - 1][1] = Math.max(
                result[result.length - 1][1],
                interval[1]
            );
        }
    }

    return result;
};

