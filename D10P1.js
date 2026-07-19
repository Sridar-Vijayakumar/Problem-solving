/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    const findFirst = () => {
        let left = 0, right = nums.length - 1;
        let ans = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }

            if (nums[mid] === target) ans = mid;
        }

        return ans;
    };

    const findLast = () => {
        let left = 0, right = nums.length - 1;
        let ans = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }

            if (nums[mid] === target) ans = mid;
        }

        return ans;
    };

    return [findFirst(), findLast()];
};