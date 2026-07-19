/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;

    let prev = new Array(n + 1).fill(false);
    let curr = new Array(n + 1).fill(false);

    prev[0] = true;

    // Handle leading '*'
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            prev[j] = prev[j - 1];
        }
    }

    for (let i = 1; i <= m; i++) {
        curr.fill(false);

        for (let j = 1; j <= n; j++) {

            if (
                p[j - 1] === '?' ||
                p[j - 1] === s[i - 1]
            ) {
                curr[j] = prev[j - 1];
            }
            else if (p[j - 1] === '*') {
                curr[j] = curr[j - 1] || prev[j];
            }
        }

        [prev, curr] = [curr, prev];
    }

    return prev[n];
};