var isNumber = function(s) {
    let seenDigit = false;
    let seenDot = false;
    let seenExp = false;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch >= '0' && ch <= '9') {
            seenDigit = true;
        } 
        else if (ch === '+' || ch === '-') {
            // sign is valid only at start or just after e/E
            if (i !== 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') {
                return false;
            }
        } 
        else if (ch === '.') {
            // dot cannot appear after dot or exponent
            if (seenDot || seenExp) {
                return false;
            }
            seenDot = true;
        } 
        else if (ch === 'e' || ch === 'E') {
            // exponent needs digit before it, and only one exponent allowed
            if (seenExp || !seenDigit) {
                return false;
            }
            seenExp = true;
            seenDigit = false; // need digits after exponent
        } 
        else {
            return false;
        }
    }

    return seenDigit;
};




