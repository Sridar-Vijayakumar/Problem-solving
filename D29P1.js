/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let numbers = [];
    let factorial = [1];

    // Build factorial array and numbers
    for (let i = 1; i <= n; i++) {
        numbers.push(i.toString());
        factorial[i] = factorial[i - 1] * i;
    }
    
    k--; // Convert to 0-based index
    
    let result = "";
    
    for (let i = n; i >= 1; i--) {
        let blockSize = factorial[i - 1];
        let index = Math.floor(k / blockSize);

        result += numbers[index];
        numbers.splice(index, 1);

        k %= blockSize;
    }
    
    return result;
};



