/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i = s.length - 1;

    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    let length = 0;

    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
};