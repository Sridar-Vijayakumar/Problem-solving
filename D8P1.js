/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (!s || !words.length) return [];

    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;
    const result = [];

    const target = new Map();
    for (const word of words) {
        target.set(word, (target.get(word) || 0) + 1);
    }

    for (let offset = 0; offset < wordLen; offset++) {
        let left = offset;
        let count = 0;
        const windowMap = new Map();

        for (let right = offset; right + wordLen <= s.length; right += wordLen) {
            const word = s.substring(right, right + wordLen);

            if (target.has(word)) {
                windowMap.set(word, (windowMap.get(word) || 0) + 1);
                count++;

                while (windowMap.get(word) > target.get(word)) {
                    const leftWord = s.substring(left, left + wordLen);
                    windowMap.set(leftWord, windowMap.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }

                if (count === wordCount) {
                    result.push(left);

                    const leftWord = s.substring(left, left + wordLen);
                    windowMap.set(leftWord, windowMap.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }
            } else {
                windowMap.clear();
                count = 0;
                left = right + wordLen;
            }
        }
    }

    return result;
};