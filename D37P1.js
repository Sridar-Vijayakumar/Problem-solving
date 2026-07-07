var fullJustify = function(words, maxWidth) {
    let res = [];
    let i = 0;

    while (i < words.length) {
        let lineLen = words[i].length;
        let j = i + 1;

        // Pick maximum words for current line
        while (j < words.length && lineLen + 1 + words[j].length <= maxWidth) {
            lineLen += 1 + words[j].length;
            j++;
        }

        let line = "";
        let wordCount = j - i;
        let isLastLine = j === words.length;

        // Last line OR only one word => left justify
        if (isLastLine || wordCount === 1) {
            line = words.slice(i, j).join(" ");
            line += " ".repeat(maxWidth - line.length);
        } else {
            let totalWordsLen = 0;

            for (let k = i; k < j; k++) {
                totalWordsLen += words[k].length;
            }

            let totalSpaces = maxWidth - totalWordsLen;
            let gaps = wordCount - 1;

            let spaceEach = Math.floor(totalSpaces / gaps);
            let extraSpaces = totalSpaces % gaps;

            for (let k = i; k < j; k++) {
                line += words[k];

                if (k < j - 1) {
                    let spaces = spaceEach;

                    // Left gaps get extra space
                    if (extraSpaces > 0) {
                        spaces++;
                        extraSpaces--;
                    }

                    line += " ".repeat(spaces);
                }
            }
        }

        res.push(line);
        i = j;
    }

    return res;
};