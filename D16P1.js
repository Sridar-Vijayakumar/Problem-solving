var permute = function(nums) {
    let result = [];

    function backtrack(path) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let num of nums) {
            if (path.includes(num)) continue;

            path.push(num);
            backtrack(path);
            path.pop();
        }
    }

    backtrack([]);
    return result;
};

