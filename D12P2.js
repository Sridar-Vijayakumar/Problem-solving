/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];

    candidates.sort((a, b) => a - b);

    function backtrack(start, current, remaining) {
        if (remaining === 0) {
            result.push([...current]);
            return;
        }

        if (remaining < 0) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {

            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            if (candidates[i] > remaining) {
                break;
            }

            current.push(candidates[i]);

            backtrack(i + 1, current, remaining - candidates[i]);

            current.pop();
        }
    }

    backtrack(0, [], target);

    return result;
};

